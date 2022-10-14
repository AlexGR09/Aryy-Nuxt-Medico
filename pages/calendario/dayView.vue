<template>
  <v-row class="ma-4">
    <v-app-bar :clipped-left="clipped" fixed app>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary">
                Este mes
            </v-btn>
            <v-spacer />
            <v-autocomplete v-model="select" :loading="loading" :items="items" :search-input.sync="search" cache-items
                class="mx-2" flat hide-no-data hide-details label="Buscar cita" solo-inverted>
            </v-autocomplete>
            <v-menu bottom left color="#5a09ff">
                <template v-slot:activator="{ on }">
                    <v-btn outlined v-on="on">
                        <span background="#5a09ff">{{ typeToLabel[type] }}</span>
                        <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="type = 'day'" to="/calendario/dayView">
                        <v-list-item-title>Día</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                        <v-list-item-title>Semana</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'" to="/calendario/month">
                        <v-list-item-title>Mes</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    <v-col>
      <v-card flat class="rounded-lg pa-1">
        <v-sheet height="64">
                <v-toolbar flat>
                    <v-spacer></v-spacer>
                    <v-btn fab text small color="grey darken-2" @click="prev">
                        <v-icon color="#9966ff" class="v-icon">mdi-arrow-left-drop-circle</v-icon>
                    </v-btn>
                    <v-toolbar-title>
                       <!--  {{ $refs.calendar.day }} --> <h3>{{moment().format('LL')}}</h3>

                    </v-toolbar-title>
                    <v-btn fab text small color="grey darken-2" @click="next">
                        <v-icon color="#9966ff" class="v-icon">mdi-arrow-right-drop-circle</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </v-sheet>
      <v-sheet height="700">
        <v-calendar
          first-time="07"
          hide-header
          locale="mx-es"
          :weekday-format="getFormattedDate"
          :short-weekdays="false"
          :short-intervals="false"
          interval-width="80px"
          ref="calendar"
          interval-count="34"
          v-model="value"
          type="day"
          interval-minutes="30"
          :events="events"
        >
          <template v-slot:day-body="{ date, week }">
            <div
              class="v-current-time"
              :class="{ first: date === week[0].date }"
              :style="{ top: nowY }"
            ></div>
          </template>
         
          <template  v-slot:event="{event}">
            <div :style="{'border-radius': '1em/5em','background-color':event.color,color:'white','font-size':'14px',margin:'2px'}" class=" pl-3">{{ event.intervalo }}</div>
            <div :style="{'border-radius': '1em/5em','background-color':event.color,color:'white','font-size':'17px'}" class=" pl-3">{{ event.name }}</div>
        </template>
        </v-calendar>
      </v-sheet>
    </v-card>
    </v-col>
  </v-row>
</template>
<script>
import moment from 'moment'; 
export default {
  layout: 'default',
  data: () => ({
    value: '',
    moment,
    focus: "",
        type: "day",
    typeToLabel: {
            month: "Mes",
            week: "Semana",
            day: "Día",
        },
    ready: false,
    events: [
        {
          name: 'Fulanito Detal',
          start: '2022-10-13T10:00:00',
          intervalo: '10:00 - 10:30',
          end: '2022-10-13T10:30:00',
          timed: true,
          color: '#9966ff',
        },
        {
          name: 'Zutanito Filipondio',
          intervalo: '10:30 - 11:00',
          start: '2022-10-13T10:30:00',
          end: '2022-10-13T11:00:00',
          timed: true,
          color: '#3333ff',
        },
        {
          name: 'Merengano Taltipo',
          start: '2022-10-13T11:00:00',
          end: '2022-10-13T11:30:00',
          intervalo: '11:00 - 11:30',
          timed: true,
          color: '#9966ff',
        },
        {
          name: 'Perengago Gilberto',
          start: '2022-10-13T11:30:00',
          end: '2022-10-13T12:00:00',
          intervalo: '11:30 - 12:00',
          timed: true,
          color: '#9966ff',
        },
      ],
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
    this.ready = true
    this.scrollToTime()
    this.updateTime()
    this.$refs.calendar.checkChange()
  },
  methods: {
    getFormattedDate(date) {
      moment.locale('es');
             return moment(date).format("LL")
             
    },
/*    currentDate() {
       const current = new Date();
      const date = `${current.getDate()} de ${current.getMonth()+1} del ${current.getFullYear()}`;    
      current.toDateString();  
      return date; 
    
    },  */
/*     addEvent () {
        this.start = new Date(this.start).toISOString().substring(0,10);
        this.end =  new Date(this.end).toISOString().substring(0,10);
            this.events.push({name: this.name,
                              details: this.details,
                              start: this.start,
                              end: this.end,
                             color: this.color})
            }, */
    viewDay({ date }) {
            this.focus = date
            this.type = 'day'
        },
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
  },
  viewDay({ date }) {
            this.focus = date
            this.type = 'day'
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
}
  
</script> 

<style lang="scss">
/* estilos de puntero de hora actual  | Genesis */
.v-current-time {
  
  height: 2px;
  background-color: #5eb9ff;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: #5eb9ff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
h4{
    font-family: Montserrat;
  }
</style>