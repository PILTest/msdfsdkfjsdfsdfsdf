function doIt() {
    alert("hi");
  var windowHeight = $(window).height();
  var minusHeight = $('#toprow').height();
      minusHeight = minusHeight + $('#logorow').height();
      minusHeight = minusHeight + $('#menurow').height() + 250;
  var finalHeight = windowHeight - minusHeight;
      $('#featuredSlider').css("height", finalHeight + "px");


    var counter = 1;
    var greaterCounter = 1;
    var theThing = 0;
    var numElements = 0;
    var rowCnt = 0;
    $('.homeFeaturedProducts .listWrapper .listItem').each(function() {
      numElements++;
    });
    $('.homeFeaturedProducts .listWrapper .listItem').each(function() {
      var height = $('.product-title', this).height();
      var theVal = numElements % 4;

      if(height > 28) {
        theThing = height - 28;
      }
      if(counter >= 4) {
        var testCounter = 1;
        $('.homeFeaturedProducts .listWrapper .listItem').each(function() {
          if(greaterCounter >= testCounter) {
            var height2 = $('.product-title', this).height();
            if(height2 == 28) {
              $(this).css("marginTop", theThing + 'px');
            }
          }
          testCounter++;
        });
        counter = 0;
        theThing = 0;
        rowCnt++;
      }
      if(greaterCounter == numElements) {
        var testCounter = 1;
        $('.homeFeaturedProducts .listWrapper .listItem').each(function() {
          if(testCounter <= numElements || testCounter >= (rowCnt * 4)) {
            var height3 = $('.product-title', this).height();
            if(height3 == 28) {
              $(this).css("marginTop", theThing + 'px');
            }
          }
          testCounter++;
        });
      }
      greaterCounter++
      counter++;

    });
}
