
/**
 * Expose `measure`.
 */

module.exports = measure;

/**
 * Measure.
 */

function measure($compile){
  return {
    restrict: 'E',
    scope: false,
    template: require('./template.html'),
    compile: function(tElement, tAttr) {
      var contents = tElement.contents().remove();
      var compiledContents;

      return function(scope, iElement, iAttr) {
        if(!compiledContents) {
          compiledContents = $compile(contents);
        }
        compiledContents(scope, function(clone, scope) {
          iElement.append(clone);
        });
      };
    }
  };
}

