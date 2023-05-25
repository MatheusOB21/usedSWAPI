let planets_ul = document.getElementById('planet-buttons');

async function planets() {

  let res = await fetch("https://swapi.dev/api/planets?format=json")

  let {results} = await res.json()

  return results

} 

async function resident_api(r) {

  let res = await fetch(r+"?format=json") 
  
  let result = await res.json()  

  return result

}

async function details(p){
  results = await planets();
  
  results.forEach(planet => {    
    if (planet.name == p) {
      details_data = planet; 
    }
  });
  
  head('Nome');
  head('Clima');
  head('População');
  head('Terreno');
  head('Residentes');

  let tr = document.getElementById(`${details_data.name}`);
  
  let td_name = document.createElement('td'); 
  td_name.innerHTML = `${details_data.name}`;
  tr.appendChild(td_name);
  
  let td_climate = document.createElement('td'); 
  td_climate.innerHTML = `${details_data.climate}`
  tr.appendChild(td_climate);
  
  let population = document.createElement('td'); 
  population.innerHTML = `${details_data.population}`
  tr.appendChild(population);
  
  let terrain = document.createElement('td'); 
  terrain.innerHTML = `${details_data.terrain}`
  tr.appendChild(terrain);

  details_data.residents.forEach(resident => {
    let result = resident_api(resident)

    let td = document.createElement('td'); 
    result.then(res => td.innerHTML = `${res.name}(${res.birth_year})`);
    tr.appendChild(td);
  });

 }


 async function generateButtons(){
  results = await planets()
  console.log (results)

  results.forEach(planet => {
    
    let div = document.createElement('tr')
    div.setAttribute("id", `${planet.name}`);

    div.innerHTML = `<th><button class="btn btn-primary" onclick="details('${planet.name}')">${planet.name}</button></th>`

    planets_ul.appendChild(div)
  });
  

 }

 function head(id){
  if(document.getElementById(id) == null){
    let head = document.getElementById('head');
    let th = document.createElement('th');
    th.innerHTML = id;
    th.setAttribute("id", id);
    head.appendChild(th);
  }
 }

