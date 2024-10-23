// Generat Alphabet Letters Using JS And Add Them To The Page
let letters = "abcdefghijklmnopqrstuvwxyz0123456789+#-_:'";
let lettersArray = Array.from(letters);
let lettersChoiser = document.querySelector(".letters");
lettersArray.forEach(letter => {
    let letterSpan = document.createElement("span");
    letterSpan.className = "letter"
    let theLetter = document.createTextNode(letter);
    letterSpan.appendChild(theLetter);
    lettersChoiser.appendChild(letterSpan);
})
/* ********************************************************** */

// Generat A Random Categori & And Random Word From It 
let words = {
    programmingLanguages: ["Python", "Java", "JavaScript", "Go", "Ruby", "Swift", "Scala", "Kotlin", "C#", "PHP", "TypeScript", "Rust", "Dart", "Lua", "Haskell", "C++", "Perl", "Objective-C", "Groovy", "Julia"],
    movies: ["The Godfather", "The Shawshank Redemption", "The Dark Knight", "Forrest Gump", "The Lord of the Rings : The Return of the King", "Schindler's List", "Star Wars : Episode V - The Empire Strikes Back", "Pulp Fiction", "The Silence of the Lambs", "The Matrix", "The Godfather : Part 2", "Goodfellas", "Fight Club", "The Lord of the Rings : The Fellowship of the Ring", "Inception", "The Lord of the Rings : The Two Towers", "The Lion King", "Back to the Future", "The Terminator", "Jurassic Park"],
    countries: ["Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "Germany", "India", "Japan", "Kenya", "Mexico", "Netherlands", "Poland", "Russia", "Singapore", "Thailand", "Ukraine", "United Kingdom", "United States", "Vietnam"],
    famousPeople: ["Albert Einstein", "Oprah Winfrey", "Steve Jobs", "Nelson Mandela", "Marie Curie", "Stephen Hawking", "Mother Teresa", "Elon Musk", "Malala Yousafzai", "Martin Luther King Jr.", "Amelia Earhart", "Bill Gates", "Rosa Parks", "Walt Disney", "Barack Obama", "J.K. Rowling", "Michael Jordan", "Serena Williams", "Beyoncé", "Tom Hanks"],
}
/* Get The Categori*/
let allKeys = Object.keys(words);
let randomCatNumber = Math.floor( Math.random() * allKeys.length)
let randomCatName = allKeys[randomCatNumber]
let randomCatValue = words[randomCatName]
/* Get The Value In This Categori */
let randomValueNumber = Math.floor( Math.random() * randomCatValue.length)
let randomValueValue = randomCatValue[randomValueNumber]
/* Add The Categori To The .word-categori span  */
document.querySelector(".game-info .word-categori span").innerHTML = randomCatName
/* ********************************************************** */

// Generat The Guessing Word Letters Boxs
let guesWordDiv = document.querySelector(".letters-guess");
let arrayFromWordLetters= Array.from(randomValueValue)

arrayFromWordLetters.forEach(letter => {
    let wordletterSpan = document.createElement("span");
    wordletterSpan.className = "word-letter"
    if(letter === ' '){
        wordletterSpan.classList.add("spaceChar")
    }
    guesWordDiv.appendChild(wordletterSpan);
})

// Handel The Cliking On The Element 
let guessingSpans = document.querySelectorAll(".letters-guess span")
let theDrwo = document.querySelector(".hangMan-drow")
let worngAnswers = 0;
let rightAnwsers = 0;
let randomValueValueWithoutSpaces = Array.from(randomValueValue).filter((ele)=>ele!==" ")
document.addEventListener("click",(e)=>{
    let theStatus = false;
    let chosienWord = Array.from(randomValueValue.toLowerCase());
    if(e.target.className ==='letter'){
        e.target.classList.add("cliked");
        let clikedLetter = e.target.innerHTML;
        chosienWord.forEach((wordletter,wordIndex)=>{
            if(clikedLetter===wordletter){
                rightAnwsers++;
                theStatus = true;
                guessingSpans.forEach((guessingLetter,guessingIndex)=>{
                    if(guessingIndex===wordIndex){
                        guessingLetter.innerHTML = wordletter;
                    }
                }) 
            }
        })
        if(rightAnwsers === randomValueValueWithoutSpaces.length){
            winGame();
        }
        if(theStatus !== true){
            worngAnswers++;
            theDrwo.classList.add(`wrong-${worngAnswers}`)
            document.getElementById("error").play()
            if(worngAnswers===8){
                document.getElementById("game-over").play()
                lettersChoiser.classList.add("finished")
                gameOver();
            }
        }else{
            document.getElementById("success").play()  
        }
    }
});

function gameOver(){
let popDiv = document.createElement("div")
popDiv.className = "game-over"
let popDivMassge = document.createTextNode(`Game Over, The Anwser Was: ${randomValueValue}`)
let OptionDive = document.createElement("div")
OptionDive.className="option-dive"

let restartButtun = document.createElement("button");
restartButtun.className="restart-buttun"
let restartButtunText = document.createTextNode("Restart");
restartButtun.append(restartButtunText);
let exitButtun = document.createElement("button");
exitButtun.className="exit-buttun"
let exitButtunText = document.createTextNode("Exit");
exitButtun.append(exitButtunText);

OptionDive.append(restartButtun)
OptionDive.append(exitButtun)

popDiv.append(popDivMassge)
popDiv.append(OptionDive)
document.body.append(popDiv)

let exit = document.querySelector(".exit-buttun")
exit.onclick = ()=>{
    window.close()
}
let restart = document.querySelector(".restart-buttun")
restart.onclick = ()=>{
    location.reload()
}

}
function winGame(){
    let popDiv = document.createElement("div")
    popDiv.className = "win-game"
    let popDivMassge = document.createTextNode(`You Win With ${worngAnswers} Wrong Answers ${worngAnswers==0 ? "You Are A Master of This Game" : worngAnswers>0 && worngAnswers<=4?"Exellent Job":worngAnswers>4 && worngAnswers<=6? "GOOD":"You Got Luky This Time" }`);
    // Do The Exit and Restatrt Option
    let OptionDive = document.createElement("div")
    OptionDive.className="option-dive"

    let restartButtun = document.createElement("button");
    restartButtun.className="restart-buttun"
    let restartButtunText = document.createTextNode("Restart");
    restartButtun.append(restartButtunText);
    let exitButtun = document.createElement("button");
    exitButtun.className="exit-buttun"
    let exitButtunText = document.createTextNode("Exit");
    exitButtun.append(exitButtunText);

    OptionDive.append(restartButtun)
    OptionDive.append(exitButtun)

    popDiv.append(popDivMassge)
    popDiv.append(OptionDive)
    document.body.append(popDiv)

    let exit = document.querySelector(".exit-buttun")
    exit.onclick = ()=>{
    window.close()
}
let restart = document.querySelector(".restart-buttun")
restart.onclick = ()=>{
    location.reload()
}

}
