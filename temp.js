const _ =require("lodash");
//
// function titleCase (s){
//     s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())
//     return s;
//    }


// function titleCase (s){
//    s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
//     .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_

//     return s;
// }

// console.log(titleCase(a));

// // console.log();
// // console.log();






let str = "big-animal";


var a ="helo sanda";
a=_.kebabCase(a);
console.log(titleCase(a));