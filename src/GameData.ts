export let GameData: gameData = {
  globals: {
    gameWidth: 1280,
    gameHeight: 800,
    bgColor: "#000000",
    debug: false
  },

  preloader: {
    bgColor: "#000000",
    image: "logo",
    imageX: 1280 / 2,
    imageY: 800 / 2,
    loadingText: "Loading...",
    loadingTextFont: "Underdog",
    loadingTextComplete: "Click to continue",
    loadingTextY: 700,
    loadingBarColor: 0xff0000,
    loadingBarY: 630,
  },
  
  spritesheets: [

    { name: "player", path: "assets/images/DeathMessanger.png", width: 30, height: 50, frames: 2 },
    { name: "fabrizio", path: "assets/images/Fabrizio.png", width: 40, height: 50, frames: 4 },
    { name: "melemia", path: "assets/images/Melemia.png", width: 40, height: 70, frames: 4 },
    { name: "abyssman", path: "assets/images/AbyssMan.png", width: 40, height: 70, frames: 4 },


  ],
  images: [
    { name: "sfondoMenu", path: "assets/images/sfondoMenu.png" },
    { name: "sfondoBoss01", path: "assets/images/SfondoBoss01.png" },
    { name: "sfondoBoss02", path: "assets/images/SfondoBoss02.png" },
    { name: "sfondoBoss03", path: "assets/images/SfondoBoss03.png" },
    { name: "BootImage", path: "assets/images/preloaderImage.png" },
    { name: "Luna", path: "assets/images/Luna.png" },

    //icons
    { name: "TU", path: "assets/images/Icons/TU.png" },
    { name: "FabIcon", path: "assets/images/Icons/FabIcon.png" },
    { name: "MalemiaIcon", path: "assets/images/Icons/MelamiaIcon.png" },
    { name: "AbissManIcon", path: "assets/images/Icons/AbisManIcon.png" },
    //In Game UI
    { name: "Attack", path: "assets/images/Icons/placeholder.png" },
    { name: "Tech", path: "assets/images/Icons/placeholder.png" },
    { name: "Inventory", path: "assets/images/Icons/placeholder.png" },
    { name: "Restart", path: "assets/images/Icons/placeholder.png" },
    //Scomparto tecnico
    { name: "AttackTest", path: "assets/images/attackTest.png" },
    { name: "AXE", path: "assets/images/AttaccoPollo.png" },
    { name: "Falce", path: "assets/images/AttaccoMalemia.png" },
    { name: "Croci", path: "assets/images/Croci.png" },
    //oggetti
    { name: "pozioneVita", path: "assets/images/LifePotion.png" },
    { name: "pozioneMana", path: "assets/images/ManaPotion.png" },
    { name: "pozioneAttacco", path: "assets/images/DannoPotion.png" },
  ],
  atlas: [],
  sounds: [
    /*{
    name: "music",
    paths: ["assets/sounds/intro.ogg", "assets/sounds/intro.m4a"],
    volume: 1,
    loop: true,
    frame: 1,
  }*/
  ],

  videos: [

    // { name: "video", path: "/assets/video/video.mp4" },

  ],
  audios: [

    /*{
    name: "sfx",
    jsonpath: "assets/sounds/sfx.json",
    paths: ["assets/sounds/sfx.ogg", "assets/sounds/sfx.m4a"],
    instances: 10,
  }*/
  ],

  scripts: [],
  fonts: [{key:"ralewayRegular", path:"assets/fonts/raleway.regular.ttf",type:"truetype"},
    {key:"Underdog", path:"assets/fonts/Underdog-Regular.ttf",type:"truetype"}
  ],
  webfonts: [{ key: 'Nosifer' }, { key: 'Roboto' }, { key: 'Press+Start+2P' }, { key: 'Rubik+Doodle+Shadow' }, { key: 'Rubik+Glitch' }],
  bitmapfonts: [],
};
