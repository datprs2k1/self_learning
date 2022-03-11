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
                      <label for="name">Câu hỏi</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="question.question"
                        :class="{ 'is-invalid': errors.question }"
                      />
                      <span
                        v-if="errors.question"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.question[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Đáp án A</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="question.Ans_A"
                        :class="{ 'is-invalid': errors.Ans_A }"
                      />
                      <span
                        v-if="errors.Ans_A"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.Ans_A[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Đáp án B</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="question.Ans_B"
                        :class="{ 'is-invalid': errors.Ans_B }"
                      />
                      <span
                        v-if="errors.Ans_B"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.Ans_B[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Đáp án C</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="question.Ans_C"
                        :class="{ 'is-invalid': errors.Ans_C }"
                      />
                      <span
                        v-if="errors.Ans_C"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.Ans_C[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Đáp án D</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nhập tên lớp."
                        name="name"
                        v-model="question.Ans_D"
                        :class="{ 'is-invalid': errors.Ans_D }"
                      />
                      <span
                        v-if="errors.Ans_A"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.Ans_D[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Đáp án đúng</label>
                      <br />
                      <b-form-radio-group
                        id="btn-radios-2"
                        v-model="question.Correct_Ans"
                        :options="options"
                        button-variant="outline-primary"
                        class="mb-3"
                        name="radio-btn-outline"
                        buttons
                      ></b-form-radio-group>
                      <span
                        v-if="errors.Correct_Ans"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.Correct_Ans[0] }}</span
                      >
                    </div>
                    <div class="form-group">
                      <label for="dept">Tên đề thi</label>
                      <b-form-select
                        v-model="question.test_id"
                        :options="tests"
                        text-field="name"
                        value-field="id"
                        :class="{ 'is-invalid': errors.test_id }"
                      >
                        <template #first>
                          <b-form-select-option :value="null" disabled
                            >-- Chọn khoa --</b-form-select-option
                          >
                        </template>
                      </b-form-select>
                      <span
                        v-if="errors.test_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.test_id[0] }}</span
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
      question: {
        question: "",
        Ans_A: "",
        Ans_B: "",
        Ans_C: "",
        Ans_D: "",
        Correct_Ans: "",
        test_id: null,
      },
      options: [
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
        { text: "D", value: "D" },
      ],
      errors: {},
      selected: null,
    };
  },
  created() {
    this.getTests();
    if (this.$route.params.test_id) {
      this.question.test_id = this.$route.params.test_id;
    }

    window.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        this.submit();
      }
    });
  },
  methods: {
    ...mapActions("test", ["getTests"]),
    async submit() {
      try {
        await this.$store.dispatch("question/add", this.question);
        this.$swal({
          title: "Thành công",
          text: "Thêm thành công.",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.question = {
          question: "",
          Ans_A: "",
          Ans_B: "",
          Ans_C: "",
          Ans_D: "",
          Correct_Ans: "",
          test_id: null,
        };
        this.errors = {
          question: "",
          Ans_A: "",
          Ans_B: "",
          Ans_C: "",
          Ans_D: "",
          Correct_Ans: "",
          test_id: "",
        };
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
  computed: {
    ...mapGetters("test", ["tests"]),
  },
};
</script>
