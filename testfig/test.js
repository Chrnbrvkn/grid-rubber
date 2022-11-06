// let string = document.getElementById('text').value;
// console.log(string);
// let stringStringyfy = JSON.stringify(string);
// // console.log(stringStringyfy);
// // const stringStringyfy = JSON
// let testArr = string.split('\n')


let result = document.getElementById("result") // div с textarea с результатом
result.style.display = "none"


// console.log(hui);


// function consoleArray(){

//     let hui = testArr.slice();
    
//     console.log(hui);



// }
// let testArr = [
//     '        /* Ellipse 6 */',
//      '', 
//      '', 
//      '        position: absolute;', 
//      '        width: 520px;', 
//      '        height: 373px;', 
//      '        left: -35px;', 
//      '        top: -129px;', 
//      '        ', 
//      '        background: rgba(255, 255, 255, 0.43);', 
//      '        ', 
//      '        ', 
//      '        /* Group 16 */', 
//      '        ', 
//      '        ', 
//      '        position: absolute;', 
//      '        width: 382.93px;', 
//      '        height: 395.42px;', 
//      '        left: 34px;', 
//      '        top: 258px;', 
//      '      '
//     ];

    //                     <- тут какой-то тайный символ (убери коммент)

// let newArr = [];
// let a = testArr.map(x => {
//     return x.replace(/[\s]/gi, '');
// }).filter( i => Boolean(i));

// let formatNew = () => {
//     let name = '';
//     a.forEach(x => {
//         if ( x.includes('/*')){
//             name = x;
//             newArr.push({
//                 class: x
//             })
//         } else {
//             let pere = x.split(':')
//             newArr = newArr.map( y => {
//                    if(y.class === name) { 
//                         return {
//                             ...y,
//                             [pere[0]]: pere[1]
//                         }
//                     }    else {
//                         name = y.class 
//                         return {
//                             ...y,
//                             [pere[0]]: pere[1]
//                         }
//                     }    
//                 }   
//             )
//         }
//     })
// }


function consoleArray(){

    let string = document.getElementById('text').value;
    // console.log(string);
    // let stringStringyfy = JSON.stringify(string);
    
// console.log(stringStringyfy);
    let testArr = string.split('\n');
    console.log(testArr);

    
    let a = testArr.map(x => {
        return x.toString().replace(/[\s]/gi, '');
    }).filter( i => Boolean(i));

    let newArr = [];
    let formatNew = () => {
        let name = '';
        let count = -1 
        a.forEach(x => {
            if ( x.includes('/*')){
                name = x;
                newArr.push({
                    class: x 
                    
                })
                count++
            
            }
            else {
                let pere = x.split(':')
                newArr[count][pere[0]]= pere[1]
    
            }    
        })

    }
 
    // console.log(newArr);    

// ----- let pere = x.split(':')

//     newArr = newArr.map( y => {
                   
//         if(y.class === name) {
       
//              return {
//                  ...y,
//                  [pere[0]]: pere[1]
//              }
//          }    else {
//              name = y.class 
//              return {
//                  ...y,
//                  [pere[0]]: pere[1]
//              }
//          }    
//      }   
//  )
    formatNew()
    // console.log( newArr)
    // console.log(a);

    showOutput(newArr);
    
}


let output = document.getElementById("output") // div с textarea с результатом
function showOutput(outputArray){

    result.style.display = "block"
    // output.value = document.getElementById('text').value
    
    // outputArray.forEach(x => console.log(x))

    console.log(outputArray+' 1234235131');
    output.value = outputArray.map(x => {

        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return  `.${x.class.replace(/[^a-zа-яё()\,\:\;0-9]/gi, '')} {
            grid-template-area: ${x.top}/${x.left} / span ${x.height} / span ${x.width};
            background-color: ${randomColor};
            }`
    }).join('\n')

    // console.log(a);  

    // console.log("outputArray1");




}



// 


//TODO addasdasdasseda  
// testArr[i-3] = {
//     class : `${testArr[i-3]}`,
//     width : `${testArr[i+1]}`,
//     height : `${testArr[i+2]}`,
//     left : `${testArr[i+3]}`,
//     top : `${testArr[i+4]}`,
// // }




// // console.log(a);


// for (let i = 0; i < testArr.length; i++) {
// //    testArr[i].replace(/\s/g, '');
//     // console.log(testArr[i].replace(/[^a-zа-яё\.()\,\:\;0-9]/gi, ''));
//     testArr[i] = testArr[i].replace(/[^a-zа-яё\.()\,\:\;0-9]/gi, '');
//     if (testArr[i] === 'position:absolute;' ){
//         testArr[i-3] = {
//             class : `${testArr[i-3]}`,
//             width : `${testArr[i+1]}`,
//             height : `${testArr[i+2]}`,
//             left : `${testArr[i+3]}`,
//             top : `${testArr[i+4]}`,
//         }
//         // console.log(typeof(testArr[i]));
//     }
// }
// // console.log(testArr);
// // let newTestArr = [];
// // for (let l = 0; l < testArr.length; l++) {
// //     if ( typeof(testArr[l])=== ){
// //         newTestArr += testArr[l] ; 
// //     }   
// // }
// // console.log(newTestArr);
// let finalArr = [];
// for (let i = 0; i < testArr.length; i++) {
//     // console.log(testArr[i]);
//     if (typeof(testArr[i]) === typeof({})){
//         // console.log(testArr[i]);
//         finalArr.push(testArr[i])
//         }
//     //     let l = i-1 ;
//     //     testArr.slice( l, 1) ;
//         // finalArr.push(testArr[i]);
//         // testArr[i].width = testArr[i].width.replace(/\D+/g,"");
//         // testArr = testArr.replace(/\s/g, '');
//         // console.log(testArr[i].width);
//         // testerArr[i].width.replace(/\s/g, '')
//     }
    
//     // console.log(testArr[i].width);
//     // console.log(testArr[i].valueOf);
//     // testArr = Object.values(testArr[i])
//     // console.log(testArr);
// // console.log(finalArr);
// // console.log(testArr);
// // console.log(testArr[i].width);
// // console.log(testArr);
// // console.log(finalArr);


// for (let i = 0; i < finalArr.length; i++) {
//     // if ( finalArr[i] === 'width') {
//         // finalArr = finalArr.width.replace(/[a-zа-яё]/gi, '');
//     // }
//     finalArr[i].width = finalArr[i].width.replace(/[a-zа-яё\:\;\s]/gi, '');
//     finalArr[i].height = finalArr[i].height.replace(/[a-zа-яё\:\;\s]/gi, '');
//     finalArr[i].left = finalArr[i].left.replace(/[a-zа-яё\:\;\s]/gi, '');
//     finalArr[i].top = finalArr[i].top.replace(/[a-zа-яё\:\;\s]/gi, '');
// // console.log(finalArr[i].width.replace(/[a-zа-яё\:\;\s]/gi, ''));
// // console.log(finalArr[i].height.replace(/[a-zа-яё\:\;\s]/gi, ''));
// // console.log(finalArr[i].left.replace(/[a-zа-яё\:\;\s]/gi, ''));
// // console.log(finalArr[i].top.replace(/[a-zа-яё\:\;\s]/gi, ''));
//     // let valueW
//     // valueW = finalArr.width.replace(/\D+/g,"")
//     // console.log(valueW);
    
// }
// // console.log(finalArr);



//     let itemName = [];
//     let width = [];
//     let height = [];
//     let column = [];
//     let row = [];
//     let mainWidth = '1440';
//     let mainHeight = '990';
//     const ramdonColor = '#' + Math.floor(Math.random()*16777215).toString(16);

// for (let i = 0; i < finalArr.length; i++) {
//     itemName.push(finalArr[i].class);
//     width.push(finalArr[i].width);
//     height.push(finalArr[i].height);
//     column.push(finalArr[i].left);
//     row.push(finalArr[i].top);
//     // const width = finalArr[i].width;
//     // console.log(width);
// }

// // const height = finalArr.height;
// // const left = finalArr.left;
// // const top1 = finalArr.top;
// // console.log(itemName);
// // console.log(width);
// // console.log(height);
// // console.log(width);
// // console.log(column);
// // console.log(row);

// let mainContainer = document.createElement('div');
// mainContainer.className = "mainContainer";
// mainContainer.style.display = 'grid';
// mainContainer.style.width = '100vw';
// mainContainer.style.height = '100vh';
// mainContainer.style.gridTemplateColumns = `repeat(${mainHeight}, 1fr)`;
// mainContainer.style.gridTemplateRows = `repeat(${mainWidth}, 1fr)`;

// mainContainer.innerHTML = 'prepend';
// // console.log(mainContainer.style);



// const classes = (itemName,row,column,height,width,ramdonColor) => {

// for (let i = 0; i < finalArr.length; i++) {

//     `.${itemName[i]} {
//         grid-template-area: ${row[i]}/${column[i]}/ span ${height[i]}/ span ${width[i]};
//         border-color: ${ramdonColor};
//         }`
        
// }

//     }


//     newArr = newArr.map(x => {
//         return  `.${x.class} {
//             grid-template-area: ${x.top}/${x.left}/ span ${x.height}/ span ${x.width};
//             background-color: ${ramdonColor};
//             }`
//     })





// // `);
// // let liFirst = document.createElement('li');
// // liFirst.innerHTML = 'prepend';
// // ol.prepend(liFirst); 



// // for (let i = 0; i < finalArr.length; i++) {

// //     itemName = itemName.push(finalArr[i].class);
    
// // }
//     //  itemName = finalArr[0].class;

// // finalArr.map(x => {
// //     itemName = itemName.push(finalArr[x].class);
// //     height = height.push([x].height);
// //     width = width.push([x].width);
// //     left = left.push([x].left);
// //     top1 = top1.push([x].top1);
// // })
// // console.log(itemName);
// // .${itemName} {
// //     grid-template-area: ${top}/${left}/ span ${height}/ span ${width};
// //     border: 2fr solid ${ramdonColor};
// //     }
// // `);
// // import { writeFileSync } from 'fs';
// // const ramdonColor = '#' + Math.floor(Math.random()*16777215).toString(16);
// // // const css = finalArr.map(([itemName, width, height, left, top1, ramdonColor]) => `
// // .${itemName} {
// //     grid-template-area: ${top1}/${left}/ span ${height}/ span ${width};
// //     background-color: ${ramdonColor};
// //     }
// // `);

// // writeFileSync('./style.css', css);
