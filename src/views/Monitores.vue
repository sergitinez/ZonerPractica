<template>
  <div>

    <h1 class="pb-2" style="color: white">
     MONITORES
     </h1>  
      <p style="color: white">Encuentra nuestros mejores <strong>Monitores Gaming</strong> para tu Set Up.</p>
        

      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="producto in productos" :key="producto.id">
             <Card :precio="producto.precio" :srcimg="producto.srcimg" :titulo="producto.titulo" :texto="producto.texto" :url="producto.url"></Card> 
            </div>
           </b-card-group>
       </div>

 </div>

</template>

<script>
import Card from '../components/Card.vue' 

const lstProysJson = '../Monitores.json';
export default {
  props: {  
   name: {
      type: String,
      default: 'Monitores'
    }
  },
  components: {
        Card
      },
  data() {
      return {
        productos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },

    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.productos=val;
          console.log(val);
        }

    }
  }
</script>