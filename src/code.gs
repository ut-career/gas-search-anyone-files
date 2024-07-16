/** index page */
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doProcess() {
  const iter = DriveApp.searchFiles(`'me' in owners and (visibility='anyoneCanFind' or visibility='anyoneWithLink')`)
  const ret = [];
  while (iter.hasNext()) {
    const file = iter.next()
    ret.push({ id: file.getId(), name: file.getName() })
    if (ret.length === 30) {
      break
    }
  }
  return ret;
}
