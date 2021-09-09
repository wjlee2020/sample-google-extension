const time = document.getElementById('time');
export default function showClock() {
    const dateNow = new Date();
    time.textContent = dateNow.toLocaleTimeString('ko-KR', { timeStyle: "medium" });
}