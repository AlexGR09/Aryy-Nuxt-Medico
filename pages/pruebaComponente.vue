<template>
  <div>
    <v-row>
      <v-col xl="7">
        <v-row>
          <v-col cols="3" xl="1">
            <p>{{lunes}}</p>
            <p>{{martes}}</p>
            <p>{{miercoles}}</p>
            <p>{{jueves}}</p>
            <p>{{viernes}}</p>
            <p>{{sabado}}</p>
            <p>{{domingo}}</p>
          </v-col>

          <v-col xl="5">
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeLun}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeMar}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeMie}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeJue}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeVie}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeSab}}</v-chip><br />
            <v-chip  class="ml-3"
                            style="border: thin solid #7900ff"
                            color="#f4edff"
                            label>{{timeDom}}</v-chip><br />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
<style >
.v-chip {
  margin-bottom: 0.7vh !important;
}
</style>