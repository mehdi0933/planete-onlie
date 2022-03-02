<template>
  <div>
    <Header />
    <Fullcalendar
      locale="fr"
      :plugins="calendarPlugins"
      :header="{
        left: 'title',
        center: ' timeGridWeek, timeGridDay, listWeek',
        right: 'prev today next',
        locale: 'fr',
      }"
      :buttonText="{
        today: 'Aujourd\'hui',
        week: 'Semaine',
        day: 'Jour',
        list: 'Liste',
      }"
      :weekends="false"
      :selectable="true"
      :editable="true"
      :events="EVENTS"
    />
  </div>
</template>

<script>
require("@fullcalendar/core/main.min.css");
require("@fullcalendar/daygrid/main.min.css");
require("@fullcalendar/timegrid/main.min.css");

import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";
import Header from "@/component/HeaderComponent.vue";

export default {
  data: () => ({
    calendarPlugins: [
      DayGridPlugin,
      TimeGridPlugin,
      InteractionPlugin,
      ListPlugin,
      Header,
    ],
  }),
  components: { Fullcalendar },
};
</script>

<style></style>
