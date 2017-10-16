const hamlc = require("haml-coffee")

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable(true);
  }
  try {
    let template  = hamlc.template(source, null, null, {
      placement: 'standalone',
      escapeHtml: true
    });
    return "module.exports =" + template.toString();
  } catch(e) {
    if(!(e instanceof Error)) e = new Error(e);
    throw e;
  }
}
