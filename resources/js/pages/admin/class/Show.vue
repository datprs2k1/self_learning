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
                  <div class="row">
                    <div class="col-12">
                      <h4>
                        Lớp: {{ CLASS.name }}
                        <div class="float-right">
                          Khoa: {{ CLASS.department.name }}
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.subject variant="info"
                      >Danh sách môn học
                      <b-badge variant="primary">{{
                        CLASS.subject.length
                      }}</b-badge>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="subject"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <b-table
                          :items="CLASS.subject"
                          :fields="subject"
                          :current-page="subjectopt.currentPage"
                          :per-page="subjectopt.perPage"
                          :sort-by.sync="subjectopt.sortBy"
                          :sort-desc.sync="subjectopt.sortDesc"
                        >
                          <template #cell(index)="row">
                            {{ row.index + 1 }}
                          </template>
                        </b-table>
                        <b-pagination
                          v-model="subjectopt.currentPage"
                          :total-rows="subjectopt.rows"
                          :per-page="subjectopt.perPage"
                          align="fill"
                          class="my-0 mt-3"
                        ></b-pagination>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.student variant="info"
                      >Danh sách sinh viên
                      <b-badge variant="primary">{{
                        CLASS.student.length
                      }}</b-badge>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="student"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-table
                      :items="CLASS.student"
                      :fields="student"
                      :current-page="studentotp.currentPage"
                      :per-page="studentotp.perPage"
                      :sort-by.sync="studentotp.sortBy"
                      :sort-desc.sync="studentotp.sortDesc"
                    >
                      <template #cell(index)="row">
                        {{ row.index + 1 }}
                      </template>
                    </b-table>
                    <b-pagination
                      v-model="studentotp.currentPage"
                      :total-rows="studentotp.rows"
                      :per-page="studentotp.perPage"
                      align="fill"
                      class="my-0 mt-3"
                    ></b-pagination>
                  </b-collapse>
                </b-card>
                <div class="card-footer"></div>
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
      subject: [
        {
          key: "index",
          label: "STT",
        },
        {
          key: "name",
          label: "Tên môn học",
          class: "text-center",
          sortable: true,
        },
      ],
      student: [
        {
          key: "index",
          label: "STT",
        },
        {
          key: "name",
          label: "Tên sinh viên",
          class: "text-center",
          sortable: true,
        },
      ],
      subjectopt: {
        currentPage: 1,
        perPage: 10,
        pageOptions: [10, 25, 50, 100, 500],
        sortDesc: false,
      },
      studentotp: {
        currentPage: 1,
        perPage: 10,
        pageOptions: [10, 25, 50, 100, 500],
        sortDesc: false,
      },
    };
  },
  created() {
    this.getCLASS(this.$route.params.id);
  },
  methods: {
    ...mapActions("CLASS", ["getCLASS"]),
  },
  computed: {
    ...mapGetters("CLASS", ["CLASS"]),
  },
};
</script>
