<template>
    <main class="main">
        <!-- <transition name="main__content"> -->
            <router-view></router-view>
        <!-- </transition> -->
    </main>
</template>

<script>
export default {
    name: 'Main'
}
</script>


<style lang="scss">
.main{
    padding: 10px;
    transition: 0.3s;
}

.main__content-enter
.main__content-leave-to{
    opacity: 0;
    // color: red;
}

.main__content-enter-to
.main__content-leave{
    opacity: 1;
//   color: rgb(202, 202, 207);
}

.main__content-enter-active
.main__content-leave-active{
    transition: opacity, transform 200ms ease-out;
}
</style>

