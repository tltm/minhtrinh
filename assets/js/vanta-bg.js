function initVanta() {
  if (window.VANTA && window.VANTA.NET && window.THREE) {
    const vantaDiv = document.createElement("div");
    vantaDiv.id = "vanta-bg";
    document.body.prepend(vantaDiv);

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    const vantaEffect = window.VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: isDark ? 0x58a6ff : 0x1f6feb,
      backgroundColor: isDark ? 0x121212 : 0xffffff,
      points: 10.0,
      maxDistance: 22.0,
      spacing: 16.0,
      showDots: true,
    });

    const themeToggle = document.getElementById("light-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        setTimeout(() => {
          const darkNow = document.documentElement.getAttribute("data-theme") === "dark";
          vantaEffect.setOptions({
            color: darkNow ? 0x58a6ff : 0x1f6feb,
            backgroundColor: darkNow ? 0x121212 : 0xffffff,
          });
        }, 50);
      });
    }
  } else {
    setTimeout(initVanta, 50);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVanta);
} else {
  initVanta();
}