для того щоб запустити гороскоп потрібно завантажити бібліотеки за допомогою команд
npm init -y
npm install express
а для того щоб перевірити роботу видання передбачень потрібно в консоль браузера ввести цю команду
fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        sign: "Овен",
        month: "Березень"
    })
})
.then(response => response.json())
.then(data => console.log("Ура! Відповідь сервера:", data));
знак зодіаку і місяць можна змінювати 

In order to run the horoscope, you need to load the libraries using the commands
npm init -y
npm install express
and in order to check the work of publishing predictions, you need to enter this command in the browser console
fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        sign: "Овен",
        month: "Березень"
    })
})
.then(response => response.json())
.then(data => console.log("Ура! Відповідь сервера:", data));
Zodiac sign and month can be changed
