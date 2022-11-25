function scuberGreetingForFeet(ride){
  if (ride<=400){
    return "This one is on me!";
  }else if (ride>2000 && ride <=2500){
    return "I Will gladly take your thirty bucks.";
  }else if (ride >2500) {
    return "No Can do";
  }else{
    return "No ride available";
  }
}


function ternaryCheckCity(city){
  return city==="NYC"? "oK, Sounds good." :"No go.";

}
console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip){
  if (tip==="generous"){
    return "Thank you."
  }else{
    return"Thank You."
  } else {
 return "Bye."
  }

}