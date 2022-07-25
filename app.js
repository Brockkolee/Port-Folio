document.addEventListener('DOMContentLoaded', () => {

    var colors = ["#FF9FBB","#FFC8AE","#FCFFA6","#BDFFB2","#BDD8FF","#C6AEFF"]

    const calRandom = () => {
        return randomX = Math.random() * 6
    }

    function createDiv(divID,noOfDiv) {

        var container = document.createElement("div")
        container.id = (divID)
        document.getElementById("intro").appendChild(container)

        for (i = 0; i < calRandom(); i++) {
            var box = document.createElement("div")
            box.className = ("box")

            function createBox(noOfBox) {
                for (i = 0; i < noOfBox; i++) {
                    var innerBox = document.createElement("div")
                    innerBox.className = "inner-box"
                    innerBox.id = (`${box.id}${i}`)
                    box.appendChild(innerBox)
                    innerBox.style.backgroundColor = colors[Math.floor(calRandom())]
                }
 
            }

            box.id = `${divID}${i}`
            container.appendChild(box)
            createBox(noOfDiv)
        }

    }

    createDiv("container1",calRandom());
    createDiv("container2",calRandom());
    createDiv("container3",5);

    about = document.getElementById("container301")
    games = document.getElementById("container302")
    contact = document.getElementById("container303")

    about.textContent = "About"
    games.textContent = "Games"
    contact.textContent = "Contact"


    document.getElementById("container100").textContent = "Hello World"
    innerBoxes = document.querySelectorAll(".inner-box")
    innerBoxes.forEach(element => {
        element.addEventListener("mouseover",(event) => {
            element.style.backgroundColor = colors[Math.floor(calRandom())]
        })
    });

    const squares = document.querySelectorAll('.grid div')
    const score = document.querySelector("#score")
    const text = document.querySelector("#text")
    foods = document.querySelectorAll('.food')

    // width of the gameboard
    const width = 50
    //starting array of squares that the snake occupies
    let snake = [1752, 1751, 1750]

    var colors = ["#FF9FBB","#FFC8AE","#FCFFA6","#BDFFB2","#BDD8FF","#C6AEFF"]


    //"direction" of the snake head
    let direction = 1;
    let speed = 500;

    //adding snake class via the array of snake to div
    squares.forEach((square, i) => {
        if (i < snake.length) {
            squares[snake[i]].classList.add('snake')
        }
    })

    function moveSnake() {

        if (
            //if snake hits the left wall
            (snake[0] % width === 0 && direction === -1) ||
            //if snake hits the right wall
            (snake[0] % width === width - 1 && direction === 1) ||
            //if snake hits the top wall
            (snake[0] < width && direction === -width) ||
            //if snake hits the bottom wall
            (snake[0] > squares.length - width && direction == width) ||
            //if snake hits the itself
            squares[snake[0] + direction].classList.contains('snake')
        ) {
            text.textContent = "Game Over! Click to try again! your final score is "
            text.addEventListener('click', () => {
                location.reload()
            })

            return clearInterval(moveId)
        }

        //move snake tail
        const tail = snake.pop();
        squares[tail].classList.remove('snake');
        //add next array to snake array, direction is derived from arrow keys user presses
        snake.unshift(snake[0] + direction);

        //if snake class div overlaps food class div (snake eats food)
        if (squares[snake[0]].classList.contains('food')) {
            score.innerHTML ++;

            //the food class div disappears
            squares[snake[0]].classList.remove('food')
            //snake becomes longer
            squares[tail].classList.add('snake')
            snake.push(tail);
            //resets and increase speed
            clearInterval(moveId)
            speed *= 0.95;
            moveId = setInterval(moveSnake, speed)
            //makeFood
            makeFood()
        }

        //add snake class to div using snake head array 
        squares[snake[0]].classList.add('snake')
        

    }


    function control(e) {
        //if up arrow is press and snake is not moving down
        if (e.key == "ArrowUp" && direction != width) {
            direction = -width;
            //if down arrow is press and snake is not moving up
        } else if (e.key == "ArrowDown" && direction != -width) {
            direction = +width;
            //if left arrow is press and snake is not moving right
        } else if (e.key == "ArrowLeft" && direction != 1) {
            direction = -1;
            //if right arrow is press and snake is not moving left
        } else if (e.key == "ArrowRight" && direction != -1) {
            direction = 1;
        }
        //prevent snake from moving in opposite direction to so snake will not colide to itself
    }

    //set speed of snake
    let moveId = setInterval(moveSnake, speed)
    function makeFood() {
        do {//create random number within gameboard size
            random = Math.floor(Math.random() * squares.length)

            //if snake eats food
        } while (squares[random].classList.contains('snake'));
        //create random food 
        squares[random].classList.add('food')
        squares[random].style.backgroundColor = colors[calRandom()]


    }



    var message = [1, 51, 101, 151, 201, 102, 103, 3, 53, 153, 203, 5, 6, 7, 56, 106, 156, 206, 205, 207, 210, 259, 12, 62, 112, 162, 212, 13, 64, 114, 15, 16, 66, 116, 166, 216, 18,
        68, 119, 169, 219, 20, 70, 24, 74, 124, 174, 224, 75, 126, 176, 27, 77, 127, 177, 227, 79, 129, 179, 229, 30, 130, 81, 131, 181, 231, 33, 83, 133, 183, 233, 34, 135, 85, 37, 87, 137
        , 187, 237, 36, 39, 89, 139, 189, 239, 40, 41, 140, 141, 240, 241, 351, 352, 353, 402, 452, 502, 552, 551, 553, 355, 356, 357, 405, 455, 456, 457, 507, 555, 556, 557, 361, 411, 461, 511, 561, 362, 413, 462,
        513, 563, 366, 415, 465, 515, 565, 466, 417, 467, 517, 567, 369, 419, 470, 520, 570, 371, 421, 701, 702, 703, 752, 802, 852, 902, 901, 903, 706, 755, 708, 758, 808, 858, 908, 709, 760, 810, 711, 712, 762
        , 812, 862, 912, 766, 816, 866, 916, 717, 768, 817, 818, 868, 918, 722, 723, 774, 823, 822, 874, 922, 923, 776, 727, 778, 828, 877, 926, 927, 928, 732, 782,832,882,932,733,784,834,735,736,786,836,886,936, 788,
         838,888, 938, 739, 839, 840,790, 890,940, 742, 792, 842, 892, 942, 943,944, 746, 796, 846, 896, 946, 747, 748, 847, 848, 947, 948,1051,1101,1151,1201,1251,1052,1053,1152,1153,1055,1105,1155,1205,1255,1056,1156,
         1107,1207,1257, 1059, 1109,1159,1209,1259,1060,1061,1111,1161,1211,1261,1260, 1063,1113,1163,1213,1263,1064,1115,1165,1066,1067,1117,1167,1217,1267, 1401, 1451,1402,1403,1501,1502,1503,1553,1603,1602,1601,1605,
         1555,1505,1455,1405, 1407, 1457, 1507,1557,1607,1458,1509,1559,1610,1560,1510,1460,1410, 1412, 1413,1414,1415,1462,1512,1562,1612,1613,1614,1615,1565,1515,1514, 1467,1517,1567,1617, 1418,1518,1469,1519,1569,
         1619, 1421,1471,1521,1571,1621,1422,1522,1423,1473,1523, 1425,1475,1525,1575,1625,1426,1626,1427,1477,1527,1577,1627, 1429, 1479,1529,1579,1629,1430,1530,1481,1581,1631,1433,1483,1533,1583,1633,1434,1435,1534,
         1535,1634,1635, 1489,1589,1441,1492,1542,1592,1641]

    message2 = message.map(el => el+50)
    message2.forEach((element) => squares[element].classList.add('food'))

    makeFood();

    //execute the key function when key is up
    document.addEventListener('keyup', control);

});