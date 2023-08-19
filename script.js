const formEvent = document.getElementById("form");

const table = document.getElementById("table");
let id = 1;
let student = [];
let index = 0;

// adding values to the table dynamically
formEvent.addEventListener("submit",(event) => {
    event.preventDefault();
    // extracting values from the from 
    const name = formEvent["Name"].value;
    const email = formEvent["email"].value;
    const GPA = formEvent["GPA"].value;
    const Age = formEvent["Age"].value;
    const Degree = formEvent["Degree"].value;

// creating td and tr dynamically
    const table_row = document.createElement("tr");
    table_row.className = "row";

    const table_col0 = document.createElement("td");
    table_col0.innerText = id;

    const table_col1= document.createElement("td");
    table_col1.innerText = name;

    const table_col2= document.createElement("td");
    table_col2.innerText = email;

    const table_col3= document.createElement("td");
    table_col3.innerText = GPA;

    const table_col4= document.createElement("td");
    table_col4.innerText = Age;

    const table_col5= document.createElement("td");
    table_col5.innerText = Degree;
    table_col5.className = "col5";
    const div = document.createElement("div");
    const edit = document.createElement("img");
    edit.className = "edit";
    edit.src = "edit 1.svg";


    const del = document.createElement("img");
    del.id = "del";
    del.src = "trash-2 1.svg";
    const space = " ";
    div.append(edit,space,del);
    table_col5.append(div);
    
    
    
    table_row.append(table_col0,table_col1,table_col2,table_col3,table_col4,table_col5);
    let map = {};
    map.id = table_row.children[0].innerText;
    map.name = table_row.children[1].innerText;
    map.email = table_row.children[2].innerText;
    map.gpa = table_row.children[3].innerText;
    map.Age = table_row.children[4].innerText;
    map.Degree = table_row.children[5].innerText;

    del.addEventListener("click",() =>{
        table_row.remove();
    })
// adding event listner for delete and edit function
// in this i have changed css property pointer-events-none for edit part so if you want
//  to add more data click one more time on edit icon
    edit.addEventListener("click",() =>{
        const get_button = document.getElementById("add");
        if(get_button.innerText === "Add Student"){
            
            get_button.innerText = "Edit Now";
            get_button.className = "edit-now";
        }
        else{
            get_button.innerText = "Add Student";
            get_button.className = "add-stu";
        }
       
    })
    // console.log(map);
    
    
    student.push(map);
    id++;
    
    table.appendChild(table_row);

    
    
    
});

// search bar implementation to get the data out oof the input value
const search_bar = document.getElementById("search");
const new_table = document.getElementById("new_table");
search_bar.addEventListener("keyup",() =>{
    const val = search_bar.value;
    new_table.innerHTML = '';
    for(let i =0;i<student.length;i++){
        let check = student[i];
        if(student[i].name === val || student[i].email === val || student[i].Degree === val){
            const new_row = document.createElement("tr");
            const new_col1 = document.createElement("td");
            new_col1.innerText = check.id;

            const new_col2 = document.createElement("td");
            new_col2.innerText = check.name;

            const new_col3 = document.createElement("td");
            new_col3.innerText = check.email;

            const new_col4 = document.createElement("td");
            new_col4.innerText = check.Age;

            const new_col5 = document.createElement("td");
            new_col5.innerText = check.gpa;

            const new_col6 = document.createElement("td");
            new_col6.innerText = check.Degree;
            

            new_row.append(new_col1,new_col2,new_col3,new_col4,new_col5,new_col6);
            new_table.appendChild(new_row);

        }
       
    }
})


