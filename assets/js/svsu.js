//revealing module pattern
//http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

var svsu = (function(){

  var api_base = 'https://api.svsu.edu/';

  function buildCourseURI(data) {
    if(data){
	return api_base + 'courses?' + data;
    }
    return api_base + 'courses';
  }

  function formatJSON(json) {
    return JSON.stringify(json, null, 2);
  }

  return {
    buildCourseURI: buildCourseURI,
    formatJSON: formatJSON
  }

})();
