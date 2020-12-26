<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\Transaction\TypeController;
use App\Http\Controllers\Transaction\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'user'], function () {
    Route::get('/', [UserController::class, 'index'])->name('user');
    Route::post('/', [UserController::class, 'store'])->name('user.store');
    Route::get('/{user}', [UserController::class, 'show'])->name('user.show');
    Route::put('/{user}', [UserController::class, 'update'])->name('user.updade');
    Route::delete('/{user}', [UserController::class, 'destroy'])->name('user.destroy');
});

Route::group(['prefix' => 'transaction'], function () {
    Route::get('/', [TransactionController::class, 'index'])->name('transaction');
    Route::post('/', [TransactionController::class, 'store'])->name('transaction.store');
    Route::get('/{transaction}', [TransactionController::class, 'show'])->name('transaction.show');
    Route::put('/{transaction}', [TransactionController::class, 'update'])->name('transaction.updade');
    Route::delete('/{transaction}', [TransactionController::class, 'destroy'])->name('transaction.destroy');
    Route::group(['prefix' => 'c/category'], function () {
        Route::get('/', [CategoryController::class, 'index'])->name('transaction.category');
        Route::post('/', [CategoryController::class, 'store'])->name('transaction.category.store');
        Route::get('/{category}', [CategoryController::class, 'show'])->name('transaction.category.show');
        Route::put('/{category}', [CategoryController::class, 'update'])->name('transaction.category.updade');
        Route::delete('/{category}', [CategoryController::class, 'destroy'])->name('transaction.category.destroy');
    });
    Route::group(['prefix' => 't/type'], function () {
        Route::get('/', [TypeController::class, 'index'])->name('transaction.type');
        Route::post('/', [TypeController::class, 'store'])->name('transaction.type.store');
        Route::get('/{type}', [TypeController::class, 'show'])->name('transaction.type.show');
        Route::put('/{type}', [TypeController::class, 'update'])->name('transaction.type.updade');
        Route::delete('/{type}', [TypeController::class, 'destroy'])->name('transaction.type.destroy');
    });
});
