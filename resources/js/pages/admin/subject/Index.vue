<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <Breadcrumbs />

      <!-- Main content -->
      <section class="content">
        <div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Bảng môn học</h3>
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
                          name="Danh sách môn học.xls"
                          id="export-excel"
                          v-b-tooltip.hover.v-secondary="
                            'Xuất Excel các bản ghi đã chọn'
                          "
                        >
                          <i class="fa fa-file-excel"></i>
                        </export-excel>
                      </span>
                      <span>
                        <button
                          class="btn btn-warning"
                          v-b-tooltip.hover.v-secondary="
                            'Xuất PDF các bản ghi đã chọn'
                          "
                        >
                          <i class="fas fa-file-pdf" @click="exportPdf"></i>
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
                        :to="{ name: 'subject.add' }"
                        class="btn btn-primary"
                        v-b-tooltip.hover.v-secondary="'Thêm mới bản ghi'"
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
                    :items="subjects"
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
                      <router-link
                        :to="{
                          name: 'lesson.add',
                          params: {
                            subj_id: row.item.id,
                          },
                        }"
                        ><i
                          class="fas fa-plus fa-lg"
                          v-b-tooltip.hover.v-secondary="'Thêm bài giảng'"
                        ></i
                      ></router-link>
                      <router-link
                        :to="{
                          name: 'subject.edit',
                          params: { id: row.item.id },
                        }"
                        ><i
                          class="fas fa-edit fa-lg"
                          v-b-tooltip.hover.v-secondary="'Sửa bản ghi'"
                        ></i
                      ></router-link>
                      <span @click="deleteSubject(row.item.id)">
                        <i
                          class="fas fa-trash-alt fa-lg"
                          v-b-tooltip.hover.v-secondary="'Xóa bản ghi'"
                        ></i>
                      </span>
                    </template>
                    <template #cell(index)="row">
                      {{ row.index + 1 }}
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

    <b-modal
      id="modal1"
      size="lg"
      ref="modal1"
      title="Thêm Môn Học"
      @hidden="setEmptySelected"
      @show="setEmptySelected"
      @ok="handleOk"
    >
      <div class="card-body" style="overflow-x: auto">
        <!-- <b-row>Lớp {{ className }}</b-row> -->
        <b-row>
          <b-col md="1">
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              v-b-tooltip.hover.v-secondary="'Số bản ghi trên một trang'"
            ></b-form-select>
          </b-col>
          <b-col md="7"></b-col>
          <b-col md="4" class="float-right">
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
          :items="subjects"
          :fields="fieldsNotActions"
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

          <template #cell(index)="row">
            {{ row.index + 1 }}
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
      <template #modal-title> Thêm Môn Học [{{ className }}] </template>
      <template #modal-footer="{ ok, cancel }">
        <div>
          <b-button variant="primary" @click="ok()"> Xác nhận </b-button>
          <b-button
            variant="secondary"
            @click="
              cancel();
              setEmptySelected();
            "
          >
            Hủy
          </b-button>
        </div>
      </template>
    </b-modal>
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
          key: "created_at",
          label: "Ngày tạo",
          class: "text-center",
          sortable: true,
        },
        {
          key: "updated_at",
          label: "Ngày sửa",
          class: "text-center",
          sortable: true,
        },
        {
          key: "actions",
          label: "Hành động",
          class: "text-center",
          tdClass: "width-actions",
        },
      ],
      fieldsNotActions: [
        {
          key: "checkbox",
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
  props: {
    class_id: {
      type: Number,
      default: 0,
    },
    className: {
      type: String,
      default: "",
    },
  },
  created() {
    this.getSubjects();
  },
  methods: {
    ...mapActions("subject", ["getSubjects", "delete"]),

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
          await this.delete(id);
          this.$swal({
            title: "Đã xóa!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
          await this.getSubjects();
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
      this.getSubjects();
      this.selected = checked ? this.subjects.map((item) => item.id) : [];
      this.json_data = checked
        ? this.subjects.map((item, index) => {
            return {
              STT: index + 1,
              "Mã môn": item.code,
              "Tên môn": item.name,
              "Ngày tạo": item.created_at,
              "Ngày sửa": item.updated_at,
            };
          })
        : [];
      this.pdf_data = checked
        ? this.subjects.map((item, index) => {
            return [
              index + 1,
              item.code,
              item.name,
              item.created_at,
              item.updated_at,
            ];
          })
        : [];
    },
    selectOne(checked) {
      if (checked) {
        this.json_data = this.subjects
          .filter((item) => this.selected.includes(item.id))
          .map((item, index) => {
            return {
              STT: index + 1,
              "Mã môn học": item.code,
              "Tên môn học": item.name,
              "Ngày tạo": item.created_at,
              "Ngày sửa": item.updated_at,
            };
          });
        this.pdf_data = this.subjects
          .filter((item) => this.selected.includes(item.id))
          .map((item, index) => {
            return [
              index + 1,
              item.code,
              item.name,
              item.created_at,
              item.updated_at,
            ];
          });
      }
      this.allSelected = this.subjects.length === this.selected.length;
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
          await this.$store.dispatch("subject/deleteMutiple", this.selected);
          this.$swal({
            title: "Đã xóa!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            width: 360,
          });
          await this.getSubject();
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
          text: "Mã môn học",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Tên môn học",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Ngày tạo",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
        {
          text: "Ngày sửa",
          fillColor: "#6c7ae0",
          color: "white",
          alignment: "center",
        },
      ]);
      var docDefinition = {
        header: {
          text: "DANH SÁCH MÔN HỌC",
          alignment: "center",
          bold: "true",
          fontSize: 20,
        },
        content: [
          {
            table: {
              headerRows: 1,
              widths: ["auto", "*", "*", "*", "*"],
              body: this.pdf_data,
            },
          },
        ],
      };

      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.createPdf(docDefinition).download("Danh sách môn học.pdf");
    },
    show() {
      this.$refs.modal1.show();
    },

    async handleOk(e) {
      e.preventDefault();
      if (this.selected.length === 0) {
        this.$swal({
          title: "Thông báo!",
          text: "Bạn chưa chọn môn học nào!",
          icon: "warning",
        });
        return;
      } else {
        await this.$store
          .dispatch("CLASS/addSubject", {
            selected: this.selected,
            class_id: this.class_id,
          })
          .then(() => {
            this.$nextTick(() => {
              this.$bvModal.hide("modal1");
            });
            this.$swal({
              title: "Thành công",
              text: `Thêm môn học cho lớp ${this.className} thành công`,
              icon: "success",
              showConfirmButton: false,
              position: "top-end",
              timer: 1500,
              width: 360,
            });
            this.setEmptySelected();
          })
          .catch((err) => {
            return this.$swal({
              title: "Thông báo!",
              text: err.response.data.errors[0],
              icon: "warning",
            });
          });
      }
    },
    setEmptySelected() {
      this.selected = [];
      this.allSelected = false;
    },
  },
  computed: {
    ...mapGetters("subject", ["subjects"]),
    rows() {
      return this.subjects.length;
    },
  },
};
</script>
<style scoped>
</style>
