/*let userIdList = JSON.parse(localStorage.getItem('userIdList')) || []
let idTemplate = '012345678abcdef'

function generateRandomNumber(){
    return Math.floor(Math.random()*idTemplate.length)
}

export function generateUserId(){
    let userId = '';
    for(let i =0; i<10; i++){
        let idUnit = idTemplate[generateRandomNumber()]
        userId+= idUnit
    }
    if(!userIdList.includes(userId)){
        userIdList.push(userId)
        localStorage.setItem('userIdList', JSON.stringify(userIdList))
        return userId
    }
    else{
        generateUserId()
    }
}




const phoneNumbersList = JSON.parse(localStorage.getItem('phone-number')) || []
let numbers = [7,8,9]
export function generatePhoneNumber(){
    let phoneNumber;
    let numberPrefix = '0' + numbers[Math.floor(Math.random()*numbers.length)] + '0'

    let numberSuffix = ''
    do{
        for(let i =0; i<8; i++){
            numberSuffix+= Math.floor(Math.random()*10)
        }
    }
    while(phoneNumbersList.includes(phoneNumber))
    phoneNumber = Number(numberPrefix+numberSuffix)
    phoneNumbersList.push(phoneNumber)
    localStorage.setItem('phone-number',JSON.stringify(phoneNumbersList))
    return phoneNumber
}

console.log(phoneNumbersList);*/
