class NeedForSpeed {
    
    int speed;
    int batteryDrain;
    int distanceDriven = 0;
    int battery = 100;
    
    NeedForSpeed(int speed, int batteryDrain) {
        this.speed = speed;
        this.batteryDrain = batteryDrain;
    }

    public boolean batteryDrained() {
    return battery < batteryDrain;
}

    public int distanceDriven() {
        return distanceDriven;
    }

    public void drive() {
        if(battery>=batteryDrain){
            distanceDriven+=speed;
            battery-=batteryDrain;
        }
    }

    public static NeedForSpeed nitro() {
       return new NeedForSpeed(50 , 4);
    }
}

class RaceTrack {
    
    int distance;
    
    RaceTrack(int distance) {
        this.distance = distance;
    }

    public boolean canFinishRace(NeedForSpeed car) {
        int maxDistance = (100 / car.batteryDrain) * car.speed;
        return maxDistance >= this.distance;
}
}
