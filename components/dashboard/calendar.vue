<template>
    <div>
        <v-sheet height="64">
          <v-toolbar
            flat
          >|{{ selectedElement }}| 
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
            >
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
             <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="next"
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="250">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            type="month"
          ></v-calendar>
        </v-sheet>
    </div>
</template>
<script>
export default {
  data() {
    return {
        focus: '',
    type: 'month',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [],
    names: [],
	}
  },
    mounted () {
    this.$refs.calendar.checkChange()
    console.log(this.$refs.calendar)
  },
  methods: {

    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    updateRange ({ start, end }) {
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
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
  }

</script>
<style>
.theme--light.v-calendar-weekly {
  background-color: #FFFFFF;
  border-top: #e0e0e0 0px solid;
  border-left: #e0e0e0 0px solid;
}

.theme--light.v-calendar-weekly .v-calendar-weekly__day {
  border-right: #e0e0e0 0px solid;
  border-bottom: #e0e0e0 0px solid;
}
.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday {
  border-right: #e0e0e0 0px solid;
  color: #000000;
}
</style>