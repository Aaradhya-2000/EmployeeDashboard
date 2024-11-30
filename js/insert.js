document.getElementById("btn1").addEventListener("click",validate);



async function validate(e){
  
    e.preventDefault();// it prevents the submit behaviour and stop it to redirect to next page

    let myName = document.getElementById("name").value;
    let myNo = document.getElementById("no").value;
    // let age = document.getElementById("age").value;
    let myCity = document.getElementById("city").value;
    let mySalary = document.getElementById("salary").value;

    let url = "http://localhost:3000/employees";

    //  Post Request 

    try{
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                employeeno:myNo,
                name:myName,
                city : myCity,
                salary : mySalary,
            }),
            headers:{
               "Context-Type": "application/json; charset=UTF-8"
            },
        });

        console.log(response);

        let value = await response.json();
        console.log(value);
        alert("data Successfullly");
    }catch(err){
        console.log(err);
        alert("Error Occured");
    }
   
  
    
    
   
}

validate();




