<template>
  <div class="text">
    {{text}}
    <img :src="src" />
  </div>
</template>>

<script>
import Src from './imgs/haha.png';
export default {
  data() {
    return {
      text: 'hello world',
      src: Src
    }
  }
}
</script>>

<style>
  .text {
    color:aqua;
  }
</style>>