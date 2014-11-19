jQuery('#lookupForm').on('click', '#fetchJSON', function(event){

  event.preventDefault();

  var $icon = jQuery('#fetchJSON > i'),
      data  = jQuery('#lookupForm').serialize(),
      route = svsu.buildCourseURI();

  $icon.removeClass('fa-code').addClass('fa-spinner').addClass('fa-spin');

  jQuery.ajax({
    data: data,
    dataType: 'jsonp',
    jsonp: 'callback',
    url: route,
  }).done(function(data){
 
    jQuery('#jsonResults').text(svsu.formatJSON(data)).fadeIn();
    jQuery('#results').fadeIn();
    $icon.addClass('fa-code').removeClass('fa-spinner').removeClass('fa-spin');

  }).error(function(data){
    jQuery('#jsonResults').append('ERROR');
  });

});
