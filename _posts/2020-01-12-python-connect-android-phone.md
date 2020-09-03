---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: 'Python: connect Android phone'
---

1. Install **JDK**, [Link](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Input `javac` in terminal to test if installation successful
3. Install **Android SDK** [Link](https://developer.android.com/studio#downloads)
4. Install **ADB**
5. Open **Android Studio**, find `Tools>AVD Manager>Create Virtual Device`, remeber Virtual Device name, like`Nexus_5X_API_26` 
6. Command `/Users/feng/Library/Android/sdk/emulator/emulator -avd Nexus_5X_API_26 -netdelay none -netspeed full` to open emulator
7. Install **Appium**: `npm install -g appium`
8. Ubuntu: `sudo npm install -g appium --unsafe-perm=true --allow-root`
9. Or download package: [Link](https://github.com/appium/appium-desktop/releasest)
10. Test your download: `$ appium`
11. Install **Appium-Python-Client**: `sudo pip install -g appium-doctor`
12. Install **appium-doctor** to test environment; `npm install -g appium-doctor`
13. Test environment: `$ appium-doctor`