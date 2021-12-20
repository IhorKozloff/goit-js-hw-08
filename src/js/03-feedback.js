const throttle = require('lodash.throttle');

const refs = {
    feedbackFormEl: document.querySelector('.feedback-form'),
    feedbackEmail: document.querySelector(`[name="email"]`),
    feedbackComent: document.querySelector(`[name="message"]`)
}

returnFromLocalStorage ()


function getFeedback () {
    const dataInform = {
        email: refs.feedbackEmail.value,
        message: refs.feedbackComent.value
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(dataInform));
};

function onFormSubmit (event) {
    event.preventDefault();
    event.currentTarget.reset();
    const dataOfLocalStorage = localStorage.getItem("feedback-form-state");

if (dataOfLocalStorage) {
    const parsedData = JSON.parse(dataOfLocalStorage);
    console.log(parsedData);
};
    localStorage.removeItem('feedback-form-state');
};


function returnFromLocalStorage () {
const dataOfLocalStorage = localStorage.getItem("feedback-form-state");

if (dataOfLocalStorage) {
    const parsedData = JSON.parse(dataOfLocalStorage);
    refs.feedbackEmail.value = parsedData.email;
    refs.feedbackComent.value = parsedData.message;
}
};

refs.feedbackFormEl.addEventListener('input', throttle(getFeedback, 500));
refs.feedbackFormEl.addEventListener('submit', onFormSubmit)