$(function () {
  $(document).scroll(function () {
    var $nav = $(' .navbar');
    if ($(this).scrolltop() > $nav.height()) {
      $nav.addclass('scrolled');
      $nav.removeclass('navar-dark');
      $nav.addclass('navbar-light');
    } else {
      $nav.removeclass('scrolled');
      $nav.addclass('navbar-dark');
      $nav.removeclass('navbar-light');
    }
  });
});
