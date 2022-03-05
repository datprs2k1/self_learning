<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <Breadcrumbs/>

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
                      <label for="code">Mã khoa</label>
                      <input
                        type="text"
                        class="form-control"
                        id="code"
                        placeholder="Nhập mã khoa."
                        name="code"
                        v-model="Department.code"
                        :class="{
                          'is-invalid': errors.code,
                        }"
                      />
                      <span
                        v-if="errors.code"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.code[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="name">Tên khoa</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên khoa."
                        name="name"
                        v-model="Department.name"
                        :class="{
                          'is-invalid': errors.name,
                        }"
                      />
                      <span
                        v-if="errors.name"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.name[0] }}</span
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
      errors: {},
    };
  },
  async created() {
    await this.getDepartment(this.$route.params.id);
    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("department/edit", this.Department);
        this.$swal({
          title: "Thành công",
          text: "Sửa thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.$router.push({
          name: "department.index",
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    ...mapActions("department", ["getDepartment"]),
  },
  computed: {
    ...mapGetters("department", ["Department"]),
  },
};
</script>
