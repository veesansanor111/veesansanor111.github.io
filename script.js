// Initialize Lucide Icons
lucide.createIcons();

let currentTheme = 'light';

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    const logoText = document.getElementById('logo-text');
    const mainTitle = document.getElementById('main-title');
    const hInput = document.getElementById('height');
    const wInput = document.getElementById('weight');
    const rulerIcon = document.getElementById('icon-ruler');
    const scaleIcon = document.getElementById('icon-scale');

    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        themeText.innerText = 'โหมดสว่าง';
        themeIcon.setAttribute('data-lucide', 'sun');
        currentTheme = 'dark';
        
        // Manual color updates for elements not handled by CSS classes easily
        rulerIcon.classList.remove('text-slate-900');
        rulerIcon.classList.add('text-white');
        scaleIcon.classList.remove('text-slate-900');
        scaleIcon.classList.add('text-white');
    } else {
        body.classList.remove('dark-theme');
        themeText.innerText = 'โหมดมืด';
        themeIcon.setAttribute('data-lucide', 'moon');
        currentTheme = 'light';
        
        rulerIcon.classList.remove('text-white');
        rulerIcon.classList.add('text-slate-900');
        scaleIcon.classList.remove('text-white');
        scaleIcon.classList.add('text-slate-900');
    }
    
    // Refresh icons
    lucide.createIcons();
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const displayVal = document.getElementById('display-val');
    const progress = document.getElementById('gauge-progress');
    const resultContainer = document.getElementById('result-container');
    const bmiLabel = document.getElementById('bmi-label');

    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const fixedBmi = bmi.toFixed(1);
        
        displayVal.innerText = fixedBmi;
        
        // Update Gauge
        // Full circle is 282.7 (2 * PI * 45)
        // Score 0-40 mapping
        const percentage = Math.min(Math.max((bmi / 40) * 100, 0), 100);
        const offset = 282.7 - (282.7 * percentage) / 100;
        progress.style.strokeDashoffset = offset;

        // BMI Category Data
        let config = { label: 'Unknown', color: 'text-slate-400', bg: 'bg-slate-100' };
        
        if (bmi < 18.5) config = { label: 'น้ำหนักน้อย / ผอม', color: 'text-sky-600', bg: 'bg-sky-50 outline-sky-200' };
        else if (bmi < 23) config = { label: 'เกณฑ์ปกติ', color: 'text-emerald-600', bg: 'bg-emerald-50 outline-emerald-200' };
        else if (bmi < 25) config = { label: 'น้ำหนักเกิน (ท้วม)', color: 'text-yellow-600', bg: 'bg-yellow-50 outline-yellow-200' };
        else if (bmi < 30) config = { label: 'โรคอ้วนระดับ 1', color: 'text-orange-600', bg: 'bg-orange-50 outline-orange-200' };
        else config = { label: 'โรคอ้วนระดับ 2 (อันตราย)', color: 'text-red-600', bg: 'bg-red-50 outline-red-200' };

        // Update UI
        bmiLabel.innerText = config.label;
        bmiLabel.className = `font-black text-lg uppercase tracking-tight px-10 py-4 rounded-[2rem] border border-white/40 shadow-xl backdrop-blur-md inline-block transition-all ${config.bg} ${config.color}`;
        
        resultContainer.style.opacity = '1';
        resultContainer.style.transform = 'translateY(0)';
    } else {
        alert('กรุณากรอกส่วนสูงและน้ำหนักให้ครบด้วยครับ');
    }
}
