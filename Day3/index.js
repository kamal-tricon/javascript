function getPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            showPhotosInDoc(myJson);
        });

}

function showPhotosInDoc(photos) {
    var imgDivision = document.createElement("DIV");
    var imageList= [];
    var i = 0;
    photos.slice(-12).forEach(function (element) {
        imageList.push(document.createElement("img"));
        imageList[i].setAttribute("src", element.url);

        imgDivision.appendChild(imageList[i]);

        i ++;

    });

    document.getElementById("images").appendChild(imgDivision);
    

}

var interval = null;

function startClock(){

    interval = setInterval(getCurrentTime, 500);
}

function stopClock(){
    clearInterval(interval);
}

function getCurrentTime(){
    var curretTime = new Date();

    var hours = curretTime.getHours();
    var minutes = curretTime.getMinutes();
    var seconds = curretTime.getSeconds();

    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
}
