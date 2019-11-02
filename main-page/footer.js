

function renderFooter(){
    const bodyElement = document.getElementById("body");
    let footerElement = document.createElement("footer");
    footerElement.setAttribute("id","footer");
    bodyElement.appendChild(footerElement);

    let sectionContact = document.createElement("section");
    sectionContact.setAttribute("id","footer_contact");
    sectionContact.setAttribute("class","footer_section");
    footerElement.appendChild(sectionContact);
    let aTagContact = document.createElement("a");
    aTagContact.setAttribute("id","footer_contactlink");
    aTagContact.setAttribute("href","../contact-page/contact.html");
    aTagContact.textContent = "Contact Us";
    sectionContact.appendChild(aTagContact)

    let sectionSocial = document.createElement("section");
    sectionSocial.setAttribute("id","footer_social");
    sectionSocial.setAttribute("class","footer_section");
    footerElement.appendChild(sectionSocial);
    const miniLogos = [
        "fa fa-instagram",
        "fa fa-github",
        "fa fa-reddit",
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

}



renderFooter();