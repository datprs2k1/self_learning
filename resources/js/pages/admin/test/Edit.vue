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
                      <label for="name">Tên bài kiểm tra</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="test.name"
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
                      <label for="name">Loại</label>
                      <b-form-select
                        v-model="test.type"
                        :options="types"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.type }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn loại --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.type"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.type[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="class">Tên lớp</label>
                      <b-form-select
                        v-model="test.class_id"
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
                        v-model="test.subj_id"
                        :options="subject"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.subj_id }"
                        @change="getLesson()"
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
                    <div class="form-group">
                      <label for="class">Tên bài giảng</label>
                      <b-form-select
                        v-model="test.lesson_id"
                        :options="lesson"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.lesson_id }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn bài giảng --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.lesson_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.lesson_id[0] }}</span
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
      lesson: [],
      types: [
        { id: 1, name: "Ôn tập" },
        { id: 2, name: "Kiểm tra" },
      ],
      errors: {},
    };
  },
  async created() {
    await this.getTest(this.$route.params.id);
    await this.getCLASSES();
    await this.getSubjects();
    await this.getLessons();
    await this.getSubject();
    await this.getLesson();
  },
  methods: {
    ...mapActions("test", ["getTest"]),
    ...mapActions("CLASS", ["getCLASSES"]),
    ...mapActions("subject", ["getSubjects"]),
    ...mapActions("lesson", ["getLessons"]),
    async submit() {
      try {
        await this.$store.dispatch("test/edit", this.test);
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
          name: "test.index",
        });
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    getSubject() {
      this.subject = this.subjects.filter(
        (subject) => subject.class_id == this.test.class_id
      );
    },
    getLesson() {
      this.lesson = this.lessons.filter(
        (lesson) => lesson.subj_id == this.test.subj_id
      );
    },
  },
  computed: {
    ...mapGetters("test", ["test"]),
    ...mapGetters("CLASS", ["CLASSES"]),
    ...mapGetters("subject", ["subjects"]),
    ...mapGetters("lesson", ["lessons"]),
  },
};
</script>
