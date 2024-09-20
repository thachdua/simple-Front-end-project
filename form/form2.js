const rangeInput = document.getElementById("rangeInput");
const rangeValue = document.getElementById("rangeValue");

rangeValue.textContent = rangeInput.value + '$';

rangeInput.addEventListener('input', function () {
    rangeValue.textContent = rangeInput.value + '$';
});




const datetimeLocal = document.getElementById('datetimeInput');


const currentUtcDateTime = new Date();

const offsetMinutes = currentUtcDateTime.getTimezoneOffset();


currentUtcDateTime.setMinutes(currentUtcDateTime.getMinutes() - offsetMinutes);


const formattedDateTime = currentUtcDateTime.toISOString().slice(0, 16);

datetimeLocal.value = formattedDateTime;


