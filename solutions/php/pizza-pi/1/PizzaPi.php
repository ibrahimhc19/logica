<?php

class PizzaPi
{
    public function calculateDoughRequirement($num, $people)
    {
        $dough = $num * (($people * 20) + 200);
        return $dough;
    }

    public function calculateSauceRequirement($pizzas, $canVolume)
    {
        $numCans = ($pizzas * 125)/$canVolume;
        return $numCans;
    }

    public function calculateCheeseCubeCoverage($cheese_dimension, $thickness, $diameter)
    {
        $cheese = pow($cheese_dimension,3) / ($thickness * M_PI * $diameter);
        return floor($cheese);
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        return ($pizzas*8) % $friends;
    }
}
