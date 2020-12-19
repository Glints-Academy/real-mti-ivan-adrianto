const whenWasItPosted = date => {
  // do code here
  let parameterSoal = '22 January 2019'

let parameterSplitted = parameterSoal.split(' ')

let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let filterMonth = parameterSplitted.filter(inputMonth => monthList.includes(inputMonth))

filterMonth == 'January' ? console.log(1) :
filterMonth == 'February' ? console.log(2) :
filterMonth == 'March' ? console.log(3) : 
filterMonth == 'April' ? console.log(4) :
filterMonth == 'May' ? console.log(5) :
filterMonth == 'June' ? console.log(6) :
filterMonth == 'July' ? console.log(7) :
filterMonth == 'August' ? console.log(8) :
filterMonth == 'September'

console.log (filterMonth)
console.log(date)
}


// do not change this code below
const changeToString = __ => {
  const _ = new Date(__)
  const month = _.toLocaleString('default', { month: 'long' });
  const date = _.getDate()
  const year = _.getFullYear()
  return `${date} ${month} ${year}`
}
const test = (testCase, result) => console.log(testCase === result);

const date = new Date();
const date1 = new Date()
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '11 months ago')
test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '2 weeks ago')
test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '1 year ago')
test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '20 years ago')