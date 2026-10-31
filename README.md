# Heart Rate Limits Calculator

A simple React Native app that calculates heart rate limits for exercise based on age.

Weekly exercise 1 for the course *Web- ja hybriditeknologiat mobiiliohjelmoinnissa* at Oulu University of Applied Sciences.

## Formula

- Lower limit: (220 - age) * 0.65
- Upper limit: (220 - age) * 0.85

If the input is not a number, both limits are shown as zero.

## How to run

```bash
npm install
npx expo start
```

Scan the QR code with the Expo Go app on your phone.

## Built with

- React Native
- Expo
- TypeScript