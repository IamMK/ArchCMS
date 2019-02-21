<template>
    <main class="main">
            <router-view></router-view>
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
    width: 100%;
}
</style>

