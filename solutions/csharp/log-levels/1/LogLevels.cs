static class LogLine
{
    public static string Message(string logLine)
    {
        string[] arrayfromString = logLine.Split(":");
        return arrayfromString.Length > 1 ? arrayfromString[1].Trim(): "";
    }

    public static string LogLevel(string logLine)
    {
        string[] arrayfromString = logLine.Split("]:");
        return arrayfromString[0].Substring(1).ToLower().Trim();
    }

    public static string Reformat(string logLine)
    {
        string message = Message(logLine);
        string logLevel = LogLevel(logLine);
        return ($"{message} ({logLevel})");
    }
}
