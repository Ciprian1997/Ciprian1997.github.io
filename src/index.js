function $(id){
  return document.getElementById(id);
}
function hide(id) {
  $(id).style.display = "none";
}
function show(id) {
  $(id).style.display = "block";
}

function showHomePage(){
  show("home-page");
  hide("languages-page");
  hide("skills-page");
  hide("education-page");
}
function showSkillsPage(){
  hide("home-page");
  hide("languages-page");
  show("skills-page");
  hide("education-page");
}
function showEducationPage(){
  hide("home-page");
  hide("languages-page");
  show("education-page");
  hide("skills-page");
}
function showLanguagesPage(){
  hide("home-page");
  show("languages-page");
  hide("skills-page");
  hide("education-page");
}


$("home-menu").onclick = showHomePage;
$("languages-menu").onclick = showLanguagesPage;
$("skills-menu").onclick = showSkillsPage;
$("education-menu").onclick = showEducationPage;