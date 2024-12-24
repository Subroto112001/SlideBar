const iconHolder = document.querySelector(".SlidebarLogo__icon");
const SlideBarholder = document.querySelector(".Slidebar");
const iconHolder2 = document.querySelector(".SlidebarLogo__icon2nd");
console.log(iconHolder2);


iconHolder.addEventListener('click', () => {
    SlideBarholder.style.left = "0px";
    iconHolder.style.display = 'none';
    iconHolder2.style.display = "flex";
});
iconHolder2.addEventListener("click", () => {
  SlideBarholder.style.left = "-182px";
  iconHolder.style.display = "flex";
  iconHolder2.style.display = "none";
});




