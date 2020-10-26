// JavaScript source code
var boxes = document.getElementsByClassName("box");

function startSpill() {
    var audioElement = new Audio('spooky.mp3');
    var knapp = document.getElementById('testing');
    var unwrap = document.getElementById('wrapper-inner');
    audioElement.volume = 0.2;
    audioElement.play();
    unwrap.style.display = 'block';
    knapp.style.display = 'none';
}

    function bondesjakkauto() {

        var time = 2000;
        setTimeout(function () {

            boxes[0].innerHTML = "&#128123"

            setTimeout(function () {

                boxes[2].innerHTML = "&#129504";

                setTimeout(function () {

                    boxes[4].innerHTML = "&#128123";

                    setTimeout(function () {

                        boxes[8].innerHTML = "&#129504";

                        setTimeout(function () {

                            boxes[5].innerHTML = "&#128123";

                            setTimeout(function () {

                                boxes[3].innerHTML = "&#129504";

                                setTimeout(function () {

                                    boxes[1].innerHTML = "&#128123";
                                    setTimeout(function () {

                                        boxes[6].innerHTML = "&#129504";
                                        setTimeout(function () {

                                            boxes[7].innerHTML = "&#128123";
                                            setTimeout(function () {
                                                setInterval(function () {
                                                    
                                                    boxes[1].classList.toggle("box-background");

                                                    boxes[4].classList.toggle("box-background");

                                                    boxes[7].classList.toggle("box-background");

                                                    document.getElementById("announce-box").classList.add("visible");

                                                }, 300);

                                                setInterval(function () {

                                                    document.getElementById("announce-box").classList.toggle("test0");

                                                }, 300);

                                                setInterval(function () {

                                                    document.getElementById("announce-box").classList.toggle("test1");

                                                }, 300);

                                            }, time);

                                        }, time);

                                    }, time);

                                }, time);

                            }, time);

                        }, time);

                    }, time);

                }, time);

            }, time);

        }, time);

        console.log(boxes)



    }
    setTimeout(function () {  }, 1000);