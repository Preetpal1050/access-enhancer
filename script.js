fetch('AKfycbwpokVi6ROxcrFBX79Vr1Ps4DYb9i1jh96liBe4PQD4LHThAL35wpuxoWx8ImyL3Skh')
    .then(data => data.json())
    .then(Data => {
        const ID = Data.attachments[0].text;
        const PASS = document.getElementById('DATA');

        ID.innerHTML = PASS;
    })