const $ = document

const wrapperElem = $.querySelector('.wrapper')
const selectBtn = $.querySelector(".select-btn");
const options = $.querySelector('.options')
const searchInputElem = $.querySelector('input')

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function addCountrires (){
    let li = null;
    countries.forEach(country => {
        li = `<li onclick = "updateName(this)">${country}</li>`;
        options.insertAdjacentHTML('beforeend', li)
    });

}

// add country name to box select name

function updateName (el){
 wrapperElem.classList.remove("active");

 // if type country names in search box that be null
  searchInputElem.value = ''


 // for add class css selected to country names select
 for (let option of options.children){
    if (option.innerText === el.innerText) {
        option.classList.add('selected')
    } else {
        option.classList.remove("selected");
        
    }
 }
 selectBtn.firstElementChild.innerText = el.innerText;
}


selectBtn.addEventListener('click', ()=>{
    wrapperElem.classList.toggle('active');
});

window.addEventListener('load', addCountrires)