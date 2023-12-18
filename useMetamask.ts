import {ethers} from "ethers";
import axios from "axios";
import {MARKETPLACE_ABI, NIMBL_ABI} from "~/constants";
import type {IUser} from "~/types";

declare global {
    // eslint-disable-next-line no-var
    var ethereum: any;
}

const marketplaceAddress = "0x9BC8Bc8cD77aCa59a4fC21d0E19CA5df013e2695";
const nimblAddress = "0x4aC1D7358613894543e8AE0E1c9638d5403C795b";
let marketplaceContract = new ethers.Contract(marketplaceAddress, MARKETPLACE_ABI); // ethers.BaseContract
let nimblContract = new ethers.Contract(nimblAddress, NIMBL_ABI);

const useMetamask = () => {
    const isLoading = ref(false);
    const userMetamask = ref<IUser | null>(null);

    const handleApiPost = async (endpoint: string, params: any, token?: string) => {
        const result = await axios.post(endpoint, params, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        return result.data;
    };

    const requestMessage = (account: any, chain: any) =>
        handleApiPost("https://api.nimbl.tv/en/api/request_message/", {
            address: account,
            chain,
            network: "evm",
        });

    const verifyMessage = (message: any, signature: any) =>
        handleApiPost("https://api.nimbl.tv/en/api/market/verify_message/", {
            message,
            signature,
            network: "evm",
        });

    const connectToMetamask = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
                const provider = new ethers.BrowserProvider(window.ethereum, "any");

                const [accounts, chainId]: string[] = await Promise.all([
                    provider.send("eth_requestAccounts", []),
                    provider.send("eth_chainId", []),
                ]);

                const signer = await provider.getSigner();
                const balanceETH = await provider.getBalance(accounts[0]);

                return {signer, chain: chainId, account: accounts[0], balanceETH};
            } catch (error) {
                throw new Error((error as Error).message);
                console.error("User denied account access", error);
            }
        } else {
            console.error("Ethereum wallet not detected");
            throw new Error("Ethereum wallet not detected");
        }
    };

    const handleAuth = async () => {
        try {
            const resolveFromMetamask = await connectToMetamask();
            if (!resolveFromMetamask) return;
            const {signer, chain, account, balanceETH} = resolveFromMetamask;

            // Contract connect
            marketplaceContract = marketplaceContract.connect(signer) as any;
            nimblContract = nimblContract.connect(signer) as any;

            console.log("account", account, "chain", chain);

            if (!account) {
                throw new Error("No account found");
            }
            /* && chain === "0x1" */
            if (!chain || chain !== "0x1") {
                throw new Error("No chain found or You need to change to ETH chain");
            }

            const {message} = await requestMessage(account, chain);
            const signature = await signer.signMessage(message);
            const res = await verifyMessage(message, signature);

            if (res.user) {
                const amountInWei = ethers.formatEther(balanceETH.toString());
                userMetamask.value = res as IUser;
                const computedNimbl = await nimblContract.balanceOf(userMetamask.value.user);
                const isTokenBought = await checkUserTokens();
                return {
                    ...res,
                    balanceETH: amountInWei,
                    nimbl_amount: Number(computedNimbl) / 10 ** 18,
                    is_token_bought: isTokenBought,
                } as IUser;
            } else {
                alert("authentication error");
            }
        } catch (e) {
            alert("authentication error");
            throw new Error((e as Error).message);
        }
    };

    const buyTokens = async (token: number, eth: number) => {
        try {
            if (!userMetamask.value) return;
            isLoading.value = true;
            const computedToken = ethers.parseEther(token.toFixed(18));
            let computedEth = ethers.parseEther(eth.toFixed(18));
            const ethAmount = computedToken * ethers.parseEther(String(6200000000000)) / ethers.parseEther(String(10**18));
            if(ethAmount - computedEth < 0){
                computedEth += (ethAmount - computedEth)
            }
            try {
                await marketplaceContract.swapTokens(computedToken, {value: computedEth});
            } catch (error) {
                console.log("error swapTokens swapTokens", error);
            }

            const res = await handleApiPost(
                "https://api.nimbl.tv/en/api/marketplace/token/buy/",
                {
                    token_quantity: token,
                },
                userMetamask.value.token,
            );

            return res;
        } catch (error) {
            console.error("error buy Tokens", error);
        } finally {
            isLoading.value = false;
        }
    };

    const claimTokens = async () => {
        try {
            await marketplaceContract.releaseTokens();
            return true;
        } catch (error) {
            console.log("error claimTokens", error);
            return false;
        }
    };

    const checkUserTokens = async () => {
        try {
            const res = await marketplaceContract.userInfos(userMetamask.value?.user);
            console.log("userInfos", Number(res[1]));
            if (Number(res[1]) === 0) return false;
            return true;
        } catch (error) {
            console.log("error userInfos");
        }
    };

    return {
        handleAuth,
        isLoading,
        buyTokens,
        claimTokens,
        checkUserTokens,
    };
};

export default useMetamask;
