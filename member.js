function skillsMember() {
  var member = document.getElementById('member');
  var skills = document.getElementById('skills');
  var skillsMember = document.getElementById('skills-member');
  var skillsMemberClose = document.getElementById('skills-member-close');

  member.addEventListener('click', function() {
    skills.classList.add('skills--active');
    skillsMember.classList.add('skills-member--active');
  });

  skillsMemberClose.addEventListener('click', function() {
    skills.classList.remove('skills--active');
    skillsMember.classList.remove('skills-member--active');
  });
}