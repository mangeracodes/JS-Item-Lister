//variables
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

//event listeners
form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItems);


//add item to list
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem = document.querySelector('#item').value; 
    //create new li
    var newLi = document.createElement('li');
    //add class name
    newLi.className = 'list-group-item';
    //add text node with input value
    newLi.appendChild(document.createTextNode(newItem));
    //add delete button functionality
    var dltbutton = document.createElement('button');
    dltbutton.className = 'btn btn-danger btn-sm float-right delete';
    dltbutton.appendChild(document.createTextNode('X'));
    newLi.appendChild(dltbutton); 
    //add the new list item to list
    itemList.appendChild(newLi);
    //clear and reset fields on form
    newItem = '';
    form.reset();
};

//remove items
function deleteItem(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

//filter items
function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.querySelectorAll('li');
    items.forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });

};