<template>
    <button class="relative isolate" :class="[size === 'md' ? 'h-[102px] w-[335px]' : ' h-[115px] w-[377px]']">
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none bg-[#0F001C]"
            :class="[size === 'md' ? 'h-[94.5px] w-[329px]' : ' h-[108px] w-[376px]']">
            <svg
                width="376"
                height="108"
                viewBox="0 0 376 108"
                fill="none"
                class="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true">
                <path
                    d="M16 1H15.6419L15.3653 1.22727L1.36526 12.7273L1 13.0273V13.5V95V95.486L1.38218 95.7863L15.3822 106.786L15.6541 107H16H360H360.346L360.618 106.786L374.618 95.7863L375 95.486V95V13.5V13.0273L374.635 12.7273L360.635 1.22727L360.358 1H360H16Z"
                    stroke="#8F00FF"
                    stroke-width="2" />
            </svg>
            <svg
                width="373"
                height="104"
                viewBox="0 0 373 104"
                class="absolute left-1/2 top-1/2 h-[97%] w-[98%] -translate-x-1/2 -translate-y-1/2"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1289_166)">
                    <path d="M18 5L5.23947 15.3942V89.0577L18 99H349.239L362 89.0577" stroke="#8F00FF" />
                </g>
                <g filter="url(#filter1_d_1289_166)">
                    <path d="M355.239 99L368 88.6058V14.9423L355.239 5H24.2605L11.5 14.9423" stroke="#8F00FF" />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1289_166"
                        x="0.739471"
                        y="0.612305"
                        width="365.568"
                        height="102.888"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.559322 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1289_166" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1289_166" result="shape" />
                    </filter>
                    <filter
                        id="filter1_d_1289_166"
                        x="7.19269"
                        y="0.5"
                        width="365.307"
                        height="102.888"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.559322 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1289_166" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1289_166" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
        <span class="relative z-10">
            <slot />
        </span>
        <div
            aria-hidden="true"
            class="absolute right-0 top-0 h-[5px] w-[5px] rounded-full bg-[#C780FF] drop-shadow-[0px_0px_4px_#C780FF]" />
        <div
            aria-hidden="true"
            class="absolute left-0 top-0 h-[5px] w-[5px] rounded-full bg-[#C780FF] drop-shadow-[0px_0px_4px_#C780FF]" />
        <div
            aria-hidden="true"
            class="absolute bottom-0 left-0 h-[5px] w-[5px] rounded-full bg-[#C780FF] drop-shadow-[0px_0px_4px_#C780FF]" />
        <div
            aria-hidden="true"
            class="absolute bottom-0 right-0 h-[5px] w-[5px] rounded-full bg-[#C780FF] drop-shadow-[0px_0px_4px_#C780FF]" />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    size: "md" | "sm";
}>();
</script>
