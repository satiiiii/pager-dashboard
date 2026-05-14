import { useState, useRef, useCallback, useEffect } from 'react'
import mqtt from 'mqtt'
import { MQTT_CONFIG, TOPIC_COMANDO } from '../config'

export function useMQTT() {
  const clientRef = useRef(null)
  const [status, setStatus] = useState('disconnected') // disconnected | connecting | connected | error

  const connect = useCallback(() => {
    if (clientRef.current) return
    setStatus('connecting')

    const client = mqtt.connect(MQTT_CONFIG.brokerUrl, {
      username:        'sativlr',
      password:        'Ga20122004',
      clientId:        'id_client',
      clean:           true,
      reconnectPeriod: 5000,
      connectTimeout:  10000,
    })

    client.on('connect',   () => setStatus('connected'))
    client.on('reconnect', () => setStatus('connecting'))
    client.on('error',     () => setStatus('error'))
    client.on('offline',   () => setStatus('disconnected'))
    client.on('close',     () => setStatus('disconnected'))

    clientRef.current = client
  }, [])

  const disconnect = useCallback(() => {
    clientRef.current?.end(true)
    clientRef.current = null
    setStatus('disconnected')
  }, [])

  const publish = useCallback((payload) => {
    if (!clientRef.current || status !== 'connected') return
    clientRef.current.publish(TOPIC_COMANDO, payload, { qos: 1 })
  }, [status])

  useEffect(() => () => clientRef.current?.end(true), [])

  return { status, connect, disconnect, publish }
}
