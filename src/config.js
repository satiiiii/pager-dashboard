// ─────────────────────────────────────────────
//  CONFIGURE SUAS CREDENCIAIS HIVEMQ AQUI
// ─────────────────────────────────────────────

export const MQTT_CONFIG = {
  brokerUrl: 'wss://715f50bd4bf94d788cdb66e5a54c400f.s1.eu.hivemq.cloud:8884/mqtt',
  username:  'sativlr',
  password:  'Ga20122004',
  clientId:  `pager_dashboard_${Math.random().toString(16).slice(2, 8)}`,
}

export const TOPIC_COMANDO = 'faculdade/pager/comando'