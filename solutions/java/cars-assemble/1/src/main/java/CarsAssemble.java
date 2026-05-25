public class CarsAssemble {

    public int carros = 221;
    public double porcentaje = 1;

    public double productionRatePerHour(int speed) {
        
        if(speed <= 4 && speed > 0){            
            return (speed*carros) * porcentaje;            
        } else if(speed > 4 && speed <=8){            
            porcentaje = 0.9;
            return (speed*carros) * porcentaje;               
        } else if(speed == 9){            
            porcentaje =0.8;
            return (speed*carros) * porcentaje;            
        } else if(speed == 10){            
            porcentaje =0.77;
            return (speed*carros) * porcentaje;            
        } else{
            return 0;
        }
    }

    public int workingItemsPerMinute(int speed) {
        int produccion = (int) productionRatePerHour(speed);
        return produccion / 60;                
    }
}
