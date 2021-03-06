import { showAlertGetDataError } from './alerts.js';
import { enableForm } from './form-status.js';

const filterForm = document.querySelector('.map__filters');

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(` ${ response.status } ${ response.statusText }`);
    })
    .then((json) => {
      enableForm(filterForm);
      onSuccess(json);
    })
    .catch((err) => {
      showAlertGetDataError(`Не удалось загрузить данные. ${ err }`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
