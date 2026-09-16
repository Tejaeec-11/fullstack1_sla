/* ============================================
   SPACE THEME - JavaScript
   Starfield, counters, accordion, chain reaction,
   scroll reveal, active nav link
   ============================================ */

/* ---------- 1. Animated starfield on canvas ---------- */
const canvas = document.getElementById("starfield");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    makeStars();
  }

  function makeStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        speed: Math.random() * 0.14 + 0.02,
        alpha: Math.random() * 0.6 + 0.3
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(232, 236, 248, " + s.alpha + ")";
      ctx.fill();

      // slowly drift downward, wrap around
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(drawStars);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawStars();
}

/* ---------- 2. Highlight the current page in the navbar ---------- */
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ---------- 3. Scroll reveal using Intersection Observer ---------- */
const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length > 0) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

/* ---------- 4. Counting number animation ---------- */
const counters = document.querySelectorAll("[data-count]");

if (counters.length > 0) {
  const countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) {
    countObserver.observe(c);
  });
}

function runCounter(el) {
  const target = parseFloat(el.getAttribute("data-count"));
  const suffix = el.getAttribute("data-suffix") || "";
  const duration = 1400;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = target * progress;
    // show one decimal only if the target has a decimal
    el.textContent = (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

/* ---------- 5. Accordion ---------- */
const accButtons = document.querySelectorAll(".acc-btn");

accButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";

    // close all panels first
    document.querySelectorAll(".acc-panel").forEach(function (p) {
      p.style.maxHeight = "0px";
    });
    document.querySelectorAll(".acc-btn .sign").forEach(function (s) {
      s.textContent = "+";
    });

    // open the clicked one if it was closed
    if (!isOpen) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      btn.querySelector(".sign").textContent = "−";
    }
  });
});

/* ---------- 6. Chain reaction demo (Page 2) ---------- */
const chainBtn = document.getElementById("chainBtn");
const chainSteps = document.querySelectorAll(".chain-step");

if (chainBtn) {
  chainBtn.addEventListener("click", function () {
    // reset everything
    chainSteps.forEach(function (s) {
      s.classList.remove("lit");
    });

    chainBtn.disabled = true;
    chainBtn.textContent = "Running...";

    // light up each step one by one
    chainSteps.forEach(function (step, index) {
      setTimeout(function () {
        step.classList.add("lit");
        if (index === chainSteps.length - 1) {
          chainBtn.disabled = false;
          chainBtn.textContent = "Run the chain again";
        }
      }, index * 700);
    });
  });
}

/* ---------- 7. Simple year slider (Page 1) ---------- */
const yearSlider = document.getElementById("yearSlider");
const yearOutput = document.getElementById("yearOutput");
const yearText = document.getElementById("yearText");

const yearNotes = {
  2026: "Developers still write most of the code by hand. AI tools help, but a human decides the logic.",
  2027: "AI writes the boring parts. A developer's job moves towards checking, fixing and connecting systems.",
  2028: "Companies expect one developer to handle what a small team used to do. Cloud and automation skills matter more than raw typing speed.",
  2029: "Most simple websites and apps are generated. The valuable work is in security, data, hardware and systems that AI cannot verify alone.",
  2030: "IT becomes a support layer for other fields — space, energy, health, robotics. Pure coding alone is not enough; domain knowledge decides your value."
};

if (yearSlider) {
  yearSlider.addEventListener("input", function () {
    const y = yearSlider.value;
    yearOutput.textContent = y;
    yearText.textContent = yearNotes[y];
  });
}
