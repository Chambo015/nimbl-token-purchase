<template>
    <div class="w-full pb-[45px]">
        <div class="mb-2 flex justify-between gap-4">
            <p class="truncate font-batman text-lg text-white">{{ Math.round(totalNimbl) }} NIMBL</p>
            <p class="truncate font-batman text-lg text-white">3,636,364 NIMBL</p>
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
                class="relative z-10 h-[40px] bg-[#FCB809] shadow-[0px_0px_21px_0px_#FCB809] transition-all"
                :style="{width: `${percent.number.toFixed(0)}%`}">
                <div
                    class="absolute right-[-3px] top-[-2px] flex h-[200%] flex-col justify-end border-r border-[#FCB809] pr-1 pt-[40px] font-batman">
                    <p
                        class="text-right text-sm !leading-none text-[#FCB809]"
                        :class="[percent.number.toFixed(0) < 10 && 'translate-x-[115%]']">
                        {{ percent.number.toFixed(0) }} %
                    </p>
                    <p
                        class="text-right text-sm !leading-none text-[#FCB809]"
                        :class="[percent.number.toFixed(0) < 10 && 'translate-x-[115%]']">
                        SCORE
                    </p>
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
import gsap from "gsap";
const props = defineProps({
    total: {
        type: Number,
        default: 0,
        required: true,
    },
});

const totalNimbl = computed(() => (props.total ? 3636364 - props.total : 0));

const percent = reactive({
    number: 0,
});

watch(
    () => totalNimbl.value,
    (n) => {
        gsap.to(percent, {duration: 0.5, number: (Number(n) / 3636364) * 100 || 0});
    },
);

// const percent = computed(() => (totalNimbl.value / 3636364) * 100);

// 3636364
</script>
