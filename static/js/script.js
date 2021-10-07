var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})


var alertList = document.querySelectorAll('.alert')
var alerts =  [].slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element)
})