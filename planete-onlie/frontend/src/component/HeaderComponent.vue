<template>
  <div class="header">
    <router-link to="/">
      <nav>
        <div id="disconnect-btn" @click="disconnect()">Se déconnecter</div>
      </nav>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",

  methods: {
    disconnect() {
      localStorage.removeItem("user");
      location.href = "/";
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 70px 20px 70px;
}

nav {
  display: flex;
}

nav div {
  margin-left: 30px;
  font-weight: bold;
  cursor: pointer;
  transition-duration: 0.2s;
}

.fas {
  font-size: 1.5rem;
}

nav div:hover {
  color: rgb(117, 117, 117);
}
</style>
