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
                                    <router-link to="/adminpanel"
                                        >Tổng Quan</router-link
                                    >
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
                                    <b-row>
                                        <b-col md="1">
                                            <b-form-select
                                                id="per-page-select"
                                                v-model="perPage"
                                                :options="pageOptions"
                                                v-b-tooltip.hover.v-secondary="
                                                    'Số bản ghi trên một trang'
                                                "
                                            ></b-form-select>
                                        </b-col>
                                        <b-col md="">
                                            <span>
                                                <export-excel
                                                    :data="json_data"
                                                    class="btn btn-success"
                                                    name="Danh sách sinh viên.xls"
                                                    id="export-excel"
                                                    v-b-tooltip.hover.v-secondary="
                                                        'Xuất Excel các bản ghi đã chọn'
                                                    "
                                                >
                                                    <i
                                                        class="fa fa-file-excel"
                                                    ></i>
                                                </export-excel>
                                            </span>
                                            <span>
                                                <button
                                                    class="btn btn-warning"
                                                    v-b-tooltip.hover.v-secondary="
                                                        'Xuất PDF các bản ghi đã chọn'
                                                    "
                                                >
                                                    <i
                                                        class="fas fa-file-pdf"
                                                        @click="exportPdf"
                                                    ></i>
                                                </button>
                                            </span>

                                            <button
                                                @click="deleteMutiple"
                                                class="btn-danger btn"
                                                v-b-tooltip.hover.v-secondary="
                                                    'Xóa các bản ghi đã chọn'
                                                "
                                            >
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <router-link
                                                :to="{ name: 'student.add' }"
                                                class="btn btn-primary"
                                                v-b-tooltip.hover.v-secondary="
                                                    'Thêm mới bản ghi'
                                                "
                                            >
                                                <i class="fas fa-plus"></i>
                                            </router-link>
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

                                    <b-table
                                        :items="students"
                                        :fields="fields"
                                        :current-page="currentPage"
                                        :per-page="perPage"
                                        :sort-by.sync="sortBy"
                                        :sort-desc.sync="sortDesc"
                                        :filter="filter"
                                    >
                                        <template #head(checkbox)="">
                                            <b-form-checkbox
                                                @change="selectAll"
                                                v-model="allSelected"
                                                v-b-tooltip.hover.v-secondary
                                                title="Chọn tất cả"
                                            ></b-form-checkbox>
                                        </template>
                                        <template #cell(checkbox)="row">
                                            <b-form-group>
                                                <b-form-checkbox
                                                    v-model="selected"
                                                    :value="row.item.id"
                                                    @change="selectOne"
                                                ></b-form-checkbox>
                                            </b-form-group>
                                        </template>

                                        <template #cell(actions)="row">
                                            <span @click="row.toggleDetails">
                                                <i
                                                    class="fas fa-eye fa-lg"
                                                    v-b-tooltip.hover.v-secondary="
                                                        'Xem chi tiết'
                                                    "
                                                ></i>
                                            </span>
                                            <router-link
                                                :to="{
                                                    name: 'student.edit',
                                                    params: { id: row.item.id },
                                                }"
                                                ><i
                                                    class="fas fa-edit fa-lg"
                                                    v-b-tooltip.hover.v-secondary="
                                                        'Sửa bản ghi'
                                                    "
                                                ></i
                                            ></router-link>
                                            <span
                                                @click="
                                                    deleteStudent(row.item.id)
                                                "
                                            >
                                                <i
                                                    class="fas fa-trash-alt fa-lg"
                                                    v-b-tooltip.hover.v-secondary="
                                                        'Xóa bản ghi'
                                                    "
                                                ></i>
                                            </span>
                                        </template>
                                        <template #cell(index)="row">
                                            {{ row.index + 1 }}
                                        </template>
                                        <template #row-details="row">
                                            <b-list-group>
                                                <b-list-group-item
                                                    ><i
                                                        class="far fa-dot-circle"
                                                    ></i>
                                                    Ngày tạo:
                                                    {{
                                                        row.item.created_at
                                                    }}</b-list-group-item
                                                >
                                                <b-list-group-item
                                                    ><i
                                                        class="far fa-dot-circle"
                                                    ></i>
                                                    Ngày sửa gần nhất:
                                                    {{
                                                        row.item.updated_at
                                                    }}</b-list-group-item
                                                >
                                            </b-list-group>
                                        </template>
                                    </b-table>
                                    <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        align="fill"
                                        class="my-0 mt-3"
                                    ></b-pagination>
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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
export default {
    data() {
        return {
            selected: [],
            allSelected: false,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100, 500],
            sortDesc: false,
            sortBy: "checkbox",
            filter: null,
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
                    key: "email",
                    label: "Email",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "phone",
                    label: "SĐT",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "class.name",
                    label: "Tên lớp",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "department.name",
                    label: "Tên khoa",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "created_at",
                    label: "Ngày tạo",
                    class: "text-center",
                    thClass: "d-none",
                    tdClass: "d-none",
                },
                {
                    key: "updated_at",
                    label: "Ngày sửa",
                    class: "text-center",
                    thClass: "d-none",
                    tdClass: "d-none",
                },
                {
                    key: "actions",
                    label: "Hành động",
                    class: "text-center",
                    tdClass: "width-actions",
                },
            ],
            json_data: [],
            json_meta: [
                [
                    {
                        key: "charset",
                        value: "utf-8",
                    },
                ],
            ],
            pdf_data: [],
        };
    },
    created() {
        this.getStudents();
    },
    methods: {
        ...mapActions("student", ["getStudents", "delete"]),
        deleteStudent(id) {
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
                    await this.getStudents();
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
            this.getStudents();
            this.selected = checked ? this.students.map((item) => item.id) : [];
            this.json_data = checked
                ? this.students.map((item, index) => {
                      return {
                          STT: index + 1,
                          MSV: item.code,
                          "Họ tên": item.name,
                          Email: item.email,
                          SĐT: item.phone,
                          "Tên lớp": item.class.name,
                          "Tên khoa": item.department.name,
                          "Ngày tạo": item.created_at,
                          "Ngày sửa": item.updated_at,
                      };
                  })
                : [];
            this.pdf_data = checked
                ? this.students.map((item, index) => {
                      return [
                          index + 1,
                          item.code,
                          item.name,
                          item.email,
                          item.phone,
                          item.class.name,
                          item.department.name,
                      ];
                  })
                : [];
        },
        selectOne(checked) {
            if (checked) {
                this.json_data = this.students
                    .filter((item) => this.selected.includes(item.id))
                    .map((item, index) => {
                        return {
                            STT: index + 1,
                            MSV: item.code,
                            "Họ tên": item.name,
                            Email: item.email,
                            SĐT: item.phone,
                            "Tên lớp": item.class.name,
                            "Tên khoa": item.department.name,
                            "Ngày tạo": item.created_at,
                            "Ngày sửa": item.updated_at,
                        };
                    });
                this.pdf_data = this.students
                    .filter((item) => this.selected.includes(item.id))
                    .map((item, index) => {
                        return [
                            index + 1,
                            item.code,
                            item.name,
                            item.email,
                            item.phone,
                            item.class.name,
                            item.department.name,
                        ];
                    });
            }
            this.allSelected = this.students.length === this.selected.length;
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
                        "student/deleteMutiple",
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
                    await this.getStudents();
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
                    text: "MSV",
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
                    text: "Email",
                    fillColor: "#6c7ae0",
                    color: "white",
                    alignment: "center",
                },
                {
                    text: "SĐT",
                    fillColor: "#6c7ae0",
                    color: "white",
                    alignment: "center",
                },
                {
                    text: "Tên lớp",
                    fillColor: "#6c7ae0",
                    color: "white",
                    alignment: "center",
                },
                {
                    text: "Tên khoa",
                    fillColor: "#6c7ae0",
                    color: "white",
                    alignment: "center",
                },
            ]);
            var docDefinition = {
                // in theo chiều ngang trang giấy
                pageOrientation: "landscape",
                header: {
                    text: "DANH SÁCH SINH VIÊN",
                    alignment: "center",
                    bold: "true",
                    fontSize: 20,
                },
                content: [
                    {
                        table: {
                            headerRows: 1,
                            widths: ["auto", "*", "*", "*", "*", "*", "*"],
                            body: this.pdf_data,
                        },
                    },
                ],
            };

            pdfMake.vfs = pdfFonts.pdfMake.vfs;
            pdfMake
                .createPdf(docDefinition)
                .download("Danh sách sinh viên.pdf");
        },
    },
    computed: {
        ...mapGetters("student", ["students"]),
        rows() {
            return this.students.length;
        },
    },
    mounted() {},
};
</script>

<style scoped></style>
