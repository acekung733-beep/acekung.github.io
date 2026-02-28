// เปลี่ยนสี Navbar ตอนเลื่อนหน้าเว็บ
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#081633";
  } else {
    navbar.style.background = "#0a1f44";
  }
});

// ทำให้ปุ่ม Get Started เลื่อนลงไป Services
const button = document.querySelector(".hero button");
button.addEventListener("click", function() {
  document.querySelector("#services").scrollIntoView({
    behavior: "smooth"
  });
});
