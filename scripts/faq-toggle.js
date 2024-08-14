let questions = document.getElementsByClassName("faq-ques");
let answers = document.getElementsByClassName("faq-ans");
let arrow = document.getElementsByClassName("quesArr");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", e => {
    let isHidden = document
      .getElementById(answers[i].id)
      .style.display.valueOf();

    let status = isHidden === "block" ? "none" : "block";
    document.getElementById(answers[i].id).style.display = status;
  });
}

