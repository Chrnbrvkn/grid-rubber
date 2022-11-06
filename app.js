// import dimensions from "dimensions.json";
// import dimentions from "./dimentions.txt";

// export const getDimensions = () => {
//   return dimensions;
// }

// export const getDimensions1 = () => {
//   return dimentions;
// }

// console.log(getDimensions1());


// let fr = new FileReader();

// let px = fr.readAsText(dimentions);

// console.log(px);


// fetch("dimentions.txt", {
//     mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin':'*'
//     }
//   }).then(function(response) {
//     console.log(response);
//     return response
//  });

const str = JSON.stringify("\n /* Group 22 */\n" +
"position: absolute;\n" +
"width: 990px;\n" +
"height: 686px;\n" +
"left: 450px;\n" +
"top: 304px;\n" +
"\n" +
"\n" +
"\n" +
"/* background */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 450px;\n" +
"height: 990px;\n" +
"left: 0px;\n" +
"top: 0px;\n" +
"\n" +
"background: #6F54F7;\n" +
"\n" +
"\n" +
"/* Ellipse 6 */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 520px;\n" +
"height: 373px;\n" +
"left: -35px;\n" +
"top: -129px;\n" +
"\n" +
"background: rgba(255, 255, 255, 0.43);\n" +
"\n" +
"\n" +
"/* Group 16 */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 382.93px;\n" +
"height: 395.42px;\n" +
"left: 34px;\n" +
"top: 258px;\n" +
"\n" +
"\n" +
"\n" +
"/* Rectangle 13 */\n" +
"\n" +
"\n" +
"box-sizing: border-box;\n" +
"\n" +
"position: absolute;\n" +
"width: 490px;\n" +
"height: 438px;\n" +
"left: 701px;\n" +
"top: 218px;\n" +
"\n" +
"background: #FFFFFF;\n" +
"border: 1px solid #C4C4C4;\n" +
"backdrop-filter: blur(2px);\n" +
"/* Note: backdrop-filter has minimal browser support */\n" +
"\n" +
"border-radius: 16px;\n" +
"\n" +
"\n" +
"/* Group 1 */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 440px;\n" +
"height: 75px;\n" +
"left: 726px;\n" +
"top: 310px;\n" +
"\n" +
"\n" +
"\n" +
"/* Group 3 */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 353px;\n" +
"height: 179px;\n" +
"left: 48px;\n" +
"top: 711px;\n" +
"\n" +
"\n" +
"\n" +
"/* Group 2 */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 440px;\n" +
"height: 75px;\n" +
"left: 726px;\n" +
"top: 402px;\n" +
"\n" +
"\n" +
"\n" +
"/* Button */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 440px;\n" +
"height: 48px;\n" +
"left: 726px;\n" +
"top: 507px;\n" +
"\n" +
"\n" +
"\n" +
"/* Забыли пароль? Восстановить */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 273px;\n" +
"height: 27px;\n" +
"left: 824px;\n" +
"top: 570px;\n" +
"\n" +
"/* Header H3 */\n" +
"\n" +
"font-family: 'Poppins';\n" +
"font-style: normal;\n" +
"font-weight: 500;\n" +
"font-size: 18px;\n" +
"line-height: 27px;\n" +
"/* identical to box height */\n" +
"\n" +
"\n" +
"color: #535353;\n" +
"\n" +
"\n" +
"\n" +
"/* Еще нет аккаунта? Зарегистрироваться */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 351px;\n" +
"height: 27px;\n" +
"left: 790px;\n" +
"top: 609px;\n" +
"\n" +
"/* Header H3 */\n" +
"\n" +
"font-family: 'Poppins';\n" +
"font-style: normal;\n" +
"font-weight: 500;\n" +
"font-size: 18px;\n" +
"line-height: 27px;\n" +
"/* identical to box height */\n" +
"\n" +
"\n" +
"color: #535353;\n" +
"\n" +
"\n" +
"\n" +
"/* Вход */\n" +
"\n" +
"\n" +
"position: absolute;\n" +
"width: 79px;\n" +
"height: 37px;\n" +
"left: 906px;\n" +
"top: 248px;\n" +
"\n" +
"/* Header H1 */\n" +
"\n" +
"font-family: 'Poppins';\n" +
"font-style: normal;\n" +
"font-weight: 600;\n" +
"font-size: 30px;\n" +
"line-height: 45px;\n" +
"\n" +
"color: #535353;\n" +
"\n" +
"\n" +
"\n" +
"/* logo 1 */\n" +
"\n" +
"\n" +
"position: absolute;\n" );


// str=str.sl

console.log(str);



console.log(JSON.parse(str));
// console.log(str.width);
// for (let i = 0; i < str.length; i++) {
//     const topDim = str[i];

    
// }

// console.log(topDim);















// const { readFileSync, writeFileSync } = require('fs');

// const topDim = readFileSync('./dimensions.txt', 'utf8')
// map(x => {
//     x.match(/^top.+/g)
// });
// console.log(data);
// // допустим есть массив со строками 

// const (topDim) => {

// for (let i = 0; i < topDim.length; i++) {
//     if(data[i]+data[i+1]+data[i+2] == 'top'){
//         top = data[i+5]+data[i+6]+data[i+7];
 

    
// }
// }
//   .split('\n')   <-- это из примера который взял с инета, скину ниже
//   .map(str => str.split('/'));
//   Нужно взять первое слово между /* */ , убрать пробелы, сделать letterCase(), присвоить его itemName. 
//   Идём дальше, видим width, назначаем ему !числовое значение после ": " , также с остальными.

// const dimensions = [data.map(x => x.match('([\d]+)'))] ;
// const reg1 = '/\/\*.*\*\//g' ;
// // const reg2 = '' ;
// // const reg3 = '' ;
// // const reg4 = '' ;
// const itemName = data.map(x => x.match(reg1)) ;
// const top = data.match('top');
// const left = [dimensions[2]];
// const height = [dimensions[1]];
// const width = [dimensions[0]];

// const ramdonColor = '#' + Math.floor(Math.random()*16777215).toString(16);


// const css = data.map(([itemName, top, left, height, width]) => `



// .${itemName} {
//     grid-template-area: ${top}/${left}/ span ${height}/ span ${width};
//     border: 2fr solid ${ramdonColor};
//     }
// `);

// writeFileSync('./style.css', css);




//              Тот пример:

// const { readFileSync, writeFileSync } = require('fs');

// const data = readFileSync('./data.txt', 'utf8')
//   .split('\n')
//   .map(str => str.split('/'));

// const html = data.map(([surname, name, login, password]) => `
//   <div class="post-masonry col-md-4 col-sm-6">
//   <div class="post-thumb">
//       <img src="картинка.png" alt="">
//       <div class="title-over">
//           <h4>${surname}</h4>
//       </div>
//       <div class="post-hover text-center">
//           <div class="inside">
//               <a href="bd/index.html">
//                   <h3>${surname}</h3>
//                   <p>${name}</p>
//                   <p>${login}</p>
//                   <p>${password}</p>
//               </a>
//           </div>
//       </div>
//   </div>
// `).join('\n');

// writeFileSync('./data.html', html);