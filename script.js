var i = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eius quos nobis sapiente perspiciatis doloribus dolorem architecto id. Quae iste autem dolorum fugiat iure perspiciatis nihil quisquam quidem iusto non?';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}