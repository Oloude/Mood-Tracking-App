const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function getFormattedDate(dates: string[]){
    return dates.map(date => {
        let d = new Date(date)
        let month = months[d.getMonth()]
        let day = d.getDate()

        return {
            month : month,
            date : day < 10 ? '0'+day : day
        }
    })
}