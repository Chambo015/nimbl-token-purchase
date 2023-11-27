<template>
    <div class="h-[100lvh] overflow-hidden">
        <div class="relative z-10 mx-auto flex h-full items-center justify-center">
            <div class="container relative z-10 flex h-[calc(100lvh-40px)] gap-7 overflow-hidden">
                <!-- grid-cols-[620px_640px_500px] -->
                <div class="flex min-w-[450px] grow flex-col max-2xl:min-w-[400px]">
                    <div class="min-h-[200px] shrink-0 grow"><BoardMetamask /></div>
                    <div class="mt-7 max-h-[540px] grow overflow-hidden"><BoardTargetRaise /></div>
                </div>
                <div class="flex h-full max-w-[600px] shrink-0 flex-col justify-end max-2xl:max-w-[450px]">
                    <div class="grow overflow-hidden"><BoardNimblDescription /></div>
                    <div class="mt-7 shrink-0">
                        <NimblGridCards />
                    </div>
                </div>
                <div class="flex min-w-[26%] shrink-0 grow flex-col">
                    <NimblBanner />
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
    --line: rgba(154, 54, 247, 0.507);
    content: "";
    height: 100vh;
    width: 100vw;
    position: fixed;
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
    background: linear-gradient(180deg, #420076 0%, #8c98ff 50%, #420076 100%);
    border-radius: 15px;
}
</style>
