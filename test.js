function writeCommentDate(comment, dateDiv)
	{
		dateDiv.innerText = '';
		var ts = new Date(comment.modifiedDate);
		var str = editorUi.timeSince(ts);
		if (str == null)
		{
			str = mxResources.get('lessThanAMinute');
		}
		mxUtils.write(dateDiv, mxResources.get('timeAgo', [str], '{1} ago'));
		dateDiv.setAttribute('title', ts.toLocaleDateString() + ' ' +
				ts.toLocaleTimeString());
	};

App.prototype.updateButtonContainer = function()
    {
    	appUpdateButtonContainer.apply(this, arguments);
    	if (this.shareButton != null)
		{
    		this.shareButton.style.display = 'none';
		}
    };


function isArrayBuffer(obj) {
	return toString.call(obj) === "[object ArrayBuffer]";
}


EditorUi.prototype.restoreScrollState = function(state)
	{
		var s = this.editor.graph.view.scale;
		var t = this.editor.graph.view.translate;
		this.diagramContainer.scrollLeft = state.x + (t.x - state.tx) * s;
		this.diagramContainer.scrollTop = state.y + (t.y - state.ty) * s;
	};

$scope.refresh = function() {
      growl.success('Retrieving node ' + _.escape($scope.foreignId) + ' from requisition ' + _.escape($scope.foreignSource) + '...');
      RequisitionsService.getNode($scope.foreignSource, $scope.foreignId).then(
        function(node) {  
          $scope.node = node;
        },
        $scope.errorHandler
      );
    };


function selectedFilesRail(inputFileID) {
    var fileobj = [];
    if (inputFileID && inputFileID != '') {
        setFilesRail(document.getElementById(inputFileID).files);
    }
}


Git.prototype.getRemotes = function (verbose, then) {
   return this._runTask(getRemotesTask(verbose === true), trailingFunctionArgument(arguments));
};

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

Git.prototype.binaryCatFile = function() {
   return this._catFile('buffer', arguments);
};
