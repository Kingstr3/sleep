

const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    }  else if (day === 'friday') {
      return 4;
    } else if (day === 'saturday') {
      return 4;
    } else if (day === 'sunday') {
      return 4;
    }
  };
  console.log(getSleepHours('tuesday'));
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Too much sleep!');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    //console.log('Too little sleep!');
  }
  };
  
  calculateSleepDebt();
  
  