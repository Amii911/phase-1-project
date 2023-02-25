function renderNeeded(showObject) {
    console.log(showObject.name)
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