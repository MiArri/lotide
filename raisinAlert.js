const raisinAlarm = function(cookie) {
  var chocolateCount = 0;
  for (let i = 0; i < cookie.length; i++) { 
    if (cookie[i] === "🍇"){
      return "Raisin alert!"
    } else if (cookie[i] === "🍫") { 
      chocolateCount += 1;
    } 
  };
  if (chocolateCount === cookie.length) {
    return "All good!";
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


