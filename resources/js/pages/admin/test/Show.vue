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
                <div class="card-body">
                  <div
                    class="form-group mb-3"
                    v-for="(question, index) in test.question"
                    :key="question.id"
                  >
                    <label for="name"
                      >Câu {{ index + 1 }}: {{ question.question }}</label
                    >
                    <b-form-group>
                      <b-form-radio
                        v-model="question.Correct_Ans"
                        :aria-describedby="ariaDescribedby"
                        value="A"
                        disabled
                        >A: {{ question.Ans_A }}</b-form-radio
                      >
                      <b-form-radio
                        v-model="question.Correct_Ans"
                        :aria-describedby="ariaDescribedby"
                        value="B"
                        disabled
                        >B: {{ question.Ans_B }}</b-form-radio
                      >
                      <b-form-radio
                        v-model="question.Correct_Ans"
                        :aria-describedby="ariaDescribedby"
                        value="C"
                        disabled
                        >C: {{ question.Ans_C }}</b-form-radio
                      >
                      <b-form-radio
                        v-model="question.Correct_Ans"
                        :aria-describedby="ariaDescribedby"
                        value="D"
                        disabled
                        >D: {{ question.Ans_D }}</b-form-radio
                      >
                    </b-form-group>
                    <b-alert variant="success" show
                      >Đáp án đúng: {{ question.Correct_Ans }}</b-alert
                    >
                  </div>
                </div>
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
      selected: null,
      currentPage: 1,
      perPage: 1,
    };
  },
  created() {
    this.getTest(this.$route.params.id);
  },
  methods: {
    ...mapActions("test", ["getTest"]),
  },
  computed: {
    ...mapGetters("test", ["test"]),
    rows() {
      return this.test.question.length;
    },
  },
};
</script>
