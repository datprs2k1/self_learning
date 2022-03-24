<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
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
                                    <p>
                                        Môn {{ subject.name }} ({{
                                            subject.code
                                        }})
                                    </p>
                                    <p>class_id: {{ lesson.class_id }}</p>
                                    <p>subject_id: {{ lesson.subject_id }}</p>
                                    <b-row>
                                        <b-col md="1"></b-col>
                                        <b-col md="10" class="my-1">
                                            <div style="margin-top: 100px">
                                                {{ lesson }}
                                            </div>

                                            <div
                                                v-for="item in weeks"
                                                :key="item.week"
                                            >
                                                <b-list-group class="mb-5">
                                                    Tuần {{ item.week }}
                                                    <b-list-group-item
                                                        @click="
                                                            getSlide(item.week)
                                                        "
                                                        href="#"
                                                        ><i
                                                            class="fas fa-graduation-cap fa-lg text-success"
                                                        ></i
                                                        >Slide bài giảng
                                                        {{ item.week }}
                                                        <b-button
                                                            @click.stop="
                                                                getCurrentLesson(
                                                                    item.week
                                                                )
                                                            "
                                                            v-b-modal.modal-slide
                                                            class="float-right p-0 pl-1 btn-warning btn-sm"
                                                            ><i
                                                                class="fas fa-edit"
                                                            ></i
                                                        ></b-button>
                                                    </b-list-group-item>

                                                    <b-list-group-item
                                                        href="#"
                                                        @click="
                                                            getVideo(item.week)
                                                        "
                                                        ><i
                                                            class="fas fa-video fa-lg text-danger"
                                                        ></i>
                                                        Video bài giảng
                                                        {{ item.week }}
                                                        <b-button
                                                            @click.stop="
                                                                getCurrentLesson(
                                                                    item.week
                                                                )
                                                            "
                                                            v-b-modal.modal-video
                                                            class="float-right p-0 pl-1 btn-warning btn-sm"
                                                            ><i
                                                                class="fas fa-edit"
                                                            ></i></b-button
                                                    ></b-list-group-item>
                                                    <b-list-group-item href="#"
                                                        ><i
                                                            class="fas fa-file-invoice fa-lg mr-2 text-warning"
                                                        ></i>
                                                        Bài luyện tập
                                                        {{ item.week }}
                                                        <b-button
                                                            @click.stop="
                                                                getCurrentLesson(
                                                                    item.week
                                                                )
                                                            "
                                                            class="float-right p-0 pl-1 btn-warning btn-sm"
                                                            ><i
                                                                class="fas fa-edit"
                                                            ></i></b-button
                                                    ></b-list-group-item>
                                                </b-list-group>
                                            </div>
                                        </b-col>
                                        <b-col md="1"></b-col>
                                    </b-row>
                                    <b-modal
                                        id="modal-slide"
                                        @ok="submitSlide"
                                        size="lg"
                                        :title="
                                            'Slide Bài Giảng Tuần ' +
                                            lesson.week
                                        "
                                    >
                                        <b-form-group
                                            label="Tên bài giảng"
                                            label-for="name-input"
                                        >
                                            <b-form-input
                                                id="name-input"
                                                v-model="lesson.name"
                                                required
                                            ></b-form-input>
                                        </b-form-group>
                                        <b-form-group
                                            label="Nội dung"
                                            label-for="slide-input"
                                        >
                                            <b-form-file
                                                v-model="lesson.path"
                                                id="slide-input"
                                                plain
                                            ></b-form-file>
                                        </b-form-group>
                                        <template
                                            #modal-footer="{ ok, cancel }"
                                        >
                                            <div>
                                                <b-button
                                                    variant="primary"
                                                    @click="ok()"
                                                >
                                                    Xác nhận
                                                </b-button>
                                                <b-button
                                                    variant="secondary"
                                                    @click="cancel()"
                                                >
                                                    Hủy
                                                </b-button>
                                            </div>
                                        </template>
                                    </b-modal>

                                    <b-modal
                                        id="modal-video"
                                        @ok="submitVideo"
                                        size="lg"
                                        :title="
                                            'Video Bài Giảng Tuần ' +
                                            lesson.week
                                        "
                                    >
                                        <b-form-group
                                            label="Nội dung"
                                            label-for="slide-input"
                                        >
                                            <b-form-input
                                                v-model="lesson.video_path"
                                                required
                                            ></b-form-input>
                                        </b-form-group>
                                        <div
                                            class="d-flex justify-content-center"
                                            v-if="
                                                this.lesson.video_path != null
                                            "
                                        >
                                            <LazyYoutube
                                                :src="this.lesson.video_path"
                                            />
                                        </div>

                                        <template
                                            #modal-footer="{ ok, cancel }"
                                        >
                                            <div>
                                                <b-button
                                                    variant="primary"
                                                    @click="ok()"
                                                >
                                                    Xác nhận
                                                </b-button>
                                                <b-button
                                                    variant="secondary"
                                                    @click="cancel()"
                                                >
                                                    Hủy
                                                </b-button>
                                            </div>
                                        </template>
                                    </b-modal>
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
            subject: {},
            weeks: [],
            lesson: {
                name: "",
                path: null,
                video_path: null,
                week: null,
                subject_id: null,
                class_id: null,
            },
        };
    },
    created() {
        if (this.$route.query.c_id && this.$route.query.s_id) {
            this.lesson.class_id = this.$route.query.c_id;
            this.lesson.subject_id = this.$route.query.s_id;
        } else {
            return this.$router.push({ name: "404" });
        }

        this.getCLASS(this.lesson.class_id);
        this.getSubject();
        this.getWeeks();
    },
    methods: {
        ...mapActions("CLASS", ["getCLASS"]),
        getSubject() {
            for (let i = 0; i < this.CLASS.subject.length; i++) {
                if (this.CLASS.subject[i].id == this.lesson.subject_id) {
                    this.subject = this.CLASS.subject[i];
                }
            }
        },
        getWeeks() {
            for (let i = 0; i < this.subject.weeks; i++) {
                let object = { week: i + 1, lessons: [] };
                this.weeks.push(object);
            }
        },
        getCurrentLesson(week) {
            let lesson = this.CLASS.lesson.filter(
                (item) =>
                    item.week == week &&
                    item.subject_id == this.lesson.subject_id &&
                    item.class_id == this.lesson.class_id
            );
            if (lesson.length != 0) {
                this.lesson = lesson[0];
                this.lesson.path = null;
            } else {
                this.lesson.name = "";
                this.lesson.path = null;
                this.lesson.video_path = null;
                this.lesson.week = week;
            }
        },
        setEmptyLesson() {
            this.lesson.name = "";
            this.lesson.path = null;
            this.lesson.video_path = null;
            this.lesson.week = null;
        },
        submitSlide() {
            try {
                const formData = new FormData();
                formData.append("name", this.lesson.name);
                formData.append("path", this.lesson.path);
                formData.append("video_path", null);
                formData.append("week", this.lesson.week);
                formData.append("subject_id", this.lesson.subject_id);
                formData.append("class_id", this.lesson.class_id);

                this.$store.dispatch("lesson/add", formData);
                this.$swal({
                    title: "Thành công",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                    width: 360,
                });
                this.setEmptyLesson();
                this.getCLASS(this.lesson.class_id);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
        submitVideo() {
            try {
                this.$store.dispatch("lesson/add", this.lesson);
                this.$swal({
                    title: "Thành công",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top-end",
                    timer: 1000,
                    width: 360,
                });
                this.setEmptyLesson();
                this.getCLASS(this.lesson.class_id);
            } catch (error) {
                this.errors = error.response.data.errors;
            }
        },
        async getSlide(week) {
            await this.getCLASS(this.lesson.class_id);
            let slide = this.CLASS.lesson.filter(
                (item) =>
                    item.week == week &&
                    item.subject_id == this.lesson.subject_id &&
                    item.class_id == this.lesson.class_id
            );
            console.log(slide);
            if (slide.length == 0) {
                this.$swal({
                    title: "Chưa có nội dung slide",
                    icon: "info",
                    width: 480,
                });
            } else {
                if (slide[0].path == null) {
                    this.$swal({
                        title: "Chưa có nội dung slide",
                        icon: "info",
                        width: 480,
                    });
                } else {
                    this.lesson = slide[0];
                    window.open("../files/" + this.lesson.path, "_blank");
                }
            }
        },
        getVideo(week) {
            this.getCLASS(this.lesson.class_id);
            let video = this.CLASS.lesson.filter(
                (item) =>
                    item.week == week &&
                    item.subject_id == this.lesson.subject_id &&
                    item.class_id == this.lesson.class_id
            );
            if (video.length == 0) {
                this.$swal({
                    title: "Chưa có nội dung video",
                    icon: "info",
                    width: 480,
                });
            } else {
                if (video[0].video_path == null) {
                    this.$swal({
                        title: "Chưa có nội dung video",
                        icon: "info",
                        width: 480,
                    });
                } else {
                }
            }
        },
    },
    computed: {
        ...mapGetters("CLASS", ["CLASS"]),
    },
    mounted() {},
};
</script>

<style scoped></style>
