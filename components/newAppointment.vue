<!-- Card para crear cita en calendario | Genesis -->
<template>
  <v-card>
    <v-card-title>CITA NUEVA</v-card-title>
    <v-alert
      v-if="error"
      style="font-family: Montserrat"
      dense
      outlined
      type="error"
    >
      Campos vacíos, <strong>vuelva a intentarlo.</strong>
    </v-alert>
    <v-alert
      v-if="bad"
      style="font-family: Montserrat"
      dense
      outlined
      type="error"
    >
      Datos incorrectos, <strong>verifique.</strong>
    </v-alert>
    <v-card-text>
      <v-row class="montserrat">
        <v-col xl="4">
          <p>Paciente*</p>
          <v-text-field
            v-model="patient"
            color="#7900ff"
            hide-details
            outlined
            placeholder="Escribe el nombre del paciente"
          ></v-text-field>
        </v-col>
        <v-col xl="4">
          <p>Teléfono*</p>
          <v-text-field
            v-model="phone"
            color="#7900ff"
            hide-details
            outlined
            placeholder="+52"
          >
            <template #prepend-inner>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0; margin-top: -2px"
                  max-height="25"
                  max-width="25"
                  :src="require('@/assets/icons/iconos_MXN.svg')"
                />
              </div>
            </template>
          </v-text-field>
        </v-col>
        <v-col xl="4">
          <p>Teléfono de emergencia*</p>
          <v-text-field
            v-model="emergency_phone"
            color="#7900ff"
            hide-details
            outlined
            placeholder="+52"
          >
            <template #prepend-inner>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0; margin-top: -2px"
                  max-height="25"
                  max-width="25"
                  :src="require('@/assets/icons/iconos_MXN.svg')"
                />
              </div>
            </template>
          </v-text-field>
        </v-col>

        <v-col xl="4">
          <p>Consultorio*</p>
          <v-autocomplete
            v-model="facilitie"
            color="#7900ff"
            hide-details
            outlined
            placeholder="Nombre del consultorio"
          >
            <template #append>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0"
                  max-height="20"
                  max-width="20"
                  :src="require('@/assets/icons/icon_arrowDown.svg')"
                />
              </div> </template
          ></v-autocomplete>
        </v-col>
        <v-col xl="4">
          <p>Fecha de la cita*</p>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="#9966ff"
                class="mb-n9"
                outlined
                v-model="date"
                placeholder="Selecciona la fecha"
                v-bind="attrs"
                v-on="on"
              >
                <template #append>
                  <div style="width: 30px">
                    <v-img
                      style="margin: auto 0"
                      max-height="25"
                      max-width="22"
                      :src="require('@/assets/icons/iconos_citas.svg')"
                    />
                  </div>
                </template>
              </v-text-field>
            </template>
            <v-date-picker
              locale="MX-ES"
              color="#9966ff"
              v-model="date"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text class="btn" color="#7900ff" @click="modal = false">
                Cancelar
              </v-btn>
              <v-btn
                text
                class="btn"
                color="#7900ff"
                @click="$refs.dialog.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col xl="4">
          <p>Horario*</p>
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="#9966ff"
                outlined
                v-model="time"
                placeholder="Selecciona el horario"
                class="mb-n9"
                v-bind="attrs"
                v-on="on"
              >
                <template #append>
                  <div style="width: 30px">
                    <v-img
                      style="margin: auto 0"
                      max-height="20"
                      max-width="20"
                      :src="require('@/assets/icons/icon_arrowDown.svg')"
                    />
                  </div> </template
              ></v-text-field>
            </template>
            <v-time-picker
              color="#9966ff"
              v-if="modal2"
              v-model="time"
              full-width
            >
              <v-spacer></v-spacer>
              <v-btn class="btn" text color="#9966ff" @click="modal2 = false">
                Cancelar
              </v-btn>
              <v-btn
                class="btn"
                text
                color="#9966ff"
                @click="$refs.dialog.save(time)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col xl="4">
          <p>Servicio*</p>
          <v-autocomplete
            v-model="service"
            hide-details
            color="#7900ff"
            outlined
            placeholder="Escribe el tipo de servicio"
          >
            <template #append>
              <div style="width: 30px">
                <v-img
                  style="margin: auto 0"
                  max-height="20"
                  max-width="20"
                  :src="require('@/assets/icons/icon_arrowDown.svg')"
                />
              </div> </template
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-btn
        height="50px"
        class="white--text btn save mt-7"
        color="#7900ff"
        large
        ><span>Guardar cambios</span></v-btn
      >
      <v-btn
        height="50px"
        class="restore btn ml-3 mt-7"
        color="#999999"
        outlined
        large
        ><span class="grey--text">Restaurar todo</span></v-btn
      >
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      patient: '',
      phone: '+52',
      emergency_phone: '+52',
      facilitie: '',
      time: '',
      service: '',
      error: '',
      bad: '',
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      modal2: false,
    }
  },
  watch: {
    empty() {
      if (this.patient === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }

      if (this.phone === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }

      if (this.emergency_phone === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }

      if (this.facilitie === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }
      if (this.date === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }
      if (this.time === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }
      if (this.service === null) {
        this.error = 'error'
      } else {
        this.error = ''
      }
    },
    error() {
      if (this.phone.length < 13) {
        this.bad = 'bad'
      } else {
        this.bad = ''
      }
      if (this.emergency_phone.length < 13) {
        this.bad = 'bad'
      } else {
        this.bad = ''
      }
    },
  },
}
</script>
<style scoped>
p {
  font-family: MontserratMedium;
  font-size: 110%;
  color: #999999;
  margin-bottom: 4px;
}
.v-card > .v-card__title {
  font-size: 1.1rem;
  font-family: MontserratBold;
  color: #4f565f;
  font-weight: 500;
  letter-spacing: 0.0125em;
  padding: 16px 24px 10px;
}
.montserrat {
  font-family: Montserrat;
}
.btn {
  text-transform: capitalize;
}
.theme--light.v-time-picker-clock {
  background: #4f565f;
}
.v-application {
  font-family: 'Montserat';
  line-height: 1.5;
}
</style>