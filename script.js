document.querySelector('#beers').addEventListener('click', () => getBeerList())

const ul = document.getElementById('beer-list');
const divInfo = document.querySelector('#info');


document.getElementById('frmSearch').addEventListener('submit', doSearchByCity);


function doSearchByCity(event) {
    clearBreweryInfo()
    let searchCity = document.querySelector('#txtCity').value
    const getSearchUrl = "https://api.openbrewerydb.org/breweries?by_city=" + searchCity
    ul.innerHTML = '';
    clearBreweryInfo();
    fetch(getSearchUrl)
        .then(response => response.json())
        .then(response => {

            if( response.length > 0 ) {
                response.forEach(showObject => {renderNeeded(showObject)});
            } else {
                let li = document.createElement('li');
                li.textContent = "Sorry, No Breweries in that City!";
                ul.append(li);
            }
    })
    event.preventDefault();
}
 
 function renderNeeded(showObject) {
    console.log(showObject.name)
	const li = document.createElement('li')
	li.innerText = showObject.name
	li.addEventListener('click', () => displayBeer(showObject.id))
    li.addEventListener('mouseover', (event) => {event.target.style.fontWeight = "bold"})
    li.addEventListener('mouseout', (event) => {event.target.style.fontWeight = "normal"})
	ul.append(li)
}


function clearBreweryInfo() {
    divInfo.innerHTML = '';
    divInfo.style.display = 'none';
}

function renderBreweryInfo(info){
    divInfo.innerHTML = '';
    divInfo.style.display = 'block'
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
    clearBreweryInfo()
    const getBreweryUrl = "https://api.openbrewerydb.org/breweries/" + breweryId;
    fetch(getBreweryUrl)
    .then(response => response.json())
    .then(data => {
        renderBreweryInfo(data)})
 }


function getBeerList() {
    const getListUrl = "https://api.openbrewerydb.org/breweries"
    ul.innerHTML = '';
    clearBreweryInfo()
    fetch(getListUrl)
    .then(response => response.json())
    .then(response => response.forEach(showObject => {
        renderNeeded(showObject)
    })
    )
}

