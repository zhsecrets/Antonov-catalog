// Каталог работ Е. И. Антонова.
// Чтобы добавить работу: положите картинки в img/full/NN.jpg и img/thumb/NN.jpg
// и добавьте строку ниже. Подписи — строго как в рукописном списке.
//
// genre:  peyzazh | natyurmort | portret | portret-semya | nyu | kompoziciya
// place:  pereslavl | titovo | nara | moskva | sever | hramy
// season: vesna | leto | osen | zima
// status: museum | family | private | studio        museum: название музея (необязательно)

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
      "ladoga": "Старая Ладога и Волхов",
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
    items: { "museum": "В музее", "family": "В семье", "private": "В частной коллекции", "studio": "В мастерской" }
  }
};

window.WORKS = [
  { n: 1,  title: "«Церковь у реки Нара»", tech: "Картон, темпера", size: "55 × 76,5", year: "", genre: ["peyzazh"], place: ["nara", "hramy"], season: ["osen"], status: "museum", w: 540, h: 720 },
  { n: 2,  title: "«Весна на Волхове. ст. Ладога»", tech: "Картон, смешанная техника", size: "57 × 76,8", year: "март 1974", genre: ["peyzazh"], place: ["ladoga", "hramy"], season: ["vesna"], status: "museum", w: 720, h: 540 },
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
  { n: 27, title: "«Вид на сад из окна мастерской»", tech: "Картон, масло", size: "28 × 43", year: "", genre: ["peyzazh"], place: [], season: ["leto"], status: "museum", w: 720, h: 465 },
  { n: 28, title: "«Весенний сад»", tech: "Акварель", size: "53,5 × 73,5", year: "", genre: ["peyzazh"], place: [], season: ["vesna"], status: "studio", w: 720, h: 590 },
  { n: 29, title: "«Ветер и холодно. Староладожская крепость»", tech: "Холст, масло", size: "60 × 80", year: "", genre: ["peyzazh"], place: ["ladoga", "hramy"], season: ["zima"], status: "studio", w: 720, h: 555 },
  { n: 30, title: "«Переславль-Залесский»", tech: "Бумага, акварель", size: "60 × 85", year: "", genre: ["peyzazh"], place: ["pereslavl", "hramy"], season: ["osen"], status: "studio", w: 720, h: 518 },
  { n: 31, title: "«Золотой сад»", tech: "Холст, масло", size: "79 × 59", year: "", genre: ["peyzazh"], place: [], season: ["osen"], status: "studio", w: 642, h: 720 },
  { n: 32, title: "«Золотой сад (2)»", tech: "Картон, масло", size: "77 × 68", year: "", genre: ["peyzazh"], place: [], season: ["osen"], status: "studio", w: 655, h: 720 },
  { n: 33, title: "«Натюрморт с виноградом и георгинами. Анапа»", tech: "Акварель", size: "", year: "", genre: ["natyurmort"], place: [], season: ["leto"], status: "studio", w: 541, h: 720 },
  { n: 34, title: "«Деревня в Кижах»", tech: "Бумага, акварель", size: "74 × 64", year: "1974", genre: ["peyzazh"], place: ["sever"], season: ["leto"], status: "studio", w: 720, h: 591 },
  { n: 35, title: "«Отдых в поле»", tech: "Картон, масло", size: "55,5 × 79,3", year: "", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 538 },
  { n: 36, title: "«Просторы. Титово»", tech: "Бумага, акварель", size: "54 × 73", year: "", genre: ["peyzazh"], place: ["titovo"], season: ["leto"], status: "studio", w: 720, h: 591 },
  { n: 37, title: "«Кижи»", tech: "Бумага, акварель", size: "53 × 73", year: "", genre: ["peyzazh"], place: ["sever"], season: ["leto"], status: "studio", w: 720, h: 600 },
  { n: 38, title: "«Сирень»", tech: "Холст, масло", size: "85 × 94,5", year: "", genre: ["natyurmort"], place: [], season: ["vesna"], status: "studio", w: 720, h: 720 },
  { n: 39, title: "«Переславль-Залесский»", tech: "Холст, масло", size: "80 × 100", year: "", genre: ["peyzazh"], place: ["pereslavl", "hramy"], season: ["osen"], status: "studio", w: 720, h: 540 },
  { n: 40, title: "«Мыслитель» (Иван Егорович Антонов)", tech: "Холст, масло", size: "78 × 63,5", year: "", genre: ["portret-semya"], place: [], season: [], status: "studio", w: 540, h: 720 },
  { n: 41, title: "«Староладожская крепость»", tech: "Картон, масло", size: "65,5 × 78", year: "", genre: ["peyzazh"], place: ["ladoga", "hramy"], season: [], status: "studio", w: 701, h: 720 },
  { n: 42, title: "«Картошка»", tech: "Картон, масло", size: "57,3 × 80", year: "1984", genre: ["natyurmort"], place: [], season: [], status: "studio", w: 540, h: 720 },
  { n: 43, title: "«Закат. Титово»", tech: "Картон, масло", size: "43,5 × 75", year: "", genre: ["peyzazh"], place: ["titovo"], season: [], status: "studio", w: 720, h: 465 },
  { n: 44, title: "«Дачная улица»", tech: "Картон, масло", size: "57 × 79,5", year: "", genre: ["peyzazh"], place: [], season: ["osen"], status: "studio", w: 720, h: 540 },
  { n: 45, title: "«Пионы»", tech: "Картон, масло", size: "51 × 59", year: "", genre: ["natyurmort"], place: [], season: ["leto"], status: "studio", w: 720, h: 720 },
  { n: 46, title: "«Титово»", tech: "Картон, масло", size: "57,3 × 76,7", year: "", genre: ["peyzazh"], place: ["titovo"], season: ["osen"], status: "studio", w: 720, h: 540 },
  { n: 47, title: "«Храм Св. Георгия. Старая Ладога»", tech: "Картон, масло", size: "49,5 × 73,5", year: "", genre: ["peyzazh"], place: ["ladoga", "hramy"], season: ["zima"], status: "studio", w: 720, h: 475 },
  { n: 48, title: "«Весна на Севере»", tech: "Картон, масло", size: "56 × 76", year: "", genre: ["peyzazh"], place: ["sever"], season: ["vesna"], status: "studio", w: 720, h: 558 },
  { n: 49, title: "«Дача Кардовского, Переславль-Залесский»", tech: "Картон, масло", size: "76 × 52", year: "", genre: ["peyzazh"], place: ["pereslavl"], season: ["zima"], status: "studio", w: 512, h: 720 },
  { n: 50, title: "«Москва-Сортировочная (Угольный склад)»", tech: "Картон, масло", size: "49 × 71", year: "1954", genre: ["peyzazh"], place: ["moskva"], season: ["zima"], status: "studio", w: 720, h: 540 },
  { n: 51, title: "«Титово. Старая яблоня, ранний снег»", tech: "Картон, масло", size: "57,5 × 77,5", year: "", genre: ["peyzazh"], place: ["titovo"], season: ["osen"], status: "studio", w: 720, h: 562 },
  { n: 52, title: "«Надвратная церковь Борисо-Глебской крепости»", tech: "Картон, масло", size: "80 × 56,5", year: "", genre: ["peyzazh"], place: ["hramy"], season: [], status: "studio", w: 540, h: 720 },
  { n: 53, title: "«Лилии и пионы»", tech: "Бумага, акварель", size: "35 × 47", year: "1991", genre: ["natyurmort"], place: [], season: ["leto"], status: "studio", w: 720, h: 540 },
  { n: 54, title: "«Сад (Антоновка)»", tech: "Картон, масло", size: "50 × 75,5", year: "1985", genre: ["peyzazh"], place: [], season: ["leto"], status: "studio", w: 720, h: 535 },
  { n: 55, title: "«Яблоневый сад»", tech: "Картон, масло", size: "56 × 78", year: "1985", genre: ["peyzazh"], place: [], season: ["leto"], status: "studio", w: 720, h: 540 },
  { n: 56, title: "«Семья. Утро. Соколиная гора» (эскиз)", tech: "Оргалит, смешанная техника", size: "85 × 62", year: "", genre: ["portret-semya", "kompoziciya"], place: [], season: [], status: "studio", w: 540, h: 720 },
  { n: 57, title: "«Осень»", tech: "Картон, темпера", size: "42,5 × 66,3", year: "", genre: ["peyzazh"], place: [], season: ["osen"], status: "studio", w: 720, h: 540 },
  { n: 58, title: "«Никитский м-рь. Переславль-Залесский»", tech: "Холст, масло", size: "80 × 120", year: "1976", genre: ["peyzazh"], place: ["pereslavl", "hramy"], season: ["osen"], status: "studio", w: 720, h: 540 },
  { n: 59, title: "«Весна в Титово»", tech: "Картон, темпера", size: "50 × 78", year: "1990", genre: ["peyzazh"], place: ["titovo"], season: ["vesna"], status: "studio", w: 720, h: 540 },
  { n: 60, title: "«Стога»", tech: "Бумага, акварель", size: "39 × 71,5", year: "", genre: ["peyzazh"], place: [], season: ["leto"], status: "studio", w: 720, h: 480 },
  { n: 61, title: "«В ночь с 1 на 2 января 1976–1977 г.»", tech: "Оргалит, темпера", size: "76 × 110", year: "", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 540 },
  { n: 62, title: "«Ночь»", tech: "Оргалит, темпера", size: "121 × 61", year: "", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 360, h: 720 },
  { n: 63, title: "Эскиз. «Двое»", tech: "Оргалит, темпера", size: "", year: "", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 540 },
  { n: 64, title: "Эскиз. «Прощение»", tech: "Оргалит, темпера", size: "70 × 129", year: "", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 360 },
  { n: 65, title: "«Утро. Семья. Соколиная гора»", tech: "Холст, масло", size: "118,5 × 82,5", year: "60-е гг.", genre: ["portret-semya", "kompoziciya"], place: [], season: [], status: "studio", w: 540, h: 720 },
  { n: 66, title: "«Храм Св. Георгия на Старой Ладоге»", tech: "Холст, масло", size: "100 × 138", year: "1976–1992 гг.", genre: ["peyzazh"], place: ["ladoga", "hramy"], season: ["zima"], status: "studio", w: 720, h: 480 },
  { n: 67, title: "«Натюрморт с золотыми шарами, гладиолусом и яблоками»", tech: "Картон, масло", size: "98 × 78", year: "1996", genre: ["natyurmort"], place: [], season: ["leto"], status: "studio", w: 540, h: 720 },
  { n: 68, title: "«Ожидание»", tech: "Холст, масло", size: "60 × 140", year: "", genre: ["kompoziciya"], place: [], season: ["zima"], status: "studio", w: 720, h: 345 },
  { n: 69, title: "«Песня. Пугачев»", tech: "Холст, масло", size: "91 × 130", year: "70-е гг.", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 507 },
  { n: 70, title: "Эскиз. «Работницы хлебопек. цеха»", tech: "", size: "87 × 124", year: "70-е гг.", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 504 },
  { n: 71, title: "«Утро. Семья. Соколиная гора»", tech: "Холст, масло", size: "150 × 100", year: "", genre: ["portret-semya", "kompoziciya"], place: [], season: [], status: "studio", w: 541, h: 720 },
  { n: 72, title: "«Работница хлебопекарного цеха»", tech: "Холст, масло", size: "59,2 × 80", year: "1957", genre: ["kompoziciya"], place: [], season: [], status: "studio", w: 720, h: 540 },
  { n: 73, title: "«У бабушки в гостях»", tech: "Холст, масло", size: "53 × 71", year: "1974", genre: ["portret-semya"], place: [], season: [], status: "studio", w: 720, h: 540 },
  { n: 74, title: "«Сад»", tech: "Холст, масло", size: "69 × 51", year: "ок. 1958", genre: ["peyzazh"], place: [], season: ["leto"], status: "studio", w: 720, h: 540 },
  { n: 75, title: "«Клязьма»", tech: "Холст, масло", size: "70 × 50", year: "1958", genre: ["peyzazh"], place: [], season: ["zima"], status: "studio", w: 720, h: 540 },
  { n: 76, title: "«Строительство моста во Владимире»", tech: "", size: "74 × 50", year: "1961", genre: ["kompoziciya"], place: ["hramy"], season: [], status: "studio", w: 720, h: 540 },
  { n: 77, title: "«На реке»", tech: "", size: "60,8 × 50,5", year: "1962", genre: ["kompoziciya"], place: [], season: ["leto"], status: "studio", w: 720, h: 602 }
];
