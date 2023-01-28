const sendBtn = document.getElementById('send-btn');
const nameEl = document.getElementById('name');
const container = document.querySelector('.container');


sendBtn.addEventListener('click', () => {
    container.innerHTML = `
        <p> Thank you ${nameEl.value} for send me a message, i will respond you as soon as i can</p>
    `
});

