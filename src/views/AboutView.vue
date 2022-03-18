<template>
  <div class="about">
    <div>
      <img src="../assets/logo.png" alt="">
      <h2>Vue3</h2>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background-color: white;
  width: 980px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 20px 20px;
  
  padding: 20px 20px;
  div {
    background-color: cyan;
    border: 1px solid black;
    height: 319px;

    img {
      width: 100%;
      height: 220px;
    }


  }
}
</style>
