const lista = document.getElementById("hero-list")

function saveHero(){
    const node = document.createElement("li")
    node.innerText = document.getElementById("hero-name").value

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
    
}


function deleteHero(node){
    node.parentElement.remove()
}


function editHero(node){

    const newHero = document.createElement("li")
    newHero.innerText = document.getElementById("hero-name").value

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
    newHero.appendChild(buttonDelete)
    newHero.appendChild(buttonEdit)
    
    lista.replaceChild(newHero, node.parentElement)

}

