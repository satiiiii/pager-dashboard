# 🔔 Pager Balcão — Dashboard

Interface React fiel ao design Figma (tema roxo + amarelo), conectada ao ESP32 via HiveMQ MQTT.

---

## ⚡ Como rodar

```bash
npm install
npm run dev
```

Acesse: **http://localhost:5173**

---

## ⚙️ Configurar credenciais

Edite **`src/config.js`**:

```js
export const MQTT_CONFIG = {
  brokerUrl: 'wss://SEU_CLUSTER.s1.eu.hivemq.cloud:8884/mqtt',
  username:  'SEU_USUARIO',
  password:  'SUA_SENHA',
}

export const TOPIC_COMANDO = 'faculdade/pager/comando'
```

O tópico deve ser **idêntico** ao do ESP32.

---

## 🖥️ Telas

| Tela           | Descrição                                        |
|----------------|--------------------------------------------------|
| **Login**      | Usuário + senha                                  |
| **Balcão**     | Número/nome do balcão do operador                |
| **Pedidos**    | Grid de pedidos com botões ACIONAR e DESLIGAR    |
| **Configurações** | Ajuste de broker, tópico e duração do alerta |

---

## 📡 Mensagens MQTT publicadas

| Ação      | Payload     |
|-----------|-------------|
| ACIONAR   | `"ACIONAR"` |
| DESLIGAR  | `"DESLIGAR"`|
