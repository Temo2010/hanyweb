export type TourCategory = "ancient" | "coptic" | "islamic" | "modern";

const ru_tours_items = [
  {
    title: "Изогнутая пирамида",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Изогнутая пирамида в Дахшуре",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Snefru%27s_Bent_Pyramid_in_Dahshur.jpg",
    shortDescription: "Пирамида с необычным изменяющимся углом наклона в некрополе Дахшур.",
    description:
      "• Дахшур, Египет — одна из самых известных пирамид с изменяющимся углом.\n• Построена при фараоне Снефру.\n• Уникальная форма делает её настоящей археологической находкой.",
  },
  {
    title: "Красная пирамида",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Красная пирамида в Дахшуре",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Red_Pyramid_in_Dahshur.jpg",
    shortDescription: "Одна из крупнейших пирамид Египта, построенная при фараоне Снефру.",
    description:
      "• Одна из крупнейших пирамид Египта.\n• Построена также при Снефру.\n• Основная достопримечательность некрополя Дахшур.",
  },
  {
    title: "Ступенчатая пирамида Джосера",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Ступенчатая пирамида в Саккаре",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pyramid_of_Djoser_%28Step_Pyramid%29_%2814613620207%29.jpg",
    shortDescription: "Первая пирамида Египта, заложившая основу для всех последующих построек.",
    description:
      "• Первая пирамида в истории Египта.\n• Построена для фараона Джосера.\n• Составила основу для всех последующих пирамид.",
  },
  {
    title: "Великая пирамида Гизы",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Великая пирамида Хуфу",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "Единственное сохранившееся чудо древнего мира, гробница фараона Хуфу.",
    description:
      "• Самая большая и знаменитая пирамида Египта.\n• Построена для фараона Хуфу.\n• Единственное из семи чудес древнего мира, сохранившееся до наших дней.",
  },
  {
    title: "Египетский музей",
    category: "ancient" as TourCategory,
    tags: ["Музей"],
    alt: "Египетский музей в Каире",
    image: "https://media.gettyimages.com/id/517052327/photo/egyptian-museum.jpg?s=612x612&w=0&k=20&c=jF4_oDG4V2eHJYrIZ_TynoJ_0xn2cZYhX3DiAb4m7iA=",
    shortDescription: "Крупнейшая коллекция древнеегипетских артефактов в центре Каира.",
    description:
      "• Один из важнейших музеев древнеегипетских артефактов.\n• Находится в центре Каира.\n• Идеальное место для знакомства с фараонской историей.",
  },
  {
    title: "Большой Египетский музей",
    category: "ancient" as TourCategory,
    tags: ["Музей"],
    alt: "Большой Египетский музей в Гизе",
    image: "https://www.artnews.com/wp-content/uploads/2025/01/Grand-Egyptian-Museum-Image-Copyright-Grand-Egyptian-Museum.png?w=1000&h=750&crop=1",
    shortDescription: "Новый современный музей рядом с пирамидами Гизы.",
    description:
      "• Современный музей рядом с пирамидами Гизы.\n• Посвящён древнеегипетской цивилизации.\n• Впечатляющая экспозиция и архитектура.",
  },
  {
    title: "Большой музей + пирамиды Гизы",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Большой музей и пирамиды Гизы",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "Комбинированный маршрут по величайшему музею и главной древней достопримечательности Египта.",
    description:
      "• Большой Египетский музей\n• Пирамиды Гизы\n• Идеальный маршрут для знакомства с древней цивилизацией и её современным представлением.",
  },
  {
    title: "Старый музей + пирамиды Гизы",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Старый музей и пирамиды Гизы",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Giza_pyramids%2C_Egypt_%282744339260%29.jpg",
    shortDescription: "Классический маршрут по старому музею и пирамидам Гизы.",
    description:
      "• Египетский музей (старый)\n• Пирамиды Гизы\n• Подходит для тех, кто хочет увидеть главные символы древнего Египта в одной программе.",
  },
  {
    title: "Саккара + Дахшур",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Саккара и Дахшур",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/330px-Saqqara_pyramid_ver_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    shortDescription: "Маршрут по ступенчатой пирамиде Джосера, Саккаре и некрополю Дахшур.",
    description:
      "• Саккара\n• Ступенчатая пирамида Джосера\n• Дахшур\n• Красная пирамида и изогнутая пирамида\n• Уникальный маршрут по раннему царскому периоду Египта.",
  },
  {
    title: "Мемфис",
    category: "ancient" as TourCategory,
    tags: ["Фараонский"],
    alt: "Мемфис — древняя столица Египта",
    image: "https://cdn.egyptatours.com/wp-content/uploads/2023/01/Secrets-About-Memphis-City-EgyptaTours.webp",
    shortDescription: "Древняя столица Египта с богатым археологическим наследием.",
    description:
      "• Древняя столица Египта.\n• Археологические руины возле современного Мит-Рахины.\n• Важный исторический центр раннего Египта.",
  },
  {
    title: "Древний Египет",
    category: "ancient" as TourCategory,
    tags: ["Древний Египет"],
    alt: "Древний Египет — музей и пирамиды",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Pyramids_of_Giza_from_Grand_Egyptian_Museum.jpg",
    shortDescription: "Комплексный тур по пирамидам и музеям древней цивилизации.",
    description:
      "• Большой Египетский музей + пирамиды Гизы\n• Египетский музей (старый) + пирамиды Гизы\n• Саккара + Дахшур\n• Конечно, есть и другие места, но пока они не включены в программу.",
  },
  {
    title: "Коптский и исламский Каир",
    category: "coptic" as TourCategory,
    tags: ["Коптский и исламский Каир"],
    alt: "Коптский и исламский Каир",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muhammad_Ali_Mosque-Egypt-Moschea_di_alabastro.jpg",
    shortDescription: "Путешествие по христианским и исламским святыням старого города.",
    description:
      "• Мечеть Амра ибн аль-Аса\n• Висячая церковь\n• Церковь Святого Георгия\n• Церковь Абу Серга\n• Синагога Бен-Эзра\n• Цитадель Салах ад-Дина\n• Мечеть Мухаммеда Али",
  },
  {
    title: "Только исламский Каир",
    category: "islamic" as TourCategory,
    tags: ["Только исламский Каир"],
    alt: "Только исламский Каир",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muizz_Street_-_Egypt.jpg",
    shortDescription: "Погружение в архитектуру мечетей и медресе средневекового Каира.",
    description:
      "• Мечети султана Хасана и аль-Рифаи\n• Улица Аль-Муизз, включая городские ворота\n• Мечеть аль-Акмар\n• Хаммам Инал\n• Сабиль Сулеймана Ага ас-Силахдара\n• Медресе султана Баркука\n• Комплекс Калауна\n• Медресе и мавзолей ас-Салиха Наджм ад-Дина Айюба\n• Рынок Хан эль-Халили\n• Нилометр на острове Рода",
  },
  {
    title: "Современный Каир",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Современный Каир",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_-_Downtown_-_Talaat_Harb_Square.JPG",
    shortDescription: "Знакомство с динамичной жизнью современной египетской столицы.",
    description:
      "• Современные районы Каира\n• Набережные Нила\n• Деловой центр и современные улицы\n• В программу можно добавить те места, которые вы хотите увидеть в современном Каире.",
  },
  {
    title: "Каирская башня",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Каирская башня на закате",
    image: "https://t3.ftcdn.net/jpg/03/34/32/00/360_F_334320028_QHcxtZgARmbt32SJmoXCOTurqFGlJela.jpg",
    shortDescription: "Символ города со смотровой площадкой над Нилом.",
    description:
      "• Символ современного Каира высотой 187 метров.\n• Смотровая площадка с круговой панорамой города и Нила.\n• Лучше всего посещать ближе к закату.",
  },
  {
    title: "Зоопарк Гизы",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Зоопарк в Гизе",
    image: "https://assets.cairo360.com/app/uploads/2025/05/08/Giza-Zoo.jpeg",
    shortDescription: "Один из старейших зоопарков Африки для семейного отдыха.",
    description:
      "• Один из старейших зоопарков Африки, основан в 1891 году.\n• Хорошее место для семейного дня с детьми.\n• Расположен рядом с центром Гизы.",
  },
  {
    title: "Дворец Абдин",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Дворец Абдин в центре Каира",
    image: "https://mediaim.expedia.com/destination/9/f276f080753ae35d91ddcabca5eddaad.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
    shortDescription: "Королевская резиденция XIX века с музейными коллекциями.",
    description:
      "• Королевская резиденция XIX века в центре Каира.\n• Сегодня частично открыт как музей с коллекциями оружия и наград.\n• Пример европейского дворцового стиля на египетской земле.",
  },
  {
    title: "Круиз по Нилу",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Круиз по Нилу вечером",
    image: "https://www.cruisemapper.com/images/ships/1184-d5ee692fada8d3ecac7570cff5dd23b6.jpg",
    shortDescription: "Вечерний ужин на теплоходе с музыкой и танцами.",
    description:
      "• Ужин на борту теплохода с видом на набережную Каира.\n• Часто сопровождается традиционными танцами и музыкой.\n• Хороший способ увидеть город с воды в вечернее время.",
  },
  {
    title: "Дворец принца Мухаммеда Али (Маниал)",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Дворец на острове Рода в Маниале",
    image: "https://egyptfuntours.com/wp-content/uploads/2024/09/Prince-Mohamed-Ali-Palace-Al-Manial-palace.jpeg",
    shortDescription: "Дворец на острове Рода со смешением архитектурных стилей.",
    description:
      "• Построен в начале XX века на острове Рода.\n• Смешение османского, мамлюкского, рококо и европейского стилей.\n• Окружён садом с редкими растениями.",
  },
  {
    title: "Нилометр на острове Рода",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Нилометр на острове Рода",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kairo_Nilometer_BW_1.jpg",
    shortDescription: "Древнее сооружение IX века для измерения уровня воды в Ниле.",
    description:
      "• Построен в 861 году на южной оконечности острова Рода.\n• Использовался для измерения уровня разлива Нила и расчёта налогов.\n• Один из старейших сохранившихся памятников исламского периода Египта.",
  },
  {
    title: "Дворец Барона Эмпена",
    category: "modern" as TourCategory,
    tags: ["Современный Каир"],
    alt: "Дворец Барона Эмпена в Гелиополисе",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Baron_palace_haddara.jpg",
    shortDescription: "Необычный особняк в стиле индуистских и кхмерских храмов.",
    description:
      "• Построен в 1911 году бельгийским промышленником Эдуардом Эмпеном.\n• Архитектура вдохновлена индуистскими и кхмерскими храмами.\n• Один из самых узнаваемых зданий района Гелиополис.",
  },
];

const uk_tours_items = [
  {
    title: "Ізгнута піраміда",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Ізгнута піраміда в Дахшурі",
    image: "https://www.thoughtco.com/thmb/gOm3U68SjZ7r5HRWbWfk3S-sNCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bent_pyramid-56a01f603df78cafdaa03845.jpg",
    shortDescription: "Піраміда з незвичним кутом нахилу в некрополі Дахшур.",
    description:
      "• Дахшур, Єгипет — одна з найвідоміших пірамід зі зміною кута.\n• Збудована за часів фараона Снефру.\n• Унікальна форма робить її справжньою археологічною знахідкою.",
  },
  {
    title: "Червона піраміда",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Червона піраміда в Дахшурі",
    image: "https://images.squarespace-cdn.com/content/v1/5f14d04ebd60fa3de12e3960/1618956476954-Q2X8EUE9IHDHYEZF8DNW/The+Red+Pyramid+Dahshur.png",
    shortDescription: "Одна з найбільших пірамід Єгипту, збудована за фараона Снефру.",
    description:
      "• Одна з найбільших пірамід Єгипту.\n• Побудована також за Снефру.\n• Основна пам'ятка некрополя Дахшур.",
  },
  {
    title: "Ступінчаста піраміда Джосера",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Ступінчаста піраміда в Саккарі",
    image: "https://www.travelverse.com/_next/image?url=https://s3.eu-central-1.amazonaws.com/other.projects.storage/travelverse/wikis/wiki15933797875ef90bcb2514e.jpg&w=3840&q=75",
    shortDescription: "Перша піраміда Єгипту, що заклала основу для всіх наступних споруд.",
    description:
      "• Перша піраміда в історії Єгипту.\n• Побудована для фараона Джосера.\n• Склала основу для всіх наступних пірамід.",
  },
  {
    title: "Велика піраміда Гізи",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Велика піраміда Хуфу",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "Єдине збережене чудо стародавнього світу, гробниця фараона Хуфу.",
    description:
      "• Найбільша і найвідоміша піраміда Єгипту.\n• Побудована для фараона Хуфу.\n• Єдина з семи чудес стародавнього світу, що збереглася.",
  },
  {
    title: "Єгипетський музей",
    category: "ancient" as TourCategory,
    tags: ["Музей"],
    alt: "Єгипетський музей у Каїрі",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Egyptian_Museum.jpg",
    shortDescription: "Найбільша колекція давньоєгипетських артефактів у центрі Каїра.",
    description:
      "• Одна з найважливіших колекцій стародавніх артефактів.\n• Розташована в центрі Каїра.\n• Ідеальне місце для знайомства з фараонською історією.",
  },
  {
    title: "Великий Єгипетський музей",
    category: "ancient" as TourCategory,
    tags: ["Музей"],
    alt: "Великий Єгипетський музей в Гізі",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grand_Egyptian_Museum_2025_%2832904%29.jpg",
    shortDescription: "Новий сучасний музей поруч із пірамідами Гізи.",
    description:
      "• Сучасний музей поряд з пірамідами Гізи.\n• Присвячений давньоєгипетській цивілізації.\n• Вражаюча експозиція та архітектура.",
  },
  {
    title: "Великий музей + піраміди Гізи",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Великий музей і піраміди Гізи",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "Комбінований маршрут по найвеличнішому музею та головній давній пам'ятці Єгипту.",
    description:
      "• Великий Єгипетський музей\n• Піраміди Гізи\n• Ідеальний маршрут для знайомства з давньою цивілізацією та її сучасним представленням.",
  },
  {
    title: "Старий музей + піраміди Гізи",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Старий музей і піраміди Гізи",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/All_pyramids_of_Giza_panorama_2.jpg",
    shortDescription: "Класичний маршрут по старому музею та пірамідам Гізи.",
    description:
      "• Єгипетський музей (старий)\n• Піраміди Гізи\n• Підходить для тих, хто хоче побачити головні символи давнього Єгипту в одній програмі.",
  },
  {
    title: "Саккара + Дахшур",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Саккара і Дахшур",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/330px-Saqqara_pyramid_ver_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    shortDescription: "Маршрут по ступінчастій піраміді Джосера, Саккарі та некрополю Дахшур.",
    description:
      "• Саккара\n• Ступінчаста піраміда Джосера\n• Дахшур\n• Червона піраміда та вигнута піраміда\n• Унікальний маршрут по ранньому царському періоду Єгипту.",
  },
  {
    title: "Мемфіс",
    category: "ancient" as TourCategory,
    tags: ["Фараонський"],
    alt: "Мемфіс — давня столиця Єгипту",
    image: "https://cdn.egyptatours.com/wp-content/uploads/2023/01/Secrets-About-Memphis-City-EgyptaTours.webp",
    shortDescription: "Давня столиця Єгипту з багатою археологічною спадщиною.",
    description:
      "• Давня столиця Єгипту.\n• Археологічні руїни біля сучасного Міт-Рахіни.\n• Важливий історичний центр раннього Єгипту.",
  },
  {
    title: "Стародавній Єгипет",
    category: "ancient" as TourCategory,
    tags: ["Стародавній Єгипет"],
    alt: "Стародавній Єгипет — музей і піраміди",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Pyramids_of_Giza_from_Grand_Egyptian_Museum.jpg",
    shortDescription: "Комплексний тур пірамідами та музеями давньої цивілізації.",
    description:
      "• Великий Єгипетський музей + піраміди Гізи\n• Єгипетський музей (старий) + піраміди Гізи\n• Саккара + Дахшур\n• Звісно, є й інші місця, але поки що вони не включені до програми.",
  },
  {
    title: "Коптський та ісламський Каїр",
    category: "coptic" as TourCategory,
    tags: ["Коптський та ісламський Каїр"],
    alt: "Коптський та ісламський Каїр",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muhammad_Ali_Mosque-Egypt-Moschea_di_alabastro.jpg",
    shortDescription: "Подорож християнськими та ісламськими святинями старого міста.",
    description:
      "• Мечеть Амра ібн аль-Аса\n• Висяча церква\n• Церква Святого Георгія\n• Церква Абу Серга\n• Синагога Бен-Езра\n• Цитадель Салах ад-Діна\n• Мечеть Мухаммеда Алі",
  },
  {
    title: "Лише ісламський Каїр",
    category: "islamic" as TourCategory,
    tags: ["Лише ісламський Каїр"],
    alt: "Лише ісламський Каїр",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muizz_Street_-_Egypt.jpg",
    shortDescription: "Занурення в архітектуру мечетей і медресе середньовічного Каїра.",
    description:
      "• Мечеті султана Хасана та аль-Ріфаі\n• Вулиця Аль-Муїзз, включно з міською брамою\n• Мечеть аль-Акмар\n• Хаммам Інал\n• Сабіль Сулеймана Аги ас-Сілахдара\n• Медресе султана Баркука\n• Комплекс Калавуна\n• Медресе і мавзолей ас-Саліха Наджм ад-Діна Айюба\n• Ринок Хан ель-Халілі\n• Нілометр на острові Рода",
  },
  {
    title: "Сучасний Каїр",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Сучасний Каїр",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_-_Downtown_-_Talaat_Harb_Square.JPG",
    shortDescription: "Знайомство з динамічним життям сучасної єгипетської столиці.",
    description:
      "• Сучасні райони Каїра\n• Набережні Нілу\n• Діловий центр і сучасні вулиці\n• До програми можна додати ті місця, які ви хочете побачити в сучасному Каїрі.",
  },
  {
    title: "Каїрська вежа",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Каїрська вежа на заході сонця",
    image: "https://t3.ftcdn.net/jpg/03/34/32/00/360_F_334320028_QHcxtZgARmbt32SJmoXCOTurqFGlJela.jpg",
    shortDescription: "Символ міста зі спостережним майданчиком над Нілом.",
    description:
      "• Символ сучасного Каїру заввишки 187 метрів.\n• Оглядовий майданчик з панорамою міста і Нілу.\n• Найкраще відвідувати ближче до заходу сонця.",
  },
  {
    title: "Зоопарк Гізи",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Зоопарк у Гізі",
    image: "https://assets.cairo360.com/app/uploads/2025/05/08/Giza-Zoo.jpeg",
    shortDescription: "Один із найстаріших зоопарків Африки для сімейного відпочинку.",
    description:
      "• Один з найстаріших зоопарків Африки, заснований 1891 року.\n• Гарне місце для родинного дня з дітьми.\n• Розташований поруч із центром Гізи.",
  },
  {
    title: "Палац Абдін",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Палац Абдін у центрі Каїра",
    image: "https://mediaim.expedia.com/destination/9/f276f080753ae35d91ddcabca5eddaad.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh",
    shortDescription: "Королівська резиденція XIX століття з музейними колекціями.",
    description:
      "• Королівська резиденція XIX століття в центрі Каїра.\n• Сьогодні частково відкритий як музей зі зброєю та нагородами.\n• Приклад європейського палацового стилю на єгипетській землі.",
  },
  {
    title: "Круїз по Нілу",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Круїз по Нілу увечері",
    image: "https://www.cruisemapper.com/images/ships/1184-d5ee692fada8d3ecac7570cff5dd23b6.jpg",
    shortDescription: "Вечірня вечеря на теплоході з музикою і танцями.",
    description:
      "• Вечеря на борту теплохода з видом на набережну Каїра.\n• Часто супроводжується традиційними танцями та музикою.\n• Гарний спосіб побачити місто з води увечері.",
  },
  {
    title: "Палац принца Мухаммада Алі (Маніал)",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Палац на острові Рода в Маніалі",
    image: "https://egyptfuntours.com/wp-content/uploads/2024/09/Prince-Mohamed-Ali-Palace-Al-Manial-palace.jpeg",
    shortDescription: "Палац на острові Рода зі змішанням архітектурних стилів.",
    description:
      "• Побудований на початку XX століття на острові Рода.\n• Поєднання османського, мамлюцького, рококо та європейського стилів.\n• Оточений садом з рідкісними рослинами.",
  },
  {
    title: "Нілометр на острові Рода",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Нілометр на острові Рода",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kairo_Nilometer_BW_1.jpg",
    shortDescription: "Стародавня споруда IX століття для вимірювання рівня води в Нілі.",
    description:
      "• Побудований 861 року на південній частині острова Рода.\n• Використовувався для вимірювання рівня розливу Нілу та розрахунку податків.\n• Одна з найстаріших збережених пам'яток ісламського періоду Єгипту.",
  },
  {
    title: "Палац Барона Емпена",
    category: "modern" as TourCategory,
    tags: ["Сучасний Каїр"],
    alt: "Палац Барона Емпена в Геліополісі",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Baron_palace_haddara.jpg",
    shortDescription: "Незвичайна садиба у стилі індуїстських і кхмерських храмів.",
    description:
      "• Побудований 1911 року бельгійським промисловцем Едуардом Емпеном.\n• Архітектура натхненна індуїстськими та кхмерськими храмами.\n• Одна з найупізнаваніших будівель району Геліополіс.",
  },
];

const en_tours_items = [
  {
    title: "Bent Pyramid",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Bent Pyramid at Dahshur",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Snefru%27s_Bent_Pyramid_in_Dahshur.jpg",
    shortDescription: "A uniquely shaped pyramid with a changing angle of inclination at the Dahshur necropolis.",
    description:
      "• Dahshur, Egypt — one of the most distinctive pyramids with its changing slope angle.\n• Built during the reign of Pharaoh Sneferu.\n• Its unique shape makes it a remarkable archaeological treasure.",
  },
  {
    title: "Red Pyramid",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Red Pyramid at Dahshur",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Red_Pyramid_in_Dahshur.jpg",
    shortDescription: "One of Egypt's largest pyramids, built by Pharaoh Sneferu at Dahshur.",
    description:
      "• One of the largest pyramids in Egypt.\n• Also built by Pharaoh Sneferu.\n• The main landmark of the Dahshur necropolis.",
  },
  {
    title: "Step Pyramid of Djoser, Saqqara",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Step Pyramid at Saqqara",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pyramid_of_Djoser_%28Step_Pyramid%29_%2814613620207%29.jpg",
    shortDescription: "Egypt's first pyramid, which set the blueprint for all that followed.",
    description:
      "• The first pyramid ever built in Egypt.\n• Constructed for Pharaoh Djoser.\n• The prototype for all subsequent Egyptian pyramids.",
  },
  {
    title: "Great Pyramid of Giza",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Great Pyramid of Khufu",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "The only surviving wonder of the ancient world — the tomb of Pharaoh Khufu.",
    description:
      "• The largest and most famous pyramid in Egypt.\n• Built for Pharaoh Khufu.\n• The only one of the Seven Wonders of the Ancient World still standing.",
  },
  {
    title: "Giza Pyramids",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Giza Pyramids plateau",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Giza_pyramids%2C_Egypt_%282744339260%29.jpg",
    shortDescription: "The full Giza plateau with Khufu, Khafre, and Menkaure pyramids.",
    description:
      "• Explore the iconic Giza Pyramid Complex.\n• Visit the three major pyramids and the surrounding necropolis.\n• A must-see destination in Pharaonic Cairo.",
  },
  {
    title: "Egyptian Museum, Tahrir",
    category: "ancient" as TourCategory,
    tags: ["Museum"],
    alt: "Egyptian Museum in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Egyptian_Museum.jpg",
    shortDescription: "The world's largest collection of ancient Egyptian artifacts, in the heart of Cairo.",
    description:
      "• One of the most important museums of ancient Egyptian artifacts.\n• Located in the heart of Cairo.\n• The ideal starting point for exploring pharaonic history.",
  },
  {
    title: "Grand Egyptian Museum",
    category: "ancient" as TourCategory,
    tags: ["Museum"],
    alt: "Grand Egyptian Museum in Giza",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grand_Egyptian_Museum_2025_%2832904%29.jpg",
    shortDescription: "A spectacular new museum right next to the Giza Pyramids.",
    description:
      "• A state-of-the-art museum adjacent to the Giza Pyramids.\n• Dedicated to ancient Egyptian civilization.\n• Stunning architecture and world-class exhibitions.",
  },
  {
    title: "National Museum of Egyptian Civilization",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic", "Museum"],
    alt: "National Museum of Egyptian Civilization",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/National_Museum_of_Egyptian_Civilization_2022_39.jpg",
    shortDescription: "A modern museum celebrating Egypt's civilization from prehistory through the Pharaonic era.",
    description:
      "• Home to the royal mummies and Egyptian cultural heritage.\n• Showcases artifacts from ancient to modern Egypt.\n• Located in Fustat near Old Cairo.",
  },
  {
    title: "Grand Museum + Giza Pyramids",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Grand Egyptian Museum and Giza Pyramids",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/01/great-pyramid-giza-image.jpg?width=1200&quality=100&dpr=2",
    shortDescription: "A combined tour of the world's greatest museum and Egypt's most iconic ancient site.",
    description:
      "• Grand Egyptian Museum\n• Giza Pyramids\n• The perfect route to experience ancient civilization and its modern presentation side by side.",
  },
  {
    title: "Old Museum + Giza Pyramids",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Egyptian Museum and Giza Pyramids",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/All_pyramids_of_Giza_panorama_2.jpg",
    shortDescription: "The classic Cairo route — the historic Egyptian Museum followed by the Giza Pyramids.",
    description:
      "• Egyptian Museum (old)\n• Giza Pyramids\n• Ideal for those who want to see Egypt's most iconic symbols in a single day.",
  },
  {
    title: "Saqqara + Dahshur",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Saqqara and Dahshur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/330px-Saqqara_pyramid_ver_2.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    shortDescription: "A journey through Djoser's Step Pyramid, Saqqara, and the Dahshur necropolis.",
    description:
      "• Saqqara\n• Step Pyramid of Djoser\n• Dahshur\n• Red Pyramid and Bent Pyramid\n• A unique route through Egypt's early royal period.",
  },
  {
    title: "Memphis",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Memphis — ancient capital of Egypt",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ruins_at_Mit_Rahina.jpg",
    shortDescription: "The ancient capital of Egypt, rich with archaeological heritage.",
    description:
      "• The ancient capital of Egypt.\n• Archaeological ruins near modern Mit Rahina.\n• An important historical centre of early Egypt.",
  },
  {
    title: "Mereruka's Tomb",
    category: "ancient" as TourCategory,
    tags: ["Pharaonic"],
    alt: "Mereruka's Tomb",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Saqqara%2C_Mereruka_1999_03.jpg",
    shortDescription: "The richly decorated tomb of the Old Kingdom vizier Mereruka in Saqqara.",
    description:
      "• One of the best-preserved private tombs of the Old Kingdom.\n• Famous for its vivid relief scenes of ancient life.\n• A unique glimpse into pharaonic court culture.",
  },
  {
    title: "Ancient Egypt",
    category: "ancient" as TourCategory,
    tags: ["Ancient Egypt"],
    alt: "Ancient Egypt — museum and pyramids",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Pyramids_of_Giza_from_Grand_Egyptian_Museum.jpg",
    shortDescription: "A comprehensive tour covering the pyramids and museums of ancient civilization.",
    description:
      "• Grand Egyptian Museum + Giza Pyramids\n• Egyptian Museum (old) + Giza Pyramids\n• Saqqara + Dahshur\n• There are other sites too, but they are not yet included in the programme.",
  },
  {
    title: "Coptic & Islamic Cairo",
    category: "coptic" as TourCategory,
    tags: ["Coptic & Islamic Cairo"],
    alt: "Coptic and Islamic Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muhammad_Ali_Mosque-Egypt-Moschea_di_alabastro.jpg",
    shortDescription: "A journey through the Christian and Islamic landmarks of Old Cairo.",
    description:
      "• Mosque of Amr ibn al-As\n• Hanging Church\n• Church of St George (Mari Girgis)\n• Church of Abu Serga\n• Ben Ezra Synagogue\n• Saladin Citadel\n• Mosque of Muhammad Ali",
  },
  {
    title: "Babylon Fortress & Religious Complex",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Babylon Fortress and religious complex",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Babylon_Fortress_%28Roman_Tower%29%2C_Old_Cairo%2C_Egypt1.jpg",
    shortDescription: "The ancient Babylon Fortress area with Coptic churches and historical ruins.",
    description:
      "• The historic Babylon Fortress in Old Cairo.\n• A cluster of Coptic churches and heritage sites.\n• The spiritual heart of Coptic Cairo.",
  },
  {
    title: "Hanging Church",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Hanging Church in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cairo%2C_Old_Cairo%2C_Hanging_Church%2C_Egypt%2C_Oct_2004_edit.jpg",
    shortDescription: "One of Cairo's most famous Coptic churches, built above a Roman fortress gate.",
    description:
      "• A historic Coptic church built on the Babylon Fortress gate.\n• Famous for its hanging nave and beautiful icons.\n• A key landmark in the Christian quarter.",
  },
  {
    title: "Saints Sergius & Bacchus Church (Abu Serga)",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Saints Sergius and Bacchus Church",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Saints_Sergius_and_Bacchus_Church_%28Abu_Serga%29.jpg",
    shortDescription: "One of the oldest Coptic churches, traditionally linked to the Holy Family.",
    description:
      "• Known as Abu Serga, dedicated to Saints Sergius and Bacchus.\n• Said to be built on the site where the Holy Family rested.\n• A quiet and sacred place in Coptic Cairo.",
  },
  {
    title: "Saint Barbara Church",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Saint Barbara Church in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cairo_-_Coptic_area_-_Church_of_Saint_Barbara_-_exterior.JPG",
    shortDescription: "A richly decorated Coptic church near the Hanging Church.",
    description:
      "• A smaller but beautiful church in Old Cairo.\n• Famous for its colourful icons and marble panels.\n• A peaceful stop on any Coptic Cairo walk.",
  },
  {
    title: "Saint George Church",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Saint George Church in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Church_of_St._George_%28Cairo%29.jpg",
    shortDescription: "A historic Coptic church dedicated to Saint George.",
    description:
      "• A landmark church in the Coptic quarter.\n• Renowned for its striking architecture and icons.\n• Often visited with the Hanging Church and Abu Serga.",
  },
  {
    title: "Ben Ezra Synagogue",
    category: "coptic" as TourCategory,
    tags: ["Coptic Cairo"],
    alt: "Ben Ezra Synagogue in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cairo_-_Coptic_area_-_Ben_Ezra_Synagogue.JPG",
    shortDescription: "A historic synagogue located in the heart of Coptic Cairo.",
    description:
      "• One of Cairo's oldest religious sites.\n• Known for its ancient scrolls and rich history.\n• A unique blend of Jewish and Coptic heritage.",
  },
  {
    title: "Islamic Cairo Only",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo Only"],
    alt: "Islamic Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muizz_Street_-_Egypt.jpg",
    shortDescription: "An immersive walk through the mosques and madrasas of medieval Cairo.",
    description:
      "• Mosques of Sultan Hassan and Al-Rifai\n• Al-Muizz Street, including the historic city gates\n• Al-Aqmar Mosque\n• Hammam Inal\n• Sabil of Suleiman Agha al-Silahdar\n• Madrasa of Sultan Barquq\n• Qalawun Complex\n• Madrasa and Mausoleum of Al-Salih Najm al-Din Ayyub\n• Khan el-Khalili Market\n• Nilometer on Rhoda Island",
  },
  {
    title: "Sultan Hassan Mosque",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Sultan Hassan Mosque",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sultan_Hassan_Mosque_-_Cairo.jpg",
    shortDescription: "A masterpiece of Mamluk architecture and one of Cairo's greatest mosques.",
    description:
      "• Built in the 14th century during the reign of Sultan Hassan.\n• Known for its towering interior and monumental proportions.\n• A centrepiece of Islamic Cairo.",
  },
  {
    title: "Al-Rifa'i Mosque",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Al-Rifa'i Mosque",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Al-Rifa%27i_Mosque_-_Cairo.jpg",
    shortDescription: "An ornate mausoleum and mosque next to Sultan Hassan.",
    description:
      "• Built in the 19th century and known for its lavish interior.\n• Contains royal tombs and richly carved decoration.\n• A key part of the historic Citadel area.",
  },
  {
    title: "Al-Muizz Street & gates",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Al-Muizz Street in Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Muizz_Street_-_Egypt.jpg",
    shortDescription: "The historic heart of Islamic Cairo, lined with monuments and gates.",
    description:
      "• Walk along one of the oldest streets in Cairo.\n• Discover medieval gates, mosques, and markets.\n• A living museum of Islamic architecture.",
  },
  {
    title: "Al-Aqmar Mosque",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Al-Aqmar Mosque",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Al-Aqmar_Mosque.jpg",
    shortDescription: "A small 12th-century mosque famous for its decorative facade.",
    description:
      "• Known for its carved stone facade and narrow vertical design.\n• Built during the Fatimid period.\n• A jewel of Islamic Cairo's historic streets.",
  },
  {
    title: "Hammam Inal",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Hammam Inal",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hamam_Inal_%2811%29.jpg",
    shortDescription: "A traditional bathhouse that preserves the Ottoman-era hammam experience.",
    description:
      "• A historic Egyptian hammam in the heart of Islamic Cairo.\n• Experience traditional architecture and bathing rituals.\n• A rare surviving example of the city's wellness heritage.",
  },
  {
    title: "Sabil Sulayman Agha al-Silahdar",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Sabil Sulayman Agha al-Silahdar",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/2%D8%B4%D8%A7%D8%B1%D8%B9_%D8%A7%D9%84%D9%85%D8%B9%D8%B2_%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D9%84%D9%87_%D8%A7%D9%84%D9%81%D8%A7%D8%B7%D9%85%D9%8A.jpg",
    shortDescription: "An elegant public fountain and street pavilion from the Mamluk era.",
    description:
      "• A historic sabil for supplying water to the public.\n• Noted for its fine stone decoration and inscription panels.\n• A quiet gem on the paths of Islamic Cairo.",
  },
  {
    title: "Sultan Barquq Madrasa",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Sultan Barquq Madrasa",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mosque-Madrassa_of_Sultan_Barquq_2019.jpg",
    shortDescription: "A historic madrasa built by Sultan Barquq in the late 14th century.",
    description:
      "• One of the oldest surviving madrasas in Cairo.\n• Known for its ornate faience tiles and monumental entrance.\n• A major site in the Qalawun complex.",
  },
  {
    title: "Qalawun Complex",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Qalawun Complex",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Qalawun_Complex_2019.jpg",
    shortDescription: "A monumental religious complex with a mosque, mausoleum, and hospital.",
    description:
      "• Built by Sultan Al-Nasir Qalawun in the 13th century.\n• Includes a mosque, a mausoleum and a medieval hospital.\n• A highlight of Cairo's Mamluk architecture.",
  },
  {
    title: "Al-Salih Najm al-Din Ayyub Madrasa & Dome",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Al-Salih Najm al-Din Ayyub Madrasa and Dome",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Door_leaf_from_the_madrasa_of_Sultan_al-Salih_Najm_al-Din_Ayyub%2C_Cairo%3B_Ayyubid%2C_12th_cent.%2C_Museum_of_Islamic_art%2C_Cairo_%282%29.jpg",
    shortDescription: "The madrasa and dome of one of Cairo's great medieval rulers.",
    description:
      "• A striking monument to Sultan Al-Salih Najm al-Din Ayyub.\n• Famous for its dome and richly decorated interior.\n• An important stop in historical Islamic Cairo.",
  },
  {
    title: "Khan el-Khalili",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Khan el-Khalili Market",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khan_El-Khalili.jpg",
    shortDescription: "Cairo's famous bazaar for spices, crafts, and local atmosphere.",
    description:
      "• A bustling market in the heart of historic Cairo.\n• Shop for souvenirs, lanterns, and local delicacies.\n• A vibrant cultural experience in Islamic Cairo.",
  },
  {
    title: "Salah al-Din Citadel",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Salah al-Din Citadel",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Citadel_of_Salah_El.Din.jpg",
    shortDescription: "The medieval fortress overlooking Cairo and its famous mosques.",
    description:
      "• Built by Saladin in the 12th century to secure the city.\n• Offers panoramic views of Cairo.\n• Home to several major mosques and museums.",
  },
  {
    title: "Muhammad Ali Mosque",
    category: "islamic" as TourCategory,
    tags: ["Islamic Cairo"],
    alt: "Muhammad Ali Mosque",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Muhammad_Ali_mosque%2C_Cairo_citadel_-_facade.jpg",
    shortDescription: "The alabaster mosque inside the Citadel and an icon of Cairo.",
    description:
      "• A landmark mosque built in the 19th century.\n• Known for its alabaster cladding and tall dome.\n• A major highlight of the Citadel complex.",
  },
  {
    title: "Modern Cairo",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Modern Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_-_Downtown_-_Talaat_Harb_Square.JPG",
    shortDescription: "Discover the vibrant energy of Egypt's modern capital.",
    description:
      "• Modern districts of Cairo\n• Nile corniche and waterfront\n• Downtown and contemporary streets\n• We can add any places you'd like to see in modern Cairo.",
  },
  {
    title: "Cairo Tower",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Cairo Tower at sunset",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cairo_Tower_Egypt.jpg",
    shortDescription: "The city's iconic landmark with a panoramic viewing deck over the Nile.",
    description:
      "• A symbol of modern Cairo standing 187 metres tall.\n• Panoramic observation deck with views over the city and the Nile.\n• Best visited around sunset.",
  },
  {
    title: "Giza Zoo",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Giza Zoo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Giza_Zoo.jpg",
    shortDescription: "One of Africa's oldest zoos — a great family day out.",
    description:
      "• One of the oldest zoos in Africa, founded in 1891.\n• A wonderful spot for a family day with children.\n• Located close to the centre of Giza.",
  },
  {
    title: "Abdeen Palace",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Abdeen Palace in central Cairo",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Abdeen_Palace.jpg",
    shortDescription: "A 19th-century royal residence with fascinating museum collections.",
    description:
      "• A 19th-century royal residence in the heart of Cairo.\n• Partly open today as a museum displaying weapons and royal decorations.\n• A fine example of European palace architecture on Egyptian soil.",
  },
  {
    title: "Nile Cruise",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Nile Cruise in the evening",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nilecruisegreencairo.png",
    shortDescription: "An evening dinner cruise on the Nile with music and traditional dance.",
    description:
      "• Dinner on board with views of the Cairo waterfront.\n• Often accompanied by traditional music and dance performances.\n• A beautiful way to see the city from the water at night.",
  },
  {
    title: "Manial Palace",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Manial Palace on Rhoda Island",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/CairoManialPalastEntrance.jpg",
    shortDescription: "A stunning palace on Rhoda Island blending multiple architectural styles.",
    description:
      "• Built in the early 20th century on Rhoda Island.\n• A blend of Ottoman, Mamluk, Rococo, and European styles.\n• Surrounded by a garden of rare plants.",
  },
  {
    title: "Nilometer",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Nilometer on Rhoda Island",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Nilometer%2C_Cairo%2C_Egypt.jpg",
    shortDescription: "A 9th-century structure used to measure the Nile's flood levels.",
    description:
      "• Built in 861 AD at the southern tip of Rhoda Island.\n• Used to measure the annual Nile flood and calculate taxes.\n• One of the oldest surviving monuments of Islamic Egypt.",
  },
  {
    title: "Baron Palace",
    category: "modern" as TourCategory,
    tags: ["Modern Cairo"],
    alt: "Baron Empain Palace in Heliopolis",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baron_Empain_Palace.jpg",
    shortDescription: "An extraordinary mansion inspired by Hindu and Khmer temple architecture.",
    description:
      "• Built in 1911 by Belgian industrialist Édouard Empain.\n• Architecture inspired by Hindu and Khmer temples.\n• One of the most distinctive buildings in the Heliopolis district.",
  },
];

type TourItem = {
  title: string;
  category: TourCategory;
  tags: string[];
  alt: string;
  image?: string;
  shortDescription: string;
  description: string;
};

type ExploreCategory = {
  id: "ancient" | "islamic" | "coptic" | "modern";
  name: string;
  desc: string;
  places: Array<{ name: string; note: string }>;
};

export type Content = {
  dir: "ltr" | "rtl";
  hero: {
    role: string;
    first: string;
    last: string;
    tagline: string;
    scroll: string;
  };
  profile: {
    aboutLabel: string;
    aboutBody: string;
    portraitAlt: string;
  };
  metrics: {
    heading: string;
    items: Array<{ label: string; value: string }>;
  };
  nav: {
    about: string;
    explore: string;
    tours: string;
    reviews: string;
    faq: string;
    book: string;
  };
  explore: {
    label: string;
    heading: string;
    intro: string;
    all: string;
    categories: ExploreCategory[];
  };
  tours: {
    label: string;
    heading: string;
    book: string;
    cta: string;
    items: TourItem[];
  };
  contact: {
    heading: string;
    direct: string;
    role: string;
    email: string;
    phone: string;
    form: {
      name: string;
      email: string;
      phone: string;
      budget: string;
      message: string;
      send: string;
      success: string;
    };
  };
  goal: {
    heading: string;
    intro: string;
    body: string;
    closing: string;
  };
  process: {
    heading: string;
    items: Array<{ title: string; desc: string }>;
  };
  reviews: {
    label: string;
    heading: string;
    average: string;
    based: string;
    loading: string;
    empty: string;
    prev: string;
    next: string;
    form: {
      title: string;
      rating: string;
      star: string;
      name: string;
      country: string;
      tour: string;
      comment: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      nameRequired: string;
      ratingRequired: string;
    };
  };
  clients: {
    heading: string;
    statement: string;
    miniName: string;
    miniRole: string;
    book: string;
    list: Array<{ name: string; year: string }>;
  };
  awards: {
    heading: string;
    storiesHeading: string;
    readMore: string;
    items: Array<{ name: string; note: string }>;
    stories: Array<{ meta: string; title: string }>;
  };
  faq: {
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  footer: {
    philosophy: string;
    navTitle: string;
    socialTitle: string;
    socials: Array<{ label: string; href: string }>;
    book: string;
    rights: string;
  };
};

export type Lang = "en" | "ru" | "uk";

export const content: Record<Lang, Content> = {
  en: {
    dir: "ltr",
    hero: {
      role: "Best Cairo Tour Guide",
      first: "Hany",
      last: "Ezzat",
      tagline: "Where every monument tells its own story.",
      scroll: "Scroll",
    },
    profile: {
      aboutLabel: "About Me",
      aboutBody: "Fifteen years of walking the same streets have taught me one thing: a great tour is not a list of monuments — it is pace, timing, and context. I help you experience Cairo not as a checklist of sights, but as a living city with history, character, and genuine human connection.",
      portraitAlt: "Portrait of Hany Ezzat",
    },
    metrics: {
      heading: "Experiences Worth Remembering",
      items: [
        { label: "happy clients", value: "20,000+" },
        { label: "languages", value: "2" },
        { label: "cities", value: "100+" },
        { label: "average rating", value: "4.9" },
      ],
    },
    nav: {
      about: "About",
      explore: "Explore Cairo",
      tours: "Tours",
      reviews: "Reviews",
      faq: "FAQ",
      book: "Book Now",
    },
    explore: {
      label: "Cairo Through the Ages",
      heading: "Cairo in Four Eras",
      intro: "Each district reveals its own story, from ancient pyramids to the pulse of modern city life.",
      all: "All Eras",
      categories: [
        {
          id: "ancient",
          name: "Pharaonic Cairo",
          desc: "Pyramids, treasures, and the grandeur of the pharaohs.",
          places: [
            { name: "Giza Pyramids", note: "Symbols of eternity" },
            { name: "Step Pyramid of Djoser, Saqqara", note: "The first royal tomb" },
            { name: "Bent Pyramid", note: "Unique changing-angle pyramid" },
            { name: "Red Pyramid", note: "The first successful true pyramid" },
            { name: "Grand Egyptian Museum", note: "Modern pharaonic galleries" },
            { name: "Egyptian Museum, Tahrir", note: "Classic Egyptology landmark" },
            { name: "National Museum of Egyptian Civilization", note: "Royal mummies and Egyptian culture" },
            { name: "Memphis", note: "The ancient capital" },
            { name: "Mereruka's Tomb", note: "An Old Kingdom masterpiece" },
          ],
        },
        {
          id: "islamic",
          name: "Islamic Cairo",
          desc: "Mosques, madrasas, and the streets of a medieval city.",
          places: [
            { name: "Sultan Hassan Mosque", note: "Mamluk architectural marvel" },
            { name: "Al-Rifa'i Mosque", note: "Lavish royal mosque" },
            { name: "Al-Muizz Street & gates", note: "Historic urban artery" },
            { name: "Al-Aqmar Mosque", note: "Famous decorative facade" },
            { name: "Hammam Inal", note: "Traditional Ottoman bath" },
            { name: "Sabil Sulayman Agha al-Silahdar", note: "Elegant public fountain" },
            { name: "Sultan Barquq Madrasa", note: "Medieval Qur'anic school" },
            { name: "Qalawun Complex", note: "Monumental Mamluk ensemble" },
            { name: "Al-Salih Najm al-Din Ayyub Madrasa & Dome", note: "Striking medieval mausoleum" },
            { name: "Khan el-Khalili", note: "Bazaar and atmosphere" },
            { name: "Salah al-Din Citadel", note: "Historic fortress" },
            { name: "Muhammad Ali Mosque", note: "Alabaster landmark of the Citadel" },
          ],
        },
        {
          id: "coptic",
          name: "Coptic Cairo",
          desc: "Christian shrines, ancient quarters, and spiritual heritage.",
          places: [
            { name: "Babylon Fortress & Religious Complex", note: "Historic Coptic stronghold" },
            { name: "Hanging Church", note: "Famous suspended nave" },
            { name: "Saints Sergius & Bacchus Church (Abu Serga)", note: "Holy Family tradition" },
            { name: "Saint Barbara Church", note: "Intimate and decorative chapel" },
            { name: "Saint George Church", note: "Historic church of the Coptic quarter" },
            { name: "Ben Ezra Synagogue", note: "Ancient Jewish heritage site" },
          ],
        },
        {
          id: "modern",
          name: "Modern Cairo",
          desc: "Skyscrapers, museums, and the city as it lives today.",
          places: [
            { name: "Cairo Tower", note: "Panoramic city views" },
            { name: "Giza Zoo", note: "A family-friendly green escape" },
            { name: "Abdeen Palace", note: "Historic royal residence" },
            { name: "Nile Cruise", note: "Evening river city views" },
            { name: "Manial Palace", note: "Riverside historic mansion" },
            { name: "Nilometer", note: "Ancient Nile water gauge" },
            { name: "Baron Palace", note: "Architectural fantasy in Heliopolis" },
          ],
        },
      ],
    },
    tours: {
      label: "Featured Tours",
      heading: "Choose Your Tour",
      book: "Book with Hany",
      cta: "Private Tours",
      items: en_tours_items,
    },
    contact: {
      heading: "Plan Your Tour",
      direct: "Get in Touch Directly",
      role: "Licensed Egypt Tour Guide",
      email: "hany.ezzat@gmail.com",
      phone: "+201001307944",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        budget: "Budget",
        message: "Message",
        send: "Send",
        success: "Thank you! I will get back to you shortly.",
      },
    },
    goal: {
      heading: "My Goal",
      intro: "More than just a tour…",
      body: "History is not merely a collection of ancient stones or magnificent monuments. It is the story of people — their beliefs, ambitions, conflicts, and ideas that shaped civilizations.\n\nEvery tour I lead is designed to go beyond the visual beauty of a place. We explore the historical events, religious influences, political circumstances, and social realities that surrounded each monument, revealing how all these elements came together to create the Egypt we admire today.\n\nRather than simply describing what you see, you will understand why it was built, who built it, what challenges they faced, and how history, religion, and politics shaped every detail.\n\nThe result is a rich, immersive experience that transforms each monument into a living story — one that will stay with you long after your journey ends.\n\nDiscover historic Cairo from a different perspective… one that inspires curiosity, understanding, and unforgettable memories.",
      closing: "Discover historic Cairo from a different perspective…",
    },
    process: {
      heading: "How It Works",
      items: [
        { title: "Choosing the Route", desc: "We discuss your interests and select the most suitable itinerary together." },
        { title: "Preparing the Details", desc: "We agree on timing, transport, meals, and any special requests." },
        { title: "The Tour Itself", desc: "I lead the tour with clear explanations and flexibility as we go." },
        { title: "After the Tour", desc: "I remain available for any follow-up questions or recommendations." },
      ],
    },
    reviews: {
      label: "Reviews",
      heading: "Words That Truly Matter",
      average: "Average Rating",
      based: "based on",
      loading: "Loading reviews…",
      empty: "No reviews yet.",
      prev: "Previous",
      next: "Next",
      form: {
        title: "Leave a Review",
        rating: "Rating",
        star: "star",
        name: "Name",
        country: "Country",
        tour: "Tour",
        comment: "Comment",
        submit: "Submit Review",
        sending: "Sending…",
        success: "Thank you for your review!",
        error: "Failed to submit review.",
        nameRequired: "Please enter your name.",
        ratingRequired: "Please select a rating.",
      },
    },
    clients: {
      heading: "Travellers from Around the World",
      statement: "Every tour is crafted so you feel Cairo not as a list of sights, but as a living, breathing city.",
      miniName: "Hany Ezzat",
      miniRole: "Licensed Guide",
      book: "Private Tours",
      list: [
        { name: "Germany", year: "2024" },
        { name: "USA", year: "2024" },
        { name: "France", year: "2023" },
        { name: "Canada", year: "2023" },
      ],
    },
    awards: {
      heading: "Recognition & Experience",
      storiesHeading: "Why Choose This Tour",
      readMore: "Read More",
      items: [
        { name: "Licensed & Knowledgeable", note: "Officially registered guide" },
        { name: "Years of Experience", note: "Working across languages and groups" },
        { name: "Flexible Itinerary", note: "Tailored to you" },
      ],
      stories: [
        { meta: "Story 01", title: "A route built around your pace" },
        { meta: "Story 02", title: "Clear, engaging explanations at every stop" },
        { meta: "Story 03", title: "Comfort and safety throughout the tour" },
      ],
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "Do I need to book in advance?", a: "Yes — especially in peak season. I recommend booking a few days or even weeks ahead to secure your preferred time and a personalised itinerary." },
        { q: "Can the tour be customised?", a: "Absolutely. We tailor the programme to your interests, pace, and preferences. Every tour can be adapted to suit you." },
        { q: "Is the tour suitable for families with children?", a: "Yes. Tours can be adapted for families, taking into account pace, duration, and ease of movement for children." },
        { q: "What should I bring?", a: "Comfortable shoes, a hat, water, and light clothing are recommended. If you plan to visit religious sites, bring modest clothing that covers shoulders and knees." },
        { q: "Can the tour be conducted in English?", a: "Yes — I guide in English, Russian, and German, depending on your preference." },
      ],
    },
    footer: {
      philosophy: "I help travellers see Cairo as a living city — with character, history, and calm woven into every route.",
      navTitle: "Navigation",
      socialTitle: "Contact",
      socials: [
        { label: "Instagram", href: "https://instagram.com/hani.ezzat" },
        { label: "WhatsApp", href: "https://wa.me/201001307944" },
      ],
      book: "Private Tours",
      rights: "All rights reserved",
    },
  },
  ru: {
    dir: "ltr",
    hero: {
      role: "Лучший гид по Каиру",
      first: "Хани",
      last: "Эззат",
      tagline: "Где каждый памятник рассказывает свою историю.",
      scroll: "Прокрутить",
    },
    profile: {
      aboutLabel: "Обо мне",
      aboutBody: "Хани Эззат родился в Каире в 1980 году. Имеет степень бакалавра искусств в области туристического гида с отличием. С 2002 по 2015 год работал гидом в туристических компаниях в Шарм-эль-Шейхе и Хургаде, затем с 2017 года по настоящее время работает гидом в Каире и Александрии.",
      portraitAlt: "Портрет Хани Эззата",
    },
    metrics: {
      heading: "Впечатления, которые стоит запомнить",
      items: [
        { label: "счастливых клиентов", value: "20,000+" },
        { label: "языков", value: "2" },
        { label: "городов", value: "100+" },
        { label: "средняя оценка", value: "4.9" },
      ],
    },
    nav: {
      about: "Обо мне",
      explore: "Исследовать Каир",
      tours: "Туры",
      reviews: "Отзывы",
      faq: "FAQ",
      book: "Забронировать",
    },
    explore: {
      label: "Каирские эпохи",
      heading: "Каир в четырех эпохах",
      intro: "Каждый район раскрывает свою историю, от древних пирамид до современной городской жизни.",
      all: "Все эпохи",
      categories: [
        {
          id: "ancient",
          name: "Древний Египет",
          desc: "Пирамиды, сокровища и величие фараонов.",
          places: [
            { name: "Пирамиды Гизы", note: "Символы вечности" },
            { name: "Ступенчатая пирамида в Саккаре", note: "Первый каменный монумент человечества" },
            { name: "Ломаная пирамида", note: "Уникальная переходная форма пирамиды" },
            { name: "Красная пирамида", note: "Одна из первых правильных пирамид" },
            { name: "Большой Египетский музей", note: "Современный музей древностей" },
            { name: "Египетский музей на площади Тахрир", note: "Собрание древних артефактов" },
            { name: "Национальный музей египетской цивилизации", note: "Современная история Египта" },
            { name: "Мемфис и гробница Мереруки", note: "Ранний некрополь с выдающимися гробницами" },
          ],
        },
        {
          id: "islamic",
          name: "Исламский Каир",
          desc: "Мечети, медресе и улицы средневекового города.",
          places: [
            { name: "Султан Хасан и ар-Рифаи", note: "Две соседние исторические мечети" },
            { name: "Улица Аль-Муизз", note: "Сердце исламского Каира" },
            { name: "Ворота Аль-Муизз", note: "Вход в старый квартал" },
            { name: "Мечеть Аль-Акмар", note: "Яркий пример мамлюкской архитектуры" },
            { name: "Хаммам Ийнал", note: "Традиционная баня" },
            { name: "Сабиль Сулеймана-аги ас-Силахдара", note: "Фонтаны благоденствия" },
            { name: "Медресе султана Баркука", note: "Мусульманская школа с богатой историей" },
            { name: "Комплекс Калауна", note: "Мавзолей и медресе XIII века" },
            { name: "Медресе и купол ас-Салиха Наджм ад-Дина Айюба", note: "Уникальный архитектурный ансамбль" },
            { name: "Рынок Хан-эль-Халили", note: "Знаменитый bazaar восточного рынка" },
            { name: "Цитадель Салах ад-Дина", note: "Исторический форпост" },
            { name: "Мечеть Мухаммеда Али", note: "Величественная мечеть внутри цитадели" },
          ],
        },
        {
          id: "coptic",
          name: "Коптский Каир",
          desc: "Христианские святыни, старые кварталы и духовное наследие.",
          places: [
            { name: "Вавилонская крепость и Комплекс религий", note: "Исторический центр коптского Каира" },
            { name: "Висячая церковь", note: "Одна из самых известных" },
            { name: "Церковь Святых Сергия и Вакха — Абу-Серга", note: "Древняя христианская церковь" },
            { name: "Церковь Святой Варвары", note: "Рядом с Абу-Серга" },
            { name: "Церковь Святого Георгия", note: "Старинный христианский храм" },
            { name: "Синагога Бен-Эзра", note: "Один из старейших памятников города" },
          ],
        },
        {
          id: "modern",
          name: "Современный Каир",
          desc: "Небоскребы, музеи и городская жизнь сегодня.",
          places: [
            { name: "Каирская башня", note: "Панорамный вид на город" },
            { name: "Зоопарк", note: "Семейный отдых среди животных" },
            { name: "Дворец Абдин", note: "Исторический королевский дворец" },
            { name: "Прогулка по Нилу", note: "Речное путешествие по ночному Каиру" },
            { name: "Дворец Мухаммеда Али в Маниле", note: "Арабско-мавританская роскошь" },
            { name: "Нилометр", note: "Исторический водный монитор" },
            { name: "Дворец Барона", note: "Архитектурная жемчужина Гелиополиса" },
          ],
        },
      ],
    },
    tours: {
      label: "Избранные экскурсии",
      heading: "Выберите экскурсию",
      book: "Забронировать у Хани",
      cta: "Индивидуальные экскурсии",
      items: ru_tours_items,
    },
    contact: {
      heading: "Планируйте свою экскурсию",
      direct: "Напишите напрямую",
      role: "Лицензированный гид по Египту",
      email: "hany.ezzat@gmail.com",
      phone: "+201001307944",
      form: {
        name: "Имя",
        email: "Email",
        phone: "Телефон",
        budget: "Бюджет",
        message: "Сообщение",
        send: "Отправить",
        success: "Спасибо! Я свяжусь с вами в ближайшее время.",
      },
    },
    goal: {
      heading: "Моя цель",
      intro: "Больше, чем просто экскурсия…",
      body: "История — это не просто собрание древних камней или величественных памятников. Это история людей, их верований, амбиций, конфликтов и идей, которые сформировали цивилизации.\n\nКаждая экскурсия разработана таким образом, чтобы выйти за рамки визуальной красоты мест. Мы исследуем исторические события, религиозные влияния, политические обстоятельства и социальные реалии, окружавшие каждый памятник, раскрывая, как эти элементы объединились, чтобы создать тот Египет, которым мы восхищаемся сегодня.\n\nВместо того чтобы просто описывать увиденное, вы поймете, почему это было построено, кто это построил, с какими трудностями они столкнулись и как история, религия и политика повлияли на каждую деталь.\n\nВ результате вы получаете богатый, захватывающий опыт, который превращает каждый памятник в живую историю — историю, которая останется с вами надолго после окончания вашего путешествия.\n\nОткройте для себя исторический Каир с другой точки зрения… с той, которая вдохновляет на любопытство, понимание и незабываемые воспоминания.",
      closing: "Откройте для себя исторический Каир с другой точки зрения…",
    },
    process: {
      heading: "Как проходит поездка",
      items: [
        { title: "Подбор маршрута", desc: "Обсуждаем ваши интересы и выбираем наиболее подходящий маршрут." },
        { title: "Подготовка деталей", desc: "Согласуем время, транспорт, питание и особые пожелания." },
        { title: "Экскурсия в реальном времени", desc: "Я провожу поездку с понятными пояснениями и гибкостью по ходу." },
        { title: "Поддержка после тура", desc: "Остаюсь на связи для любых вопросов и рекомендаций." },
      ],
    },
    reviews: {
      label: "Отзывы",
      heading: "Слова, которые действительно важны",
      average: "Средняя оценка",
      based: "основе",
      loading: "Загрузка отзывов…",
      empty: "Пока нет отзывов.",
      prev: "Назад",
      next: "Вперёд",
      form: {
        title: "Оставить отзыв",
        rating: "Оценка",
        star: "звезда",
        name: "Имя",
        country: "Страна",
        tour: "Тур",
        comment: "Комментарий",
        submit: "Отправить отзыв",
        sending: "Отправка…",
        success: "Спасибо за отзыв!",
        error: "Не удалось отправить отзыв.",
        nameRequired: "Пожалуйста, укажите имя.",
        ratingRequired: "Пожалуйста, выберите оценку.",
      },
    },
    clients: {
      heading: "Путешественники из разных стран",
      statement: "Каждая поездка строится так, чтобы чувствовать Каир не как набор достопримечательностей, а как живой город.",
      miniName: "Хани Эззат",
      miniRole: "Лицензированный гид",
      book: "Индивидуальные экскурсии",
      list: [
        { name: "Германия", year: "2024" },
        { name: "США", year: "2024" },
        { name: "Франция", year: "2023" },
        { name: "Канада", year: "2023" },
      ],
    },
    awards: {
      heading: "Признание и опыт",
      storiesHeading: "Почему выбирают эту экскурсию",
      readMore: "Подробнее",
      items: [
        { name: "Лицензия и знания", note: "Официально зарегистрированный гид" },
        { name: "Многолетний опыт", note: "Работа с разными языками и группами" },
        { name: "Гибкий маршрут", note: "Подстраивается под вас" },
      ],
      stories: [
        { meta: "История 01", title: "Подбор маршрута под ваш темп" },
        { meta: "История 02", title: "Понятные пояснения в каждом месте" },
        { meta: "История 03", title: "Комфорт и безопасность на протяжении тура" },
      ],
    },
    faq: {
      heading: "Частые вопросы",
      items: [
        { q: "Нужна ли предварительная бронь?", a: "Да, лучше заранее, особенно в высокий сезон. Я рекомендую бронировать за несколько дней или даже недель, чтобы гарантировать удобное время и персональный маршрут." },
        { q: "Можно ли изменить экскурсию?", a: "Да, мы подстраиваем программу под ваши интересы, темп и пожелания. Экскурсия всегда может быть адаптирована под ваши предпочтения." },
        { q: "Подходит ли экскурсия для семей с детьми?", a: "Да, экскурсии можно адаптировать под семью, включая детей, с учетом темпа, продолжительности и удобства перемещений." },
        { q: "Нужно ли брать с собой что-то особенное?", a: "Рекомендую удобную обувь, головной убор, воду и лёгкую одежду. Если вы планируете посещать религиозные места, лучше иметь закрытую одежду." },
        { q: "Можно ли заказать экскурсию на русском или английском?", a: "Да, я провожу экскурсии на русском, английском и немецком языках, в зависимости от вашего предпочтения." },
      ],
    },
    footer: {
      philosophy: "Я помогаю путешественникам видеть Каир как живой город с характером, историей и спокойствием в каждом маршруте.",
      navTitle: "Навигация",
      socialTitle: "Контакты",
      socials: [
        { label: "Instagram", href: "https://instagram.com/hani.ezzat" },
        { label: "WhatsApp", href: "https://wa.me/201001307944" },
      ],
      book: "Индивидуальные экскурсии",
      rights: "Все права защищены",
    },
  },
  uk: {
    dir: "ltr",
    hero: {
      role: "Найкращий гід по Каїру",
      first: "Гані",
      last: "Еззат",
      tagline: "Де кожен пам'ятник розповідає свою історію.",
      scroll: "Прокрутити",
    },
    profile: {
      aboutLabel: "Про мене",
      aboutBody: "П'ятнадцять років прогулянок тими самими вулицями навчили мене одного: хороша екскурсія — це не список пам'яток, а темп, час і контекст. Я допомагаю вам відчути Каїр не як набір пам'яток, а як живе місто з історією, характером і людським контактом.",
      portraitAlt: "Портрет Гані Еззата",
    },
    metrics: {
      heading: "Враження, які варто запам'ятати",
      items: [
        { label: "щасливих клієнтів", value: "20,000+" },
        { label: "мов", value: "2" },
        { label: "міст", value: "100+" },
        { label: "середня оцінка", value: "4.9" },
      ],
    },
    nav: {
      about: "Про мене",
      explore: "Досліджувати Каїр",
      tours: "Тури",
      reviews: "Відгуки",
      faq: "FAQ",
      book: "Забронювати",
    },
    explore: {
      label: "Каїрські епохи",
      heading: "Каїр у чотирьох епохах",
      intro: "Кожен район розкриває свою історію, від давніх пірамід до сучасного міського життя.",
      all: "Усі епохи",
      categories: [
        {
          id: "ancient",
          name: "Стародавній Єгипет",
          desc: "Піраміди, скарби й велич фараонів.",
          places: [
            { name: "Піраміди Гізи", note: "Символи вічності" },
            { name: "Саккара і Дахшур", note: "Ранні царські некрополі" },
            { name: "Мемфіс", note: "Стародавня столиця" },
          ],
        },
        {
          id: "islamic",
          name: "Ісламський Каїр",
          desc: "Мечеті, медресе та вулиці середньовічного міста.",
          places: [
            { name: "Вулиця Аль-Муїзз", note: "Класичний ісламський квартал" },
            { name: "Цитадель Салах ад-Діна", note: "Історичний форпост" },
            { name: "Хан ель-Халілі", note: "Базар і атмосфера" },
          ],
        },
        {
          id: "coptic",
          name: "Коптський Каїр",
          desc: "Християнські святині, старі квартали та духовна спадщина.",
          places: [
            { name: "Висяча церква", note: "Одна з найвідоміших" },
            { name: "Церква Святого Георгія", note: "Стара християнська святиня" },
            { name: "Синагога Бен-Езра", note: "Один із найстаріших пам'ятників міста" },
          ],
        },
        {
          id: "modern",
          name: "Сучасний Каїр",
          desc: "Хмарочоси, музеї та сучасне міське життя.",
          places: [
            { name: "Каїрська вежа", note: "Панорамний вигляд на місто" },
            { name: "Великий Єгипетський музей", note: "Сучасна експозиція" },
            { name: "Ніл і набережні", note: "Вечірній круїз" },
          ],
        },
      ],
    },
    tours: {
      label: "Обрані екскурсії",
      heading: "Оберіть екскурсію",
      book: "Забронювати у Гані",
      cta: "Індивідуальні екскурсії",
      items: uk_tours_items,
    },
    contact: {
      heading: "Плануйте свою екскурсію",
      direct: "Напишіть напряму",
      role: "Ліцензований гід по Єгипту",
      email: "hany.ezzat@gmail.com",
      phone: "+201001307944",
      form: {
        name: "Ім'я",
        email: "Email",
        phone: "Телефон",
        budget: "Бюджет",
        message: "Повідомлення",
        send: "Надіслати",
        success: "Дякую! Я зв'яжуся з вами найближчим часом.",
      },
    },
    goal: {
      heading: "Моя мета",
      intro: "Більше, ніж просто екскурсія…",
      body: "Історія — це не просто зібрання давніх каменів або величних пам'яток. Це історія людей, їхніх вірувань, амбіцій, конфліктів і ідей, які сформували цивілізації.\n\nКожна екскурсія розроблена так, щоб вийти за межі візуальної краси місць. Ми досліджуємо історичні події, релігійні впливи, політичні обставини та соціальні реалії, що оточували кожен пам'ятник, розкриваючи, як ці елементи об'єдналися, щоб створити той Єгипет, яким ми захоплюємося сьогодні.\n\nЗамість того щоб просто описувати побачене, ви зрозумієте, чому це було побудовано, хто це побудував, з якими труднощами вони зіткнулися і як історія, релігія та політика вплинули на кожну деталь.\n\nУ результаті ви отримуєте багатий, захопливий досвід, який перетворює кожен пам'ятник на живу історію — історію, яка залишиться з вами надовго після закінчення вашої подорожі.\n\nВідкрийте для себе історичний Каїр з іншої точки зору… з тієї, яка надихає на цікавість, розуміння і незабутні враження.",
      closing: "Відкрийте для себе історичний Каїр з іншої точки зору…",
    },
    process: {
      heading: "Як проходить подорож",
      items: [
        { title: "Підбір маршруту", desc: "Обговорюємо ваші інтереси й обираємо найкращий маршрут." },
        { title: "Підготовка деталей", desc: "Узгоджуємо час, транспорт, харчування та особливі побажання." },
        { title: "Екскурсія в реальному часі", desc: "Я проваджу подорож із зрозумілими поясненнями і гнучкістю в процесі." },
        { title: "Підтримка після туру", desc: "Залишаюсь на зв'язку для будь-яких питань і рекомендацій." },
      ],
    },
    reviews: {
      label: "Відгуки",
      heading: "Слова, що справді мають значення",
      average: "Середня оцінка",
      based: "основі",
      loading: "Завантаження відгуків…",
      empty: "Поки що немає відгуків.",
      prev: "Назад",
      next: "Уперед",
      form: {
        title: "Залишити відгук",
        rating: "Оцінка",
        star: "зірка",
        name: "Ім'я",
        country: "Країна",
        tour: "Тур",
        comment: "Коментар",
        submit: "Надіслати відгук",
        sending: "Надсилання…",
        success: "Дякую за відгук!",
        error: "Не вдалося надіслати відгук.",
        nameRequired: "Будь ласка, вкажіть ім'я.",
        ratingRequired: "Будь ласка, оберіть оцінку.",
      },
    },
    clients: {
      heading: "Мандрівники з різних країн",
      statement: "Кожна подорож будується так, щоб відчувати Каїр не як набір пам'яток, а як живе місто.",
      miniName: "Гані Еззат",
      miniRole: "Ліцензований гід",
      book: "Індивідуальні екскурсії",
      list: [
        { name: "Німеччина", year: "2024" },
        { name: "США", year: "2024" },
        { name: "Франція", year: "2023" },
        { name: "Канада", year: "2023" },
      ],
    },
    awards: {
      heading: "Визнання та досвід",
      storiesHeading: "Чому обирають цю екскурсію",
      readMore: "Детальніше",
      items: [
        { name: "Ліцензія та знання", note: "Офіційно зареєстрований гід" },
        { name: "Багаторічний досвід", note: "Робота з різними мовами та групами" },
        { name: "Гнучкий маршрут", note: "Підлаштовується під вас" },
      ],
      stories: [
        { meta: "Історія 01", title: "Підбір маршруту під ваш темп" },
        { meta: "Історія 02", title: "Зрозумілі пояснення в кожному місці" },
        { meta: "Історія 03", title: "Комфорт і безпека під час туру" },
      ],
    },
    faq: {
      heading: "Поширені питання",
      items: [
        { q: "Чи потрібне попереднє бронювання?", a: "Так, краще заздалегідь, особливо в сезон пік. Я рекомендую бронювати за кілька днів або навіть тижнів, щоб гарантувати зручний час і персональний маршрут." },
        { q: "Чи можна змінити екскурсію?", a: "Так, ми підлаштовуємо програму під ваші інтереси, темп і побажання. Екскурсія завжди може бути адаптована під ваші уподобання." },
        { q: "Чи підходить екскурсія для сімей з дітьми?", a: "Так, екскурсії можна адаптувати під сім'ю, включно з дітьми, з урахуванням темпу, тривалості та зручності переміщень." },
        { q: "Чи потрібно брати з собою щось особливе?", a: "Рекомендую зручне взуття, головний убір, воду та легкий одяг. Якщо плануєте відвідувати релігійні місця, краще мати закритий одяг." },
        { q: "Чи можна замовити екскурсію російською або англійською?", a: "Так, я провожу екскурсії російською, англійською та німецькою мовами, залежно від вашого вподобання." },
      ],
    },
    footer: {
      philosophy: "Я допомагаю мандрівникам бачити Каїр як живе місто з характером, історією і спокоєм у кожному маршруті.",
      navTitle: "Навігація",
      socialTitle: "Контакти",
      socials: [
        { label: "Instagram", href: "https://instagram.com/hani.ezzat" },
        { label: "WhatsApp", href: "https://wa.me/201001307944" },
      ],
      book: "Індивідуальні екскурсії",
      rights: "Усі права захищені",
    },
  },
};

export const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Рус" },
  { code: "uk", label: "Українська" },
] as const;

export { ru_tours_items, uk_tours_items, en_tours_items };
