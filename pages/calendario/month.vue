<template>
    <v-row>
        <v-card color="#f2f2f2" class="mx-auto">   <date-picker/></v-card>
     
        <v-app-bar height="100" :clipped-left="clipped" fixed app>
            <v-btn class="list mr-4" 
              outlined
              color="grey darken-2"
              @click="setToday"
            >
             <span>Este mes</span> 
            </v-btn>
            <v-spacer />
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
          placeholder="Buscar cita"
          hide-details
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-toolbar>
            <v-menu bottom left >
                <template v-slot:activator="{ on }">
                    <v-btn class="list white--text mr-5 ml-n5"  outlined v-on="on">
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
        <v-spacer />
        <v-col>
            <v-sheet margin-top="1em" class="justify-center" height="4rem" width="60rem" text-aling="center">
                <v-toolbar flat>
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
                </v-toolbar>
            </v-sheet>
            <v-sheet height="40rem" width="60rem">
                <v-calendar locale="mx-es" class="v-calendar" ref="calendar" color="primary" v-model="focus"
                    :events="events" :type="type" :citas="citas" :event-overlap-mode="mode" :event-color="getEventColor"
                    @change="getEvents" :now="today">
                    <template :events="events">
                        <h3>hola</h3>

                    </template>
                </v-calendar>
                <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
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
</template>
  
<script>



export default {
    head:{
        title:'Calendario',
        meta:[
            {
                hid: 'description',
                name:'description',
                content:'home page descripcion'
            }
        ]
    },
    data: () => ({
        focus: "",
        type: "month",
        typeToLabel: {
            month: "Mes",
            week: "Semana",
            day: "Día",
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        colors: ["blue", "indigo", "deep-purple", "cyan", "green", "orange", "grey darken-1"],
        names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"],
    }),

   
    
    mounted() {
        this.$refs.calendar.checkChange();
    },
    methods: {
        viewDay({ date }) {
            this.focus = date;
            this.type = "day";
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = "";
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        
        updateRange({ start, end }) {
            const events = [];
            const min = new Date(`${start.date}T00:00:00`);
            const max = new Date(`${end.date}T23:59:59`);
            const days = (max.getTime() - min.getTime()) / 86400000;
            const eventCount = this.rnd(days, days + 20);
            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 3) === 0;
                const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                const first = new Date(firstTimestamp - (firstTimestamp % 900000));
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
                const second = new Date(first.getTime() + secondTimestamp);
                events.push({
                    name: this.names[this.rnd(0, this.names.length - 1)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                });
            }
            this.events = events;
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
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

v-calendar-weekly__head {
    color: black;
}


v-row {
    border-radius: 30px;
}


v-event-summary {
    background-color: aqua;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day {
    border-right: #fff 3px solid;
    border-bottom: #fff 1px solid;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside {
    background-color: #cccccc;
}

.caja {
    margin-left: 4vh;
    margin-right: 4vh;
}

h4 {
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
}

v-col {
    margin-top: 1em;
}

.theme--light.v-calendar-weekly.v-calendar-weekly__day:hover {
    color: #f4edff;
}

.v-event-summary {
    color: #0065ff;
    font-family: 'MontserratBold', sans-serif;
    text-align: center;
    font-size: 15px;
}

.content-calendar {
    margin-top: 2rem;
    margin-left: 2vh;
    margin-right: 2vh;
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
</style>