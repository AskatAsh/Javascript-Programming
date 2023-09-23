const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Jimmy James",
      "title": "Today is Raining",
      "release_year": 1998,
      "formats": [
        "mp3",
        "mp4",
        "CD"
      ],
    }
  ];
//   console.log(myMusic);
//   console.log(myMusic[0]);
//   console.log(myMusic[0].formats);
//   console.log(myMusic[0].formats[1]);

  console.log(Object.keys(myMusic[0]));
  console.log(Object.values(myMusic[0]));