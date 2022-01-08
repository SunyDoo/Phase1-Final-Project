//base URL
const baseURL = 'http://localhost:3000/cards'

//grab elements of document
const main = document.getElementById('main')
const viewCollection = document.getElementById('view')
const newCard = document.getElementById('newCard')

//style elements in body
main.style.boxSizing = 'border-box'
main.style.textAlign= 'center';

//content load and page refresh
document.addEventListener('DOMContentLoaded',()=>{
    
    startCountdown()
})

function pagerefresh(){
    main.innerHTML = ''
}

//event listeners
viewCollection.addEventListener('click', fetchCards)
newCard.addEventListener('click', createNewCard)


function fetchCards(){
    fetch (baseURL)
    .then (res=>res.json())
    .then (pagerefresh())
    .then(data=>data.forEach(card=>renderOneCard(card)))    
}

//function to renderOneCard
function renderOneCard(cardObj){
    const card = document.createElement('ul')
    card.id = `${cardObj.id}`
    card.className='card'
    card.style.background = '#bdbdbd'
    card.style.display = 'inline-grid';
    card.style.padding = '1rem'
    card.innerHTML=`
    <img src="${cardObj.image}" class="card-pic" />
    <div class="card-info">
        <p>${cardObj.name}</p>
        <p> ${cardObj.cardNumber}</p>
        <p> ${cardObj.edition}</p>
        <p>
        CurrentBid: $<span class="current-bid">${cardObj.currentBid}</span>
        </p>
    <div class="card-buttons">
        <button id ="bid" class="waves-effect waves-light btn indigo darken-3">Bid $5 </button>
        <button id ="buyout" class="waves-effect waves-light btn red accent-4">Purchase For:$<span class="current-bid">${cardObj.price}</span></button>
    `
    main.appendChild(card)
    card.querySelector('#bid').addEventListener('click', ()=>{
        cardObj.currentBid +=5
        card.querySelector('span').textContent = cardObj.currentBid
        updateBids(cardObj)
    })
    card.querySelector('#buyout').addEventListener('click', (event)=>{
        console.log(event)
        card.remove()
        // deleteCard(cardObj)
    })
}


//function to submit new card
function createNewCard(){
    pagerefresh()
    const form = document.createElement('form')
    form.class = 'addCardForm'
    form.innerHTML= `
        <h3>Submit your own card for Auction</h3>

        <input
          type="text"
          name="name"
          value=""
          placeholder="Enter Card Name..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value=""
          placeholder="Enter Card Image URL..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="edition"
          value=""
          placeholder="Enter Edition..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="cardNumber"
          value=""
          placeholder="Enter Card Number..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="price"
          value=""
          placeholder="Enter Buyout Price..."
          class="input-text"
        />
        <br />
        <button id ="submit" class="waves-effect waves-light btn blue accent-1">Submit Card </button>
    `
    main.appendChild(form)
}


//function to update bids to db
function updateBids(cardObj){
    fetch(`${baseURL}/${cardObj.id}`,{
        method: 'PATCH',
        headers:{
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(cardObj)
    })
    .then(res=>res.json())
    .then(card=>console.log(card))
}

//function to delete card from db
// function deleteCard(cardObj){
//     fetch(`${baseURL}/${cardObj.id}`,{
//         method: 'DELETE',
//         headers:{
//             'Content-Type':'application/json'
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// }






//Countdown function to end Auction
function startCountdown(){
    var countDownDate = new Date("Jan 31, 2022 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}