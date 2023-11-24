<template>
    <div class="w-full pb-[45px]">
        <div class="mb-2 flex justify-between gap-4">
            <p class="truncate font-batman text-lg text-white">540.000 NIMBL</p>
            <p class="truncate font-batman text-lg text-white">6.000.000 NIMBL</p>
        </div>
        <div class="relative isolate mb-[2px] h-[5px] border-b border-white">
            <span class="absolute bottom-0 left-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute bottom-0 right-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute bottom-0 left-1/4 z-20 h-[5px] w-px bg-white" />
            <span class="absolute bottom-0 right-1/4 z-20 h-[5px] w-px bg-white" />
            <span class="absolute bottom-0 right-1/2 z-20 h-[5px] w-px bg-white" />
            <span class="absolute inset-x-0 bottom-[70%] h-[1px] w-full bg-[#464646]" />
        </div>
        <div class="relative isolate">
            <div
                class="relative z-10 h-[40px] bg-[#FCB809] shadow-[0px_0px_21px_0px_#FCB809]"
                :style="{width: `${percent}%`}">
                <div
                    class="absolute right-[-3px] top-[-2px] flex h-[200%] flex-col justify-end border-r border-[#FCB809] pr-1 pt-[40px] font-batman">
                    <p class="text-right text-sm !leading-none text-[#FCB809]">{{ percent }} %</p>
                    <p class="text-right text-sm !leading-none text-[#FCB809]">SCORE</p>
                </div>
            </div>
            <div class="absolute left-1/2 top-1/2 -z-0 h-px w-[102%] -translate-x-1/2 -translate-y-1/2 bg-[#464646]" />
        </div>
        <div class="relative isolate mt-[2px] h-[5px] border-t border-white">
            <span class="absolute left-0 top-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute right-0 top-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute left-1/4 top-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute right-1/4 top-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute right-1/2 top-0 z-20 h-[5px] w-px bg-white" />
            <span class="absolute inset-x-0 top-[70%] h-[1px] w-full bg-[#464646]" />
        </div>
    </div>
</template>

<script setup>
const percent = ref(25);
</script>
