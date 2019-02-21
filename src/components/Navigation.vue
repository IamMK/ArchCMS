<template>
    <aside class="navigation" id="navigation">
        <nav>
            <ul class="navigation__content">
                <li class="navigation__element"
                v-for="item in navigationElements"
                :key="item.id">
                <router-link :to="item.route">{{item.text}}</router-link>
                </li>
                <li class="navigation__element"><div @click="logOut">LogOut</div></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navigation',
    data(){
        return{
            navigationElements: [
                {id: 0, text: "About", route: "/about"},
                {id: 1, text: "Posts", route: "/posts"},
                {id: 2, text: "New post", route: "/new"},
            ]
        }
    },
    methods: {
        logOut: function(){
            firebase.auth().signOut().then(
                () => {
                this.$router.replace('login')
            })
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
        cursor: pointer;
    }
}

</style>


