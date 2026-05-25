public static class DifferenceOfSquares
{
    public static int CalculateSquareOfSum(int max)
    {
        int suma = (max * (max + 1))/2; // Formula matemática, suma todos los numeros en sucesión
            return suma*suma; // Devuelve el cuadrado
    }

    public static int CalculateSumOfSquares(int max)
    {
        int suma = (max*(max+1)*(2*max+1))/6;
        return suma;
    }

    public static int CalculateDifferenceOfSquares(int max)
    {
        int squareOfSum = DifferenceOfSquares.CalculateSquareOfSum(max);
        int sumOfSquare = DifferenceOfSquares.CalculateSumOfSquares(max);
        return squareOfSum - sumOfSquare;
    }
}