<template>
    <div>
      <v-data-table @click:row="handleClick"
        :headers="headers"
        :items="items"
        :items-per-page="5"
        hide-default-footer
      >
        <template #v-icon>
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
        user:'',
        apps:'',
        users:'',
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

            for (this.users in response.data.data) {
                this.$router.replace('/medical-record/'+this.users.id);
    }
        
           /*  this.users = response.data.data[0] */
      /*      this.users=response.data.data[index] */
           this.user=response.data.data[0]
          
            const obj = response.data.data;
            const tamano = obj.length;
         for(let i=0; i<tamano; i++){
       
        const objeto =   {
                  name: obj[i].patient.full_name,
                  phone_number: obj[i].patient.user_info.phone_number,
                  last_appointment : obj[i].last_appointment,
                  status : obj[i].status,
  
         }
        this.items.push(objeto);
      } 
          })
      },

      handleClick() {
     /*   this.$router.replace('/medical-record/'+this.users.id); */
     
        
},
      
    },
  
    mounted() {
      this.GET_DATA()
    },
  
  }
  </script>