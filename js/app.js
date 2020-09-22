document.addEventListener('prechange', function (event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});
document.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);

  if (page.id === 'page1') {
    
      page.querySelector('#magic').onclick = function () {
        document.querySelector('#myNavigator').pushPage('detail-magic.html');
      };
      page.querySelector('#after').onclick = function () {
        document.querySelector('#myNavigator').pushPage('detail-after.html');
      };
      page.querySelector('#mobil').onclick = function () {
        document.querySelector('#myNavigator').pushPage('detail-mobil.html');
      };

    
    //JS of tab1
  } else if (page.id === 'profile') {
    // JS of tab2
  } else if (page.id === 'favorite') {
    // JS of tab2
  } else if (page.id === 'search') {
    // JS of tab2
    // document.getElementById("tab2alert").onclick = function () {
    //   ons.notification.alert('Alert in Tab 2');
    // }
  }
});
