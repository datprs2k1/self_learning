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
            errors: {},
            options: [
              {text: '15', value: 15},
              {text: '14', value: 14},
              {text: '13', value: 13},
              {text: '12', value: 12},
              {text: '11', value: 11},
              {text: '10', value: 10},
            ]
        };
    },
    created() {
        this.getSubject(this.$route.params.id);
        window.addEventListener("keyup", (e) => {
            if (e.key == "Enter") {
                this.submit();
            }
        });
    },
    methods: {
        ...mapActions("subject", ["getSubject"]),
        async submit() {
            try {
                await this.$store.dispatch("subject/edit", this.subject);
                this.$swal({
                    title: "Thành công",
                    text: "Sửa thành công.",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                    width: 360,
                });
                this.$router.push({
                    name: "subject.index",
                });
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
    },
    computed: {
        ...mapGetters("subject", ["subject"]),
    },
};
</script>
