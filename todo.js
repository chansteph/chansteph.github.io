var mkList = function(taskName, priority) {
    var liElem = document.createElement('li');
    liElem.textContent = `${taskName} - ${priority}`;
    liElem.classList.add('list-group-item');
    
    if (priority == 'high') {
        liElem.classList.add('priority-high');
    }   else if (priority =='medium') {
        liElem.classList.add('priority-medium');
        else (
        liElem.classList.add('priority-low');
    }
      return (liElem);
}

var addBtn = document.querySelector('#addBtn');
addBtn.addEventListener(
    'click',
    function() {
        var taskElem = document.querySelector('#task');
        var priorityElem = document.querySelector('#priority');
        var todoElem = mkList(taskElem.value, priorityElem.value)
        var todoListElem = document.querySelector('todo-list');
        todoListElem.appendChild(todoElem);
        taskElem.value = null;
        priorityElem.value = null;
}
