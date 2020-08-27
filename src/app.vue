<template>
  <div class="text">
    {{text}}
    <img src="./imgs/haha.png"/>
  </div>
</template>>

<script>
export default {
  data() {
    return {
      text: 'hello world'
    }
  }
}
</script>>

<style>
  .text {
    color:aqua;
    background: url('./imgs/haha.png');
  }
</style>>