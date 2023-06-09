const fileInput = document.getElementById('fileInput');
const progress = document.getElementById('progress');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://students.netoservices.ru/nestjs-backend/upload', {
      method: 'POST',
      body: formData,
      onUploadProgress: (progressEvent) => {
        const progressPercentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        progress.value = progressPercentage / 100;
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Файл успешно загружен');
        } else {
          console.error('Ошибка при загрузке файла');
        }
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса', error);
      });
  }
});
