public static class LogAnalysis 
{
    // TODO: define the 'SubstringAfter()' extension method on the `string` type
    public static string SubstringAfter(this string str, string splitter) {
        string[] arrayFromString = str.Split(splitter);
        return arrayFromString[1];
    }

    // TODO: define the 'SubstringBetween()' extension method on the `string` type
    public static string SubstringBetween(this string str, string start, string end){
        string[] arrayFromString = str.Split(start);
        string[] arrayFromString2 = arrayFromString[1].Split(end);
        return arrayFromString2[0];
    }
    
    // TODO: define the 'Message()' extension method on the `string` type
    public static string Message(this string str){
        string[] arrayFromString = str.Split(":");
        return arrayFromString[1].Trim();
    }

    // TODO: define the 'LogLevel()' extension method on the `string` type
    public static string LogLevel(this string str){
        string[] arrayFromString = str.Split("]:");
        return arrayFromString[0].Substring(1).Trim();
    }
}