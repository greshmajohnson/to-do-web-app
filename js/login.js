    let user=document.getElementById("username");
    let pwd=document.getElementById("pwd");

    function formSubmit(callback) {
        $("form").on("submit", function(e){
            e.preventDefault();
            callback();
        });
    }
    
    formSubmit( function() {
        if(user.value=="admin"&&pwd.value=="12345")
        {
        window.location = "./html/todo.html";
        }
        else{
        alert("Please provide valid credentials")
        }
    });


   
