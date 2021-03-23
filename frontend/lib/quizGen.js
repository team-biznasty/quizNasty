// not required in front end:
// const fetch = require("node-fetch");
// require("dotenv").config();

const getQuiz = async() =>{
    const url = `https://opentdb.com/api.php?amount=2`
    let data = await fetch(url)
    console.log(await data.json())
    return await data.json()
}
getQuiz()
module.exports=getQuiz

