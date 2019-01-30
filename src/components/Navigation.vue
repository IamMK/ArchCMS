<template>
    <aside class="navigation" id="navigation">
        <nav>
            <ul class="navigation__content">
                <li class="navigation__element"
                v-for="item in navigationElements"
                :key="item.id">
                <router-link :to="item.router">{{item.text}}</router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return{
            navigationElements: [
                {id: 0, text: "About", router: "/"},
                {id: 1, text: "Posts", router: "/posts"},
                {id: 2, text: "New post", router: "/new"}
            ]
        }
    }
}
</script>

<style lang="scss">
.navigation{
    background-color: #133342;
    width: 100vw;
    padding-bottom: 20px;
    opacity: 0;
    visibility: hidden;
    transition: .15s;
    height: 0;
    &--visible{
        opacity: 1;
        visibility: visible;
        height: auto;
    }
    &__content{
        color: #FF6D37;
        font-size: 0px;
    }
    &__element{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
}

</style>


