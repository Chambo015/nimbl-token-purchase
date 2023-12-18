<template>
    <div class="relative h-full border border-[#420076] bg-[#0C0310]/50 backdrop-blur-sm">
        <div v-if="!user?.user" class="absolute inset-0 flex items-center justify-center">
            <UiNimblButton :loading="isLoading" @click="onAuthMetamask">
                <div class="flex items-center justify-center gap-4">
                    <IconsLogoMetamask />
                    <p class="font-batman text-xl text-[#D39BFF] max-md:text-base">CONNECT METAMASK</p>
                </div>
            </UiNimblButton>
        </div>
        <div v-else class="p-7 max-2xl:p-5">
            <div class="flex items-center">
                <div
                    class="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center bg-[#0075FF] max-2xl:h-[40px] max-2xl:w-[40px]">
                    <IconsUserSolid />
                </div>
                <p class="ml-4 truncate font-graphik text-xl text-white max-2xl:text-base">{{ user.user }}</p>
                <button
                    class="ml-auto flex h-[50px] w-[50px] items-center justify-center hover:drop-shadow-[0px_0px_6px_#C780FF] max-2xl:h-[40px] max-2xl:w-[40px]"
                    @click="user = null">
                    <IconsLogOut />
                </button>
            </div>
            <div v-if="!user.is_token_bought" class="mt-6 max-2xl:mt-4">
                <div class="relative flex justify-between bg-[#170A1C] py-3 pl-5 pr-2 max-2xl:py-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You pay</p>
                        <input
                            v-model.number="inputPay"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline w-full max-w-full bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none max-2xl:text-[26px]"
                            placeholder="0"
                            @input="convertNimbl" />
                    </div>
                    <div class="flex shrink-0 flex-col items-end">
                        <img src="/eth.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                        <p
                            :title="user.balanceETH.toString()"
                            class="mt-2 max-w-[135px] truncate text-right font-graphik text-lg text-white/50 hover:max-w-max max-2xl:text-base">
                            Balance: {{ user.balanceETH }}
                        </p>
                    </div>
                </div>
                <div class="relative mt-1.5 flex justify-between bg-[#170A1C] py-3 pl-5 pr-2 max-2xl:py-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You receive</p>
                        <input
                            v-model.number="inputReceive"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline w-full max-w-full bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none max-2xl:text-[26px]"
                            :class="[errorLimitBuy && 'text-red-500']"
                            placeholder="0"
                            @input="convertETH" />
                    </div>
                    <div class="flex shrink-0 flex-col items-end">
                        <img src="/nimbl-token.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                        <p
                            :title="user.nimbl_amount.toString()"
                            class="mt-2 max-w-[135px] truncate text-right font-graphik text-lg text-white/50 hover:max-w-max max-2xl:text-base">
                            Balance: {{ user.nimbl_amount }}
                        </p>
                    </div>
                    <div
                        class="absolute left-1/2 top-0 flex h-[50px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border-[6px] border-[#070309] bg-[#170A1C]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="none" viewBox="0 0 12 15">
                            <path
                                fill="#fff"
                                d="m7.014 14.52 4.741-4.741a.816.816 0 0 0 0-1.166.816.816 0 0 0-1.166 0l-3.342 3.342V.824A.83.83 0 0 0 6.423 0a.83.83 0 0 0-.824.824V11.94L2.256 8.613a.816.816 0 0 0-1.166 0 .85.85 0 0 0-.248.59c0 .218.077.42.248.591l4.758 4.757a.85.85 0 0 0 .59.249c.202-.031.42-.124.576-.28Z" />
                        </svg>
                    </div>
                    <div
                        v-if="errorLimitBuy"
                        class="absolute bottom-0 left-1/2 -translate-x-1/2 font-graphik text-red-500">
                        Max {{ MAX_BUY_NIMBL }} NIMBL
                    </div>
                </div>
            </div>
            <div v-if="user.is_token_bought" class="mt-7 flex justify-between overflow-hidden">
                <div class="flex flex-col items-start truncate font-batman text-lg">
                    <p class="text-blue-500">Purchased:</p>
                    <p class="truncate">{{ user.nimbl_amount }}</p>
                </div>
                <img src="/nimbl-token.png" alt="eth" width="122" height="55" class="shrink-0 max-2xl:w-[90px]" />
            </div>
            <div v-if="!user.is_token_bought" class="mt-4 flex items-center justify-center">
                <UiNimblButton size="md" :disabled="!ablePurchase || errorLimitBuy" @click="isOpenModal = true">
                    <p class="font-batman text-xl text-[#D39BFF]">PURCHASE</p>
                </UiNimblButton>
            </div>
            <div v-if="user.is_token_bought" class="mt-4 flex items-center justify-center">
                <UiNimblButton size="md" :disabled="!user.is_token_bought" @click="claim()">
                    <p class="font-batman text-xl text-[#D39BFF]">CLAIM TOKENS</p>
                </UiNimblButton>
            </div>
        </div>
        <Teleport to="body">
            <UiNimblModal v-if="isOpenModal">
                <div>
                    <button
                        class="absolute right-0 top-0 flex h-[50px] w-[50px] items-center justify-center hover:bg-black/20"
                        @click="isOpenModal = false">
                        <IconsIconClose class="h-9 w-9" />
                    </button>
                    <p class="text-center font-graphik text-lg text-white max-2xl:text-base">Review Swap</p>
                    <div class="mt-10 flex items-center justify-between px-8 max-md:w-[95vw]">
                        <div>
                            <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You pay</p>
                            <p class="font-batman text-3xl text-white max-2xl:text-xl">{{ inputPay }} ETH</p>
                            <!-- <p class="font-graphik text-xl text-white/50 max-2xl:text-base">$100.93</p> -->
                        </div>
                        <img src="/eth.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                    </div>
                    <div class="mt-7 flex items-center justify-between px-8">
                        <div>
                            <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You receive</p>
                            <p class="font-batman text-3xl text-white max-2xl:text-xl">{{ inputReceive }} nimbl</p>
                        </div>
                        <img src="/nimbl-token.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                    </div>
                    <ul class="mt-10 px-8 font-graphik [&>li]:text-lg [&>li]:max-2xl:text-base">
                        <li class="flex justify-between">
                            <span class="text-lg text-white/50">Rate</span>
                            <span>1 NMBL = &lt;0.0000062 ETH</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="text-lg text-white/50">Fee</span>
                            <span>0 NMBL</span>
                        </li>
                        <!-- <li class="flex justify-between">
                            <span class="text-lg text-white/50">Network cost</span>
                            <span class="eth_logo">$8.57</span>
                        </li> -->
                    </ul>
                    <div class="mx-auto my-4 flex w-[90%] items-center justify-center">
                        <UiNimblButton size="md" :disabled="!ablePurchase" @click="buy">
                            <p class="font-batman text-xl text-[#D39BFF]">PURCHASE</p>
                        </UiNimblButton>
                    </div>
                </div>
            </UiNimblModal>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import useMetamask from "~/composables/useMetamask";
import type {IUser} from "~/types";
import {MAX_BUY_NIMBL} from "~/constants/index";

const user = ref<IUser | null>(null);
const isLoading = ref(false);
const isOpenModal = ref(false);
const inputPay = ref<number | null>(null);
const inputReceive = ref<number | null>(null);
const errorLimitBuy = ref(false);

const {handleAuth, buyTokens, claimTokens} = useMetamask();

const onAuthMetamask = async () => {
    try {
        isLoading.value = true;
        const res = await handleAuth();
        if (res?.user) {
            user.value = res;
        }
        console.log("handleAuth", res);
    } catch (error) {
        alert(error);
    } finally {
        isLoading.value = false;
    }
};

const ablePurchase = computed(() => {
    if (typeof inputPay.value === "object") return false;
    if (typeof inputReceive.value === "object") return false;
    return inputPay.value > 0 && inputReceive.value > 0;
});

const convertNimbl = () => {
    if (inputPay.value) {
        errorLimitBuy.value = false;
        inputReceive.value = inputPay.value / 0.0000062;
        if (inputReceive.value < MAX_BUY_NIMBL) return;
        errorLimitBuy.value = true;
    }
};
const convertETH = () => {
    if (inputReceive.value) {
        errorLimitBuy.value = false;
        inputPay.value = inputReceive.value * 0.0000062;
        if (inputReceive.value < MAX_BUY_NIMBL) return;
        errorLimitBuy.value = true;
    }
};

const buy = async () => {
    if (typeof inputPay.value === "object") return false;
    if (typeof inputReceive.value === "object") return false;
    if (inputReceive.value > MAX_BUY_NIMBL) return false;

    isLoading.value = true;
    const successBuyTokens = await buyTokens(inputReceive.value, inputPay.value);

    console.log("successBuyTokens", successBuyTokens);
    isLoading.value = false;
};

const claim = async () => {
    const res = await claimTokens();
    console.log("claim", res);
};
</script>

<style scoped>
.eth_logo::before {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEyIDIwIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMzNDM0MzQiIGQ9Im01Ljk5OCAwLS4xMy40NTZWMTMuNjhsLjEzLjEzNCA1Ljk5OC0zLjYyOUw1Ljk5OCAwWiIvPjxwYXRoIGZpbGw9IiM4QzhDOEMiIGQ9Ik01Ljk5OCAwIDAgMTAuMTg1bDUuOTk4IDMuNjI5VjBaIi8+PHBhdGggZmlsbD0iIzNDM0MzQiIgZD0ibTUuOTk4IDE0Ljk3Ni0uMDc0LjA5MnY0LjcxMWwuMDc0LjIyTDEyIDExLjM1bC02LjAwMiAzLjYyN1oiLz48cGF0aCBmaWxsPSIjOEM4QzhDIiBkPSJNNS45OTggMjB2LTUuMDI0TDAgMTEuMzUgNS45OTggMjBaIi8+PHBhdGggZmlsbD0iIzE0MTQxNCIgZD0ibTUuOTk4IDEzLjgxNCA1Ljk5OC0zLjYyOS01Ljk5OC0yLjc5djYuNDE5WiIvPjxwYXRoIGZpbGw9IiMzOTM5MzkiIGQ9Im0wIDEwLjE4NSA1Ljk5OCAzLjYyOVY3LjM5NUwwIDEwLjE4NVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDEydjIwSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
    width: 12px;
    height: 20px;
    display: inline;
    margin-right: 7px;
    vertical-align: middle;
}
</style>
