<template>
  <div class="wrapper">
    <form @submit.prevent="signup()">
      <nav>
        <router-link to="/">Se connecter</router-link> |
        <router-link to="/signupViews" class="active">S'inscrire</router-link>
      </nav>

      <label for="signup-employe">employe :</label>
      <input id="signup-employe" type="text" placeholder="employe" required />

      <label for="signup-password">Mot de passe :</label>
      <input
        id="signup-password"
        type="password"
        placeholder="Mot de passe"
        required
      />

      <label for="signup-password-verification"
        >Vérification du mot de passe :</label
      >
      <input
        id="signup-password-verification"
        type="password"
        placeholder="Vérifier mot de passe"
        required
      />

      <label for="signup-email">Email :</label>
      <input id="signup-email" type="email" placeholder="Email" required />

      <button id="signup-btn" type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupViews",

  data() {},

  methods: {
    signup() {
      const employe = document.getElementById("signup-employe").value;
      const password = document.getElementById("signup-password").value;
      const passwordVerif = document.getElementById(
        "signup-password-verification"
      ).value;
      const email = document.getElementById("signup-email").value;

      if (password === passwordVerif) {
        axios
          .post(
            `http://localhost:3000/api/auth/signup`,
            {
              employe,
              password,
              email,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              location.href = "/";
            }
          })
          .catch((error) => {
            if (error.status === 401) {
              ({ message: "erreur d inscription" });
            }
          });
      }
    },
  },
};
</script>

<style scoped></style>
