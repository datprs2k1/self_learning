<template>
  <div>
    <div class="wrapper">
      <admin-header></admin-header>
      <router-view></router-view>
      <admin-footer></admin-footer>
    </div>
  </div>
</template>



<script>
export default {
  mounted() {
    let plugina = document.createElement("script");
    plugina.setAttribute("src", "/admin/plugins/jquery/jquery.min.js");
    document.body.appendChild(plugina);
    let pluginb = document.createElement("script");
    pluginb.setAttribute(
      "src",
      "/admin/plugins/bootstrap/js/bootstrap.bundle.min.js"
    );
    document.body.appendChild(pluginb);
    let plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "/admin/plugins/datatables/jquery.dataTables.min.js"
    );
    document.body.appendChild(plugin);
    let plugin1 = document.createElement("script");
    plugin1.setAttribute(
      "src",
      "/admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"
    );
    document.body.appendChild(plugin1);
    // let plugin2 = document.createElement('script');
    // plugin2.setAttribute('src', '/admin/plugins/datatables-responsive/js/dataTables.responsive.min.js');
    // document.body.appendChild(plugin2);
    // let plugin3 = document.createElement('script');
    // plugin3.setAttribute('src', '/admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js');
    // document.body.appendChild(plugin3);
    let plugin4 = document.createElement("script");
    plugin4.setAttribute(
      "src",
      "/admin/plugins/datatables-buttons/js/dataTables.buttons.min.js"
    );
    document.body.appendChild(plugin4);
    let plugin5 = document.createElement("script");
    plugin5.setAttribute(
      "src",
      "/admin/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"
    );
    document.body.appendChild(plugin5);
    let plugin6 = document.createElement("script");
    plugin6.setAttribute("src", "/admin/plugins/jszip/jszip.min.js");
    document.body.appendChild(plugin6);
    let plugin7 = document.createElement("script");
    plugin7.setAttribute("src", "/admin/plugins/pdfmake/pdfmake.min.js");
    document.body.appendChild(plugin7);
    let plugin8 = document.createElement("script");
    plugin8.setAttribute("src", "/admin/plugins/pdfmake/vfs_fonts.js");
    document.body.appendChild(plugin8);
    let plugin9 = document.createElement("script");
    plugin9.setAttribute(
      "src",
      "/admin/plugins/datatables-buttons/js/buttons.html5.min.js"
    );
    document.body.appendChild(plugin9);
    let plugin10 = document.createElement("script");
    plugin10.setAttribute(
      "src",
      "/admin/plugins/datatables-buttons/js/buttons.print.min.js"
    );
    document.body.appendChild(plugin10);
    let plugin11 = document.createElement("script");
    plugin11.setAttribute(
      "src",
      "/admin/plugins/datatables-buttons/js/buttons.colVis.min.js"
    );
    document.body.appendChild(plugin11);
    let plugin12 = document.createElement("script");
    plugin12.setAttribute("src", "/admin/plugins/button-datatable.js");
    document.body.appendChild(plugin12);
  },
};
</script>

