function showHomePage(){
  document.getElementById("home-page").style.display = "block";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
}
function showSkillsPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("skills-page").style.display = "block";
}
function showLanguagesPage(){
  document.getElementById("home-page").style.display = "none";
  document.getElementById("languages-page").style.display = "block";
  document.getElementById("skills-page").style.display = "none";
}
document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("languages-menu").onclick = showLanguagesPage;
document.getElementById("skills-menu").onclick = showSkillsPage;