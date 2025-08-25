# Laver Partner App

Expo + React Native + Firebase (Partner app)

> This repository is a fresh Expo app that connects to the **existing Firebase project**. It only renders a minimal **Hello, world** screen and initializes Firebase using the modular API.

---

## Prerequisites

* **Node.js 20 LTS** (recommended)
  Check: `node -v` → `v20.x`
* **JDK 21** (Microsoft Build of OpenJDK recommended)
  Check: `java -version` → `21.x`
* **Android Studio** with **Android SDK 35** and an emulator

> If your OS still has JDK 11 in PATH, Gradle will fail with *"Android Gradle plugin requires Java 17"*. See Troubleshooting.

---

## Project setup

1. **Install dependencies**

```bash
npm install
```

2. **Firebase config (Android)**

* Download `google-services.json` for the Android app (package **`com.init0.laver.partner`**) from Firebase Console → Project settings → Your apps → Android.
* Place the file at the **project root**: `./google-services.json`.
* Ensure `app.json` points to it and has the correct package:

```json
{
  "expo": {
    "android": {
      "package": "com.init0.laver.partner",
      "googleServicesFile": "./google-services.json"
    }
  }
}
```

3. **Force Gradle to use JDK 21**
   Edit `android/gradle.properties` and add **one** of the following lines (pick the one matching your JDK path):

```
# Example for Microsoft Build of OpenJDK
org.gradle.java.home=C:\\Program Files\\Microsoft\\jdk-21.0.8.9-hotspot

# Example for generic Java install (use only if applicable)
# org.gradle.java.home=C:\\Program Files\\Java\\jdk-21
```

4. **Generate native project and run (Android)**

```bash
npx expo prebuild --clean
npx expo run:android
```

> First run can take a while (Gradle downloads). Subsequent runs will be faster.

---

## Scripts (package.json)

* `npm start` → Start Metro bundler
* `npm run android` → Open in Android (Expo CLI)
* `npx expo prebuild` → Generate `android/` & `ios/` native projects
* `npx expo run:android` → Build & install native app

---

## Tech stack

* **Expo SDK 53** / React Native 0.79
* **@react-native-firebase/app** (modular API)
  Example usage in `App.js`:

```js
import { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getApp } from '@react-native-firebase/app';

export default function App() {
  useEffect(() => {
    const app = getApp();
    console.log('Firebase initialized:', app.options.appId, app.options.projectId);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: '700' }}>Hello, world 👋</Text>
    </SafeAreaView>
  );
}
```

---

## Troubleshooting

### 1) **Gradle error**: *Android Gradle plugin requires Java 17. You are currently using Java 11.*

* You have JDK 11 lingering in PATH or JAVA\_HOME.
* Fixes:

  * Ensure `java -version` prints `21.x`.
  * Set `org.gradle.java.home` in `android/gradle.properties` to your JDK 21 path (see step 3 above).
  * Optionally remove `jdk-11.*` entries from **Environment Variables → PATH**.

### 2) **`ERR_PACKAGE_PATH_NOT_EXPORTED` / Metro issues**

* Use Node **18 LTS** or **20 LTS**. Node 21/22 may cause issues with Expo SDK 53.

### 3) **`node`/`npm` not recognized**

* Add `C:\\Program Files\\nodejs` to **System PATH**, reopen terminal.

### 4) **Firebase app mismatch**

* Ensure `app.json` `android.package` **matches** the package in `google-services.json` (`com.init0.laver.partner`).

---

## Git

Initial commit message suggestion:

```
feat: Hello World screen + Firebase modular bootstrap
```

---

## Roadmap (next steps)

* Add Firebase Auth (if needed) and feature flags
* Setup EAS Build workflows
* Add CI (Node 20, JDK 21) and linting
* Implement partner flows (login, job list, order details)

---

## Español (resumen)

* Proyecto Expo nuevo que usa **el mismo proyecto Firebase** que `laver-customer` pero con **app Android distinta** (`com.init0.laver.partner`).
* Requisitos: **Node 20**, **JDK 21**.
* Poner `google-services.json` en la raíz y referenciarlo en `app.json`.
* Forzar Gradle a usar JDK 21 con `org.gradle.java.home` si aparece el error de Java 11.
* Comandos: `npm install` → `npx expo prebuild --clean` → `npx expo run:android`.

