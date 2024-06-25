var menu = document.getElementsByClassName("menu");
for(var i=0;i<menu.length;i++)
    {
        menu[i].onclick = function() {
            animator(this.value);
        }
    }

function animator(classValue){
    var title = document.getElementById("title")
    title.className = classValue;
}

var dark = document.getElementById("dark");
dark.onclick = function(){
    var section = document.getElementById("section");
    var sidenav = document.getElementById("sideNav");
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    var button = document.getElementsByTagName("button");
    var dark = document.getElementById("dark");

    if(section.style.background == "rgb(17, 17, 17)")
        {
            section.style.background = "#FCE5CD";
            sidenav.style.background ="#F7D7B5";
            sidenav.style.color= "black"
            title.style.color = "blue";
            desc.style.color = "red";
             dark.style.color = "black";
            dark.innerHTML = "Dark";
            for(var i=1;i<button.length;i++)
                {
                    button[i].style.color = "black";
                }
    }
    else
    {
        section.style.background = "#111111";
        sidenav.style.background = "#15151D"
        sidenav.style.color= "white"
        title.style.color = "blue";
        desc.style.color = "white";
        dark.style.color = "darkorange";
        dark.innerHTML = "Light";

        for(var i=1;i<button.length;i++)
            {
                button[i].style.color = "white";
            }
    }
  

}
