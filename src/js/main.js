const listItem = document.getElementsByClassName(`services-item`);
for (let i = 1; i < 5; i++) {
  const imglist = document.getElementById(`img${i}`);
  listItem[i - 1].addEventListener("mouseover", () => {
    imglist.setAttribute("src", `./images/service-icon-hover-0${i}.png`);
  });
  listItem[i - 1].addEventListener("mouseout", () => {
    imglist.setAttribute("src", `./images/service-icon-0${i}.png`);
  });
}
let rate = [3.8, 5, 4, 3, 4.8];
let outlineStar = `<ion-icon name='star-outline'></ion-icon>`;
let filledStar ="<ion-icon name='star'></ion-icon>";
rate.forEach((element, index) => {
  const star = document.getElementById(`rate${index+1}`);
  let starOutline = 5 - element;
  let arr = []
  for (let i = 0; i < Math.round(element); i++) {
    arr.push(filledStar);
  }
  for (let i = 0; i < Math.round(starOutline); i++) {
    arr.push(outlineStar);
  }
  star.innerHTML = arr.map((item) => {
    return item;
  }
  ).join("") + `<span class='mx-2'>${element}</span>`;
 
})
let List = document.getElementsByClassName(`testimonials-list`);
let testiList = List[0].querySelectorAll(`li`);
let commentList = document.getElementsByClassName(`testimonials-comment`);
let comment = commentList[0].getElementsByClassName("comment-list");
for (let i = 0; i < testiList.length; i++) {

  testiList[i].addEventListener("click", () => {
    for (let j = 0; j < testiList.length; j++) {
      testiList[j].classList.remove("active-item");
      comment[j].classList.remove("active-comment");
    }
    
    testiList[i].classList.add('active-item');
    comment[i].classList.add("active-comment");
  }
  );
}
let navMenu = document.getElementById(`nav-menu`);
let activeNav = document.getElementById(`active-nav`);

activeNav.addEventListener("click", () => {
  navMenu.classList.toggle("active");
}
);
let navList = document.querySelectorAll('li')
for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", () => {
    navMenu.classList.remove("active");
  }
  );
}