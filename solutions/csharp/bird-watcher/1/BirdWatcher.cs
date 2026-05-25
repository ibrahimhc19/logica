class BirdCount
{
    private int[] birdsPerDay;

    public BirdCount(int[] birdsPerDay)
    {
        this.birdsPerDay = (int[])birdsPerDay.Clone();
    }

    public static int[] LastWeek() => [0, 2, 5, 3, 7, 8, 4];

    public int Today() => birdsPerDay[birdsPerDay.Length-1];

    public void IncrementTodaysCount() => birdsPerDay[birdsPerDay.Length-1]++;

    public bool HasDayWithoutBirds() => Array.IndexOf(birdsPerDay, 0) != -1;

    public int CountForFirstDays(int numberOfDays){
        int sum=0;
        for(int i = 0; i < numberOfDays; i++){
           sum+=birdsPerDay[i]; 
        }
        return sum;
    }

    public int BusyDays()
    {
        List<int> days = new List<int>(birdsPerDay);
        List<int> count = days.FindAll(number => number >= 5);
        return count.Count();
    }
}
