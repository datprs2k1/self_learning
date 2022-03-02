<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>UTT SelfLearning</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="images/logo-utt.png">

    <link rel="stylesheet" href="{{ asset("css/app.css") }}">
    <link rel="stylesheet" href="{{ asset("admin/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css") }}">
    <link rel="stylesheet" href="{{ asset("admin/plugins/datatables-responsive/css/responsive.bootstrap4.min.css") }}">
    <link rel="stylesheet" href="{{ asset("admin/plugins/datatables-buttons/css/buttons.bootstrap4.min.css") }}">
    <link rel="stylesheet" href="{{ asset('admin/dist/css/adminlte.css') }}">
    <style>
      /* căn phải phân trang */
      ul.pagination {
        float: right;
      }
      /* con trỏ khi chỉ vào checkbox */
      label.custom-control-label {
        cursor: pointer;
      }
      /* Độ rộng của cột hành động  */
      .width-actions {
        max-width: 36px;
      }
      /* Độ rộng của combobox số bản ghi trên một trang */
      #per-page-select {
        max-width: 100px;
        min-width: 68px;
      }
      /* Đổi màu cho hành động xóa */
      .fa-trash-alt {
        color: #f44336;
        cursor: pointer;
      }
      .fa-trash-alt:hover {
        color: #E00000;
      }
      .fa-file-pdf {
        color: whitesmoke;
      }
    </style>

</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div id="app" class="wrapper">

    </div>
    <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
    <!-- jQuery -->
{{-- <script src="{{ asset('admin/plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ asset('admin/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script> --}}
    <!-- DataTables  & Plugins -->
  {{-- <script src="{{ asset('admin/plugins/datatables/jquery.dataTables.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-responsive/js/dataTables.responsive.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-responsive/js/responsive.bootstrap4.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-buttons/js/dataTables.buttons.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-buttons/js/buttons.bootstrap4.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/jszip/jszip.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/pdfmake/pdfmake.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/pdfmake/vfs_fonts.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-buttons/js/buttons.html5.min.js') }}"></script>
  <script src="{{ asset('admin/plugins/datatables-buttons/js/buttons.print.min.js') }}"></script> --}}

  <!-- Page specific script -->
  {{-- <script>
    $(function () {
      $("#example1").DataTable({
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "buttons": ["copy", "excel", "pdf", "print"],
        "bDestroy": true,
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

    });
  </script> --}}
</body>
</html>
