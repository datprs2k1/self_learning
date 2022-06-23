<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Bảng Khoa</h3>
                </div>

                <!-- /.card-header -->
                <div class="card-body" style="overflow-x: auto">
                  <div class="row">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p>Lớp {{ CLASS.name }}</p>
                        <p>Môn {{ subject.name }} ({{ subject.code }})</p>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="viewResult()"
                        >
                          Xem điểm
                        </button>
                      </div>
                      <div>
                        <div v-if="teacherSC && teacherSC.length > 0">
                          <p>Thông tin giảng viên</p>
                          <p>
                            {{ teacherSC[0].name }}
                          </p>
                          <p>
                            {{ teacherSC[0].phone }}
                          </p>
                          <p>
                            {{ teacherSC[0].email }}
                          </p>
                          <button
                            class="btn btn-primary"
                            @click="getTeacher()"
                            v-if="is('admin')"
                          >
                            Sửa giảng viên
                          </button>
                        </div>
                        <div v-else>
                          <p>Chưa có giảng viên</p>
                          <button
                            class="btn btn-primary"
                            @click="getTeacher()"
                            v-if="is('admin')"
                          >
                            Thêm giảng viên
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <b-row>
                    <b-col md="1"></b-col>
                    <b-col md="10" class="my-1">
                      <div v-for="item in weeks" :key="item.week">
                        <b-list-group class="mb-5">
                          Tuần {{ item.week }}
                          <b-list-group-item @click="getSlide(item.week)" href="#"
                            ><i class="fas fa-graduation-cap fa-lg text-success"></i>Slide
                            bài giảng
                            {{ item.week }}
                            <b-button
                              @click.stop="getCurrentLesson(item.week)"
                              v-b-modal.modal-slide
                              class="float-right p-0 pl-1 btn-warning btn-sm"
                              ><i class="fas fa-edit"></i
                            ></b-button>
                          </b-list-group-item>

                          <b-list-group-item href="#" @click="getVideo(item.week)"
                            ><i class="fas fa-video fa-lg text-danger"></i>
                            Video bài giảng
                            {{ item.week }}
                            <b-button
                              @click.stop="getCurrentLesson(item.week)"
                              v-b-modal.modal-video
                              class="float-right p-0 pl-1 btn-warning btn-sm"
                              ><i class="fas fa-edit"></i
                            ></b-button>
                          </b-list-group-item>
                          <b-list-group-item href="#"
                            ><i class="fas fa-file-invoice fa-lg mr-2 text-warning"></i>
                            Bài luyện tập
                            {{ item.week }}
                            <b-button
                              @click.stop="
                                getCurrentLesson(item.week);
                                getCurrentQuestions(item.week);
                              "
                              v-b-modal.modal-test
                              class="float-right p-0 pl-1 btn-warning btn-sm"
                              ><i class="fas fa-edit"></i
                            ></b-button>
                          </b-list-group-item>
                        </b-list-group>
                      </div>
                    </b-col>
                    <b-col md="1"></b-col>
                  </b-row>
                  <b-modal
                    id="modal-slide"
                    size="lg"
                    :title="'Slide Bài Giảng Tuần ' + lesson.week"
                    ref="modalSlide"
                  >
                    <b-form-group label="Tên bài giảng" label-for="name-input">
                      <b-form-input
                        id="name-input"
                        v-model="lesson.name"
                        required
                        :class="{
                          'is-invalid': errors.name,
                        }"
                      ></b-form-input>
                      <span
                        v-if="errors.name"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.name[0] }}</span
                      >
                    </b-form-group>
                    <b-form-group label="Nội dung" label-for="slide-input">
                      <b-form-file
                        v-model="lesson.path"
                        id="slide-input"
                        plain
                        :class="{
                          'is-invalid': errors.path,
                        }"
                      ></b-form-file>
                      <span
                        v-if="errors.path"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.path[0] }}</span
                      >
                    </b-form-group>
                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="primary" @click="submitSlide">
                          Xác nhận
                        </b-button>
                        <b-button variant="secondary" @click="cancel()"> Hủy </b-button>
                      </div>
                    </template>
                  </b-modal>

                  <b-modal
                    id="modal-video"
                    size="lg"
                    :title="'Video Bài Giảng Tuần ' + lesson.week"
                    ref="modalVideo"
                  >
                    <b-form-group label="Nội dung" label-for="slide-input">
                      <b-form-input
                        v-model="lesson.video_path"
                        required
                        :class="{
                          'is-invalid': errors.video_path,
                        }"
                      ></b-form-input>
                      <span
                        v-if="errors.video_path"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.video_path[0] }}</span
                      >
                    </b-form-group>
                    <div
                      class="d-flex justify-content-center"
                      v-if="this.lesson.video_path != null"
                    >
                      <LazyYoutube :src="this.lesson.video_path" />
                    </div>

                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="primary" @click="submitVideo">
                          Xác nhận
                        </b-button>
                        <b-button variant="secondary" @click="cancel()"> Hủy </b-button>
                      </div>
                    </template>
                  </b-modal>
                  <b-modal
                    id="modal-view-video"
                    size="lg"
                    :title="'Video Bài Giảng Tuần ' + lesson.week"
                    ref="modalViewVideo"
                  >
                    <b-form-group>
                      <div
                        class="d-flex justify-content-center"
                        v-if="this.lesson.video_path != null"
                      >
                        <LazyYoutube :src="this.lesson.video_path" :autoplay="true" />
                      </div>
                    </b-form-group>
                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="danger" @click="ok()"> Đóng </b-button>
                      </div>
                    </template>
                  </b-modal>
                  <b-modal
                    id="modal-test"
                    size="lg"
                    :title="'Bài Luyện Tập Tuần ' + lesson.week"
                    ref="modalTest"
                  >
                    <b-form-group label="Nhập số câu hỏi" label-for="name-input">
                      <div class="row">
                        <div class="col-md-10">
                          <b-form-input
                            id="name-input"
                            type="number"
                            v-model="number_question"
                            required
                            min="1"
                            :class="{
                              'is-invalid': errors.name,
                            }"
                          ></b-form-input>
                        </div>
                        <div class="col-md-2">
                          <b-button variant="primary" @click="createQuestion()">
                            Thêm
                          </b-button>
                        </div>
                      </div>
                    </b-form-group>
                    <b-form-group label="Thời gian làm bài (phút)" label-for="name-input">
                      <div class="row">
                        <div class="col-md-12">
                          <b-form-input
                            id="name-input"
                            type="number"
                            v-model="total_time"
                            required
                            min="1"
                            max="120"
                            :class="{
                              'is-invalid': errors.name,
                            }"
                          ></b-form-input>
                        </div>
                      </div>
                    </b-form-group>

                    <div v-if="questions.length > 0">
                      <div v-for="(question, index) in questions" :key="question.id">
                        <b-form-group>
                          <div class="row mb-3">
                            <div class="col-md-10">
                              <label for="question">Câu hỏi {{ index + 1 }}</label>
                            </div>
                            <div class="col-md-2">
                              <b-button
                                variant="danger"
                                @click="removeQuestion(index, question.id)"
                              >
                                Xóa
                              </b-button>
                            </div>
                          </div>
                          <b-form-input
                            id="question"
                            v-model="question.question"
                            required
                          >
                          </b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Đáp án"
                          v-slot="{ ariaDescribedby }"
                          label-for="name-input"
                        >
                          <div class="row mb-3">
                            <div class="col-md-6">
                              <b-form-radio
                                v-model="question.correct_Answer"
                                :aria-describedby="ariaDescribedby"
                                :value="1"
                              >
                                <label for="answer_A">Đáp án A</label>
                                <b-form-input
                                  id="answer_A"
                                  v-model="question.answer_A"
                                  required
                                  :value="1"
                                ></b-form-input>
                              </b-form-radio>
                            </div>
                            <div class="col-md-6">
                              <b-form-radio
                                v-model="question.correct_Answer"
                                :aria-describedby="ariaDescribedby"
                                name="answer"
                                :value="2"
                              >
                                <label for="answer_B">Đáp án B</label>
                                <b-form-input
                                  id="answer_B"
                                  v-model="question.answer_B"
                                  required
                                  :value="2"
                                ></b-form-input>
                              </b-form-radio>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <b-form-radio
                                v-model="question.correct_Answer"
                                :aria-describedby="ariaDescribedby"
                                name="answer_C"
                                :value="3"
                              >
                                <label for="answer_C">Đáp án C</label>
                                <b-form-input
                                  id="answer_C"
                                  v-model="question.answer_C"
                                  required
                                ></b-form-input>
                              </b-form-radio>
                            </div>
                            <div class="col-md-6">
                              <b-form-radio
                                v-model="question.correct_Answer"
                                :aria-describedby="ariaDescribedby"
                                name="answer_D"
                                :value="4"
                              >
                                <label for="answer_D">Đáp án D</label>
                                <b-form-input
                                  id="answer_D"
                                  v-model="question.answer_D"
                                  required
                                  :value="4"
                                ></b-form-input>
                              </b-form-radio>
                            </div>
                          </div>
                        </b-form-group>
                      </div>
                    </div>
                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="primary" @click="addQuestions">
                          Xác nhận
                        </b-button>
                        <b-button variant="secondary" @click="cancel()"> Hủy </b-button>
                      </div>
                    </template>
                  </b-modal>

                  <b-modal
                    id="modal-teacher"
                    size="lg"
                    :title="'Thêm giảng viên'"
                    ref="modalTeacher"
                  >
                    <b-form-group label="Nội dung" label-for="slide-input">
                      <multiselect
                        v-model="teacher_id"
                        selectLabel="Nhấn enter hoặc click để chọn"
                        selectedLabel="Đang được chọn"
                        noOptions="Trống"
                        deselectLabel="Nhấn enter hoặc click để bỏ chọn"
                        :options="teachersBySubject"
                        placeholder="Chọn giảng viên"
                        label="name"
                        track-by="id"
                      ></multiselect>
                      <span
                        v-if="errors.teacher_id"
                        id="exampleInputEmail1-error"
                        class="error invalid-feedback"
                        >{{ errors.teacher_id[0] }}</span
                      >
                    </b-form-group>

                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="primary" @click="addTeacher">
                          Xác nhận
                        </b-button>
                        <b-button variant="secondary" @click="cancel()"> Hủy </b-button>
                      </div>
                    </template>
                  </b-modal>
                  <b-modal
                    id="modal-result"
                    size="lg"
                    :title="'Xem kết quả'"
                    ref="modalResult"
                  >
                    <b-row>
                      <b-col md="">
                        <span>
                          <export-excel
                            :data="json_data"
                            class="btn btn-success"
                            name="Danh sách lớp.xls"
                            id="export-excel"
                            v-b-tooltip.hover.v-secondary="
                              'Xuất Excel các bản ghi đã chọn'
                            "
                          >
                            <i class="fa fa-file-excel"></i>
                          </export-excel>
                        </span>
                      </b-col>
                      <b-col md="">
                        <span>
                          <b-form-select
                            v-model="select"
                            :options="weeks"
                            value-field="week"
                            text-field="value"
                            @change="getValue"
                          >
                          </b-form-select>
                        </span>
                      </b-col>
                      <b-col md="4" class="my-1">
                        <b-form-group>
                          <b-input-group>
                            <b-form-input
                              id="filter-input"
                              v-model="filter"
                              type="search"
                              placeholder="Nhập từ khóa tìm kiếm"
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div class="form-group">
                      <b-table :items="data" :fields="fields" :filter="filter">
                        <template #cell(index)="row">
                          {{ row.index + 1 }}
                        </template>
                      </b-table>
                    </div>

                    <template #modal-footer="{ ok, cancel }">
                      <div>
                        <b-button variant="primary" @click="cancel()">
                          Xác nhận
                        </b-button>
                        <b-button variant="secondary" @click="cancel()"> Hủy </b-button>
                      </div>
                    </template>
                  </b-modal>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>

<script>
import api from "../../../services/api";
import { mapActions, mapGetters } from "vuex";
import Multiselect from "vue-multiselect";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      subject: {},
      weeks: [],
      lesson: {
        name: "",
        path: null,
        video_path: "",
        test_id: null,
        week: null,
        subject_id: null,
        class_id: null,
      },
      number_question: 1,
      questions: [],
      delete: [],
      errors: {},
      teacher_id: null,
      total_time: 1,
      result: [],
      fields: [
        {
          key: "index",
          label: "STT",
        },
        {
          key: "code",
          label: "MSV",
          class: "text-center",
          sortable: true,
        },
        {
          key: "name",
          label: "Họ tên",
          class: "text-center",
          sortable: true,
        },
        {
          key: "score",
          label: "Điểm",
          class: "text-center",
          sortable: true,
        },
        {
          key: "week",
          label: "Tuần",
          class: "text-center",
          sortable: true,
        },
      ],
      filter: null,
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      select: 1,
      pdf_data: [],
      data: [],
    };
  },
  async created() {
    if (this.$route.query.c_id && this.$route.query.s_id) {
      this.lesson.class_id = this.$route.query.c_id;
      this.lesson.subject_id = this.$route.query.s_id;
    } else {
      return this.$router.push({ name: "404" });
    }

    await this.getCLASS(this.lesson.class_id);
    await this.getSubject();
    await this.getWeeks();
    await this.getTeachersBySubject(this.lesson.subject_id);
    await this.getTeacherSC({
      class_id: this.lesson.class_id,
      subject_id: this.lesson.subject_id,
    });
    await this.getResult();

    await this.getValue();
    this.teacher_id = this.CLASS.teacher[0];

    this.json_data = this.result.map((item, index) => {
      return {
        STT: index + 1,
        "Mã sinh viên": item.code,
        "Họ tên": item.name,
        Điểm: item.score,
        Tuần: item.week,
      };
    });

    this.pdf_data = this.result.map((item, index) => {
      return [index + 1, item.student.code, item.student.name, item.score];
    });
  },
  methods: {
    ...mapActions("CLASS", ["getCLASS"]),
    ...mapActions("teacher", ["getTeacherSC", "getTeachersBySubject"]),
    async getValue() {
      this.data = this.result.filter((item) => {
        return item.week == this.select;
      });
    },

    async getResult() {
      this.result = null;
      const data = await api.post("/teacher/xemketqua", {
        class_id: this.lesson.class_id,
        subject_id: this.lesson.subject_id,
        week: this.subject.weeks,
      });

      this.result = data.data;
    },

    viewResult() {
      this.$refs.modalResult.show();
    },

    exportPdf() {
      if (this.pdf_data.length === 0) return;
      this.pdf_data.unshift([
        {
          text: "STT",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Mã sinh viên",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Họ tên",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Điểm",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
      ]);
      var docDefinition = {
        header: {
          text: "DANH SÁCH ĐIỂM",
          alignment: "center",
          bold: "true",
          fontSize: 20,
        },
        content: [
          {
            table: {
              headerRows: 1,
              widths: ["auto", "*", "*", "*", "*"],
              body: this.pdf_data,
            },
          },
        ],
      };

      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.createPdf(docDefinition).download("Danh sách lớp.pdf");
    },

    getSubject() {
      for (let i = 0; i < this.CLASS.subject.length; i++) {
        if (this.CLASS.subject[i].id == this.lesson.subject_id) {
          this.subject = this.CLASS.subject[i];
        }
      }
    },
    getWeeks() {
      for (let i = 0; i < this.subject.weeks; i++) {
        let object = {
          week: i + 1,
          lessons: [],
          value: "Tuần " + (i + 1),
        };
        this.weeks.push(object);
      }
    },
    getCurrentLesson(week) {
      let lesson = this.CLASS.lesson.filter(
        (item) =>
          item.week == week &&
          item.subject_id == this.lesson.subject_id &&
          item.class_id == this.lesson.class_id
      );
      if (lesson.length != 0) {
        this.lesson = lesson[0];
        this.lesson.path = null;
      } else {
        this.lesson.name = "";
        this.lesson.path = null;
        this.lesson.video_path = "";
        this.lesson.week = week;
      }
    },
    getCurrentQuestions(week) {
      let questions = this.CLASS.question.filter(
        (item) =>
          item.week == week &&
          item.subject_id == this.lesson.subject_id &&
          item.class_id == this.lesson.class_id
      );
      if (questions.length != 0) {
        this.questions = questions;
        this.number_question = questions.length;
        this.total_time = questions[0].total_time;
      } else {
        this.questions = [];
        this.number_question = 1;
        this.total_time = 1;
      }
    },
    setEmptyLesson() {
      this.lesson.name = null;
      this.lesson.path = null;
      this.lesson.video_path = "";
      this.lesson.week = null;
      this.errors = {};
    },
    async submitSlide() {
      try {
        const formData = new FormData();
        formData.append("name", this.lesson.name);
        formData.append("path", this.lesson.path);
        formData.append("video_path", null);
        formData.append("week", this.lesson.week);
        formData.append("subject_id", this.lesson.subject_id);
        formData.append("class_id", this.lesson.class_id);
        formData.append("type", "slide");

        await this.$store.dispatch("lesson/add", formData);
        this.$swal({
          title: "Thành công",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.setEmptyLesson();
        this.$refs.modalSlide.hide();
        this.getCLASS(this.lesson.class_id);
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    async submitVideo() {
      try {
        const formData = new FormData();
        formData.append("video_path", this.lesson.video_path);
        formData.append("week", this.lesson.week);
        formData.append("subject_id", this.lesson.subject_id);
        formData.append("class_id", this.lesson.class_id);
        formData.append("type", "video");
        await this.$store.dispatch("lesson/add", formData);
        this.$swal({
          title: "Thành công",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.setEmptyLesson();
        this.$refs.modalVideo.hide();
        this.getCLASS(this.lesson.class_id);
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    async getSlide(week) {
      await this.getCLASS(this.lesson.class_id);
      let slide = this.CLASS.lesson.filter(
        (item) =>
          item.week == week &&
          item.subject_id == this.lesson.subject_id &&
          item.class_id == this.lesson.class_id
      );
      if (slide.length == 0) {
        this.$swal({
          title: "Chưa có nội dung slide",
          icon: "info",
          width: 480,
        });
      } else {
        if (slide[0].path == null) {
          this.$swal({
            title: "Chưa có nội dung slide",
            icon: "info",
            width: 480,
          });
        } else {
          this.lesson = slide[0];
          window.open("../files/" + this.lesson.path, "_blank");
        }
      }
    },
    async getVideo(week) {
      await this.getCLASS(this.lesson.class_id);
      let video = this.CLASS.lesson.filter(
        (item) =>
          item.week == week &&
          item.subject_id == this.lesson.subject_id &&
          item.class_id == this.lesson.class_id
      );
      if (video.length == 0) {
        this.$swal({
          title: "Chưa có nội dung video",
          icon: "info",
          width: 480,
        });
      } else {
        if (video[0].video_path == null) {
          this.$swal({
            title: "Chưa có nội dung video",
            icon: "info",
            width: 480,
          });
        } else {
          this.lesson = video[0];
          this.$refs.modalViewVideo.show();
        }
      }
    },
    async getTeacher() {
      this.$refs.modalTeacher.show();
    },
    async addTeacher() {
      try {
        const formData = new FormData();
        formData.append("teacher_id", this.teacher_id.id);
        formData.append("class_id", this.lesson.class_id);
        formData.append("subject_id", this.lesson.subject_id);
        await this.$store.dispatch("teacher/addTeacher", formData);
        this.$swal({
          title: "Thành công",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.$refs.modalTeacher.hide();
        this.getCLASS(this.lesson.class_id);
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    createQuestion() {
      for (let i = 0; i < this.number_question; i++) {
        let question = {
          id: i,
          question: "",
          correct_Answer: 0,
          answer_A: "",
          answer_B: "",
          answer_C: "",
          answer_D: "",
          week: this.lesson.week,
          subject_id: this.lesson.subject_id,
          class_id: this.lesson.class_id,
        };
        this.questions.push(question);
      }
    },
    removeQuestion(index, id) {
      this.delete.push(id);
      this.questions.splice(index, 1);
    },
    async addQuestions() {
      try {
        const formData = new FormData();
        formData.append("questions", JSON.stringify(this.questions));
        formData.append("delete", JSON.stringify(this.delete));
        formData.append("total_time", this.total_time);
        await this.$store.dispatch("question/add", formData);
        this.$swal({
          title: "Thành công",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 1000,
          width: 360,
        });
        this.setEmptyLesson();
        this.$refs.modalTest.hide();
        this.getCLASS(this.lesson.class_id);
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
  },
  computed: {
    ...mapGetters("CLASS", ["CLASS"]),
    ...mapGetters("teacher", ["teacherSC", "teachersBySubject"]),
  },
  mounted() {},
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped></style>
