const cards = document.querySelectorAll('ul li');
const search = document.querySelector('header input');
const message = document.querySelector('div.error');

search.addEventListener('keyup', event => {
    const word = event.target.value.toLowerCase();
    cards.forEach(item => {
        item.className = !item.querySelector('h2').textContent.toLowerCase().includes(word) ? 'excluded' : '';
    })
    message.style.display = document.querySelectorAll('li.excluded').length == cards.length ? 'block' : 'none';
})