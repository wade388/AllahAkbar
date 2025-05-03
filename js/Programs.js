document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const programsContainer = document.getElementById("programsContainer");
  let programsData = [];

  // جلب البيانات من JSON
  fetch("programs.json")
    .then(res => res.json())
    .then(data => {
      programsData = data;
      displayPrograms("all");
    });

  function displayPrograms(filterCategory) {
    programsContainer.innerHTML = "";
    programsData.forEach((app, index) => {
      if (filterCategory === "all") {
        const card = document.createElement("div");
        card.className = "program-card";
        card.style.animation = `slideUpCard 0.5s ${0.3 + index * 0.1}s forwards`;

        card.innerHTML = `
          <img src="${app.AppIconLink}" alt="${app.AppName}" class="program-image">
          <div class="program-details">
            <h3>${app.AppName}</h3>
            <div class="program-meta">
              <p><i class="fas fa-download"></i> تحميل</p>
              <a class="btn" href="${app.AppDownloadLinke}" target="_blank">
                <i class="fas fa-cloud-download-alt"></i> تحميل
              </a>
            </div>
            <p class="program-description">${app.AppDescription}</p>
            <div class="program-level">
              <p>المستوى: <strong>${app.BtecLevel}</strong></p>
            </div>
          </div>
        `;
        programsContainer.appendChild(card);
      }
    });
  }

  // تفعيل الفلتر
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      const filterCategory = this.getAttribute("data-filter");
      displayPrograms(filterCategory);
    });
  });
});
