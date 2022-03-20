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
                                                    Khoa:
                                                    {{ CLASS.department.name }}
                                                </div>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <b-card no-body class="mb-1">
                                    <b-card-header
                                        header-tag="header"
                                        class="p-1"
                                        role="tab"
                                    >
                                        <b-button
                                            block
                                            v-b-toggle.subject
                                            @click.prevent="setEmptySelected"
                                            variant="info"
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
                                        <div
                                            class="card-body"
                                            style="overflow-x: auto"
                                        >
                                            <b-row>
                                                <b-col md="1">
                                                    <b-form-select
                                                        id="per-page-select"
                                                        v-model="
                                                            subjectopt.perPage
                                                        "
                                                        :options="
                                                            subjectopt.pageOptions
                                                        "
                                                        v-b-tooltip.hover.v-secondary="
                                                            'Số bản ghi trên một trang'
                                                        "
                                                    ></b-form-select>
                                                </b-col>
                                                <b-col md="">
                                                    <button
                                                        @click="deleteSubjects"
                                                        class="btn-danger btn"
                                                        v-b-tooltip.hover.v-secondary="
                                                            'Xóa các bản ghi đã chọn'
                                                        "
                                                    >
                                                        <i
                                                            class="fas fa-trash"
                                                        ></i>
                                                    </button>
                                                </b-col>
                                                <b-col md="4" class="my-1">
                                                    <b-form-group>
                                                        <b-input-group>
                                                            <b-form-input
                                                                id="filter-input"
                                                                v-model="
                                                                    subjectopt.filter
                                                                "
                                                                type="search"
                                                                placeholder="Nhập từ khóa tìm kiếm"
                                                            ></b-form-input>
                                                        </b-input-group>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-table
                                                :items="CLASS.subject"
                                                :fields="subject"
                                                :current-page="
                                                    subjectopt.currentPage
                                                "
                                                :per-page="subjectopt.perPage"
                                                :sort-desc.sync="
                                                    subjectopt.sortDesc
                                                "
                                                :filter="subjectopt.filter"
                                            >
                                                <template #head(checkbox)="">
                                                    <b-form-checkbox
                                                        @change="
                                                            subjectSelectAll
                                                        "
                                                        v-model="subjectopt.allSelected"
                                                        v-b-tooltip.hover.v-secondary
                                                        title="Chọn tất cả"
                                                    ></b-form-checkbox>
                                                </template>
                                                <template #cell(checkbox)="row">
                                                    <b-form-group>
                                                        <b-form-checkbox
                                                            v-model="
                                                                subjectopt.selected
                                                            "
                                                            :value="row.item.id"
                                                            @change="subjectSelectOne"
                                                        ></b-form-checkbox>
                                                    </b-form-group>
                                                </template>

                                                <template #cell(actions)="row">
                                                    <router-link
                        :to="{
                          name: 'lesson.index',
                          query: {
                             
                                  s_id: row.item.id,
                                  c_id: CLASS.id
                          },
                        }"
                        ><i
                          class="fas fa-book-medical fa-lg"
                          v-b-tooltip.hover.v-secondary="'Bài giảng'"
                        ></i
                      ></router-link>
                                                    <span
                                                        @click="
                                                            deleteSubject(
                                                                row.item.id
                                                            )
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
                                            </b-table>
                                            <b-pagination
                                                v-model="subjectopt.currentPage"
                                                :total-rows="
                                                    this.CLASS.subject.length
                                                "
                                                :per-page="subjectopt.perPage"
                                                align="fill"
                                                class="my-0 mt-3"
                                            ></b-pagination>
                                        </div>
                                        <!-- /.card-body -->
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-1">
                                    <b-card-header
                                        header-tag="header"
                                        class="p-1"
                                        role="tab"
                                    >
                                        <b-button
                                            block
                                            v-b-toggle.student
                                            @click.prevent="setEmptySelected"
                                            variant="info"
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
                                        <div
                                            class="card-body"
                                            style="overflow-x: auto"
                                        >
                                            <b-row>
                                                <b-col md="1">
                                                    <b-form-select
                                                        id="per-page-select"
                                                        v-model="
                                                            studentotp.perPage
                                                        "
                                                        :options="
                                                            studentotp.pageOptions
                                                        "
                                                        v-b-tooltip.hover.v-secondary="
                                                            'Số bản ghi trên một trang'
                                                        "
                                                    ></b-form-select>
                                                </b-col>
                                                <b-col md="">
                                                    <button
                                                        @click="deleteStudents"
                                                        class="btn-danger btn"
                                                        v-b-tooltip.hover.v-secondary="
                                                            'Xóa các bản ghi đã chọn'
                                                        "
                                                    >
                                                        <i
                                                            class="fas fa-trash"
                                                        ></i>
                                                    </button>
                                                </b-col>
                                                <b-col md="4" class="my-1">
                                                    <b-form-group>
                                                        <b-input-group>
                                                            <b-form-input
                                                                id="filter-input"
                                                                v-model="
                                                                    studentotp.filter
                                                                "
                                                                type="search"
                                                                placeholder="Nhập từ khóa tìm kiếm"
                                                            ></b-form-input>
                                                        </b-input-group>
                                                    </b-form-group>
                                                </b-col>
                                            </b-row>

                                            <b-table
                                                :items="CLASS.student"
                                                :fields="student"
                                                :current-page="
                                                    studentotp.currentPage
                                                "
                                                :per-page="studentotp.perPage"
                                                :sort-desc.sync="
                                                    studentotp.sortDesc
                                                "
                                                :filter="studentotp.filter"
                                            >
                                                <template #head(checkbox)="">
                                                    <b-form-checkbox
                                                        @change="studentSelectAll"
                                                        v-model="
                                                            studentotp.allSelected
                                                        "
                                                        v-b-tooltip.hover.v-secondary
                                                        title="Chọn tất cả"
                                                    ></b-form-checkbox>
                                                </template>
                                                <template #cell(checkbox)="row">
                                                    <b-form-group>
                                                        <b-form-checkbox
                                                            v-model="
                                                                studentotp.selected
                                                            "
                                                            :value="row.item.id"
                                                            @change="studentSelectOne"
                                                        ></b-form-checkbox>
                                                    </b-form-group>
                                                </template>

                                                <template #cell(actions)="row">
                                                    <span
                                                        @click="
                                                            row.toggleDetails
                                                        "
                                                    >
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
                                                            params: {
                                                                id: row.item.id,
                                                            },
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
                                                            deleteStudent(
                                                                row.item.id
                                                            )
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
                                                                row.item
                                                                    .created_at
                                                            }}</b-list-group-item
                                                        >
                                                        <b-list-group-item
                                                            ><i
                                                                class="far fa-dot-circle"
                                                            ></i>
                                                            Ngày sửa gần nhất:
                                                            {{
                                                                row.item
                                                                    .updated_at
                                                            }}</b-list-group-item
                                                        >
                                                    </b-list-group>
                                                </template>
                                            </b-table>
                                            <b-pagination
                                                v-model="studentotp.currentPage"
                                                :total-rows="
                                                    this.CLASS.student.length
                                                "
                                                :per-page="studentotp.perPage"
                                                align="fill"
                                                class="my-0 mt-3"
                                            ></b-pagination>
                                        </div>
                                        <!-- /.card-body -->
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
                    key: "checkbox",
                    class: "text-center",
                },
                {
                    key: "index",
                    label: "STT",
                },
                {
                    key: "code",
                    label: "Mã môn học",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "name",
                    label: "Tên môn học",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "weeks",
                    label: "Số tuần học",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "actions",
                    label: "Hành động",
                    class: "text-center",
                },
            ],
            student: [
                {
                    key: "checkbox",
                    class: "text-center",
                },
                {
                    key: "index",
                    label: "STT",
                },
                {
                    key: "code",
                    label: "Mã sinh viên",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "name",
                    label: "Tên sinh viên",
                    class: "text-center",
                    sortable: true,
                },
                {
                    key: "actions",
                    label: "Hành động",
                    class: "text-center",
                },
            ],
            subjectopt: {
                selected: [],
                allSelected: false,
                currentPage: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100, 500],
                sortDesc: false,
                filter: null,
            },
            studentotp: {
                selected: [],
                allSelected: false,
                currentPage: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100, 500],
                sortDesc: false,
                filter: null,
            },
        };
    },
    created() {
        this.getCLASS(this.$route.params.id);
    },
    methods: {
        ...mapActions("CLASS", ["getCLASS"]),
        subjectSelectAll(checked) {
            this.subjectopt.selected = checked
                ? this.CLASS.subject.map((item) => item.id)
                : [];
        },
         subjectSelectOne(checked) {
            this.subjectopt.allSelected =
                this.CLASS.subject.length === this.subjectopt.selected.length;
            
        },
        studentSelectAll(checked) {
            this.studentotp.selected = checked
                ? this.CLASS.student.map((item) => item.id)
                : [];
        },
        studentSelectOne(checked) {
            
            this.studentotp.allSelected =
                this.CLASS.student.length === this.studentotp.selected.length;
        },
        deleteSubject(id) {
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
                    await this.$store.dispatch("CLASS/deleteSubject", {
                        subject_id: id,
                        class_id: this.$route.params.id,
                    });
                    this.$swal({
                        title: "Đã xóa!",
                        icon: "success",
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1000,
                        width: 360,
                    });
                    await this.getCLASS(this.$route.params.id);
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
        deleteSubjects() {
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
                    await this.$store.dispatch("CLASS/deleteSubjects", {
                        subject_ids: this.subjectopt.selected,
                        class_id: this.$route.params.id,
                    });
                    this.$swal({
                        title: "Đã xóa!",
                        icon: "success",
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1000,
                        width: 360,
                    });
                    await this.getCLASS(this.$route.params.id);
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
                    await this.getCLASS(this.$route.params.id);
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
        deleteStudents() {
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
                        this.studentotp.selected
                    );
                    this.$swal({
                        title: "Đã xóa!",
                        icon: "success",
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1000,
                        width: 360,
                    });
                    await this.getCLASS(this.$route.params.id);
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
        setEmptySelected() {
            this.subjectopt.selected = [];
            this.subjectopt.allSelected = false;
            this.studentotp.selected = [];
            this.studentotp.allSelected = false;
        },
    },
    computed: {
        ...mapGetters("CLASS", ["CLASS"]),
    },
};
</script>
