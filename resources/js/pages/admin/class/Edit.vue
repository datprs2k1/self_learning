<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Chỉnh Sửa Khoa</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <router-link to="/adminpanel">Tổng Quan</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link :to="{ name: 'class.index' }">Lớp</router-link>
                </li>
                <li class="breadcrumb-item active">Chỉnh Sửa Lớp</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

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
                      <label for="name">Tên lớp</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập mã khoa."
                        name="name"
                        v-model="CLASS.name"
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
                    <div class="form-group">
                      <label for="dept_id">Tên khoa</label>
                      <b-form-select
                        v-model="CLASS.dept_id"
                        :options="departments"
                        :class="{ 'is-invalid': errors.dept_id }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn khoa --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.dept_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.dept_id[0] }}</span
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
    await this.getDepartments();
    await this.getCLASS(this.$route.params.id);
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("CLASS/edit", this.CLASS);
        this.$swal({
          title: "Thành công",
          text: "Sửa khoa thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.$router.push({
          name: "class.index",
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    ...mapActions("department", ["getDepartments"]),
    ...mapActions("CLASS", ["getCLASS", "edit"]),
  },
  computed: {
    ...mapGetters("CLASS", ["CLASS"]),
    ...mapGetters("department", ["departments"]),
  },
};
</script>
