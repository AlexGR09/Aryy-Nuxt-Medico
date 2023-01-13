<template>
    <div>
        <v-card min-height="800px" flat class="pa-3 montserrat ">
            <v-card-title>ELIMINAR CUENTA</v-card-title>
            <v-card-subtitle>Al hacer click en continuar, estarás borrando permanentemente tu cuenta y todos los accesos
                serán revocados. Perderás acceso a todos los beneficios que aryy te ofrece.
                <br/> Este proceso es <b>permanente</b> y no se puede recuperar, deberás crear una cuenta nueva.
            </v-card-subtitle>
            <br/> <br/>
            <v-card-text >
                <h1>¿Estás seguro que quieres eliminar tu cuenta?</h1>
                <v-card-subtitle class="delete mb-4"><b>Perderás automáticamente acceso a tu cuenta y a todos los beneficios <br/>
                    que aryy ofrece. Este proceso es irreversible.</b>
                </v-card-subtitle>

                    <v-row class="d-flex justify-center ">
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="2">
                            <v-hover v-slot="{ hover }"><v-btn block :style="{ 'background-color': hover ? '#9966ff' : '#7900ff' }" class="white--text deletebtn" large>Cancelar</v-btn> </v-hover>
                        </v-col>
                        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="2">
                            <v-btn block color="#4f565f" class="deletebtn ml-2" large outlined>
                        Eliminar cuenta
                </v-btn>
                        </v-col>
                   
            
            </v-row>

            </v-card-text>
           
        </v-card>
    </div>
</template>
<style scoped>
h1 {
    font-family: MontserratMedium;
  text-align: center;
}
.v-card__subtitle.delete{
    text-align: center;
    color: #999999;
}
.deletebtn{
    font-family: Montserrat;
    text-transform: capitalize;
  /*   width: 12%; */
}
</style>