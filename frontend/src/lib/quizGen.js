import React from "react"

const QuizForm = (props) => {

    const handleCategoryChange = (event) => {
        props.setCategory(event.target.value);
    }
    const handleDifficultyChange = (event) => {
        props.setDifficulty(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit();
    }
        return (
            <form className="questionConstructor" onSubmit={handleSubmit}>
                <label>
                    Pick a difficulty
                    <select value={props.difficulty} onChange={handleDifficultyChange}>
                        {/* <option value="">Any Difficulty</option> */}
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>

                <label>
                    Pick a category
                    <select value={props.category} onChange={handleCategoryChange}>
                    <option value="">Any Difficulty</option>
                        <option value="">Any</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainemnt: Film </option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals & Theatre</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebreties</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Weeb Stuff</option>
                        <option value="32">Entertainment: Cartoons & Animations</option>
                    </select>
                    </label> 
                    <input type="submit" value="Submit" ></input>
            </form>
            )
}



export default QuizForm
// let type = "multiple"
// let difficulty = "medium"
// let category = 9
// let amount = 10

// const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
// console.log(url)

// const getQuiz = async() =>{
//     const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
//     let data = await fetch(url)
//     console.log(await data.json())
//     return await data.json()
// }
// getQuiz()

// module.exports = getQuiz