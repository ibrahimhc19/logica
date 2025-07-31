public class SalaryCalculator {
    
    public double salaryMultiplier(int daysSkipped) {
    return (daysSkipped >= 5) ? 0.85 : 1.0;
    }

    public int bonusMultiplier(int productsSold) {
        return (productsSold >= 20) ? 13 : 10;
    }

    public double bonusForProductsSold(int productsSold) {
        return bonusMultiplier(productsSold) * productsSold;
    }

    public double finalSalary(int daysSkipped, int productsSold) {
        double baseSalary = 1000.00;
        double topSalary = 2000.00;
        double calc = (baseSalary * salaryMultiplier(daysSkipped)) + bonusForProductsSold(productsSold);
        return calc < topSalary ?  calc : topSalary;
    } 
}
