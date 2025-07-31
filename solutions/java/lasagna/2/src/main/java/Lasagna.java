public class Lasagna {
    
    public static final int PREPARATION_MINUTES_PER_LAYER = 2;

    public int expectedMinutesInOven(){
        return 40;
    }

    public int remainingMinutesInOven(int actualMinutesInOven){
        return expectedMinutesInOven() - actualMinutesInOven;
    }

    public int preparationTimeInMinutes(int numberOfLayers){
        return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
    }

    public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven){
        return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}