public static class DifferenceOfSquares
{
    public static int CalculateSquareOfSum(int max)
    {
        int suma = (max * (max + 1))/2;
            return suma*suma;
    }

    public static int CalculateSumOfSquares(int max) => (max*(max+1)*(2*max+1))/6;

    public static int CalculateDifferenceOfSquares(int max)
    {
        int squareOfSum = DifferenceOfSquares.CalculateSquareOfSum(max);
        int sumOfSquare = DifferenceOfSquares.CalculateSumOfSquares(max);
        return squareOfSum - sumOfSquare;
    }
}