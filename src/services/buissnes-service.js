const gServices = [
    {
        name: "מצלמות אבטחה",
        img: "https://www.gov.il/BlobFolder/generalpage/surveillance_cameras_fqa/he/Camera.jpg",
        desc: "התקנת כל סוגי המצלמות ומכשירי הקלטה"
        
    },
    {
        name: "גלאי עשן ואש",
        img: "https://images1.calcalist.co.il/PicServer2/20122005/72054/YE0639966_l.jpg",
        desc: "מערכת מקיפה של גלאי אש"
        
    },
    {
        name: "ספרינקלרים",
        img: "https://supersprinkler.co.il/wp-content/uploads/2019/02/sprinkler-fire-system.jpg",
        desc: "התקנות תשתית ספרינקלרים מקיפה"
    }
];

const gPhotos = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200"
]

function getServices() {
    return gServices;
  }

function getPhotos() {
    return gPhotos;
}  

  export const BuissnesService = {
      getServices,
      getPhotos
  }