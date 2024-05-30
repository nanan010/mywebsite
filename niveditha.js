let nav = document.getElementsByClassName('navitem');
            let currentSelection;
            for(let i=0;i<nav.length;i++){
                nav[i].style.color = "white";
                nav[i].addEventListener("mouseover", function(){
                    for(let j=0;j<nav.length;j++){
                        nav[j].style.color = "white";
                        nav[j].firstChild.style.visibility = "hidden";
                    }
                    nav[i].style.color = "#42f5cb";
                    nav[i].firstChild.style.visibility = "visible";
                });

                nav[i].addEventListener("mouseout", function(){
                    nav[i].style.color = "white";
                    nav[i].firstChild.style.visibility = "hidden";
                    if(currentSelection){
                        navigationSelector(currentSelection);
                    }
                });

                nav[i].addEventListener("click", function(){
                    for(let j=0; j < nav.length; j++){
                        nav[j].style.color = "white";
                        nav[j].firstChild.style.visibility = "hidden";
                    }
                    nav[i].style.color = "#42f5cb";
                    nav[i].firstChild.style.visibility = "visible";
                    currentSelection = nav[i];
                });
            }
            

            function navigationSelector(currentSelection){
                for(let j=0;j<nav.length;j++){
                    if(nav[j]==currentSelection){
                        nav[j].style.color = "#42f5cb";
                        nav[j].firstChild.style.visibility = "visible";
                        break;
                    }
                }
            }
            
            function updateLinkColors() {
                var scrollPosition = document.getElementById("mainid").scrollTop;
                var scrollHeight = document.getElementById("mainid").scrollHeight;
                for (var i = 0; i < nav.length; i++) {
                    var target = document.querySelector(nav[i].getAttribute("href"));
                    if (target && target.offsetTop - 100 <= scrollPosition) {
                        for (var j = 0; j < nav.length; j++) {
                            nav[j].style.color = "white";
                            nav[j].firstChild.style.visibility = "hidden";                        
                        }
                        nav[i].style.color = "#42f5cb";
                        nav[i].firstChild.style.visibility = "visible";
                        currentSelection = nav[i];
                    }
                }
                if (scrollHeight - scrollPosition === document.getElementById("mainid").clientHeight) {
                    for (var j = 0; j < nav.length; j++) {
                        if(nav[j].getAttribute("href")!="#Gproj"){
                            nav[j].style.color = "white";
                            nav[j].firstChild.style.visibility = "hidden"; 
                        } else{
                            nav[j].style.color = "#42f5cb";
                            nav[j].firstChild.style.visibility = "visible"; 
                        }                      
                    }
                }
            }
            document.getElementById("mainid").addEventListener("scroll", updateLinkColors);
            updateLinkColors();

            function stickyfunction(){
                stickymenu = document.getElementById("stickynavbarid");
                if(stickymenu.style.visibility === "hidden"){
                    stickymenu.style.visibility = "visible";
                } else{
                    stickymenu.style.visibility = "hidden";
                    stickymenu.style.overflow="hidden";
                }
            }

            //smaller screen nav highlight
            window.addEventListener("scroll",()=>{
                        var smallNav = document.getElementsByClassName("stickynavitem");
                        for(let i=0; i<smallNav.length; i++){
                            let target = document.querySelector(smallNav[i].getAttribute("href"));
                            //document.getElementById("demo").innerHTML = " " + target.offsetTop;
                            if(window.scrollY + 300 >= target.offsetTop){
                                for (var j = 0; j < smallNav.length; j++) {
                                        smallNav[j].style.borderStyle = "none";
                                        smallNav[j].style.color = "white";
                                }
                                smallNav[i].style.color = "#42f5cb";
                                smallNav[i].style.borderBottom = "solid";                                
                            }
                        }
                        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                            //document.getElementById("demo").innerHTML = " end reached" ;
                            for (var j = 0; j < smallNav.length; j++) {
                                if(smallNav[j].getAttribute("href")!="#contact"){
                                    smallNav[j].style.color = "white";
                                    smallNav[j].style.borderBottom = "none";                                
                                } else{
                                    smallNav[j].style.color = "#42f5cb";
                                    smallNav[j].style.borderBottom = "solid";                                
                                }                      
                            }
                        }
                        
            });
