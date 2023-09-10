document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const addButton = document.getElementById('add');
    const alertBox = document.getElementById('alert');
    const tbody = document.querySelector('table tbody');
    let idRow = 1;

    function removeTodo(id) {
      const deleteRow = document.getElementById(id);
      deleteRow.classList.add('d-none');
    };
  
    function addTodo() {
      alertBox.classList.add('d-none');
      if (titleInput.value === '' || descriptionInput.value === '') {
        alertBox.classList.remove('d-none');
      }else{
  
      const newRow = document.createElement('tr');
      const todoCell = document.createElement('td');
      const descCell = document.createElement('td');
      const checkCell = document.createElement('td');
      const iconCell = document.createElement('td');
      const editButton = document.createElement('button');
      const deleteButton = document.createElement('button');
      const editIcon = document.createElement('i');
      const deleteIcon = document.createElement('i');
      const checkInput = document.createElement('input');
  
      iconCell.classList.add('text-right');
      editButton.classList.add('btn', 'btn-primary', 'mb-1');
      deleteButton.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
      editIcon.classList.add('fa', 'fa-pencil');
      deleteIcon.classList.add('fa', 'fa-trash');
      checkCell.classList.add('text-center');
      checkInput.type = 'checkbox';
  
      editButton.appendChild(editIcon);
      deleteButton.appendChild(deleteIcon);
      checkCell.appendChild(checkInput);
      iconCell.appendChild(editButton);
      iconCell.appendChild(deleteButton);
  
      tbody.appendChild(newRow);
      todoCell.innerText = titleInput.value;
      descCell.innerText = descriptionInput.value;
      newRow.appendChild(todoCell);
      newRow.appendChild(descCell);
      newRow.appendChild(checkCell);
      newRow.appendChild(iconCell);
      newRow.setAttribute('id', idRow);
      idRow ++;

      deleteButton.onclick = function(e) {
        console.log(e.target.parentNode);
      }
      deleteButton.onclick = () => {
        removeTodo(newRow.getAttribute('id'));
      };
    }
    }
  
    addButton.addEventListener('click', addTodo);
  
  

    /*           
    <tbody>
            <tr>
              <td>
                Learn JS
              </td>
              <td>
                Watch Javascript tutorials on Youtube
              </td>
              <td class="text-center">
                <input type="checkbox">
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger mb-1 ml-1">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody> */


});


