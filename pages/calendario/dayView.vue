<template>
  <v-row class="ma-4">
    <v-col>
      <v-card flat class="rounded-lg pa-1">
        <v-sheet>
          <!--  Toolbar dia actual | Genesis -->
          <v-toolbar class="toolbar" flat>
            <v-spacer></v-spacer>
            <v-btn fab text color="#9966ff " @click="prev">
              <v-icon>
                mdi-arrow-left-bold-box
              </v-icon>
            </v-btn>
            <v-toolbar-title>
              <!-- {{ $refs.calendar.title }} --> Lunes, 5 de diciembre de 2022
            </v-toolbar-title>
            <v-btn fab text color="#9966ff" @click="next">
              <v-icon>
                mdi-arrow-right-bold-box
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!--    calendario con vista de dia | Genesis -->
          <v-calendar ref="calendar" v-model="value" hide-header color="primary" type="day">
            <template v-slot:day-body="{ date, week }">
              <div class="v-current-time" :class="{ first: date === week[0].date }" :style="{ top: nowY }"></div>
            </template>
          </v-calendar>
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
    this.ready = true
    this.scrollToTime()
    this.updateTime()
  },
  /*   metodos para puntero de hora | Genesis */
  methods: {
    getCurrentTime() {
      return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0
    },
    scrollToTime() {
      const time = this.getCurrentTime()
      const first = Math.max(0, time - (time % 30) - 30)
      this.cal.scrollToTime(first)
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000)
    },
  },
}
</script>

<style lang="scss">
/* estilos de puntero de hora actual  | Genesis */
.v-current-time {
  height: 2px;
  background-color: #7900ff;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: '';
    position: absolute;
    background-color: #7900ff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
</style>