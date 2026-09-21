function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

document.addEventListener('click', (event) => {
  const lightBtn = event.target.closest('#light');
  const darkBtn = event.target.closest('#dark');

  if (lightBtn) {
    setTheme('light');
  }

  if (darkBtn) {
    setTheme('dark');
  }
});

