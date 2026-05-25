 export function dayRate(ratePerHour) {
  let hoursPerDay = 8;
  let payDay = ratePerHour * hoursPerDay;
  return payDay;
}

 export function daysInBudget(budget, ratePerHour) {
  let payDay = dayRate(ratePerHour);
  let workDays = Math.floor(budget/payDay);
  return workDays;
}

 export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
   let payDay = dayRate(ratePerHour);
   let billableDays = 22;
   let payMonth = payDay * billableDays;
   let excessDays = numDays % billableDays;
   let totalDays = numDays - excessDays;
   let wholeMonth = totalDays / billableDays;
   let payMonthAfterDiscount = payMonth * wholeMonth - (payMonth * wholeMonth * discount);
   let payExcessDays = excessDays * payDay;
   let fullPayment = payMonthAfterDiscount + (payExcessDays);
   return Math.ceil(fullPayment);
}