 function renderNeeded(showObject) {
    console.log(showObject.name)
    const ul = document.getElementById('beer-list')
	const li = document.createElement('li')
	li.innerText = showObject.name
	li.addEventListener('click', () => displayBeer(showObject.id))
	ul.append(li)
}



 const displayBeer = (breweryId) => {
    console.log(breweryId)
    const getBreweryUrl = "https://api.openbrewerydb.org/breweries/" + breweryId;
    fetch(getBreweryUrl)
    .then(response => response.json())
    .then(data => {
        renderBreweryInfo(data)})
 }


function getBeerList() {
    const getListUrl = "https://api.openbrewerydb.org/breweries"
    fetch(getListUrl)
    .then(response => response.json())
    .then(response => response.forEach(showObject => {
        renderNeeded(showObject)
    })
    )
}

getBeerList()