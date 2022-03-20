<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <Breadcrumbs />

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
                   <p>Lớp {{ CLASS.name }}</p>
                <p>Môn {{ subject.name }} ({{subject.code}})</p>
                <p>class_id: {{class_id}}</p>
                <p>subject_id: {{subject_id}}</p>
                  <b-row>
                    <b-col md="1"></b-col>
                    <b-col md="10" class="my-1">
                      <div v-for="item in weeks" :key="item.week">
                        <b-list-group class="mb-5">
                          Tuần {{item.week}}
                          <b-list-group-item href="#"><i
                          class="fas fa-graduation-cap fa-lg text-success"
                        ></i>Slide bài giảng {{ item.week }}</b-list-group-item>
                          <b-list-group-item href="#"><i class="fas fa-video fa-lg text-danger"></i> Video bài giảng {{ item.week }}</b-list-group-item>
                          <b-list-group-item href="#"><i class="fas fa-file-invoice fa-lg mr-2 text-warning"></i> Bài luyện tập {{ item.week }}</b-list-group-item>
                        </b-list-group>
                      </div>
                    </b-col>
                    <b-col md="1"></b-col>

                  </b-row>

                 
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
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
        subject_id: null,
        class_id: null,
        subject: {},
        weeks: [],
    };
  },
  created() {
    if (this.$route.query.c_id && this.$route.query.s_id) {
      this.class_id = this.$route.query.c_id;
    this.subject_id = this.$route.query.s_id;
    } else {
      return this.$router.push({ name: '404' });
    }
    
   this.getCLASS(this.class_id);
   this.getSubject();
   this.getWeeks();
    
  },
  methods: {
    ...mapActions('CLASS',["getCLASS"]),
    getSubject() {
      for (let i = 0; i < this.CLASS.subject.length; i++) {
      if (this.CLASS.subject[i].id == this.subject_id) {
        this.subject = this.CLASS.subject[i];
      }
    }
    },
    getWeeks() {
      for (let i = 0; i < this.subject.weeks; i++) {
      let object = { week: i + 1, lessons: [] };
      this.weeks.push(object);
    }
    }
  },
  computed: {
    ...mapGetters("CLASS", ["CLASS"]),
  },
  mounted() {},
};
</script>

<style scoped></style>
