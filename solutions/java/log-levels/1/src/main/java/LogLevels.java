public class LogLevels {
    
    public static String message(String logLine) {

        String[] arrOfStr = logLine.split(":");

        return arrOfStr.length > 1 ? arrOfStr[1].trim() : "";
    }

    public static String logLevel(String logLine) {
        String message = new String();
        if(logLine.contains("ERROR")){
            message = "error";
        } else if(logLine.contains("WARNING")){
            message = "warning";
        } else if(logLine.contains("INFO")){
            message = "info";
        } else{
            message = "";
        }
        return message;
    }

    public static String reformat(String logLine) {
        String level = logLevel(logLine);
        String msg = message(logLine);
        String rev = msg + ' ' + "("+level+")";
        return rev;
    }
}
