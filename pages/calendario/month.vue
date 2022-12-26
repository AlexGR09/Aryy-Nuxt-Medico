<template>
  <v-container>
    <v-row>
      <div>
        <date-picker />
        <v-col cols="1" md="10">
          <p class="h4">visita de hoy</p>
          <v-alert border="left" colored-border color="">
            <v-list-item three-line class="lista">
              <v-list-item-content>
                <v-list-item-title>Fulanito detal</v-list-item-title>
                <v-list-item-subtitle>Primera Cosulta</v-list-item-subtitle>
                <v-list-item-subtitle>11:00 am</v-list-item-subtitle>
              </v-list-item-content>
              <v-icon>mdi-bell</v-icon>
            </v-list-item>
          </v-alert>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>
    
  <script>
export default {
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
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [
      {
        name: 'Fulanito Detal',
        phone: '9615897456',
        start: '2022-12-26T10:00:00',
        intervalo: '10:00 - 10:30',
        end: '2022-12-26T10:30:00',
        timed: true,
        color: '#1abc9c',
      },
      {
        name: 'Zutanito Filipondio',
        phone: '9611115823',
        intervalo: '10:30 - 11:00',
        start: '2022-12-26T10:30:00',
        end: '2022-12-26T11:00:00',
        timed: true,
        color: '#1abc9c',
      },
      {
        name: 'Merengano Taltipo',
        phone: '9610218998',
        start: '2022-12-26T11:00:00',
        end: '2022-12-26T11:30:00',
        intervalo: '11:00 - 11:30',
        timed: true,
        color: '#3498db',
      },
      {
        name: 'Perengago Gilberto',
        phone: '9610277896',
        start: '2022-12-26T11:30:00',
        end: '2022-12-26T12:00:00',
        intervalo: '11:30 - 12:00',
        timed: true,
        color: '#1abc9c',
      },
    ],
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1',
    ],
    names: [
      'Meeting',
      'Holiday',
      'PTO',
      'Travel',
      'Event',
      'Birthday',
      'Conference',
      'Party',
    ],
  }),

  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
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

    updateRange({ start, end }) {
      const events = []
      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)
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

/* .theme--light.v-calendar-weekly .v-calendar-weekly__day {
    border-right: red 3px solid;
    border-bottom: #fff 1px solid;
  }
   */
.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #cccccc;
}
.today {
  text-transform: capitalize;
  color: white;
  font-size: 80%;
  background-color: #7900ff;
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

/* .v-calendar-weekly__head-weekday .html {
    font-size: 6px;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
   */
.v-btn__content {
  color: #999999;
  font-size: 18px;
  text-transform: capitalize;
  font-family: 'Montserrat';
}
.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
  background-color: #f7f7f7;
}
</style>
  