const EventEmitter = require('events').EventEmitter
const debug = require('debug')('sonos-listener')
const ip = require('ip')
const parseXml = require('../helpers').ParseXml
const ParseAndEmitEvents = require('./eventParser').ParseAndEmitEvents

const listenAddress = process.env.SONOS_LISTENER || ip.address('public')

const globalEventEndpoints = [
  '/AlarmClock/Event',
  '/ZoneGroupTopology/Event',
  '/MediaServer/ContentDirectory/Event'
]
const deviceEventEndpoints = [
  '/MediaRenderer/AVTransport/Event',
  '/MediaRenderer/RenderingControl/Event',
  '/MediaRenderer/GroupRenderingControl/Event',
  '/MediaRenderer/Queue/Event'
]

/**
 * An event listener for sonos events. Currently stubbed out for now
 * @class SonosListener
 */
class SonosGjsListener extends EventEmitter {
  /**
   * Creates a new SonosListener (called automatically)
   */
  constructor () {
    super()
    this.port = parseInt(process.env.SONOS_LISTENER_PORT || 4000)
    this._listening = false
    this._deviceSubscriptions = []
  }

  /**
   * Start the listener, has to be called before subscribing
   */
  startListener () {
    // No op
    debug('Asked to start Listener')
  }

  /**
   * Stop the listener and unsubscribes for all events.
   * Very important to call or you'll get wrong notifications
   */
  async stopListener () {
    debug('Asked to stop Listener')
    return new Promise((resolve, reject) => { reject(new Error('Not listening')) })
  }

  isListening () {
    return false
  }

  /**
   * Subscribe to all events for this device.
   * @param {Sonos} device Pass in the Sonos device, it will be the eventemitter
   */
  async subscribeTo (device) {
    return new Promise((resolve, reject) => {
      debug('Asked to subscribe device')
      resolve(true)
      return
    })
  }
}
// Initialize the listener and export it. (Single instance https://k94n.com/es6-modules-single-instance-pattern)
const defaultListener = new SonosGjsListener()

module.exports = defaultListener

