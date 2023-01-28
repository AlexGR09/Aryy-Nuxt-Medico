<template>
  <v-card>
  <v-item>
    <p>{{ appointment_date[0] }}</p>
  </v-item>
  </v-card>    
</template>

<script>
export default{

  prop: [],
    data(){
  /*       const string = this.appointment_date
            const array  = string.split('');
            console.log(array) */
        return{
            appointment_date:null,
            duration_treatment: null,
            medical_appoiintmen: null,
           
            note: null,
            prescription: null,
          
            patient_id: null,
            patiend_name: null,
            status: null,
            vital_sig_if: null,
            symptom: null,
            diagnosis: null,
            medical_examition: null,
            brand: null,
            amount: null,
            drug_name: null,
            frequency: null,
            instruction: null,
            presentation: null,
            cabinet_studies: null,
        }
    },
    
    methods: {
        
       
        GET_DATA(){
/* 
            const appointment_date = ''
            const hola = appointment_date.split(' ')
           alert(hola)
             */
            this.$axios
                .get('https://app.aryymd.com/api/v1/physician/medical-appointments/patient/1',{
                    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
                })
                .then((res) =>{
                   /*  alert(res.data.data[0].duration_treatment) */
                    this.medical_appointment_id = res.data.data[0].medical_appoiintmen
                    this.patient_id = res.data.data[0].patient_id
                    this.patient_name = res.data.data[0].patient_name
                    this.status = res.data.data[0].status
                    this.note = res.data.data[0].note
                    this.prescription = res.data.data[0].prescription
                    this.patient_id = res.data.data[0]
                    this.appointment_date = res.data.data[0].appointment_date.split('-')
                    this.duration_treatment = res.data.data[0].duration_treatment
                    console.log(res.data.data[0].status)
                    console.log(res.data.data[1].prescription.diagnosis)
                })
        }, 
    },
    mounted() {
        this.GET_DATA()
    },
 
}
</script>