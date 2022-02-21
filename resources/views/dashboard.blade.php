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
      #example1_filter>label {
        float: right;
      }
      ul.pagination {
        float: right;
      }
      label.custom-control-label {
        cursor: pointer;
      }
    </style>
    
</head>
<body class="hold-transition sidebar-mini layout-fixed">
    <div id="app" class="wrapper">

    </div>
    <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
  
</body>
</html>
