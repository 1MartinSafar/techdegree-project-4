// SEARCH function


// USING vanilla JavaScript
function mySearch() {
  var input, filter, gallery, photos, photo, i;

  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();

  gallery = document.getElementById("gallery");
  photos = gallery.getElementsByTagName('div');

  for (i = 0; i < photos.length; i++) {
      photo = photos[i].getElementsByTagName("a")[0];
      if (photo.getAttribute("data-title").toUpperCase().indexOf(filter) > -1) {
        photos[i].style.display = "";
      } else {
        photos[i].style.display = "none";
      }
  }
}

// USING jQuery
function jQuerySearch() {
  var $filter;
  $filter = $('#jQuerySearchBar').val().toUpperCase();

  $(".gallery div").each(function() {
    if ( $("a", this).attr("data-title").toUpperCase().indexOf($filter) > -1 ) {
      this.style.display = "";
    } else {
      this.style.display = "none";
    }
  });
}
