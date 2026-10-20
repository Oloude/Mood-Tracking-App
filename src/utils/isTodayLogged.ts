export default function isTodayLogged(date : string){
    let newDate = new Date().toISOString()

    return newDate.slice(0, 10) === date.slice(0, 10)

}