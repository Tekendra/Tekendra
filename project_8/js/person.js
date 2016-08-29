var person={
'firstName': 'joe',
'lastName':'Doe',
'dob':'12/15/2015',
'Age':'102',
'Address': '123 4th Ave',
'email':'ui@cubicit.net',
};
console.log(person.firstName);
console.log(person.lastName);
function loadPerson(){
  //  var htmlContents='<h1>updated</h1>';
    var htmlContent="<table class='table table-striped table-hover'>"+"<tr>"+"<th>firstName</th>"+"<td>"+person.firstName+"</td>"+"</tr>"+
        "<tr>"+"<th>lastName</th>"+"<td>"+person.lastName+"</td>"+"</tr>"+
        "<tr>"+"<th>Address</th>"+"<td>"+person.Address+"</td>"+"</tr>"+
        "<tr>"+"<th>Age</th>"+"<td>"+person.Age+"</td>"+"</tr>"+
        "<tr>"+"<th>email</th>"+"<td>"+person.email+"</td>"+"</tr>"+
        
        
        
        "</table>";
    document.getElementById('person').innerHTML=htmlContent;
    }

