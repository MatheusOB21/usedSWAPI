async function planets() {
  let res = await fetch("https://swapi.dev/api/planets?format=json")

  let data = await res.json()

  console.log(data.results)
}  
