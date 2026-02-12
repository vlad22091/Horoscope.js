const express = require('express');

// Створюємо сервер
const app = express();
const PORT = 3000;

// Дозволяємо серверу розуміти JSON (дані, які ми будемо надсилати)
app.use(express.json());

// Поки ми не підключили справжню базу, будемо зберігати все в цій змінній.
let horoscopesDb = []; 

// Генератор випадкових фраз
function generateFakeHoroscope(sign, month) {
    const predictions = [
        "Цього місяця на вас чекає успіх у навчанні.",
        "Будьте обережні з дедлайнами.",
        "Зірки кажуть, що час вивчити JavaScript.",
        "Удача посміхнеться вам у п'ятницю."
    ];
    // Вибираємо випадкову фразу
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    return `Гороскоп для ${sign} на ${month}: ${randomPrediction}`;
}

// Головна сторінка
app.get('/', (req, res) => {
    res.send('Привіт! Я сервер гороскопів.');
});

// Ми надсилаємо серверу знак і місяць, а він повертає передбачення.
app.post('/generate', (req, res) => {
    const { sign, month } = req.body; // Отримуємо дані від користувача

    // Перевірка: чи надіслав користувач дані?
    if (!sign || !month) {
        return res.status(400).json({ error: "Будь ласка, вкажіть знак (sign) та місяць (month)" });
    }

    const predictionText = generateFakeHoroscope(sign, month);

    // Створюємо об'єкт запису
    const newRecord = {
        id: horoscopesDb.length + 1, // Простий ID
        sign: sign,
        month: month,
        text: predictionText,
        createdAt: new Date(),
        reactions: [] // Тут потім будуть смайлики
    };

    // ЗБЕРІГАННЯ
    horoscopesDb.push(newRecord);

    console.log("Згенеровано новий гороскоп:", newRecord);
    
    // Відповідаємо користувачу
    res.json(newRecord);
});

// перглад історії
app.get('/history', (req, res) => {
    res.json(horoscopesDb);
});

//ЗАПУСК СЕРВЕРА
app.listen(PORT, () => {
    console.log(`Сервер запущено! Відкрий http://localhost:${PORT} у браузері`);
}); 
