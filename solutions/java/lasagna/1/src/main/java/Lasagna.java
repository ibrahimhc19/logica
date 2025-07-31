public class Lasagna {
    
    public static final int PREPARATION_MINUTES_PER_LAYER = 2;
    // TODO: define the 'expectedMinutesInOven()' method
    public int expectedMinutesInOven(){
        return 40;
    }
    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int actualMinutesInOven){
        return expectedMinutesInOven() - actualMinutesInOven;
    }
    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int numberOfLayers){
        return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
    }
    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven){
        return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}