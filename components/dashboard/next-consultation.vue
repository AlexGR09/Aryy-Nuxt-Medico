<template>
  <div>
    <v-card-subtitle rounded-r-0 class="pa-3 mt-n2 mb-n10">
        <h1 class="mb-5">CONSULTAS PRÓXIMAS</h1>
    </v-card-subtitle>
    <br/>
    <v-card>
      <v-col cols="12">
        <v-row class="mb-6" no-gutters>
          <v-col md="4">
           <p color="#7900ff">Fulanito Dental</p>
           <span class="date">21/Diciembre/2022 . 04:00 PM</span>
          </v-col>
          <v-col md="4" offset-md="4">
            <div class="text-right">
              <div class="my-2">
                <v-btn elevation="0" class="btn text--text" block small color="#f4edff">Cambiar fecha</v-btn>
              </div>
            </div>
            <div class="text-right">
              <div class="my-2">
                <v-btn elevation="0" class="btn_detail" block small  color="#7900ff" dark>Detalles</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default{
    data(){
        return{
            

        }
    },
}
</script>


<style>

.btn{
    text-transform: capitalize ;
}

.btn_detail{
    text-transform: capitalize ;
}

.text{
    font-family: 'Montserrat';
    font-size: 17px;
    color: #7900ff;
}

.date{
    font-family: 'Montserrat';
    font-size: 12px;
    color: #b3b3b3;
}
</style>