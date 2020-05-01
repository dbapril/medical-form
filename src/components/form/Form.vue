<template>
  <form class="form" v-if="formVisibility">
   <div class="form__header">
     <button type="button" class="form__close-button" @click="formVisibility = false">X</button>
     <h1 class="form__title">Личный данные</h1>
   </div>
  </form>
</template>


<script>
export default {
  name: 'Form',
  computed: {
    formVisibility: {
      get: function() {
        return this.$store.getters.formVisibility
      },
      set: function() {
        this.$store.commit('formVisibility', false)
      }
    }
  }
}
</script>
