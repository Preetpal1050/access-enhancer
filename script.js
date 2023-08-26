fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(Data => {
        const ID = Data.attachments[0].text;
        const PASS = document.getElementById('DATA');

        ID.innerHTML = PASS;
    })