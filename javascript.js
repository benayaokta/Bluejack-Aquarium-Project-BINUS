//TODO:VALIDASI Datenya belom!

function validate(){
    var formulir = document.getElementById('form1')
    
    var fname = formulir.name.value;
    
    var email = formulir.email.value;
    
    var phonenum =formulir.phone.value;

    var type = formulir.type.value;

    var guide = formulir.guide;

    var visitor = formulir.visitor.value;

    var visitdate = formulir.visitdate.value;

    var agree = formulir.agree;

    if(fname==""){
        alert("Name must be fill")
        return false;
    }

    else if(fname.length<5 || fname.length>20){
        alert("Name must between 5-20 characters")
        return false;
    }

    else if(!isNaN(fname)){
        alert("Alphabetic Only")
        return false;
    }

    else if(email==""){
        alert("Email must not be empty");
        return false;
    }

    else if(email.indexOf('@')<1){
        alert("Email must be in the correct format")
        return false;
    }

    else if(email.indexOf('.')<1){
        alert("Email must be in the correct format")
        return false;
    }
    
    else if(email.indexOf('.')<email.indexOf('@')){
        alert("Email must be in the correct format")
        return false;
    }

    if(phonenum==""){
        alert("Phone must be filled")
        return false;
    }
    else if(phonenum.length<10||phonenum.length>12){
        alert("Phone must between 10-12")
        return false;
    }

    else if(type == "kosong"){
        alert("Type must be choose!")
        return false;
    }

    else if(isNaN(phonenum)){
        alert("Phone must be numbers");
        return false;
    }

    else if (!guide[0].checked && !guide[1].checked){
        alert("Guide must be choose");
        return false;
    }

    else if(visitor == ""){
        alert("Visitor must not be empty")
        return false;
    }

    else if(isNaN(visitor)){
        alert("Visitor must be fill with numbers!")
        return false;
    }

    else if(visitor<=0){
        alert("Visitor must greater than 0");
        return false;
    }

    else if(visitdate == ""){
        alert("Date must be choosen!")
        return false;
    }



    else if (!agree.checked) {
        alert("Must agree to terms and conditions!")
        return false;
    }

    else{
        alert("Success!")
    }

}