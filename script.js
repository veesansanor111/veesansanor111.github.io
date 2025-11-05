// ฟังก์ชันทักทาย (ของเดิม)
function sayHello() {
  document.getElementById("message").innerText =
    "ไอดำ 😄";
}

// --- ส่วนจัดการโหมดกลางวัน/กลางคืน ---
const toggleButton = document.getElementById("toggleMode");
const body = document.body;

// ✅ ตรวจสอบว่าผู้ใช้เคยเลือกโหมดไว้ก่อนหรือไม่
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ เปลี่ยนเป็นโหมดกลางวัน";
} else {
  toggleButton.textContent = "🌙 เปลี่ยนเป็นโหมดกลางคืน";
}

// ✅ เมื่อคลิกปุ่มให้สลับโหมด
toggleButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ เปลี่ยนเป็นโหมดกลางวัน";
    localStorage.setItem("mode", "dark"); // 💾 บันทึกสถานะ
  } else {
    toggleButton.textContent = "🌙 เปลี่ยนเป็นโหมดกลางคืน";
    localStorage.setItem("mode", "light"); // 💾 บันทึกสถานะ
  }
});
