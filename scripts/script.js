
const myApp = {};

// value to move cards on click
myApp.currentQuestion = 1;

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
                { name: "Spiderman", points: 2 },
                { name: "Robin", points: 2 }
              ]
            },
            { answer: "Switch", points: [ 
                { name: "Ravenclaw", points: 5 },
                { name: "WonderWoman", points: 2}
              ]
            },
            { answer: "???", points: [
                { name: "Hufflepuff", points: 2 }
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
            { answer: "Use your satellite phone to call in the chopper.",
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

// array for harry potter data
myApp.hPArray = [
    { name: "Gryffindor", points: 0, alt: "The Gryffindor crest. It features a shield with a golden lion." },
    { name: "Ravenclaw", points: 0, alt: "The Ravenclaw crest. It features a shield with a raven in the centre." },
    { name: "Slytherin", points: 0, alt: "The Slytherin crest. It features a shield with a green snake at the centre." },
    { name: "Hufflepuff", points: 0, alt: "The Hufflepuff crest. It features a shield with a badger at the center."}
    ];
    
// array for pokemon data
myApp.pokeArray = [
    { name: "Bulbasaur", points: 0, alt: "The Pokemon Bulbasaur smiling against a white background." },
    { name: "Charmander", points: 0, alt: "The Pokemon Charmander jumping in the air against a firey background." },
    { name: "Squirtle", points: 0, alt: "The Pokemon Squirtle jumping in the air against a swampy green background." },
    { name: "Pikachu", points: 0, alt: "The Pokemon Pikachu smiling and jumping in the air against a white background. It's ears are askew." }
];

// array for superherdiv
myApp.heroArray = [
    { name: "Spiderman", points: 0, alt: "A cartoon of Spiderman sitting on top of a traffic light. He is gesturing forwards." },
    { name: "WonderWoman", points: 0, alt: "A cartoon of Wonder Woman. Bullets are bouncing off her bracelets." },
    { name: "Robin", points: 0, alt: "A cartoon of Robin, Batman's protege. He is standing against the night sky looking intense." },
    { name: "Ironman", points: 0, alt: "A cartoon of the superhero Ironman. He is wearing his metal suit." }
];

// array for dragqueen data
myApp.dragArray = [
    { name: "Trixie", points: 0, alt: "Trixie Mattel wearing a pink wig with large pink lips and black eye shadow. She is also wearing a bejewelled pink dress and long white everning gloves." },
    { name: "Sasha", points: 0, alt: "Sasha Velour wearing a clown hat with a large red pompom on top. She's also wearing a feathered collar with long red gloves." },
    { name: "Latrice", points: 0, alt: "Latrice Royale wearing a large bejewelled necklace with a large blond wig piled on top of her head in a beehive style updo." },
    { name: "Shangela", points: 0, alt: "Shangela is smiling in front of a turquoise bakcground wearing a blue skirt and crop top. Her skirt says 'Halleloo' in large black text."}
];

myApp.calculate = (pointTracker) => {
    myApp.userAnswerPointsArray.forEach((answer) => {
        let answerName = answer.name;
        let answerPoints = answer.points;
        pointTracker.forEach((pointCategory) => {
            if (answerName === pointCategory.name) {
                pointCategory.points = pointCategory.points + answerPoints;
            }
        });
    });
};
   
// calculates and displays results of the quiz
myApp.displayResults = () => {
    myApp.arraySort(myApp.hPArray);
    myApp.arraySort(myApp.pokeArray);
    myApp.arraySort(myApp.heroArray);
    myApp.arraySort(myApp.dragArray);
    
    $(".results-display").append(`
    <h2>Your Gay Nerd Coat of Arms:</h2>
    <h3>${myApp.hPArray[0].name}, ${myApp.pokeArray[0].name}, ${myApp.heroArray[0].name}, and ${myApp.dragArray[0].name}</h3>
    `);
    
    myApp.insertImageHP();
    myApp.insertImagePoke();
    myApp.insertImageHero();
    myApp.insertImageDrag();  
}

myApp.arraySort = (array) => {
    array.sort(function (aValue, bValue) {
        return aValue.points < bValue.points;
    });

}

myApp.insertImageHP = () => {
    if (myApp.hPArray[0].name === "Slytherin") {
        $(".quadrant-1").attr("src", "assets/slytherin.jpg");
    } else if (myApp.hPArray[0].name === "Gryffindor") {
        $(".quadrant-1").attr("src", "assets/gryffindor.jpg");
    } else if (myApp.hPArray[0].name === "Ravenclaw") {
        $(".quadrant-1").attr("src", "assets/ravenclaw.jpg");
    } else if (myApp.hPArray[0].name === "Hufflepuff") {
        $(".quadrant-1").attr("src", "assets/hufflepuff.jpg");
    }
    $(".quadrant-1 img").attr("alt", `${myApp.hPArray[0].alt}`);
}

myApp.insertImagePoke = () => {
   if (myApp.pokeArray[0].name === "Pikachu") {
       $(".quadrant-2 img").attr("src", "assets/pikachu.jpg");
   } else if (myApp.pokeArray[0].name === "Bulbasaur") {
       $(".quadrant-2 img").attr("src", "assets/bulbasaur.png");
   } else if (myApp.pokeArray[0].name === "Charmander") {
       $(".quadrant-2 img").attr("src", "assets/charmander.png");
   } else if (myApp.pokeArray[0].name === "Squirtle") {
        $(".quadrant-2 img").attr("src", "assets/squirtle.png");
   }
    $(".quadrant-2 img").attr("alt", `${myApp.pokeArray[0].alt}`);
}

myApp.insertImageHero = () => {
    if (myApp.heroArray[0].name === "Spiderman") {
        $(".quadrant-3 img").attr("src", "assets/spiderman.png");
    } else if (myApp.heroArray[0].name === "WonderWoman") {
        $(".quadrant-3 img").attr("src", "assets/wonderwoman.jpg");
    } else if (myApp.heroArray[0].name === "Robin") {
        $(".quadrant-3 img").attr("src", "assets/robin.jpg");
    } else if (myApp.heroArray[0].name === "Ironman") {
        $(".quadrant-3 img").attr("src", "assets/ironman.jpg");
    }
    $(".quadrant-3 img").attr("alt", `${myApp.heroArray[0].alt}`);
}

myApp.insertImageDrag = () => {
    if (myApp.dragArray[0].name === "Trixie") {
        $(".quadrant-4 img").attr("src", "assets/trixie.jpg");
    } else if (myApp.dragArray[0].name === "Latrice") {
        $(".quadrant-4 img").attr("src", "assets/latrice.jpg");
    } else if (myApp.dragArray[0].name === "Sasha") {
        $(".quadrant-4 img").attr("src", "assets/sasha.jpg");
    } else if (myApp.dragArray[0].name === "Shangela") {
        $(".quadrant-4 img").attr("src", "assets/shangela.jpg");
    }
    $(".quadrant-4 img").attr("alt", `${myApp.dragArray[0].alt}`);
}

myApp.labelListener = () => {
    $(".card").on("click", "label", function() {
        $(".label-container").removeClass("div-checked");
        $(this).parent(".label-container").addClass("div-checked");
    })
}

// shows next question by inserting html
myApp.displayQuestion = () => {

    myApp.questionIndex = myApp.currentQuestion - 1;
    $(".card").empty();

    if (myApp.currentQuestion < 9) {

        myApp.answerA = myApp.questionData[myApp.questionIndex][1].answers[0].answer;
        myApp.answerB = myApp.questionData[myApp.questionIndex][1].answers[1].answer;
        myApp.answerC = myApp.questionData[myApp.questionIndex][1].answers[2].answer;
        myApp.answerD = myApp.questionData[myApp.questionIndex][1].answers[3].answer;

        $(".card").html(`
            <fieldset class="question-${myApp.currentQuestion}">
            <h2>${myApp.questionData[myApp.questionIndex][0].question}</h2>
            
            <div class="question-container">
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}A">${myApp.answerA}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}A" value="0">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}B">${myApp.answerB}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}B" value="1">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}C">${myApp.answerC}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}C" value="2">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}D">${myApp.answerD}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}D" value="3">
                </div>
            </div>
            
            <button type="submit" class="submit-question-${myApp.currentQuestion} next">SUBMIT</button>
            </fieldset>
            `);

    } else if (myApp.currentQuestion >= 9) {
        $("section.title").addClass("disappear");
        $(".play-window").addClass("final-card");
        $("main").addClass("final-position");
        $(".card").addClass("card-update");
        
        $(".card").html(`
            <div class="results-display"></div>
            <div class="coat-of-arms-container">
                <div class="coat-of-arms">
                    <div class="quadrant quadrant-1">
                        <img alt="">
                    </div>
                    <div class="quadrant quadrant-2">
                        <img alt="">
                    </div>
                    <div class="quadrant quadrant-3">
                        <img alt="">
                    </div>
                    <div class="quadrant quadrant-4">
                        <img alt="">
                    </div>
                </div>
            </div>
        `)
        myApp.displayResults();
    }


    myApp.currentQuestion = myApp.currentQuestion + 1;
}

// calculates score based on each value in the quiz
myApp.addPoints = () => {
    
    // gets user answer per question
    myApp.userAnswer = $(".card input:checked").val();
    myApp.userAnswer = Number(myApp.userAnswer);

    // gets points array from the answer selected
    myApp.userAnswerPointsArray = myApp.questionData[myApp.questionIndex][1].answers[myApp.userAnswer].points;

    // adds opoints to the point tracking arrays
    myApp.calculate(myApp.hPArray);
    myApp.calculate(myApp.dragArray);
    myApp.calculate(myApp.heroArray);
    myApp.calculate(myApp.pokeArray);
}

// delivers subsequent questions to user
myApp.next = () => {
    $(".card").on("click", "button.next", () => {
        myApp.addPoints();
        myApp.displayQuestion();
    })
}

// delivers first question to user
myApp.launch = () => {
    $(".launch").click(() => {

        myApp.questionIndex = myApp.currentQuestion - 1;
        myApp.answerA = myApp.questionData[myApp.questionIndex][1].answers[0].answer;
        myApp.answerB = myApp.questionData[myApp.questionIndex][1].answers[1].answer;
        myApp.answerC = myApp.questionData[myApp.questionIndex][1].answers[2].answer;
        myApp.answerD = myApp.questionData[myApp.questionIndex][1].answers[3].answer;

        $(".card").html(`
            <fieldset class="question-${myApp.currentQuestion}">
            <h2>${myApp.questionData[myApp.questionIndex][0].question}</h2>
            
            <div class="question-container">
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}A">${myApp.answerA}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}A" value="0">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}B">${myApp.answerB}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}B" value="1">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}C">${myApp.answerC}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}C" value="2">
                </div>
                <div class="label-container">
                    <label for="answer-${myApp.currentQuestion}D">${myApp.answerD}</label>
                    <input type="radio" name="question-${myApp.currentQuestion}" id="answer-${myApp.currentQuestion}D" value="3">
                </div>
            </div>
            
            <button type="submit" class="submit-question-${myApp.currentQuestion} next">SUBMIT</button>
            </fieldset>
            `);

        myApp.currentQuestion = myApp.currentQuestion + 1;
    });
}

// init function (holds everything that needs to be loaded on launch)
myApp.init = () => {
    myApp.launch();
    myApp.next();
    myApp.labelListener();
}

// doc ready (only holds init function)
$(function () {
    myApp.init();
});





 


