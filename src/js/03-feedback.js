import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormData);
refs.input.addEventListener('input', throttle(onTextarea, 500));
refs.textarea.addEventListener('input', throttle(onTextarea, 500));

fillGaps();
function onFormData(e) {
  e.preventDefault();

  e.currentTarget.reset();

  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarea() {
  const email = refs.input.value;
  const textarea = refs.textarea.value;
  const formData = {
    email,
    textarea,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillGaps() {
  const savedForm = localStorage.getItem(STORAGE_KEY);
  const parsedForm = JSON.parse(savedForm);
  if (savedForm) {
    refs.input.value = parsedForm.email;
    refs.textarea.value = parsedForm.textarea;
  }
}
