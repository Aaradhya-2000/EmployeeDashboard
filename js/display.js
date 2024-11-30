const showData =async()=>{
    let myTable = `

    <table border="1px"  bgcolor="#405189" id="table">

    <tr id="tr">
        <th>Employee No</th>
        <th>Employee Name</th>
        <th>City</th>
        <th>Salary</th>
    </tr>

`
let url = `http://localhost:3000/employees`;
  let myObj = await fetch(url);
  console.log(myObj);

  let data = await myObj.json();
  console.log(data);

  data.map((key)=>{
     myTable +=`
       <tr bgcolor="white">
       <td> ${key.employeeno}</td>
       <td> ${key.name}</td>
       <td> ${key.city}</td>
       <td> ${key.salary}</td>
     `
  });

  myTable +=" </table>";
  document.getElementById("demo").innerHTML = myTable;

}

showData();