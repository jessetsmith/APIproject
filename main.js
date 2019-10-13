const baseURL = 'https://www.potterapi.com/v1/';
const key = '$2a$10$FenalMWoHDTZugHmLEgnN.NMEMSI97xDNPBIpF94LdLgEKYP/45fW';
const sortingHat = 'GET /characters';
let URL;

const text = document.getElementById('showHogwartsHouse');
const house = document.getElementById('newHouse');
//button2.addEventListener('click', fetchResults);


    fetch('https://www.potterapi.com/v1/sortingHat')
    .then (function(response){
        return response.json();
      })
      
      .then(function(json){
       displayResults(json);
      //console.log(json);
      });
      
      function displayResults(json){
       let hogwarts = json;
       console.log(hogwarts);

      let hgHouse = document.createElement('h2');
      hgHouse.textContent = hogwarts;
       //text.appendChild(hgHouse.textContent);
      text.appendChild(hgHouse);

      }

