<template>
    <div>
        <div class="relative z-10 mx-auto flex justify-center">
            <div class="relative z-10 my-5 grid grid-cols-[620px_640px_500px] gap-9">
                <div>
                    <BoardMetamask />
                    <div class="mt-9" />
                    <BoardTargetRaise />
                </div>
                <div><BoardNimblDescription /></div>
                <div></div>
            </div>
            <!-- <p>Text</p>
                <p class="font-batman">Text Batman</p>
                <p class="font-graphik font-medium">Text graphik</p>
                 -->
            <div class="absolute inset-0 -z-0 bg-[url(noise.png)] opacity-50"></div>
        </div>
    </div>
</template>

<style>
body {
    background-image: url("/main-bg.png");
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    min-height: 100vh;
    min-height: 100lvh;
    overflow-x: hidden;
}
html {
    min-height: 100%;
}
</style>
