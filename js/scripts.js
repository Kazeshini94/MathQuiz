//region Variables
let n = 1
let r1; let r2; let r3
let r4; let r5; let r6
let r7; let r8; let r9

const rng = (n) => {
    return Math.ceil(Math.random() * (n * 10))
}
//endregion

// On Load of the Page Initialise the Questions
// And all the Functions ! Like Pressing Button per Enter on Keyboard,
// Reset and Check Answer Button
$(function () {
    r1 = $("#q1").text(rng(n++) + " + " + rng(n++))
    r2 = $("#q2").text(rng(--n) + " - " + rng(n++)).hide()
    r3 = $("#q3").text(rng(--n) + " + " + rng(n++) + " - " + rng(--n)).hide()
    r4 = $("#q4").text(rng(n++) + " * " + rng(--n)).hide()
    r5 = $("#q5").text(rng(n++) + " + " + rng(--n) + " * " + rng(n++)).hide()
    r6 = $("#q6").text(rng(--n) + " * " + (rng(n++) + " - " + rng(--n)) + " + " + rng(n++)).hide()
    r7 = $("#q7").text(rng(--n) + " / " + rng(n++)).hide()
    r8 = $("#q8").text(rng(--n) + " * " + rng(n++) + " / " + rng(--n)).hide()
    r9 = $("#q9").text(rng(n++) + " * " + rng(--n) + " + " + rng(n++) + " / " + rng(--n)).hide()

    $("img").hide()
    window.addEventListener("keydown", function (event) {
        enter(event)
    })
    $("#answerBtn").on("click", checkAnswer)
    $("#resetBtn").on("click", reset)
})

//region Functions
const checkAnswer = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r1.text())) {
        rightAnswer();

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer).on("click", checkAnswer2)
            $("#q1").hide()
            $("#q2").show()
            $("#answer").val("")
            $("#img1").show()
        }, 1000)

    } else wrongAnswer();
}

const checkAnswer2 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r2.text())) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer2).on("click", checkAnswer3)
            $("#q2").hide()
            $("#q3").show()
            $("#answer").val("")
            $("#img2").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer3 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r3.text())) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer3).on("click", checkAnswer4)
            $("#q3").hide()
            $("#q4").show()
            $("#answer").val("")
            $("#img3").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer4 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r4.text())) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer4).on("click", checkAnswer5)
            $("#q4").hide()
            $("#q5").show()
            $("#answer").val("")
            $("#img4").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer5 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r5.text())) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer5).on("click", checkAnswer6)
            $("#q5").hide()
            $("#q6").show()
            $("#answer").val("")
            $("#img5").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer6 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r6.text())) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer6).on("click", checkAnswer7)
            $("#q6").hide()
            $("#q7").show()
            $("#answer").val("")
            $("#img6").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer7 = () => {
    let answer = $("#answer").val()

    if (parseFloat(answer) === parseFloat(eval(r7.text()).toFixed(2))) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer7).on("click", checkAnswer8)
            $("#q7").hide()
            $("#q8").show()
            $("#answer").val("")
            $("#img7").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer8 = () => {
    let answer = $("#answer").val()

    if (parseFloat(answer) === parseFloat(eval(r8.text()).toFixed(2))) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer8).on("click", checkAnswer9)
            $("#q8").hide()
            $("#q9").show()
            $("#answer").val("")
            $("#img8").show()
        }, 1000)

    } else wrongAnswer()
}

const checkAnswer9 = () => {
    let answer = $("#answer").val()

    if (parseFloat(answer) === parseFloat(eval(r9.text()).toFixed(2))) {
        rightAnswer()

        setTimeout(() => {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer9).on("click", win)
            $("#q9").hide()
            $("#img9").show()
            $("#answer").parent().parent().remove()
        }, 1000)

    } else wrongAnswer()
}

const rightAnswer = () => {
    $("#result").removeClass("bg-dark")
        .addClass("bg-success")
}

const wrongAnswer = () => {
    $("#result").removeClass("bg-dark")
        .addClass("bg-danger")

    setTimeout(() => {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const reset = () => {
    location.reload()
}

const enter = (event) => {
    if (event.key === "Enter" ||
        event.code === 13 )  {
        event.preventDefault()
        $("#answerBtn").click()
    }
}

function win() {
    $("body").empty()
        .addClass("p-5 m-0")
        .css("background-image", "url(media/webTelescope.jpg)")
        // .css("background-size" , "cover")
        .append("<div class='container-fluid row g-0 p-sm-5'><p class='col-1 col-sm-3 p-lg-5'><p id='winner' class='col-6 display-1 p-xl-5 text-center text-break'>" +
            "Congratulations on <br> Winning the Game<button id='endScreen' class='mt-5 pt-5 btn-dark text-danger bg-transparent border border-0'> Restart Game</button> </p></p></div>")
    $("#winner").css("color", "rgb(18,215,14)")
    $("#endScreen").on("click", reset)
}
//endregion