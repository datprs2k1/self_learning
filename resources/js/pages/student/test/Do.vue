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
                  <form>
                    <div
                      class="form-group mb-3"
                      v-for="(question, index) in questions"
                      :key="question.id"
                    >
                      <label for="name"
                        >Câu {{ index + 1 }}: {{ question.question }}</label
                      >
                      <b-form-group>
                        <b-form-radio v-model="selected[index]" value="A"
                          >A: {{ question.Ans_A }}</b-form-radio
                        >
                        <b-form-radio v-model="selected[index]" value="B"
                          >B: {{ question.Ans_B }}</b-form-radio
                        >
                        <b-form-radio v-model="selected[index]" value="C"
                          >C: {{ question.Ans_C }}</b-form-radio
                        >
                        <b-form-radio v-model="selected[index]" value="D"
                          >D: {{ question.Ans_D }}</b-form-radio
                        >
                      </b-form-group>
                    </div>
                    <button @click.prevent="getResult" class="success">
                      Kết thúc
                    </button>
                  </form>
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
      selected: [],
    };
  },
  created() {
    this.getTest(this.$route.params.id);
  },
  methods: {
    ...mapActions("question", ["getTest"]),
    ...mapActions("test", ["checkTest"]),
    async getResult() {
      try {
        const result = await this.checkTest({
          id: this.$route.params.id,
          selected: this.selected,
        });

        this.$swal({
          title: "Kết quả",
          text:
            "Bạn đã làm đúng " +
            result.result +
            " câu trong " +
            result.total +
            " câu",
          icon: "success",
          showConfirmButton: false,
          position: "top-end",
          timer: 2000,
          width: 360,
        });
      } catch (error) {}
    },
  },
  computed: {
    ...mapGetters("question", ["questions"]),
  },
};
</script>
