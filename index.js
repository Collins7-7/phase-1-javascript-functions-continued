// code your solution here
function saturdayFun(defaultActivity){
    if( defaultActivity === 'bathe my dog'){
        return `This Saturday, I want to ${defaultActivity}!`;
    }else{
        return 'This Saturday, I want to roller-skate!';
    }
}
console.log(saturdayFun());

function mondayWork(activity){
    if(activity === 'work from home'){
        return `This Monday, I will ${activity}.`;
    }else {
        return 'This Monday, I will go to the office.';
    }

}
console.log(mondayWork());

function wrapAdjective(wrap) {
    return function (adjective) {
      return `You are ${wrap}${adjective}${wrap}!`;
    };
  }