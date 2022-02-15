<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
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
                <li class="breadcrumb-item"><a href="#">Home</a></li>
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
          <div class="row">
            <div class="col-md-12">
              <b-table
                striped
                hover
                :items="departments"
                :fields="fields"
                :per-page="perPage"
                :current-page="currentPage"
              >
                <template #cell(actions)="row">
                  <router-link
                    :to="{
                      name: 'department.edit',
                      params: { id: row.item.id },
                    }"
                    class="btn btn-primary me-5"
                    >Sửa</router-link
                  >
                  <button
                    class="btn btn-danger"
                    @click="deleteDepartment(row.item.id)"
                  >
                    Xoá
                  </button>
                </template>
              </b-table>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
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
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          key: "department_id",
          label: "Mã khoa",
          class: "text-center",
        },
        {
          key: "name",
          label: "Tên khoa",
          class: "text-center",
        },
        {
          key: "created_at",
          label: "Ngày tạo",
          class: "text-center",
        },
        {
          key: "actions",
          label: "Hành động",
          class: "text-center",
        },
      ],
    };
  },
  created() {
    this.getDepartments();
  },
  methods: {
    ...mapActions("department", ["getDepartments", "delete"]),
    deleteDepartment(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.delete(id);
          this.$swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          await this.getDepartments();
        } else {
          this.$swal("Your imaginary file is safe!");
        }
      });
    },
  },
  computed: {
    ...mapGetters("department", ["departments"]),
    rows() {
      return this.departments.length;
    },
  },
};
</script>
