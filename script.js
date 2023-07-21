// Перевірка підтримки Vibration API в браузері
if ("vibrate" in navigator) {
  // Функція, що викликається при натисканні кнопки
  function vibrateOnButtonClick() {
    // Максимальна інтенсивність вібрації
    var maxIntensity = 100;

    // Вібрація на 200 мілісекунд з максимальною інтенсивністю
    navigator.vibrate([maxIntensity]);

    // Почекайте 200 мілісекунд, а потім зупиніть вібрацію
    setTimeout(function () {
      navigator.vibrate(0);
    }, 200);
  }

  // Отримання посилання на кнопку
  var button = document.getElementById("myButton");

  // Додавання обробника події для натискання кнопки
  button.addEventListener("click", vibrateOnButtonClick);
} else {
  console.log("Ваш браузер не підтримує Vibration API.");
}
