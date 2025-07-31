export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("Too humid");
  };
}

export function reportOverheating(temperature) {
  if (temperature == null) {
    throw new ArgumentError;
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  };
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  
  try {
    
    actions.check();
    
  } catch (error) {
    
    if (error instanceof ArgumentError) {
      
        actions.alertDeadSensor();

    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
      actions.alertOverheating();        
      }
      if (error.temperature > 600) {
        actions.shutdown();
      }
      
    } else{
      throw error;
    }

  }
}
