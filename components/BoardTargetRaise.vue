<template>
    <div
        class="relative h-full w-full overflow-y-auto border border-[#420076] bg-[#0C0310]/50 px-6 py-8 backdrop-blur-sm max-2xl:px-4 max-2xl:py-6">
        <ul class="mb-7 max-2xl:mb-2 [&>li]:font-batman [&>li]:text-lg [&>li]:text-white/50 max-2xl:[&>li]:text-base">
            <li>
                <span>TARGET RAISE:</span>
                <span style="color: white"> $50.000</span>
            </li>
            <li>
                <span>VESTING:</span>
                <span style="color: white"> 4 months Linear</span>
            </li>
            <li>
                <span>TGE:</span>
                <span style="color: white"> 20%</span>
            </li>
        </ul>
        <NimblProgress :total="totalNimbl" />
        <ul class="mt-6 max-2xl:mt-1 [&>li]:font-batman [&>li]:text-lg [&>li]:text-white/50 max-2xl:[&>li]:text-base">
            <li><span>TOKEN TYPE:</span> <span style="color: white"> ERC-20</span></li>
            <li>
                <span>TOKEN ADDRESS:</span>
                <a
                    href="https://etherscan.io/token/0x4ac1d7358613894543e8ae0e1c9638d5403c795b"
                    target="_blank"
                    style="color: white">
                    $NIMBL</a
                >
            </li>
            <li>
                <span>TOTAL SUPPLY:</span>
                <span style="color: white"> 800.000.000 Nimbl</span>
            </li>
            <li>
                <span>INITIAL MARKET CAP:</span>
                <span style="color: white"> $378.125</span>
            </li>
        </ul>
        <!--  <p class="mt-7 font-batman text-lg text-white/50 max-2xl:mt-5 max-2xl:text-base">PRE-SALE DATE:</p>
        <p class="font-graphik text-xl text-white max-2xl:text-base">
            Sat, 25 Nov 2023 09:00 UTC - Wed, 29 Nov 2023 09:00 UTC
        </p> -->
    </div>
</template>

<script setup lang="ts">
import axios from "axios";

const totalNimbl = ref(0);

const getTotalNimbl = async () => {
    try {
        const res = await axios.get<{token_amount: number}>("https://api.nimbl.tv/en/api/marketplace/token/amount/");
        totalNimbl.value = res.data.token_amount / 10 ** 18;
    } catch (error) {
        console.log("error totalNimbl", error);
    }
};

onMounted(async () => {
    await getTotalNimbl();
});
</script>
