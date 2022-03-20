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

                                <form>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name">Mã môn học</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Nhập mã môn học."
                                                name="name"
                                                v-model="subject.code"
                                                :class="{
                                                    'is-invalid': errors.code,
                                                }"
                                            />
                                            <span
                                                v-if="errors.code"
                                                id="exampleInputEmail1-error"
                                                class="error invalid-feedback"
                                                >{{ errors.code[0] }}</span
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label for="name"
                                                >Tên môn học</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="name"
                                                placeholder="Nhập tên môn."
                                                name="name"
                                                v-model="subject.name"
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

                                        <div class="form-group">
                                            <label for="class"
                                                >Số tuần học</label
                                            >
                                            <b-form-select
                                                v-model="subject.weeks"
                                                :options="options"
                                                :class="{
                                                    'is-invalid': errors.weeks,
                                                }"
                                            >
                                            </b-form-select>
                                            <span
                                                v-if="errors.weeks"
                                                id="exampleInputEmail1-error"
                                                class="error invalid-feedback"
                                                >{{ errors.weeks[0] }}</span
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
            subject: {
                name: "",
                code: "",
                weeks: 15,
            },
            options: [
                { value: 15, text: "15" },
                { value: 14, text: "14" },
                { value: 13, text: "13" },
                { value: 12, text: "12" },
                { value: 11, text: "11" },
                { value: 10, text: "10" },
            ],
            errors: {},
        };
    },
    created() {
        window.addEventListener("keyup", (e) => {
            if (e.key == "Enter") {
                this.submit();
            }
        });
    },
    methods: {
        ...mapActions("CLASS", ["getCLASSES"]),
        async submit() {
            try {
                await this.$store.dispatch("subject/add", this.subject);
                this.$swal({
                    title: "Thành công",
                    text: "Thêm thành công.",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                    width: 360,
                });
                this.subject = {
                    name: "",
                    code: "",
                    weeks: 15,
                };
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
    },
    computed: {
        ...mapGetters("CLASS", ["CLASSES"]),
    },
};
</script>
