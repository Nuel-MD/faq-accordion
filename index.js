document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.centered-div h2');
    const answers = document.querySelectorAll('.centered-div p');
    const plusIcons = document.querySelectorAll('.inshow');
    const minusIcons = document.querySelectorAll('.show');

    // Add 'hidden' class to all answers and minus icons initially
    answers.forEach(answer => {
        answer.classList.add('hidden');
    });
    minusIcons.forEach(minus => {
        minus.classList.add('hidden');
    });

    // Function to toggle answer visibility and icons
    function toggleAnswer(index) {
        const answer = answers[index];
        const plusIcon = plusIcons[index];
        const minusIcon = minusIcons[index];

        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            answer.classList.add('visible');
            plusIcon.classList.add('hidden');
            minusIcon.classList.remove('hidden');
        } else {
            answer.classList.remove('visible');
            answer.classList.add('hidden');
            plusIcon.classList.remove('hidden');
            minusIcon.classList.add('hidden');
        }
    }

    // Add click event listeners to questions
    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            toggleAnswer(index);
        });

        // Add keyboard navigation
        question.setAttribute('tabindex', 0); // Make the element focusable
        question.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleAnswer(index);
            }
        });
    });

    // Keyboard navigation for moving between questions
    let currentQuestionIndex = 0;

    function focusQuestion(index) {
        questions[index].focus();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            focusQuestion(currentQuestionIndex);
        } else if (event.key === 'ArrowUp') {
            currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
            focusQuestion(currentQuestionIndex);
        }
    });
});
