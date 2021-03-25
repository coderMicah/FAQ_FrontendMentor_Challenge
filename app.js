let x = document.querySelector(".right-contents")
// let content = document.querySelector(".answer")


x.addEventListener("click",hideShow)
function hideShow(e)
{
 
  if(e.target.classList == "imgs")
  
  var content = e.path[2].lastChild.previousElementSibling
  let header = e.target.parentElement.firstElementChild
  // console.log(e.path[2].lastChild.previousElementSibling)
  {
    if(content.classList == "answer")
    {
      content.classList.add("show")
      content.classList.remove ("answer")

      e.target.style.transform = 'rotate(180deg)'
  
      header.style.fontWeight = "700"
    
    }
    else 
    {
      e.target.style.transform = 'rotate(0deg)'

      content.classList.remove ("show")
      content.classList.add("answer")
      
      header.style.fontWeight = "400"
    
    }
   } 
}


































// {
//    if(e.target.className = "imgs")
//    {
//      console.log(e.path[2].lastChild.previousElementSibling)
//      let content = e.path[2].lastChild.previousElementSibling
//     //  let content = e.target.parentElement.lastChild.previousElementSibling
//       if(content.classList = "answer" )
//       {
          
//           content.classList.add("show")
//           content.classList.remove ("answer")

//           // e.target.classList.add("traverse")
//           // e.target.classList.remove("no-traverse")
//       }
//         else{
//           content.classList.remove("show")
//           // content.classList.add ("answer")
      
//           // e.target.classList.remove("traverse")
//           // e.target.classList.add("no-traverse")
//       }
      
  
//    }
// }
