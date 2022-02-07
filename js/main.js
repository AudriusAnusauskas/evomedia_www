 
 
 
 // Get the modal
 let modal = document.getElementById("myModal");

 // get button & text

 let btnhide = document.getElementById("myBtn");
 let texthide = document.getElementById("textwrap");
 let logohide = document.getElementById("logoimg"); 
 let mmodal = document.getElementById("mmodal");
        
 // Get the button that opens the modal
 let btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 let span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
   btnhide.style.display = "none";
   texthide.style.display = "none";
   logohide.style.display = "none";

 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     
     btnhide.style.display = "block";
     texthide.style.display = "block";
     logohide.style.display = "flex";
     modal.style.display = "none";
    // mmodal.classList.add("animate__backOutUp"); //Neveikia kaip norėjau.
    }

 
 

 