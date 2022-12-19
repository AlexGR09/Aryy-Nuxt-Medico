<template>
  <v-row>
    <v-app-bar height="100" :clipped-left="clipped" fixed app>
      <v-btn class="list mr-4" outlined color="grey darken-2" @click="setToday">
        <span>Este semana</span>
      </v-btn>
      <v-spacer />
      <v-toolbar flat color="transparent" class="vtoolbar mr-5" dense>
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
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn class="list white--text mr-5 ml-n5" outlined v-on="on">
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
        <v-img
          :src="require('@/assets/icons/icon_settings.svg')"
          max-width="23"
        ></v-img>
      </v-btn>
      <v-btn class="ml-4" icon small>
        <v-img
          :src="require('@/assets/icons/icon_notificationpatient.svg')"
          max-width="23"
        ></v-img>
      </v-btn>
      <v-btn class="ml-5 mr-7" fab color="#7900ff">
        <v-icon large color="#fff"> mdi-account </v-icon>
      </v-btn>
    </v-app-bar>
    <v-col>
      <v-card class="rounded-xl">
        <v-sheet
          margin-top="1em"
          class="justify-center"
          height="4rem"
          width="60rem"
          text-aling="center"
        >
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
        <v-sheet height="400">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            color="primary"
            type="week"
            height="40rem"
            width="60rem"
          ></v-calendar>
        </v-sheet>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: '2019-01-08',
    type: 'week',
    typeToLabel: {
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
    },
    events: [
      {
        name: 'Victor Padron',
        start: '2019-01-07 09:00',
        end: '2019-01-07 09:30',
      },
      {
        name: `Thomas' Birthday`,
        start: '2019-01-10',
      },
      {
        name: 'Mash Potatoes',
        start: '2019-01-09 12:30',
        end: '2019-01-09 15:30',
      },
    ],
  }),

  methods: {
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
  },
  mounted() {
    this.$refs.calendar.scrollToTime('08:00')
  },
}
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}
.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}

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
.theme--light.v-calendar-daily {
  background-color: #ffffff;
  border-left: #fff 1px solid;
  border-top: #fff 1px solid;
}
</style>