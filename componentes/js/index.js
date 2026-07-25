    const themeBtn = document.getElementById('themeToggle');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeBtn) themeBtn.textContent = 'Alternar Tema';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeBtn) themeBtn.textContent = 'Alternar Tema';
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.add('no-transition');

            const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);

            window.getComputedStyle(document.documentElement).opacity;

            document.documentElement.classList.remove('no-transition');
        });
    }
