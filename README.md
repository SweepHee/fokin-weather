# fokin-weather
Learning React Native by Building a foking Weather App


BUILD SETUP

```

npm install -g expo-cli

expo init projectname

expo install expo-location 안되면 npm install expo-location


```


npm start 에러 날 때

```

\node_modules\metro-config\src\defaults\blacklist.js

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

바꿔준다

```

