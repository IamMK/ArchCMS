<template>
    <div class="menu__button" @click="toggleMenuVisibility">&gt;</div>
</template>

<script>
export default {
    name: 'MenuButton',
    methods: {
        toggleMenuVisibility: (event) => {
            event.target.classList.toggle('menu__button--active')
            document.getElementById('navigation').classList.toggle('navigation--visible')
        }
    }
}
</script>


<style lang="scss">
.menu__button{
  width: 35px;
  height: 35px;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: 0.3s;
  &--active{
    transform: rotate(180deg);
  }
}
</style>

