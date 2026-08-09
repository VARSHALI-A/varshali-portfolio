
  const pages = Array.from(document.querySelectorAll('.page'));
  const menuButtons = Array.from(document.querySelectorAll('.menu-bar button'));
  const indicator = document.getElementById('pageIndicator');
  let current = 0;
  const total = pages.length;


  /* =========================================================
     CERTIFICATES LIST — add as many as you like (20, 30, etc.)
     img   : path or link to the certificate image
     title : name of the certificate / course
     year  : year you completed it
     Just copy one { ... } block and paste below to add more.
  ========================================================= */
  const CERTIFICATES = [

    { img: "web.jpg",  title: "HTML & CSS ",              year: "2026" },
    { img: "prompt.jpg",  title: "Prompt Engineering",        year: "2026" },
    
      
    { img: "python2.jpg", title: "Python Bootcamp",       year: "2026" },
    { img: "mangodb1.jpg", title: "MongoDB BASICS", year: "2026" },
    { img: "mangodb2.jpg", title: "AI Data Strategy with MongoDB", year: "2026" },
    { img: "mangodb3.jpg", title: "Vector Search Fundamentals", year: "2026" },
    { img: "mangodb4.jpg", title: "RAG with MangoDB", year: "2026" },
    { img: "mangodb5.jpg", title: "AI Agents with MangoDB", year: "2026" },
    { img: "aihp.jpg", title: "AI for Beginners", year: "2025" },
    { img: "quiz1.jpg", title: "National Financial Literacy Quiz", year: "2026" },
    { img: "python.jpg", title: "End to End Python Mini prpject ", year: "2026" },
    { img: "gobi.jpg", title: "Word Hunt-Inter  college Competition", year: "2025" },
    { img: "drug.jpg", title: "Arug Awarness Pledge", year: "2025" }
  ];

  const certGrid = document.getElementById('certGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCap = document.getElementById('lightboxCap');
  const lightboxClose = document.getElementById('lightboxClose');

  function renderCertificates(){
    certGrid.innerHTML = CERTIFICATES.map((c, i) => `
      <div class="cert-thumb" data-i="${i}">
        <img src="${c.img}" alt="${c.title}" loading="lazy"
             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22140%22><rect width=%22200%22 height=%22140%22 fill=%22%23e7dfcd%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2212%22 fill=%22%23a08a5b%22>Add Image</text></svg>'">
        <div class="cap">${c.title}<span class="yr">${c.year}</span></div>
      </div>
    `).join('');

    certGrid.querySelectorAll('.cert-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const c = CERTIFICATES[parseInt(thumb.dataset.i, 10)];
        lightboxImg.src = thumb.querySelector('img').src;
        lightboxCap.textContent = c.title + ' — ' + c.year;
        lightbox.classList.add('open');
      });
    });
  }
  renderCertificates();

  lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  function render(){
    pages.forEach((page, i) => {
    page.classList.toggle("flipped", i < current);
    page.style.zIndex = total - Math.abs(current - i);
});
    menuButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === current);
    });
    indicator.textContent = (current + 1) + ' / ' + total;
  }

  let isTurning = false;

function goTo(index){
    if(isTurning) return;

    isTurning = true;
    current = Math.max(0, Math.min(total - 1, index));
    render();

    setTimeout(() => {
        isTurning = false;
    }, 1000);
}
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => goTo(parseInt(btn.dataset.index, 10)));
  });

  document.querySelectorAll('.nav-arrow.next').forEach(btn => {
    btn.addEventListener('click', () => goTo(current + 1));
  });
  document.querySelectorAll('.nav-arrow.prev').forEach(btn => {
    btn.addEventListener('click', () => goTo(current - 1));
  });

 

  render();
function openProject(src){
    document.getElementById("popupImg").src = src;
    document.getElementById("imgPopup").classList.add("show");
}

function closeProject(){
    document.getElementById("imgPopup").classList.remove("show");
}
function showResume() {
    document.getElementById("resumePreview").classList.add("show");
}

function closeResume(event) {
    document.getElementById("resumePreview").classList.remove("show");
}
document.getElementById("resumePreview").addEventListener("click", function(e) {
    if (e.target === this) {
        closeResume(e);
    }
});
  // theme toggle: default is dark, click switches to light and back
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = '☀️';
    }
  });
