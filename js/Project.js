document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");
  
    const projects = [
      {
        studentName: "علي محمد",
        projectName: "مشروع تصميم موقع تعليمي",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        studentName: "فاطمة أحمد",
        projectName: "مشروع تطبيق إدارة المهام",
        videoLink: "https://www.youtube.com/watch?v=abcdefg12345"
      }
    ];
  
    // عرض المشاريع
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
  
      // التحقق من صحة رابط الفيديو
      const videoId = extractYouTubeVideoId(project.videoLink);
      if (!videoId) {
        console.error(`رابط الفيديو غير صالح للمشروع: ${project.projectName}`);
        return;
      }
  
      card.innerHTML = `
        <p class="student-name">اسم الطالب: ${project.studentName}</p>
        <h4 class="project-name">${project.projectName}</h4>
        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
      `;
  
      projectsList.appendChild(card);
    });
  
    // استخراج معرف الفيديو من رابط يوتيوب
    function extractYouTubeVideoId(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    }
  });