// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementsByClassName("modal");
window.onclick = function close(event)
{
    for(i=0; i<modal.length; i++)
    if (event.target == modal[i])
    {
        modal[i].style.display = "none";
    }
}

// When the user clicks on div, open the popup
function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Other 
//Get the button that opens the modal
//var btn = document.getElementsByClassName("btn");

// When the user clicks on the button, open the modal
// for (i=0; i<btn.length; i++) {
// btn[i].onclick = function open()
   //  {
      //   modal.style.display = "block";
    // }
// }
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function closeX() 
//{
  //  for(i=0; i<modal.length; i++)
    //modal[i].style.display = "none";
//}
