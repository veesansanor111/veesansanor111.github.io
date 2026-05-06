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
        status = "รับประทานอาหารให้เพียงพอและออกกำลังกายแบบเวทเทรนนิ่ง";
    } else if (bmi < 23) {
        status = " หากต้องการกระชับสัดส่วนมากขึ้น แนะนำให้เน้นการออกกำลังกายแบบมีแรงต้าน";
    } else if (bmi < 25) {
        status = "ลดการกินหวาน มัน เค็ม และอาหารแปรรูป เพิ่มการทานผัก ผลไม้ ออกกำลังกายแบบแอโรบิกอย่างต่อเนื่อง";
    } else {
        status = "ปรับเปลี่ยนการรับประทานอาหาร  ลดของมัน ของทอด ขนมหวาน เลือกอาหารสุขภาพ เน้นผัก ผลไม้ คุมปริมาณ ดื่มน้ำเปล่า ออกกำลังกายระดับปานกลางอย่างน้อย 150-300 นาทีต่อสัปดาห์ เช่น เดินเร็ว ปั่นจักรยาน พักผ่อนให้เพียงพอ ติดตามผล";
    }

    // แสดงสถานะ
    document.getElementById("status").innerText = "แนะนำ " + status;
}