<template>
  <div>
    <v-row class="mt-n3">
      <!-- Calendario vista dia |Genesis -->
      <v-col>
        <v-breadcrumbs class="breadcrumbs" :items="items">
          <template #item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <v-icon size="22" color="#7900ff">{{ item.icon }}</v-icon>
              <span class="breadcrumbs">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <v-card>
          <v-sheet height="84">
            <v-toolbar flat>
              <v-btn
                width="10%"
                outlined
                color="white"
                class="mr-4 today mt-7 rounded-lg"
                @click="setToday"
              >
                <l class="today">hoy</l>
              </v-btn>

              <v-spacer class="mr-16"></v-spacer>
              <v-btn
                class="mt-7 ml-5"
                fab
                text
                small
                color="grey darken-2"
                @click="prev"
              >
                <v-icon x-large color="#9966ff"> mdi-chevron-left </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar" class="calendar mt-7" >
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-btn
                class="mt-7"
                fab
                text
                small
                color="grey darken-2"
                @click="next"
              >
                <v-icon color="#9966ff" x-large> mdi-chevron-right </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-menu bottom left>
                <template #activator="{ on }">
                  <v-btn
                    width="10%"
                    class="list white--text mt-7 ml-5 rounded-lg"
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
                  <v-list-item to="/calendario/week" @click="type = 'week'" >
                    <v-list-item-title>Semana</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/calendario/month" @click="type = 'month'" >
                    <v-list-item-title>Mes</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="700">
            <v-calendar
            ref="calendar"
            v-model="focus"
              class="calend"
              locale="mx-es"
              type="day"
              color="#9966ff"
              interval-height="80px"
              :short-intervals="false"
              interval-width="80px"
              event-start="appointment_start"
              event-end="appointment_start_end"
              event-name="patient_full_name"
              event-color="#1abc9c"
              :events="evento"
              @click="addEvent"
              @click:event="showw"
              @click:more="viewDay"
              @click:date="viewDay"
              @click:time="addEvent"
            >
              <template #day-body="{ date, week }">
                <div
                  class="v-current-time"
                  :class="{ first: date === week[0].date }"
                  :style="{ top: nowY }"
                ></div>
              </template>
            </v-calendar>
            <v-dialog
            v-model="newDate"
              width="1040px"
              offset-x
              :close-on-content-click="false"
            >
              <new-appointment/>
            </v-dialog>
            <v-dialog
            v-model="selectedOpen"
              width="640px"
              offset-x
              :close-on-content-click="false"
              :activator="selectedElement"
            >
              <appointment-card/>
            </v-dialog>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import appointmentCard from './_appointmentCard.vue'
export default {
  components: { appointmentCard },
  data: () => ({
    value: '',
    newDate: false,
    show: false,
    ready: false,
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Mes',
      week: 'Semana',
      day: 'Dia',
      '4day': '4 Dias',
    },
    selectedEvent: {},
    selectedElement: null,
    start: null,
    end: null,
    selectedOpen: false,
    evento: [],
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
      {
        text: 'Dia',
        disabled: true,
        href: '/calendario/dayView',
      },
    ],
    colors: ['#1abc9c', '#3498db'],
  }),
  computed: {
    cal() {
      return this.ready ? this.$refs.calendar : null
    },
    nowY() {
      return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
    },
  },
  mounted() {
    this.$refs.calendar.checkChange()
    this.ready = true
    this.scrollToTime()
    this.updateTime()
    this.citas()
  },
  methods: {
    showw(){
      this.$router.push('/calendario/'+this.id)
    },
   /*  metodo para traer todas las citas registradas en el servidor | Genesis */
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
    addEvent() {
      this.newDate = true
    },
    getCurrentTime() {
      return this.cal
        ? this.cal.times.now.hour * 60 + this.cal.times.now.minute
        : 0
    },
    scrollToTime() {
      const time = this.getCurrentTime()
      const first = Math.max(0, time - (time % 30) - 30)
      this.cal.scrollToTime(first)
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000)
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
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
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
</style>

<style lang="scss">
/* estilos de puntero de hora actual  | Genesis */
.v-current-time {
  height: 2px;
  background-color: red;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: -7px;
    margin-left: -6.5px;
  }
}
.theme--light.v-btn {
  color: #999999;
}
h1.eventName {
  font-size: 230%;
  color: #7900ff;
  font-family: Montserrat;
}
p.eventPhone {
  font-size: 120%;
  color: gray;
  font-family: Montserrat;
}
h4 {
  font-family: Montserrat;
}
/* texto del evento | Genesis */
span {
  font-size: 0.85rem;
  font-family: Montserrat;
  align-items: start;
  color: white;
  text-transform: lowercase;
}
span::first-letter {
  text-transform: uppercase;
}
.calend {
  box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(234, 223, 252, 0.75);
}
.v-calendar {
  font-family: Montserrat;
}
.v-calendar-title {
  font-family: MontserratBold;
  font-size: 1.2rem;
}
.today {
  text-transform: capitalize;
  color: white;
  background-color: #7900ff;
}
.calendario {
  border: thin solid transparent;
  font-family: Montserrat;
  margin-left: -5px;
}
.calendar {
  text-transform: capitalize;
  font-family: MontserratBold;
  font-size: 120%;
}
.eventAction {
  color: black;
  text-transform: capitalize;
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
.search {
  font-family: Montserrat;
}
.v-input__icon--prepend-inner .v-icon {
  color: #cccccc;
}
p.infor {
  font-family: MontserratBold;
  font-size: 110%;
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
.v-calendar-daily__interval-text {
  display: block;
  position: relative;
  top: -6px;
  font-size: 15px;
  padding-right: 4px;
}
.v-calendar-daily_head-weekday {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 3px 0px 0px 0px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
}
span.breadcrumbs {
  font-family: Montserrat;
  color: #7900ff;
}
.v-btn__content {
  align-items: center;
  color: black;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: inherit;
  transition-property: opacity;
}
.theme--light.v-time-picker-clock {
  background: #cccccc;
}
</style>