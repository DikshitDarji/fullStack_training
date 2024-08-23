function getDayType(n) {
  switch (true) {
    case n == 6 || n == 7:
      console.log("Weekend");
      break;
    case n >= 1 && n <= 5:
      console.log("Weekday");
      break;
    default:
      console.log("invalid day");
      break;
  }
}
getDayType(5);
