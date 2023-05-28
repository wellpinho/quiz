const form = document.querySelector('.quiz-form');
const showResultInModal = document.querySelector('.modal-body');
const corretAnswers = ['B', 'B', 'B', 'B'];
const finalResult = document.querySelector('.result');

const response = {
    25: 'Que pena, sua nota esta abaixo da média.',
    50: 'Sua nota esta na média precisa melhorar.',
    75: 'Muito bom sua nota esta entre os 75% que acertaram acima de 75',
    100: 'Wow, sua not aficou nos top 100. Parabéns!'
}

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === corretAnswers[index]) {
            score += 25;
        }
    })
    

    // showResultInModal.textContent = response[score];
    finalResult.querySelector('span').textContent = `${score}%`;
    finalResult.classList.remove('d-none');
})

