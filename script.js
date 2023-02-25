function renderNeeded(showObject) {
    console.log(showObject.name)
    const ul = document.getElementById('beer-list')
	const li = document.createElement('li')
	li.innerText = showObject.name
	li.addEventListener('click', () => displayBeer(showObject.name))
	ul.append(li)
}

 const displayBeer = (breweries) => {
    console.log(breweries)
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