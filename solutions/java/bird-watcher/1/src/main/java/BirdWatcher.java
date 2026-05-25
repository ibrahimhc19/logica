
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return new int[] {0, 2, 5, 3, 7, 8, 4};
    }

    public int getToday() {
        int i = birdsPerDay.length-1;
        return birdsPerDay[i];
    }

    public void incrementTodaysCount() {
        int i = birdsPerDay.length-1;
        birdsPerDay[i]++;
    }

    public boolean hasDayWithoutBirds() {
        
        for(int i = 0; i <= birdsPerDay.length-1; i++){
            
            if(birdsPerDay[i] == 0){
                return true;
            } 
        } return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int sum = 0;
        int daysToCount = Math.min(numberOfDays, birdsPerDay.length);

        for(int i = 0; i<daysToCount; i++){
            sum += birdsPerDay[i];
        };
        return sum;
    }

    public int getBusyDays() {
        int busyDays = 0;
        for(int i = 0; i < birdsPerDay.length; i++){
            if(birdsPerDay[i] >= 5){
                busyDays++;
            }
        } return busyDays;
    }
}
