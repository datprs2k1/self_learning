<template>
  <!-- HEADER khi chưa login -->
  <!-- HEADER khi chưa login -->
  <!-- HEADER khi chưa login -->
  <div id="header">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <div class="py-2 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-9 d-none d-lg-block">
            <a href="#" class="small mr-3"
              ><span class="icon-map-marker mr-2"></span> 54 Triều Khúc, Thanh
              Xuân, Hà Nội</a
            >
            <a href="#" class="small mr-3"
              ><span class="icon-phone2 mr-2"></span> 024 3854 4264</a
            >
            <a href="#" class="small mr-3"
              ><span class="icon-envelope-o mr-2"></span> utt@utt.edu.vn</a
            >
          </div>
          <div class="col-lg-3 text-right">
            <!-- <a href="/register" class="small mr-3"><span
                            class="icon-users"></span> Đăng ký</a> -->

            <div v-if="isLogin()">
              <button class="small btn btn-primary rounded-0">
                <span class="icon-unlock-alt"></span> Xin chào
                {{ getCurrentUser().name }}
              </button>
              <button @click="logout" class="small btn btn-primary rounded-0">
                <span class="icon-unlock-alt"></span> Đăng xuất
              </button>
            </div>
            <div v-else>
              <router-link
                :to="{ name: 'Login' }"
                class="small btn btn-primary py-2 rounded-0"
              >
                <span class="icon-unlock-alt"></span> Đăng nhập
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header
      class="site-navbar py-4 js-sticky-header site-navbar-target"
      role="banner"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="site-logo">
            <a href="/" class="d-block"
              ><img
                src="images/utt_selflearning2.png"
                width="180px"
                alt="Image"
                class="img-fluid"
            /></a>
          </div>
          <div class="mr-auto">
            <nav
              class="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul
                class="
                  site-menu
                  main-menu
                  js-clone-nav
                  mr-auto
                  d-none d-lg-block
                "
              >
                <li class="active">
                  <a href="/" class="nav-link text-left">Trang chủ</a>
                </li>
                <li class="has-children">
                  <a to="/about" class="nav-link text-left">Giới thiệu</a>
                  <ul class="dropdown">
                    <li>
                      <a href="/about" class="nav-link text-left"
                        >Our Teacher</a
                      >
                    </li>
                    <li>
                      <a href="/about" class="nav-link text-left"
                        >Our Student</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" class="nav-link text-left">Tin tức</a>
                </li>
                <li>
                  <a href="/courses" class="nav-link text-left">Khóa học</a>
                </li>
                <li>
                  <a href="/contact" class="nav-link text-left">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="ml-auto">
            <div class="social-wrap">
              <!-- <a href="#"><span class="icon-facebook"></span></a>
                <a href="#"><span class="icon-twitter"></span></a>
                <a href="#"><span class="icon-linkedin"></span></a> -->

              <a
                href="#"
                class="
                  d-inline-block d-lg-none
                  site-menu-toggle
                  js-menu-toggle
                  text-black
                "
                ><span class="icon-menu h3"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("auth/logout");
        await this.$router.push({ name: "Home" });
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
.col-lg-9.d-none.d-lg-block > a {
  cursor: context-menu;
  color: gray;
}
</style>
