<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <h1 v-if="is('admin')">Admin</h1>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Dashboard v1</li>
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
          <!-- Small boxes (Stat box) -->
          <div class="row">
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>{{ department }}</h3>

                  <p>Khoa</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>
                    {{ classes }}
                  </h3>

                  <p>Lớp</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-warning">
                <div class="inner">
                  <h3>{{ teacher }}</h3>

                  <p>Giảng viên</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-3 col-6">
              <!-- small box -->
              <div class="small-box bg-danger">
                <div class="inner">
                  <h3>{{ student }}</h3>

                  <p>Sinh viên</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></a>
              </div>
            </div>
            <!-- ./col -->
          </div>
          <!-- /.row -->
          <!-- Main row -->
          <!-- /.row (main row) -->
        </div>
        <!-- /.container-fluid -->
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
import api from "../../services/api";

export default {
  data() {
    return {
      department: 0,
      classes: 0,
      student: 0,
      teacher: 0,
    };
  },
  created() {
    this.getDepartmentCount();
    this.getClassCount();
    this.getStudentCount();
    this.getTeacherCount();
  },
  methods: {
    getDepartmentCount() {
      api.get("/department/count").then((response) => {
        this.department = response.data;
      });
    },
    getClassCount() {
      api.get("/class/count").then((response) => {
        this.classes = response.data;
      });
    },
    getStudentCount() {
      api.get("/student/count").then((response) => {
        console.log(response.data);
        this.student = response.data;
      });
    },
    getTeacherCount() {
      api.get("/teacher/count").then((response) => {
        this.teacher = response.data;
      });
    },
  },
  mounted() {
    let plugin = document.createElement("script");
    plugin.setAttribute("src", "../../../../admin/plugins/jquery/jquery.min.js");
    document.head.appendChild(plugin);
    let plugin1 = document.createElement("script");
    plugin1.setAttribute("src", "../../../../admin/plugins/jquery-ui/jquery-ui.min.js");
    document.head.appendChild(plugin1);
    let plugin2 = document.createElement("script");
    plugin2.setAttribute(
      "src",
      "../../../../admin/plugins/bootstrap/js/bootstrap.bundle.min.js"
    );
    document.head.appendChild(plugin2);
    let plugin3 = document.createElement("script");
    plugin3.setAttribute("src", "../../../../admin/plugins/chart.js/Chart.min.js");
    document.head.appendChild(plugin3);
    let plugin4 = document.createElement("script");
    plugin4.setAttribute("src", "../../../../admin/plugins/sparklines/sparkline.js");
    document.head.appendChild(plugin4);
    let plugin5 = document.createElement("script");
    plugin5.setAttribute("src", "../../../../admin/plugins/jqvmap/jquery.vmap.min.js");
    document.head.appendChild(plugin5);
    let plugin6 = document.createElement("script");
    plugin6.setAttribute(
      "src",
      "../../../../admin/plugins/jqvmap/maps/jquery.vmap.usa.js"
    );
    document.head.appendChild(plugin6);
    let plugin7 = document.createElement("script");
    plugin7.setAttribute(
      "src",
      "../../../../admin/plugins/jquery-knob/jquery.knob.min.js"
    );
    document.head.appendChild(plugin7);
    let plugin8 = document.createElement("script");
    plugin8.setAttribute("src", "../../../../admin/plugins/moment/moment.min.js");
    document.head.appendChild(plugin8);
    let plugin9 = document.createElement("script");
    plugin9.setAttribute(
      "src",
      "../../../../admin/plugins/daterangepicker/daterangepicker.js"
    );
    document.head.appendChild(plugin9);
    let plugin10 = document.createElement("script");
    plugin10.setAttribute(
      "src",
      "../../../../admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"
    );
    document.head.appendChild(plugin10);
    let plugin11 = document.createElement("script");
    plugin11.setAttribute(
      "src",
      "../../../../admin/plugins/summernote/summernote-bs4.min.js"
    );
    document.head.appendChild(plugin11);
    let plugin12 = document.createElement("script");
    plugin12.setAttribute(
      "src",
      "../../../../admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"
    );
    document.head.appendChild(plugin12);
    // let plugin13 = document.createElement('script');
    // plugin11.setAttribute('src', '../../../../admin/dist/js/adminlte.min.js');
    // document.head.appendChild(plugin13);
    let plugin14 = document.createElement("script");
    plugin14.setAttribute("src", "../../../../admin/dist/js/pages/dashboard.js");
    document.head.appendChild(plugin14);
  },
};
</script>
