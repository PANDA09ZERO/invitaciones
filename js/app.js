
    // ==== Cuenta regresiva (cambia la fecha aquí) ====
    const weddingDate = new Date("Dec 27, 2025 16:00:00").getTime();
    const el = document.getElementById('countdown');
    function tick(){
      const now = Date.now();
      let diff = Math.max(0, weddingDate - now);
      const d = Math.floor(diff / (1000*60*60*24)); diff -= d*24*60*60*1000;
      const h = Math.floor(diff / (1000*60*60)); diff -= h*60*60*1000;
      const m = Math.floor(diff / (1000*60)); diff -= m*60*1000;
      const s = Math.floor(diff / 1000);
      el.innerHTML = `
        <div class="cd-box"><div class="cd-num">${d}</div><div class="cd-label">días</div></div>
        <div class="cd-box"><div class="cd-num">${h}</div><div class="cd-label">horas</div></div>
        <div class="cd-box"><div class="cd-num">${m}</div><div class="cd-label">min</div></div>
        <div class="cd-box"><div class="cd-num">${s}</div><div class="cd-label">seg</div></div>`;
      if (weddingDate - now <= 0) clearInterval(timer);
    }
    const timer = setInterval(tick, 1000); tick();

    // ==== RSVP fake handler (solo UI). Conecta a tu backend si lo deseas ====
    function handleRSVP(e){
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = 'Enviando…';
      setTimeout(()=>{
        btn.textContent = 'Enviar confirmación'; btn.disabled = false;
        const msg = document.getElementById('rsvp-msg');
        msg.style.display = 'block';
        e.target.reset();
      }, 900);
    }
 