/* ==========================================================================
   Pedro Teixeira Bisognin — Portfolio Interactivity
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const toastEl = document.getElementById("toast");

  let currentTheme = localStorage.getItem("pb_theme") || "dark";

  // Apply initial theme
  htmlEl.setAttribute("data-theme", currentTheme);

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", currentTheme);
      localStorage.setItem("pb_theme", currentTheme);
    });
  }

  // Skills Category Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-domain-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      skillCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Copy to Clipboard
  let toastTimeout;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2600);
  }

  document.querySelectorAll(".copy-email-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const valueToCopy = btn.getAttribute("data-copy");
      if (!valueToCopy) return;
      try {
        await navigator.clipboard.writeText(valueToCopy);
        const prefix = "Copiado para a área de transferência:";
        showToast(`${prefix} ${valueToCopy}`);
      } catch {
        // Fallback copy
        const tempInput = document.createElement("textarea");
        tempInput.value = valueToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        const prefix = "Copiado para a área de transferência:";
        showToast(`${prefix} ${valueToCopy}`);
      }
    });
  });

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
});
