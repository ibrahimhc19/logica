
export function totalBirdCount(birdsPerDay) {
  let birdsNum = 0;

  for (const bird of birdsPerDay) {
    birdsNum += bird;
  }

  return birdsNum;
}


export function birdsInWeek(birdsPerDay, week) {
  let daysInWeek = 7;
  let weekIndex = (daysInWeek * week) - daysInWeek;
  let birdsNum = 0;

  for (let i = weekIndex; i < weekIndex + daysInWeek; i++) {
    birdsNum += birdsPerDay[i];
  }

  return birdsNum;
}


export function fixBirdCountLog(birdsPerDay) {


  for (let i = 0; i<birdsPerDay.length; i++) {
      if(i%2==0){
        let removed = birdsPerDay[i]
        birdsPerDay.splice(i, 1, removed+1)
      }
  }

  return birdsPerDay;
}
