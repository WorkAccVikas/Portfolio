async function grabData() {
  const response = await fetch("assets/json/data.json");
  return await response.json();
}

(async () => {
  let data = await grabData();

  let projectData = await data.projects;

  let ihtml = "";
  let container = document.querySelector(".swiper-wrapper");

  projectData.forEach((element, index) => {
    //   ihtml += `<div id=$project${index + 1}>Hello</div>`;
    ihtml += `<!--==================== PROJECTS ${
      index + 1
    } ====================-->
              <div class="project__content swiper-slide">
                <img
                  src="${element.img_path}"
                  alt="projects image"
                  class="projects__img"
                />

                <div>
                  <span class="project__subtitle">${element.subtitle}</span>
                  <h1 class="project__title">${element.title}</h1>

                  <a
                    href="${element.link}"
                    class="projects__button"
                    target="_blank"
                  >
                    View demo <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>`;
  });

  container.innerHTML = ihtml;
})();
