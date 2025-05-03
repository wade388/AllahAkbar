// Helper function to extract YouTube ID
function extractYouTubeID(url) {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }
  
  // Softwaresا
  fetch('Softwares.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('#programsContainer'); 
      data.forEach(software => {
        const softwareDiv = document.createElement('div');
        softwareDiv.className = 'program-card';
        softwareDiv.innerHTML = `
          <img src="${software.AppIconLink}" alt="${software.AppName}" class="program-image">
          <div class="program-details">
            <h3>${software.AppName}</h3>
            <p class="program-description">${software.AppDescription}</p>
            <p class="program-level"><strong>المستوى:</strong> ${software.BtecLevel}</p>
            <a href="${software.AppDownloadLinke}" class="btn"><i class="fas fa-download"></i> تحميل</a>
          </div>
        `;
        container.appendChild(softwareDiv);
      });
    })
    .catch(error => {
      console.error('خطأ في تحميل بيانات البرامج:', error);
    });
  
  
  fetch('Tutorials.json')
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.projects-list'); 
      data.forEach(tutorial => {
        const tutorialsDiv = document.createElement('div');
        tutorialsDiv.className = 'project-card';
        const YoutubeEmbed = extractYouTubeID(tutorial.TutorialYoutubeLink);
  
        tutorialsDiv.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${YoutubeEmbed}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h1>${tutorial.TutorialTitle}</h1>
          <h2>المقدم: ${tutorial.InstructorName}</h2>
          <h2>المستوى: ${tutorial.BtecLevel}</h2>
        `;
  
        container.appendChild(tutorialsDiv);
      });
    })
    .catch(error => {
      console.error('خطأ في تحميل بيانات الشروحات:', error);
    });
  