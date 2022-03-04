<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Thêm Mới Khoa</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <router-link to="/adminpanel">Tổng Quan</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link :to="{ name: 'department.index' }"
                    >Khoa</router-link
                  >
                </li>
                <li class="breadcrumb-item active">Thêm Mới Khoa</li>
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
                      <label for="code">Mã khoa</label>
                      <input
                        type="text"
                        class="form-control"
                        id="code"
                        placeholder="Nhập mã khoa."
                        name="code"
                        v-model="department.code"
                        :class="{ 'is-invalid': errors.code }"
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
                        v-model="department.name"
                        :class="{ 'is-invalid': errors.name }"
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
export default {
  data() {
    return {
      department: {
        code: "",
        name: "",
      },
      errors: {},
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("department/add", this.department);
        this.$swal({
          title: "Thành công",
          text: "Thêm thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.department = {
          code: "",
          name: "",
        };
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
  created() {
    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
};
</script>
