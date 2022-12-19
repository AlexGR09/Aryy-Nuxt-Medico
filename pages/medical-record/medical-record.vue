<template>
  <div>
    <v-row>
      <v-col xl="9">
        <H1 class="title">INFORMACIÓN BÁSICA</H1>
        <basic-info />
      </v-col>
      <v-col xl="3">
        <H1 class="title">NOTAS INTERNAS</H1>
        <v-card background="gray">
          <v-card-text>
            <v-textarea
            outlined
            color="#7900ff"
            height="213px"
              no-resize
              background-color="grey lighten-2"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import basicInfo from './cards/basic-info.vue'
export default {
  components: {
    basicInfo,
  },
  layout: 'medicalRecord',
}
</script>
<style scoped>
.title {
  font-family: MontserratBold !important;
  color: #4f565f;
  font-size: 100% !important;
}
</style>