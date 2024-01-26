function skillsMember() {
    var skills = {
      name: 'John',
      age: 30,
      skills: ['Javascript', 'HTML', 'CSS'],
      getSkills: function() {
        return this.skills.join(', ');
      }
    };
  
    console.log(skills.getSkills());
  }