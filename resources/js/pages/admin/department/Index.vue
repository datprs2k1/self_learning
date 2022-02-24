<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Quản Lý Khoa</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <router-link to="/adminpanel">Tổng Quan</router-link>
                </li>
                <li class="breadcrumb-item active">Khoa</li>
              </ol>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>

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
                  <b-button @click="deleteMutiple" class="float-right btn-sm"
                    >Xóa nhiều</b-button
                  >

                  <b-table :items="departments" :fields="fields" id="example1">
                    <template #head(checkbox)="">
                      <b-form-checkbox
                        @change="selectAll"
                        v-model="allSelected"
                      ></b-form-checkbox>
                    </template>
                    <template #cell(checkbox)="row">
                      <b-form-group>
                        <b-form-checkbox
                          v-model="selected"
                          :value="row.item.id"
                        ></b-form-checkbox>
                      </b-form-group>
                    </template>

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
                    <template #cell(index)="row">
                      {{ row.index + 1 }}
                    </template>
                  </b-table>
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
      selected: [],
      allSelected: false,

      fields: [
        {
          key: "checkbox",
        },
        {
          key: "index",
          label: "STT",
        },
        {
          key: "code",
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
        title: "Bạn chắc chắn muốn xóa?",
        text: "Bạn sẽ không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý!",
        cancelButtonText: "Hủy",
        width: 480,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.delete(id);
          this.$swal({
            title: "Đã xóa!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
          await this.getDepartments();
        } else {
          this.$swal({
            title: "Hủy xóa!",
            icon: "info",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
        }
      });
    },
    selectAll(checked) {
      this.getDepartments();
      this.selected = checked ? this.departments.map((item) => item.id) : [];
    },
    deleteMutiple() {
      this.$swal({
        title: "Bạn chắc chắn muốn xóa?",
        text: "Bạn sẽ không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý!",
        cancelButtonText: "Hủy",
        width: 480,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.$store.dispatch("department/deleteMutiple", this.selected);
          this.$swal({
            title: "Đã xóa!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
          await this.getDepartments();
          // lỗi hiển thị lại khi select tất cả fix tạm thời
        } else {
          this.$swal({
            title: "Hủy xóa!",
            icon: "info",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
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
  mounted() {},
};
</script>
<style scoped></style>
