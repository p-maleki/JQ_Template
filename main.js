// AirBnb SlideShow plugin
{
  const _animate = ($slides, index) => {
    const $currentImage = $($slides[index]);

    if(!$currentImage.attr("src") && $currentImage.data("src")){
      $currentImage.attr("src", $currentImage.data("src"))
    }

    $currentImage.addClass("anim").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if(e.originalEvent.animationName === "translateAnimation"){
        const nextIndex = index + 1;

        $currentImage.removeClass("anim");
        _animate($slides, nextIndex === $slides.length ? 0 : nextIndex);
      }
    });
  };

  $.fn.airBnBSlideShow = function(){
    this.each(function(){
      _animate($(this).children(), 0);
    });
    return this;
  };
}

// Plugin use:
$(".slideShow").airBnBSlideShow();

// ////////////////////////
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });