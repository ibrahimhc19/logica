public class LogLevels {
    
    public static String message(String logLine) {

        String[] arrOfStr = logLine.split(":");

        return arrOfStr.length > 1 ? arrOfStr[1].trim() : "";
    }

    public static String logLevel(String logLine) {

        String[] str = logLine.split("]: ");
        return str[0].substring(1).toLowerCase();
    }

    public static String reformat(String logLine) {
        String level = logLevel(logLine);
        String msg = message(logLine);
        String rev = msg + ' ' + "("+level+")";
        return rev;
    }
}
