


let parentOutput = document.getElementById("parentOutput")
function getStyle(){
    let parentWidth = document.getElementById("setWidth").value
    let parentHeight = document.getElementById("setHeight").value
    console.log(parentWidth,parentHeight);

    parentOutput.value = 
`.papa{
    display: grid;
    grid-template-columns: repeat(${parentWidth}, 1fr);
    grid-template-rows: repeat(${parentHeight}, 1fr);
    width: 100vw;
    height: 100vh;
    font-size: 1.5vw;
}`
    




}