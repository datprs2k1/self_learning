<template>
  <div>
    <!-- Preloader -->
    <div class="preloader flex-column justify-content-center align-items-center">
      <img
        class="animation__shake"
        src="/images/logo-utt.png"
        alt="AdminLTELogo"
        height="60"
        width="60"
      />
    </div>

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/adminpanel" class="brand-link">
        <img
          src="/images/logo-utt.png"
          alt="UTT Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.9"
        />
        <span class="brand-text font-weight-light">UTT SELFLEARNING</span>
      </router-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/admin/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">{{ getCurrentUser().name }}</a>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input
              class="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
            <li class="nav-item" v-if="is('admin')">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-warehouse"></i>
                <p>
                  Quản lý khoa
                  <i class="fas fa-angle-left right"></i>
                  <!-- <span class="badge badge-info right">6</span> -->
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{ name: 'department.index' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-table"></i>
                    <p>Danh sách</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'department.add' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-plus-circle"></i>
                    <p>Thêm</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                  Quản lý lớp
                  <i class="fas fa-angle-left right"></i>
                  <!-- <span class="badge badge-info right">6</span> -->
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{ name: 'class.index' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-table"></i>
                    <p>Danh sách</p>
                  </router-link>
                </li>
                <li class="nav-item" v-if="is('admin')">
                  <router-link :to="{ name: 'class.add' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-plus-circle"></i>
                    <p>Thêm</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item" v-if="is('admin')">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                  Quản lý giảng viên
                  <i class="fas fa-angle-left right"></i>
                  <!-- <span class="badge badge-info right">6</span> -->
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{ name: 'teacher.index' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-table"></i>
                    <p>Danh sách</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'teacher.add' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-plus-circle"></i>
                    <p>Thêm</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item" v-if="is('admin')">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                  Quản lý sinh viên
                  <i class="fas fa-angle-left right"></i>
                  <!-- <span class="badge badge-info right">6</span> -->
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{ name: 'student.index' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-table"></i>
                    <p>Danh sách</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'student.add' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-plus-circle"></i>
                    <p>Thêm</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item" v-if="is('admin')">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
                <p>
                  Quản lý môn học
                  <i class="fas fa-angle-left right"></i>
                  <!-- <span class="badge badge-info right">6</span> -->
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link :to="{ name: 'subject.index' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-table"></i>
                    <p>Danh sách</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'subject.add' }" class="nav-link">
                    <i class="ml-1 mr-1 nav-icon fas fa-plus-circle"></i>
                    <p>Thêm</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
};
</script>
