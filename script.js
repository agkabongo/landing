var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


let currentDate = new Date();
let min = currentDate.getMinutes();
let secondes = currentDate.getSeconds();
let hours = currentDate.getHours();
let clock = document.createElement('h1');
clock.className='clock'
let calendar = document.createElement('h1');
calendar.className = 'calendar'
let display = document.querySelector('.display')

display.appendChild(clock)
display.appendChild(calendar)



calendar.innerHTML = months[currentDate.getMonth()] + ', ' + daysOfTheWeek[currentDate.getDay()]+ ' ' + currentDate.getDate()


let timer = () => {
    secondes++
    setTimeout(timer, 1010)
    if (secondes === 60) {
        secondes = 00
        min++

        if (min === 60) {
            min=00 
            hours++
        }
    }
  
   
    
    clock.innerHTML = hours + ':' + min 
    console.log(clock)

}

timer()


fetch("https://picsum.photos/v2/list")
.then(resp => resp.json())
.then(images => { 
    
    console.log(images)
    
    function randomImg(){
        let i = Math.floor(Math.random() * images.length)
        document.body.style.backgroundImage = `url("${images[i].download_url}")`;
        console.log(images[i].download_url)
    }
    
    randomImg()
    setInterval(randomImg, 5000)

})
