static class Badge
{
    public static string Print(int? id, string name, string? department)
        
    {

        if (!id.HasValue && !string.IsNullOrEmpty(department))
        {
            return $"{name} - {department.ToUpper()}";
        }
        string departmentText = department?.ToUpper() ?? "OWNER";
        
        return id.HasValue ? $"[{id}] - {name} - {departmentText}" : $"{name} - {departmentText}";

    }
}