import { npStart } from 'ui/new_platform';

const enabledParam = npStart.core.uiSettings.get('fixed-filter:enabled');
if (enabledParam) {

  console.log("filter bar plugin enabled !");

  var fixmeTop; //$('filter-bar').offset().top;  // get initial position of the element

  $(window).scroll(function() {                  // assign scroll event listener

    if (!$('.globalFilterGroup').length) {
      console.log("filter bar not detected");
      return;
    }

    fixmeTop = 70; //$('filter-bar').offset().top;

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {
      console.log("filter bar fixed");
      // apply position: fixed if you
      $('.globalFilterGroup').css({                      // scroll to that element or below it
        position: 'fixed',
        top: '50px',
        'z-index': '350',
      });
    } else {
      console.log("filter bar static");
      // apply position: static
      $('.globalFilterGroup').css({                      // if you scroll above it
        position: 'static'
      });
    }

  });

}


