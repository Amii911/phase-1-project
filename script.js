 function renderNeeded(showObject) {
    console.log(showObject.name)
    const ul = document.getElementById('beer-list')
	const li = document.createElement('li')
	li.innerText = showObject.name
	li.addEventListener('click', () => displayBeer(showObject.id))
	ul.append(li)
}

function renderBreweryInfo(info){
    const divInfo = document.querySelector('#info')
    divInfo.innerHTML = '';
    let p = document.createElement('p')
    p.textContent= info.name
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.textContent = info.street
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.textContent = info.city
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.textContent = info.state
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.textContent = info.postal_code
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.textContent = info.website_url
    divInfo.appendChild(p)
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