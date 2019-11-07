
function createHeaderElements(){
    const lin2 = document.createElement("link");
    lin2.setAttribute("rel","icon");
    lin2.setAttribute("href","../img/gitfit-favicon.png");
    document.getElementsByTagName("head")[0].appendChild(lin2);

    
    const BODY = document.getElementById("body");
    let header = document.createElement("header");
    let nav = document.createElement("nav");
    nav.setAttribute("id","nav");
    
    let logo_div = document.createElement("div");
    logo_div.setAttribute("class", "logo");
    
    let a = document.createElement("a");
    a.setAttribute("href","../main-page/index.html");
    
    let img = document.createElement("img");
    img.setAttribute("src","../img/gitfit-slogo.svg");
    img.setAttribute("alt", "Company logo");
    img.setAttribute("id","logo-image");
    img.height = 50;
    img.width = 50;
    a.appendChild(img);
    logo_div.appendChild(a);
    nav.appendChild(logo_div);
  
    let hamburger = document.createElement("div");
    hamburger.setAttribute("id", "hamburger-menu");
    let line1 = document.createElement("div");
    let line2 = document.createElement("div");
    let line3 = document.createElement("div");
    line1.setAttribute("id", "line1");
    line2.setAttribute("id", "line2");
    line3.setAttribute("id","line3");
    line1.setAttribute("class", "bar");
    line2.setAttribute("class", "bar");
    line3.setAttribute("class","bar");
  
    hamburger.append(line1,line2,line3);
  
    let nav_ul = document.createElement("ul");
    nav_ul.setAttribute("id", "nav-ul");
    nav_ul.setAttribute("class","nav-ul");
    nav.appendChild(nav_ul);
  
    
    let login_div = document.createElement("div");
    login_div.setAttribute("id","login-container");
    let DIV_CONTAINER = document.createElement("div");
    DIV_CONTAINER.setAttribute("id", "div-container");
  
    DIV_CONTAINER.appendChild(login_div);
    nav.appendChild(DIV_CONTAINER); 
    nav.appendChild(hamburger);
    header.appendChild(nav);
    BODY.prepend(header)
  }
  createHeaderElements()
  //Where should global variables be declared? 
  const HEADER_ELEMENT = document.getElementById("header");
  const FOOTER_ELEMENT = document.getElementById("footer");
  const UL_ELEMENT = document.getElementById("nav-ul");
  const MAIN_SECTION = document.getElementById("main");
  const LOGIN_DIV = document.getElementById("login-container");
  const BURGER_MENU = document.getElementById("hamburger-menu");
  const NAV = document.getElementById("nav");
  let nav_array = [
    //array can only contain words without spaces
    "Fitness",
    "Trainingprogramme",
    "Supplements",
    "Calculators",
    "Library"
  ];
  
  function renderHeader(ul,array,header){
    array.forEach(element => {
      let li = document.createElement("li");
      li.setAttribute("class", "nav-li");
      let a = document.createElement("a");
      a.setAttribute("class","header-links");
      a.textContent = element;
      let currentLocation = window.location.href;
      let fixedUrl =""
      if(currentLocation == fixedUrl){
        a.setAttribute("href", "../../"+element.toLowerCase() + "/"+ element.toLowerCase() + ".html");
      }
      else{
        a.setAttribute("href", "../"+element.toLowerCase() + "/"+ element.toLowerCase() + ".html");
      }
      li.appendChild(a); //is it even nessecary with a-tags? 
      ul.appendChild(li); // Fix Styling a-tags
    });
    let li = document.createElement("li");
    li.setAttribute("id","login-li");
    ul.appendChild(li);
  
    createButton("Log in", "login_btn",LOGIN_DIV);
    createButton("Register", "register_btn", LOGIN_DIV);
    document.getElementById("register_btn").addEventListener("click" , () => window.location.href = "../register-page/register.html");
  }
  
  renderHeader(UL_ELEMENT,nav_array)
  
  function createButton(string,id,place){
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", id);
    btn.setAttribute("class", "btn-class")
    btn.textContent = string;
    place.appendChild(btn);
  }
  const LOGIN_Li = document.getElementById("login-li");
  const DIV_CONTAINER = document.getElementById("div-container");
   const activeNav = () => {
     const login = document.getElementById("login_btn");
     const register = document.getElementById("register_btn");
     const burger = document.getElementById("hamburger-menu");
     const nav = document.querySelector('.nav-ul');
     let count = 0; 
     window.addEventListener("resize", ()=>{
       //Fixes resize bug
      if (count % 2 !== 0 && window.innerWidth < 822){
        LOGIN_Li.appendChild(LOGIN_DIV);
      }else if(window.innerWidth > 822){
        DIV_CONTAINER.appendChild(LOGIN_DIV);
      }
     })
     burger.addEventListener("click", () => {
        //eventlister for responsive menu  for login and register btn
        if (count % 2 == 0 || window.innerWidth >= 822 + "px"){
          LOGIN_Li.appendChild(LOGIN_DIV);
          
        }else{
          DIV_CONTAINER.appendChild(LOGIN_DIV);
          
        }
        login.classList.toggle('btn-motion');
        register.classList.toggle('btn-motion');
        LOGIN_DIV.style.display = "flex";
        nav.classList.toggle('nav-ul-motion');
  
        count += 1;
     });
   }
   activeNav()



   /* FOOTER */
   

function renderFooter(){
    const bodyElement = document.getElementById("body");
    let footerElement = document.createElement("footer");
    footerElement.setAttribute("id","footer");
    bodyElement.appendChild(footerElement);

    let sectionContact = document.createElement("section");
    sectionContact.setAttribute("id","footer_contact");
    sectionContact.setAttribute("class","footer_section");
    footerElement.appendChild(sectionContact);
    let divContact = document.createElement("div");
    divContact.setAttribute("id","div_contact");
    sectionContact.appendChild(divContact);
    let aTagContact = document.createElement("a");
    aTagContact.setAttribute("id","footer_contactlink");
    aTagContact.setAttribute("href","../contact-page/contact.html");
    aTagContact.textContent = "Contact Us";
    divContact.appendChild(aTagContact)


    let sectionSocial = document.createElement("section");
    sectionSocial.setAttribute("id","footer_social");
    sectionSocial.setAttribute("class","footer_section");
    footerElement.appendChild(sectionSocial);

    const miniLogos = [
        "fa fa-instagram",
        "fa fa-twitter",
        "fa fa-facebook",
        "fa fa-youtube",
        "fa fa-stack-overflow"
    ]
    miniLogos.forEach(element => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        let i = document.createElement("i");
        i.setAttribute("class",element);
        a.appendChild(i);
        sectionSocial.appendChild(a);
    });
    let sectionLogo = document.createElement("section");
    sectionLogo.setAttribute("id","footer_logo");
    sectionLogo.setAttribute("class","footer_section");
    footerElement.appendChild(sectionLogo);
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src","../img/gitfit-logo-white.png");
    imgTag.setAttribute("alt","company logo");
    imgTag.setAttribute("id","lg-footer");
    imgTag.setAttribute("width","100");
    imgTag.setAttribute("height","100");
    sectionLogo.appendChild(imgTag);
/** 
    let sectionCredit = document.createElement("section");
    sectionCredit.setAttribute("class", "footer_section");
    sectionCredit.setAttribute("id", "footer_credit")
    footer_contact.appendChild(sectionCredit)
*/

    let divCredit = document.createElement("div");
    divCredit.setAttribute("id", "div_credit");
    
    let a_author = document.createElement("a");
    let a_source = document.createElement("a");
    
    a_source.setAttribute("href","https://www.flaticon.com/");
    a_source.textContent = " www.flaticon.com ";
  
    a_author.setAttribute("href", "https://www.flaticon.com/authors/freepik");
    a_author.textContent = " Freepik";
    let p1 = document.createElement("p");
    p1.textContent = "Icons made by "
    let p2 = document.createElement("p");
    p2.textContent = " from"
    divCredit.appendChild(p1);
    divCredit.appendChild(a_author);
    divCredit.appendChild(p2);
    divCredit.appendChild(a_source);
    sectionContact.appendChild(divCredit);














}



renderFooter();