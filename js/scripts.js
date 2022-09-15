//region Variables
let n = 1
let r1; let r2; let r3
let r4; let r5; let r6
let r7; let r8; let r9

// TODO
// activate button per Enter on keyboard !!
const enter = () => {
    if (local.key === "Enter" ||
        event.key === "Enter" ||
        event.which === 13 )  {
        event.default.disable()
        $("#answerBtn").click()
    }
}

const rng = (n) => {
    return Math.ceil(Math.random() * (n * 10))
}
//endregion



// On Load of the Page Initialise the Questions
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
    $("#answerBtn").on("click", checkAnswer).on("keydown", enter)
    $("#resetBtn").on("click", reset)
})

//region Functions
const checkAnswer = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r1.text())) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer).on("click", checkAnswer2)
            $("#q1").hide()
            $("#q2").show()
            $("#answer").val("")
            $("#img1").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")

    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer2 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r2.text())) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer2).on("click", checkAnswer3)
            $("#q2").hide()
            $("#q3").show()
            $("#answer").val("")
            $("#img2").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer3 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r3.text())) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer3).on("click", checkAnswer4)
            $("#q3").hide()
            $("#q4").show()
            $("#answer").val("")
            $("#img3").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer4 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === parseFloat(eval(r4.text()))) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer4).on("click", checkAnswer5)
            $("#q4").hide()
            $("#q5").show()
            $("#answer").val("")
            $("#img4").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer5 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r5.text())) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer5).on("click", checkAnswer6)
            $("#q5").hide()
            $("#q6").show()
            $("#answer").val("")
            $("#img5").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer6 = () => {
    let answer = $("#answer").val()

    if (parseInt(answer) === eval(r6.text())) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer6).on("click", checkAnswer7)
            $("#q6").hide()
            $("#q7").show()
            $("#answer").val("")
            $("#img6").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer7 = () => {
    let answer = $("#answer").val()

    alert(eval(r7.text()).toFixed(2))

    if (parseFloat(answer) === eval(r7.text()).toFixed(2)) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer7).on("click", checkAnswer8)
            $("#q7").hide()
            $("#q8").show()
            $("#answer").val("")
            $("#img7").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer8 = () => {
    let answer = $("#answer").val()

    alert(eval(r8.text()).toFixed(2))

    if (parseFloat(answer) === eval(r8.text()).toFixed(2)) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer8).on("click", checkAnswer9)
            $("#q8").hide()
            $("#q9").show()
            $("#answer").val("")
            $("#img8").show()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
        $("#answer").val("")
    }, 1000)
}

const checkAnswer9 = () => {
    let answer = $("#answer").val()

    alert(eval(r9.text()))

    if (parseFloat(answer) === eval(r9.text()).toFixed(2)) {
        $("#result").removeClass("bg-dark")
            .addClass("bg-success")
        setTimeout(function () {
            $("#result").removeClass("bg-success").addClass("bg-dark")
            $("#answerBtn").off("click", checkAnswer9).on("click", win)
            $("#q9").hide()
            $("#img9").show()
            $("#answer").parent().parent().remove()
        }, 1000)
    } else $("#result").removeClass("bg-dark")
        .addClass("bg-danger")
    setTimeout(function () {
        $("#result").removeClass("bg-danger").addClass("bg-dark")
    }, 1000)

}

const reset = () => {
    location.reload()
}
//endregion

// TODO
// insert new DOM-ELEMENT and remove everything else after !!
function win() {

}