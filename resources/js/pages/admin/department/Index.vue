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
                                <li class="breadcrumb-item active">
                                    Khoa
                                </li>
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
                                    <b-button
                                        @click="deleteMutiple"
                                        class="float-right btn-sm"
                                        >Xóa nhiều</b-button
                                    >

                                    <b-table
                                        striped
                                        :items="departments"
                                        :fields="fields"
                                        id="example1"
                                    >
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
                                                @click="
                                                    deleteDepartment(
                                                        row.item.id
                                                    )
                                                "
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
            this.selected = checked
                ? this.departments.map((item) => item.id)
                : [];
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
                    await this.$store.dispatch(
                        "department/deleteMutiple",
                        this.selected
                    );
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
                    location.reload();
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
    mounted() {
        let plugina = document.createElement("script");
        plugina.setAttribute(
            "src",
            "../../../../admin/plugins/jquery/jquery.min.js"
        );
        document.body.appendChild(plugina);
        let pluginb = document.createElement("script");
        pluginb.setAttribute(
            "src",
            "../../../../admin/plugins/bootstrap/js/bootstrap.bundle.min.js"
        );
        document.body.appendChild(pluginb);
        let plugin = document.createElement("script");
        plugin.setAttribute(
            "src",
            "../../../../admin/plugins/datatables/jquery.dataTables.min.js"
        );
        document.body.appendChild(plugin);
        let plugin1 = document.createElement("script");
        plugin1.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
        );
        document.body.appendChild(plugin1);
        // let plugin2 = document.createElement('script');
        // plugin2.setAttribute('src', '../../../../admin/plugins/datatables-responsive/js/dataTables.responsive.min.js');
        // document.body.appendChild(plugin2);
        // let plugin3 = document.createElement('script');
        // plugin3.setAttribute('src', '../../../../admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js');
        // document.body.appendChild(plugin3);
        let plugin4 = document.createElement("script");
        plugin4.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-buttons/js/dataTables.buttons.min.js"
        );
        document.body.appendChild(plugin4);
        let plugin5 = document.createElement("script");
        plugin5.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"
        );
        document.body.appendChild(plugin5);
        let plugin6 = document.createElement("script");
        plugin6.setAttribute(
            "src",
            "../../../../admin/plugins/jszip/jszip.min.js"
        );
        document.body.appendChild(plugin6);
        let plugin7 = document.createElement("script");
        plugin7.setAttribute(
            "src",
            "../../../../admin/plugins/pdfmake/pdfmake.min.js"
        );
        document.body.appendChild(plugin7);
        let plugin8 = document.createElement("script");
        plugin8.setAttribute(
            "src",
            "../../../../admin/plugins/pdfmake/vfs_fonts.js"
        );
        document.body.appendChild(plugin8);
        let plugin9 = document.createElement("script");
        plugin9.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-buttons/js/buttons.html5.min.js"
        );
        document.body.appendChild(plugin9);
        let plugin10 = document.createElement("script");
        plugin10.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-buttons/js/buttons.print.min.js"
        );
        document.body.appendChild(plugin10);
        let plugin11 = document.createElement("script");
        plugin11.setAttribute(
            "src",
            "../../../../admin/plugins/datatables-buttons/js/buttons.colVis.min.js"
        );
        document.body.appendChild(plugin11);
        let plugin12 = document.createElement("script");
        plugin12.setAttribute(
            "src",
            "../../../../admin/plugins/button-datatable.js"
        );
        document.body.appendChild(plugin12);
    },
};
</script>
<style scoped></style>
