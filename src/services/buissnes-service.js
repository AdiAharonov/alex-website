const gServices = [
  {
    name: 'גלאי עשן ואש',
    img:
      'https://images1.calcalist.co.il/PicServer2/20122005/72054/YE0639966_l.jpg',
    desc: 'מערכת מקיפה של גלאי אש',
  },
  {
    name: 'מצלמות אבטחה',
    img:
      'https://securitytoday.com/-/media/SEC/Security-Products/Images/2019/12/SecurityInstallation.jpg',
    desc: 'התקנת כל סוגי המצלמות ומכשירי הקלטה',
  },
  {
    name: 'ספרינקלרים',
    img:
      'https://supersprinkler.co.il/wp-content/uploads/2019/02/sprinkler-fire-system.jpg',
    desc: 'התקנות תשתית ספרינקלרים מקיפה',
  },
];

const gPhotos = [
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
  'https://picsum.photos/200',
];

function getServices() {
  return gServices;
}

function getPhotos() {
  return gPhotos;
}

export const BuissnesService = {
  getServices,
  getPhotos,
};
