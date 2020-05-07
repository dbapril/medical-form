<template>
  <form class="form" v-if="formVisibility">
    <div class="form__inner">
      <div class="form__header">
        <button type="button" class="form__close-button" @click="formVisibility = false">
          <svg width="13" height="13" viewBox="0 0 13 13">
            <path
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
            />
          </svg>
        </button>
        <h1 class="form__title">Личные данные</h1>
      </div>
      <div class="form__body">
        <section class="form__risk-factors">
          <h2 class="form__risk-factors-title">Факторы риска</h2>
          <p class="form__tip">
            Эта информация поможет разработать для вас индивидуальный план регулярных обследований,
            подбирать акции и полезные статьи
          </p>
          <h3 class="form__smoking-factor">Курение</h3>
            <radio-block v-for="item in smokingFactor" :key="item.id" :elem="item" name="smoking"></radio-block>
            <!-- <label :key="factor.id">
              <input type="radio" name="factor" :id="factor.id" :value="factor.value" />
            </label>
            <label :for="factor.id" :key="factor.value"></label> -->
        </section>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  name: "Form",
  data () {
    return {
      smokingFactor: [
        {id: 1, value: 'no', content: 'Не курю', checked: false},
        {id: 2, value: 'yes', content: 'Курю', checked: false},
        {id: 3, value: 'did', content: 'Бросил(а)', checked: true}
      ]
    }
  },
  computed: {
    formVisibility: {
      get: function() {
        return this.$store.getters.formVisibility;
      },
      set: function() {
        this.$store.commit("formVisibility", false);
      }
    }
  }
};
</script>
