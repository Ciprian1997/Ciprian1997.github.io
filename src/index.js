function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage(){
  show("home-page");
  hide("languages-page");
  hide("skills-page");
}
function showSkillsPage(){
  hide("home-page");
  hide("languages-page");
  show("skills-page");
}
function showLanguagesPage(){
  hide("home-page");
  show("languages-page");
  hide("skills-page");
}
document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("languages-menu").onclick = showLanguagesPage;
document.getElementById("skills-menu").onclick = showSkillsPage;