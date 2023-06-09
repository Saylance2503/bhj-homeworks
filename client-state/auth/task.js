const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

signinForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const login = signinForm.elements.login.value;
  const password = signinForm.elements.password.value;

  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    if (response.ok) {
      const data = await response.json();

      if (data.success) {
        const userId = data.user_id;

        localStorage.setItem('user_id', userId);

        userIdSpan.textContent = userId;
        welcomeBlock.classList.add('welcome_active');
      } else {
        alert('Неверный логин/пароль');
      }
    } else {
      alert('Ошибка сервера');
    }
  } catch (error) {
    alert('Ошибка сети');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const userId = localStorage.getItem('user_id');

  if (userId) {
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add('welcome_active');
  }
});
