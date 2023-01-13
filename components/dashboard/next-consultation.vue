<template>
    <div>
      <v-card>
        <v-card-text class="position-relative">
          <!-- Title, Subtitle & Action Button -->
          <div class="d-flex justify-space-between flex-wrap">
            <div class="me-2 mb-2">
              <v-card-title color="#7900ff" class="nombre pt-0 px-0"> Fulanito Detal </v-card-title>
              <v-card-subtitle class="text-xs pa-0">
                21/Diciembre/2022 . 04:00 PM
              </v-card-subtitle>
            </div>
            <v-col
              cols="12"
              sm="6"
              md="6"
              order="1"
              order-lg="2"
            >
              <div>
                <v-btn  elevation="0" class="btn" block small   > Cambiar fecha </v-btn>
              </div>
              <div>
                <v-btn elevation="0" class="btn_detail mt-2" block small  color="#7900ff" dark > Detalles </v-btn>
              </div>
            </v-col>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </template>
  <style scoped>
  .btn{
    color: #7900ff;
    background: #7900ff;
  }
  .btn_detail{
      text-transform: capitalize ;
  }
  </style>