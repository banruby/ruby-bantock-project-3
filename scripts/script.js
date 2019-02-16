
const myApp = {};

// value to move cards on click
myApp.currentCard = 1;

// to track current question
myApp.currentQuestion = 1;

// TEMP STYLING ON CLICK
$(".card").on("click", "label", function(){
    $("label").removeClass("red");
    $(this).addClass("red");
})

myApp.questionData = [
    question1 = [
        { question: "You know the drill ..."},
        { answers: [
            { answer: "Top", 
              points: [
                { name: "Gryffindor", points: 5 },
                { name: "Slytherin", points: 5 },
                { name: "Ironman", points: 2 }
              ]  
            },
            { answer: "Bottom", points: [
                { name: "Hufflepuff", points: 5 },
                { name: "Robin", points: 2 },
                { name: "Spiderman", points: 2 }
              ]
            },
            { answer: "Switch", points: [ 
                { name: "Ravenclaw", points: 5 },
                { name: "WonderWoman", points: 2}
              ]
            },
            { answer: "???", points: [
                { name: "Hufflepuff", points: 1}
              ]
    }]}],
    question2 = [
        { question: "Favourite colour?"},
        { answers: [
            { answer: "Blue",
              points: [
                  { name: "Squirtle", points: 5 },
                  { name: "Ravenclaw", points: 2 }
              ] 
            },
            { answer: "Red",
              points: [
                  { name: "Charmander", points: 5 },
                  { name: "Gryffindor", points: 2 }
              ]
            },
            { answer: "Green",
              points: [
                  { name: "Bulbasaur", points: 5 },
                  { name: "Slytherin", points: 2 }
              ]
            },
            { answer: "Yellow", 
              points: [
                  { name: "Pikachu", points: 5 },
                  { name: "Hufflepuff", points: 2 }
              ]    
    }]}],
    question3 = [
        { question: "What's your go-to vibe?"},
        { answers: [
            { answer: "Classic & Classy", 
              points: [
                  { name: "Latrice", points: 5 }
              ]
            },
            { answer: "Weird & Wild",
              points: [
                  { name: "Sasha", points: 5 }
              ]
            },
            { answer: "Pink & Plastic",
              points: [
                  { name: "Trixie", points: 5 }
              ]
            },
            { answer: "Energetic & Enigmatic",
              points: [
                  { name: "Shangela", points: 5 }
              ]
    }]}],
    question4 = [
        { question: "Your tombstone might read ..." },
        { answers: [
            { answer: "Kind of a Dick", 
              points: [
                  { name: "Ironman", points: 5 },
                  { name: "Charmander", points: 2 }
              ]
            },
            { answer: "Beloved Understudy",
              points: [
                  { name: "Robin", points: 5 },
                  { name: "Bulbasaur", points: 2 }
              ]
            },
            { answer: "Elusive Artisan",
              points: [
                  { name: "Spiderman", points: 5 },
                  { name: "Squirtle", points: 2 }
              ]
            },
            { answer: "Snappy Dresser",
              points: [
                  { name: "WonderWoman", points: 5 },
                  { name: "Pikachu", points: 2 }
              ]
    }]}],
    question5 = [
        { question: "It's Friday night! You are ..." },
        { answers: [
            { answer: "On a sweaty dancefloor!",
              points: [
                  { name: "Shangela", points: 5 }
              ]
            },
            { answer: "At an exclusive art opening!",
              points: [
                  { name: "Sasha", points: 5 }
              ]
            },
            { answer: "Playing video games!",
              points: [
                  { name: "Trixie", points: 5 }
              ]
            },
            { answer: "Asleep by 9:00PM!",
              points: [
                  { name: "Latrice", points: 5 }
              ]    
    }]}],
    question6 = [
        { question: "You find a $100 bill on the ground. You ..."},
        { answers: [
            { answer: "Stuff the cash in your pocket and walk away quickly!",
              points: [
                { name: "Slytherin", points: 5 },
                { name: "Trixie", points: 2 }
              ]
            },
            { answer: "Buy a round of drinks for all your friends!",
              points: [
                { name: "Gryffindor", points: 5 },
                { name: "Shangela", points: 2 }
              ]
            },
            { answer: "Put it in your savings account for safe keeping!",
              points: [
                { name: "Ravenclaw", points: 5 },
                { name: "Latrice", points: 2 }
              ]
            },
            { answer: "Find it's owner and return the cash!",
              points: [
                { name: "Hufflepuff", points: 5 },
                { name: "Sasha", points: 2 }
              ]
    }]}],
    question7 = [
        { question: "You most aspire to ..." },
        { answers: [
            { answer: "Solve the energy crisis",
              points: [
                  { name: "Pikachu", points: 5 }
              ]
            },
            { answer: "End world hunger",
              points: [
                  { name: "Charmander", points: 5 }
              ]
            },
            { answer: "Refreeze the polar ice caps",
              points: [
                  { name: "Squirtle", points: 5 }
              ]
            },
            { answer: "Reduce greenhouse gas emissions",
              points: [
                  { name: "Bulbasaur", points: 5 }
              ]
    }]}],
    question8 = [
        { question: "You're trapped on a deserted island. You ..." },
        { answers: [
            { answer: "Use your satellite phone to call in a chopper.",
              points: [
                  { name: "Ironman", points: 5 }
              ]
            },
            { answer: "Start a new matriarchal society",
              points: [
                  { name: "WonderWoman", points: 5 }
              ]
            },
            { answer: "Build an elaborate shelter",
              points: [
                  { name: "Spiderman", points: 5 }
              ]
            },
            { answer: "Cry",
              points: [
                  { name: "Robin", points: 5 }
              ]

    }]}],
]

myApp.displayQuestion = () => {
    
    // using an existing variable to get the index value of the questions
    myApp.questionIndex = 0;

    myApp.answerA = myApp.questionData[myApp.questionIndex][1].answers[0].answer;
    myApp.answerB = myApp.questionData[myApp.questionIndex][1].answers[1].answer; 
    myApp.answerC = myApp.questionData[myApp.questionIndex][1].answers[2].answer;
    myApp.answerD = myApp.questionData[myApp.questionIndex][1].answers[3].answer;

    $(`.card`).empty();

    if (myApp.questionIndex < 8) {
        $(`.card`).html(`
    
            <fieldset class="question-${myApp.currentQuestion}">
                <p>${myApp.questionData[myApp.questionIndex][0].question}</p>
    
                <label for="answer-${myApp.currentQuestion}A">${myApp.answerA}</label>
                <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}A" value="answer-A">
    
                <label for="answer-${myApp.currentQuestion}B">${myApp.answerB}</label>
                <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}B" value="answer-B">
    
                <label for="answer-${myApp.currentQuestion}C">${myApp.answerC}</label>
                <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}C" value="answer-C">
    
                <label for="answer-${myApp.currentQuestion}D">${myApp.answerD}</label>
                <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}D" value="answer-D">
    
                <button type="submit" class="submit-question-${myApp.currentQuestion} next">SUBMIT</button>
            </fieldset>
            `)

        myApp.questionIndex = myApp.questionIndex + 1;
    } else {
        myApp.displayResults();
    }

        console.log(myApp.questionIndex);
        myApp.currentQuestion = myApp.currentQuestion + 1;
}


// array for harry potter data
myApp.hPArray = [
    { name: "Gryffindor", points: 0 },
    { name: "Ravenclaw", points: 0 },
    { name: "Slytherin", points: 0 },
    { name: "Hufflepuff", points: 0}
    ];

// array for pokemon data
myApp.pokeArray = [
    { name: "Bulbasaur", points: 0 },
    { name: "Charmander", points: 0 },
    { name: "Squirtle", points: 0 },
    { name: "Pikachu", points: 0 }
    ];

// array for superhero data
myApp.heroArray = [
    { name: "Spider-Man", points: 0 },
    { name: "Wonder Woman", points: 0 },
    { name: "Robin", points: 0 },
    { name: "Ironman", points: 0 }
    ];

// array for dragqueen data
myApp.dragArray = [
    { name: "Trixie Mattel", points: 0 },
    { name: "Sasha Velour", points: 0 },
    { name: "Latrice Royale", points: 0 },
    { name: "Shangela", points: 0 }
    ];

// QUESTION 1
myApp.listenerQ1 = () => {
    $("fieldset").on("click", ".submit-question-1", function(event){
        event.preventDefault();
        console.log("Listener #1!")
        myApp.$userAnswer1 = $("input[name=question-1]:checked").val();
        if (myApp.$userAnswer1 === "answer-A") {
            myApp.hPArray[0].points = myApp.hPArray[0].points + 5;
            // ^ Gryffindor
            myApp.hPArray[2].points = myApp.hPArray[2].points + 5;
            // ^ Slytherin
            myApp.heroArray[3].points = myApp.heroArray[3]. points + 1;
            // ^ Ironman
        } else if (myApp.$userAnswer1 === "answer-B") {
            myApp.hPArray[3].points = myApp.hPArray[3].points + 5;
            // ^ Hufflepuff
            myApp.heroArray[2].points = myApp.heroArray[2].points + 1;
            // ^ Robin
            myApp.heroArray[0].points = myApp.heroArray[0].points + 1;
            // ^ Spider-Man
        } else if (myApp.$userAnswer1 === "answer-C") {
            myApp.hPArray[1].points = myApp.hPArray[1].points + 5;
            // ^ Ravenclaw
            myApp.heroArray[2].points = myApp.heroArray[2].points + 1;
            // ^ Wonder Woman
        } else if (myApp.$userAnswer1 === "answer-D") {
            myApp.hPArray[3].points = myApp.hPArray[3].points + 1;
            // ^ Hufflepuff
        }
    });
};

// QUESTION 2
myApp.listenerQ2 = () => {
    $(".submit-question-2").one("click", function(event) {
        event.preventDefault();
        const $userAnswer2 = $("input[name=question-2]:checked").val();
        if ($userAnswer2 === "answer-A") {
            myApp.pokeArray[2].points = myApp.pokeArray[2].points + 5;
            // ^ Squirtle
            myApp.hPArray[1].points = myApp.hPArray[1].points + 1;
            // ^ Ravenclaw
        } else if ($userAnswer2 === "answer-B") {
            myApp.pokeArray[1].points = myApp.pokeArray[1].points + 5;
            // ^ Charmander
            myApp.hPArray[0].points = myApp.hPArray[0].points + 1;
            // ^ Gryffindor
        } else if ($userAnswer2 === "answer-C") {
            myApp.pokeArray[0].points = myApp.pokeArray[0].points + 5;
            // ^ Bulbasaur
            myApp.hPArray[2].points = myApp.hPArray[2].points + 1;
            // ^ Slytherin
        } else if ($userAnswer2 === "answer-D") {
            myApp.pokeArray[3].points = myApp.pokeArray[3].points + 5;
            // ^ Pikachu
            myApp.hPArray[3].points = myApp.hPArray[3].points + 1;
            // ^ Hufflepuff
        }
    });
};

// QUESTION 3
myApp.listenerQ3 = () => {
    $(".submit-question-3").one("click", function (event) {
        event.preventDefault();
        const $userAnswer3 = $("input[name=question-3]:checked").val();
        if ($userAnswer3 === "answer-A") {
            myApp.dragArray[2].points = myApp.dragArray[2].points + 5;
            // ^ Latrice Royale
        } else if ($userAnswer3 === "answer-B") {
            myApp.dragArray[1].points = myApp.dragArray[1].points + 5;
            // ^ Sasha Velour
        } else if ($userAnswer3 === "answer-C") {
            myApp.dragArray[0].points = myApp.dragArray[0].points + 5;
            // ^ Trixie Mattel
        } else if ($userAnswer3 === "answer-D") {
            myApp.dragArray[3].points = myApp.dragArray[3].points + 5;
            // ^ Shangela
        }
    });
}

// QUESTION 4
myApp.listenerQ4 = () => {
    $(".submit-question-4").one("click", function (event) {
        event.preventDefault();
        const $userAnswer4 = $("input[name=question-4]:checked").val();
        if ($userAnswer4 === "answer-A") {
            myApp.heroArray[3].points = myApp.heroArray[3].points + 5;
            // ^ Ironman
        } else if ($userAnswer4 === "answer-B") {
            myApp.heroArray[2].points = myApp.heroArray[2].points + 5;
            // ^ Robin
        } else if ($userAnswer4 === "answer-C") {
            myApp.heroArray[0].points = myApp.heroArray[0].points + 5;
            // ^ Spiderman
        } else if ($userAnswer4 === "answer-D") {
            myApp.heroArray[1].points = myApp.heroArray[1].points + 5;
            // ^ Wonder Woman
        }
    })
};

// sorts the arrays so the [0] index value matches the highest point value
myApp.arraySort = (array) => {
    array.sort(function (aValue, bValue){
        return aValue.points < bValue.points;
    });
}

// event listener on results button
myApp.displayResults = () => {
        myApp.arraySort(myApp.hPArray);
        myApp.arraySort(myApp.pokeArray);
        myApp.arraySort(myApp.heroArray);
        myApp.arraySort(myApp.dragArray);
        
        $(".results-display").append(`
        <h2>Your Gay Nerd Coat of Arms:</h2>
        <h3>${myApp.hPArray[0].name}, ${myApp.pokeArray[0].name}, ${myApp.dragArray[0].name}, ${myApp.heroArray[0].name}</h3>
        `);
    
        myApp.insertImageHP();
        myApp.insertImagePoke();
        myApp.insertImageHero();
        myApp.insertImageDrag();

}

myApp.insertImageHP = () => {
    $(".quadrant-1 img").attr("src", `assets/${myApp.hPArray[0].name}.jpg`)
}

myApp.insertImagePoke = () => {
    $(".quadrant-2 img").attr("src", `assets/${myApp.pokeArray[0].name}.png`)
}

myApp.insertImageHero = () => {
    if (myApp.heroArray[0].name === "Spider-Man") {
        $(".quadrant-3 img").attr("src", "assets/spiderman.png");
    } else if (myApp.heroArray[0].name === "Wonder Woman") {
        $(".quadrant-3 img").attr("src", "assets/wonderwoman.jpg");
    } else if (myApp.heroArray[0].name === "Robin") {
        $(".quadrant-3 img").attr("src", "assets/robin.jpg");
    } else if (myApp.heroArray[0].name === "Ironman") {
        $(".quadrant-3 img").attr("src", "assets/ironman.jpg");
    }
}

myApp.insertImageDrag = () => {
    if (myApp.dragArray[0].name === "Trixie Mattel") {
        $(".quadrant-4 img").attr("src", "assets/trixie.jpg");
    } else if (myApp.dragArray[0].name === "Latrice Royale") {
        $(".quadrant-4 img").attr("src", "assets/latrice.jpg");
    } else if (myApp.dragArray[0].name === "Sasha Velour") {
        $(".quadrant-4 img").attr("src", "assets/sasha.jpg");
    } else if (myApp.dragArray[0].name === "Shangela") {
        $(".quadrant-4 img").attr("src", "assets/shangela.jpg");
    }
}

// init function (holds everything that needs to be loaded on launch)
myApp.init = () => {
    myApp.listenerQ1();
    myApp.listenerQ2();
    myApp.listenerQ3();
    myApp.listenerQ4();
    myApp.nextCard();
}

// doc ready (only holds init function)
$(function () {
    myApp.init();
});



// OTHER STUFF THAT I'M STILL WORKING ON





myApp.nextCard = () => {
    $(".card").on("click", "button.next", () => {
        $(`.card-${myApp.currentCard}`).slideToggle(500);
        myApp.currentCard = myApp.currentCard + 1;
        $(`.card-${myApp.currentCard}`).delay(500).slideDown(500).delay(1000);
        myApp.displayQuestion();
    })
}