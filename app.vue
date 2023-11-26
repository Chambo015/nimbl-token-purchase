<template>
    <div>
        <div class="relative z-10 mx-auto flex justify-center">
            <div class="relative z-10 my-5 grid grid-cols-[620px_640px_500px] gap-9">
                <div>
                    <BoardMetamask />
                    <div class="mt-9" />
                    <BoardTargetRaise />
                </div>
                <div>
                    <BoardNimblDescription />
                    <div class="mt-9">
                        <NimblGridCards />
                    </div>
                </div>
                <div>
                    <NimblBanner />
                </div>
            </div>
            <!-- <p>Text</p>
                <p class="font-batman">Text Batman</p>
                <p class="font-graphik font-medium">Text graphik</p>
                 -->
            <!-- <div class="fixed inset-0 -z-0 bg-[url(noise.png)] opacity-50"></div> -->
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
</style>
