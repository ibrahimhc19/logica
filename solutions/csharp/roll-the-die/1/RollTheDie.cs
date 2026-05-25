public class Player
{
    public int RollDie()
    {
        Random random = new Random();
        int randNum = random.Next(1,19);
        return randNum;
    }

    public double GenerateSpellStrength()
    {
        Random random = new Random();
        double randNum = random.Next(0,100);
        return randNum;
    }
}
