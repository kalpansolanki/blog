// ==============================
// 🔥 DISABLE BROWSER SCROLL RESTORATION
// ==============================
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

let filteredBlogData = [];
let isSearching = false;


// ==============================
// BLOG FILES
// ==============================
const blogs = [
  "blogs/myosa-submission-guidelines.md",
  "blogs/myosa-forest-sentinel(1st).md",
  "blogs/ergonomic-biomechanics-and-active-feedback-system(2nd).md",
  "blogs/smart-lumbar-trainer(3rd).md",
  "blogs/myosa-interactive-learning-robot-myopet--(4th).md",
  "blogs/myosa-pothole-detection(5th).md",
  "blogs/myosa-gesture-control-system-main(6th).md",  
  "blogs/myosa-baby-monitor(7th).md",
  "blogs/myosa-drowsiness(8th).md",
  "blogs/smartpass-crowd-safety(9th).md",
  "blogs/myosa-ppt-controller(10th).md",
  "blogs/myosa-smart-helmet(11th).md",
  "blogs/project-drishti(12th).md",
  "blogs/kairos(13th).md",
  "blogs/myotrack(14th).md",
  "blogs/myosa_revive(15th).md",
  "blogs/myosa-warehouse(16th).md",
  "blogs/myosa-smartBioAir(17th).md",
  "blogs/retry-fault-detection(18th).md",
  "blogs/smart-butterfly(19th).md",
  "blogs/TejasARK(20th).md",
  "blogs/myosa-secure-ride-system(21st).md",
  "blogs/sherpa-main(22nd).md",
  "blogs/smart-vest-myosa(23rd).md",
  "blogs/lumina(24th).md",
  "blogs/README(25th).md",
  "blogs/safesite-worker-safety-monitor(26th).md"
];

// ==============================
// PAGINATION CONFIG
// ==============================
const BLOGS_PER_PAGE = 5;
let currentPage = 1;
let allBlogData = [];

// ==============================
// DATE FORMATTER (Dec 12, 2025)
// ==============================
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
}

// ==============================
// BLOG LIST PAGE
// ==============================
const blogList = document.getElementById("blogList");

if (blogList) {
  Promise.all(
    blogs.map(async (path) => {
      try {
        const res = await fetch(encodeURI(path));
        if (!res.ok) throw new Error(`Cannot load ${path}`);
        const text = await res.text();

        const cleanedText = text.replace(/^\uFEFF/, ""); // remove BOM
        const fm = cleanedText.match(/---([\s\S]*?)---/);

        if (!fm) return null;

        const meta = fm[1];
        const title = meta.match(/title:\s*(.+)/)?.[1] ?? "";
        const dateRaw = meta.match(/publishDate:\s*(.+)/)?.[1] ?? "";
        const image = meta.match(/image:\s*(.+)/)?.[1];

        return {
          path,
          title,
          date: new Date(dateRaw),
          dateText: dateRaw,
          image
        };
      } catch (err) {
        console.error(err);
        return null;
      }
    })
  ).then((data) => {
    allBlogData = data
      .filter(Boolean)
      .sort((a, b) => b.date - a.date); // 🔥 SORT BY DATE DESC

    renderPage(1);
  });
}

// ==============================
// RENDER PAGE
// ==============================
function renderPage(page) {
  const totalPages = Math.ceil(allBlogData.length / BLOGS_PER_PAGE);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  blogList.innerHTML = "";

  const start = (page - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;

  allBlogData.slice(start, end).forEach(blog => {
    const card = document.createElement("div");
    card.className = "blog-card";

    card.onclick = () => {
      sessionStorage.setItem("fromBlogList", "true");
      window.location.href = `blog.html?file=${blog.path}`;
    };

    if (blog.image) {
      const img = document.createElement("img");
      img.src = `assets/images/${blog.image.trim()}`;
      img.alt = blog.title;
      card.appendChild(img);
    }

    const info = document.createElement("div");
    info.className = "blog-info";
    info.innerHTML = `
      <small>🕒 ${formatDate(blog.dateText)}</small>
      <h2>${blog.title}</h2>
    `;

    card.appendChild(info);
    blogList.appendChild(card);
  });

  renderPagination();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==============================
// PAGINATION UI
// ==============================
function renderPagination() {
  let pagination = document.getElementById("pagination");

  if (!pagination) {
    pagination = document.createElement("div");
    pagination.id = "pagination";
    pagination.className = "pagination";
    blogList.after(pagination);
  }

  pagination.innerHTML = "";
  const totalPages = Math.ceil(allBlogData.length / BLOGS_PER_PAGE);

  // PREVIOUS
  const prev = document.createElement("button");
  prev.textContent = "‹ Previous";
  prev.disabled = currentPage === 1;
  prev.onclick = () => renderPage(currentPage - 1);
  pagination.appendChild(prev);

  // PAGE NUMBERS
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.onclick = () => renderPage(i);
      pagination.appendChild(btn);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      pagination.appendChild(dots);
    }
  }

  // NEXT
  const next = document.createElement("button");
  next.textContent = "Next ›";
  next.disabled = currentPage === totalPages;
  next.onclick = () => renderPage(currentPage + 1);
  pagination.appendChild(next);
}

// ==============================
// BLOG DETAIL PAGE
// ==============================
const content = document.getElementById("content");

if (content) {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Markdown file not found");
      return res.text();
    })
    .then(md => {
      const fm = md.match(/^---([\s\S]*?)---/);
      const meta = fm ? fm[1] : "";

      const title = meta.match(/title:\s*(.+)/)?.[1] ?? "";
      const dateRaw = meta.match(/publishDate:\s*(.+)/)?.[1] ?? "";
      const image = meta.match(/image:\s*(.+)/)?.[1];

      let cleaned = md.replace(/^---[\s\S]*?---/, "");
      cleaned = cleaned
        .replace(/\[cite_start\]/g, "")
        .replace(/\[cite:\s*\d+(,\s*\d+)*\]/g, "");

      let html = "";
      html += `<h1 class="blog-title">${title}</h1>`;
      html += `<p class="blog-date">🕒 ${formatDate(dateRaw)}</p>`;

      if (image) {
        html += `
          <img
            src="assets/images/${image.trim()}"
            class="blog-hero"
            alt="${title}"
          />
        `;
      }

      html += marked.parse(cleaned);
      content.innerHTML = html;
    })
    .catch(err => {
      content.innerHTML = "<p>Failed to load blog.</p>";
      console.error(err);
    });
}

