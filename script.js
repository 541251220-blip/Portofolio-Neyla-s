/* =========================================
   PORTOFOLIO - JAVASCRIPT
   ========================================= */

// 1. MODE TERANG DAN GELAP

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀" : "☾";

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Aktifkan mode terang"
        : "Aktifkan mode gelap"
    );
  }

  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch (error) {
    console.log("Tema tidak dapat disimpan di browser.");
  }
}

setTheme(root.dataset.theme || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  });
}


// 2. MENU NAVIGASI HP

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// 3. ANIMASI SCROLL

const revealItems = document.querySelectorAll(
  ".reveal, .skill-panel"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealItems.forEach(item => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(item => {
    item.classList.add("is-visible");
  });
}


// 4. NAVIGASI AKTIF SESUAI BAGIAN HALAMAN

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(link => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isActive);
        });
      }
    });
  }, {
    rootMargin: "-35% 0px -55% 0px"
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}


// 5. DATA SEMBILAN PROJECT

const projects = [
  {
    title: "Matcha Wave — UI/UX Design",
    type: "UI/UX Design · Kelas 10",
    description:
      "Desain antarmuka website bertema matcha dengan nuansa hijau yang segar. Rancangan ini menampilkan halaman utama, pilihan menu, kategori produk, dan halaman login.",
    learning:
      "Rancangan dibuat untuk menyusun pengalaman pengguna saat mengenal produk dan menjelajahi menu Matcha Wave. Fokus pengerjaan ada pada konsistensi warna, hierarki informasi, dan tata letak halaman.",
    features:
      "Halaman Home, menu dan kategori produk, serta tampilan login.",
    image: "assets/project-matcha-ui.png",
    tags: ["Figma", "UI/UX Design", "Web Design"],
    demo: "https://www.figma.com/design/4oAjJkVN1vzrbyKJWcrizS/Matcha-Wave?node-id=0-1&t=q06Ncybnv5lv6Kub-1",
    source: ""
  },

  {
    title: "Catalya Cake — UI/UX Design",
    type: "UI/UX Design · Kelas 10",
    description:
      "Rancangan website toko kue dengan tampilan bernuansa pink. Berisi halaman Home, Our Menu, About Us, Contact, Login, dan form pemesanan.",
    learning:
      "Project ini berfokus pada penyajian katalog kue dan alur pemesanan agar informasi produk mudah ditemukan oleh pengguna.",
    features:
      "Home, Our Menu, About Us, Contact, Login, halaman pesanan, dan kartu produk.",
    image: "assets/project-catalya.png",
    tags: ["Figma", "UI/UX Design", "E-Commerce"],
    demo: "https://www.figma.com/design/X3YLBke9iqqwrrkcLA5qB4/Catalya-Cake?node-id=0-1&t=rSEqOboey5vsoTfL-1",
    source: ""
  },

  {
    title: "Magic Forest — Game",
    type: "Game Development · Kelas 10",
    description:
      "Game bertema petualangan dengan suasana hutan fantasi. Project ini dibuat sebagai eksplorasi pembuatan game dan interaksi pemain.",
    learning:
      "Melalui project ini, saya mengeksplorasi penyusunan scene, elemen permainan, dan interaksi dasar menggunakan GDevelop.",
    features:
      "Game bertema hutan fantasi yang dapat dimainkan melalui halaman game.",
    image: "assets/project-magic-forest.png",
    tags: ["GDevelop", "Game Design", "Game Development"],
    demo: "https://gd.games/sheyl4u/magic-forest",
    source: ""
  },

  {
    title: "Matcha Wave — Website",
    type: "Web Development · Kelas 10",
    description:
      "Implementasi website bertema matcha yang dikembangkan dari konsep desain Matcha Wave. Website menampilkan informasi produk dan pilihan menu.",
    learning:
      "Project ini menjadi latihan menerapkan struktur halaman, styling, dan pengembangan tampilan website dari rancangan desain.",
    features:
      "Website informasi Matcha Wave dengan tampilan menu dan produk. Demo masih berjalan secara lokal di komputer.",
    image: "assets/project-matcha-web.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "",
    source: ""
  },

  {
    title: "Grab — Mobile App Redesign",
    type: "UI/UX Design · Kelas 11",
    description:
      "Eksplorasi desain antarmuka aplikasi mobile dengan referensi tampilan layanan Grab, meliputi Beranda, Pembayaran, Aktivitas, dan Kontak Masuk.",
    learning:
      "Pengerjaan berfokus pada penyusunan tampilan mobile, navigasi bawah, kartu layanan, dan konsistensi komponen antarlayar.",
    features:
      "Layar Beranda, Pembayaran, Aktivitas, dan Kontak Masuk.",
    image: "assets/project-grab.png",
    tags: ["Figma", "Mobile UI", "UI/UX Design"],
    demo: "https://www.figma.com/design/wr2MdqE7ezoo6oNvt5vAAy/MP-3-Design?node-id=0-1&t=gbx9ToFLR6GeGYmm-1",
    source: ""
  },

  {
    title: "PayPocket — Dashboard",
    type: "Dashboard UI · Kelas 11",
    description:
      "Desain dashboard bertema ungu yang menampilkan ringkasan keuangan, saldo, pendapatan, grafik, dan navigasi menu.",
    learning:
      "Project ini melatih penyajian informasi dalam bentuk kartu statistik dan grafik agar data lebih mudah dipahami.",
    features:
      "Ringkasan pendapatan, saldo, jumlah project, grafik analitik, dan navigasi dashboard.",
    image: "assets/project-paypocket.png",
    tags: ["Figma", "Dashboard", "Data Visualization"],
    demo: "https://www.figma.com/design/wr2MdqE7ezoo6oNvt5vAAy/MP-3-Design?node-id=42-2&t=gbx9ToFLR6GeGYmm-1",
    source: ""
  },

  {
    title: "Artora — E-Commerce Website",
    type: "UI/UX E-Commerce · Kelas 11",
    description:
      "Rancangan website e-commerce produk digital dengan warna hangat. Memuat Home, Shop, Categories, Custom Design, About Us, dan Keranjang.",
    learning:
      "Artora dirancang sebagai tempat menjelajahi produk digital seperti template presentasi, poster, dan materi pembelajaran, termasuk layanan desain custom.",
    features:
      "Home, Shop, Categories, Custom Design, About Us, dan Keranjang.",
    image: "assets/project-artora.png",
    tags: ["Figma", "UI/UX Design", "E-Commerce"],
    demo: "https://www.figma.com/design/wr2MdqE7ezoo6oNvt5vAAy/MP-3-Design?node-id=87-2&t=gbx9ToFLR6GeGYmm-1",
    source: ""
  },

  {
    title: "E-Commerce — Mobile Mockup",
    type: "Mobile UI Mockup · Kelas 11",
    description:
      "Eksplorasi wireframe dan mockup tampilan e-commerce pada perangkat mobile, mulai dari halaman utama hingga susunan katalog.",
    learning:
      "Mockup ini digunakan untuk merancang struktur antarmuka versi ponsel sebelum masuk ke tahap visual yang lebih detail.",
    features:
      "Rangkaian wireframe mobile untuk halaman utama, katalog, dan elemen antarmuka e-commerce.",
    image: "assets/project-artora-mobile.png",
    tags: ["Figma", "Wireframe", "Mobile UI"],
    demo: "https://www.figma.com/design/wr2MdqE7ezoo6oNvt5vAAy/MP-3-Design?node-id=122-31&t=gbx9ToFLR6GeGYmm-1",
    source: ""
  },

  {
    title: "Agent Protocol — Game Edukasi",
    type: "Educational Game · Kelas 11",
    description:
      "Game edukasi matematika bertema agen rahasia. Pemain menyelesaikan misi melalui materi nilai fungsi, komposisi fungsi, dan invers.",
    learning:
      "Project ini menggabungkan materi matematika dengan konsep permainan, level misi, batas waktu, skor, dan tantangan interaktif.",
    features:
      "Training Room, Encrypted Files, Final Operation, sistem skor, nyawa, dan timer.",
    image: "assets/project-agent.png",
    tags: ["HTML", "CSS", "JavaScript", "Educational Game"],
    demo: "https://6ae9b47af720bc51fcf7940f--agentprotocol.netlify.app/",
    source: ""
  }
];


// 6. FILTER PROJECT

const projectCards = [
  ...document.querySelectorAll(".project-card")
];

const filterButtons = [
  ...document.querySelectorAll(".filter-button")
];

const projectCount = document.getElementById("projectCount");

function applyFilter(filter) {
  let visibleCount = 0;

  projectCards.forEach(card => {
    const matches =
      filter === "all" || card.dataset.category === filter;

    card.classList.toggle("is-hidden", !matches);

    if (matches) {
      visibleCount++;
    }
  });

  if (projectCount) {
    projectCount.textContent =
      `${String(visibleCount).padStart(2, "0")} PROJECT` +
      (visibleCount === 1 ? "" : "S");
  }
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    applyFilter(button.dataset.filter);
  });
});

applyFilter("all");


// 7. MODAL DETAIL PROJECT

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalLearning = document.getElementById("modalLearning");
const modalFeatures = document.getElementById("modalFeatures");
const modalTags = document.getElementById("modalTags");
const modalImage = document.getElementById("modalImage");

const modalDemo = document.getElementById("modalDemo");
const modalSource = document.getElementById("modalSource");

let previousFocus = null;


// Mengatur tombol link project.
function setProjectLink(element, url) {
  if (!element) return;

  if (url && url.trim() !== "") {
    element.href = url;
    element.hidden = false;
  } else {
    element.removeAttribute("href");
    element.hidden = true;
  }
}


// Membuka detail project.
function openProject(index) {
  const project = projects[index];

  if (!project || !modal) return;

  previousFocus = document.activeElement;

  modalTitle.textContent = project.title;
  modalType.textContent = project.type;
  modalDescription.textContent = project.description;
  modalLearning.textContent = project.learning;
  modalFeatures.textContent = project.features;

  modalImage.src = project.image;
  modalImage.alt = `Preview ${project.title}`;

  modalTags.replaceChildren();

  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  setProjectLink(modalDemo, project.demo);
  setProjectLink(modalSource, project.source);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalClose.focus();
}


// Menutup modal.
function closeProject() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (previousFocus) {
    previousFocus.focus();
  }
}


// Menghubungkan kartu dengan modal.
projectCards.forEach(card => {
  const button = card.querySelector(".project-open");

  if (button) {
    button.addEventListener("click", () => {
      const index = Number(card.dataset.project);
      openProject(index);
    });
  }
});

if (modalClose) {
  modalClose.addEventListener("click", closeProject);
}

if (modal) {
  modal.querySelectorAll("[data-close-modal]").forEach(element => {
    element.addEventListener("click", closeProject);
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {
      closeProject();
    }
  });
}


// 8. TAHUN FOOTER OTOMATIS

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
// FORM KIRIM EMAIL
const emailForm = document.getElementById("emailForm");

if (emailForm) {
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const senderEmail = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("emailSubject").value.trim();
    const message = document.getElementById("emailMessage").value.trim();

    const recipient = "emailkamu@example.com";

    const emailBody = `
Nama: ${name}
Email pengirim: ${senderEmail}

Pesan:
${message}
    `;

    const mailtoLink =
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  });
}