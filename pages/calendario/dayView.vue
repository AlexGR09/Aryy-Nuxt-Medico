<template>
  <v-row class=" mt-n3">
    <v-app-bar flat color="transparent" height="100" :clipped-left="clipped" fixed app>
     <!--  boton para ir al dia actual | Genesis -->
      <v-spacer></v-spacer>
   <!--    bara de busqueda | Genesis -->
      <v-toolbar
      max-width="350px"
        flat
        color="transparent"
        class="vtoolbar mr-n4"
        
      >
        <v-text-field
          reverse
          class="search mt-6"
          color="grey"
          background-color="white"
          outlined
          placeholder="Búsqueda   "
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
             <!-- iconos para notificacion, ajustes y cuenta | Genesis -->
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_notification.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_ajustes.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-5 mr-7" fab   color="#7900ff">
          <v-img max-width="70px" :src="require('@/assets/avatares/AVATARES_DR1.png')" ></v-img>
        </v-btn>
        </v-app-bar>
        <!-- Calendario vista dia |Genesis -->
        <v-col>
          <v-card>
      <v-sheet height="64">
       
        <v-toolbar
          flat 
        >
          <v-btn  
          width="150px"
            outlined
            color="white"
            class="mr-4 today "
            @click="setToday"
          >
            <l class="today">hoy</l>
          </v-btn>
          <v-divider  light inset></v-divider>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon x-large color="#9966ff">
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-toolbar-title class="calendar" v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon color="#9966ff" x-large >
              mdi-chevron-right
            </v-icon>
          </v-btn>
       
          <v-spacer></v-spacer>
          <v-menu  bottom left >
                <template v-slot:activator="{ on }">
                    <v-btn width="150px"  class="list white--text mr-5 ml-n5"  outlined v-on="on">
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
          interval-height="80px"
          interval-count="48"
          locale="mx-es"
          ref="calendar"
          v-model="focus"
          color="#7900ff"
          :events="events"
          :event-color="getEventColor"
          type="day"
          interval-width="80px"
          :short-intervals="false"
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
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <div  v-html="selectedEvent.name"></div>
              <v-toolbar-title></v-toolbar-title>
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
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
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
          start: '2022-11-02T10:00:00',
          intervalo: '10:00 - 10:30',
          end: '2022-11-02T10:30:00',
          timed: true,
          color: '#1abc9c',
        },
        {
          name: 'Zutanito Filipondio',
          intervalo: '10:30 - 11:00',
          start: '2022-11-02T10:30:00',
          end: '2022-11-02T11:00:00',
          timed: true,
          color: '#1abc9c',
        },
        {
          name: 'Merengano Taltipo',
          start: '2022-11-02T11:00:00',
          end: '2022-11-02T11:30:00',
          intervalo: '11:00 - 11:30',
          timed: true,
          color: '#3498db',
        },
        {
          name: 'Perengago Gilberto',
          start: '2022-11-02T11:30:00',
          end: '2022-11-02T12:00:00',
          intervalo: '11:30 - 12:00',
          timed: true,
          color: '#1abc9c',
        },
        
      ],
      colors: ['#1abc9c','#3498db'],
      names: ['Meeting', 'Holiday', 'Travel'],
    }),
    computed: {
      cal () {
        return this.ready ? this.$refs.calendar : null
      },
      nowY () {
        return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px'
      },
    },
    mounted () {
      this.$refs.calendar.checkChange()
      this.ready = true
      this.scrollToTime()
      this.updateTime()
    },
    methods: {
      getCurrentTime () {
        return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0
      },
      scrollToTime () {
        const time = this.getCurrentTime()
        const first = Math.max(0, time - (time % 30) - 30)
        this.cal.scrollToTime(first)
      },
      updateTime () {
        setInterval(() => this.cal.updateTimes(), 60 * 1000)
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => (this.selectedOpen = true)))
        }
        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
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
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>

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
h4{
    font-family: Montserrat;
  }
  span{
    font-size: 1rem;
    font-family: MontserratMedium;
    align-items: start;
    color: white;
    text-transform: lowercase;
  }
  span::first-letter {
 text-transform: uppercase;
}
  .v-calendar{
    font-family: Montserrat;
    
  }
  .v-calendar-title{
    font-family: MontserratBold;
    font-size: 1.2rem;
  }
  .today{
    text-transform: capitalize;
    color: white;
    background-color: #7900ff;
  }
  .calendario{
    border: thin solid transparent;
    font-family: Montserrat;
    margin-left: -5px;
  }
  .calendar{
    text-transform: capitalize;
  }
  .list{
    margin-left: 2rem;
    width: 7rem;
    background: #7900ff;
  }
  /* estilos para barra de busqueda | Genesis */
  .vtoolbar{
    border: thin solid #cccccc;
    height: 30px;
    width: 2rem;
  }
  .search{
    
    font-family: Montserrat;
  }
  .v-input__icon--prepend-inner .v-icon { 
    color: #cccccc;
  }

</style>