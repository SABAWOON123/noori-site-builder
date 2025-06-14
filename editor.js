function addEditListeners() {
  document.querySelectorAll('.editable-text').forEach(el => {
    el.addEventListener('click', function () {
      showEditModal('متن جدید را وارد کنید:', el.textContent, val => { el.textContent = val; });
    });
  });
  document.querySelectorAll('.editable-link').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showEditModal('آدرس لینک جدید را وارد کنید:', el.getAttribute('href'), val => { el.setAttribute('href', val); });
    });
  });
  document.querySelectorAll('.editable-img').forEach(el => {
    el.addEventListener('click', function () {
      showImageModal(el.getAttribute('src'), val => { el.setAttribute('src', val); });
    });
  });
}

function showEditModal(label, value, onSave) {
  const modal = document.getElementById('editorModal');
  const input = document.getElementById('editInput');
  const form = document.getElementById('editForm');
  const editLabel = document.getElementById('editLabel');
  editLabel.textContent = label;
  input.value = value;
  modal.style.display = 'block';

  function handleSubmit(e) {
    e.preventDefault();
    onSave(input.value);
    modal.style.display = 'none';
    form.removeEventListener('submit', handleSubmit);
  }
  form.addEventListener('submit', handleSubmit);

  document.getElementById('cancelEdit').onclick = () => {
    modal.style.display = 'none';
    form.removeEventListener('submit', handleSubmit);
  };
}

function showImageModal(value, onSave) {
  const modal = document.getElementById('editorModal');
  const input = document.getElementById('editInput');
  const form = document.getElementById('editForm');
  const editLabel = document.getElementById('editLabel');
  editLabel.textContent = 'آدرس جدید تصویر را وارد کنید:';
  input.value = value;
  modal.style.display = 'block';

  function handleSubmit(e) {
    e.preventDefault();
    onSave(input.value);
    modal.style.display = 'none';
    form.removeEventListener('submit', handleSubmit);
  }
  form.addEventListener('submit', handleSubmit);

  document.getElementById('cancelEdit').onclick = () => {
    modal.style.display = 'none';
    form.removeEventListener('submit', handleSubmit);
  };
}

// بعد از اینکه قالب را لود کردی این را اجرا کن:
addEditListeners();