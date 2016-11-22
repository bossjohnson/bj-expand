(function() {
  // this implementation assumes an app module assigned to the variable 'app'.
  // if this is no the case in your application, simply replace 'app' in the
  // following line with the module for which you wish to use the directive
  app.directive('bjExpand', bjExpand);

  function bjExpand() {
    return {
      restrict: 'A',
      scope: {
        dur: '@bjExpandDuration',
        dir: '@bjExpandDirection',
        trigger: '@bjExpandTrigger'
      },
      link: link
    };

    function link(scope, elem, attrs) {
      elem.css({
        'height': scope.dir === 'horizontal' ? 'auto' : '0',
        'width': scope.dir === 'horizontal' ? '0' : 'auto',
        'overflow-y': scope.dir === 'horizontal' ? 'auto' : 'hidden',
        'overflow-x': scope.dir === 'horizontal' ? 'hidden' : 'auto',
        'transition': scope.dur + 's'
      });
      scope.expanded = false;

      var domElem = elem[0],
        trigger = document.querySelector(scope.trigger);

      if (!trigger) return;
      trigger.addEventListener('click', scope.dir === 'horizontal' ? expandHorizontal : expandVertical);

      function expandVertical() {
        var expandedHeight = domElem.scrollHeight + 'px';
        if (!scope.expanded) elem.css('height', expandedHeight);
        else elem.css('height', 0);
        scope.expanded = !scope.expanded;
      }

      function expandHorizontal() {
        var expandedWidth = domElem.scrollWidth + 'px';
        if (!scope.expanded) elem.css('width', expandedWidth);
        else elem.css('width', 0);
        scope.expanded = !scope.expanded;
      }
    }
  }

}());
