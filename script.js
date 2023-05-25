let planets_ul = document.getElementById('planets')


async function planets() {

  let res = await fetch("https://swapi.dev/api/planets?format=json")

  let {results} = await res.json()

  return results

} 

async function details(p){
  results = await planets()
  
  results.forEach(planet => {    
    if (planet.name == p) {
      details_data = planet 
    }
  });
  
  console.log(details_data)

  let div = document.getElementById(`${details_data.name}`)

  let span = document.createElement('span') 

  span.innerHTML = `${details_data.name} - ${details_data.climate} - ${details_data.population} - ${details_data.terrain}`

  div.appendChild(span)
 }

 async function generateButtons(){
  results = await planets()
  console.log (results)

  results.forEach(planet => {
    
    let li = document.createElement('li')

    li.innerHTML = `<div id='${planet.name}'><button onclick="details('${planet.name}')">${planet.name}</button></div>`

    planets_ul.appendChild(li)
  });
  

 }

