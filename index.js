
const deleteItem = (event) =>{
    event.target.parentElement.parentElement.remove();
}

const editItem = (event) =>{
    const newValue = prompt('Enter Your value')
    event.target.parentElement.previousElementSibling.innerHTML = newValue;
}

const addText = () =>{
    const input = document.querySelector("#text");
    if(input.value){
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('onclick' , 'deleteItem(event)');
        deleteButton.innerHTML = "X"

        
        const editButton = document.createElement('button');
        editButton.setAttribute('onclick' , 'editItem(event)');
        editButton.innerHTML = "Edit"


        div2.innerHTML = input.value;
        div3.append(deleteButton , editButton)

        div1.append(div2,div3)
        div1.setAttribute('class' , 'list')

        const content = document.querySelector('.content')
        content.appendChild(div1)
        input.value = ""

    }else{
        alert('Please Add Content First')
    }
}
