<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <Breadcrumbs />

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title"></h3>
                </div>

                <form>
                  <div class="card-body">
                    
                    <div class="form-group">
                      <label for="name">Họ tên</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập họ tên."
                        name="name"
                        v-model="teacher.name"
                        :class="{ 'is-invalid': errors.name }"
                      />
                      <span
                        v-if="errors.name"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.name[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Nhập email."
                        name="email"
                        v-model="teacher.email"
                        :class="{ 'is-invalid': errors.email }"
                      />
                      <span
                        v-if="errors.email"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.email[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="phone">Số điện thoại</label>
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="Nhập số điện thoại."
                        name="phone"
                        v-model="teacher.phone"
                        :class="{ 'is-invalid': errors.phone }"
                      />
                      <span
                        v-if="errors.phone"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.phone[0] }}</span
                      >
                    </div>
                    
                  </div>

                  <div class="card-footer">
                    <button @click.prevent="submit()" class="btn btn-primary">
                      Xác nhận
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      teacher: {
        name: "",
        email: "",
        phone: "",
      },
      errors: {},
    };
  },
  created() {
    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("teacher/add", this.teacher);
        this.$swal({
          title: "Thành công",
          text: "Thêm thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.teacher = {
          name: "",
          email: "",
          phone: "",
        };
        this.errors = {
          name: "",
          email: "",
          phone: "",
        };
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    
  },
};
</script>
