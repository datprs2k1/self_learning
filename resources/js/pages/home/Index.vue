<template>
  <div>
    <header id="appHeader" class="app-header" role="banner">
      <app-header></app-header>
    </header>
    <main id="appMain" class="app-main">
      <router-view></router-view>
    </main>
    <footer id="appFooter" class="app-footer">
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
