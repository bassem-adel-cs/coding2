let a = document.getElementsByClassName("one");
let b = document.getElementsByTagName("iframe")[0];
let c = [
"https://www.youtube.com/embed/cY9hrf7Hjlk?si=f93VMUPu-ByDFYdP",
"https://www.youtube.com/embed/C3YiUmR2j50?si=u4gZcYBi6JcRySfj",
"https://www.youtube.com/embed/ozKQCI7D6II?si=zjA0rOYVg_LmiIpt",
"https://www.youtube.com/embed/ToMw_qkq5mA?si=gUWP4f9-2zqdJwoD",
"https://www.youtube.com/embed/zSTSDL-lEz8?si=3ZAclNg91DbGKrqR",
"https://www.youtube.com/embed/Ev-G3G21aUI?si=zUrJvxPelfwa0x68",
"https://www.youtube.com/embed/hAK_L73WZXk?si=D_2zgcbJWcN4IlRF",
"https://www.youtube.com/embed/1gIC_WAGhhU?si=Wq87GDON9LZJtDbJ",
"https://www.youtube.com/embed/svSR26Gj0L8?si=oLnJ-9DSEI5kVzo-",
"https://www.youtube.com/embed/aOSeqZRECVA?si=7yxTS18RN3FaYj7P",
"https://www.youtube.com/embed/BC8TLYFR2Ko?si=c6RGPzjSNPMlcvKl",
"https://www.youtube.com/embed/K3aBeYxDbr8?si=XuwhzEXBYFg3pCWm",
"https://www.youtube.com/embed/FU4_7jLB3T8?si=1ykn3ttoqETr0Sc1",
"https://www.youtube.com/embed/hl6le3fhej8?si=p4zHqEDiW06He-mj",
"https://www.youtube.com/embed/2_zAWLrGvxo?si=eR5opvgQ7DSbTarf",
"https://www.youtube.com/embed/Pyz2XYYwf3I?si=M_rumnv0i2XfVZ50",
"https://www.youtube.com/embed/6mW9ju5WyQ8?si=hfL8119BoXvSJAnF",
"https://www.youtube.com/embed/U7qbqMxGsaU?si=qgTZ2992BX8MuhmN",
"https://www.youtube.com/embed/4rqq6gDsBMo?si=B9bWCk2J7Jz2H9ia",
"https://www.youtube.com/embed/voYxd9z_D2U?si=ImHs552YMkp9OQbP"


   

];

for (let i = 0; i < a.length; i++) {
  a[i].onclick = function() {
    b.setAttribute("src",c[i]);
  }
}
let headmobile=document.getElementsByClassName("headmobile")[0];
let sidebar=document.getElementsByClassName("sidebar")[0]
headmobile.onclick=function(){
sidebar.classList.toggle("block")
    }

