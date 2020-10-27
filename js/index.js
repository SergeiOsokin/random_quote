import '../style/style.css'

const button = document.querySelector('.button_quote');
const textQuote = document.querySelector('.text_quote');
const authorQuote = document.querySelector('.author_quote');
const mainSection = document.querySelector('.main');

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

let arrQuote = '';

button.addEventListener('click', () => {
   textQuote.innerHTML = '<i class="fa fa-quote-left"></i> ' + arrQuote[Math.floor(Math.random() * (102 - 0) + 0)].quote;
   authorQuote.innerHTML = '- ' + arrQuote[Math.floor(Math.random() * (102 - 0) + 0)].author;
   mainSection.style.backgroundColor = colors[Math.floor(Math.random() * (12 - 0) + 0)];
})

const getQuote = () => {
    return (
        fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(res);
                }
                return res.json();
            })
    )
}

getQuote()
.then((res) => {
    arrQuote = res.quotes;
    textQuote.innerHTML = '<i class="fa fa-quote-left"></i> ' + arrQuote[Math.floor(Math.random() * (102 - 0) + 0)].quote;
    authorQuote.innerHTML = '- ' + arrQuote[Math.floor(Math.random() * (102 - 0) + 0)].author;
    mainSection.style.backgroundColor = colors[Math.floor(Math.random() * (12 - 0) + 0)];
})