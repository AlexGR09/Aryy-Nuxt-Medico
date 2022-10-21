 <template>
  <v-card 
    class="mx-auto rounded-xl" 
    color="#fff" 
    dark 
    max-width="500"
    >
    <v-card-text class="v-card-text">
      <span class="span-title">{{title}}</span>
    </v-card-text>
    <v-card-title class="v-card-title text-h5 ">
      {{name}}
    </v-card-title>
    <v-card-subtitle class="v-card-subtitle">
        {{date}} <br>
        {{time}} HRS
      </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'DashboardCitas',
  data: () => ({
    //
    title:'cita proxima',
    name: 'Fulanito detal',
    date:'05/ Diciembre /2022',
    time:'10:00'
  }),
}
</script>

<style>
/* importamos fuentes */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

.v-card-text{
  font-family: 'MontserratBold';
  font-size: 20px;
}
.span-title{
  color: #4f565f;
  text-transform: uppercase;
}

.v-card-title{
  font-family: 'MontserratMedium';
  color:#9966ff;
}

v-card-subtitle{
  font-family: 'MontserratMedium';
  color: #4f565f;
}
</style> 

