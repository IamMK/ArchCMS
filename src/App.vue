<template>
  <div class="container">
    <Header></Header>
    <div class="row">
      <MenuButton></MenuButton>
      <Navigation></Navigation>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import MenuButton from './components/MenuButton'

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Main,
    MenuButton
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  font-size: 15px;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

