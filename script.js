const heading = document.getElementById ("heading");
const form = document.getElementById ("form");
const TaskInput = document.getElementById ("TaskInput");
const TaskButton = document.getElementById ("TaskBtn");
const Message = document.getElementById ("Message");
const TotalTasks = document.getElementById ("TotalTasks");
const CompletedTasks = document.getElementById ("CompletedTasks");
const TaskList = document.getElementById ("TaskList");
const ClearButton = document.getElementById ("ClearBtn");




    let TotalTasksQuantity = 0;
    let CompletedTasksquantity = 0;

    form.addEventListener ("submit" , function (event) {
        if (TaskInput.value === "" || TaskInput.value.trim() === "") {
            event.preventDefault ();
            Message.textContent = "Please enter a task!"
            Message.style.color = "red";
        }
        else {
            event.preventDefault ();
        let List = document.createElement ("li");
        TaskList.appendChild (List);
        console.log (TaskInput.value);
        List.textContent = TaskInput.value;
        Message.textContent = "";
        TaskInput.value= "";
    TotalTasksQuantity = TotalTasksQuantity + 1;
    TotalTasks.textContent = "Total Tasks: " + TotalTasksQuantity;
    let buttongroup = document.createElement ("div");
    let CompleteButton = document.createElement ("button");
    CompleteButton.textContent = "Complete";
    List.appendChild (buttongroup);
    let DeleteButton = document.createElement ("button");
    DeleteButton.textContent = "Delete Item";
    List.appendChild (buttongroup);
    buttongroup.appendChild (CompleteButton);
    buttongroup.appendChild (DeleteButton);

    buttongroup.classList.add ("buttongroup");

    List.classList

    CompleteButton.addEventListener("click" , function () {
        
        CompletedTasksquantity = CompletedTasksquantity + 1;    
        CompletedTasks.textContent = "Completed: " + CompletedTasksquantity; 
    CompleteButton.disabled = true;


    });
    DeleteButton.addEventListener ("click" , function () {
        List.remove();
        TotalTasksQuantity = TotalTasksQuantity - 1;
        TotalTasks.textContent = "Total Tasks: " + TotalTasksQuantity; 
        if (CompleteButton.disabled === true) {
            CompletedTasksquantity = CompletedTasksquantity - 1;
        CompletedTasks.textContent = "Completed: " + CompletedTasksquantity;
        }
        else {  

    }});


        }

    });

    ClearButton.addEventListener ("click" , function () {
        TaskList.innerHTML = "";
        TotalTasksQuantity = 0;
        CompletedTasksquantity = 0; 
        Message.textContent = "";
        TotalTasks.textContent = "Total Tasks: 0"
        CompletedTasks.textContent = "Completed: 0";
    });


