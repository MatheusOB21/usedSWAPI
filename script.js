let planets_ul = document.getElementById('planets')

async function planets() {
  
  let res = await fetch("https://swapi.dev/api/planets?format=json")

  let {results} = await res.json()
  console.log(results)

  results.forEach(planet => {
    let li = document.createElement('li')

    li.innerHTML = `<button>${planet.name}</button>`

    planets_ul.appendChild(li)
  });

}  

