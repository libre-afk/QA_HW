const checkAge = function(...ages) {
    for(index in ages){ 
      let age_1 = ages[index];
      let age_2 = 18;
      let age_3 = 60;
       if (age_1 < age_2) {
        console.log(`You don't have an access cause your age is ${age_1}. It's less than necessary\n`);
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log(`Your age is ${age_1} so you're welcome!\n`);
    }
    else if (age_1  >= age_3) {
        console.log(`Your age is ${age_1} so keep calm and watch channel Culture!\n`)
    }
    else {
        console.log(`Technical maintenance\n`)
    }
}
}
    
    checkAge(17,18,61);