<template>
  <div class="user_profile">
    <div class="user-block">
      <div class="avatar">
        <img :src="user.avatar_path" :alt="'Profil de: ' +  user.first_name  + ' ' + user.last_name ">
      </div>
      <h1>{{  user.first_name  + ' ' + user.last_name }}</h1>
    </div>

    <div class="form">
        <div class="form-control">
          <label>Prénom</label>
          <input type="text" v-model="form.first_name">
        </div>
        <div class="form-control">
          <label>Nom</label>
          <input type="text" v-model="form.last_name">
        </div>
        <div class="form-control mb-24">
          <label>Email</label>
          <input type="text" v-model="form.email">
        </div>
        <Button label="Enregistrer" type="submit" @click.native="updateProfile"/>
    </div>
  </div>
</template>
<script>
// Fait par Appoline
import Button from "../../components/Button";
import profileLayout from "../../layouts/profileLayout";
import axios from "axios";
export default {
  layout: 'profileLayout',
  components: {
    Button,
  },

  data() {
    return {
      user: '',
      form: {
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },

  mounted() {
    this.$store.commit('changeEstablishmentName', 'Profile'),
      axios.get('http://127.0.0.1:8000/api/user/' + this.$store.state.userID)
        .then((response) => {
          this.user = response.data
          this.form.first_name = response.data.first_name
          this.form.last_name = response.data.last_name
          this.form.email = response.data.email
        })
  },

  methods: {
    updateProfile() {
      const data = {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
      }

      // Lors d'une modif d'un email, notre API communique avec l'API de mailjet et envoie un email à la nouvelle adresse.
      // Teste avec ton adresse email
      axios.put('http://127.0.0.1:8000/api/user/update/' + this.$store.state.userID, {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
      })
        .then((response) => {
          this.user = response.data
          this.form.first_name = response.data.first_name
          this.form.last_name = response.data.last_name
          this.form.email = response.data.email
        }).catch((error) => {
          console.log(error)
      })
    }
  }

}
</script>

<style lang="scss">
@import './assets/scss/tools/variables';

.user_profile {
  padding: 0 16px;
  margin-top: 88px;
}
.user-block {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  .avatar {
    margin-right: 12px;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h1 {
    color:white;
    font-size: 18px;
    font-family: var(--title);
  }
}
.form-control {
  background: #303241;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
  label {
    display: block;
    padding-bottom: 8px;
    font-size: 14px;
  }
  input {
    width: 100%;
    font-size: 16px;
    background:transparent;
    border: none;
    outline: none;
    color:white;
  }
}
.mb-24 {
  margin-bottom: 24px;
}
</style>
