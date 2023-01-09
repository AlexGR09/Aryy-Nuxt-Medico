<template>
  <div>
    <v-row>
      <v-card flat class="mr-6"> <date-picker /><today/></v-card>
      <v-spacer />
      <v-col>
        <v-breadcrumbs class="breadcrumbs" :items="items">
          <template #item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-sheet
          margin-top="1em"
          class="justify-center"
          height="84"
          text-aling="center"
        >
          <v-toolbar class="pt-3" flat>
            <v-btn
              style="background-color: #7900ff"
              width="10%"
              outlined
              color="white"
              class="mr-4 today"
              @click="setToday"
            >
              <span class="today"
                >Este <br />
                mes</span
              >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon color="#9966ff">mdi-arrow-left-drop-circle</v-icon>
            </v-btn>
            <div v-if="$refs.calendar" class="caja">
              <h4>{{ $refs.calendar.title }}</h4>
            </div>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon color="#9966ff">mdi-arrow-right-drop-circle</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template #activator="{ on }">
                <v-btn
                  width="10%"
                  class="list white--text mr-5 ml-0"
                  outlined
                  v-on="on"
                >
                  <span background="#5a09ff">{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list style="font-family: Montserrat">
                <v-list-item to="/calendario/dayView" @click="type = 'day'">
                  <v-list-item-title>Día</v-list-item-title>
                </v-list-item>
                <v-list-item to="/calendario/week" @click="type = 'week'">
                  <v-list-item-title>Semana</v-list-item-title>
                </v-list-item>
                <v-list-item to="/calendario/month" @click="type = 'month'">
                  <v-list-item-title>Mes</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="44rem" width="84rem">
          <v-calendar
            ref="calendar"
            v-model="type"
            event-text-color="white"
            class="calend white--text"
            locale="mx-es"
            type="month"
            color="#7900ff"
            event-start="appointment_start"
            event-end="appointment_start_end"
            event-name="patient_full_name"
            event-color="#1abc9c"
            :events="evento"
            style="font-family: Montserrat"
            :short-intervals="false"
            @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
          >
          </v-calendar>
          <v-dialog
              width="640px"
              v-model="selectedOpen"
              offset-x
              :close-on-content-click="false"
              :activator="selectedElement"
            >
              <v-card color="white" min-width="350px" flat>
                <div class="d-flex justify-end">
                  <v-btn
                    class="mb-n5"
                    dark
                    icon
                    color="grey"
                    @click="selectedOpen = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
                <v-card-text>
                  <br />
                  <v-row>
                    <v-col>
                      <h1 class="eventName">
                        {{ selectedEvent.patient_full_name }}
                      </h1>
                      <p class="eventPhone mt-5">
                        No. {{ selectedEvent.id_appointment }}
                      </p>
                      <p class="eventPhone mt-n3">{{ number }}</p>
                    </v-col>
                    <v-col xl="4"
                      ><v-btn large width="192px" color="#999999" outlined>
                        <span class="titleAction">Reagendar cita</span>
                      </v-btn>
                      <v-dialog v-model="dialog" persistent max-width="450">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            v-bind="attrs"
                            v-on="on"
                            large
                            width="192px"
                            class="mt-2 mb-3"
                            color="red"
                            outlined
                          >
                            <span class="titleAction2" color="red"
                              >cancelar cita</span
                            >
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="text-h5 justify-center">
                            <p class="reset">
                              ¿Está seguro de cancelar la cita?
                            </p>
                          </v-card-title>
                          <v-card-actions>
                            <v-btn color="#9966ff" text @click="dialog = false">
                              <p class="confirm">No</p>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="#9966ff"
                              text
                              v-on:click="cancelAppointment"
                              @click="dialog = false"
                            >
                              <p class="confirm">Si</p>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <div class="mt-5">
                    <v-row>
                      <v-col cols="2" xs="2" sm="1" md="1" lg="1" xl="1"
                        ><v-img
                          :src="require('@/assets/icons/Iconos_CITAS.svg')"
                          max-width="23"
                        ></v-img
                      ></v-col>
                      <v-col>
                        <p class="infor">
                          {{ date }}
                        </p>
                        <p class="infor mt-n3">
                          {{ selectedEvent.appointment_time }} -
                          {{ selectedEvent.appointment_time_end }} hrs
                        </p>
                        <p class="type mt-n3">
                          {{ selectedEvent.appointment_type }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-row class="mt-n6">
                      <v-col cols="2" xs="2" sm="1" md="1" lg="1" xl="1">
                        <v-img
                          :src="require('@/assets/icons/icon_ubi.svg')"
                          max-width="23"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <p class="infor">
                          {{ selectedEvent.facility_name }}
                        </p></v-col
                      >
                    </v-row>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="eventAction"
                    outlined
                    color="green"
                    @click="selectedOpen = false"
                    ><v-icon color="green">mdi-eye</v-icon>
                    <span class="eventAction ml-3">ASISTIÓ</span>
                  </v-btn>
                  <v-btn
                    class="eventAction"
                    outlined
                    color="red"
                    @click="selectedOpen = false"
                  >
                    <v-icon color="red">mdi-eye-off</v-icon>
                    <span class="eventAction ml-3">NO ASISTIÓ</span>
                  </v-btn>
                </v-card-actions>
                <br />
              </v-card>
            </v-dialog>
        </v-sheet>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>
  
<script>
export default {
data() {
  return {
      evento: [],
      dialog: false,
      date: '',
      focus: '',
      number: '',
      appointment_start: '',
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      /* items para el breadcrumb | Genesis */
      items: [
        {
          icon: 'mdi-home-outline',
          disabled: false,
          href: '/',
        },
        {
          text: 'Calendario',
          disabled: false,
          href: '/calendario/month',
        },
      ],
    }
  },
  head: {
    title: 'Calendario',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'home page descripcion',
      },
    ],
  },
  mounted() {
    this.$refs.calendar.checkChange()
    this.citas()
  },
  methods: {
     /* cancelar cita | Genesis */
     cancelAppointment() {
      this.$axios.put(
        'api/v1/calendar/appointments/' + this.selectedEvent.id_appointment,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
    },
    /*  metodo para traer todos los datos del servidor | Genesis */
    citas() {
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
            type: 'all',
          },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          this.evento = res.data.data
        })
    },
     /* obtener datos de cita por ID | Genesis */
     citaId() {
      this.$axios
        .get(
          'api/v1/calendar/appointments/' + this.selectedEvent.id_appointment,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        .then((res) => {
          this.cita = res.data.data
          this.number = res.data.data.patient.user_phone_number
          this.date = res.data.data.appointment_date
          console.log(res)
        })
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        )
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }
      nativeEvent.stopPropagation()
      this.citaId()
    },

  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.v-btn__content {
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
}
.calend {
  box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  color: white;
}
v-calendar-weekly__head {
  color: black;
}

v-row {
  border-radius: 30px;
}

v-event-summary {
  background-color: aqua;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #cccccc;
}
.today {
  text-transform: capitalize;
  color: white;
  font-size: 70%;
}
.caja {
  margin-left: 4vh;
  margin-right: 4vh;
}

h4 {
  text-transform: capitalize;
  font-family: 'Montserrat';
  color: black;
}

v-col {
  margin-top: 1em;
}

.theme--light.v-calendar-weekly.v-calendar-weekly__day:hover {
  color: #f4edff;
}

.v-event-summary {
  color: white;
  font-family: 'Montserrat';
  font-size: 15px;
  text-transform: capitalize;
}

.content-calendar {
  margin-top: 2rem;
  margin-left: 2vh;
  margin-right: 2vh;
}
.list {
  margin-left: 2rem;
  width: 7rem;
  background: #7900ff;
}
/* estilos para barra de busqueda | Genesis */
.vtoolbar {
  border: thin solid #cccccc;
  height: 30px;
  width: 2rem;
}
.v-input__icon--prepend-inner .v-icon {
  color: #cccccc;
}
span {
  font-size: 1rem;
  font-family: MontserratMedium;
  align-items: start;
  color: white;
  text-transform: lowercase;
}
span::first-letter {
  text-transform: uppercase;
}
.v-calendar-weekly__head {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 20px;
}
.v-calendar-weekly__head-weekday {
  flex: 1 0 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 0px 4px 0px 4px;
  font-size: 16px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.v-btn__content {
  
  font-size: 14px;
  text-transform: capitalize;
  font-family: 'Montserrat';
}
.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #f7f7f7;
}
span.breadcrumbs {
  font-family: Montserrat;
  color: #7900ff;
}
.titleAction {
  text-transform: uppercase;
  font-size: 90%;
  color: gray;
}
.titleAction2 {
  text-transform: uppercase;
  font-size: 90%;
  color: red;
}
p.infor {
  font-family: MontserratBold;
  font-size: 110%;
}
p.type {
  font-family: Montserrat;
  font-size: 110%;
}
p.eventPhone {
  font-size: 120%;
  color: gray;
  font-family: Montserrat;
}
h1.eventName {
  font-size: 220%;
  color: #7900ff;
  font-family: Montserrat;
}
.eventAction {
  color: black;
  text-transform: capitalize;
}
</style>