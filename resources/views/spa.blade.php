<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <!-- CSRF Token -->
    <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
    <title></title>

    <!-- Styles -->
   
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet"
/>
    <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
    <link rel="shortcut icon" href="/dist/images/favicon.ico">
</head>
<body>
    <div id="main"></div>
    <script src="{{ mix('dist/js/app.js') }}" defer></script>
</body>
</html>
