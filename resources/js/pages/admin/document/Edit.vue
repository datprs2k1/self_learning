<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <Breadcrumbs />
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

                <form @submit.prevent="submit()" enctype="multipart/form-data">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="name">Tên tài liệu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="document.name"
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
                      <label for="name">Nội dung</label>
                      <input
                        type="text"
                        class="form-control"
                        id="content"
                        placeholder="Nhập tên lớp."
                        name="content"
                        v-model="document.content"
                        :class="{ 'is-invalid': errors.content }"
                      />
                      <span
                        v-if="errors.content"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.content[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="name">File</label>
                      <b-form-file
                        v-model="document.file"
                        :state="Boolean(document.file)"
                        placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."
                      ></b-form-file>
                      <span
                        v-if="errors.file"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.file[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="class">Tên lớp</label>
                      <b-form-select
                        v-model="document.class_id"
                        :options="CLASSES"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.class_id }"
                        @change="getSubject()"
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
                    <div class="form-group">
                      <label for="class">Tên môn học</label>
                      <b-form-select
                        v-model="document.subj_id"
                        :options="subject"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.subj_id }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn lớp --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.subj_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.subj_id[0] }}</span
                      >
                    </div>
                  </div>

                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
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
      subject: [],
      errors: {},
    };
  },
  async created() {
    await this.getDocument(this.$route.params.id);
    await this.getCLASSES();
    await this.getSubject();
  },
  methods: {
    ...mapActions("document", ["getDocument"]),
    ...mapActions("CLASS", ["getCLASSES"]),
    async submit() {
      try {
        const formData = new FormData();
        formData.append("id", this.document.id);
        formData.append("name", this.document.name);
        formData.append("content", this.document.content);
        formData.append("file", this.document.file);
        formData.append("subj_id", this.document.subj_id);
        formData.append("class_id", this.document.class_id);
        formData.append("_method", "put");

        await this.$store.dispatch("document/edit", formData);
        this.$swal({
          title: "Thành công",
          text: "Thêm khoa thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });

        this.$router.push({
          name: "document.index",
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    getSubject() {
      this.subject = this.CLASSES.find(
        (CLASS) => CLASS.id == this.document.class_id
      ).subject;
    },
  },
  computed: {
    ...mapGetters("document", ["document"]),
    ...mapGetters("CLASS", ["CLASSES"]),
  },
};
</script>
