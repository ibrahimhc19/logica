<?php

class Lasagna
{
    public function expectedCookTime()
    {
        return 40;
    }

    public function remainingCookTime($elapsed_minutes)
    { $exp = $this->expectedCookTime();
        return ($exp - $elapsed_minutes);
    }

    public function totalPreparationTime($layers_to_prep)
    {
        $timeLyr = 2;
        return ($timeLyr*$layers_to_prep);
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        $time = $this->totalPreparationTime($layers_to_prep);
        return ($time + $elapsed_minutes);
    }

    public function alarm()
    {
        return "Ding!";
    }
}
