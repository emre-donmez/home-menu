export const categories = [
  { id: "espresso", icon: "☕" },
  { id: "cold", icon: "🧊" },
  { id: "traditional", icon: "🫖" },
  { id: "other", icon: "💧" },
];

export const drinks = [
  // Espresso Based
  {
    id: "espresso",
    name: { tr: "Espresso", en: "Espresso" },
    category: "espresso",
    description: {
      tr: "Her kahvenin temelidir; küçük ama güçlü.",
      en: "The foundation of every coffee; small but powerful.",
    },
    ingredients: {
      tr: ["7–9 gr veya 15–18 gr Kahve", "Basınçlı Su"],
      en: ["7–9 g or 15–18 g Coffee", "Pressurized Water"],
    },
    steps: {
      tr: ["Espresso"],
      en: ["Espresso"],
    },
    ratios: { tr: { kahve: "7–18 g", su: "30–60 ml" }, en: { coffee: "7–18 g", water: "30–60 ml" } },
    serving: {
      tr: "Tüm içeceklerin kalbidir. 30 ml (single) veya 60 ml (double) olarak fincana doğrudan alınır.",
      en: "The heart of all drinks. Served directly in a cup as 30 ml (single) or 60 ml (double).",
    },
  },
  {
    id: "americano",
    name: { tr: "Americano", en: "Americano" },
    category: "espresso",
    description: {
      tr: "Espressonun sıcak suyla buluşmasıyla ortaya çıkan dengeli ve içimi kolay bir kahve.",
      en: "A balanced and easy-drinking coffee where espresso meets hot water.",
    },
    ingredients: {
      tr: ["Double Espresso", "90–120 ml Sıcak Su"],
      en: ["Double Espresso", "90–120 ml Hot Water"],
    },
    steps: {
      tr: ["Espresso", "Sıcak Su"],
      en: ["Espresso", "Hot Water"],
    },
    ratios: { tr: { espresso: "60 ml", su: "90–120 ml" }, en: { espresso: "60 ml", water: "90–120 ml" } },
    serving: {
      tr: "Espressonun üzerine sıcak su eklenir. (Barista İpucu: Önce suyu koyup, espressoyu suyun üzerine alırsan kreması bozulmaz, buna Long Black denir).",
      en: "Hot water is added over the espresso. (Barista Tip: If you pour the water first and then add the espresso on top, the crema stays intact — this is called a Long Black).",
    },
  },
  {
    id: "macchiato",
    name: { tr: "Macchiato", en: "Macchiato" },
    category: "espresso",
    description: {
      tr: "Güçlü espressonun üstüne sadece bir kaşık süt köpüğü bırakılarak hazırlanan küçük ama karakterli bir içecek.",
      en: "A small but characterful drink where just a spoonful of milk foam is placed on top of a strong espresso.",
    },
    ingredients: {
      tr: ["Double Espresso", "1–2 tatlı kaşığı Süt Köpüğü"],
      en: ["Double Espresso", "1–2 tsp Milk Foam"],
    },
    steps: {
      tr: ["Espresso", "Süt Köpüğü"],
      en: ["Espresso", "Milk Foam"],
    },
    ratios: { tr: { espresso: "60 ml", köpük: "1–2 kaşık" }, en: { espresso: "60 ml", foam: "1–2 tsp" } },
    serving: {
      tr: "Espresso fincana alınır. Süt buhar çubuğuyla bolca köpürtülür ve sadece üstteki yoğun köpükten bir kaşık alınıp espressonun ortasına \"leke\" gibi bırakılır.",
      en: "Espresso is poured into a cup. Milk is frothed generously with a steam wand, and only a spoonful of the thick top foam is placed in the center of the espresso like a \"stain\".",
    },
  },
  {
    id: "cortado",
    name: { tr: "Cortado", en: "Cortado" },
    category: "espresso",
    description: {
      tr: "Espresso ile sütün eşit oranda buluştuğu dengeli ve yumuşak bir içecek.",
      en: "A balanced and smooth drink where espresso and milk meet in equal parts.",
    },
    ingredients: {
      tr: ["Double Espresso", "60 ml Ilık/Mikroköpüklü Süt"],
      en: ["Double Espresso", "60 ml Warm/Micro-foam Milk"],
    },
    steps: {
      tr: ["Espresso", "Süt"],
      en: ["Espresso", "Milk"],
    },
    ratios: { tr: { espresso: "60 ml", süt: "60 ml" }, en: { espresso: "60 ml", milk: "60 ml" } },
    serving: {
      tr: "1:1 oran kuralı geçerlidir. Bardağa alınan espressonun üzerine, asiditeyi kırması için eşit miktarda çok hafif köpürtülmüş ipeksi süt dökülür.",
      en: "The 1:1 ratio rule applies. An equal amount of very lightly frothed, silky milk is poured over the espresso to cut the acidity.",
    },
  },
  {
    id: "flat-white",
    name: { tr: "Flat White", en: "Flat White" },
    category: "espresso",
    description: {
      tr: "Double espresso üzerine pürüzsüz mikroköpüklü sütün dökülmesiyle oluşan yoğun ve kadifemsi bir içecek.",
      en: "An intense and velvety drink formed by pouring smooth micro-foam milk over a double espresso.",
    },
    ingredients: {
      tr: ["Double Espresso", "120 ml Mikroköpüklü Süt"],
      en: ["Double Espresso", "120 ml Micro-foam Milk"],
    },
    steps: {
      tr: ["Espresso", "Süt"],
      en: ["Espresso", "Milk"],
    },
    ratios: { tr: { espresso: "60 ml", süt: "120 ml" }, en: { espresso: "60 ml", milk: "120 ml" } },
    serving: {
      tr: "Bardağa alınan double espressonun üzerine, içinde hiç büyük baloncuk olmayan, pürüzsüz ve incecik bir krema kıvamına getirilmiş süt tek seferde dökülür.",
      en: "Smooth, silky milk with no large bubbles and a thin, creamy texture is poured in one go over the double espresso.",
    },
  },
  {
    id: "cappuccino",
    name: { tr: "Cappuccino", en: "Cappuccino" },
    category: "espresso",
    description: {
      tr: "Eşit oranlarda espresso, süt ve köpük. İtalya'nın kahveden dünyaya armağan ettiği klasik denge.",
      en: "Equal parts espresso, milk and foam. The classic balance Italy gifted to the world through coffee.",
    },
    ingredients: {
      tr: ["Single veya Double Espresso", "Sıcak Süt", "Kalın Süt Köpüğü"],
      en: ["Single or Double Espresso", "Hot Milk", "Thick Milk Foam"],
    },
    steps: {
      tr: ["Espresso", "Sıcak Süt", "Kalın Süt Köpüğü"],
      en: ["Espresso", "Hot Milk", "Thick Milk Foam"],
    },
    ratios: { tr: { espresso: "1/3", süt: "1/3", köpük: "1/3" }, en: { espresso: "1/3", milk: "1/3", foam: "1/3" } },
    serving: {
      tr: "1/3 Kahve, 1/3 Süt, 1/3 Köpük kuralıdır. Espresso fincana alınır. Süt bolca havalandırılır. Dökülürken önce alttaki sıvı süt fincana girer, en üste de kalın bir köpük tabakası oturur.",
      en: "The rule is 1/3 Coffee, 1/3 Milk, 1/3 Foam. Espresso is poured into a cup. Milk is aerated generously. When poured, the liquid milk enters first, and a thick layer of foam settles on top.",
    },
  },
  {
    id: "caffe-latte",
    name: { tr: "Caffe Latte", en: "Caffe Latte" },
    category: "espresso",
    description: {
      tr: "Günün her saatine uyan, sütün espressoyu yumuşattığı hafif ve içimi kolay bir kahve.",
      en: "A light, easy-drinking coffee for any time of day, where milk softens the espresso.",
    },
    ingredients: {
      tr: ["Single veya Double Espresso", "Bol Sıcak Süt", "İnce Süt Köpüğü"],
      en: ["Single or Double Espresso", "Plenty of Hot Milk", "Thin Milk Foam"],
    },
    steps: {
      tr: ["Espresso", "Bol Sıcak Süt", "İnce Süt Köpüğü"],
      en: ["Espresso", "Plenty of Hot Milk", "Thin Milk Foam"],
    },
    ratios: { tr: { espresso: "30–60 ml", süt: "150–180 ml" }, en: { espresso: "30–60 ml", milk: "150–180 ml" } },
    serving: {
      tr: "Espresso bardağa alınır. Üzerine buharda ısıtılmış bolca süt dökülür. Bardağın en üstünde maksimum 1–1.5 cm kalınlığında ince bir köpük tabakası kalır.",
      en: "Espresso is poured into a glass. Plenty of steamed milk is added on top. A thin foam layer of maximum 1–1.5 cm remains at the very top.",
    },
  },
  {
    id: "latte-macchiato",
    name: { tr: "Latte Macchiato", en: "Latte Macchiato" },
    category: "espresso",
    description: {
      tr: "Uzun bardakta buharda ısıtılmış süt ve köpük üzerine espresso akıtılarak hazırlanan, güzel katmanlı görünümüyle dikkat çeken bir içecek.",
      en: "A visually captivating drink prepared in a tall glass by slowly pouring espresso over steamed milk and foam, creating beautiful layers.",
    },
    ingredients: {
      tr: ["Bol Sıcak Süt", "Kalın Süt Köpüğü", "Single veya Double Espresso"],
      en: ["Plenty of Hot Milk", "Thick Milk Foam", "Single or Double Espresso"],
    },
    steps: {
      tr: ["Sütü buharda ısıt ve uzun bardağa dök", "Üzerine kalın bir süt köpüğü tabakası ekle", "Espressoyu köpüğün ortasından yavaşça akıt"],
      en: ["Steam the milk and pour into a tall glass", "Add a thick layer of milk foam on top", "Slowly pour espresso through the center of the foam"],
    },
    ratios: { tr: { süt: "150 ml", espresso: "30–60 ml" }, en: { milk: "150 ml", espresso: "30–60 ml" } },
    serving: {
      tr: "Karıştırmadan iç. Bardakta 3 farklı renk katmanı oluşur: altta süt, ortada kahve, üstte köpük.",
      en: "Drink without stirring. Three distinct color layers form in the glass: milk at the bottom, coffee in the middle, foam on top.",
    },
  },
  {
    id: "mocha",
    name: { tr: "Mocha", en: "Mocha" },
    category: "espresso",
    description: {
      tr: "Çikolata ve kahvenin mükemmel uyumu. Tatlı ve yoğun ama dengeli bir içecek.",
      en: "The perfect harmony of chocolate and coffee. Sweet and intense, yet beautifully balanced.",
    },
    ingredients: {
      tr: ["Çikolata Sosu/Tozu", "Espresso", "Sıcak Süt", "İsteğe bağlı Kremşanti"],
      en: ["Chocolate Sauce/Powder", "Espresso", "Hot Milk", "Whipped Cream (optional)"],
    },
    steps: {
      tr: ["Çikolata Sosu", "Espresso", "Sıcak Süt", "Köpük / Krema"],
      en: ["Chocolate Sauce", "Espresso", "Hot Milk", "Foam / Cream"],
    },
    ratios: { tr: { çikolata: "1–2 kaşık", espresso: "60 ml", süt: "150 ml" }, en: { chocolate: "1–2 tbsp", espresso: "60 ml", milk: "150 ml" } },
    serving: {
      tr: "Bardağın dibine çikolata sosu eklenir. Üzerine sıcak espresso alınıp sosla iyice karıştırılır. Sonra üzerine sıcak süt eklenir. En üste ince bir süt köpüğü veya kremşanti konur.",
      en: "Chocolate sauce is added to the bottom of the glass. Hot espresso is poured over it and mixed well. Hot milk is then added. A thin layer of milk foam or whipped cream is placed on top.",
    },
  },
  {
    id: "affogato",
    name: { tr: "Affogato", en: "Affogato" },
    category: "espresso",
    description: {
      tr: "Sıcak espressonun vanilyalı dondurmayla buluştuğu tatlı-kahveli eşsiz bir lezzet.",
      en: "A unique sweet-coffee treat where hot espresso meets vanilla ice cream.",
    },
    ingredients: {
      tr: ["Vanilyalı Dondurma", "Double Espresso"],
      en: ["Vanilla Ice Cream", "Double Espresso"],
    },
    steps: {
      tr: ["Dondurma (1 Top)", "Espresso"],
      en: ["Ice Cream (1 Scoop)", "Espresso"],
    },
    ratios: { tr: { dondurma: "1 top", espresso: "60 ml" }, en: { "ice cream": "1 scoop", espresso: "60 ml" } },
    serving: {
      tr: "Hem tatlı hem kahvedir. Bardağa alınan sert bir top dondurmanın tam üzerine makineden sıcak espresso akıtılır.",
      en: "It is both a dessert and a coffee. Hot espresso is poured directly from the machine over a firm scoop of ice cream in a glass.",
    },
  },

  // Cold Drinks
  {
    id: "iced-americano",
    name: { tr: "Iced Americano", en: "Iced Americano" },
    category: "cold",
    description: {
      tr: "Sıcak günlerin vazgeçilmezi. Buz ve soğuk suyla serinleyen double espresso.",
      en: "The staple of hot days. Double espresso refreshed with ice and cold water.",
    },
    ingredients: {
      tr: ["Bol Buz", "100 ml Soğuk Su", "Double Espresso"],
      en: ["Plenty of Ice", "100 ml Cold Water", "Double Espresso"],
    },
    steps: {
      tr: ["Buz", "Soğuk Su", "Espresso"],
      en: ["Ice", "Cold Water", "Espresso"],
    },
    ratios: { tr: { su: "100 ml", espresso: "60 ml" }, en: { water: "100 ml", espresso: "60 ml" } },
    serving: {
      tr: "Bardağı tamamen buzla doldur. Üzerine soğuk suyu ekle. En son double espressoyu buzların üzerinden akıt. (Sıcak suyu buzla soğutmaya çalışma, kahve çok sulanır).",
      en: "Fill the glass completely with ice. Add cold water on top. Finally, pour the double espresso over the ice. (Don't try to cool hot water with ice — the coffee will get too watered down).",
    },
  },
  {
    id: "iced-latte",
    name: { tr: "Iced Latte", en: "Iced Latte" },
    category: "cold",
    description: {
      tr: "Soğuk sütün espressoya kavuştuğu, her yudumda ferahlatan yumuşak bir içecek.",
      en: "A smooth and refreshing drink where cold milk meets espresso, delightful with every sip.",
    },
    ingredients: {
      tr: ["Bol Buz", "150 ml Soğuk Süt", "Double Espresso"],
      en: ["Plenty of Ice", "150 ml Cold Milk", "Double Espresso"],
    },
    steps: {
      tr: ["Buz", "Soğuk Süt", "Espresso"],
      en: ["Ice", "Cold Milk", "Espresso"],
    },
    ratios: { tr: { süt: "150 ml", espresso: "60 ml" }, en: { milk: "150 ml", espresso: "60 ml" } },
    serving: {
      tr: "Klasik ve yumuşak içim. Bardağa buz ve soğuk süt konur. Double espresso yavaşça sütün üzerine dökülerek katmanlı bir görünüm elde edilir. Karıştırılarak içilir.",
      en: "Classic and smooth. Ice and cold milk are added to the glass. Double espresso is slowly poured over the milk to create a layered look. Stir before drinking.",
    },
  },
  {
    id: "iced-mocha",
    name: { tr: "Iced Mocha", en: "Iced Mocha" },
    category: "cold",
    description: {
      tr: "Çikolata, espresso ve soğuk süt. Sıcak günler için hem yoğun hem ferahlatıcı bir tercih.",
      en: "Chocolate, espresso and cold milk. An intense yet refreshing choice for hot days.",
    },
    ingredients: {
      tr: ["1.5 YK Damla/Kare Çikolata", "Double Espresso", "Soğuk Süt", "Buz"],
      en: ["1.5 tbsp Chocolate Chips/Squares", "Double Espresso", "Cold Milk", "Ice"],
    },
    steps: {
      tr: ["Çikolata", "Espresso", "Soğuk Süt", "Buz"],
      en: ["Chocolate", "Espresso", "Cold Milk", "Ice"],
    },
    ratios: { tr: { çikolata: "1.5 YK", espresso: "60 ml", süt: "150 ml" }, en: { chocolate: "1.5 tbsp", espresso: "60 ml", milk: "150 ml" } },
    serving: {
      tr: "Bardağın dibindeki çikolatanın üzerine sıcak espresso alınır ve pürüzsüz olana kadar karıştırılır. Üzerine önce soğuk süt, en son buz eklenir. Yoğun çikolata sevenlerin favorisidir.",
      en: "Hot espresso is poured over the chocolate at the bottom and stirred until smooth. Cold milk is added first, then ice last. A favorite for intense chocolate lovers.",
    },
  },

  // Traditional Hot Drinks
  {
    id: "turkish-coffee",
    name: { tr: "Türk Kahvesi", en: "Turkish Coffee" },
    category: "traditional",
    description: {
      tr: "Cezve'de yavaşça pişirilen, köpüklü, yoğun ve her yudumda hikâye barındıran vazgeçilmez bir klasik.",
      en: "An indispensable classic slowly brewed in a cezve, foamy, intense and full of story with every sip.",
    },
    ingredients: {
      tr: ["2 tatlı kaşığı ince çekilmiş Türk kahvesi", "1 fincan soğuk su", "Şeker (isteğe bağlı)"],
      en: ["2 tsp finely ground Turkish coffee", "1 cup cold water", "Sugar (optional)"],
    },
    steps: {
      tr: [
        "Cezveye soğuk su ekle",
        "Kahveyi (ve şekeri) ekle",
        "Karıştır ve kısık ateşe koy",
        "Karıştırmadan yavaşça ısıt",
        "Köpük yükselince ateşten al",
        "Köpüğü koruyarak fincana dök",
      ],
      en: [
        "Add cold water to the cezve",
        "Add coffee (and sugar if desired)",
        "Stir and place on low heat",
        "Heat slowly without stirring",
        "When foam rises, remove from heat",
        "Pour into a cup, preserving the foam",
      ],
    },
    ratios: { tr: { kahve: "2 tatlı kaşığı", su: "1 fincan" }, en: { coffee: "2 tsp", water: "1 cup" } },
    serving: {
      tr: "Yanında bir bardak su ve lokum ile servis et.",
      en: "Serve with a glass of water and Turkish delight.",
    },
  },
  {
    id: "tea",
    name: { tr: "Çay", en: "Tea" },
    category: "traditional",
    description: {
      tr: "Demlikle demlenen, klasik Türk siyah çayı.",
      en: "Classic Turkish black tea brewed in a teapot.",
    },
    ingredients: {
      tr: ["2 tatlı kaşığı dökme siyah çay", "Kaynar su"],
      en: ["2 tsp loose black tea", "Boiling water"],
    },
    steps: {
      tr: [
        "Taze suyu kaynat",
        "Demliği ısıt",
        "Çayı demliğe koy",
        "Üzerine kaynar su dök",
        "3–5 dakika demle",
        "Süzgeçten geçirerek servis et",
      ],
      en: [
        "Boil fresh water",
        "Warm the teapot",
        "Add tea leaves to the pot",
        "Pour boiling water over leaves",
        "Steep for 3–5 minutes",
        "Pour through a strainer",
      ],
    },
    ratios: { tr: { çay: "2 kaşık", su: "1 fincan" }, en: { tea: "2 tsp", water: "1 cup" } },
    serving: {
      tr: "Çay bardağında servis et. İstediğin kadar şeker ekle.",
      en: "Serve in a tea glass. Add sugar to taste.",
    },
  },
  {
    id: "linden-tea",
    name: { tr: "Ihlamur", en: "Linden Tea" },
    category: "traditional",
    description: {
      tr: "Sakinleştirici ve hoş kokulu bitki çayı. Dinlenmek için mükemmel.",
      en: "Soothing and aromatic herbal tea. Perfect for relaxation.",
    },
    ingredients: {
      tr: ["1–2 tatlı kaşığı kuru ıhlamur çiçeği", "Kaynar su", "Bal (isteğe bağlı)"],
      en: ["1–2 tsp dried linden flowers", "Boiling water", "Honey (optional)"],
    },
    steps: {
      tr: [
        "Taze suyu kaynat",
        "Ihlamur çiçeklerini fincana veya demliğe koy",
        "Üzerine kaynar su dök",
        "Üzerini kapat ve 5–7 dakika demle",
        "Süz ve bal ekle",
      ],
      en: [
        "Boil fresh water",
        "Place linden flowers in a cup or teapot",
        "Pour boiling water over the flowers",
        "Cover and steep for 5–7 minutes",
        "Strain and add honey if desired",
      ],
    },
    ratios: { tr: { ıhlamur: "1–2 kaşık", su: "1 fincan" }, en: { linden: "1–2 tsp", water: "1 cup" } },
    serving: {
      tr: "Ilık servis et. Bir kaşık bal ile harika gider.",
      en: "Serve warm. Great with a spoonful of honey.",
    },
  },

  // Other
  {
    id: "mineral-water",
    name: { tr: "Maden Suyu", en: "Mineral Water" },
    category: "other",
    description: {
      tr: "Beypazarı / Kızılay",
      en: "Beypazarı / Kızılay",
    },
    ingredients: {
      tr: ["Maden suyu"],
      en: ["Mineral water"],
    },
    ratios: { tr: {}, en: {} },
  },
];
