import { uiModules } from 'ui/modules';
import chrome from 'ui/chrome'

if (chrome.getUiSettingsClient()
  && chrome.getUiSettingsClient().params
  && chrome.getUiSettingsClient().params.initialSettings["fixed-filter:enabled"]) {

  const enabledParam = chrome.getUiSettingsClient().params.initialSettings["fixed-filter:enabled"]
  if (!enabledParam || enabledParam.userValue !== false) {

    let app = uiModules.get('hack/fixedFilter', ['kibana']);

    var fixmeTop; //$('filter-bar').offset().top;  // get initial position of the element

    $(window).scroll(function() {                  // assign scroll event listener

      if (!$('filter-bar').length)
        return

      fixmeTop = 70; //$('filter-bar').offset().top;

      var currentScroll = $(window).scrollTop(); // get current position

      if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('globalFilterBar').css({                      // scroll to that element or below it
          position: 'fixed',
          top: '0'
        });
      } else {                                   // apply position: static
        $('globalFilterBar').css({                      // if you scroll above it
          position: 'static'
        });
      }

    });

  }

}


