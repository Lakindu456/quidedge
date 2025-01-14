<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController; // Import ContactController

Route::post('/api/contact', [ContactController::class, 'store']);


// Add the new route for contact form submission
Route::post('/api/contact', [ContactController::class, 'store']);
