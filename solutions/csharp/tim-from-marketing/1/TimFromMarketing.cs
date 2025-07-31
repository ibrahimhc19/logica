static class Badge
{
    public static string Print(int? id, string name, string? department)
        
    {

        if (!id.HasValue && !string.IsNullOrEmpty(department))
        {
            return $"{name} - {department.ToUpper()}";
        }
        if (id.HasValue && string.IsNullOrEmpty(department))
        {
            return $"[{id}] - {name} - OWNER";
        }
        if (!id.HasValue && string.IsNullOrEmpty(department))
        {
            return $"{name} - OWNER";
        }
        return $"[{id}] - {name} - {department.ToUpper()}";

    }
}