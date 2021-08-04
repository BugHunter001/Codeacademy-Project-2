function getSleepHours(day){
switch(day) {
  case 'monday':
  return 8
  break;
  case 'tuesday':
  return 7
  break;
  case 'wednesday':
  return 6
  break;
  case 'thursday':
  return 5
  break;
  case 'friday':
  return 4
  break;
  case 'saturday':
  return 3
  break;
  case 'sunday':
  return 2
  break;
  default:
  return 'Error'
}

};
const getActualSleepHours = () => {  
  return getSleepHours('monday') 
  + getSleepHours('tuesday') 
  + getSleepHours('wednesday')
  + getSleepHours('thursday') 
  + getSleepHours('friday') 
  + getSleepHours('saturday') 
  + getSleepHours('sunday') 
  }


const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours) {
  console.log('You Got the perfect amount of sleep')
} else if ( actualSleepHours > idealSleepHours ) {
  console.log('You got more' + ( idealSleepHours - actualSleepHours ) + 'more hours this week ')
  } else if ( actualSleepHours < idealSleepHours ) {
    console.log('You should get rest because you have slept ' + (idealSleepHours - actualSleepHours) + ' hours less then you slept in the week.')
  } else {
    console.log('Error! Something Went Wrong ')
  } 
  }
calculateSleepDebt();
