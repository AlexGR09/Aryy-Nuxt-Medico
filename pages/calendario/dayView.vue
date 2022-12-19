<template>
  <v-row class="mt-n3">
    <!-- Calendario vista dia |Genesis -->
    <v-col>
      <v-card>
        <v-sheet height="84">
          <v-toolbar flat>
            <v-btn
              width="150px"
              outlined
              color="white"
              class="mr-4 today mt-7"
              @click="setToday"
            >
              <l class="today">hoy</l>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="mt-7 ml-10"
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
            >
              <v-icon x-large color="#9966ff"> mdi-chevron-left </v-icon>
            </v-btn>
            <v-toolbar-title class="calendar mt-7" v-if="$refs.calendar">
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
              <template v-slot:activator="{ on }">
                <v-btn
                  width="150px"
                  class="list white--text mr-5 ml-n5 mt-7"
                  outlined
                  v-on="on"
                >
                  <span background="#5a09ff">{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'" to="/calendario/dayView">
                  <v-list-item-title>Día</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'" to="/calendario/week">
                  <v-list-item-title>Semana</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'" to="/calendario/month">
                  <v-list-item-title>Mes</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="700">
          <v-calendar
            class="calend"
            locale="mx-es"
            ref="calendar"
            type="day"
            v-model="focus"
            color="#7900ff"
            interval-height="80px"
            interval-count="48"
            :short-intervals="false"
            interval-width="80px"
            :events="events"
            :event-color="getEventColor"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          >
            <template v-slot:day-body="{ date, week }">
              <div
                class="v-current-time"
                :class="{ first: date === week[0].date }"
                :style="{ top: nowY }"
              ></div>
            </template>
          </v-calendar>
          <v-dialog
            width="640px"
            v-model="selectedOpen"
            offset-x
            :close-on-content-click="false"
            :activator="selectedElement"
          >
            <v-card color="white" min-width="350px" flat>
              <v-card-text>
                <br />
                <v-row>
                  <v-col>
                    <h1 class="eventName" v-html="selectedEvent.name"></h1>
                    <p class="eventPhone mt-5">No. 123</p>
                    <p
                      class="eventPhone mt-n3"
                      v-html="selectedEvent.phone"
                    ></p>
                  </v-col>
                  <v-col xl="4"
                    ><v-btn large color="#999999" outlined>
                      <l class="titleAction">Reagendar cita</l>
                    </v-btn>
                    <v-btn
                      large
                      width="192px"
                      class="mt-2 mb-3"
                      color="red"
                      outlined
                    >
                      <l class="titleAction2" color="red">cancelar cita</l>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <div class="mt-5">
                  <p class="infor">
                    <v-icon color="#9966ff">mdi-calendar</v-icon>sfsfs
                  </p>
                  <p class="infor">
                    <v-icon color="#9966ff">mdi-account</v-icon>Paciente nuevo
                  </p>
                  <p class="infor">
                    <v-icon color="#9966ff">mdi-map-marker-circle</v-icon
                    >Consultorio Principal
                  </p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  class="eventAction"
                  outlined
                  color="green"
                  @click="selectedOpen = false"
                  ><v-icon>mdi-eye</v-icon>
                  <l class="eventAction ml-3">ASISTIÓ</l>
                </v-btn>
                <v-btn
                  class="eventAction"
                  outlined
                  color="red"
                  @click="selectedOpen = false"
                >
                  <v-icon>mdi-eye-off</v-icon>
                  <l class="eventAction ml-3">NO ASISTIÓ</l>
                </v-btn>
              </v-card-actions>
              <br />
            </v-card>
          </v-dialog>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    value: '',
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
    selectedOpen: false,
    events: [
      {
        name: 'Fulanito Detal',
        phone: '9615897456',
        start: '2022-11-08T10:00:00',
        intervalo: '10:00 - 10:30',
        end: '2022-11-08T10:30:00',
        timed: true,
        color: '#1abc9c',
      },
      {
        name: 'Zutanito Filipondio',
        phone: '9611115823',
        intervalo: '10:30 - 11:00',
        start: '2022-11-08T10:30:00',
        end: '2022-11-08T11:00:00',
        timed: true,
        color: '#1abc9c',
      },
      {
        name: 'Merengano Taltipo',
        phone: '9610218998',
        start: '2022-12-08T11:00:00',
        end: '2022-12-08T11:30:00',
        intervalo: '11:00 - 11:30',
        timed: true,
        color: '#3498db',
      },
      {
        name: 'Perengago Gilberto',
        phone: '9610277896',
        start: '2022-12-08T11:30:00',
        end: '2022-12-08T12:00:00',
        intervalo: '11:30 - 12:00',
        timed: true,
        color: '#1abc9c',
      },
    ],
    colors: ['#1abc9c', '#3498db'],
    names: ['Meeting', 'Holiday', 'Travel'],
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
  },
  methods: {
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
    updateRange({ start, end }) {
      const events = []
      const min = new Date(`${start.date}T10:00:00`)
      const max = new Date(`${end.date}T11:00:00`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 5)
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }
      this.events = events
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
</style>