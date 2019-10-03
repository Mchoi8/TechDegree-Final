let count = 0;
let mvmt = 0;
const picList = ["url('images/experience.jpg')", "url('images/bulbs.jpg')", "url('images/snow.png')", "url('images/background pic.jpg')"];

function changeBackground() {


        if( mvmt == 4) {
            mvmt = 0;
            document.getElementById('about').style.backgroundImage = picList[mvmt];

        } else {
            document.getElementById('about').style.backgroundImage = picList[mvmt];
            mvmt++;
        }


    }

    setInterval(changeBackground, 5000);





