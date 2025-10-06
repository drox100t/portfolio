// Compte à rebours + orbits d'étoiles + curseur site (N&B)
(function(){
  const root = document.getElementById("countdown");
  if(!root) return;

  // --- Compte à rebours ---
  const daysEl    = document.getElementById("cd-days");
  const hoursEl   = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");
  const percentEl = document.getElementById("cd-percent");
  const deadlineLabel = document.getElementById("cd-deadline-label");

  const attr = root.getAttribute("data-deadline") || "2026-04-06T23:59:59";
  const deadline = new Date(attr);
  const fmt = new Intl.DateTimeFormat(undefined, { dateStyle: "full", timeStyle: "short" });
  deadlineLabel.textContent = fmt.format(deadline);

  const startedAt = new Date();

  function tick(){
    const now = new Date();
    const totalMs = Math.max(1, deadline - startedAt);
    const remain  = Math.max(0, deadline - now);

    const sec   = Math.floor(remain/1000) % 60;
    const min   = Math.floor(remain/60000) % 60;
    const hour  = Math.floor(remain/3600000) % 24;
    const days  = Math.floor(remain/86400000);

    daysEl.textContent    = String(days);
    hoursEl.textContent   = String(hour).padStart(2,"0");
    minutesEl.textContent = String(min).padStart(2,"0");
    secondsEl.textContent = String(sec).padStart(2,"0");

    const progress = Math.min(1, 1 - (remain / totalMs));
    const pct = Math.round(progress * 100);
    percentEl.textContent = String(pct);
    root.style.setProperty("--cd-progress", pct + "%");

    if(remain <= 0){
      percentEl.textContent = "100";
      root.style.setProperty("--cd-progress", "100%");
      return;
    }
    requestAnimationFrame(tick);
  }
  tick();

  // --- Curseur du site (même principe que sur la home) ---
  // Le portfolio utilise un #curseur blanc (mix-blend-mode:difference) et désactive cursor par défaut. On suit la souris ici.
  const cursor = document.getElementById("curseur");
  if (cursor){
    window.addEventListener("mousemove", (e)=>{
      // léger easing déjà géré en CSS par transition
      cursor.style.transform = `translate(${e.clientX - 7.5}px, ${e.clientY - 7.5}px)`;
    });
    // Grossir le curseur au survol des éléments interactifs
    const focusables = ["a","button",".cd-home"];
    function scaleUp(){ cursor.style.transform += " scale(1.6)"; }
    function scaleDown(){ cursor.style.transform = cursor.style.transform.replace(" scale(1.6)", ""); }
    document.addEventListener("mouseover", (e)=>{
      if (focusables.some(sel => e.target.closest(sel))) scaleUp();
    });
    document.addEventListener("mouseout", (e)=>{
      if (focusables.some(sel => e.target.closest(sel))) scaleDown();
    });
  }

  // Rien à faire côté étoiles : tout est en CSS (rotations continues).
})();
