<template>
    <div class="relative h-full border border-[#420076] bg-[#0C0310]/50 backdrop-blur-sm">
        <div v-if="!isAuth" class="absolute inset-0 flex items-center justify-center">
            <NimblButton @click="isAuth = !isAuth">
                <div class="flex items-center justify-center gap-4">
                    <IconsLogoMetamask />
                    <p class="font-batman text-xl text-[#D39BFF]">CONNECT METAMASK</p>
                </div>
            </NimblButton>
        </div>
        <div v-else class="p-7 max-2xl:p-5">
            <div class="flex items-center">
                <div
                    class="relative flex h-[50px] w-[50px] items-center justify-center bg-[#0075FF] max-2xl:h-[40px] max-2xl:w-[40px]">
                    <IconsUserSolid />
                </div>
                <p class="ml-4 font-graphik text-xl text-white max-2xl:text-base">0x19c....0b35c</p>
                <button
                    class="ml-auto flex h-[50px] w-[50px] items-center justify-center max-2xl:h-[40px] max-2xl:w-[40px]"
                    @click="isAuth = !isAuth">
                    <IconsLogOut />
                </button>
            </div>
            <div class="mt-6 max-2xl:mt-4">
                <div class="relative flex justify-between bg-[#170A1C] py-3 pl-5 pr-2 max-2xl:py-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You pay</p>
                        <input
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline w-full max-w-full bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none max-2xl:text-[26px]"
                            placeholder="0" />
                    </div>
                    <div class="shrink-0">
                        <img src="/eth.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                        <p class="mt-2 text-right font-graphik text-lg text-white/50 max-2xl:text-base">
                            Balance: {{ 55 }}
                        </p>
                    </div>
                </div>
                <div class="relative mt-1.5 flex justify-between bg-[#170A1C] py-3 pl-5 pr-2 max-2xl:py-2">
                    <div class="inline-flex flex-col justify-around">
                        <p class="font-graphik text-xl text-white/50 max-2xl:text-base">You receive</p>
                        <input
                            inputmode="numeric"
                            pattern="[0-9]*"
                            type="text"
                            class="inline w-full max-w-full bg-transparent font-batman text-[30px] uppercase !leading-none text-white outline-none max-2xl:text-[26px]"
                            placeholder="0" />
                    </div>
                    <div class="shrink-0">
                        <img src="/nimbl-token.png" alt="eth" width="122" height="55" class="max-2xl:w-[90px]" />
                        <p class="mt-2 text-right font-graphik text-lg text-white/50 max-2xl:text-base">
                            Balance: {{ 55 }}
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
