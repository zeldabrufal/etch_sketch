
const body = document.querySelector("body");

const gridContainer = document.createElement("div");
gridContainer.style.display = "grid";
gridContainer.style.margin = "0px";
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";
gridContainer.style.borderStyle = "solid";
body.appendChild(gridContainer);

const gridBtns = document.querySelectorAll('.gridBtn'); // Assuming gridBtn buttons exist in HTML

const colorBtn = document.querySelectorAll('.colorBtn');

let chosenColor = "black";
let hoverColor = false; 



colorBtn.forEach(button => {
    button.addEventListener("click", () => {
        const buttonCol = button.classList[1];  
        chosenColor = buttonCol.replace("Btn", ""); 
        console.log("pen" + chosenColor)
        
    });
});


gridBtns.forEach(button => {
    button.addEventListener("click", () => {
        const buttonNum = button.classList[1];  
        const gridSize = parseInt(buttonNum.split('x')[0]);  
        const UserSize = gridSize * gridSize;
        const ColumnNum = gridSize;  

        gridContainer.innerHTML = '';

        // Set the grid template columns and rows based on the new grid size
        gridContainer.style.gridTemplateColumns = `repeat(${ColumnNum}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${ColumnNum}, 1fr)`;



        // Create the grid boxes
        for (let i = 0; i < UserSize; i++) {
            const gridBox = document.createElement("div");
            gridBox.style.border = "1px solid black";

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = hoverColor ? "pink" : chosenColor;
            });

            gridBox.addEventListener("click", () => {
                hoverColor = !hoverColor;
                gridBox.style.backgroundColor = !hoverColor;
            });


            
            gridContainer.appendChild(gridBox);


        }


        



    });
});



const colorBtns = document.querySelector(".colorBtns");
body.insertBefore(gridContainer, colorBtns);




