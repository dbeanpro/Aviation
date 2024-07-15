document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.classList.toggle('hide');
            }
        });
    });
});