document.querySelector("button .navbar-toggler-icon").addEventListener("click", function() {
    document.querySelector("button .close-icon").style.display="block";
     document.querySelector("button .navbar-toggler-icon").style.display="none";
 });


 document.querySelector("button .close-icon").addEventListener("click", function() {
    document.querySelector("button .close-icon").style.display="none";
     document.querySelector("button .navbar-toggler-icon").style.display="block";
 });

