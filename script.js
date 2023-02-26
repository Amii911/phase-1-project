 function renderNeeded(showObject) {
    console.log(showObject.name)
    const ul = document.getElementById('beer-list')
	const li = document.createElement('li')
	li.innerText = showObject.name
	li.addEventListener('click', () => displayBeer(showObject.id))
	ul.append(li)
}

function renderBreweryInfor(info){
    const divInfo = document.querySelector('#info')
    let p = document.createElement('p')
    p.innerTest = info.name
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.innerTest = info.street
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.innerTest = info.city
    divInfo.appendChild(p)
    p = document.createElement('p')
    p.innerTest = info.state
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