<template>
  <div>
    <p class="mb-5">{{name}}</p>
  <v-row>
   
    <v-card color="#f2f2f2" class="mx-auto"> <date-picker /></v-card>
   
    <v-spacer /> 
    <v-col>
      <v-sheet
        margin-top="1em"
        class="justify-center"
        height="84"
        text-aling="center"
      >
        <v-toolbar class="pt-3" flat>
          <v-btn
              width="150px"
              outlined
              color="white"
              class="mr-4 today"
              @click="setToday"
            >
              <l class="today">Este mes</l>
            </v-btn>
          <v-spacer></v-spacer>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon color="#9966ff">mdi-arrow-left-drop-circle</v-icon>
          </v-btn>
          <div class="caja" v-if="$refs.calendar">
            <h4>{{ $refs.calendar.title }}</h4>
          </div>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon color="#9966ff">mdi-arrow-right-drop-circle</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-menu  bottom left>
              <template v-slot:activator="{ on }">
                <v-btn
                  width="150px"
                  class="list white--text mr-5 ml-n5"
                  outlined
                  v-on="on"
                >
                  <span background="#5a09ff">{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list style="font-family: Montserrat">
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
      <v-sheet height="44rem" width="84rem">
        <v-calendar
        event-text-color="white"
            class="calend white--text"
            locale="mx-es"
            ref="calendar"
            type="month"
            v-model="type"
            color="#7900ff"
            style="font-family: Montserrat;"
            interval-height="80px"
            :short-intervals="false"
            interval-width="80px"
            :events="events"
            :event-color="getEventColor"
            @click:more="viewDay"
            @click:date="viewDay"
        >
        
         <template  v-slot:event="{event}">
          <div v-for="evento in eventos " :key="evento" :style="{'background-color':event.color,color:'white',height:'15px'}" class=" pl-3">{{ name }}</div>
<!--           <div :style="{'background-color':event.color,color:'white',height:'15px'}" class=" pl-3">{{ event.name }}</div> -->
        </template> 
        </v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    <v-spacer />
  </v-row>
</div>
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
        start: '2022-12-27T10:00:00',
        end: '2022-12-26T10:30:00',
        timed: true,
        color: '#1abc9c',
      },
      {
        name: 'Zutanito Filipondio',
        phone: '9611115823',
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
        timed: true,
        color: '#3498db',
      },
      {
        name: 'Perengago Gilberto',
        phone: '9610277896',
        start: '2022-12-26T11:30:00',
        end: '2022-12-26T12:00:00',
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
    this.citas()
  },
  methods: {
    citas() {
      console.log('creando petición GET')
      this.$axios
        .get('api/v1/calendar/appointments', {
          params: {
    type: 'month',
    "month":"12"
  },
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        })
        .then((res) => {
          console.log(res)
          console.log('exito en GET')
       /*    this.events=res.data.data */
       this.eventos=res.data.data[0]
          this.events.name = res.data.data[0].facility_name
          this.name = res.data.data[0].facility_name
        })
        .catch(
          /* console.log(e); */
          console.log('error en GET')
        )
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