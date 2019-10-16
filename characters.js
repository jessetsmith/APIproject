console.log('Hi');
const dropdown = document.getElementsByClassName('dropdown');
const key = '$2a$10$FenalMWoHDTZugHmLEgnN.NMEMSI97xDNPBIpF94LdLgEKYP/45fW';
const url = new URL('https://www.potterapi.com/v1/characters'), params = {key: key, school: "Hogwarts School of Witchcraft and Wizardry"}
const ul = document.getElementById('characters');

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))


fetch (url, {key: key})
.then (function(response){
    return response.json();
  }) 
  
  .then(function(json){
   displayResults(json);
  console.log(json);
  return json;
  });
  
  function displayResults(json){
  json.forEach (function (json) {
    let hogwarts = json.name;
    let details = json.house;
  let hgHouse = document.createElement('li');
  hgHouse.textContent = `${hogwarts}, ${details}`;
   //text.appendChild(hgHouse.textContent);
  ul.appendChild(hgHouse);
  })
  };
//drop down panel
function dropdownFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropdownButton')) {
      var dropdowns = document.getElementsByClassName("dropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }