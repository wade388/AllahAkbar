//Softwares
fetch('Softwares.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('.programs-list');
        data.forEach(software => {
            console.log(software);
            const softwareDiv = document.createElement('div');
            softwareDiv.className = 'program-card';
            softwareDiv.innerHTML += `
        <img src="${software.AppIconLink}" alt="">
            <h3>${software.AppName}</h3>
            <h2>Level  : ${software.BtecLevel} </h2>
            <a href="${software.AppDownloadLinke}">Download</a>
        <p>${software.AppDescription}</p>

        `;
            container.appendChild(softwareDiv);
        });
    });

// Tutorials
fetch('Tutorials.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('.projects-list');
        data.forEach(tutorial => {
            console.log(tutorial);
            const tutorialsDiv = document.createElement('div');
            tutorialsDiv.className = 'project-card';
            const YoutubeEmbed = extractYouTubeID(tutorial.TutorialYoutubeLink);
            tutorialsDiv.innerHTML += `
            <iframe
          src="https://www.youtube.com/embed/${YoutubeEmbed}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h1>${tutorial.TutorialTitle}</h1>
        <h2>المقدم : ${tutorial.InstructorName}</h2>
        <h2>المستوى : ${tutorial.BtecLevel}</h2>
            `;

            container.appendChild(tutorialsDiv);[]

        });
    });

