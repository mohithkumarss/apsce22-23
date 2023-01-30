const contactform = document.getElementById('contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');

let phone = document.getElementById('phone');
let department = document.getElementById('department');
let passoutyear = document.getElementById('passoutyear');
let company = document.getElementById('company');
let designation = document.getElementById('designation');



contactform.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Submit Clicked")
    
    let formData = {
        name : name.value,
        email : email.value,
        phone: phone.value,
        department: department.value,
        passoutyear:passoutyear.value,
        company:company.value,
        designation:designation.value
    }

    console.log(formData);
   

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value='';
            
            message.value='';
            phone.value='';
            department.value='';
            passoutyear.value-'';
            company.value='';
            designation.value='';
        }
        else{
            alert('Something went wrong');
        }
    }

    xhr.send(JSON.stringify(formData));

})