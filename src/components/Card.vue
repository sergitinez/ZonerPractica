<template>
  <div>
      <b-card
        :title="titulo"
        :img-src="srcimg"
        img-top
        :footer="precio"
        tag="producto"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{texto}}
        </b-card-text>

        <b-button
          v-b-tooltip.hover
          title="Ir a la página del producto"
          variant="primary"
          :href="url"
          >COMPRAR</b-button>

      </b-card>

      
  </div>
</template>

<script>
export default {
  props: ["id", "precio", "titulo", "srcimg", "texto", "url"]
};
</script>

<style scoped></style>