// 设置开始时间为2023年7月20日13:14:52
const startTime = new Date('2023-07-20T13:14:52Z').getTime();

// 更新计时器的函数
function updateTimer() {
    // 获取当前时间
    const now = new Date().getTime();
    // 计算时间差
    const timeDiff = now - startTime;
    // 计算天数、小时、分钟和秒数
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    // 显示在页面上
    document.getElementById('timer').innerHTML = days + "天 " + hours + "小时 "
        + minutes + "分钟 " + seconds + "秒";
}

// 每秒调用一次updateTimer函数
setInterval(updateTimer, 1000);


// 设置一个包含不同月份背景图像文件名的数组
const backgroundImages = [
    "january.jpg",
    "february.jpg",
    "c3.jpg",
    "c4.jpg",
    "02.gif",
    "x6.jpg",
    "7.jpg",
    "8.jpg",
    "q9.jpg",
    "10.jpg",
    "q11.jpg",
    "12.jpg",
];

const headerElement = document.querySelector(".header");
let currentImageIndex = new Date().getMonth();


function changeBackgroundImage(direction) {
    if (direction === "next") {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    } else if (direction === "prev") {
        currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
    }
    headerElement.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    headerElement.style.backgroundPosition = 'center';  // 添加这行
}

const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function createCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calendar = document.getElementById("days");
    calendar.innerHTML = "";

    document.getElementById("monthYear").innerText = monthNames[month] + " " + year;

    let weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    let weekRow = document.createElement("div");
    for (let i = 0; i < 7; i++) {
        let weekDay = document.createElement("div");
        weekDay.classList.add("day");
        weekDay.innerText = weekDays[i];
        weekRow.appendChild(weekDay);
    }
    calendar.appendChild(weekRow);

    document.getElementById("monthYear").innerText = monthNames[month] + " " + year;
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("div");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                cell.classList.add("day");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("div");
                let cellText = document.createTextNode(date);
                if (date === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
                    cell.classList.add("day", "today");
                } else {
                    cell.classList.add("day");
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        calendar.appendChild(row);
    }
}

document.getElementById("prev").addEventListener("click", function () {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    createCalendar(currentMonth, currentYear);
    changeBackgroundImage("prev");  // 修改这行
});

document.getElementById("next").addEventListener("click", function () {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    createCalendar(currentMonth, currentYear);
    changeBackgroundImage("next");  // 修改这行
});

// 在页面加载时设置初始背景图像和日历
window.onload = function () {
    createCalendar(currentMonth, currentYear);
    changeBackgroundImage();
};



