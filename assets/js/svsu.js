//revealing module pattern
//http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

var svsu = (function(){

  var api_base = 'https://api.svsu.edu/',
      renderCourse = _.template(jQuery('#pretty-course-template').html()),
      course_template = '<div><%= title %> - <%= section %></div>';

  function buildCourseURI(data) {
    if(data){
	return api_base + 'courses?' + data;
    }
    return api_base + 'courses';
  }

  function courseToHTML(course) {
    return _.template(course_template, course);
  }

  function formatHTML(data) {
    return _.map(data.courses, function(course){
      return renderCourse(course);
    });
  }

  function formatJSON(json) {
    return JSON.stringify(json, null, 2);
  }

  return {
    buildCourseURI: buildCourseURI,
    formatJSON: formatJSON,
    formatHTML: formatHTML
  }

})();
