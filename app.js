document.addEventListener('DOMContentLoaded', () => {

    var colors = ["#FF9FBB","#FFC8AE","#FCFFA6","#BDFFB2","#BDD8FF","#C6AEFF"]

    const calRandom = () => {
        return randomX = Math.random() * 6
    }

    function createDiv(divID,noOfDiv) {

        var container = document.createElement("div")
        container.id = (divID)
        document.getElementById("flex-box").appendChild(container)

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

    createDiv("container1",5);
    createDiv("container2",calRandom());
    createDiv("container3",calRandom());
    document.getElementById("container100").textContent = "Hello World"
    innerBoxes = document.querySelectorAll(".inner-box")
    innerBoxes.forEach(element => {
        element.addEventListener("mouseover",(event) => {
            element.style.backgroundColor = colors[Math.floor(calRandom())]
        })
    });



});