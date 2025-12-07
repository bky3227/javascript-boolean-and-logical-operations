// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday= true ;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent= true;
let isPlatinum = true;

// in case 1.
let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday) && (!hasBoughtProductFromITCategory && !hasAttendedDiscountEvent);
console.log(hasPromotion);

//in case 2
hasPromotion = isPlatinum;
console.log(hasPromotion);


// John
hasPromotion = lastMonthPaidMoreThan4000 && (isWeekday && !hasBoughtProductFromITCategory) && (hasAttendedDiscountEvent && !isPlatinum);
console.log(hasPromotion);

