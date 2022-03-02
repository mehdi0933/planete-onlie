<template>
  <div class="rdv">
    <Header v-if="connected" />
    <router-link to="/ToutRdv">Se ToutRdv</router-link> |
    <router-link to="/FormulaireRdv" class="active">FormulaireRdv</router-link>
    <div class="rdv-create-btn" @click="visible = true">Ajouter un post</div>
    <div class="wrapper">
      <form class="rdv-form" @submit.prevent="sendrdv()">
        <label for="rdv-libelle" type="text">libelle</label><br />
        <input id="rdv-libelle" type="text" required /><br />

        <label for="rdv-employe">employe</label><br />
        <input id="rdv-employe" type="text" required /><br />

        <label for="rdv-dateDeDébut">date de début</label><br />
        <input id="rdv-dateDeDébut" type="date" required /><br />

        <label for="rdv-heuresDeDébut">heures de debut</label><br />
        <input id="rdv-heuresDeDébut" type="time" required /><br />

        <label for="rdv-dateDeFin">date de fin</label><br />
        <input id="rdv-dateDeFin" type="date" required /><br />

        <input id="rdv-heuresDeFin" type="time" required /><br />
        <label for="rdv-heuresDeFin">heures de fin</label><br />

        <button id="rdv-btn" type="submit">Publier</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/component/HeaderComponent.vue";

export default {
  name: "rdv",
  components: {
    Header,
  },

  data() {
    return {
      content: "",
    };
  },
  formatDate(date) {
    // model de ma date
    var options = { year: "numeric", month: "2-digit", day: "2-digit" };
    let string = date.toLocaleDateString("ko-KR", options).replace(/\. /g, "-");

    return string.substr(0, string.length - 1);
  },

  methods: {
    sendrdv() {
      const libelle = document.getElementById("rdv-libelle").value;
      const employe = document.getElementById("rdv-employe").value;
      const dateDeDébut = document.getElementById("rdv-dateDeDébut").value;
      const dateDeFin = document.getElementById("rdv-dateDeFin").value;
      const heuresDeDébut = document.getElementById("rdv-heuresDeDébut").value;
      const heursDeFin = document.getElementById("rdv-heuresDeFin").value;
      axios
        .post(
          `http://localhost:3000/api/tache/voireTache`,
          {
            libelle,
            employe,
            dateDeDébut,
            dateDeFin,
            heuresDeDébut,
            heursDeFin,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((this.visible = false))
        .then(this.$root.$emit("Posts"));
    },
  },
};
</script>

<style></style>
