function ValidateEmail()
    {
        var emailID = document.getElementById.email-label.value
        atpos = emailID.indexOf("@");
        dotpos = emailID.indexOf(".");
        
        if (atpos < 1 || (dotpos-atpos < 2 ))
        {
        alert("Please enter a valid Email ID")
        document.getElementById.email-label.focus() ;
        return false;
    }
    return true);
}

[0-9]