# Laver Partner App

Expo + React Native + Firebase (partner app)

## Requisitos
- Node.js 20.x (LTS)
- Java JDK 21 (Microsoft Build of OpenJDK)
- Android Studio con emulador API 35

## Configuración inicial
1. Clonar repo
2. Colocar `google-services.json` en la raíz del proyecto
3. Editar `app.json` con:
   ```json
   "android": {
     "package": "com.init0.laver.partner",
     "googleServicesFile": "./google-services.json"
   }
