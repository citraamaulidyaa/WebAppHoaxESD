function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-form").classList.remove("hidden");
  }
  
  function submitQuiz() {
    let score = 0;
    const total = 10;
    const form = document.forms["quiz-form"];
  
    for (let i = 1; i <= total; i++) {
      const answer = form[`q${i}`].value;
      score += parseInt(answer || "0");
    }
  
    document.getElementById("quiz-form").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score-text").innerText = `${score} dari ${total}`;
  }
  