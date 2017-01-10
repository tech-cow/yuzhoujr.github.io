/****-- QS Variable --****/
var dynamic_text = document.querySelector('#dynamic_text');
var email = document.querySelector('#email');
var resume = document.querySelector('#resume');
var linkedin = document.querySelector('#linkedin');
var github = document.querySelector('#github');

/****-- Local Variable --****/
var email_display = "yu.zhou.jr@gmail.com";
var resume_display = "Resume.pdf"
var linkedin_display = "LinkedIn: yuzhoujr"
var github_display = "Github: yuzhoujr"

/****-- Events --****/
email.addEventListener('mouseover', function(e) {
  dynamic_text.textContent = email_display;
});

resume.addEventListener('mouseover', function(e) {
  dynamic_text.textContent = resume_display;
});

linkedin.addEventListener('mouseover', function(e) {
  dynamic_text.textContent = linkedin_display;
});

github.addEventListener('mouseover', function(e) {
  dynamic_text.textContent = github_display;
});
