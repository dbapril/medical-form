<template>
  <div id="app" class="content-wrapper">
    <header class="header">
      <h1 class="header__title">Информация о пациентах</h1>
    </header>
    <main class="main">
      <img
        class="illustration"
        src="./components/illustration/illustration.svg"
        alt="women with laptop"
      />
      <section class="profile-filling">
        <h2 class="profile-filling__title">Заполните свой профиль и получите 100 баллов</h2>
        <p class="profile-filling__info">
          Заполните базовую информацию о себе, чтобы мы могли подбирать для вас
          интересные акции и статьи. Информация о пациенте используется только
          для{{"\u00A0"}}автозаполнения формы записи и{{"\u00A0"}}не{{"\u00A0"}}видна другим пользователям.
        </p>
        <div class="button-wrapper">
          <button type="button" class="filling-button">
            <span class="filling-button__text">Перейти к заполнению</span>
            <span class="filling-button__delimiter"></span>
            <img src="./components/filling-button/union-icon.png" alt class="filling-button__union" />
            <span class="filling-button__text">+100</span>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form
  }
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
