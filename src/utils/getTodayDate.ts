const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const suffixes = [
  "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
  "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
  "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th",
  "st"
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getTodayDate(){
 let today = new Date()
 let todayDate = today.getDate()
 let day = today.getDay()
 let month = today.getMonth()
 let year = today.getFullYear()

 return `${daysOfWeek[day]}, ${months[month]} ${todayDate}${suffixes[todayDate]}, ${year}`

}

export default getTodayDate