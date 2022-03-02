<template>
  <div class="taches">
    <Header v-if="connected" />
    <article class="tache" v-for="tache in taches" :key="tache.id">
      <h2 class="tache-libelle">{{ tache.libelle }}</h2>
      <p class="tache-employe">{{ tache.employe }}</p>
      <p class="tache-employe">{{ tache.dateDeDébut }}</p>
      <p class="tache-employe">{{ tache.heuresDeDébut }}</p>

      <p class="tache-employe">{{ tache.dateDeFin }}</p>
      <p class="tache-employe">{{ tache.heursDeFin }}</p>

      <button class="delete-btn" @click="deletet()">Supprimer le tache</button>
      <button class="trier-btn" @click="trierDate()">trier par date</button>
      <button class="trier-btn" @click="trierTache()">trier par tache</button>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/component/HeaderComponent.vue";

export default {
  name: "taches",

  components: {
    Header,
  },
  data() {
    return {
      taches: [],
      visible: false,
    };
  },

  mounted() {
    if (localStorage.user != undefined) {
      this.getAllTache();
    }
  },

  methods: {
    getAllTache() {
      axios
        .get(`http://localhost:3000/tache/voireTache`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((res) => {
          this.taches = res.data;
        });
    },
    deletet() {
      const tacheId = this.$route.params.id;

      axios
        .delete(`http://localhost:3000/tache/supprirmeTache/${tacheId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((location.href = "/"));
    },

    trierDate(a, b) {
      const key1 = new Date(a.date);
      const key2 = new Date(b.date);

      if (key1 < key2) {
        return -1;
      } else if (key1 > key2) {
        return 1;
      } else {
        return 0;
      }
    },
    trierTache(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    },
    dateFormat(date) {
      const event = new Date(date);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };

      return event.toLocaleDateString("fr-FR", options);
    },
  },
};
</script>
