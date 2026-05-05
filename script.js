// ฟังก์ชันคำนวณ BMI
function calculateBMI() {

    // ดึงค่าจาก input
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // ตรวจสอบว่ากรอกครบไหม
    if (weight === "" || height === "") {
        alert("ใส่เลขให้ครบ");
        return;
    }

    // แปลงส่วนสูงจาก cm → m
    height = height / 100;

    // สูตร BMI = น้ำหนัก / (ส่วนสูง^2)
    let bmi = weight / (height * height);

    // ปัดทศนิยม 2 ตำแหน่ง
    bmi = bmi.toFixed(2);

    // แสดงค่า BMI
    document.getElementById("result").innerText = "ค่าBMI คือ " + bmi;

    // เช็คสถานะ
    let status = "";

    if (bmi < 18.5) {
        status = "ผอม🥀";
    } else if (bmi < 23) {
        status = "ปกติ🤑";
    } else if (bmi < 25) {
        status = "น้ำหนักเกิน😭";
    } else {
        status = "อ้วน🤣";
    }

    // แสดงสถานะ
    document.getElementById("status").innerText = "ตอนนี้ " + status;
}