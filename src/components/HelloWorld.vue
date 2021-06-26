<template>
  <div class="card" style="width: 18rem;">
    <img src="@/assets/logo.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

axios.get('/api/node/all')
  .then((res) => {
    // 处理成功情况
    console.log(res)
  })
  .catch((err) => {
    // 处理错误情况
    console.log(err)
  })
  .then(() => {
    // 总是会执行
  })

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
