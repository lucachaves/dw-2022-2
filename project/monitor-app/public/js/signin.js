import Auth from './auth.js';

const form = document.querySelector('form');

form.onsubmit = async (event) => {
  event.preventDefault();

  const user = Object.fromEntries(new FormData(form));

  const url = '/signin';

  const configRequest = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  const { auth, token } = await (await fetch(url, configRequest)).json();

  if (auth) {
    Auth.signin(token);
  } else {
    showToast('Error no login');
  }
};

function showToast(message) {
  document.querySelector('.toast-header strong').innerText = message;
  const toast = new bootstrap.Toast(document.querySelector('#liveToast'));
  toast.show();
}
