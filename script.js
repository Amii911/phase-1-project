function getBeerList() {
    const getListUrl = "https://api.openbrewerydb.org/breweries"
    fetch(getListUrl)
    .then(response => response.json())
    .then(console.log(getListUrl))
}
getBeerList()