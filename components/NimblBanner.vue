<template>
    <div
        id="bannerWrap"
        class="group relative h-full overflow-hidden border-[5px] border-y-[20px] border-[var(--b-color)] bg-[#0C0310]/20 backdrop-blur-sm">
        <section class="max-3xl:pt-9 relative isolate -z-10 flex h-full flex-col justify-center">
            <div class="absolute bottom-[10%] flex flex-col items-center justify-center">
                <picture
                    ><source srcset="/token-coins.webp" type="image/webp" />
                    <img
                        src="/token-coins.png"
                        alt="tokenCoins"
                        width="618"
                        height="392"
                        class="relative z-10 mx-auto max-w-[70%] transition-all delay-200 duration-1000 will-change-[max-width] group-hover:max-w-[80%] group-hover:delay-0"
                /></picture>
                <picture
                    ><source srcset="/podium.webp" type="image/webp" />
                    <img
                        src="/podium.png"
                        alt="podium"
                        width="820"
                        height="170"
                        class="mx-auto max-w-[90%] opacity-90 mix-blend-darken transition-all delay-200 duration-1000 will-change-[max-width] group-hover:max-w-[100%] group-hover:delay-0"
                /></picture>
            </div>
            <div
                class="smoke-clouds absolute bottom-0 z-[3] h-[100%] w-full bg-[url('/fullWidthSmoke.webp')] bg-[length:110%_auto] bg-bottom bg-no-repeat">
                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud1 pointer-events-none absolute mix-blend-overlay"
                    alt="smoke-image1"
                    src="/smoke1.webp" />

                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud2 pointer-events-none absolute mix-blend-overlay"
                    alt="smoke-image2"
                    src="/smoke2.webp" />

                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud4 pointer-events-none absolute mix-blend-overlay"
                    alt="smoke-image4"
                    src="/smoke2.webp" />

                <img
                    width="1600"
                    height="850"
                    class="smoke-cloud3 pointer-events-none absolute mix-blend-overlay"
                    alt="smoke-image3"
                    src="/smoke3.webp" />

                <img
                    width="950"
                    height="444"
                    class="smoke-cloud7 pointer-events-none absolute mix-blend-overlay"
                    alt="smoke-image7"
                    src="/smokeCenter.webp" />
            </div>
            <!--   <div
                class="smoke-clouds absolute bottom-0 z-[3] hidden h-1/2 w-[150%] bg-[url('@/assets/preview/mobile_smoke.webp')] bg-[length:140%_auto] bg-bottom bg-no-repeat opacity-60 mix-blend-screen transition-opacity max-sm:block">
                <picture>
                    <source :srcset="smoke1Webp" type="image/webp" />
                    <img
                        width="1600"
                        height="850"
                        class="smoke-cloud1 absolute mix-blend-overlay pointer-events-none"
                        alt="smoke-image1"
                        :src="smoke1" />
                </picture>
                <picture>
                    <source :srcset="smoke2Webp" type="image/webp" />
                    <img
                        width="1600"
                        height="850"
                        class="smoke-cloud2 absolute mix-blend-overlay pointer-events-none"
                        alt="smoke-image2"
                        :src="smoke2" />
                </picture>
                <picture>
                    <source :srcset="smoke2Webp" type="image/webp" />
                    <img
                        width="1600"
                        height="850"
                        class="smoke-cloud4 absolute mix-blend-overlay pointer-events-none"
                        alt="smoke-image4"
                        :src="smoke2" />
                </picture>
                <picture>
                    <source :srcset="smoke3Webp" type="image/webp" />
                    <img
                        width="1600"
                        height="850"
                        class="smoke-cloud3 absolute mix-blend-overlay pointer-events-none"
                        alt="smoke-image3"
                        :src="smoke3" />
                </picture>
                <picture>
                    <source :srcset="centerSmokeWebp" type="image/webp" />
                    <img
                        width="950"
                        height="444"
                        class="smoke-cloud7 absolute mix-blend-overlay pointer-events-none"
                        alt="smoke-image7"
                        :src="centerSmoke"
                /></picture>
            </div> -->
        </section>
        <div class="absolute left-1/2 top-[5%] z-10 -translate-x-1/2">
            <img
                src="/logo-circle.webp"
                alt="nimbl logo"
                width="150"
                height="150"
                class="aspect-square w-[150px] max-2xl:w-[100px]" />
        </div>
        <div class="inner_shadow" />
    </div>
</template>

<script setup></script>

<style scoped>
#bannerWrap {
    --b-color: rgb(58, 3, 99);
}
.inner_shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    box-shadow: inset 0px 0px 11px 0px rgb(0, 0, 0);
}
#bannerWrap::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -15px;
    width: 50%;
    height: 9%;
    transform: skew(-20deg);
    background-color: var(--b-color);
    border-bottom-right-radius: 0.5rem;
    z-index: 40;
}
#bannerWrap::after {
    content: "";
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 66%;
    height: 8%;
    transform: skew(-20deg);
    background-color: var(--b-color);
    border-top-left-radius: 0.5rem;
    z-index: 40;
    filter: drop-shadow(0px 0px 13px black);
}

@keyframes wave {
    0% {
        transform: rotateZ(0deg) translate3d(0, 10%, 15px) rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg) translate3d(0, 10%, 15px) rotateZ(-360deg);
    }
}
@keyframes wave2 {
    0% {
        transform: rotateZ(0deg) translate3d(0, 1%, 15px) rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg) translate3d(0, 1%, 15px) rotateZ(-360deg);
    }
}
.smoke-cloud1 {
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
    display: block;
    left: -20%;
    bottom: 0;
    opacity: 0.2;
}
.smoke-cloud2 {
    left: -14%;
    bottom: -6%;
    opacity: 0.3;
    -webkit-animation: wave 9s 0.1s infinite linear;
    animation: wave 9s 0.1s infinite linear;
}
.smoke-cloud4 {
    right: -15%;
    bottom: -2%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
}
.smoke-cloud3 {
    right: -4%;
    bottom: -17%;
    opacity: 0.3;
    -webkit-animation: wave 7s 0.2s infinite linear;
    animation: wave 7s 0.2s infinite linear;
}
.smoke-cloud5 {
    right: -4%;
    bottom: -1%;
    opacity: 0.9;
    -webkit-animation: wave 6s 0.3s infinite linear;
    animation: wave 6s 0.3s infinite linear;
}
.smoke-cloud6 {
    left: -3%;
    bottom: -1%;
    opacity: 1;
    -webkit-animation: wave 7s 0.1s infinite linear;
    animation: wave 7s 0.1s infinite linear;
}
.smoke-cloud7 {
    left: 30%;
    bottom: 5%;
    opacity: 0.5;
    -webkit-animation: wave 8s 0.1s infinite linear;
    animation: wave 8s 0.1s infinite linear;
}
</style>
