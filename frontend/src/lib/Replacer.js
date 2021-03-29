
const Replacer = (string) =>{
    const apostrophe = /&#039;/g;  
    const quot = /&quot;/g;
    let s = string.replace(apostrophe, "'");
    s = s.replace(quot, "\"");
    return s;
}
module.exports = Replacer