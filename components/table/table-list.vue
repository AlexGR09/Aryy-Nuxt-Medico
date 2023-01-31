<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      hide-default-footer
    >
      <template>
        <v-icon
          small
          class="mr-2"
        >
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
    <div class="text-right pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>

    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      page: 1,
        pageCount: 0,
        itemsPerPage: 10,
      headers:[
        {
          text:'Nombre completo',
          value: 'name'
        },
        {
          text: 'Teléfono',
          value: 'phone_number'
        },
        {
          text: 'Ultima cita',
          value: 'last_appointment'
        },
        {
          text: 'Status',
          value:'status'
        },
        {
          text: 'Acciones',
          value: 'actions'
        }
      ],
      items: [],
      

    }
  },
  methods: {
    GET_DATA(){
      this.$axios
        .get('/api/v1/physician/list-patients/',{
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((response) => {
          console.log(response)
      /* console.log(response.data.data[0].patient.full_name)
          console.log(response.data.data[0].patient.user_info.phone_number)
          console.log(response.data.data[0].last_appointment)
          console.log(response.data.data[0].status) */
    /*       this.items = response.data.data.patient((item) =>{
            return {
              full_name: item.full_name,
            }
          }) */
          const obj = response.data.data;
          const tamano = obj.length;
 
        //   Object.keys(obj).forEach(function(k){
        //     // console.log(obj[k].id)
        //       this.items = [
        //       {
        //         'last_appointment' : 'sddssd'
        //       }
        //     ]
        // });

      //   const objeto =   {
      //           // Le agregas la fecha
      //           name: "Foursquare",
      //           last_appoinment: 4,
      //  }

       for(let i=0; i<tamano; i++){
     
      const objeto =   {
                name: obj[i].patient.full_name,
                phone_number: obj[i].patient.user_info.phone_number,
                last_appointment : obj[i].last_appointment,
                status : obj[i].status,

       }
      this.items.push(objeto);
    } 

          // this.items = [
          //         {
          //           'last_appointment' : 'saas',
          //         }
          //   ]

          // Object.entries(obj).forEach(entry => {
          //   const [key] = entry;

          //  const res = entry[key];

          //   console.log(res)
     
          //   this.items = [
          //     {
          //       'last_appointment' : res.last_appointment,
          //       'status' : entry[key].status,
      
          //     }
              
          //   ]
   

          // });

          
       
        })
    },
    
  },

  mounted() {
    this.GET_DATA()
  },

}
</script>