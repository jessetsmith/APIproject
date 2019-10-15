const key = '$2a$10$FenalMWoHDTZugHmLEgnN.NMEMSI97xDNPBIpF94LdLgEKYP/45fW';
const text = document.getElementById('enter');





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

      };
/*
function seeHouseMates(json){
  let newHouse = json;
  let showHouseMates = document.getElementById('houseMates');
  if (newHouse == 'Gryffindor'){
    showHouseMates.innerText = newHouse.response;
  }
  else if (newHouse == 'Hufflepuff'){
    showHouseMates.innerText = newHouse.response;
  }
  else if (newHouse == 'Ravenclaw'){
    showHouseMates.innerText = newHouse.response;
  }
  else if (newHouse == 'Slytherin'){
    showHouseMates.innerText = newHouse.response;
  }
  
  };
seeHouseMates();*/

//function fetchResults(e){
  //e.preventDefault();

/*  url = 'https://www.potterapi.com/v1/characters/name/key/$2a$10$FenalMWoHDTZugHmLEgnN.NMEMSI97xDNPBIpF94LdLgEKYP/45fW';

  fetch(url)
.then (function(result){
  console.log(result);
  return result.json;

})
.then (function(json){
  console.log(json);
  displayNewResults(json); 

})

.catch (function(error){
  console.log("Error");
})

//}

function displayNewResults(json){
  let characters = json.response;
  console.log(characters);
}*/