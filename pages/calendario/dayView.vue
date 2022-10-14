<template>
  <v-row class="ma-4">
    <v-app-bar height="100" :clipped-left="clipped" fixed app>
     <!--  boton para ir al dia actual | Genesis -->
     <v-btn class="list mr-4" 
              outlined
              color="grey darken-2"
              @click="setToday"
            >
             <span>Hoy</span> 
            </v-btn> 
      <v-spacer></v-spacer>
   <!--    bara de busqueda | Genesis -->
      <v-toolbar
        flat
        color="transparent"
        class="vtoolbar mr-5"
        dense
      >
        <v-text-field
          reverse
          class="search"
          color="#f2f2f2"
          dense
          outlined
          placeholder="Buscar cita "
          hide-details
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
            <v-menu  bottom right>
                <template  v-slot:activator="{ on }">
                    <v-btn class="list white--text mr-5 ml-n5" outlined v-on="on">
                        <span text-align="start">{{ typeToLabel[type] }}</span>
                        <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list >
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
             <!-- iconos para notificacion, ajustes y cuenta | Genesis -->
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_settings.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-4" icon small>
            <v-img :src="require('@/assets/icons/icon_notificationpatient.svg')" max-width="23"></v-img>
        </v-btn>
        <v-btn class="ml-5 mr-7" fab  color="#7900ff">
            <v-icon large color="#fff">
                mdi-account
            </v-icon>
        </v-btn>
        </v-app-bar>
    <v-col>
      <v-card  class="rounded-lg pa-1 elevation-2 ">
        <v-sheet height="70">
                <v-toolbar flat>
                    <v-spacer></v-spacer>
                    <v-btn fab text small color="grey darken-2" @click="prev">
                        <v-icon color="#9966ff" class="v-icon">mdi-arrow-left-drop-circle</v-icon>
                    </v-btn>
                    <v-toolbar-title class="v-calendar-title">{{ title }}</v-toolbar-title>
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
          :now="today"
          class="v-calendar calendario"
          :short-intervals="false"
          interval-width="80px"
          ref="calendar"
          interval-count="34"
          v-model="value"
          type="day"
          interval-minutes="30"
          :events="events"
          :interval-style="intervalFormar"
          @change="updateRange"
        >
          <template v-slot:day-body="{ date, week }">
            <div
              class="v-current-time"
              :class="{ first: date === week[0].date }"
              :style="{ top: nowY }"
            ></div>
          </template>
         
          <template  v-slot:event="{event}">
            <div :style="{'border-radius': '1em/5em','background-color':event.color,color:'white','font-size':'11px',margin:'2px'}" class=" pl-3">{{ event.intervalo }}</div>
            <div :style="{'border-radius': '1em/5em','background-color':event.color,color:'white','font-size':'15px'}" class=" pl-3">{{ event.name }}</div>
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
    selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
    typeToLabel: {
            month: "Mes",
            week: "Semana",
            day: "Día",
        },
    ready: false,
    events: [
        {
          name: 'Fulanito Detal',
          start: '2022-10-14T10:00:00',
          intervalo: '10:00 - 10:30',
          end: '2022-10-14T10:30:00',
          timed: true,
          color: '#9966ff',
        },
        {
          name: 'Zutanito Filipondio',
          intervalo: '10:30 - 11:00',
          start: '2022-10-14T10:30:00',
          end: '2022-10-14T11:00:00',
          timed: true,
          color: '#3333ff',
        },
        {
          name: 'Merengano Taltipo',
          start: '2022-10-14T11:00:00',
          end: '2022-10-14T11:30:00',
          intervalo: '11:00 - 11:30',
          timed: true,
          color: '#9966ff',
        },
        {
          name: 'Perengago Gilberto',
          start: '2022-10-14T11:30:00',
          end: '2022-10-14T12:00:00',
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
    viewDay({ date }) {
            this.focus = date
            this.type = 'day'
        },
  /*   getFormattedDate(date) {
      moment.locale('es');
             return moment(date).format("LL")  
    }, */
/*     mostrar el dia del mes en el header de calendario | Genesis */
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
      const yr = this.start.year;
      const mn = this.start.month;
      const dy = this.start.day;
      const mNames = [
       "Enero",
       "Febrero",
       "Marzo",
       "Abril",
       "Mayo",
       "Junio",
       "Julio",
       "Agosto",
       "Septiembre",
       "Octubre",
       "Noviembre",
       "Diciembre",
     ];
  this.title =  [dy-1] +" de "+ mNames[mn-1] + " de " + yr;
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
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
        this.$refs.calendar.next()
    },
    setToday() {
        this.focus = ''
    },
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
  .calendario{
    border: thin solid transparent;
    font-family: Montserrat;
    margin-left: -5px;
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