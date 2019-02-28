let heroes = [
    {name: "Zattana", id:1},
    {name: "Batman", id:2},
    {name: "Superman", id:3}
]
let count = 3
const lista = document.getElementById("hero-list")

function syncList(){
    
    document.getElementById("hero-list").innerHTML = ""

    heroes.forEach(hero => {
        const node = document.createElement("li")
        node.innerText = hero.name

        const buttonDelete = document.createElement("input")
        buttonDelete.type = "button"
        buttonDelete.value = "Delete"
        buttonDelete.addEventListener("click", function(){
            deleteHero(this)
        })

        const buttonEdit = document.createElement("input")
        buttonEdit.type = "button"
        buttonEdit.value = "Edit"
        buttonEdit.addEventListener("click", function(){
            editHero(this)
        })

        node.appendChild(buttonDelete)
        node.appendChild(buttonEdit)
        lista.appendChild(node)

    });

}syncList()

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


function saveEditHero(node, inputId){

    const newHero = {
        name: document.getElementById(inputId),
        id: count++
    }


    heroes.forEach(hero => {
        console.log(hero.name, node.parentElement.id)
        if(hero.name.trim() == node.innerText.trim() ){
            heroes.splice(heroes.indexOf(hero), 1, newHero)
        }
    });

    syncList()
}

function editHero(node){

    const newHero = document.createElement("li")

    const input = document.createElement("input")
    input.type = "text"
    input.id = node.parentElement.innerText.trim()
    input.value = node.parentElement.innerText

    const button = document.createElement("input")
    button.type = "button"
    button.value = "Save"
    button.addEventListener("click", function(){
        saveEditHero(this, node.parentElement.innerText.trim())
    })

    newHero.appendChild(input)
    newHero.appendChild(button)

    lista.replaceChild(newHero, node.parentElement)
}
