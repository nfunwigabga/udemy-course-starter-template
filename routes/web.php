<?php

use Illuminate\Support\Facades\Route;


// This uses Laravel's Single Action Controller (through the __invoke magic function)
Route::get('/{catchall?}', 'SpaController')
    ->where('catchall', '^(?!api).*$');