export type Lang = "en" | "ar" | "de";

export type Content = {
  dir: "ltr" | "rtl";
  nav: { about: string; explore: string; tours: string; reviews: string; faq: string; contact: string; book: string };
  hero: { role: string; tagline: string; scroll: string };
  profile: {
    location: string; locationV: string;
    field: string; fieldV: string;
    approach: string; approachV: string;
    guests: string; guestsV: string;
    aboutLabel: string; aboutHeading: string; aboutBody: string; statement: string;
    portraitAlt: string;
  };
  metrics: { heading: string; items: { value: string; label: string }[] };
  explore: {
    label: string; heading: string; intro: string; all: string;
    categories: { id: string; name: string; desc: string; places: { name: string; note: string }[] }[];
  };
  tours: { label: string; heading: string; cta: string; items: { title: string; tags: string[]; alt: string }[] };
  services: { heading: string; intro: string; items: { title: string; desc: string; tags: string[] }[] };
  reviews: {
    label: string; heading: string; empty: string; average: string; based: string; loading: string;
    form: {
      title: string; name: string; country: string; tour: string; rating: string; comment: string;
      submit: string; sending: string; success: string; error: string; ratingRequired: string; nameRequired: string;
      star: string;
    };
  };
  clients: { heading: string; statement: string; miniName: string; miniRole: string; book: string; list: { name: string; year: string }[] };
  process: { heading: string; items: { title: string; desc: string }[] };
  awards: {
    heading: string; items: { name: string; note: string }[];
    storiesHeading: string; stories: { title: string; meta: string }[]; readMore: string;
  };
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    heading: string; role: string; email: string; phone: string;
    form: { name: string; email: string; phone: string; budget: string; message: string; send: string; success: string };
  };
  footer: { philosophy: string; navTitle: string; socialTitle: string; book: string; rights: string };
};

const en: Content = {
  dir: "ltr",
  nav: { about: "About", explore: "Cairo", tours: "Tours", reviews: "Reviews", faq: "FAQ", contact: "Contact", book: "Book a call" },
  hero: { role: "Licensed Tour Guide — Egypt", tagline: "Cairo, told properly.", scroll: "Scroll" },
  profile: {
    location: "Location", locationV: "Cairo, Egypt",
    field: "Field", fieldV: "Guiding & Egyptology",
    approach: "Approach", approachV: "Fewer stops, deeper stories",
    guests: "Guests", guestsV: "Families & Independent Travellers",
    aboutLabel: "• About",
    aboutHeading: "I am Hani Ezzat, a licensed Egyptian guide turning four thousand years of Cairo into a day you actually understand.",
    aboutBody:
      "Fifteen years walking the same streets taught me that a good tour is not a list of monuments. It is pacing, timing and context — knowing which gate to enter at nine, which courtyard is empty at noon, and which story makes a stone wall suddenly make sense.",
    statement: "Arabic, English and German. Ancient, Coptic, Islamic and modern Cairo — in one clear thread.",
    portraitAlt: "Portrait of Hani Ezzat, licensed Egyptian tour guide",
  },
  metrics: {
    heading: "The city is loud. A good guide makes it legible.",
    items: [
      { value: "15+", label: "Years guiding" },
      { value: "2,400+", label: "Guests hosted" },
      { value: "3", label: "Languages spoken" },
      { value: "4.9", label: "Average rating" },
    ],
  },
  explore: {
    label: "• All you can visit in Cairo",
    heading: "Four Cairos, one city",
    intro: "Cairo is layered rather than linear. Choose the layer you want to walk through — or combine them across two or three days.",
    all: "All",
    categories: [
      {
        id: "ancient", name: "Ancient Egypt", desc: "Pyramids, tombs and the world before writing settled down.",
        places: [
          { name: "Pyramids of Giza & the Sphinx", note: "Half day · early start" },
          { name: "Saqqara & the Step Pyramid", note: "Half day" },
          { name: "Dahshur — Bent & Red Pyramids", note: "Quiet alternative" },
          { name: "Memphis Open-Air Museum", note: "1 hour" },
          { name: "Grand Egyptian Museum", note: "Full morning" },
          { name: "Egyptian Museum, Tahrir", note: "2–3 hours" },
        ],
      },
      {
        id: "islamic", name: "Islamic Cairo", desc: "Fatimid gates, Mamluk domes and a thousand years of craft.",
        places: [
          { name: "Al-Muizz Street", note: "Best at golden hour" },
          { name: "Sultan Hassan & Al-Rifa'i Mosques", note: "1.5 hours" },
          { name: "Mosque of Ibn Tulun", note: "Rooftop minaret" },
          { name: "The Citadel of Salah al-Din", note: "Half day" },
          { name: "Khan el-Khalili & Al-Azhar", note: "Evening walk" },
          { name: "Bab Zuweila", note: "Climb for the skyline" },
        ],
      },
      {
        id: "coptic", name: "Christian Cairo", desc: "The Holy Family's route, hanging churches and quiet crypts.",
        places: [
          { name: "The Hanging Church", note: "45 minutes" },
          { name: "Church of St. Sergius & Bacchus", note: "Crypt of the Holy Family" },
          { name: "Coptic Museum", note: "1.5 hours" },
          { name: "Ben Ezra Synagogue", note: "Same quarter" },
          { name: "Cave Church, Mokattam", note: "Half day" },
          { name: "St. Simon Monastery", note: "Panoramic" },
        ],
      },
      {
        id: "modern", name: "Modern Cairo", desc: "Belle-époque downtown, the Nile at night, and where the city eats.",
        places: [
          { name: "Downtown & Talaat Harb", note: "Walking tour" },
          { name: "Felucca sail on the Nile", note: "Sunset · 1 hour" },
          { name: "Zamalek galleries", note: "Afternoon" },
          { name: "Al-Azhar Park", note: "Best city view" },
          { name: "Cairo food walk", note: "Evening" },
          { name: "New Administrative Capital", note: "Day trip" },
        ],
      },
    ],
  },
  tours: {
    label: "• Selected days",
    heading: "Showcase",
    cta: "See all itineraries",
    items: [
      { title: "Giza at First Light", tags: ["Pyramids", "Sphinx", "Camel option"], alt: "Sphinx and pyramid at sunrise" },
      { title: "Old Cairo Thread", tags: ["Coptic", "Islamic", "Walking"], alt: "Coptic church interior in Old Cairo" },
      { title: "Al-Muizz After Dark", tags: ["Islamic", "Bazaar", "Photography"], alt: "Lanterns in Khan el-Khalili bazaar" },
      { title: "Museum Deep Dive", tags: ["Egyptology", "GEM", "Private"], alt: "Egyptian museum gallery with statues" },
      { title: "Nile & Nightfall", tags: ["Felucca", "Food", "Downtown"], alt: "Felucca sailing on the Nile at sunset" },
    ],
  },
  services: {
    heading: "Days built around you, not a bus timetable",
    intro: "Every itinerary is private and adjusted on the morning of the tour — for the weather, the crowds and how much walking you actually feel like.",
    items: [
      { title: "Private Day Tours", desc: "One city, one car, one guide. Giza, Saqqara, Old Cairo or a mix, at your pace.", tags: ["Private car", "Entry tickets", "Hotel pickup"] },
      { title: "Multi-Day Itineraries", desc: "Three to ten days across Cairo, Luxor, Aswan and the Red Sea, planned end to end.", tags: ["Trains & flights", "Hotels", "Full planning"] },
      { title: "Family & Kids Programs", desc: "Shorter distances, real stories, and enough breaks to keep everyone happy.", tags: ["Flexible pace", "Snack stops", "Games"] },
      { title: "Photography & Culture Walks", desc: "Light-led routes through markets, rooftops and courtyards most visitors miss.", tags: ["Golden hour", "Local access", "Small groups"] },
    ],
  },
  reviews: {
    label: "• Guest ratings",
    heading: "Words that carry weight",
    empty: "No reviews yet — be the first to rate a day with Hani.",
    average: "Average rating",
    based: "based on",
    loading: "Loading reviews…",
    form: {
      title: "Rate your tour",
      name: "Your name", country: "Country", tour: "Which tour?", rating: "Your rating", comment: "Your review",
      submit: "Submit rating", sending: "Sending…", success: "Thank you — your review is live.", error: "Something went wrong. Please try again.",
      ratingRequired: "Please select a rating.", nameRequired: "Please enter your name.", star: "star",
    },
  },
  clients: {
    heading: "Trusted by travellers and partners",
    statement: "Regular work with boutique agencies, hotels and independent travellers who care more about substance than souvenirs.",
    miniName: "Hani Ezzat", miniRole: "Licensed guide · Ministry of Tourism",
    book: "Book a call",
    list: [
      { name: "Nile Boutique Travel", year: "2013" },
      { name: "Marriott Mena House", year: "2015" },
      { name: "Wanderlust Berlin", year: "2016" },
      { name: "Cairo Photo Collective", year: "2018" },
      { name: "Sahara Expeditions", year: "2019" },
      { name: "Kemet Cultural Tours", year: "2021" },
      { name: "Levant & Nile Journeys", year: "2023" },
      { name: "Atlas Family Travel", year: "2024" },
    ],
  },
  process: {
    heading: "How a day with me works",
    items: [
      { title: "Talk first", desc: "A short call or message: what you want to see, how you travel, who is coming." },
      { title: "Plan the route", desc: "I build the order around light, crowds and prayer times — not around a fixed brochure." },
      { title: "Walk it together", desc: "Private transport, tickets handled, stories told where they actually happened." },
      { title: "Stay in touch", desc: "Restaurant notes, next-city advice and photos sent after you leave." },
    ],
  },
  awards: {
    heading: "Recognition & credentials",
    items: [
      { name: "Ministry of Tourism License", note: "Egyptology · Cat. A" },
      { name: "TripAdvisor Travellers' Choice", note: "2022 · 2023" },
      { name: "Egyptian Tourist Guides Syndicate", note: "Member since 2011" },
      { name: "Faculty of Archaeology, Cairo Univ.", note: "BA Egyptology" },
    ],
    storiesHeading: "Stories behind the stones",
    stories: [
      { title: "Why the pyramids look smaller in photographs", meta: "Giza · 6 min read" },
      { title: "Reading a Mamluk facade in five minutes", meta: "Islamic Cairo · 4 min read" },
      { title: "The Holy Family's route through Old Cairo", meta: "Coptic Cairo · 7 min read" },
    ],
    readMore: "Read more stories",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      { q: "How do I book a tour?", a: "Send a message with your dates and interests. I reply within 24 hours with a suggested route and a clear price. A small deposit confirms the day." },
      { q: "How long is a typical day?", a: "Most private days run six to eight hours, including transport. Half days of three to four hours are available, and multi-day itineraries are built to your rhythm." },
      { q: "Are entry tickets and transport included?", a: "Transport with a private air-conditioned car and driver is included. Entry tickets can be included in the quote or paid on site — your choice." },
      { q: "Which languages do you guide in?", a: "Arabic, English and German. Written material and messages can be provided in any of the three." },
      { q: "Is it suitable for children or older guests?", a: "Yes. Routes are shortened, shaded and paced accordingly, with rest and food stops built in." },
      { q: "What should I wear and bring?", a: "Comfortable closed shoes, a hat, sunscreen and water. For mosques and churches, shoulders and knees covered; a scarf for women is helpful." },
      { q: "Can you plan trips outside Cairo?", a: "Yes — Luxor, Aswan, Alexandria, the White Desert and Red Sea are all regular additions, with trains and domestic flights arranged." },
      { q: "How does pricing work?", a: "Pricing is per group, not per person, and depends on the day length and distance. You get one number in writing before you commit." },
    ],
  },
  contact: {
    heading: "Planning a trip to Egypt?",
    role: "Licensed Tour Guide · Cairo",
    email: "hello@haniezzat.com",
    phone: "+20 100 123 4567",
    form: {
      name: "Name", email: "Email", phone: "Phone", budget: "Group size / budget", message: "Tell me about your trip",
      send: "Send request", success: "Thanks — I'll get back to you within 24 hours.",
    },
  },
  footer: {
    philosophy: "A day in Cairo should leave you with a story, not a checklist.",
    navTitle: "Navigate", socialTitle: "Elsewhere", book: "Book a call",
    rights: "All rights reserved.",
  },
};

const ar: Content = {
  dir: "rtl",
  nav: { about: "نبذة", explore: "القاهرة", tours: "الجولات", reviews: "التقييمات", faq: "أسئلة", contact: "تواصل", book: "احجز مكالمة" },
  hero: { role: "مرشد سياحي مرخّص — مصر", tagline: "القاهرة… كما ينبغي أن تُروى.", scroll: "انزل" },
  profile: {
    location: "الموقع", locationV: "القاهرة، مصر",
    field: "التخصص", fieldV: "الإرشاد وعلم المصريات",
    approach: "الأسلوب", approachV: "محطات أقل، حكايات أعمق",
    guests: "الضيوف", guestsV: "العائلات والمسافرون المستقلون",
    aboutLabel: "• نبذة",
    aboutHeading: "أنا هاني عزت، مرشد مصري مرخّص أحوّل أربعة آلاف عام من تاريخ القاهرة إلى يوم تفهمه فعلاً.",
    aboutBody:
      "خمسة عشر عاماً في الشوارع نفسها علّمتني أن الجولة الجيدة ليست قائمة آثار، بل إيقاع وتوقيت وسياق: أي بوابة تدخل منها التاسعة صباحاً، وأي فناء يكون خالياً وقت الظهيرة، وأي حكاية تجعل جداراً حجرياً يبدو مفهوماً فجأة.",
    statement: "بالعربية والإنجليزية والألمانية. مصر القديمة والقبطية والإسلامية والحديثة في خيط واحد واضح.",
    portraitAlt: "صورة لهاني عزت، مرشد سياحي مصري مرخّص",
  },
  metrics: {
    heading: "المدينة صاخبة… والمرشد الجيد يجعلها مقروءة.",
    items: [
      { value: "+15", label: "عاماً في الإرشاد" },
      { value: "+2,400", label: "ضيف" },
      { value: "3", label: "لغات" },
      { value: "4.9", label: "متوسط التقييم" },
    ],
  },
  explore: {
    label: "• كل ما يمكنك زيارته في القاهرة",
    heading: "أربع قاهرات في مدينة واحدة",
    intro: "القاهرة طبقات لا خط مستقيم. اختر الطبقة التي تريد السير فيها، أو اجمع بينها على مدى يومين أو ثلاثة.",
    all: "الكل",
    categories: [
      {
        id: "ancient", name: "مصر القديمة", desc: "الأهرامات والمقابر وعالم ما قبل التاريخ المكتوب.",
        places: [
          { name: "أهرامات الجيزة وأبو الهول", note: "نصف يوم · بداية مبكرة" },
          { name: "سقارة والهرم المدرج", note: "نصف يوم" },
          { name: "دهشور — الهرم المنحني والأحمر", note: "بديل هادئ" },
          { name: "متحف ميت رهينة المفتوح", note: "ساعة" },
          { name: "المتحف المصري الكبير", note: "صباح كامل" },
          { name: "المتحف المصري بالتحرير", note: "٢–٣ ساعات" },
        ],
      },
      {
        id: "islamic", name: "القاهرة الإسلامية", desc: "بوابات فاطمية وقباب مملوكية وألف عام من الحِرَف.",
        places: [
          { name: "شارع المعز", note: "الأفضل وقت الغروب" },
          { name: "مسجدا السلطان حسن والرفاعي", note: "ساعة ونصف" },
          { name: "مسجد ابن طولون", note: "المئذنة الملوية" },
          { name: "قلعة صلاح الدين", note: "نصف يوم" },
          { name: "خان الخليلي والأزهر", note: "جولة مسائية" },
          { name: "باب زويلة", note: "اصعد لرؤية المدينة" },
        ],
      },
      {
        id: "coptic", name: "القاهرة المسيحية", desc: "مسار العائلة المقدسة والكنائس المعلّقة والأقبية الهادئة.",
        places: [
          { name: "الكنيسة المعلقة", note: "٤٥ دقيقة" },
          { name: "كنيسة أبي سرجة", note: "قبو العائلة المقدسة" },
          { name: "المتحف القبطي", note: "ساعة ونصف" },
          { name: "معبد بن عزرا", note: "الحي نفسه" },
          { name: "كنيسة الكهف بالمقطم", note: "نصف يوم" },
          { name: "دير سمعان الخراز", note: "إطلالة بانورامية" },
        ],
      },
      {
        id: "modern", name: "القاهرة الحديثة", desc: "وسط البلد والنيل ليلاً ومطاعم المدينة الحقيقية.",
        places: [
          { name: "وسط البلد وطلعت حرب", note: "جولة سير" },
          { name: "فلوكة في النيل", note: "الغروب · ساعة" },
          { name: "جاليريهات الزمالك", note: "بعد الظهر" },
          { name: "حديقة الأزهر", note: "أفضل إطلالة" },
          { name: "جولة أكل قاهرية", note: "مساءً" },
          { name: "العاصمة الإدارية الجديدة", note: "رحلة يوم" },
        ],
      },
    ],
  },
  tours: {
    label: "• أيام مختارة",
    heading: "الجولات",
    cta: "شاهد كل البرامج",
    items: [
      { title: "الجيزة عند أول الضوء", tags: ["الأهرامات", "أبو الهول", "ركوب الجمل"], alt: "أبو الهول والهرم عند الشروق" },
      { title: "خيط القاهرة القديمة", tags: ["قبطي", "إسلامي", "سيراً"], alt: "كنيسة قبطية في مصر القديمة" },
      { title: "المعز بعد الغروب", tags: ["إسلامي", "خان الخليلي", "تصوير"], alt: "فوانيس في خان الخليلي" },
      { title: "يوم في المتاحف", tags: ["مصريات", "المتحف الكبير", "خاص"], alt: "قاعة تماثيل في المتحف المصري" },
      { title: "النيل وحلول الليل", tags: ["فلوكة", "أكل", "وسط البلد"], alt: "فلوكة تبحر في النيل وقت الغروب" },
    ],
  },
  services: {
    heading: "أيام مبنية عليك، لا على جدول أتوبيس",
    intro: "كل برنامج خاص ويُعدَّل صباح الجولة حسب الطقس والزحام وقدرتك على المشي.",
    items: [
      { title: "جولات يومية خاصة", desc: "مدينة واحدة، سيارة واحدة، مرشد واحد — بإيقاعك أنت.", tags: ["سيارة خاصة", "التذاكر", "التوصيل من الفندق"] },
      { title: "برامج متعددة الأيام", desc: "من ٣ إلى ١٠ أيام بين القاهرة والأقصر وأسوان والبحر الأحمر.", tags: ["قطارات وطيران", "فنادق", "تخطيط كامل"] },
      { title: "برامج العائلات والأطفال", desc: "مسافات أقصر وحكايات حقيقية واستراحات كافية.", tags: ["إيقاع مرن", "محطات طعام", "ألعاب"] },
      { title: "جولات التصوير والثقافة", desc: "مسارات تتبع الضوء عبر الأسواق والأسطح والأفنية.", tags: ["ساعة ذهبية", "أماكن محلية", "مجموعات صغيرة"] },
    ],
  },
  reviews: {
    label: "• تقييمات الضيوف",
    heading: "كلمات لها وزن",
    empty: "لا توجد تقييمات بعد — كن أول من يقيّم يوماً مع هاني.",
    average: "متوسط التقييم",
    based: "بناءً على",
    loading: "جارٍ تحميل التقييمات…",
    form: {
      title: "قيّم جولتك",
      name: "اسمك", country: "الدولة", tour: "أي جولة؟", rating: "تقييمك", comment: "رأيك",
      submit: "أرسل التقييم", sending: "جارٍ الإرسال…", success: "شكراً لك — تم نشر تقييمك.", error: "حدث خطأ، حاول مرة أخرى.",
      ratingRequired: "اختر تقييماً من فضلك.", nameRequired: "اكتب اسمك من فضلك.", star: "نجمة",
    },
  },
  clients: {
    heading: "شركاء ومسافرون",
    statement: "عمل منتظم مع وكالات صغيرة وفنادق ومسافرين يهتمون بالمضمون أكثر من التذكارات.",
    miniName: "هاني عزت", miniRole: "مرشد مرخّص · وزارة السياحة",
    book: "احجز مكالمة",
    list: [
      { name: "Nile Boutique Travel", year: "2013" },
      { name: "Marriott Mena House", year: "2015" },
      { name: "Wanderlust Berlin", year: "2016" },
      { name: "Cairo Photo Collective", year: "2018" },
      { name: "Sahara Expeditions", year: "2019" },
      { name: "Kemet Cultural Tours", year: "2021" },
      { name: "Levant & Nile Journeys", year: "2023" },
      { name: "Atlas Family Travel", year: "2024" },
    ],
  },
  process: {
    heading: "كيف يسير اليوم معي",
    items: [
      { title: "نتحدث أولاً", desc: "مكالمة قصيرة أو رسالة: ما تريد رؤيته، وكيف تسافر، ومن معك." },
      { title: "نرسم المسار", desc: "أرتب المحطات حسب الضوء والزحام ومواقيت الصلاة، لا حسب كتيّب جاهز." },
      { title: "نمشيه معاً", desc: "مواصلات خاصة وتذاكر جاهزة وحكايات تُروى في مكانها." },
      { title: "نبقى على تواصل", desc: "ترشيحات مطاعم ونصائح للمدينة التالية وصور بعد سفرك." },
    ],
  },
  awards: {
    heading: "اعتمادات وتقديرات",
    items: [
      { name: "ترخيص وزارة السياحة", note: "مصريات · فئة أ" },
      { name: "اختيار المسافرين TripAdvisor", note: "٢٠٢٢ · ٢٠٢٣" },
      { name: "نقابة المرشدين السياحيين", note: "عضو منذ ٢٠١١" },
      { name: "كلية الآثار — جامعة القاهرة", note: "بكالوريوس مصريات" },
    ],
    storiesHeading: "حكايات خلف الحجر",
    stories: [
      { title: "لماذا تبدو الأهرامات أصغر في الصور", meta: "الجيزة · ٦ دقائق" },
      { title: "كيف تقرأ واجهة مملوكية في خمس دقائق", meta: "القاهرة الإسلامية · ٤ دقائق" },
      { title: "مسار العائلة المقدسة في مصر القديمة", meta: "القاهرة القبطية · ٧ دقائق" },
    ],
    readMore: "اقرأ المزيد",
  },
  faq: {
    heading: "الأسئلة الشائعة",
    items: [
      { q: "كيف أحجز جولة؟", a: "أرسل رسالة بتواريخك واهتماماتك، وأرد خلال ٢٤ ساعة بمسار مقترح وسعر واضح. عربون صغير يؤكد الحجز." },
      { q: "كم يستغرق اليوم عادة؟", a: "معظم الأيام الخاصة من ٦ إلى ٨ ساعات شاملة التنقل، مع إمكانية نصف يوم من ٣ إلى ٤ ساعات." },
      { q: "هل التذاكر والمواصلات مشمولة؟", a: "المواصلات بسيارة خاصة مكيفة مع سائق مشمولة، والتذاكر إما ضمن العرض أو تُدفع في الموقع حسب رغبتك." },
      { q: "بأي لغات ترشد؟", a: "العربية والإنجليزية والألمانية، والمواد المكتوبة متاحة بالثلاث." },
      { q: "هل يناسب الأطفال وكبار السن؟", a: "نعم. تُقصَّر المسارات وتُختار الأماكن المظللة مع استراحات ووجبات." },
      { q: "ماذا ألبس وأحضر؟", a: "حذاء مريح مغلق وقبعة وواقي شمس وماء. وللمساجد والكنائس: تغطية الأكتاف والركبتين، ووشاح للسيدات." },
      { q: "هل تخطط رحلات خارج القاهرة؟", a: "نعم — الأقصر وأسوان والإسكندرية والصحراء البيضاء والبحر الأحمر، مع ترتيب القطارات والطيران الداخلي." },
      { q: "كيف يتم التسعير؟", a: "السعر للمجموعة لا للفرد، ويعتمد على طول اليوم والمسافة، ويصلك مكتوباً قبل التأكيد." },
    ],
  },
  contact: {
    heading: "تخطط لرحلة إلى مصر؟",
    role: "مرشد سياحي مرخّص · القاهرة",
    email: "hello@haniezzat.com",
    phone: "+20 100 123 4567",
    form: {
      name: "الاسم", email: "البريد الإلكتروني", phone: "الهاتف", budget: "عدد الأفراد / الميزانية", message: "احكِ لي عن رحلتك",
      send: "أرسل الطلب", success: "شكراً — سأرد عليك خلال ٢٤ ساعة.",
    },
  },
  footer: {
    philosophy: "يوم في القاهرة يجب أن يترك لك حكاية، لا قائمة مهام.",
    navTitle: "تنقل", socialTitle: "تابعني", book: "احجز مكالمة",
    rights: "جميع الحقوق محفوظة.",
  },
};

const de: Content = {
  dir: "ltr",
  nav: { about: "Über mich", explore: "Kairo", tours: "Touren", reviews: "Bewertungen", faq: "FAQ", contact: "Kontakt", book: "Gespräch buchen" },
  hero: { role: "Lizenzierter Reiseleiter — Ägypten", tagline: "Kairo, richtig erzählt.", scroll: "Scrollen" },
  profile: {
    location: "Ort", locationV: "Kairo, Ägypten",
    field: "Fach", fieldV: "Führungen & Ägyptologie",
    approach: "Haltung", approachV: "Weniger Stopps, tiefere Geschichten",
    guests: "Gäste", guestsV: "Familien & Individualreisende",
    aboutLabel: "• Über mich",
    aboutHeading: "Ich bin Hani Ezzat, lizenzierter ägyptischer Guide, und mache aus viertausend Jahren Kairo einen Tag, den Sie wirklich verstehen.",
    aboutBody:
      "Fünfzehn Jahre in denselben Gassen haben mich gelehrt: Eine gute Tour ist keine Liste von Monumenten. Sie ist Rhythmus, Timing und Kontext — welches Tor man um neun nimmt, welcher Hof mittags leer ist und welche Geschichte eine Steinmauer plötzlich verständlich macht.",
    statement: "Arabisch, Englisch und Deutsch. Das antike, koptische, islamische und moderne Kairo — an einem klaren Faden.",
    portraitAlt: "Porträt von Hani Ezzat, lizenzierter ägyptischer Reiseleiter",
  },
  metrics: {
    heading: "Die Stadt ist laut. Ein guter Guide macht sie lesbar.",
    items: [
      { value: "15+", label: "Jahre Erfahrung" },
      { value: "2.400+", label: "Gäste begleitet" },
      { value: "3", label: "Sprachen" },
      { value: "4,9", label: "Durchschnitt" },
    ],
  },
  explore: {
    label: "• Alles, was Sie in Kairo sehen können",
    heading: "Vier Kairos, eine Stadt",
    intro: "Kairo ist geschichtet, nicht linear. Wählen Sie die Schicht, durch die Sie gehen möchten — oder kombinieren Sie sie über zwei bis drei Tage.",
    all: "Alle",
    categories: [
      {
        id: "ancient", name: "Altes Ägypten", desc: "Pyramiden, Gräber und die Welt vor der Schrift.",
        places: [
          { name: "Pyramiden von Gizeh & Sphinx", note: "Halbtag · früher Start" },
          { name: "Saqqara & Stufenpyramide", note: "Halbtag" },
          { name: "Dahschur — Knick- & Rote Pyramide", note: "Ruhige Alternative" },
          { name: "Freilichtmuseum Memphis", note: "1 Stunde" },
          { name: "Grand Egyptian Museum", note: "Ganzer Vormittag" },
          { name: "Ägyptisches Museum, Tahrir", note: "2–3 Stunden" },
        ],
      },
      {
        id: "islamic", name: "Islamisches Kairo", desc: "Fatimidische Tore, mamlukische Kuppeln, tausend Jahre Handwerk.",
        places: [
          { name: "Al-Muizz-Straße", note: "Am besten im Abendlicht" },
          { name: "Sultan-Hassan- & Al-Rifa'i-Moschee", note: "1,5 Stunden" },
          { name: "Ibn-Tulun-Moschee", note: "Spiralminarett" },
          { name: "Zitadelle von Saladin", note: "Halbtag" },
          { name: "Khan el-Khalili & Al-Azhar", note: "Abendspaziergang" },
          { name: "Bab Zuweila", note: "Aufstieg zur Skyline" },
        ],
      },
      {
        id: "coptic", name: "Christliches Kairo", desc: "Der Weg der Heiligen Familie, hängende Kirchen, stille Krypten.",
        places: [
          { name: "Die Hängende Kirche", note: "45 Minuten" },
          { name: "Sergius-und-Bacchus-Kirche", note: "Krypta der Heiligen Familie" },
          { name: "Koptisches Museum", note: "1,5 Stunden" },
          { name: "Ben-Ezra-Synagoge", note: "Gleiches Viertel" },
          { name: "Höhlenkirche, Mokattam", note: "Halbtag" },
          { name: "Simon-Kloster", note: "Panorama" },
        ],
      },
      {
        id: "modern", name: "Modernes Kairo", desc: "Belle-Époque-Downtown, der Nil bei Nacht, und wo die Stadt isst.",
        places: [
          { name: "Downtown & Talaat Harb", note: "Stadtspaziergang" },
          { name: "Feluke auf dem Nil", note: "Sonnenuntergang · 1 Std." },
          { name: "Galerien in Zamalek", note: "Nachmittag" },
          { name: "Al-Azhar-Park", note: "Bester Blick" },
          { name: "Kulinarischer Rundgang", note: "Abends" },
          { name: "Neue Hauptstadt", note: "Tagesausflug" },
        ],
      },
    ],
  },
  tours: {
    label: "• Ausgewählte Tage",
    heading: "Touren",
    cta: "Alle Programme ansehen",
    items: [
      { title: "Gizeh im ersten Licht", tags: ["Pyramiden", "Sphinx", "Kamel optional"], alt: "Sphinx und Pyramide bei Sonnenaufgang" },
      { title: "Faden durch Alt-Kairo", tags: ["Koptisch", "Islamisch", "Zu Fuß"], alt: "Koptische Kirche in Alt-Kairo" },
      { title: "Al-Muizz nach Einbruch", tags: ["Islamisch", "Basar", "Fotografie"], alt: "Laternen im Khan el-Khalili" },
      { title: "Museumstag", tags: ["Ägyptologie", "GEM", "Privat"], alt: "Statuensaal im Ägyptischen Museum" },
      { title: "Nil & Abendlicht", tags: ["Feluke", "Essen", "Downtown"], alt: "Feluke auf dem Nil bei Sonnenuntergang" },
    ],
  },
  services: {
    heading: "Tage nach Ihrem Takt, nicht nach Busfahrplan",
    intro: "Jede Route ist privat und wird am Morgen angepasst — an Wetter, Andrang und daran, wie viel Sie laufen möchten.",
    items: [
      { title: "Private Tagestouren", desc: "Eine Stadt, ein Wagen, ein Guide. Gizeh, Saqqara, Alt-Kairo oder gemischt.", tags: ["Privatwagen", "Tickets", "Hotelabholung"] },
      { title: "Mehrtägige Programme", desc: "Drei bis zehn Tage über Kairo, Luxor, Assuan und das Rote Meer.", tags: ["Züge & Flüge", "Hotels", "Volle Planung"] },
      { title: "Familien & Kinder", desc: "Kürzere Wege, echte Geschichten und genug Pausen für alle.", tags: ["Flexibles Tempo", "Snackstopps", "Spiele"] },
      { title: "Foto- & Kulturspaziergänge", desc: "Lichtgeführte Routen durch Märkte, Dächer und Höfe.", tags: ["Goldene Stunde", "Lokaler Zugang", "Kleine Gruppen"] },
    ],
  },
  reviews: {
    label: "• Gästebewertungen",
    heading: "Worte mit Gewicht",
    empty: "Noch keine Bewertungen — seien Sie die erste Stimme.",
    average: "Durchschnitt",
    based: "basierend auf",
    loading: "Bewertungen werden geladen…",
    form: {
      title: "Bewerten Sie Ihre Tour",
      name: "Ihr Name", country: "Land", tour: "Welche Tour?", rating: "Ihre Bewertung", comment: "Ihre Bewertung",
      submit: "Bewertung senden", sending: "Wird gesendet…", success: "Danke — Ihre Bewertung ist online.", error: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
      ratingRequired: "Bitte eine Bewertung wählen.", nameRequired: "Bitte Namen eingeben.", star: "Stern",
    },
  },
  clients: {
    heading: "Partner & Reisende",
    statement: "Regelmäßige Arbeit mit kleinen Agenturen, Hotels und Individualreisenden, denen Substanz wichtiger ist als Souvenirs.",
    miniName: "Hani Ezzat", miniRole: "Lizenzierter Guide · Tourismusministerium",
    book: "Gespräch buchen",
    list: [
      { name: "Nile Boutique Travel", year: "2013" },
      { name: "Marriott Mena House", year: "2015" },
      { name: "Wanderlust Berlin", year: "2016" },
      { name: "Cairo Photo Collective", year: "2018" },
      { name: "Sahara Expeditions", year: "2019" },
      { name: "Kemet Cultural Tours", year: "2021" },
      { name: "Levant & Nile Journeys", year: "2023" },
      { name: "Atlas Family Travel", year: "2024" },
    ],
  },
  process: {
    heading: "So läuft ein Tag mit mir",
    items: [
      { title: "Zuerst reden", desc: "Ein kurzes Gespräch: was Sie sehen wollen, wie Sie reisen, wer mitkommt." },
      { title: "Route planen", desc: "Ich ordne die Stopps nach Licht, Andrang und Gebetszeiten — nicht nach Prospekt." },
      { title: "Gemeinsam gehen", desc: "Privater Transport, Tickets erledigt, Geschichten dort, wo sie passiert sind." },
      { title: "In Kontakt bleiben", desc: "Restauranttipps, Rat für die nächste Stadt und Fotos nach der Abreise." },
    ],
  },
  awards: {
    heading: "Auszeichnungen & Qualifikationen",
    items: [
      { name: "Lizenz des Tourismusministeriums", note: "Ägyptologie · Kat. A" },
      { name: "TripAdvisor Travellers' Choice", note: "2022 · 2023" },
      { name: "Verband ägyptischer Guides", note: "Mitglied seit 2011" },
      { name: "Fakultät für Archäologie, Uni Kairo", note: "BA Ägyptologie" },
    ],
    storiesHeading: "Geschichten hinter den Steinen",
    stories: [
      { title: "Warum Pyramiden auf Fotos kleiner wirken", meta: "Gizeh · 6 Min." },
      { title: "Eine mamlukische Fassade in fünf Minuten lesen", meta: "Islamisches Kairo · 4 Min." },
      { title: "Der Weg der Heiligen Familie durch Alt-Kairo", meta: "Koptisches Kairo · 7 Min." },
    ],
    readMore: "Mehr Geschichten lesen",
  },
  faq: {
    heading: "Häufige Fragen",
    items: [
      { q: "Wie buche ich eine Tour?", a: "Schicken Sie mir Ihre Daten und Interessen. Ich antworte innerhalb von 24 Stunden mit Routenvorschlag und klarem Preis. Eine kleine Anzahlung bestätigt den Tag." },
      { q: "Wie lange dauert ein Tag?", a: "Die meisten privaten Tage dauern sechs bis acht Stunden inklusive Transport. Halbtage von drei bis vier Stunden sind möglich." },
      { q: "Sind Tickets und Transport inklusive?", a: "Transport mit privatem, klimatisiertem Wagen und Fahrer ist inklusive. Eintrittstickets wahlweise im Angebot oder vor Ort." },
      { q: "In welchen Sprachen führen Sie?", a: "Arabisch, Englisch und Deutsch. Unterlagen und Nachrichten in allen drei Sprachen." },
      { q: "Geeignet für Kinder oder ältere Gäste?", a: "Ja. Routen werden gekürzt, beschattet und im passenden Tempo geplant, mit Pausen und Essensstopps." },
      { q: "Was soll ich anziehen und mitnehmen?", a: "Bequeme geschlossene Schuhe, Hut, Sonnenschutz und Wasser. In Moscheen und Kirchen Schultern und Knie bedecken; ein Tuch für Damen hilft." },
      { q: "Planen Sie auch außerhalb Kairos?", a: "Ja — Luxor, Assuan, Alexandria, Weiße Wüste und Rotes Meer, inklusive Zügen und Inlandsflügen." },
      { q: "Wie funktioniert der Preis?", a: "Der Preis gilt pro Gruppe, nicht pro Person, und hängt von Dauer und Distanz ab. Sie erhalten eine Zahl schriftlich, bevor Sie zusagen." },
    ],
  },
  contact: {
    heading: "Planen Sie eine Reise nach Ägypten?",
    role: "Lizenzierter Reiseleiter · Kairo",
    email: "hello@haniezzat.com",
    phone: "+20 100 123 4567",
    form: {
      name: "Name", email: "E-Mail", phone: "Telefon", budget: "Gruppengröße / Budget", message: "Erzählen Sie von Ihrer Reise",
      send: "Anfrage senden", success: "Danke — ich melde mich innerhalb von 24 Stunden.",
    },
  },
  footer: {
    philosophy: "Ein Tag in Kairo sollte eine Geschichte hinterlassen, keine Checkliste.",
    navTitle: "Navigation", socialTitle: "Anderswo", book: "Gespräch buchen",
    rights: "Alle Rechte vorbehalten.",
  },
};

export const content: Record<Lang, Content> = { en, ar, de };

export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "ع" },
  { code: "de", label: "DE" },
];
