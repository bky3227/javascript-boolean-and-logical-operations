let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

isOver18 = false;
hasCriminalBlacklist = false;

isAllow = isOver18 && hasCriminalBlacklist;
console.log(isAllow);
