
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo)
let nav = document.querySelector('nav');
let newNav1 = document.createElement('a');
let newNav2 = document.createElement('a');
newNav1.setAttribute('href', '#');
newNav2.setAttribute('href', '#');
newNav1.textContent = 'Did I do it mom?';
newNav2.textContent = 'This doesnt feel right lol'
nav.appendChild(newNav1);
nav.appendChild(newNav2);

let text = document.querySelectorAll('a')
text.forEach(a => a.style.color = 'green' )
function addText(index,item){
  text[index].innerText = siteContent['nav'][item];
}

addText(0,'nav-item-1');
addText(1,'nav-item-2');
addText(2,'nav-item-3');
addText(3,'nav-item-4');
addText(4,'nav-item-5');
addText(5,'nav-item-6');

let topImg = document.getElementById('cta-img')
topImg.src = siteContent.cta['img-src'];

let header = document.querySelector('.cta-text').children;
Array.from(header);
header[0].innerText = siteContent.cta['h1'];
header[1].innerText = siteContent.cta['button'];


const mainSection = document.querySelectorAll(".text-content h4");
const sectionText = document.querySelectorAll(".text-content p");

mainSection[0].textContent = siteContent["main-content"]["features-h4"];
mainSection[1].textContent = siteContent["main-content"]["about-h4"];
mainSection[2].textContent = siteContent["main-content"]["services-h4"];
mainSection[3].textContent = siteContent['main-content']['product-h4'];


sectionText[0].textContent = siteContent['main-content']['features-content'];
sectionText[1].textContent = siteContent['main-content']['about-content'];
sectionText[2].textContent = siteContent['main-content']['services-content'];
sectionText[3].textContent = siteContent['main-content']['product-content'];

let snippet = document.querySelector('#middle-img');
snippet.src = siteContent['main-content']['middle-img-src'];


let contact = document.querySelector('.contact').children;
Array.from(contact);
contact[0].textContent = siteContent['contact']['contact-h4'];
contact[1].textContent = siteContent['contact']['address'];
contact[2].textContent = siteContent['contact']['phone'];
contact[3].textContent = siteContent['contact']['email'];



let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];