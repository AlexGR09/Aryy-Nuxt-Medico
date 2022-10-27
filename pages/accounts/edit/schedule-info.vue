<template>
    <div><v-row>
        <v-col md="1" lg="3" xl="2">
            <v-card flat
      max-width="155"
    >
    <v-list class="list-item" active-class="bgactive">
        <v-list-item-group
          v-model="selectedItem"
          color="#7900ff"
        >
          <v-list-item to="/accounts/edit/planner-info">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee" >CONSULTORIOS</v-list-item-title>
            </v-list-item-content >
          </v-list-item>
          <v-list-item to="/accounts/edit/schedule-info">
            <v-list-item-content active-class="bgactive">
              <v-list-item-title  class="titlee">HORARIOS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
        </v-col>
        <v-col md="10" lg="9" xl="10">
                

        </v-col>
    </v-row>
 
</div>
</template>
<script>
  export default {
    data () {
      return {
        selectedItem: 1,
      }
    },
  }
</script>

<style>

.bgactive{
  background: #7900ff;
  color: white !important;
  fill: white !important;
}
.list-item {
  margin-top: 1em;
}
.titlee {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  text-transform: unset !important;
  color: black;
}
.titlee:hover {

  color: #ffffff;
}
.v-list-item:hover {
  background: #7900ff;
}

.item-active {
  background-color: #7900ff;
  color: white !important;
}
  a{
      text-decoration: none !important;
    }
.save{
    font-family: Montserrat;
    text-transform: unset !important;
}
.restore{
    font-family: Montserrat;
    text-transform: unset !important;
}
.btn{
    font-family: Montserrat;
    text-transform: unset !important;
    color: #9966ff;
}
.textfield{
      height: 50px;
      width: 100%;
      font-size: .9rem;
      font-family: Montserrat;
    }
  H1{
    font-family: MontserratBold;
    font-size: 150%;
  }  
  span{
    font-family: Montserrat;
    font-size: 120%;
  }
</style>