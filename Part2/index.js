console.log("wokring")

const cardId = document.getElementById('cardId')
const cardStyle =document.getElementById('cardStyle')

// console.log(cardId)
// console.log(cardStyle)

function setCard ()  {
    const card = document.getElementById(cardId.value)
    console.log(card)
    card.style.backgroundColor = cardStyle.value
    
}

