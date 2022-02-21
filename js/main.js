"use strict";
//д.з 7.7_3
// Написать функцию `compress(list)`, которая сжимает серии массива,
// состоящего из единиц и нулей по следующему принципу:

// например, массив [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1] 
// преобразуется в [4,7,2,4,1,1]

// debugger

const list = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1];


function compress(list) {
  // debugger
  let f=[1];

  for (let i = 0; i < list.length - 1; i++) {

    // document.write(list[i]);
    // console.log(list[i + 1]);
                       //след. за ним
  if (list[i] === list[i + 1]) {
    f[f.length - 1] = f[f.length - 1] +1;
  } else {
    f.push(1);
  }
}

return f;
}

console.log(compress(list));