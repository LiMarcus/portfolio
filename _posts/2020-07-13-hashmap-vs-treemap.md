---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: HashMap vs TreeMap
---

1. HasbMap based on hashtable.<br/>
2. HashMap dont have natural order, but Tree Map has. such as: treeMap.keySet() **is incresed set of number** // treeMap.descendingKeySet(), **is decresed set of number**
3. HashMap and TreeMap both allowe duplicated number. such as: hashMap.put( 1, "idiots") then hasMap.put(1, "brilliant"), the second time put() will overwrite the old one.