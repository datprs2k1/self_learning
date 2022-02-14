<template>
  <div>
    <div
      class="site-section ftco-subscribe-1 site-blocks-cover pb-4"
      style="background-image: url('images/bg_1.jpg'); margin-top: 90px"
    >
      <div class="container">
        <div class="row align-items-end justify-content-center text-center">
          <div class="col-lg-7">
            <h2 class="mb-0">Đăng nhập</h2>
            <p>Học trực tuyến cùng UTT</p>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-breadcrumns border-bottom">
      <div class="container">
        <a href="/home">Trang chủ</a>
        <span class="mx-3 icon-keyboard_arrow_right"></span>
        <span class="current">Đăng nhập</span>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="row">
              <span
                id="error"
                :class="{ shake: animated }"
                v-if="errors.email"
                >{{ errors.email[0] }}</span
              >
              <span
                id="error"
                :class="{ shake: animated }"
                v-else-if="errors.password"
                >{{ errors.password[0] }}</span
              >
              <div class="col-md-12 form-group">
                <label for="username">Tài khoản</label>
                <input
                  type="text"
                  id="username"
                  name="email"
                  class="form-control form-control"
                  v-model="form.email"
                />
              </div>
              <div class="col-md-12 form-group">
                <label for="pword">Mật khẩu</label>
                <input
                  type="password"
                  id="pword"
                  class="form-control form-control"
                  name="password"
                  v-model="form.password"
                />
              </div>
              <div class="col-md-12 form-group">
                <input class="checkbox" type="checkbox" /> Lưu thông tin đăng
                nhập
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary px-5"
                  @click="login"
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      animated: false,
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", this.form);
        if (this.$store.getters['auth/getCurrentUser'].role == 'admin') {
          this.$router.push("adminpanel");
        } else if (this.$store.getters['auth/getCurrentUser'].role == 'lecturer') {
          this.$router.push("lecturer");
        } else if (this.$store.getters['auth/getCurrentUser'].role == 'student') {
          this.$router.push("student");
        }
      } catch (error) {
        this.errors = error.response.data.errors;
        this.clickHandler();
      }
    },
    //tao animation error
    clickHandler() {
      this.animated = true;
      setTimeout(() => {
        this.animated = false;
      }, 1000);
    },
  },
  created() {
    //ấn enter trên bàn phím thực hiện login
    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.login();
      }
    });
  },
};
</script>

<style scoped>
#error {
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 8px 0;
  outline: none;
  border-radius: 5px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
}

.checkbox {
  cursor: pointer;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
