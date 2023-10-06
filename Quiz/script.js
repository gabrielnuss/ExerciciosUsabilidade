const correctAnswer = "brasilia";
const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            
   if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswer) {
        resultDiv.textContent = "Resposta Correta!";
       } else {
        resultDiv.textContent = "Resposta Incorreta. Tente novamente.";
       }
    } else {
        resultDiv.textContent = "Por favor, selecione uma resposta.";
      }
});