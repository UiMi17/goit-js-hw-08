const lodash = require('lodash')

const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_DATA_KEY = localStorage.getItem('feedback-form-state');

if (FEEDBACK_DATA_KEY) {
  const receivedFeedback = JSON.parse(FEEDBACK_DATA_KEY);

  feedbackForm.email.value = receivedFeedback.email;
  feedbackForm.message.value = receivedFeedback.message;
}


feedbackForm.addEventListener('input', lodash.throttle(() => {
  const feedbackData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}, 500));


feedbackForm.addEventListener('submit', ev => {
  ev.preventDefault();

  const feedbackFormValues = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  localStorage.clear();
  feedbackForm.reset();

  console.log(feedbackFormValues);
});
