public class ElonsToyCar {

    int battery = 100;
    int distance = 0;

    public static ElonsToyCar buy() {
        ElonsToyCar car = new ElonsToyCar();
        return car;
    }

    public String distanceDisplay() {
        return "Driven " + this.distance + " meters";
    }

    public String batteryDisplay() {
    if (this.battery == 0) {
        return "Battery empty";
    }
    return "Battery at " + this.battery + "%";
}


    public void drive() {
        if(this.battery > 0 && this.distance < 2000){
            
        this.distance += 20;
        
            if(this.battery > 0){
            this.battery -=1;            
        }
        }
    }
}
