// const regexer = (props)=>{
//     const tmpregex01 = /&quot;/g;
//     const tmpregex02 = /&#039;/g //'
//     const tmpregex03
    

// }
// const q1 = data.results[0].question
// const sample = 'abc"def:g\'h,'

// console.log(q1.replace(tmpregex, "\""));
/*
const temprex = /&#39;/g;  
const tmpregex = /&quot;/g;
console.log("&quot;Hello there&quot;&#39".replace(tmpregex, "\""));

let string1 = "&quot;Hello there&quot;&#39;"


const replacer = (string) =>{
    const temprex = /&#39;/g;  
    const tmpregex = /&quot;/g;
    string.replace(temprex, "\'");
    string.replace(tmpregex, "\"");
    return string;
}

let newstr = replacer(string1)

console.log(newstr)
*/
let string1 = "&quot;Hello there&quot;&#39;"
const Replacer = (string) =>{
    const apostrophe = /&#39;/g;  
    const quot = /&quot;/g;
    const hello = /Hello/
    let s = string.replace(apostrophe, "\'");
    s = s.replace(quot, "\"");
    s= s.replace(hello, "goodbye")
    return s;
}
module.exports = Replacer