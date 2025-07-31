class RemoteControlCar
{
    int speed;
    int batteryDrain;
    int distanceDriven = 0;
    int battery = 100;
    public RemoteControlCar(int speed, int batteryDrain){
        this.speed = speed;
        this.batteryDrain = batteryDrain;
    }

    public bool BatteryDrained() => (battery == 0 || battery < batteryDrain) ? true : false;

    public int DistanceDriven() => distanceDriven;
    
    public void Drive()
    {
        if(battery >=batteryDrain){
        distanceDriven+=speed;
        battery-=batteryDrain;            
        }
    }

    public static RemoteControlCar Nitro() => new RemoteControlCar(50 , 4);
}

class RaceTrack
{
    int distance;
    public RaceTrack(int distance){
        this.distance = distance;
    }

    public bool TryFinishTrack(RemoteControlCar car)
{
    while (!car.BatteryDrained())
    {
        car.Drive();
        if (car.DistanceDriven() >= distance)
        {
            return true;
        }
    }
    return false;
}

}
