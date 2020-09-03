---
title: 'ADB: check the emulator'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

**Activity**: Input in terminal: `adb shell dumpsys activity | grep -i run`
**Version**:  `adb shell getprop ro.build.version.release`