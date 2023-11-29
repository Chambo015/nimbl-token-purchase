<template>
    <div class="h-[100lvh] overflow-hidden max-md:overflow-auto">
        <div class="relative z-10 mx-auto flex h-full items-center justify-center">
            <div
                class="relative z-10 flex h-[calc(100lvh-40px)] w-[95vw] gap-7 overflow-hidden max-lg:flex-col max-md:h-screen max-md:w-screen max-md:overflow-auto max-md:overflow-x-hidden max-md:p-4 max-md:pb-20">
                <!-- grid-cols-[620px_640px_500px] -->
                <div class="flex min-w-[450px] grow flex-col max-2xl:min-w-[400px] max-md:min-w-full">
                    <div class="min-h-[200px] shrink-0 grow"><BoardMetamask /></div>
                    <div class="mt-7 max-h-[540px] grow overflow-hidden"><BoardTargetRaise /></div>
                </div>
                <div
                    class="flex h-full max-w-[600px] shrink-0 flex-col justify-end max-2xl:max-w-[450px] max-md:h-auto">
                    <div class="grow overflow-hidden max-md:overflow-auto"><BoardNimblDescription /></div>
                    <div class="mt-7 shrink-0">
                        <NimblGridCards />
                    </div>
                </div>
                <div class="flex min-w-[26%] shrink-0 grow flex-col">
                    <div class="h-full max-md:hidden"><NimblBanner /></div>
                    <div class="mt-7"><NimblTimer /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    /* background-image: url("/main-bg.png");
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat; */
    color: white;
    min-height: 100vh;
    min-height: 100lvh;
    overflow-x: hidden;
    background-color: hsl(0 0% 2%);
}
@property --a {
    syntax: "<angle>";
    inherits: false;
    initial-value: -15deg;
}
body::before {
    --line: rgba(154, 54, 247, 0.7);
    content: "";
    height: 100vh;
    width: 100vw;
    position: fixed;
    scroll-behavior: smooth;
    background:
        linear-gradient(90deg, var(--line) 1px, transparent 1px 10vmin) 0 -5vmin / 10vmin 10vmin,
        linear-gradient(var(--line) 1px, transparent 1px 10vmin) 0 -5vmin / 10vmin 10vmin;
    mask: linear-gradient(var(--a), transparent 30%, white);
    top: 0;
    z-index: -1;
    animation: animation-mask-body 14s linear infinite;
}
html {
    min-height: 100%;
    scroll-behavior: smooth;
}
@keyframes animation-mask-body {
    0% {
        --a: 0deg;
    }
    100% {
        --a: 360deg;
    }
}

::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00000086 0%, #b0b2c4 50%, #00000081 100%);
    border-radius: 15px;
}
</style>
