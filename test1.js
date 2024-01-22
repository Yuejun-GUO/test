Runnable.prototype.timeout = function(ms){
  if (0 == arguments.length) return this._timeout;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._timeout = ms;
  if (this.timer) this.resetTimeout();
  return this;
};

Mocha.prototype.grep = function(re) {
  this.options.grep = 'string' == typeof re
    ? new RegExp(utils.escapeRegexp(re))
    : re;
  return this;
};

GraphViewer.prototype.updateTitle = function(title)
{
	title = title || '';
	if (this.showTitleAsTooltip && this.graph != null && this.graph.container != null)
	{
		this.graph.container.setAttribute('title', title);
    }
	if (this.filename != null)
	{
		this.filename.innerText = '';
		mxUtils.write(this.filename, title);
		this.filename.setAttribute('title', title);
	}
};

$scope.delete = function(foreignSource) {
      bootbox.confirm('Are you sure you want to remove the requisition ' + foreignSource + '?', function(ok) {
        if (ok) {
          RequisitionsService.startTiming();
          RequisitionsService.deleteRequisition(foreignSource).then(
            function() {  
              growl.success('The requisition ' + foreignSource + ' has been deleted.');
            },
            $scope.errorHandler
          );
        }
      });
    };

function selectedFilesRail(inputFileID) {
    var fileobj = [];
    if (inputFileID && inputFileID != '') {
        setFilesRail(document.getElementById(inputFileID).files);
    }
}
