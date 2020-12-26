<?php

namespace Database\Factories\Transaction;

use App\Models\Transaction\Category;
use App\Models\Transaction\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $category['name'] = $this->faker->word();
        $category['transactionTypeId'] = Type::inRandomOrder()->first()->id;
        return $category;
    }
}
