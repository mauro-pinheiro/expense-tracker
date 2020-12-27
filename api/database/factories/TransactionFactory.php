<?php

namespace Database\Factories;

use App\Models\Transaction;
use App\Models\Transaction\Category;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Transaction::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $transaction['amount'] = $this->faker->randomFloat(2);
        $transaction['transactionCategoryId'] = Category::inRandomOrder()->first()->id;
        $transaction['userId'] = User::inRandomOrder()->first()->id;
        $transaction['date'] = $this->faker->dateTimeBetween('-4 week', '+4 week');
        return $transaction;
    }
}
