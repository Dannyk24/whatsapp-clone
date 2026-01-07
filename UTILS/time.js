export function getCurrentTime(){
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()

    if(hours === 0){
        hours = 12
    }
    if(minutes<10){
        minutes = '0'+now.getMinutes();
    }

    let currentTime = hours + ':' + minutes
    let formattedTime = 0
    if(now.getHours()<12 && now.getMinutes()<=59){
        formattedTime = currentTime + ' AM'
    }
    else{
        formattedTime = currentTime +' PM'
    }
    return formattedTime
}

