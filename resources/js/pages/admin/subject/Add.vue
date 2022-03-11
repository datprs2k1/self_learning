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
                      <label for="name">Tên môn học</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên khoa."
                        name="name"
                        v-model="subject.name"
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
                      <label for="class">Tên lớp</label>
                      <b-form-select
                        v-model="subject.class_id"
                        :options="CLASSES"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.class_id }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn lớp --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.class_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.class_id[0] }}</span
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
      subject: {
        name: "",
        class_id: null,
      },
      errors: {},
    };
  },
  created() {
    this.getCLASSES();
    if (this.$route.params.class_id) {
      this.subject.class_id = this.$route.params.class_id;
    }
    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {
    ...mapActions("CLASS", ["getCLASSES"]),
    async submit() {
      try {
        await this.$store.dispatch("subject/add", this.subject);
        this.$swal({
          title: "Thành công",
          text: "Thêm thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.subject = {
          name: "",
          class_id: null,
        };
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
  computed: {
    ...mapGetters("CLASS", ["CLASSES"]),
  },
};
</script>
