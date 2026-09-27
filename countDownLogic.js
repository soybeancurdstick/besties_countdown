dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);
    console.log(targetDate);
    const temp = dayjs();
    console.log(temp);

    element.querySelector(".until_event").textContent = `Days Until Bestie is Back! (${ targetDate.format("D MMMM YYYY")})`

    setInterval(() => {
        const now = dayjs();
        //const duration = dayjs.duration(targetDate.diff(now));
        const diff = targetDate.diff(now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (diff % (1000 * 60)) /
            1000
        );

        if(diff <= 0){
            return;
        }

        element.querySelector(".until_numeric-seconds").textContent = seconds.toString().padStart(2, "0");
        element.querySelector(".until_numeric-minutes").textContent = minutes.toString().padStart(2, "0");
        element.querySelector(".until_numeric-hours").textContent = hours.toString().padStart(2, "0");
        element.querySelector(".until_numeric-days").textContent = days.toFixed(0).toString().padStart(2, "0");
    }, 250);
}

activateCountdown(document.getElementById("countDown"), "2026-11-19"); 

document
    .querySelector("#close-button")
    .addEventListener("click", () => {
        window.electronAPI.closeWindow();

    });