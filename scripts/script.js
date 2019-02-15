
const myApp = {};

// TEMP STYLING ON CLICK
$("label").on("click", function(){
    $("label").removeClass("red");
    $(this).addClass("red");
})

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

// value to move cards on click
myApp.currentCard = 1;

// QUESTION 1
myApp.listenerQ1 = () => {
    $(".submit-question-1").one("click", function(event){
        event.preventDefault();
        const $userAnswer1 = $("input[name=question-1]:checked").val();
        if ($userAnswer1 === "answer-A") {
            myApp.hPArray[0].points = myApp.hPArray[0].points + 5;
            // ^ Gryffindor
            myApp.hPArray[2].points = myApp.hPArray[2].points + 5;
            // ^ Slytherin
            myApp.heroArray[3].points = myApp.heroArray[3]. points + 1;
            // ^ Ironman
        } else if ($userAnswer1 === "answer-B") {
            myApp.hPArray[3].points = myApp.hPArray[3].points + 5;
            // ^ Hufflepuff
            myApp.heroArray[2].points = myApp.heroArray[2].points + 1;
            // ^ Robin
            myApp.heroArray[0].points = myApp.heroArray[0].points + 1;
            // ^ Spider-Man
        } else if ($userAnswer1 === "answer-C") {
            myApp.hPArray[1].points = myApp.hPArray[1].points + 5;
            // ^ Ravenclaw
            myApp.heroArray[2].points = myApp.heroArray[2].points + 1;
            // ^ Wonder Woman
        } else if ($userAnswer1 === "answer-D") {
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
myApp.listenerResults = () => {
    $("button.results").one("click", function(){
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
    })
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
    myApp.listenerResults();
}

// doc ready (only holds init function)
$(function () {
    myApp.init();
});



// OTHER STUFF THAT I'M STILL WORKING ON




myApp.nextCard = () => {
    $("button.next").click(() => {
        console.log("CLICK")
        $(`.card-${myApp.currentCard}`).slideToggle(500);
        myApp.currentCard = myApp.currentCard + 1;
        $(`.card-${myApp.currentCard}`).delay(500).slideDown(500);
    })
}