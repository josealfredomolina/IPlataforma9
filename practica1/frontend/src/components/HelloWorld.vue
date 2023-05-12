<template>
  <h1>SERIES MÁS VISTOS EN LAS ÚLTIMAS DÉCADAS</h1>


  <div>

  </div>

  <table class="table">
  <thead>
    <tr class="p-3 mb-2"  >
      <th  scope="col">ID</th>
      <th scope="col">Nombres Series </th>
      <th scope="col">Clasificación</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border border-primary" v-for="(item, index) in series" :key="index">
      <th  scope="row" > {{ item.id }} </th>
      <td >{{ item.nombre }}</td>
      <td >{{ item.clasificacion }}</td>
    </tr>

  </tbody>
</table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  created(){
     axios.get('http://localhost:8080/series').then(response => this.series = response.data.series)
  },  
  data() {
      return {
        series: []
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
