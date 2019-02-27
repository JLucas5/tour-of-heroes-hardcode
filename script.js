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


function saveEditHero(node, inputId){

    const newHero = document.createElement("li")
    newHero.innerText = document.getElementById(inputId).value

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
