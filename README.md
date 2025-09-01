# Laver Partner App

Expo + React Native + Firebase (Partner app)

> This repo is an Expo app connected to the **existing Firebase project**. It currently only renders a **Hello, world** screen and loads Firebase using the modular API.

---

## Requirements

* **Node.js 20 LTS** (recommended)  
* **JDK 17** (Eclipse Temurin recommended)
* **Android Studio with Android SDK 35 and an emulator.**

--- 

## Project setup and run

* **Install dependencies**
npm install

--- 

## Run on Android (emulator or physical device)

npm run android

This will:

* Generate native projects (android/ and ios/) if they don’t exist.

* Build with Gradle using Java 17.

* Install the app on the emulator/connected device.

## English (summary)

 * Expo/React Native project connected to existing Firebase.

 * Requires Node 20 + JDK 17.

 * Configure google-services.json in the root folder.
 
Commands to run:
npm install
npm run android