<template>
    <v-row>
        <Barracalendar/>
        <Navbar></Navbar>
        <v-spacer />
        <div class="content-calendar">
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
            <v-sheet  height="40rem" width="60rem">
            <v-calendar locale="mx-es" ref="calendar" color="primary" v-model="value" :weekdays="weekday" :type="type" :events="events"
                :event-overlap-mode="mode" :event-overlap-threshold="30" :event-color="getEventColor"
                @change="getEvents"></v-calendar>
        </v-sheet>
        </v-col>
        </div>
        <v-spacer />
    </v-row>


</template>
  
<script>

import Barracalendar from '../../components/barracalendar.vue'
import Navbar from '~/layouts/navbar.vue'


export default {
    data: () => ({
        type: "month",
        types: ["Mes", "Semana", "Día",],
        mode: "stack",
        modes: ["stack", "column"],
        weekday: [0, 1, 2, 3, 4, 5, 6],
        value: "",
        events: [],
        colors: ["white"],
        names: ["Cita"],
    }),
    methods: {
        getEvents({ start, end }) {
            const events = [];
            const min = new Date(`${start.date}T00:00:00`);
            const max = new Date(`${end.date}T23:59:59`);
            const days = (max.getTime() - min.getTime()) / 86400000;
            const eventCount = this.rnd(days, days + 20);
            for (let i = 0; i < eventCount; i++) {
                const allDay = this.rnd(0, 1) === 0;
                const firstTimestamp = this.rnd(min.getTime(), max.getTime());
                const first = new Date(firstTimestamp - (firstTimestamp % 900000));
                const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
                const second = new Date(first.getTime() + secondTimestamp);
                events.push({
                    name: this.names[this.rnd(0, this.names.length - 2)],
                    start: first,
                    end: second,
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                    timed: !allDay,
                });
            }
            this.events = events;
        },
        getEventColor(event) {
            return event.color;
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        },
    },
    components: 
    {
    Navbar,
    Barracalendar
} 
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
.v-event-summary{
    color: #0065ff;
    font-family: 'MontserratBold', sans-serif;
    text-align: center;
    font-size: 15px;
}

.content-calendar{
    margin-top: 2rem;
    margin-left: 2vh;
    margin-right: 2vh;
}

</style>