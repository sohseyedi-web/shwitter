const sidebar = document.querySelectorAll('.sidebar div');

sidebar.forEach((side) => {
    side.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.forEach((s) => s.classList.remove('active-page'))
        side.classList.add('active-page');
        // sidebar[index].forEach((s) => s.classList.add('active'))
    })
})