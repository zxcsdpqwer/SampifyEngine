Sampify — автономная версия (PWA)

СОСТАВ
  index.html            — программа
  manifest.webmanifest  — манифест (название, иконки, цвета)
  sw.js                 — работа офлайн
  icons/                — иконки (192, 512, maskable, apple-touch)
  lib/                  — сюда можно положить файлы three.js (см. ниже)

КАК ЗАПУСТИТЬ
  Установка и офлайн-режим работают только по https:// (или http://localhost).
  Если открыть index.html двойным кликом (file://), программа запустится,
  но установить её как приложение нельзя.

  Варианты:
  1. Загрузить папку на любой хостинг: GitHub Pages, Netlify (Drag & Drop), Cloudflare Pages.
  2. Для проверки на компьютере: в папке выполнить  python3 -m http.server 8000
     и открыть http://localhost:8000

УСТАНОВКА НА ТЕЛЕФОН
  Android (Chrome): меню ⋮ → «Установить приложение».
  iPhone (Safari): «Поделиться» → «На экран «Домой»».

ПОЛНОСТЬЮ ОФЛАЙН
  При первом запуске программа один раз скачивает три файла three.js и запоминает их.
  Чтобы не зависеть от интернета совсем, скачайте их и положите в папку lib/:
    lib/three.min.js      https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
    lib/OrbitControls.js  https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js
    lib/OBJLoader.js      https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js
  Программа сама возьмёт их оттуда.

ОБНОВЛЕНИЕ
  После изменения index.html увеличьте номер в sw.js (const V = 'sampify-v2'),
  чтобы устройства получили новую версию.

ПРОЕКТЫ
  Проекты хранятся в браузере устройства (IndexedDB) и не переносятся между устройствами.
