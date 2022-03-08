displayEL = document.querySelector("show-favs")
var getLocal = function() {
    if (localStorage.getItem("storedBookmarks") === null || localStorgae.getItem("storedBokkmarks"). length<1) {
        displayEl.textContent = "You have no saved threads at this time."
    }
    else{
        var savedBookmarks = localStorage.getItem ("storedBookmarks")
        savedBookmarks = JSON.parse(savedBookmarks)
        
    }
}