if (!window.console) {
  window.console = {
    log: (...args) => { print(...args) },
    debug: (...args) => { printerr(...args) }
  }
}

