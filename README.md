# Initiative Tracker

[![GitHub release](https://img.shields.io/github/package-json/v/zsaffrin/initiative-tracker?color=001f3f)](https://github.com/zsaffrin/initiative-tracker)

Simple initiative tracker app for your gaming needs. I built with D&D5e in mind, but tried to keep it general enough to be useful for basically any game with turn-based encounters.

List states are stored on Firestore so the state can be shared across devices. Share the key or scan the QR code to share the list in either read-only or full-edit mode. Just the keys, no ID/PW or other auth.

Works repsonsively on any display size, but layout is intended for mobile/tablet screens in portrait, so desktop view is a little sparse.

**Please note**: This is an experimental project for fun. I'll do my best, but I can't promise anything by way of functionality, data retention, or anything resembling reliable service.

Built with

- [create-react-app](https://github.com/facebook/create-react-app) (unejected)
- [Google Firestore](https://cloud.google.com/firestore/) via [Firebase](https://firebase.google.com/) for real-time database
- [FontAwesome](https://fontawesome.com/) for iconography
- [styled-components](https://github.com/styled-components/styled-components) for style
- [tinycolor](https://github.com/bgrins/TinyColor) for color manipulation
- [qrcode.react](https://github.com/zpao/qrcode.react) to generate the QR codes
- [react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) for the slick drag-drop
- [Google Analytics](https://analytics.google.com/) to monitor traffic

Shout-out to Miryks20 for the favicon design. All other icons are by FontAwesome.
