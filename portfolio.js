hamburger = document.querySelector(".hamburger"); 
let kali = hamburger.onclick = function() {
	navBar = document.querySelector(".nav-bar");
	navBar.classList.toggle("active");
}
console.log(kali())
turnBacka = document.querySelector(".navi1");
turnBacka.onclick = ()=> kali()

turnBackb = document.querySelector(".navi2");
turnBackb.onclick = ()=> kali()

turnBackc = document.querySelector(".navi3");
turnBackc.onclick = ()=> kali()

turnBackd = document.querySelector(".navi4");
turnBackd.onclick = ()=> kali()

//create a sub nav and make them display and hide 


// Create the content you want to hide. Put it inside a DIV and give it an ID. Let's call our DIV 'hideaway'. If you have more than one on a page, give them different names. You also need to set the style to "display:none;" if you want it to start off hidden. It should look like this:
// <div id="hideaway" style="display:none;">Here's the hidden content</div>
// Create your link and put in the following Javascript:
// <a href="javascript:;" onClick="document.getElementById('hideaway').style.display='block';">Reveal hidden content</a>
// To create a link that hides it again, using the following Javascript:
// <a href="javascript:;" onClick="document.getElementById('hideaway').style.display='none';">Hide content again</a>
// The content that you make appear and disappear can include image tags and any other HTML - it's just text in the above to make it easier to understand.

//AND WE  USE ONMOUSEHOVER ISTEAD OF ONCLICK