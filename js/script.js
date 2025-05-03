document.getElementById("modo-escuro-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    const btn = document.getElementById("modo-escuro-btn");
    if (document.body.classList.contains("dark-mode")) {
      btn.textContent = "☀️ Modo Claro";
    } else {
      btn.textContent = "🌙 Modo Escuro";
    }
  });
  