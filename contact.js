function check()
{
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Phone = document.getElementById('phno').value;
    let Query = document.getElementById('query').value;

    let user={
        name:Name,
        email:Email,
        Phone:Phone,
        query:Query
    }

    if(Name.length>1 && Email.length>10 && Phone>8234567890 && Query.length>1)
    {
        fetch('https://portfolio-a5c8d-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Thank You For Contacting.');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('phno').value="";
            document.getElementById('query').value="";
            window.location.href='./contact.html'
        }) 
    }
    else{
        alert('Please fill all Details.')
    }
}