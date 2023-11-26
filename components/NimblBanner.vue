<template>
    <div
        id="bannerWrap"
        class="h-[770px] overflow-hidden border-4 border-y-[20px] border-[var(--b-color)] bg-[#0C0310]/50 backdrop-blur-sm"></div>
</template>

<script setup></script>

<style scoped>
#bannerWrap {
    --b-color: rgba(66, 0, 118, 0.5);
}
#bannerWrap::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -15px;
    width: 250px;
    height: 70px;
    transform: skew(-20deg);
    background-color: var(--b-color);
    border-bottom-right-radius: 0.5rem;
}
#bannerWrap::after {
    content: "";
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 350px;
    height: 60px;
    transform: skew(-20deg);
    background-color: var(--b-color);
    border-top-left-radius: 0.5rem;
}
</style>
