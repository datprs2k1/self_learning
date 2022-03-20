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
                      <label for="name">Tên bài giảng</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="lesson.name"
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
                      <label for="introduce">Giới thiệu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="introduce"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="lesson.introduce"
                        :class="{ 'is-invalid': errors.introduce }"
                      />
                      <span
                        v-if="errors.introduce"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.introduce[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="content">Nội dung</label>
                      <b-form-textarea
                        type="text"
                        class="form-control"
                        id="content"
                        placeholder="Nhập tên lớp."
                        name="content"
                        v-model="lesson.content"
                        rows="10"
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
                      <label for="class">Tên lớp</label>
                      <b-form-select
                        v-model="lesson.class_id"
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
                        v-model="lesson.subj_id"
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
      lesson: {
        name: "",
        introduce: "",
        content: "",
        class_id: null,
        subj_id: null,
      },
      subject: [],
      errors: {},
    };
  },
  created() {
    this.getCLASSES();
    this.getSubjects();
    if (this.$route.params.subj_id && this.$route.params.class_id) {
      this.lesson.subject_id = this.$route.params.subject_id;
      this.lesson.class_id = this.$route.params.class_id;
    }
    this.getSubject();
  },
  methods: {
    ...mapActions("CLASS", ["getCLASSES"]),
    ...mapActions("subject", ["getSubjects"]),
    async submit() {
      try {
        await this.$store.dispatch("lesson/add", this.lesson);
        this.$swal({
          title: "Thành công",
          text: "Thêm khoa thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.lesson = {
          name: "",
          introduce: "",
          content: "",
          class_id: null,
          subj_id: null,
        };
        this.errors = {
          name: "",
          introduce: "",
          content: "",
          class_id: "",
          subj_id: "",
        };
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    getSubject() {
      this.subject = this.subjects.filter(
        (subject) => subject.class_id == this.lesson.class_id
      );
    },
  },
  computed: {
    ...mapGetters("CLASS", ["CLASSES"]),
    ...mapGetters("subject", ["subjects"]),
  },
};
</script>
