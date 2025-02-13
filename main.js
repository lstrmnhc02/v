onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("click", function (e) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.classList.add("click-heart");
    document.body.appendChild(heart);

    let x = e.clientX;
    let y = e.clientY;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    setTimeout(() => {
        heart.remove();
    }, 1500);
});
