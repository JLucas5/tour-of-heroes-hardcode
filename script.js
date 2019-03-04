let heroes = []

const url = "http://demo6199107.mockable.io/heroes.json"

let req = new XMLHttpRequest()

req.open("GET", url)

req.onload = () => {
   console.log(req.response)
   heroes = JSON.parse(req.response).heroes

   syncList()
};

  req.send()

let count = 3

const lista = document.getElementById("hero-list")

function syncList(){
    
    document.getElementById("hero-list").innerHTML = ""

    heroes.forEach(hero => {
        const node = document.createElement("li")
        node.id = hero.id
        node.innerText = hero.name
        node.onclick = showHero
        node.setAttribute("class", "collection-item")
        
        console.log(node)

         lista.appendChild(node)

    });

}

function showHero(node){ 

    const items = document.getElementById("hero-list").children

    for (let i = 0; i < items.length; i++) {
        items.item(i).setAttribute("class", "collection-item")
      }
    
    document.getElementById("dados").hidden = false

    document.getElementById("name-display").innerText = node.target.innerText
    document.getElementById("id-display").innerText = node.target.id
    document.getElementById("edit-name").value = node.target.innerText

    node.target.setAttribute("class", "collection-item active")
}

function updateName(event){
    const id = document.getElementById("id-display").innerHTML
    document.getElementById("name-display").innerText = event.value
    document.getElementById(id).innerText = event.value

}

function saveHero(){

    const hero = {
        name: document.getElementById("hero-name").value,
        id: count++
    }

    heroes.push(hero)

    syncList()
    
}


function deleteHero(node){
    heroes = heroes.filter(hero => hero.name != node.parentElement.innerText)
    syncList()
}


function saveEditHero(button, inputId){

    const input = document.getElementById(inputId)
    console.log(inputId)

    heroes.forEach(hero => {
        if(hero.name === input.value){
           console.log("achei")
        }
    });

    syncList()
}

function editHero(node){

    const newHero = document.createElement("li")

    const peInnertext = node.parentElement.innerText

    const input = document.createElement("input")
    input.type = "text"
    input.id = peInnertext
    input.value = peInnertext

    const button = document.createElement("input")
    button.type = "button"
    button.value = "Save"
    button.addEventListener("click", function(){
        saveEditHero(this, peInnertext)
    })

    newHero.appendChild(input)
    newHero.appendChild(button)

    lista.replaceChild(newHero, node.parentElement)
}

function closeDados(){
    document.getElementById("dados").hidden = true
}