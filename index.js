console.log("hellow this is project  4 about troveling loging");

const Name = document.getElementById("name");
const email= document.getElementById("email");
const phone = document.getElementById("phone");


let validEmail = false;
let validPhone = false;
let validUser =  false;
//$('#failure').hide();
//$('#success').hide();
//console.log(email,name,phone);

//THIS IS FOR NAME VALIDATION

Name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = Name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        Name.classList.remove('is-invalid');
        validUser =true;
         }
    else{
        console.log('Your name is not valid');
        Name.classList.add('is-invalid');
        validUser = false;
        
    }
})
//THIS IS FOR EMAIL VALIDATION 

email.addEventListener('blur',()=>{
        console.log("email is blurred");
    let regex=  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/ ; 
    let str = email.value;
    console.log(regex,str);

    if(regex.test(str)){

            console.log("your email  is valid")
            email.classList.remove('is-invalid');
            validEmail = true;
        }
    else{
        
        console.log("your eamil  is not valid");
        email.classList.add('is-invalid')
        validEmail = false;
    
    }   
    })

//THIS IS FOR PHONE VALIDATION

phone.addEventListener('blur',()=>{
            console.log("phone is blurred");

    let regex=/^([0-9]){10}$/ ; 

    let str = phone.value;
    console.log(regex,str);

    if(regex.test(str)){

            console.log("your phone is valid")
            phone.classList.remove('is-invalid');
            validPhone = true;
        }
    else{
        
        console.log("your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{

        console.log("you just clicked submit button");
        console.log(validEmail,validUser,validPhone);

        //submit your form here 
        e.preventDefault();
        if(validEmail&&validPhone&&validUser){
            console.log("your phone emial and username are valid,Submitting the form");
            let success = document.getElementById('success');
                success.classList.add('show');
           // $('#failure').alert('close');
           $('#failure').hide();
           $('#success').show();
          

        }
        else{
            console.log("One of phone,email or user are not valid. Hence not ")
            let failure = document.getElementById('failure');
            failure.classList.add('show');
           // success.classList.remove('show');
            $('#success').hide();
            $('#failure').show();
        }

        })