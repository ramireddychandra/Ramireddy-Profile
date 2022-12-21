const portfolio = document.querySelector("#portfolio");
const page1 = document.querySelector(".hero");
const aboutpage = document.querySelector(".about-section");
const profile = document.querySelector(".profile");
const education = document.querySelector(".education");
const skills = document.querySelector(".skills");

const profilesummary = document.querySelector(".profile-Summary");
const educationsummary = document.querySelector(".education-summary");
const skillssummary = document.querySelector(".skill-summary");

portfolio.addEventListener("click", function () {
  page1.classList.add("hidden");
  aboutpage.classList.remove("hidden");
});

education.addEventListener("click", function () {
  console.log(education);
  educationsummary.classList.remove("hidden");
  profilesummary.classList.add("hidden");
  skillssummary.classList.add("hidden");
  profile.classList.remove("active");
  education.classList.add("active");
  skills.classList.remove("active");
});

skills.addEventListener("click", function () {
  console.log(education);
  educationsummary.classList.add("hidden");
  profilesummary.classList.add("hidden");
  skillssummary.classList.remove("hidden");
  skills.classList.add("active");
  profile.classList.remove("active");
  education.classList.remove("active");
});

profile.addEventListener("click", function () {
  console.log(education);
  educationsummary.classList.add("hidden");
  profilesummary.classList.remove("hidden");
  skillssummary.classList.add("hidden");
  education.classList.remove("active");
  skills.classList.remove("active");
  profile.classList.add("active");
});

const addSkill = document.querySelector(".skill-add");
const addform = document.querySelector(".add-skills");
const submitskill = document.querySelector(".button");

function addskill() {
  addform.classList.remove("hidden");
}
// addSkill.addEventListener("click", function () {
//   console.log("skilladd console");
//   addform.classList.remove("hidden");
// });

const submitform = function () {
  const skillname = document.querySelector("#skill");
  const skilllist = document.querySelector(".skillcontent");

  skilllist.innerHTML += `<div class="skill">${skillname.value}</div>`;
  skillname.value = "";
  addform.classList.add("hidden");
};

function submitcloseform() {
  addform.classList.add("hidden");
}

const map = document.querySelector("#servicemap");
const mappage = document.querySelector(".location-map");
map.addEventListener("click", function () {
  page1.classList.add("hidden");
  mappage.classList.remove("hidden");
});
