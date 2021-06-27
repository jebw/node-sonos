if (!window.console) {
  window.console = {
    log: (...args) => { print(...args) },
    debug: (...args) => { printerr(...args) }
  }
}

const GjsCompat = {
  isGJS: function() {
    return typeof(window.imports) !== 'undefined' ;
  }
}

module.exports = GjsCompat ;

