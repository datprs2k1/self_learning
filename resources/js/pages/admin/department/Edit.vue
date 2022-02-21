<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Chỉnh Sửa Khoa</h1>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/adminpanel">Tổng Quan</router-link></li>
                <li class="breadcrumb-item "><router-link :to="{ name: 'department.index' }">Khoa</router-link></li>
                <li class="breadcrumb-item active">Chỉnh Sửa Khoa</li>
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
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title"></h3>
                                </div>

                                <form>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="department_id"
                                                >Mã khoa</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="department_id"
                                                placeholder="Nhập mã khoa."
                                                name="department_id"
                                                v-model="
                                                    Department.department_id
                                                "
                                                :class="{
                                                    'is-invalid':
                                                        errors.department_id,
                                                }"
                                            />
                                            <span
                                                v-if="errors.department_id"
                                                id="exampleInputEmail1-error"
                                                class="error invalid-feedback"
                                                >{{
                                                    errors.department_id[0]
                                                }}</span
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Tên khoa</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Nhập tên khoa."
                                                name="name"
                                                v-model="Department.name"
                                                :class="{
                                                    'is-invalid': errors.name,
                                                }"
                                            />
                                            <span
                                                v-if="errors.name"
                                                id="exampleInputEmail1-error"
                                                class="error invalid-feedback"
                                                >{{ errors.name[0] }}</span
                                            >
                                        </div>
                                    </div>

                                    <div class="card-footer">
                                        <button
                                            @click.prevent="submit()"
                                            class="btn btn-primary"
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </form>
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
            errors: {},
        };
    },
    async created() {
        await this.getDepartment(this.$route.params.id);
    },
    methods: {
        async submit() {
            try {
                await this.$store.dispatch("department/edit", this.Department);
                this.$swal({
                    title: "Thành công",
                    text: "Sửa khoa thành công.",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                    width: 360,
                });
                this.$router.push({
                    name: "department.index",
                });
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
        ...mapActions("department", ["getDepartment"]),
    },
    computed: {
        ...mapGetters("department", ["Department"]),
    },
};
</script>
