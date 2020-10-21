import '../style/style.css'

const button = document.querySelector('.button_quote');
const textQuote = document.querySelector('.text_quote');
const authorQuote = document.querySelector('.author_quote');

const formData = new URLSearchParams('method=getQuote&key=457653&format=xml&lang=ru');

button.addEventListener('click', (event) => {
    fetch(`http://api.forismatic.com/api/1.0/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: formData
    })
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
})