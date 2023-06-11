const fileInput = document.getElementById('fileInput');
const progress = document.getElementById('progress');

const xhr = new XMLHttpRequest();

const formData = new FormData();

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    formData.append('file', file);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progressPercentage = (event.loaded / event.total) * 100;
        progress.value = progressPercentage / 100;
      }
    });

    xhr.onload = function () {
      if (xhr.status != 200) {
        console.error('Ошибка при загрузке файла');
        return;
      } else {
        console.log('Файл успешно загружен');
      }
    };

    xhr.onerror = function () {
      console.error('Ошибка при выполнении запроса');
    };

    xhr.send(formData);
  }
});
