import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLangStore = defineStore("language", () => {
  let lang = ref("uz");
  let once = ref(false);

  let ru = ref({
    phonen: "Номер телефона:",
    lang: "Ру",
    russian: "Русский",
    uzbek: "Узбекский",
    english: "Английский",
    home: "Главное",
    about: "О нас",
    portfolio: "Портфолио",
    contacts: "Контакты",
    screen:
      "Мы предлагаем комплексный подход, включающий разработку концепции, подбор материалов и мебели, а также контроль за выполнением работ. Наши дизайнеры разработают проект, подберут мебель и материалы, и проследят за всеми работами. Наша компания высоко ценит доверие наших клиентов и всегда стремимся к тому, чтобы каждый проект был особенным. Доверьтесь нам, и ваше пространство станет не только красивым, но и комфортным!",
    screenBottom:
      "Создадим грамотную планировку. Разработаем функциональный дизайн со вкусом и рассчитаем расходы на ремонт.",
    more: "Подробно о нас",
    consult: "Бесплатная консультация",
    ourprojects: "НАШИ ПРОЕКТЫ",
    ourprojectssubtitle:
      "В странице портфолио мы собрали реализованные проекты по нашим дизайнам",
    knowmore: "Страница Портфолио",
    ourservices: "НАШИ УСЛУГИ",
    moreinfo: "Узнать больше !",
    serivice1: "Проектирование",
    serivice2: "Дизайн",
    serivice3: "Ремонт",
    serivice4:
      "В процессе проектирования мы учитываем ваши пожелания и идеи, чтобы создать пространство, идеально подходящее именно вам. Мы начинаем с консультации, чтобы узнать ваши пожелания, затем создаем 3D-визуализацию будущего интерьера и подбираем все необходимые материалы.",
    serivice5:
      "Мы всегда стремимся к тому, чтобы каждый проект был особенным. Чтобы понять ваши пожелания и потребности мы создаем 3D-визуализацию ваших пожеланий. Ведь хороший дизайн важен для всех проектов, так как он не только делает пространство красивым, но и функциональным, комфортным и отражающим вашу индивидуальность. ",
    serivice6:
      "Мы понимаем, что ремонт — это не только обновление пространства, но и важный этап для обеспечения его функциональности и долговечности. Наши специалисты тщательно контролируют каждый этап ремонта, начиная от подготовки и планировки до завершения и финальной проверки. Мы следим за качеством материалов, соблюдением всех стандартов и сроков, чтобы избежать возможных проблем и обеспечить идеальный результат.",
    calctitle: "КАЛЬКУЛЯТОР СТОИМОСТИ ДИЗАЙН-ПРОЕКТА",
    calcsubtitle: "Выберите, какой дизайн-проект вам необходим:",
    calctext:
      "Выберите, Укажите общую площадь м2, чтобы узнать стоимость проекта.",
    calc: "введите размер м2",
    calcprice: "Узнать цену !",
    calchome: "Дома (квартиры, участки)",
    calccommercial: "КОММЕРЧЕСКИЕ (Офисы, отели, кафе)",
    question: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:",
    questionitem: "question_ru",
    answeritem: "answer_ru",
    contacwithus: "СВЯЖИТЕСЬ СНАМИ",
    name: "ФИО",
    namePlaceholder: "Ваше имя",
    number: "Ваш номер телефона",
    numberPlaceholder: "+998 77 777 77 77",
    zayavka: "ОСТАВИТЬ ЗАЯВКУ !",
    socials: "МЫ В СОЦИАЛЬНЫХ СЕТЯХ",
    contact: "Контакты",
    address: "Хушнаво 13А Ташкент, Узбекистан",
    addressTitle: "Адрес:",
    aboutus: "О НАС",
    aboutusText:
      "В этой странице мы собрали информацию про нашу компанию и про нашу команду.",
    aboutabout:
      `О нас:
    <br> <br>
Наш девиз: Качество важнее денег. 
    <br> <br>
Наш опыт почти 6 лет. 
Основатель SOFYA DESIGN STUDIO: Фирдавс Махкамов. 
    <br> <br>
Построенные объекты: Личные и деловые объекты от 100 м2. 
    <br> <br>
Проекты и объекты выполненные по всему миру: (Город) Ташкент и регионы Узбекистана, Москва, Казахстан, Дубай. 
    <br> <br>
Мы знаем, что люди, будь то молодые или пожилые, хотят комфорта, когда они работают, занимаются спортом, проводят какой-то культурный отдых или ждут гостя. 
Именно поэтому все реализованные нами проекты помогают людям жить хорошо, чувствовать себя комфортно и в хорошем настроении. 
    <br> <br>
Доверие между клиентом и дизайнером укрепляется не только тогда, когда сдается идеальный проект. Возможно, когда проект будет реализован, если клиент будет чувствовать себя комфортно в созданной дизайнером среде, взаимное доверие увеличится вдвое. 
    <br> <br>
Мы предлагаем широкий спектр услуг: 
Архитектурный проект, дизайн интерьера и экстерьера. 
Строительство. Мы берем на себя все процессы ухода и управления с 0. 
    <br> <br>
Наши сервисы: 
Дизайн интерьера жилого дома:
Создание дизайн-проекта – это самый основной творческий процесс. Мечты сбудутся, в вашем воображении появится будущий дом и пробудятся эмоции. 
При проектировании резиденции учитываются пожелания заказчика. 
    <br> <br>
Дизайн интерьера нежилого помещения:
За наши проекты благодарны офисы, салоны, бутики, рестораны, спа-центры, фитнес-клубы, гостиницы. 
    <br> <br>
Строительный ремонт и отделка под ключ:
Завершение проекта и проведение всех строительных процессов (частный дом, коммерческое помещение, ремонт, отделка)
Надежные партнеры и опытная команда.`,
      protfolio: "Портфолио",
      port1: "Жилые",
      port2: "Коммерческие",
      steps: "ЭТАПЫ РАБОТЫ",
      steps1: "Договор",
      steps11: "Мы подписываем договор и вы вносите предоплату 30%",
      steps2: "Техническое задание",
      steps22: "Мы связываемся с замерщиками в вашем городе, они делают для нас фотографии и замеры помещения. Заполняем техническое задание на проект, где вы записываете все свои пожелания. Подбираем аналоги интерьеров, которые вам нравятся.",
      steps3: "Планирование и коллажи",
      steps33: "Создаем планировочное решение (2-3 варианта), согласовываем лучший. Вы оплачиваете следующую часть платежа в размере 30% Созпаваемые коллажи отражают общую цветовую гамму, зонирование пространства и виды используемых отделочных материалов, а таюже мебель и источники света (без указания конкретного производителя).",
      steps4: "3d визуализация и документация",
      steps44: "3d визуализация и документация Вы оплачиваете следующую часть платежа в размере - 30% Создаем фотореалистичные изображения интерьера, согласовываем все помещения. После утверждения всех 3D визуализаций вносится предоплата - 10% за этап документации, готовим чертежи и спецификации. Представляем готовый дизайн-проект.",
      dialog1: "Оставьте Заявку",
      dialog2: "Ваше имя",
      dialog3: "Ваш номер телефона",
      dialog4: "Отмена",
      dialog5: "Отправить",
  });

  let uz = ref({
    phonen: "Telefon raqam:",
    lang: "Uz",
    russian: "Rus tili",
    uzbek: "Uzbek tili",
    english: "Ingliz tili",
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    portfolio: "Portfolio",
    contacts: "Bog'lanish",
    screen:
      "Biz Dizan ishlab chiqish, materiallar va mebellarni tanlash va ishlarning bajarilishini nazorat qilishni o'z ichiga olgan keng qamrovli yondashuvni taklif etamiz. Bizning dizaynerlarimiz loyihani ishlab chiqadilar, mebel va materiallarni tanlaydilar va barcha ishlarni kuzatib boradilar. Kompaniyamiz mijozlarimizning ishonchini yuqori baholaydi va har doim har bir loyihaga alohida yondashiladi. Bizga ishoning va sizning makoningiz nafaqat chiroyli, balki qulay bo'ladi!",
    screenBottom:
      "Biz sizga savodli loyihalashtirish va did bilan funktsional dizaynni ishlab chiqamiz va ta'mirlash xarajatlarini hisoblaymiz.",
    more: "ko'proq biz haqimizda",
    consult: "Bepul konsultatsiya",
    ourprojects: "Bizning loyihalar",
    ourprojectssubtitle:
      "Loyihalar sahifasida biz dizaynlarimiz asosida tugallangan loyihalarni to'pladik.",
    knowmore: "Loyihalar sahifasi",
    ourservices: "Bizning xizmatlar",
    moreinfo: "Ko'proq bilish !",
    serivice1: "Loyihalashtirish",
    serivice2: "Dizayn",
    serivice3: "Remont",
    serivice4:
      "Loyihalashtirish jarayonida biz sizga juda qulay keladigan joy yaratish uchun sizning xohishingiz va g'oyalaringizni hisobga olamiz. Biz sizning xohishingizni bilish uchun maslahatlashuvdan boshlaymiz, so'ngra kelajakdagi ichki makonning 3D vizualizatsiyasini yaratamiz va barcha kerakli materiallarni tanlaymiz.",
    serivice5:
      "Biz har doim har bir loyihani alohida saqlashga intilamiz. Sizning istaklaringiz va ehtiyojlaringizni tushunish uchun biz sizning istaklaringizning 3D vizualizatsiyasini yaratamiz. Axir, yaxshi dizayn barcha loyihalar uchun muhimdir, chunki u nafaqat makonni chiroyli qiladi, balki funktsional, qulay va sizning shaxsiyatingizni aks ettiradi.",
    serivice6:
      "Nafaqat uyning chiroyi, balki uning funksionalligi va uzoq umr ko'rishini ta'minlash muhim bosqich ekanligini tushunamiz. Bizning mutaxassislarimiz ta'mirlashning har bir bosqichini diqqat bilan kuzatib boradilar, tayyorgarlik va tartibdan tortib to yakuniy tekshiruvgacha. Mumkin bo'lgan muammolarni oldini olish va mukammal natijani ta'minlash uchun biz materiallarning sifatini, barcha standartlar va muddatlarga rioya qilinishini kuzatamiz.",
    calctitle: "DIZAYN LOYIHA XARAJATLARI KALKULYATORI",
    calcsubtitle: "Sizga kerak bo'lgan dizayn loyihasini tanlang:",
    calctext: "Loyihaning narxini bilish uchun m2 umumiy maydonni kiriting.",
    calc: "m2 hajmini kiriting",
    calcprice: "HISOBLASH!",
    calchome: "Uy (Kvartira, Hovli)",
    calccommercial: "Tijorat (Ofis, Mehmonxona, Kafe)",
    question: "TEZ-TEZ SO'RALADIGAN SAVOLLAR:",
    questionitem: "question_uz",
    answeritem: "answer_uz",
    contacwithus: "Biz bilan bog'laning",
    name: "FISH",
    namePlaceholder: "Ismingizni kiriting",
    number: "Telefon raqamingiz",
    numberPlaceholder: "+998 77 777 77 77",
    zayavka: "ARIZA QOLDIRISH !",
    socials: "Bizning ijtimoiy tarmoqlarimiz",
    contact: "Kontaktlar",
    address: "Hushnavo 13A Tashkent, Uzbekistan",
    addressTitle: "Manzil:",
    aboutus: "Biz haqimizda",
    aboutusText:
      "Bu sahifada biz kompaniyamiz haqida va jamoamiz haqida ma'lumot yig'dik.",
    aboutabout:
      `O’zgina o’zimiz haqimizda:
    <br>     <br>
Bizning shiyor: Puldan ko’ra sifat muhimroq. 
    <br>     <br>
Bizning tajriba qariyb 6 yil. 
SOFYA DESIGN STUDIO asoschisi: Firdavs Mahkamov. 
    <br>     <br>
Qilingan obektlar: Shaxsiy va biznes uchun obyektlar 100 m2 dan boshlab. 
    <br>     <br>
Dunyo bo’ylab qilingan loyihalar va obyektlar: (Shahar) Toshkent va O’zbekiston viloyatlari, Moskva, Qozog’iston, Dubay. 
    <br>     <br>
Biz bilamizki odamlar ishlayotganda, yoki sport bilan shug’illanayotganda, yoki qandaydur madaniy hordiq chiqarayotganda, yoki mehmon kutayotganda albatta yoshmi qarimi komfort hohlaydi. 
Shu sababdan biz qilgan barcha loyihalar insonlarni yaxshi yashashga, o’zini komfort va ko’tarinki ruhda qulay his qilishga yordam beradi. 
    <br>     <br>
Mijoz bilan Dizaynerni o’rtasidagi ishonch faqat mukammal loyiha topshirilganda mustahkamlanmaydi. Balki loyiha realizatsya qilinganda, Dizayner yaratgan muhitda mijoz o’zini komfort his qilsa, o’rtadagi ishonch ikki barobar mustahkamlanadi. 
    <br>     <br>
Biz keng qamrovli xizmat ko’rsatishni taklif qilamiz: 
Arxitektura loyiha, ichki va tashqi dizayn. 
Qurilish. Pardozlash va boshqarish barcha jarayonlarni 0 dan o’z zimmamizga olish. 
    <br>     <br>
Bizning xizmatlar: 
Turar joy Interyer Dizayn:
Dizayn loyihasini yaratish bu eng asosiy ijodiy jarayon hisoblanadi. Orzular amalga oshadi, kelajakdagi uyingiz tasavvuringizga keladi va hissiyot uyg’onadi. 
Turar joy dizaynini qilishda mijozning hohish istaklari inobatga olinadi, oilada necha kishiligi va qanday ranglar yaxshi ko’rishini hisobga olib dizayn loyiha qilinadi. 
    <br>     <br>
Noturar biznes uchun Interyer dizayn:
Ofislar, Salon, Butik do’konlar, Restoran, Spa markazlari, fitnes clublar, Mehmonxonalar biz qilgan loyihalarimizdan shu vaqtgacha minnaddorchilik bildirishadi. 
    <br>     <br>
Qurilish kalitgacha tamirlash va pardozlash:
Loyihani tugallab qurilishni barcha jarayonlarini o’z zimmamizga olish(shaxsiy uy, biznes uchun binolar, tamirlash, pardozlash)
Ishonchlik hamkorlar, va tajribali jamoa.`,
      protfolio: "Portfolio",
      port1: "Turar-joy",
      port2: "Tijorat",
      steps: "ISH BOSQICHLARI",
      steps1: "Shartnoma",
      steps11: "Biz shartnoma imzolaymiz va siz 30 oldindan to'lovni amalga oshirasiz%",
      steps2: "Texnik topshiriq",
      steps22: "Biz sizning shahringizdagi o'lchovchilar bilan bog'lanamiz, ular biz uchun fotosuratlar va xona o'lchovlarini olishadi. Biz barcha istaklaringizni yozadigan loyiha uchun texnik topshiriqni to'ldiramiz. Biz sizga yoqadigan interyerlarning analoglarini tanlaymiz.",
      steps3: "Rejalashtirish va kollajlar",
      steps33: "Biz rejalashtirish echimini yaratamiz (2-3 variant), eng yaxshisini muvofiqlashtiramiz. Siz to'lovning keyingi qismini 30% miqdorida to'laysiz yaratilgan kollajlar umumiy rang sxemasini, makonni rayonlashtirishni va ishlatiladigan pardozlash materiallarining turlarini, shuningdek mebel va yorug'lik manbalarini (ma'lum bir ishlab chiqaruvchini ko'rsatmasdan) aks ettiradi.",
      steps4: "3D vizualizatsiya va hujjatlar",
      steps44: "3D vizualizatsiya va hujjatlar siz to'lovning keyingi qismini 30% miqdorida to'laysiz biz ichki makonning fotorealistik tasvirlarini yaratamiz, barcha xonalarni muvofiqlashtiramiz. Barcha 3D vizualizatsiya tasdiqlangandan so'ng, oldindan to'lov amalga oshiriladi - hujjatlar bosqichi uchun 10%, biz chizmalar va texnik xususiyatlarni tayyorlaymiz. Tayyor dizayn loyihasini taqdim etamiz.",
      dialog1: "Ariza qoldiring",
      dialog2: "Ismingiz",
      dialog3: "Telefon raqamingiz",
      dialog4: "Bekor qilish",
      dialog5: "Yuborish",
  });

  let en = ref({
    phonen: "Phone Number:",
    lang: "En",
    russian: "Russian",
    uzbek: "Uzbek",
    english: "English",
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contacts: "Contacts",
    screen:
      "We offer a comprehensive approach, including concept development, selection of materials and furniture, as well as control over the execution of work. Our designers will develop a project, select furniture and materials, and monitor all the work. Our company highly values the trust of our customers and always strives to make every project special. Trust us, and your space will become not only beautiful, but also comfortable!",
    screenBottom:
      "Let's create a competent layout. We will develop a functional design with taste and calculate the repair costs.",
    more: "More about us",
    consult: "free consultation",
    ourprojects: "Our projects",
    ourprojectssubtitle:
      "In the portfolio page, we have collected completed projects based on our designs",
    knowmore: "Portfolio page",
    ourservices: "Our services",
    moreinfo: "More info",
    serivice1: "Engineering ",
    serivice2: "Design",
    serivice3: "construction",
    serivice4:
      "During the design process, we take into account your wishes and ideas to create a space that is ideally suited for you. We start with a consultation to find out your wishes, then create a 3D visualization of the future interior and select all the necessary materials.",
    serivice5:
      "We always strive to make every project special. To understand your wishes and needs, we create a 3D visualization of your wishes. After all, good design is important for all projects, as it not only makes the space beautiful, but also functional, comfortable and reflecting your personality.",
    serivice6:
      "We understand that renovation is not only a renewal of the space, but also an important stage to ensure its functionality and durability. Our specialists carefully monitor every stage of the renovation, from preparation and planning to completion and final inspection. We monitor the quality of materials, compliance with all standards and deadlines in order to avoid possible problems and ensure an ideal result.",
    calctitle: "DESIGN PROJECT COST CALCULATOR",
    calcsubtitle: "Choose which design project you need:",
    calctext:
      "Select, Specify the total area of m2 to find out the cost of the project.",
    calc: "enter the m2 size",
    calcprice: "Get price!",
    calchome: "Houses (apartments, plots)",
    calccommercial: "COMMERCIAL (Offices, hotels, cafes)",
    question: "FREQUENTLY ASKED QUESTIONS:",
    questionitem: "question_en",
    answeritem: "answer_en",
    contacwithus: "Contact us",
    name: "Fullname",
    namePlaceholder: "Write your name",
    number: "Your phone number",
    numberPlaceholder: "+998 77 777 77 77",
    zayavka: "Send !",
    socials: "WE ARE IN SOCIAL NETWORKS",
    contact: "Contacts",
    address: "Hushnavo 13A Tashkent, Uzbekistan",
    addressTitle: "Address:",
    aboutus: "About us",
    aboutusText:
      "On this page we have collected information about our company and our team,",
    aboutabout:
      `About us:
    <br> <br>
Our motto is: Quality is more important than money. 
    <br> <br>
Our experience is almost 6 years. 
Founder of SOFYA DESIGN STUDIO: Firdavs Makhkamov. 
    <br> <br>
Built facilities: Personal and business facilities from 100 m2. 
    <br> <br>
Projects and facilities completed all over the world: (City) Tashkent and the regions of Uzbekistan, Moscow, Kazakhstan, Dubai. 
    <br> <br>
We know that people, whether young or old, want comfort when they work, play sports, spend some kind of cultural holiday or wait for a guest. 
That is why all the projects we have implemented help people live well, feel comfortable and in a good mood. 
    <br> <br>
Trust between the client and the designer is strengthened not only when the ideal project is given up. Perhaps, when the project is implemented, if the client feels comfortable in the environment created by the designer, mutual trust will double. 
    <br> <br>
We offer a wide range of services: 
Architectural design, interior and exterior design. 
Construction. We take over all the care and management processes from 0.
<br> <br>
Our services: 
Interior design of a residential building:
Creating a design project is the most basic creative process. Dreams will come true, a future home will appear in your imagination and emotions will awaken. 
The customer's wishes are taken into account when designing the residence. 
    <br> <br>
Interior design of non-residential premises:
Offices, salons, boutiques, restaurants, spas, fitness clubs, hotels are grateful for our projects. 
    <br> <br>
Turnkey construction repair and finishing:
Completion of the project and carrying out all construction processes (private house, commercial premises, repair, finishing)
Reliable partners and an experienced team.`,
      protfolio: "Portfolio",
      port1: "Residential",
      port2: "Сommercial",
      steps: "STAGES OF WORK",
      steps1: "Contract",
      steps11: "We sign the contract and you make an advance payment of 30%",
      steps2: "Technical specification",
      steps22: "We contact the measurers in your city, they take photos and measurements of the room for us. We fill out the terms of reference for the project, where you write down all your wishes. We select analogs of interiors that you like.",
      steps3: "Planning and collages",
      steps33: "We create a planning solution (2-3 options), agree on the best one. You pay the next part of the payment in the amount of 30%. The collages created reflect the general color scheme, zoning of the space and the types of finishing materials used, as well as furniture and light sources (without specifying a specific manufacturer).",
      steps4: "3d visualization and documentation",
      steps44: "3d visualization and documentation You pay the next part of the payment in the amount of 30%. We create photorealistic images of the interior, coordinate all rooms. After approval of all 3D visualizations, an advance payment is made - 10% for the documentation stage, we prepare drawings and specifications. We present a ready-made design project.",
      dialog1: "Feedback",
      dialog2: "Your name",
      dialog3: "Phone number",
      dialog4: "Cancel",
      dialog5: "Send",
  });

  return { lang, once, ru, uz, en };
});
