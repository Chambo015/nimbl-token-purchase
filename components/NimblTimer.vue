<template>
    <div
        class="relative isolate h-[256px] overflow-hidden max-2xl:h-[200px] max-md:fixed max-md:inset-x-0 max-md:bottom-[-50px] max-md:h-[170px]">
        <div id="waves">
            <div class="wave wave--back max-md:opacity-80">
                <div class="water">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
                    </svg>
                </div>
                <div class="water">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
                    </svg>
                </div>
            </div>
            <div class="wave wave--front">
                <div class="water">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
                    </svg>
                </div>
                <div class="water">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 32" preserveAspectRatio="none">
                        <title>wave2</title>
                        <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
                    </svg>
                </div>
            </div>
        </div>
        <p
            class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center font-batman text-[36px] max-2xl:text-[28px]" >
            18.12.2023 16:00 PM UTC
        </p>
    </div>
</template>

<script setup></script>

<style scoped>
.waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.4s transform ease;
    transform-origin: bottom center;
}
@media (min-width: 500px) {
    .waves {
        border-radius: 5px;
    }
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: wave 1.6s linear infinite;
}
.wave--front {
    z-index: 2;
    color: #420076;
}
.wave--back {
    z-index: 1;
    color: #230b35;
    animation-direction: reverse;
    animation-duration: 4s;
}

.water {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: linear-gradient(to bottom, #420076 0%, #050505bb 100%);
}
.water svg {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 99.9%;
}

.water:first-of-type {
    transform: translate(-99.7%, 0);
}
.water:first-of-type svg {
    bottom: calc(99.9% - 0.7px);
}

svg {
    fill: currentColor;
}

@keyframes wave {
    0% {
        transform: translate3d(0, 0, 0);
    }
    50% {
        transform: translate3d(50%, 0.5em, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
}
</style>
