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
$("home-menu").onclick = showHomePage;
$("languages-menu").onclick = showLanguagesPage;
$("skills-menu").onclick = showSkillsPage;