<template>
    <div class="relative min-h-[450px] bg-[#0C0310]/50 ring-1 ring-[#420076] backdrop-blur-sm">
        <div v-if="!isAuth" class="absolute inset-0 flex items-center justify-center">
            <NimblButton @click="isAuth = !isAuth">
                <div class="flex items-center justify-center gap-4">
                    <IconsLogoMetamask />
                    <p class="font-batman text-xl text-[#D39BFF]">CONNECT METAMASK</p>
                </div>
            </NimblButton>
        </div>
        <div v-else class="p-7">
            <div class="flex items-center">
                <div class="relative flex h-[50px] w-[50px] items-center justify-center bg-[#0075FF]">
                    <IconsUserSolid />
                </div>
                <p class="ml-4 font-graphik text-xl text-white">0x19c....0b35c</p>
                <button class="ml-auto flex h-[50px] w-[50px] items-center justify-center">
                    <IconsLogOut />
                </button>
            </div>
            <div class="mt-6">
                <div class="relative flex justify-between bg-[#170A1C] py-3 pl-5 pr-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50">You pay</p>
                        <input
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline max-w-[350px] bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none"
                            placeholder="0" />
                    </div>
                    <div class="shrink-0">
                        <img src="/eth.png" alt="eth" width="122" height="55" />
                        <p class="mt-2 text-right font-graphik text-lg text-white/50">Balance: {{ 55 }}</p>
                    </div>
                </div>
                <div class="relative mt-1.5 flex justify-between bg-[#170A1C] py-3 pl-5 pr-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50">You receive</p>
                        <input
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline max-w-[350px] bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none"
                            placeholder="0" />
                    </div>
                    <div class="shrink-0">
                        <img src="/nimbl-token.png" alt="eth" width="122" height="55" />
                        <p class="mt-2 text-right font-graphik text-lg text-white/50">Balance: {{ 55 }}</p>
                    </div>
                    <div
                        class="absolute left-1/2 top-0 flex h-[50px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border-[6px] border-[#070309] bg-[#170A1C]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" fill="none" viewBox="0 0 12 15">
                            <path
                                fill="#fff"
                                d="m7.014 14.52 4.741-4.741a.816.816 0 0 0 0-1.166.816.816 0 0 0-1.166 0l-3.342 3.342V.824A.83.83 0 0 0 6.423 0a.83.83 0 0 0-.824.824V11.94L2.256 8.613a.816.816 0 0 0-1.166 0 .85.85 0 0 0-.248.59c0 .218.077.42.248.591l4.758 4.757a.85.85 0 0 0 .59.249c.202-.031.42-.124.576-.28Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mt-4 flex items-center justify-center">
                <NimblButton size="md">
                    <p class="font-batman text-xl text-[#D39BFF]">PURCHASE</p>
                </NimblButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const isAuth = ref(false);
</script>
