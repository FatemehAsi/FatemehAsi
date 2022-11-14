const birthdayYear = prompt ("Enter your age : ");
const age = 1401 - birthdayYear;
console.log(`سن شما : ${age}`)
if(age < 18){
    console.log(`کودک`);
}else{
    console.log(`بزرگسال`);
}

