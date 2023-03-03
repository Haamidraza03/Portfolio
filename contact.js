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

    if(Name.length>1 && Email.length>10 && Phone>7012345689 && Query.length>1)
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
    else if(Name.length<=1)
    {
        alert('Please give a valid Name.')
    }
    else if(Phone<7012345689)
    {
        alert('Please give a Valid Phone Number.')
    }
    else if(Query.length<=1){
        alert('Your message is too short.')
    }
    else{
        alert('Please fill all Details.')
    }
}