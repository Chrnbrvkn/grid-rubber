// Main JS


let result = document.getElementById("output") // div с textarea с результатом
result.style.display = "none";


function consoleArray() {

    let string = document.getElementById('userText').value;
    let testArr = string.split('\n');

    let a = testArr.map(x => {
        return x.toString().replace(/[\s]/gi, '');
    }).filter(i => Boolean(i));


    // for (let i = 0; i < a.length; i++) {
    //     if ( a[i] === "position:absolute;") {
    //         a.splice( i-2 , 1)
    //     }       
    // }

    // console.log(a);
    let newArr = [];

    let formatNew = () => {
        let name = '';
        let count = -1
        a.forEach(x => {
            if (x.includes('/*')) {
                name = x;
                newArr.push({
                    class: x
                })
                count++
            }
            else {
                let pere = x.split(':');
                newArr[count][pere[0]] = pere[1]
            }
        })
    }
    formatNew();
    showOutput(newArr);
};

let output = document.getElementById("output") // div с textarea с результатом
function showOutput(outputArray) {
    result.style.display = "block";
    for (let i = 0; i < outputArray.length; i++) {
        if (!outputArray[i].position) {
            outputArray.push(Object.assign({}, outputArray[i], outputArray[i - 1]));
            delete outputArray[i];
            delete outputArray[i - 1];
        }
    }
    outputArray = outputArray.filter(x => x);
    output.value = outputArray.map(x => {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        if (!x.top) {
            x.top = x.bottom + x.height;
        }
        if (!x.left) {
            x.left = x.right + x.width;
        }
        return `.${x.class.replace(/[^a-zа-яё()\,\:\;0-9]/gi, '')} {
grid-area: ${x.top.replace(/[^а-яё()\,\:0-9]/gi, '')}/${x.left.replace(/[^а-яё()\,\:0-9]/gi, '')} /span ${x.height.replace(/[^а-яё()\,\:0-9]/gi, '')} /span ${x.width.replace(/[^а-яё()\,\:0-9]/gi, '')};
background-color: ${randomColor};
}`
    }).join('\n')
    console.log(outputArray);
};

