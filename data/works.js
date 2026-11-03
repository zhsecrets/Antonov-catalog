// Каталог работ Е. И. Антонова.
// Чтобы добавить работу: положите картинки в img/full/NN.jpg и img/thumb/NN.jpg
// и добавьте строку ниже. Подписи — строго как в рукописном списке.
//
// genre:  peyzazh | natyurmort | portret | portret-semya | nyu | kompoziciya
// place:  pereslavl | titovo | nara | moskva | sever | hramy
// season: vesna | leto | osen | zima
// status: museum | family | private        museum: название музея (необязательно)

window.FILTERS = {
  genre: {
    label: "Жанр",
    items: {
      "peyzazh": "Пейзаж",
      "natyurmort": "Натюрморт",
      "portret": "Портрет",
      "portret-semya": "Портреты семьи",
      "nyu": "Обнаженная натура",
      "kompoziciya": "Композиции и эскизы"
    }
  },
  place: {
    label: "Место",
    items: {
      "pereslavl": "Переславль-Залесский",
      "titovo": "Титово",
      "nara": "Нара и Спас-Темня",
      "moskva": "Москва",
      "sever": "Север",
      "hramy": "Храмы и монастыри"
    }
  },
  season: {
    label: "Время года",
    items: { "vesna": "Весна", "leto": "Лето", "osen": "Осень", "zima": "Зима" }
  },
  status: {
    label: "Где сейчас",
    items: { "museum": "В музее", "family": "В семье", "private": "В частной коллекции" }
  }
};

window.WORKS = [
  { n: 1,  title: "«Церковь у реки Нара»", tech: "Картон, темпера", size: "55 × 76,5", year: "", genre: ["peyzazh"], place: ["nara", "hramy"], season: ["osen"], status: "museum", w: 540, h: 720 },
  { n: 2,  title: "«Весна на Волхове. ст. Ладога»", tech: "Картон, смешанная техника", size: "57 × 76,8", year: "март 1974", genre: ["peyzazh"], place: ["hramy"], season: ["vesna"], status: "museum", w: 720, h: 540 },
  { n: 3,  title: "«Висеницы»", tech: "Картон, темпера", size: "57,5 × 77,3", year: "1975", genre: ["peyzazh"], place: [], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 4,  title: "«У р. Нара»", tech: "Бумага, акварель", size: "57 × 75", year: "20 октября 1974", genre: ["peyzazh"], place: ["nara"], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 5,  title: "«Маки д. Титово»", tech: "", size: "51,5 × 62", year: "1995", genre: ["natyurmort"], place: ["titovo"], season: ["leto"], status: "museum", w: 720, h: 600 },
  { n: 6,  title: "«Ц-вь на Наре» (у Спас-Темня)", tech: "", size: "57 × 70", year: "1974", genre: ["peyzazh"], place: ["nara", "hramy"], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 7,  title: "«Спас-Темня. Стог сена»", tech: "Картон, темпера", size: "55,2 × 69", year: "1974", genre: ["peyzazh"], place: ["nara"], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 8,  title: "«Осень, березки у прудов» (дер. Титово)", tech: "Картон, темпера", size: "59 × 78", year: "", genre: ["peyzazh"], place: ["titovo"], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 9,  title: "«Окраина Москвы»", tech: "Холст, масло", size: "60 × 80", year: "1956", genre: ["peyzazh"], place: ["moskva"], season: ["zima"], status: "museum", w: 720, h: 540 },
  { n: 10, title: "«Натурщица» (Обнаженная)", tech: "Холст, масло", size: "100 × 94", year: "", genre: ["nyu"], place: [], season: [], status: "museum", w: 675, h: 720 },
  { n: 11, title: "«Скорбящие матери»", tech: "Холст, масло", size: "50 × 25", year: "", genre: ["kompoziciya"], place: [], season: [], status: "museum", w: 405, h: 720 },
  { n: 12, title: "«Дальний лоск»", tech: "Бумага, акварель", size: "65 × 88", year: "май 1974", genre: ["peyzazh"], place: [], season: ["vesna"], status: "museum", w: 720, h: 541 },
  { n: 13, title: "«Переславль-Залесский. Монастырь Никиты Столпника»", tech: "Холст, масло", size: "55 × 69,5", year: "", genre: ["peyzazh"], place: ["pereslavl", "hramy"], season: [], status: "museum", w: 720, h: 540 },
  { n: 14, title: "Эскиз к работе «Ленин и Джон Рид»", tech: "Холст, масло", size: "55 × 89", year: "1961", genre: ["kompoziciya"], place: [], season: [], status: "museum", w: 720, h: 451 },
  { n: 15, title: "«Портрет рабочего»", tech: "Картон, масло", size: "37,5 × 28,5", year: "", genre: ["portret"], place: [], season: [], status: "museum", w: 540, h: 720 },
  { n: 16, title: "«Переславль-Залесский. Храм»", tech: "Холст, масло", size: "60 × 81", year: "", genre: ["peyzazh"], place: ["pereslavl", "hramy"], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 17, title: "«Осенние холмы близ Зарайска»", tech: "Картон, масло", size: "57 × 77", year: "", genre: ["peyzazh"], place: [], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 18, title: "«Маки»", tech: "Картон, масло", size: "51,5 × 80,5", year: "", genre: ["natyurmort"], place: [], season: ["leto"], status: "museum", w: 720, h: 540 },
  { n: 19, title: "«Братский корпус Данилова монастыря»", tech: "Картон, масло", size: "44,2 × 58,8", year: "1990", genre: ["peyzazh"], place: ["moskva", "hramy"], season: ["zima"], status: "museum", w: 720, h: 540 },
  { n: 20, title: "«Краски осени»", tech: "Картон, масло", size: "45,6 × 54,5", year: "1976", genre: ["peyzazh"], place: [], season: ["osen"], status: "museum", w: 720, h: 540 },
  { n: 21, title: "«р. Уница»", tech: "Картон, масло", size: "40,5 × 37,5", year: "1973", genre: ["peyzazh"], place: ["sever"], season: ["vesna"], status: "museum", w: 720, h: 720 },
  { n: 22, title: "«Дорожка в лесу»", tech: "Картон, масло", size: "41 × 31", year: "1973", genre: ["peyzazh"], place: [], season: ["leto"], status: "museum", w: 540, h: 720 },
  { n: 23, title: "«Даль небесная»", tech: "Картон, масло", size: "32 × 43,2", year: "1973", genre: ["peyzazh"], place: ["titovo"], season: [], status: "museum", w: 720, h: 554 },
  { n: 24, title: "«Север»", tech: "Картон, масло", size: "40 × 50", year: "1976", genre: ["peyzazh"], place: ["sever"], season: ["zima"], status: "museum", w: 720, h: 554 },
  { n: 25, title: "«Барский пруд в Титово»", tech: "Картон, масло", size: "42 × 50", year: "", genre: ["peyzazh"], place: ["titovo"], season: ["leto"], status: "museum", w: 720, h: 616 },
  { n: 26, title: "«Портрет фронтовика»", tech: "Картон, масло", size: "53 × 37,5", year: "", genre: ["portret"], place: [], season: [], status: "museum", w: 540, h: 720 },
  { n: 27, title: "«Вид на сад из окна мастерской»", tech: "Картон, масло", size: "28 × 43", year: "", genre: ["peyzazh"], place: [], season: ["leto"], status: "museum", w: 720, h: 465 }
];
