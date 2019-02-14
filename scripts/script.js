


// array for harry potter data
const hPArray = [
    { name: "Gryffindor", points: 0 },
    { name: "Ravenclaw", points: 0 },
    { name: "Slytherin", points: 0 },
    { name: "Hufflepuff", points: 0}
    ];

// array for pokemon data
const pokeArray = [
    { name: "Bulbasaur", points: 0 },
    { name: "Charmander", points: 0 },
    { name: "Squirtle", points: 0 },
    { name: "Pikachu", points: 0 }
    ];

// array for superhero data
const heroArray = [
    { name: "Spider-Man", points: 0 },
    { name: "Wonder Woman", points: 0 },
    { name: "Robin", points: 0 },
    { name: "Ironman", points: 0 }
    ];

// array for dragqueen data
const dragArray = [
    { name: "Trixie Mattel", points: 0 },
    { name: "Sasha Velour", points: 0 },
    { name: "Latrice Royale", points: 0 },
    { name: "Shangela", points: 0 }
    ];

//only accepts one submit of a question to avoid adding extra data to the arrays
// QUESTION 1
$(".submit-question-1").one("click", function(event){
    event.preventDefault();
    const $userAnswer1 = $("input[name=question-1]:checked").val();
    if ($userAnswer1 === "answer-A") {
        hPArray[0].points = hPArray[0].points + 5;
        // ^ Gryffindor
        hPArray[2].points = hPArray[2].points + 5;
        // ^ Slytherin
        heroArray[3].points = heroArray[3]. points + 1;
        // ^ Ironman
    } else if ($userAnswer1 === "answer-B") {
        hPArray[3].points = hPArray[3].points + 5;
        // ^ Hufflepuff
        heroArray[2].points = heroArray[2].points + 1;
        // ^ Robin
        heroArray[0].points = heroArray[0].points + 1;
        // ^ Spider-Man
    } else if ($userAnswer1 === "answer-C") {
        hPArray[1].points = hPArray[1].points + 5;
        // ^ Ravenclaw
        heroArray[2].points = heroArray[2].points + 1;
        // ^ Wonder Woman
    } else if ($userAnswer1 === "answer-D") {
        hPArray[3].points = hPArray[3].points + 1;
        // ^ Hufflepuff
    }
});

// QUESTION 2
$(".submit-question-2").one("click", function(event) {
    event.preventDefault();
    const $userAnswer2 = $("input[name=question-2]:checked").val();
    if ($userAnswer2 === "answer-A") {
        pokeArray[2].points = pokeArray[2].points + 5;
        // ^ Squirtle
        hPArray[1].points = hPArray[1].points + 1;
        // ^ Ravenclaw
    } else if ($userAnswer2 === "answer-B") {
        pokeArray[1].points = pokeArray[1].points + 5;
        // ^ Charmander
        hPArray[0].points = hPArray[0].points + 1;
        // ^ Gryffindor
    } else if ($userAnswer2 === "answer-C") {
        pokeArray[0].points = pokeArray[0].points + 5;
        // ^ Bulbasaur
        hPArray[2].points = hPArray[2].points + 1;
        // ^ Slytherin
    } else if ($userAnswer2 === "answer-D") {
        pokeArray[3].points = pokeArray[3].points + 5;
        // ^ Pikachu
        hPArray[3].points = hPArray[3].points + 1;
        // ^ Hufflepuff
    }
});

// QUESTION 3
$(".submit-question-3").one("click", function (event) {
    event.preventDefault();
    const $userAnswer3 = $("input[name=question-3]:checked").val();
    if ($userAnswer3 === "answer-A") {
        dragArray[2].points = dragArray[2].points + 5;
        // ^ Latrice Royale
    } else if ($userAnswer3 === "answer-B") {
        dragArray[1].points = dragArray[1].points + 5;
        // ^ Sasha Velour
    } else if ($userAnswer3 === "answer-C") {
        dragArray[0].points = dragArray[0].points + 5;
        // ^ Trixie Mattel
    } else if ($userAnswer3 === "answer-D") {
        dragArray[3].points = dragArray[3].points + 5;
        // ^ Shangela
    }
});

// QUESTION 4
$(".submit-question-4").one("click", function (event) {
    event.preventDefault();
    const $userAnswer4 = $("input[name=question-4]:checked").val();
    if ($userAnswer4 === "answer-A") {
        heroArray[3].points = heroArray[3].points + 5;
        // ^ Ironman
    } else if ($userAnswer4 === "answer-B") {
        heroArray[2].points = heroArray[2].points + 5;
        // ^ Robin
    } else if ($userAnswer4 === "answer-C") {
        heroArray[0].points = heroArray[0].points + 5;
        // ^ Spiderman
    } else if ($userAnswer4 === "answer-D") {
        heroArray[1].points = heroArray[1].points + 5;
        // ^ Wonder Woman
    }
})

// sorts the arrays so the [0] index value matches the highest point value
const arraySort = (array) => {
    array.sort(function (a, b){
        return a.points < b.points;
    });
}

// changes color on option select
$("label").on("click", function(){
    $("label").removeClass("red");
    $(this).addClass("red");
})

// event listener on results button
$("button.results").one("click", function(){
    arraySort(hPArray);
    arraySort(pokeArray);
    arraySort(heroArray);
    arraySort(dragArray);
    
    $(".results-display").append(`
    <h2>Your Gay Nerd Coat of Arms:</h2>
    <h3>${hPArray[0].name}, ${pokeArray[0].name}, ${dragArray[0].name}, ${heroArray[0].name}</h3>
    `);

    insertImageHP();
    insertImagePoke();
    insertImageHero();
    insertImageDrag();
})

const insertImageHP = () => {
    $(".quadrant-1 img").attr("src", `assets/${hPArray[0].name}.jpg`)
}

const insertImagePoke = () => {
    $(".quadrant-2 img").attr("src", `assets/${pokeArray[0].name}.png`)
}

const insertImageHero = () => {
    if (heroArray[0].name === "Spider-Man") {
        $(".quadrant-3 img").attr("src", "assets/spiderman.png");
    } else if (heroArray[0].name === "Wonder Woman") {
        $(".quadrant-3 img").attr("src", "assets/wonderwoman.jpg");
    } else if (heroArray[0].name === "Robin") {
        $(".quadrant-3 img").attr("src", "assets/robin.jpg");
    } else if (heroArray[0].name === "Ironman") {
        $(".quadrant-3 img").attr("src", "assets/ironman.jpg");
    }
}

const insertImageDrag = () => {
    if (dragArray[0].name === "Trixie Mattel") {
        $(".quadrant-4 img").attr("src", "assets/trixie.jpg");
    } else if (dragArray[0].name === "Latrice Royale") {
        $(".quadrant-4 img").attr("src", "assets/latrice.jpg");
    } else if (dragArray[0].name === "Sasha Velour") {
        $(".quadrant-4 img").attr("src", "assets/sasha.jpg");
    } else if (dragArray[0].name === "Shangela") {
        $(".quadrant-4 img").attr("src", "assets/shangela.jpg");
    }
}

// const hPDisplayImage = () => {
//     if (hPArray[0].name === "") {

//     }
// }