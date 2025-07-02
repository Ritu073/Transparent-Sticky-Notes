window.addEventListener('DOMContentLoaded', () => {
    const note = document.getElementById('note');
  
    // Load saved note
    note.value = localStorage.getItem('noteContent') || '';
  
    // Save note on input
    note.addEventListener('input', () => {
      localStorage.setItem('noteContent', note.value);
    });
  });
  
  const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
  window.electronAPI.closeWindow();
});
