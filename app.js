document.addEventListener('DOMContentLoaded', () => {

    var colors = ["#FF9FBB","#FFC8AE","#FCFFA6","#BDFFB2","#BDD8FF","#C6AEFF"]

    const calRandom = () => {
        return randomX = Math.random() * 6
    }

    function createDiv(z) {

        var container = document.createElement("div")
        container.id = (z)
        document.getElementById("flex-box").appendChild(container)

        for (i = 0; i < calRandom(); i++) {
            var box = document.createElement("div")
            box.className = ("box")
            box.id = `${z}${i}`
            container.appendChild(box)
            function createBox(y) {
                for (i = 0; i < y; i++) {
                    var innerBox = document.createElement("div")
                    innerBox.className = "inner-box"
                    innerBox.id = (`${box.id}${i}`)
                    if (innerBox.id == "container100") {
                        innerBox.textContent = "Hello World"
                    }
                    box.appendChild(innerBox)
                    innerBox.style.backgroundColor = colors[Math.floor(calRandom())]
                }
 
            }

            createBox(calRandom())
        }

    }

    createDiv("container1");
    createDiv("container2");
    createDiv("container3");
    innerBoxes = document.querySelectorAll(".inner-box")
    innerBoxes.forEach(element => {
        element.addEventListener("mouseover",(event) => {
            element.style.backgroundColor = colors[Math.floor(calRandom())]
        })
    });



});