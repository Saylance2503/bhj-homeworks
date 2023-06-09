const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clearBtn');

if (localStorage.getItem('editorContent')) {
  editor.value = localStorage.getItem('editorContent');
}

editor.addEventListener('input', function () {
  localStorage.setItem('editorContent', editor.value);
});

clearBtn.addEventListener('click', function () {
  editor.value = '';
  localStorage.removeItem('editorContent');
});
