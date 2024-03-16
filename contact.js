function check()
{
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Query = document.getElementById('query').value;

    let user={
        name:Name,
        email:Email,
        query:Query
    }

    if(Name.length>1 && Email.length>10 && Query.length>1)
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
            document.getElementById('query').value="";
            window.location.href='./contact.html'
        }) 
    }
    else if(Name.length<1 && Email.length<10 && Query.length<1){
        alert('Please fill all Details.')
    }
    else if(Name.length<=1)
    {
        alert('Please give a valid Name.')
    }
    else if(Query.length<=1){
        alert('Your message is too short.')
    }
}