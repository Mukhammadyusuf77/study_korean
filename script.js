// Data for lessons in different languages
const lessons = {
    en: [
        {
            title: "Lesson 1: Korean Alphabet",
            description: "In this lesson, you will learn the basics of Hangul, the Korean writing system. You will understand how to read and write the basic characters, vowels, and consonants.",
            examples: [
                "ㅏ (a): As in 아버지 (father).",
                "ㅂ (b): As in 밥 (rice).",
                "ㅎ (h): As in 하늘 (sky)."
            ]
        },
        {
            title: "Lesson 2: Basic Greetings",
            description: "This lesson teaches you common greetings in Korean. You will learn how to say 'hello', 'good morning', 'good evening', and other basic greetings used in daily conversation.",
            examples: [
                "안녕하세요 (Annyeonghaseyo): Hello / Hi / Good afternoon.",
                "좋은 아침입니다 (Joeun achimimnida): Good morning.",
                "안녕히 가세요 (Annyeonghi gaseyo): Goodbye! (when someone is leaving)"
            ]
        },
        {
            title: "Lesson 3: Self Introduction",
            description: "Learn how to introduce yourself in Korean. You will practice saying your name, age, nationality, and other personal details.",
            examples: [
                "저는 [Имя]입니다 (Jeoneun [Name] imnida): I am [Name].",
                "저는 [나라] 사람입니다 (Jeoneun [Country] saramimnida): I am from [Country].",
                "나이는 [Возраст]살입니다 (Naineun [Age] sal imnida): I am [Age] years old."
            ]
        },
        {
            title: "Lesson 4: Numbers",
            description: "This lesson will teach you how to count in Korean. You will learn both the native Korean numbers and the Sino-Korean numbers used for dates, times, and counting items.",
            examples: [
                "하나 (Hana): One.",
                "둘 (Dul): Two.",
                "셋 (Set): Three.",
                "일 (Il): One (used in Sino-Korean system for counting)."
            ]
        },
        {
            title: "Lesson 5: Days and Months",
            description: "In this lesson, you will learn how to say the days of the week and the months of the year in Korean. You will also learn how to ask and tell the date.",
            examples: [
                "월요일 (Woryoil): Monday.",
                "화요일 (Hwayoil): Tuesday.",
                "1월 (Iwol): January."
            ]
        },
        {
            title: "Lesson 6: Common Phrases",
            description: "This lesson introduces essential phrases for everyday conversations. You will learn expressions for asking for help, making requests, and other useful phrases.",
            examples: [
                "도와주세요 (Dowajuseyo): Please help me.",
                "감사합니다 (Gamsahamnida): Thank you.",
                "죄송합니다 (Joesonghamnida): I'm sorry."
            ]
        },
        {
            title: "Lesson 7: Asking Questions",
            description: "Learn how to ask basic questions in Korean. You will learn question words like 'what', 'where', 'how', and 'why', as well as how to form simple questions.",
            examples: [
                "뭐예요? (Mwoyeyo?): What is it?",
                "어디에요? (Eodieyo?): Where is it?",
                "왜요? (Waeyo?): Why?"
            ]
        },
        {
            title: "Lesson 8: Food Vocabulary",
            description: "In this lesson, you will learn Korean vocabulary related to food. You will be able to order food at a restaurant, talk about your favorite foods, and more.",
            examples: [
                "밥 (Bap): Rice.",
                "김치 (Kimchi): Kimchi (fermented vegetables).",
                "고기 (Gogi): Meat."
            ]
        },
        {
            title: "Lesson 9: Shopping",
            description: "This lesson will teach you basic phrases for shopping in Korea. You will learn how to ask for prices, sizes, and make purchases.",
            examples: [
                "이거 얼마에요? (Igeo eolmaeyo?): How much is this?",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): Do you have a larger size?",
                "이거 사고 싶어요 (Igeo sago sipeoyo): I want to buy this."
            ]
        },
        {
            title: "Lesson 10: Directions",
            description: "In this lesson, you will learn how to ask for and give directions in Korean. You will also learn how to navigate common locations like the subway, stores, and restaurants.",
            examples: [
                "왼쪽 (Oenjjok): Left.",
                "오른쪽 (Oreunjjok): Right.",
                "직진 (Jikjin): Straight ahead."
            ]
        },
        {
            title: "Lesson 11: Transportation",
            description: "Learn essential vocabulary for using transportation in Korea. This lesson will help you understand how to navigate public transit, ask for a ride, and more.",
            examples: [
                "버스 (Beoseu): Bus.",
                "지하철 (Jihacheol): Subway.",
                "택시 (Taeksi): Taxi."
            ]
        },
        {
            title: "Lesson 12: Weather",
            description: "In this lesson, you will learn how to talk about the weather in Korean. You will be able to describe the weather, ask about the forecast, and talk about the seasons.",
            examples: [
                "날씨가 좋아요 (Nalssiga joayo): The weather is nice.",
                "비가 와요 (Bigawayo): It’s raining.",
                "덥다 (Deopda): It’s hot."
            ]
        },
        {
            title: "Lesson 13: Family",
            description: "Learn vocabulary related to family members in Korean. You will be able to talk about your family, introduce family members, and ask others about theirs.",
            examples: [
                "어머니 (Eomeoni): Mother.",
                "아버지 (Abeoji): Father.",
                "형 (Hyeong): Older brother (for males)."
            ]
        },
        {
            title: "Lesson 14: Occupations",
            description: "This lesson will teach you common occupations in Korean. You will learn job titles, how to ask about someone's profession, and describe your own work.",
            examples: [
                "의사 (Uisa): Doctor.",
                "선생님 (Seonsaengnim): Teacher.",
                "직원 (Jigwon): Employee."
            ]
        },
        {
            title: "Lesson 15: Hobbies",
            description: "In this lesson, you will learn how to talk about your hobbies in Korean. You will practice expressing your interests, likes, and dislikes.",
            examples: [
                "운동 (Undong): Exercise.",
                "영화 보기 (Yeonghwa bogi): Watching movies.",
                "독서 (Dokseo): Reading books."
            ]
        },
        {
            title: "Lesson 16: Time",
            description: "Learn how to tell the time in Korean. You will practice asking for the time, understanding time-related vocabulary, and describing your daily schedule.",
            examples: [
                "지금 몇 시에요? (Jigeum myeot siyeyo?): What time is it now?",
                "3시 (3si): 3 o'clock.",
                "오전 (Ojeon): AM."
            ]
        },
        {
            title: "Lesson 17: Places",
            description: "In this lesson, you will learn words for common places in Korean. You will be able to talk about locations such as home, school, office, and public places.",
            examples: [
                "집 (Jip): House.",
                "학교 (Hakgyo): School.",
                "병원 (Byeongwon): Hospital."
            ]
        },
        {
            title: "Lesson 18: Adjectives",
            description: "Learn common adjectives in Korean. You will be able to describe things, people, and situations in more detail using adjectives.",
            examples: [
                "큰 (Keun): Big.",
                "작은 (Jageun): Small.",
                "빠른 (Ppareun): Fast."
            ]
        },
        {
            title: "Lesson 19: Verbs",
            description: "This lesson teaches you basic verbs and their usage in Korean. You will learn how to express actions, make requests, and form simple sentences.",
            examples: [
                "하다 (Hada): To do.",
                "가다 (Gada): To go.",
                "먹다 (Meokda): To eat."
            ]
        },
        {
            title: "Lesson 20: Practice Dialogues",
            description: "This lesson provides practice dialogues for different everyday situations. You will be able to role-play common conversations and improve your speaking skills.",
            examples: [
                "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
            ]
        }
    ],
    uz: [
        {
            "title": "Dars 1: Koreyscha Alifbo",
            "description": "Bu darsda siz Koreys yozuvi, Hangulni o‘rganasiz. Siz asosiy harflar, unli va undosh harflarni o‘qish va yozishni tushunasiz.",
            "examples": [
                "ㅏ (a): Otada (아버지) kabi.",
                "ㅂ (b): Non (밥) kabi.",
                "ㅎ (h): Osmon (하늘) kabi."
            ]
        },
        {
            "title": "Dars 2: Asosiy Salomlashuvlar",
            "description": "Bu darsda siz Koreys tilidagi umumiy salomlashuvlarni o‘rganasiz. Siz 'salom', 'yaxshi tong', 'yaxshi kechqurun' kabi oddiy salomlashuvlarni o‘rganasiz.",
            "examples": [
                "안녕하세요 (Annyeonghaseyo): Salom / Salomlashish / Yaxshi kun.",
                "좋은 아침입니다 (Joeun achimimnida): Yaxshi tong.",
                "안녕히 가세요 (Annyeonghi gaseyo): Xayr! (biror kishi ketayotganida)"
            ]
        },
        {
            "title": "Dars 3: O‘zini Tanishtirish",
            "description": "Koreys tilida o‘zingizni qanday tanishtirishni o‘rganasiz. Siz ismingiz, yoshingiz, millatingiz va boshqa shaxsiy ma'lumotlarni aytishni o‘rganasiz.",
            "examples": [
                "저는 [Ism]입니다 (Jeoneun [Ism] imnida): Men [Ism].",
                "저는 [Mamlakat] 사람입니다 (Jeoneun [Mamlakat] saramimnida): Men [Mamlakat] danman.",
                "나이는 [Yosh]살입니다 (Naineun [Yosh] sal imnida): Men [Yosh] yoshdaman."
            ]
        },
        {
            "title": "Dars 4: Sonlar",
            "description": "Bu darsda siz Koreys tilida sanashni o‘rganasiz. Siz Koreys tilidagi asl sonlar va Xitoy-Koreys sonlarini o‘rganasiz, bu sonlar sanash, sana va vaqtni ifodalashda ishlatiladi.",
            "examples": [
                "하나 (Hana): Bir.",
                "둘 (Dul): Ikki.",
                "셋 (Set): Uch.",
                "일 (Il): Bir (Xitoy-Koreys tizimida sanash uchun ishlatiladi)."
            ]
        },
        {
            "title": "Dars 5: Hafta Kunlari va Oylar",
            "description": "Bu darsda siz Koreys tilida hafta kunlari va yil oylarini qanday aytishni o‘rganasiz. Shuningdek, sanani so‘rash va aytishni o‘rganasiz.",
            "examples": [
                "월요일 (Woryoil): Dushanba.",
                "화요일 (Hwayoil): Seshanba.",
                "1월 (Iwol): Yanvar."
            ]
        },
        {
            "title": "Dars 6: Asosiy Iboralar",
            "description": "Bu darsda siz kundalik suhbatlar uchun kerakli iboralar bilan tanishasiz. Yordam so‘rash, iltimos qilish va boshqa foydali iboralarni o‘rganasiz.",
            "examples": [
                "도와주세요 (Dowajuseyo): Iltimos, yordam bering.",
                "감사합니다 (Gamsahamnida): Rahmat.",
                "죄송합니다 (Joesonghamnida): Kechirasiz."
            ]
        },
        {
            "title": "Dars 7: Savollar Berish",
            "description": "Koreys tilida asosiy savollarni qanday berishni o‘rganasiz. 'Nima', 'qayerda', 'qanday' va 'nega' kabi savollarni o‘rganasiz, shuningdek, oddiy savollarni qanday tuzishni o‘rganasiz.",
            "examples": [
                "뭐예요? (Mwoyeyo?): Bu nima?",
                "어디에요? (Eodieyo?): Bu qayerda?",
                "왜요? (Waeyo?): Nega?"
            ]
        },
        {
            "title": "Dars 8: Oziq-ovqat Leksikasi",
            "description": "Bu darsda siz Koreys tilida oziq-ovqat bilan bog‘liq so‘zlarni o‘rganasiz. Siz restoranda ovqat buyurtma berishni, sevimli taomlaringiz haqida gaplashishni va boshqa ko‘p narsalarni o‘rganasiz.",
            "examples": [
                "밥 (Bap): Guruch.",
                "김치 (Kimchi): Kimchi (fermentlangan sabzavotlar).",
                "고기 (Gogi): Go‘sht."
            ]
        },
        {
            "title": "Dars 9: Savdo-sotiq",
            "description": "Bu darsda siz Koreyada savdo qilish uchun kerakli iboralarni o‘rganasiz. Narxni so‘rash, o‘lchamni so‘rash va xarid qilishni o‘rganasiz.",
            "examples": [
                "이거 얼마에요? (Igeo eolmaeyo?): Bu nechaga?",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): Kattaroq o‘lchami bormi?",
                "이거 사고 싶어요 (Igeo sago sipeoyo): Men buni sotib olmoqchiman."
            ]
        },
        {
            "title": "Dars 10: Yo‘nalishlar",
            "description": "Bu darsda siz Koreys tilida yo‘nalishlar so‘rashni va berishni o‘rganasiz. Siz metro, do‘konlar va restoranlar kabi joylarda yo‘nalishlar bo‘yicha yordam olishni o‘rganasiz.",
            "examples": [
                "왼쪽 (Oenjjok): Chapga.",
                "오른쪽 (Oreunjjok): O‘ngga.",
                "직진 (Jikjin): To‘g‘ri."
            ]
        },
        {
            "title": "Dars 11: Transport",
            "description": "Bu darsda Koreyada transport vositalaridan foydalanish uchun kerakli so‘zlarni o‘rganasiz. Siz jamoat transportida yurishni, taksi chaqirishni va boshqalarni o‘rganasiz.",
            "examples": [
                "버스 (Beoseu): Avtobus.",
                "지하철 (Jihacheol): Metro.",
                "택시 (Taeksi): Taksi."
            ]
        },
        {
            "title": "Dars 12: Havo",
            "description": "Bu darsda siz Koreys tilida havoni qanday so‘zlashni o‘rganasiz. Siz ob-havoni tasvirlashni, prognoz so‘rashni va fasllar haqida gaplashishni o‘rganasiz.",
            "examples": [
                "날씨가 좋아요 (Nalssiga joayo): Havo yaxshi.",
                "비가 와요 (Bigawayo): Yomg‘ir yog‘ayapti.",
                "덥다 (Deopda): Issiq."
            ]
        },
        {
            "title": "Dars 13: Oila",
            "description": "Bu darsda siz Koreys tilida oila a'zolari bilan bog‘liq so‘zlarni o‘rganasiz. Siz o‘z oilangiz haqida gaplashishni, oila a'zolarini tanishtirishni va boshqalardan o‘z oilalari haqida so‘rashni o‘rganasiz.",
            "examples": [
                "어머니 (Eomeoni): Ona.",
                "아버지 (Abeoji): Otajon.",
                "형 (Hyeong): Katta aka (erkaklar uchun)."
            ]
        },
        {
            "title": "Dars 14: Kasblar",
            "description": "Bu darsda siz Koreys tilida kasblarni o‘rganasiz. Siz kasblarni, boshqalar bilan kasbi haqida so‘rashni va o‘z ishini tasvirlashni o‘rganasiz.",
            "examples": [
                "의사 (Uisa): Shifokor.",
                "선생님 (Seonsaengnim): O‘qituvchi.",
                "직원 (Jigwon): Xodim."
            ]
        },
        {
            "title": "Dars 15: Xobbi",
            "description": "Bu darsda siz Koreys tilida o‘z xobbiyingizni qanday so‘zlashni o‘rganasiz. Siz qiziqishlaringizni, yoqtirgan narsalaringizni va yoqtirmagan narsalaringizni ifodalashni o‘rganasiz.",
            "examples": [
                "운동 (Undong): Sport.",
                "영화 보기 (Yeonghwa bogi): Kino tomosha qilish.",
                "독서 (Dokseo): Kitob o‘qish."
            ]
        },
        {
            "title": "Dars 16: Vaqt",
            "description": "Bu darsda siz Koreys tilida vaqtni qanday aytishni o‘rganasiz. Siz vaqtni so‘rashni, vaqtga oid so‘zlarni tushunishni va kunlik jadvalingizni ifodalashni o‘rganasiz.",
            "examples": [
                "지금 몇 시에요? (Jigeum myeot siyeyo?): Hozir nechchi soat?",
                "3시 (3si): Uch soat.",
                "오전 (Ojeon): Tong (AM)."
            ]
        },
        {
            "title": "Dars 17: Joylar",
            "description": "Bu darsda siz Koreys tilida joylar so‘zlarini o‘rganasiz. Siz uy, maktab, ofis va jamoat joylari kabi joylar haqida gaplashishni o‘rganasiz.",
            "examples": [
                "집 (Jip): Uy.",
                "학교 (Hakgyo): Maktab.",
                "병원 (Byeongwon): Kasalxona."
            ]
        },
        {
            "title": "Dars 18: Sifatlar",
            "description": "Bu darsda siz Koreys tilida sifatlarni o‘rganasiz. Siz narsalar, odamlar va vaziyatlarni batafsilroq ta'riflashni o‘rganasiz.",
            "examples": [
                "큰 (Keun): Katta.",
                "작은 (Jageun): Kichik.",
                "빠른 (Ppareun): Tez."
            ]
        },
        {
            "title": "Dars 19: Fe'llar",
            "description": "Bu darsda siz asosiy fe'llarni o‘rganasiz va ularning qanday ishlatilishini o‘rganasiz. Siz harakatlarni ifodalash, so‘rovlar qilish va oddiy gaplar tuzishni o‘rganasiz.",
            "examples": [
                "하다 (Hada): Qilish.",
                "가다 (Gada): Borish.",
                "먹다 (Meokda): Yemoq."
            ]
        },
        {
            "title": "Dars 20: Dialoglar Bo‘yicha Mashq",
            "description": "Bu darsda siz turli kundalik vaziyatlarda amalga oshiriladigan amaliy dialoglar bilan tanishasiz. Siz umumiy suhbatlarni o‘ynab, suhbatlashish ko‘nikmalarini yaxshilaysiz.",
            "examples": [
                "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
            ]
        }
    ],
    ru: [
        {
            "title": "Урок 1: Корейский алфавит",
            "description": "На этом уроке вы узнаете основы Хангыль — корейской письменности. Вы научитесь читать и писать основные символы, гласные и согласные.",
            "examples": [
                "ㅏ (а): Как в слове 아버지 (отец).",
                "ㅂ (б): Как в слове 밥 (рис).",
                "ㅎ (х): Как в слове 하늘 (небо)."
            ]
        },
        {
            "title": "Урок 2: Основные приветствия",
            "description": "Этот урок научит вас основным приветствиям на корейском языке. Вы научитесь говорить 'здравствуйте', 'доброе утро', 'добрый вечер' и другие основные приветствия, используемые в повседневном общении.",
            "examples": [
                "안녕하세요 (Аннёнхасэё): Здравствуйте / Привет / Добрый день.",
                "좋은 아침입니다 (Джоун ачимимнида): Доброе утро.",
                "안녕히 가세요 (Аннёнхи касэё): До свидания! (когда кто-то уходит)"
            ]
        },
        {
            "title": "Урок 3: Самопредставление",
            "description": "Научитесь представлять себя на корейском языке. Вы попрактикуетесь в том, как сказать своё имя, возраст, национальность и другие личные данные.",
            "examples": [
                "저는 [Имя]입니다 (Чонын [Имя] имнида): Я [Имя].",
                "저는 [Страна] 사람입니다 (Чонын [Страна] сарамимнида): Я из [Страна].",
                "나이는 [Возраст]살입니다 (Наинэн [Возраст] сал имнида): Мне [Возраст] лет."
            ]
        },
        {
            "title": "Урок 4: Числа",
            "description": "Этот урок научит вас считать на корейском. Вы узнаете как использовать как родные корейские числа, так и китайско-корейские числа, которые используются для дат, времени и подсчета предметов.",
            "examples": [
                "하나 (хана): Один.",
                "둘 (туль): Два.",
                "셋 (сэт): Три.",
                "일 (иль): Один (используется в китайско-корейской системе для подсчета)."
            ]
        },
        {
            "title": "Урок 5: Дни недели и месяцы",
            "description": "На этом уроке вы узнаете, как на корейском языке называют дни недели и месяцы года. Вы также научитесь спрашивать и говорить дату.",
            "examples": [
                "월요일 (Ворёиль): Понедельник.",
                "화요일 (Хваёиль): Вторник.",
                "1월 (Иволь): Январь."
            ]
        },
        {
            "title": "Урок 6: Обычные фразы",
            "description": "Этот урок знакомит вас с важными фразами для повседневных разговоров. Вы научитесь выражениям для просьб, вопросов и других полезных фраз.",
            "examples": [
                "도와주세요 (Довацуйсеё): Пожалуйста, помогите мне.",
                "감사합니다 (Камсахамнида): Спасибо.",
                "죄송합니다 (Чоэсонхамнида): Извините."
            ]
        },
        {
            "title": "Урок 7: Задание вопросов",
            "description": "Научитесь задавать основные вопросы на корейском языке. Вы изучите вопросы типа 'что', 'где', 'как' и 'почему', а также как формировать простые вопросы.",
            "examples": [
                "뭐예요? (Моёё?): Что это?",
                "어디에요? (Одиэё?): Где это?",
                "왜요? (Уэё?): Почему?"
            ]
        },
        {
            "title": "Урок 8: Лексика еды",
            "description": "На этом уроке вы изучите корейскую лексику, связанную с едой. Вы сможете заказывать еду в ресторане, говорить о своих любимых блюдах и многом другом.",
            "examples": [
                "밥 (бап): Рис.",
                "김치 (кимчи): Кимчи (ферментированные овощи).",
                "고기 (коги): Мясо."
            ]
        },
        {
            "title": "Урок 9: Шоппинг",
            "description": "Этот урок научит вас основным фразам для шопинга в Корее. Вы научитесь спрашивать цену, размер и делать покупки.",
            "examples": [
                "이거 얼마에요? (Иго ольмаэё?): Сколько это стоит?",
                "큰 사이즈 있어요? (Кын сайдже иссэё?): У вас есть больший размер?",
                "이거 사고 싶어요 (Иго саго сипоё): Я хочу купить это."
            ]
        },
        {
            "title": "Урок 10: Направления",
            "description": "На этом уроке вы научитесь спрашивать и давать указания на корейском языке. Вы также научитесь ориентироваться в таких местах, как метро, магазины и рестораны.",
            "examples": [
                "왼쪽 (вэнджок): Налево.",
                "오른쪽 (орэнджок): Направо.",
                "직진 (чиджин): Прямо."
            ]
        },
        {
            "title": "Урок 11: Транспорт",
            "description": "Изучите важную лексику для использования транспорта в Корее. Этот урок поможет вам ориентироваться в общественном транспорте, заказывать такси и многое другое.",
            "examples": [
                "버스 (бос): Автобус.",
                "지하철 (чихачхоль): Метро.",
                "택시 (тэкси): Такси."
            ]
        },
        {
            "title": "Урок 12: Погода",
            "description": "На этом уроке вы научитесь говорить о погоде на корейском языке. Вы сможете описывать погоду, спрашивать о прогнозе и говорить о временах года.",
            "examples": [
                "날씨가 좋아요 (Нальссика джоайо): Погода хорошая.",
                "비가 와요 (Бига ваё): Идёт дождь.",
                "덥다 (Топта): Жарко."
            ]
        },
        {
            "title": "Урок 13: Семья",
            "description": "Изучите лексику, связанную с членами семьи на корейском языке. Вы сможете говорить о своей семье, представлять членов семьи и спрашивать других о их семье.",
            "examples": [
                "어머니 (Омони): Мать.",
                "아버지 (Абоджи): Отец.",
                "형 (Хён): Старший брат (для мужчин)."
            ]
        },
        {
            "title": "Урок 14: Профессии",
            "description": "Этот урок научит вас распространённым профессиям на корейском. Вы узнаете профессии, как спросить о профессии другого человека и как описать свою работу.",
            "examples": [
                "의사 (Уиса): Врач.",
                "선생님 (Сонсэнним): Учитель.",
                "직원 (Джигвон): Сотрудник."
            ]
        },
        {
            "title": "Урок 15: Хобби",
            "description": "На этом уроке вы научитесь говорить о своих хобби на корейском языке. Вы попрактикуетесь в выражении своих интересов, предпочтений и нелюбви.",
            "examples": [
                "운동 (Ундон): Упражнения.",
                "영화 보기 (Ёнхва боги): Смотреть фильмы.",
                "독서 (Доксо): Чтение книг."
            ]
        },
        {
            "title": "Урок 16: Время",
            "description": "Изучите, как говорить о времени на корейском языке. Вы научитесь спрашивать время, понимать лексику времени и описывать свой ежедневный график.",
            "examples": [
                "지금 몇 시에요? (Чигым мёс сиэё?): Который час?",
                "3시 (3си): Три часа.",
                "오전 (Оджон): Утро (AM)."
            ]
        },
        {
            "title": "Урок 17: Места",
            "description": "На этом уроке вы узнаете слова для обозначения мест на корейском языке. Вы сможете говорить о таких местах, как дом, школа, офис и общественные места.",
            "examples": [
                "집 (джип): Дом.",
                "학교 (Хаккё): Школа.",
                "병원 (Пхёнвон): Больница."
            ]
        },
        {
            "title": "Урок 18: Прилагательные",
            "description": "Изучите распространённые прилагательные на корейском языке. Вы сможете описывать вещи, людей и ситуации более детально с использованием прилагательных.",
            "examples": [
                "큰 (Кын): Большой.",
                "작은 (Чагын): Маленький.",
                "빠른 (Ппарын): Быстрый."
            ]
        },
        {
            "title": "Урок 19: Глаголы",
            "description": "Этот урок научит вас основным глаголам и их использованию на корейском. Вы научитесь выражать действия, делать просьбы и формировать простые предложения.",
            "examples": [
                "하다 (Хада): Делать.",
                "가다 (Када): Идти.",
                "먹다 (Мокда): Есть."
            ]
        },
        {
            "title": "Урок 20: Практика диалогов",
            "description": "Этот урок включает практические диалоги для разных повседневных ситуаций. Вы сможете разыгрывать общие разговоры и улучшать свои разговорные навыки.",
            "examples": [
                "A: 안녕하세요! (Аннёнхасэё!) B: 안녕하세요! (Аннёнхасэё!)",
                "A: 오늘 날씨가 어때요? (Онэль нальссика оэтэё?) B: 좋네요! (Джоннэё!)"
            ]
        }
    ],
    kz: [
        {
            "title": "Сабақ 1: Корей алфавиті",
            "description": "Бұл сабақта сіз корей жазуын, Hangul-ды үйренесіз. Сіз негізгі әріптерді, дауысты және дауыссыз әріптерді оқу және жазуды түсінесіз.",
            "examples": [
                "ㅏ (a): Әке (아버지) сияқты.",
                "ㅂ (b): Тағам (밥) сияқты.",
                "ㅎ (h): Аспан (하늘) сияқты."
            ]
        },
        {
            "title": "Сабақ 2: Негізгі амандасу сөздері",
            "description": "Бұл сабақта сіз корей тіліндегі жалпы амандасу сөздерін үйренесіз. Сіз 'сәлем', 'қайырлы таң', 'қайырлы кеш' сияқты қарапайым амандасуларды үйренесіз.",
            "examples": [
                "안녕하세요 (Annyeonghaseyo): Сәлем / Қайырлы күн.",
                "좋은 아침입니다 (Joeun achimimnida): Қайырлы таң.",
                "안녕히 가세요 (Annyeonghi gaseyo): Сау болыңыз! (кете жатқан адамға)"
            ]
        },
        {
            "title": "Сабақ 3: Өзін таныстыру",
            "description": "Корей тілінде өзіңізді қалай таныстыруды үйренесіз. Сіз есіміңіз, жасыңыз, ұлттық болуыңыз және басқа да жеке мәліметтерді айтуды үйренесіз.",
            "examples": [
                "저는 [Есім]입니다 (Jeoneun [Есім] imnida): Мен [Есім].",
                "저는 [Мемлекет] 사람입니다 (Jeoneun [Мемлекет] saramimnida): Мен [Мемлекет] тұрғынымын.",
                "나이는 [Жас]살입니다 (Naineun [Жас] sal imnida): Мен [Жас] жастамын."
            ]
        },
        {
            "title": "Сабақ 4: Санақ",
            "description": "Бұл сабақта сіз корей тілінде санап үйренесіз. Сіз корей тіліндегі негізгі сандар мен қытай-корей сандарын үйренесіз, олар санауда, күндер мен уақытты айтуда пайдаланылады.",
            "examples": [
                "하나 (Hana): Бір.",
                "둘 (Dul): Екі.",
                "셋 (Set): Үш.",
                "일 (Il): Бір (қытай-корей санақ жүйесімен)."
            ]
        },
        {
            "title": "Сабақ 5: Апта күндері мен айлар",
            "description": "Бұл сабақта сіз корей тілінде апта күндері мен айлармен танысасыз. Сонымен қатар, күндерді сұрау және айту әдістерін үйренесіз.",
            "examples": [
                "월요일 (Woryoil): Дүйсенбі.",
                "화요일 (Hwayoil): Сейсенбі.",
                "1월 (Iwol): Қаңтар."
            ]
        },
        {
            "title": "Сабақ 6: Негізгі сөз тіркестері",
            "description": "Бұл сабақта сіз күнделікті сөйлесу үшін қажет сөз тіркестерін үйренесіз. Көмек сұрау, өтініш жасау және басқа пайдалы сөз тіркестерін үйренесіз.",
            "examples": [
                "도와주세요 (Dowajuseyo): Көмектесіңізші.",
                "감사합니다 (Gamsahamnida): Рахмет.",
                "죄송합니다 (Joesonghamnida): Кешіріңіз."
            ]
        },
        {
            "title": "Сабақ 7: Сұрақ қою",
            "description": "Корей тілінде негізгі сұрақтарды қоюды үйренесіз. 'Не', 'қашан', 'қайда', 'неге' деген сұрақтарды үйренесіз және қарапайым сұрақтарды құрастыруды үйренесіз.",
            "examples": [
                "뭐예요? (Mwoyeyo?): Бұл не?",
                "어디에요? (Eodieyo?): Бұл қайда?",
                "왜요? (Waeyo?): Неге?"
            ]
        },
        {
            "title": "Сабақ 8: Тағам лексикасы",
            "description": "Бұл сабақта сіз корей тілінде тағаммен байланысты сөздерді үйренесіз. Сіз мейрамханада тамақ тапсырыс беруді, сүйікті тағамдарыңыз туралы әңгімелесуді және тағы да басқа көптеген нәрселерді үйренесіз.",
            "examples": [
                "밥 (Bap): Дәстүрлі тағам (палауы).",
                "김치 (Kimchi): Кимчи (қышқыл көкөніс).",
                "고기 (Gogi): Ет."
            ]
        },
        {
            "title": "Сабақ 9: Сауда жасау",
            "description": "Бұл сабақта сіз корей тілінде сауда жасау үшін қажетті сөздерді үйренесіз. Бағаны сұрау, өлшемді сұрау және сатып алу процестерімен танысасыз.",
            "examples": [
                "이거 얼마에요? (Igeo eolmaeyo?): Бұл қанша?",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): Үлкен өлшемі бар ма?",
                "이거 사고 싶어요 (Igeo sago sipeoyo): Мен мұны сатып алғым келеді."
            ]
        },
        {
            "title": "Сабақ 10: Бағыттарды сұрау",
            "description": "Бұл сабақта сіз корей тілінде бағыттарды сұрауды және беруді үйренесіз. Сіз метро, дүкендер және мейрамханалар сияқты жерлерде бағыттар бойынша көмек алуды үйренесіз.",
            "examples": [
                "왼쪽 (Oenjjok): Солға.",
                "오른쪽 (Oreunjjok): Оңға.",
                "직진 (Jikjin): Тікелей."
            ]
        },
        {
            "title": "Сабақ 11: Транспорт",
            "description": "Бұл сабақта сіз корей тілінде транспорт түрлерімен танысасыз. Қоғамдық көліктерді пайдалануды, такси шақыруды және басқа да көліктерді пайдалануды үйренесіз.",
            "examples": [
                "버스 (Beoseu): Автобус.",
                "지하철 (Jihacheol): Метро.",
                "택시 (Taeksi): Такси."
            ]
        },
        {
            "title": "Сабақ 12: Ауа-райы",
            "description": "Бұл сабақта сіз корей тілінде ауа-райын сұрауды және сипаттауды үйренесіз. Сіз ауа-райын сипаттауды, болжам сұрауды және маусымдар туралы әңгімелесуді үйренесіз.",
            "examples": [
                "날씨가 좋아요 (Nalssiga joayo): Ауа райы жақсы.",
                "비가 와요 (Bigawayo): Жаңбыр жауып жатыр.",
                "덥다 (Deopda): Ыстық."
            ]
        },
        {
            "title": "Сабақ 13: Отбасы",
            "description": "Бұл сабақта сіз корей тілінде отбасы мүшелерімен байланысты сөздерді үйренесіз. Сіз өз отбасыңызды таныстыруды, отбасы мүшелерін сипаттауды және басқалардан өз отбасылары туралы сұрауды үйренесіз.",
            "examples": [
                "어머니 (Eomeoni): Ана.",
                "아버지 (Abeoji): Әке.",
                "형 (Hyeong): Үлкен ағай (ер адамдар үшін)."
            ]
        },
        {
            "title": "Сабақ 14: Кәсіптер",
            "description": "Бұл сабақта сіз корей тілінде кәсіптерді үйренесіз. Сіз кәсіптер туралы сөйлесуді, басқалардан кәсіптері туралы сұрауды және өзіңіздің жұмыс орныңызды сипаттауды үйренесіз.",
            "examples": [
                "의사 (Uisa): Дәрігер.",
                "선생님 (Seonsaengnim): Мұғалім.",
                "직원 (Jigwon): Қызметкер."
            ]
        },
        {
            "title": "Сабақ 15: Хобби",
            "description": "Бұл сабақта сіз корей тілінде өз хоббиіңізді қалай сипаттауды үйренесіз. Сіз қызығушылықтарыңыз, ұнататын нәрселеріңіз және ұнатпайтын нәрселеріңіз туралы сөйлесуді үйренесіз.",
            "examples": [
                "운동 (Undong): Спорт.",
                "영화 보기 (Yeonghwa bogi): Кино көру.",
                "독서 (Dokseo): Кітап оқу."
            ]
        },
        {
            "title": "Сабақ 16: Уақыт",
            "description": "Бұл сабақта сіз корей тілінде уақытты қалай айтуға болатынын үйренесіз. Сіз уақытты сұрауды, уақытқа байланысты сөздерді түсінуді және күнделікті жоспарды құруды үйренесіз.",
            "examples": [
                "지금 몇 시에요? (Jigeum myeot siyeyo?): Қазір қанша уақыт?",
                "3시 (3si): Үш сағат.",
                "오전 (Ojeon): Таңғы уақыт (AM)."
            ]
        },
        {
            "title": "Сабақ 17: Орны",
            "description": "Бұл сабақта сіз корей тілінде орындар сөздерін үйренесіз. Сіз үй, мектеп, кеңсе және қоғамдық орындар сияқты жерлерді сипаттауды үйренесіз.",
            "examples": [
                "집 (Jip): Үй.",
                "학교 (Hakgyo): Мектеп.",
                "병원 (Byeongwon): Аурухана."
            ]
        },
        {
            "title": "Сабақ 18: Сипаттар",
            "description": "Бұл сабақта сіз корей тілінде заттарды сипаттайтын сын есімдерді үйренесіз. Сіз заттарды, адамдарды және жағдайларды толығырақ сипаттауды үйренесіз.",
            "examples": [
                "큰 (Keun): Үлкен.",
                "작은 (Jageun): Кіші.",
                "빠른 (Ppareun): Жылдам."
            ]
        },
        {
            "title": "Сабақ 19: Етістіктер",
            "description": "Бұл сабақта сіз корей тіліндегі негізгі етістіктерді үйренесіз және оларды қалай қолдануды білесіз. Сіз әрекеттерді сипаттауды, сұрауларды қоюды және қарапайым сөйлемдер құрастыруды үйренесіз.",
            "examples": [
                "하다 (Hada): Жасау.",
                "가다 (Gada): Бару.",
                "먹다 (Meokda): Тамақтану."
            ]
        },
        {
            "title": "Сабақ 20: Диалогтарды тәжірибе",
            "description": "Бұл сабақта сіз түрлі күнделікті жағдайларда қолданылатын диалогтармен танысасыз. Сіз әңгіме жүргізуді тәжірибе жасап, тілдік дағдыларыңызды жақсартасыз.",
            "examples": [
                "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
            ]
        }
    ],
    ky: [
        {
            "title": "Сабак 1: Корей алфавити",
            "description": "Бул сабакта сиз корей жазуу системасы Hangul жөнүндө негиздерди үйрөнөсүз. Сиз негизги тамгаларды, үндөөлөрдү жана унчукпаган тамгаларды окуп жана жазып үйрөнөсүз.",
            "examples": [
                "ㅏ (a): Атасы (아버지) сыяктуу.",
                "ㅂ (b): Тамак (밥) сыяктуу.",
                "ㅎ (h): Асман (하늘) сыяктуу."
            ]
        },
        {
            "title": "Сабак 2: Негизги амандашуу сөздөрү",
            "description": "Бул сабакта сиз корей тилинде жалпы амандашуу сөздөрүн үйрөнөсүз. Сиз 'салам', 'күндүзкү кайырлуу таң', 'кечиримдүү' сыяктуу негизги амандашуу сөздөрүн үйрөнөсүз.",
            "examples": [
                "안녕하세요 (Annyeonghaseyo): Салам / Кайырлуу күн.",
                "좋은 아침입니다 (Joeun achimimnida): Кайырлуу таң.",
                "안녕히 가세요 (Annyeonghi gaseyo): Кетип бара жаткан адамга 'Саламат бол' деп айтуу."
            ]
        },
        {
            "title": "Сабак 3: Өзүн тааныштырган сөздөр",
            "description": "Бул сабакта сиз өзүн тааныштыруу корей тилинде, атыңыз, жашыңыз, улуттук идентификацияңыз жана башка жеке маалыматтарды айтуу менен үйрөнөсүз.",
            "examples": [
                "저는 [Аты]입니다 (Jeoneun [Аты] imnida): Мен [Аты].",
                "저는 [Мамлекет] 사람입니다 (Jeoneun [Мамлекет] saramimnida): Мен [Мамлекет] мекендинденмин.",
                "나이는 [Жаш]살입니다 (Naineun [Жаш] sal imnida): Мен [Жаш] жаштамын."
            ]
        },
        {
            "title": "Сабак 4: Санап үйрөнүү",
            "description": "Бул сабакта сиз корей тилинде эсептөөнү үйрөнөсүз. Корей тилиндеги негизги санар менен бирге, Кытай-Корей система менен да эсептөөнү үйрөнөсүз.",
            "examples": [
                "하나 (Hana): Бир.",
                "둘 (Dul): Эки.",
                "셋 (Set): Үч.",
                "일 (Il): Бир (Кытай-Корей система менен)."
            ]
        },
        {
            "title": "Сабак 5: Апта күндөрү жана айлар",
            "description": "Бул сабакта сиз корей тилинде апта күндөрүн жана айларды айтууну үйрөнөсүз. Ошондой эле күндү сурап жана айтканды үйрөнөсүз.",
            "examples": [
                "월요일 (Woryoil): Дүйшөмбү.",
                "화요일 (Hwayoil): Шейшемби.",
                "1월 (Iwol): Январь."
            ]
        },
        {
            "title": "Сабак 6: Негизги сөздөр",
            "description": "Бул сабакта сиз күнүмдүк сүйлөшүүлөр үчүн маанилүү сөздөрдү үйрөнөсүз. Сиз жардам сурап, суроо берүүнү жана башка пайдалуу сөздөрдү үйрөнөсүз.",
            "examples": [
                "도와주세요 (Dowajuseyo): Маңа жардам бериңизчи.",
                "감사합니다 (Gamsahamnida): Рахмат.",
                "죄송합니다 (Joesonghamnida): Кечиресиз."
            ]
        },
        {
            "title": "Сабак 7: Сурак берүү",
            "description": "Бул сабакта сиз корей тилинде негизги суроолорду коюуну үйрөнөсүз. 'Не', 'кайда', 'кандай', 'неге' сыяктуу суроолорду үйрөнөсүз жана жөнөкөй суроолорду түзүүнү үйрөнөсүз.",
            "examples": [
                "뭐예요? (Mwoyeyo?): Бул эмне?",
                "어디에요? (Eodieyo?): Кайда?",
                "왜요? (Waeyo?): Неге?"
            ]
        },
        {
            "title": "Сабак 8: Таамак лексикасы",
            "description": "Бул сабакта сиз корей тилинде тамакка байланышкан сөздөрдү үйрөнөсүз. Сиз ресторанда тамак заказ кылууну, сүйүктүү тамактарыңыз жөнүндө сүйлөшүүнү жана башка көптөгөн сөздөрдү үйрөнөсүз.",
            "examples": [
                "밥 (Bap): Таамак (күрүч).",
                "김치 (Kimchi): Кимчи (кычкыл көкөніс).",
                "고기 (Gogi): Эт."
            ]
        },
        {
            "title": "Сабак 9: Соода кылуу",
            "description": "Бул сабакта сиз корей тилинде соода кылуу үчүн негизги сөздөрдү үйрөнөсүз. Бааларды сурап, өлчөмдөрдү сурап жана сатып алуу процессин үйрөнөсүз.",
            "examples": [
                "이거 얼마에요? (Igeo eolmaeyo?): Бул канча?",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): Чоң өлчөмү барбы?",
                "이거 사고 싶어요 (Igeo sago sipeoyo): Мен булду сатып алгым келет."
            ]
        },
        {
            "title": "Сабак 10: Бағыт көрсөтүү",
            "description": "Бул сабакта сиз корей тилинде кайда баруу үчүн сурап жана жооп алууну үйрөнөсүз. Сиз метро, дүкөндөр жана ресторандарда туура жолду сурап билесиз.",
            "examples": [
                "왼쪽 (Oenjjok): Солго.",
                "오른쪽 (Oreunjjok): Оңго.",
                "직진 (Jikjin): Түз."
            ]
        },
        {
            "title": "Сабак 11: Транспорт",
            "description": "Бул сабакта сиз корей тилинде транспортту колдонуу үчүн сөздөрдү үйрөнөсүз. Сиз коомдук транспортту колдонуу, такси чакыруу жана башка транспорт түрлөрү жөнүндө үйрөнөсүз.",
            "examples": [
                "버스 (Beoseu): Автобус.",
                "지하철 (Jihacheol): Метро.",
                "택시 (Taeksi): Такси."
            ]
        },
        {
            "title": "Сабак 12: Ауа-райы",
            "description": "Бул сабакта сиз корей тилинде ауа-райын сүйлөп үйрөнөсүз. Сиз аба ырайын сүрөттөп, болжолду сурап жана жыл мезгилдери жөнүндө сүйлөшүүгө үйрөнөсүз.",
            "examples": [
                "날씨가 좋아요 (Nalssiga joayo): Ауа-райы жакшы.",
                "비가 와요 (Bigawayo): Жаңбыр жаап жатат.",
                "덥다 (Deopda): Ысык."
            ]
        },
        {
            "title": "Сабак 13: Отбасы",
            "description": "Бул сабакта сиз корей тилинде үй-бүлө мүчөлөрү жөнүндө сөздөрдү үйрөнөсүз. Сиз үй-бүлөңүздү тааныштырууну, үй-бүлө мүчөлөрүн сурап жана башкалардын үй-бүлөлөрү жөнүндө сурап үйрөнөсүз.",
            "examples": [
                "어머니 (Eomeoni): Эне.",
                "아버지 (Abeoji): Ата.",
                "형 (Hyeong): Улуу агай (эркек үчүн)."
            ]
        },
        {
            "title": "Сабак 14: Кесиптер",
            "description": "Бул сабакта сиз корей тилинде кесиптер жөнүндө сөздөрдү үйрөнөсүз. Сиз жумуш ордуңузду жана башкалардын кесиптерин сурап, айтып үйрөнөсүз.",
            "examples": [
                "의사 (Uisa): Дарыгер.",
                "선생님 (Seonsaengnim): Окутуучу.",
                "직원 (Jigwon): Кызматкер."
            ]
        },
        {
            "title": "Сабак 15: Хоббилер",
            "description": "Бул сабакта сиз корей тилинде хоббилериңиз жөнүндө сүйлөп үйрөнөсүз. Сиз кызыкчылыктарыңыз, сүйүктүү нерселериңиз жана жакпай турган нерселериңиз жөнүндө сүйлөшө аласыз.",
            "examples": [
                "운동 (Undong): Спорт.",
                "영화 보기 (Yeonghwa bogi): Кино көрүү.",
                "독서 (Dokseo): Китеп окуу."
            ]
        },
        {
            "title": "Сабак 16: Убакыт",
            "description": "Бул сабакта сиз корей тилинде убакытты кантип айтууну үйрөнөсүз. Сиз убакытты сурап, убакытка байланыштуу сөздөрдү түшүнүп, күнүмдүк пландарды түзүүнү үйрөнөсүз.",
            "examples": [
                "지금 몇 시에요? (Jigeum myeot siyeyo?): Азыр канча?",
                "3시 (3si): Үч саат.",
                "오전 (Ojeon): Таңкы убакыт (AM)."
            ]
        },
        {
            "title": "Сабак 17: Орнору",
            "description": "Бул сабакта сиз корей тилинде жериңизди кантип айтса болорун үйрөнөсүз. Сиз үй, мектеп, кеңсе сыяктуу ордуңузду көрсөтө аласыз.",
            "examples": [
                "집 (Jip): Үй.",
                "학교 (Hakgyo): Мектеп.",
                "병원 (Byeongwon): Ооруканалар."
            ]
        },
        {
            "title": "Сабак 18: Сипаттар",
            "description": "Бул сабакта сиз корей тилинде нерселердин өзгөчөлүктөрүн сүрөттөөнү үйрөнөсүз. Сиз нерселерди, адамдарды, жагдайларды түшүнүп, аларды түшүндүрө аласыз.",
            "examples": [
                "큰 (Keun): Чоң.",
                "작은 (Jageun): Кичинекей.",
                "빠른 (Ppareun): Жылдам."
            ]
        },
        {
            "title": "Сабак 19: Этистиктер",
            "description": "Бул сабакта сиз корей тилинде этистиктерди үйрөнөсүз жана аларды кантип колдонууга боло тургандыгын түшүнөсүз. Сиз аракеттерди сүрөттөп, сурап, сүйлөм түзүүнү үйрөнөсүз.",
            "examples": [
                "하다 (Hada): Жасоо.",
                "가다 (Gada): Барат.",
                "먹다 (Meokda): Тамактануу."
            ]
        },
        {
            "title": "Сабак 20: Диалогдорду тажрыйбадан өткөрүү",
            "description": "Бул сабакта сиз корей тилиндеги күнүмдүк ситуацияларга жараша диалогдорду үйрөнөсүз. Сиз сүйлөшүүлөрдү жасап, тилдик көндүмдөрүңүздү өркүндөтөсүз.",
            "examples": [
                "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
            ]
        }
    ],
    vi: [
        {
            "title": "Bài học 1: Bảng chữ cái Hàn Quốc",
            "description": "Trong bài học này, bạn sẽ học các nguyên tắc cơ bản của hệ thống chữ viết Hàn Quốc, Hangul. Bạn sẽ học cách đọc và viết các chữ cái cơ bản, nguyên âm và phụ âm.",
            "examples": [
                "ㅏ (a): Giống như từ '아버지' (aba) - bố.",
                "ㅂ (b): Giống như từ '밥' (bap) - cơm.",
                "ㅎ (h): Giống như từ '하늘' (haneul) - trời."
            ]
        },
        {
            "title": "Bài học 2: Lời chào cơ bản",
            "description": "Trong bài học này, bạn sẽ học các lời chào cơ bản trong tiếng Hàn. Bạn sẽ học cách nói 'xin chào', 'chào buổi sáng', 'xin lỗi' và các câu chào thông dụng khác.",
            "examples": [
                "안녕하세요 (Annyeonghaseyo): Xin chào / Chào buổi sáng.",
                "좋은 아침입니다 (Joeun achimimnida): Chào buổi sáng.",
                "안녕히 가세요 (Annyeonghi gaseyo): Tạm biệt (khi người khác rời đi)."
            ]
        },
        {
            "title": "Bài học 3: Giới thiệu bản thân",
            "description": "Trong bài học này, bạn sẽ học cách giới thiệu bản thân trong tiếng Hàn, bao gồm tên, tuổi, quốc tịch và các thông tin cá nhân khác.",
            "examples": [
                "저는 [Tên]입니다 (Jeoneun [Tên] imnida): Tôi là [Tên].",
                "저는 [Quốc gia] 사람입니다 (Jeoneun [Quốc gia] saramimnida): Tôi là người [Quốc gia].",
                "나이는 [Tuổi]살입니다 (Naineun [Tuổi] sal imnida): Tôi [Tuổi] tuổi."
            ]
        },
        {
            "title": "Bài học 4: Học đếm",
            "description": "Trong bài học này, bạn sẽ học cách đếm trong tiếng Hàn. Bạn sẽ học cách đếm bằng các hệ thống số Hàn Quốc và số Trung Hàn.",
            "examples": [
                "하나 (Hana): Một.",
                "둘 (Dul): Hai.",
                "셋 (Set): Ba.",
                "일 (Il): Một (theo hệ thống Trung-Hàn)."
            ]
        },
        {
            "title": "Bài học 5: Các ngày trong tuần và tháng",
            "description": "Trong bài học này, bạn sẽ học cách nói các ngày trong tuần và các tháng trong tiếng Hàn. Bạn cũng sẽ học cách hỏi và nói về thời gian trong ngày.",
            "examples": [
                "월요일 (Woryoil): Thứ Hai.",
                "화요일 (Hwayoil): Thứ Ba.",
                "1월 (Iwol): Tháng Một."
            ]
        },
        {
            "title": "Bài học 6: Từ vựng cơ bản",
            "description": "Trong bài học này, bạn sẽ học các từ vựng cơ bản để sử dụng trong các cuộc hội thoại hàng ngày. Bạn sẽ học cách yêu cầu giúp đỡ, hỏi về các vấn đề và nhiều từ vựng hữu ích khác.",
            "examples": [
                "도와주세요 (Dowajuseyo): Xin giúp tôi.",
                "감사합니다 (Gamsahamnida): Cảm ơn.",
                "죄송합니다 (Joesonghamnida): Xin lỗi."
            ]
        },
        {
            "title": "Bài học 7: Câu hỏi",
            "description": "Trong bài học này, bạn sẽ học cách hỏi các câu hỏi cơ bản trong tiếng Hàn. Bạn sẽ học cách hỏi 'cái gì', 'ở đâu', 'như thế nào', 'tại sao' và tạo câu hỏi đơn giản.",
            "examples": [
                "뭐예요? (Mwoyeyo?): Cái gì vậy?",
                "어디에요? (Eodieyo?): Ở đâu?",
                "왜요? (Waeyo?): Tại sao?"
            ]
        },
        {
            "title": "Bài học 8: Từ vựng về thực phẩm",
            "description": "Trong bài học này, bạn sẽ học từ vựng về thực phẩm trong tiếng Hàn. Bạn sẽ học cách gọi món ăn trong nhà hàng, nói về món ăn yêu thích của bạn và các từ vựng khác liên quan đến thực phẩm.",
            "examples": [
                "밥 (Bap): Cơm.",
                "김치 (Kimchi): Kimchi (dưa cải).",
                "고기 (Gogi): Thịt."
            ]
        },
        {
            "title": "Bài học 9: Mua sắm",
            "description": "Trong bài học này, bạn sẽ học từ vựng liên quan đến việc mua sắm. Bạn sẽ học cách hỏi giá, hỏi về kích thước và các từ vựng liên quan đến việc mua hàng.",
            "examples": [
                "이거 얼마에요? (Igeo eolmaeyo?): Cái này bao nhiêu tiền?",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): Có kích thước lớn không?",
                "이거 사고 싶어요 (Igeo sago sipeoyo): Tôi muốn mua cái này."
            ]
        },
        {
            "title": "Bài học 10: Hỏi đường",
            "description": "Trong bài học này, bạn sẽ học cách hỏi đường và chỉ đường trong tiếng Hàn. Bạn sẽ học cách hỏi đường đến các địa điểm như trạm tàu điện ngầm, cửa hàng và nhà hàng.",
            "examples": [
                "왼쪽 (Oenjjok): Rẽ trái.",
                "오른쪽 (Oreunjjok): Rẽ phải.",
                "직진 (Jikjin): Đi thẳng."
            ]
        },
        {
            "title": "Bài học 11: Phương tiện giao thông",
            "description": "Trong bài học này, bạn sẽ học từ vựng về các phương tiện giao thông. Bạn sẽ học cách sử dụng phương tiện công cộng, gọi taxi và các phương tiện khác.",
            "examples": [
                "버스 (Beoseu): Xe buýt.",
                "지하철 (Jihacheol): Tàu điện ngầm.",
                "택시 (Taeksi): Taxi."
            ]
        },
        {
            "title": "Bài học 12: Thời tiết",
            "description": "Trong bài học này, bạn sẽ học cách nói về thời tiết trong tiếng Hàn. Bạn sẽ học cách mô tả thời tiết, hỏi về dự báo thời tiết và nói về các mùa trong năm.",
            "examples": [
                "날씨가 좋아요 (Nalssiga joayo): Thời tiết đẹp.",
                "비가 와요 (Bigawayo): Mưa đang rơi.",
                "덥다 (Deopda): Nóng."
            ]
        },
        {
            "title": "Bài học 13: Gia đình",
            "description": "Trong bài học này, bạn sẽ học từ vựng về các thành viên trong gia đình. Bạn sẽ học cách giới thiệu gia đình của mình và hỏi về gia đình của người khác.",
            "examples": [
                "어머니 (Eomeoni): Mẹ.",
                "아버지 (Abeoji): Bố.",
                "형 (Hyeong): Anh trai (dành cho nam)."
            ]
        },
        {
            "title": "Bài học 14: Nghề nghiệp",
            "description": "Trong bài học này, bạn sẽ học từ vựng về nghề nghiệp. Bạn sẽ học cách nói về công việc của mình và hỏi về nghề nghiệp của người khác.",
            "examples": [
                "의사 (Uisa): Bác sĩ.",
                "선생님 (Seonsaengnim): Giáo viên.",
                "직원 (Jigwon): Nhân viên."
            ]
        },
        {
            "title": "Bài học 15: Sở thích",
            "description": "Trong bài học này, bạn sẽ học cách nói về sở thích của mình. Bạn sẽ học cách nói về các hoạt động yêu thích, những thứ bạn thích làm và những thứ bạn không thích.",
            "examples": [
                "운동 (Undong): Thể thao.",
                "영화 보기 (Yeonghwa bogi): Xem phim.",
                "독서 (Dokseo): Đọc sách."
            ]
        },
        {
            "title": "Bài học 16: Thời gian",
            "description": "Trong bài học này, bạn sẽ học cách nói về thời gian trong tiếng Hàn. Bạn sẽ học cách hỏi giờ, nói về thời gian và lập kế hoạch hàng ngày.",
            "examples": [
                "지금 몇 시에요? (Jigeum myeot siyeyo?): Bây giờ là mấy giờ?",
                "3시 (3si): Ba giờ.",
                "오전 (Ojeon): Buổi sáng (AM)."
            ]
        },
        {
            "title": "Bài học 17: Địa điểm",
            "description": "Trong bài học này, bạn sẽ học cách nói về các địa điểm trong tiếng Hàn. Bạn sẽ học cách nói về nơi bạn ở, trường học, văn phòng và các địa điểm khác.",
            "examples": [
                "집 (Jip): Nhà.",
                "학교 (Hakgyo): Trường học.",
                "병원 (Byeongwon): Bệnh viện."
            ]
        },
        {
            "title": "Bài học 18: Tính từ",
            "description": "Trong bài học này, bạn sẽ học cách miêu tả tính chất của đồ vật trong tiếng Hàn. Bạn sẽ học cách mô tả các vật thể, con người và tình huống.",
            "examples": [
                "큰 (Keun): Lớn.",
                "작은 (Jageun): Nhỏ.",
                "빠른 (Ppareun): Nhanh."
            ]
        },
        {
            "title": "Bài học 19: Động từ",
            "description": "Trong bài học này, bạn sẽ học các động từ cơ bản trong tiếng Hàn và cách sử dụng chúng trong câu. Bạn sẽ học cách diễn tả hành động và tạo câu sử dụng động từ.",
            "examples": [
                "하다 (Hada): Làm.",
                "가다 (Gada): Đi.",
                "먹다 (Meokda): Ăn."
            ]
        },
        {
            "title": "Bài học 20: Thực hành đối thoại",
            "description": "Trong bài học này, bạn sẽ thực hành các cuộc đối thoại trong các tình huống hàng ngày. Bạn sẽ học cách tạo ra các cuộc trò chuyện và cải thiện kỹ năng giao tiếp của mình.",
            "examples": [
                "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
            ]
        }
    ],
    th: [
        {
            "title": "บทเรียน 1: อักษรเกาหลี",
            "description": "ในบทเรียนนี้คุณจะได้เรียนรู้พื้นฐานของระบบการเขียนเกาหลี ฮันกูล คุณจะเข้าใจวิธีการอ่านและเขียนตัวอักษรพื้นฐาน เสียงสระ และพยัญชนะ.",
            "examples": [
                "ㅏ (a): เช่นในคำว่า '아버지' (อาบอจี) - พ่อ.",
                "ㅂ (b): เช่นในคำว่า '밥' (บับ) - ข้าว.",
                "ㅎ (h): เช่นในคำว่า '하늘' (ฮานึล) - ท้องฟ้า."
            ]
        },
        {
            "title": "บทเรียน 2: การทักทายพื้นฐาน",
            "description": "บทเรียนนี้จะสอนคำทักทายทั่วไปในภาษาเกาหลี คุณจะได้เรียนรู้วิธีพูด 'สวัสดี', 'สวัสดีตอนเช้า', 'ลาก่อน' และคำทักทายอื่นๆ ที่ใช้ในบทสนทนาทั่วไป.",
            "examples": [
                "안녕하세요 (อันยองฮาเซโย): สวัสดี / สวัสดีตอนบ่าย.",
                "좋은 아침입니다 (โจอึน อาชิมิมนิดา): สวัสดีตอนเช้า.",
                "안녕히 가세요 (อันยองฮี กาเซโย): ลาก่อน! (เมื่อใครบางคนกำลังจะไป)"
            ]
        },
        {
            "title": "บทเรียน 3: การแนะนำตัว",
            "description": "เรียนรู้วิธีการแนะนำตัวเองในภาษาเกาหลี คุณจะฝึกพูดชื่อ อายุ สัญชาติ และข้อมูลส่วนตัวอื่นๆ.",
            "examples": [
                "저는 [ชื่อ]입니다 (ชอนึน [ชื่อ] อิมนิดา): ฉันคือ [ชื่อ].",
                "저는 [ประเทศ] 사람입니다 (ชอนึน [ประเทศ] ซารามิมนิดา): ฉันมาจาก [ประเทศ].",
                "나이는 [อายุ]살입니다 (นาอินึน [อายุ] ซัล อิมนิดา): ฉันอายุ [อายุ] ปี."
            ]
        },
        {
            "title": "บทเรียน 4: การนับเลข",
            "description": "บทเรียนนี้จะสอนวิธีการนับเลขในภาษาเกาหลี คุณจะได้เรียนรู้ทั้งตัวเลขเกาหลีดั้งเดิมและตัวเลขที่ใช้ในระบบจีนเกาหลีสำหรับวันที่ เวลา และการนับสิ่งของ.",
            "examples": [
                "하나 (ฮานา): หนึ่ง.",
                "둘 (ดุล): สอง.",
                "셋 (เซท): สาม.",
                "일 (อิล): หนึ่ง (ใช้ในระบบจีนเกาหลี)."
            ]
        },
        {
            "title": "บทเรียน 5: วันและเดือน",
            "description": "ในบทเรียนนี้คุณจะเรียนรู้วิธีการบอกวันในสัปดาห์และเดือนในภาษาเกาหลี คุณจะได้เรียนรู้วิธีถามและบอกวันที่.",
            "examples": [
                "월요일 (วอลโยอิล): วันจันทร์.",
                "화요일 (ฮวาโยอิล): วันอังคาร.",
                "1월 (อีวอล): เดือนมกราคม."
            ]
        },
        {
            "title": "บทเรียน 6: วลีทั่วไป",
            "description": "บทเรียนนี้จะสอนคำพูดพื้นฐานสำหรับการสนทนาทุกวัน คุณจะได้เรียนรู้คำแสดงความขอความช่วยเหลือ การขอร้อง และคำพูดที่เป็นประโยชน์อื่นๆ.",
            "examples": [
                "도와주세요 (โดวาจูเซโย): กรุณาช่วยฉัน.",
                "감사합니다 (คามซาฮัม니다): ขอบคุณ.",
                "죄송합니다 (โจซงฮัม니다): ขอโทษ."
            ]
        },
        {
            "title": "บทเรียน 7: การถามคำถาม",
            "description": "เรียนรู้วิธีถามคำถามพื้นฐานในภาษาเกาหลี คุณจะได้เรียนรู้คำถามต่างๆ เช่น 'อะไร', 'ที่ไหน', 'อย่างไร', และ 'ทำไม' รวมถึงวิธีการตั้งคำถามง่ายๆ.",
            "examples": [
                "뭐예요? (มอยเยโย?): นี่คืออะไร?",
                "어디에요? (ออดีเยโย?): ที่ไหน?",
                "왜요? (แวโย?): ทำไม?"
            ]
        },
        {
            "title": "บทเรียน 8: คำศัพท์อาหาร",
            "description": "ในบทเรียนนี้คุณจะเรียนรู้คำศัพท์ภาษาเกาหลีที่เกี่ยวข้องกับอาหาร คุณจะสามารถสั่งอาหารในร้านอาหาร พูดถึงอาหารที่ชื่นชอบ และอื่นๆ.",
            "examples": [
                "밥 (บับ): ข้าว.",
                "김치 (คิมชี): คิมชี (ผักดอง).",
                "고기 (โกกิ): เนื้อ."
            ]
        },
        {
            "title": "บทเรียน 9: การช็อปปิ้ง",
            "description": "บทเรียนนี้จะสอนคำพูดพื้นฐานสำหรับการช็อปปิ้งในเกาหลี คุณจะได้เรียนรู้วิธีถามราคา ขนาด และการซื้อสินค้าต่างๆ.",
            "examples": [
                "이거 얼마에요? (อีโก ออลมาเอโย?): อันนี้ราคาเท่าไหร่?",
                "큰 사이즈 있어요? (คึน ซาอีจือ อิสซอยโย?): มีขนาดใหญ่ไหม?",
                "이거 사고 싶어요 (อีโก ซาโก ชีพอยโย): ฉันอยากซื้ออันนี้."
            ]
        },
        {
            "title": "บทเรียน 10: การขอทาง",
            "description": "ในบทเรียนนี้คุณจะเรียนรู้วิธีการขอและบอกทางในภาษาเกาหลี คุณจะได้เรียนรู้วิธีถามทางไปยังสถานที่ต่างๆ เช่น รถไฟฟ้า ร้านค้า และร้านอาหาร.",
            "examples": [
                "왼쪽 (เวนจ็อก): ซ้าย.",
                "오른쪽 (โอรึนจ็อก): ขวา.",
                "직진 (จิกจิน): ตรงไป."
            ]
        },
        {
            "title": "บทเรียน 11: การเดินทาง",
            "description": "เรียนรู้คำศัพท์ที่จำเป็นสำหรับการเดินทางในเกาหลี บทเรียนนี้จะช่วยให้คุณเข้าใจการใช้ระบบขนส่งสาธารณะ การเรียกรถแท็กซี่ และอื่นๆ.",
            "examples": [
                "버스 (บอซึ): รถบัส.",
                "지하철 (จิฮาเชล): รถไฟใต้ดิน.",
                "택시 (แท็กซี): แท็กซี่."
            ]
        },
        {
            "title": "บทเรียน 12: อากาศ",
            "description": "ในบทเรียนนี้คุณจะได้เรียนรู้วิธีพูดเกี่ยวกับสภาพอากาศในภาษาเกาหลี คุณจะสามารถบรรยายอากาศ ถามพยากรณ์อากาศ และพูดถึงฤดูกาล.",
            "examples": [
                "날씨가 좋아요 (นัลชีกา โจอาโย): อากาศดี.",
                "비가 와요 (บีกา วาโย): ฝนตก.",
                "덥다 (ดอบตา): ร้อน."
            ]
        },
        {
            "title": "บทเรียน 13: ครอบครัว",
            "description": "เรียนรู้คำศัพท์เกี่ยวกับสมาชิกในครอบครัวในภาษาเกาหลี คุณจะสามารถพูดถึงครอบครัวของตัวเอง แนะนำสมาชิกในครอบครัว และถามเกี่ยวกับครอบครัวของผู้อื่น.",
            "examples": [
                "어머니 (ออมอนี): แม่.",
                "아버지 (อาบอจี): พ่อ.",
                "형 (ฮยอง): พี่ชาย (สำหรับผู้ชาย)."
            ]
        },
        {
            "title": "บทเรียน 14: อาชีพ",
            "description": "บทเรียนนี้จะสอนคำศัพท์เกี่ยวกับอาชีพในภาษาเกาหลี คุณจะเรียนรู้ชื่ออาชีพ วิธีถามเกี่ยวกับอาชีพของใครบางคน และบอกอาชีพของตัวเอง.",
            "examples": [
                "의사 (อุยซา): หมอ.",
                "선생님 (ซอนแซงนิม): ครู.",
                "직원 (จิกวอน): พนักงาน."
            ]
        },
        {
            "title": "บทเรียน 15: งานอดิเรก",
            "description": "ในบทเรียนนี้คุณจะเรียนรู้วิธีพูดเกี่ยวกับงานอดิเรกของคุณในภาษาเกาหลี คุณจะฝึกแสดงความสนใจ ความชอบและความไม่ชอบของตัวเอง.",
            "examples": [
                "운동 (อุนดง): ออกกำลังกาย.",
                "영화 보기 (ยองฮวา โบกิ): ดูหนัง.",
                "독서 (ดกซอ): การอ่านหนังสือ."
            ]
        },
        {
            "title": "บทเรียน 16: เวลา",
            "description": "เรียนรู้วิธีบอกเวลาในภาษาเกาหลี คุณจะฝึกการถามเวลา เข้าใจคำศัพท์เกี่ยวกับเวลา และอธิบายตารางเวลาของคุณ.",
            "examples": [
                "지금 몇 시에요? (จีกึม มยอซิเอโย?): ตอนนี้กี่โมง?",
                "3시 (ซามซี): 3 โมง.",
                "오전 (โอเจอน): ก่อนเที่ยง (AM)."
            ]
        },
        {
            "title": "บทเรียน 17: สถานที่",
            "description": "เรียนรู้วิธีพูดเกี่ยวกับสถานที่ต่างๆ คุณจะได้เรียนรู้คำศัพท์สถานที่ที่สำคัญ เช่น บ้าน โรงเรียน สำนักงาน และอื่นๆ.",
            "examples": [
                "집 (จิพ): บ้าน.",
                "학교 (ฮักคโย): โรงเรียน.",
                "병원 (พยองวอน): โรงพยาบาล."
            ]
        },
        {
            "title": "บทเรียน 18: คุณลักษณะ",
            "description": "ในบทเรียนนี้คุณจะได้เรียนรู้คำศัพท์ที่ใช้บรรยายลักษณะของคน สิ่งของ หรือสถานการณ์ในภาษาเกาหลี.",
            "examples": [
                "큰 (คึน): ใหญ่.",
                "작은 (จาอึน): เล็ก.",
                "빠른 (ปาเรน): เร็ว."
            ]
        },
        {
            "title": "บทเรียน 19: กริยา",
            "description": "บทเรียนนี้จะสอนคำกริยาพื้นฐานในภาษาเกาหลี คุณจะได้เรียนรู้วิธีการใช้คำกริยาต่างๆ ในประโยค.",
            "examples": [
                "하다 (ฮาดา): ทำ.",
                "가다 (คาดา): ไป.",
                "먹다 (มอกดา): กิน."
            ]
        },
        {
            "title": "บทเรียน 20: การสนทนาฝึกหัด",
            "description": "ในบทเรียนนี้คุณจะได้ฝึกฝนการสนทนาในสถานการณ์ต่างๆ คุณจะสามารถสร้างบทสนทนาและพัฒนาทักษะการพูด.",
            "examples": [
                "A: 안녕하세요! (อันยองฮาเซโย!) B: 안녕하세요! (อันยองฮาเซโย!)",
                "A: 오늘 날씨가 어때요? (โอนึล นัลชีกา ออเตโย?) B: 좋네요! (โจแนนโย!)"
            ]
        }
    ],
    tr: [
        {
            "title": "Ders 1: Kore Alfabesi",
            "description": "Bu derste, Kore'nin yazı sistemi olan Hangeul'ü öğreneceksiniz. Temel harfleri, ünlüleri ve sessiz harfleri nasıl okuyup yazacağınızı öğreneceksiniz.",
            "examples": [
                "ㅏ (a): '아버지' (abeoji) - Baba gibi.",
                "ㅂ (b): '밥' (bap) - Pilav gibi.",
                "ㅎ (h): '하늘' (haneul) - Gökyüzü gibi."
            ]
        },
        {
            "title": "Ders 2: Temel Selamlaşmalar",
            "description": "Bu derste, Korece'deki yaygın selamlaşma ifadelerini öğreneceksiniz. 'Merhaba', 'Günaydın', 'Hoşça kal' gibi temel ifadelerle tanışacaksınız.",
            "examples": [
                "안녕하세요 (annyeonghaseyo): Merhaba.",
                "좋은 아침입니다 (joeun achimimnida): Günaydın.",
                "안녕히 가세요 (annyeonghi gaseyo): Hoşça kal! (Birinin gittiği zaman)"
            ]
        },
        {
            "title": "Ders 3: Kendini Tanıtma",
            "description": "Bu derste, Korece'de kendinizi tanıtmayı öğreneceksiniz. Adınızı, yaşınızı, milliyetinizi ve diğer kişisel bilgilerinizi nasıl söyleyeceğinizi öğreneceksiniz.",
            "examples": [
                "저는 [isim]입니다 (jeoneun [isim] imnida): Ben [isim]im.",
                "저는 [ülke] 사람입니다 (jeoneun [ülke] saramimnida): Ben [ülke]liyim.",
                "나이는 [yaş]살입니다 (naineun [yaş] sal imnida): Benim yaşım [yaş] yaşında."
            ]
        },
        {
            "title": "Ders 4: Sayılar",
            "description": "Bu derste Korece sayıları öğreneceksiniz. Hem Korece geleneksel sayıları hem de Koreli Çin sayılarıyla ilgili bilgi sahibi olacaksınız.",
            "examples": [
                "하나 (hana): Bir.",
                "둘 (dul): İki.",
                "셋 (set): Üç.",
                "일 (il): Bir (Çin Kore sayılarıyla)."
            ]
        },
        {
            "title": "Ders 5: Günler ve Aylar",
            "description": "Bu derste, Korece'de günleri ve ayları öğrenebilirsiniz. Tarih hakkında nasıl konuşulacağını ve sormayı öğreneceksiniz.",
            "examples": [
                "월요일 (woryoil): Pazartesi.",
                "화요일 (hwa-yoil): Salı.",
                "1월 (irwol): Ocak."
            ]
        },
        {
            "title": "Ders 6: Yaygın İfadeler",
            "description": "Bu derste, günlük konuşmalar için temel Korece ifadeler öğreneceksiniz. Yardım istemek, rica etmek ve diğer yaygın ifadelerle pratik yapacaksınız.",
            "examples": [
                "도와주세요 (dowajuseyo): Lütfen yardım edin.",
                "감사합니다 (gamsahamnida): Teşekkür ederim.",
                "죄송합니다 (joesonghamnida): Üzgünüm."
            ]
        },
        {
            "title": "Ders 7: Soru Cümleleri",
            "description": "Bu derste, Korece'de soru cümleleri kurmayı öğreneceksiniz. 'Ne', 'Nerede', 'Nasıl', 'Neden' gibi soruları nasıl soracağınızı öğrenebilirsiniz.",
            "examples": [
                "뭐예요? (mwoyeyo?): Bu nedir?",
                "어디에요? (eodieyo?): Nerede?",
                "왜요? (waeyo?): Neden?"
            ]
        },
        {
            "title": "Ders 8: Yemek Terimleri",
            "description": "Bu derste, Korece yemekle ilgili terimleri öğreneceksiniz. Restoranlarda yemek siparişi verirken ya da favori yemeklerinizi konuşurken kullanabileceksiniz.",
            "examples": [
                "밥 (bap): Pilav.",
                "김치 (kimchi): Kimchi (fermente lahana).",
                "고기 (gogi): Et."
            ]
        },
        {
            "title": "Ders 9: Alışveriş",
            "description": "Bu derste, Korece alışveriş yaparken kullanabileceğiniz ifadeleri öğreneceksiniz. Fiyat sormak, beden soruları ve ürün satın almak gibi temel ifadelerle pratik yapacaksınız.",
            "examples": [
                "이거 얼마에요? (igeo eolmaeyo?): Bu ne kadar?",
                "큰 사이즈 있어요? (keun saijeu isseoyo?): Büyük beden var mı?",
                "이거 사고 싶어요 (igeo sago sipeoyo): Bunu almak istiyorum."
            ]
        },
        {
            "title": "Ders 10: Yön Sorma",
            "description": "Bu derste, Korece'de yön sorma ifadelerini öğreneceksiniz. Bir yere nasıl gideceğinizi sormak ve yolları nasıl tarif edeceğinizi öğrenebilirsiniz.",
            "examples": [
                "왼쪽 (oenjjok): Sol.",
                "오른쪽 (oreunjjok): Sağ.",
                "직진 (jikjin): Düz git."
            ]
        },
        {
            "title": "Ders 11: Seyahat",
            "description": "Bu derste, Korece seyahatle ilgili ifadeler öğreneceksiniz. Toplu taşıma kullanma, taksiye binme ve seyahatinizi planlama gibi konularda pratik yapacaksınız.",
            "examples": [
                "버스 (beoseu): Otobüs.",
                "지하철 (jihacheol): Metro.",
                "택시 (taeksi): Taksi."
            ]
        },
        {
            "title": "Ders 12: Hava Durumu",
            "description": "Bu derste, Korece hava durumu hakkında konuşma becerilerinizi geliştireceksiniz. Hava durumunu tarif etmek, hava durumu tahmini yapmak ve mevsimleri tartışmak.",
            "examples": [
                "날씨가 좋아요 (nalssiga joayo): Hava güzel.",
                "비가 와요 (biga wayo): Yağmur yağıyor.",
                "덥다 (deopda): Sıcak."
            ]
        },
        {
            "title": "Ders 13: Aile",
            "description": "Bu derste, Korece aile üyeleriyle ilgili terimleri öğreneceksiniz. Ailenizi tanıtabilir ve başkalarının ailesi hakkında konuşabilirsiniz.",
            "examples": [
                "어머니 (eomeoni): Anne.",
                "아버지 (abeoji): Baba.",
                "형 (hyeong): Abi (erkek için)."
            ]
        },
        {
            "title": "Ders 14: Meslekler",
            "description": "Bu derste, Korece meslek terimlerini öğreneceksiniz. Mesleklerinizi anlatabilir ve başkalarının mesleklerini sorabilirsiniz.",
            "examples": [
                "의사 (uisa): Doktor.",
                "선생님 (seonsaengnim): Öğretmen.",
                "직원 (jigwon): Çalışan."
            ]
        },
        {
            "title": "Ders 15: Hobiler",
            "description": "Bu derste, Korece hobiler hakkında konuşabileceksiniz. İlgi alanlarınız ve beğenileriniz hakkında nasıl konuşacağınızı öğreneceksiniz.",
            "examples": [
                "운동 (undong): Spor yapmak.",
                "영화 보기 (yeonghwa bogi): Film izlemek.",
                "독서 (dokseo): Kitap okumak."
            ]
        },
        {
            "title": "Ders 16: Saat",
            "description": "Bu derste, Korece saati nasıl söyleyeceğinizi öğreneceksiniz. Saat sormak ve kendi programınızı anlatmak için gerekli ifadeleri öğrenebilirsiniz.",
            "examples": [
                "지금 몇 시에요? (jigeum myeot sieyo?): Şu an saat kaç?",
                "3시 (3si): Saat 3.",
                "오전 (ojeon): Sabah (AM)."
            ]
        },
        {
            "title": "Ders 17: Yerler",
            "description": "Bu derste, Korece yerler ve mekanlar hakkında konuşabileceksiniz. Ev, okul, ofis gibi yerleri öğrenebilirsiniz.",
            "examples": [
                "집 (jip): Ev.",
                "학교 (hakgyo): Okul.",
                "병원 (byeongwon): Hastane."
            ]
        },
        {
            "title": "Ders 18: Nitelikler",
            "description": "Bu derste, Korece'de bir şeyin veya birinin niteliğini nasıl açıklayacağınızı öğreneceksiniz. Fiziksel özellikler ve diğer nitelikler hakkında konuşabilirsiniz.",
            "examples": [
                "큰 (keun): Büyük.",
                "작은 (jageun): Küçük.",
                "빠른 (ppareun): Hızlı."
            ]
        },
        {
            "title": "Ders 19: Fiiller",
            "description": "Bu derste, Korece fiilleri öğreneceksiniz. Cümlelerde fiillerin nasıl kullanılacağını anlayacaksınız.",
            "examples": [
                "하다 (hada): Yapmak.",
                "가다 (gada): Gitmek.",
                "먹다 (meokda): Yemek."
            ]
        },
        {
            "title": "Ders 20: Konuşma Pratiği",
            "description": "Bu derste, Korece'de konuşma becerilerinizi geliştireceksiniz. Temel konuşma diyaloglarını pratiğe dökerek iletişim becerilerinizi artırabilirsiniz.",
            "examples": [
                "A: 안녕하세요! (annyeonghaseyo!) B: 안녕하세요! (annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (oneul nalssiga eottaeyo?) B: 좋네요! (jonneyo!)"
            ]
        }
    ],
    ne: [
        {
            "title": "पाठ 1: कोरियाली वर्णमाला",
            "description": "यस पाठमा, तपाईं हंगेुल को आधारहरू सिक्नुहुनेछ, कोरियाली लेखन प्रणाली। तपाईंलाई आधारभूत वर्णहरू, स्वरहरू, र व्यञ्जनहरू कसरी पढ्न र लेख्न भन्ने कुरा थाहा हुनेछ।",
            "examples": [
                "ㅏ (a): '아버지' (abeoji) - बाबु जस्तो।",
                "ㅂ (b): '밥' (bap) - चामल जस्तो।",
                "ㅎ (h): '하늘' (haneul) - आकाश जस्तो।"
            ]
        },
        {
            "title": "पाठ 2: आधारभूत अभिवादनहरू",
            "description": "यस पाठमा, तपाईं कोरियालीमा साधारण अभिवादनहरू सिक्नुहुनेछ। तपाईं 'नमस्ते', 'सुप्रभात', 'शुभ साँझ' र अन्य सामान्य अभिवादनहरू प्रयोग गर्न सिक्नुहुनेछ।",
            "examples": [
                "안녕하세요 (annyeonghaseyo): नमस्ते।",
                "좋은 아침입니다 (joeun achimimnida): सुप्रभात।",
                "안녕히 가세요 (annyeonghi gaseyo): बिदाइ! (कोही जानु अघि)"
            ]
        },
        {
            "title": "पाठ 3: आत्म-परिचय",
            "description": "कोरियालीमा आफ्नो परिचय दिन सिक्नुहोस्। तपाईं आफ्नो नाम, उमेर, राष्ट्रियता र अन्य व्यक्तिगत विवरणहरू कसरी भन्न सक्नुहुन्छ भनेर अभ्यास गर्नुहुनेछ।",
            "examples": [
                "저는 [नाम]입니다 (jeoneun [नाम] imnida): म [नाम] हुँ।",
                "저는 [देश] 사람입니다 (jeoneun [देश] saramimnida): म [देश] बाट हुँ।",
                "나이는 [उमेर]살입니다 (naineun [उमेर] sal imnida): मेरो उमेर [उमेर] वर्ष हो।"
            ]
        },
        {
            "title": "पाठ 4: अंकहरू",
            "description": "यस पाठमा तपाईं कोरियाली अंकहरू सिक्नुहुनेछ। तपाईंले पारंपरिक कोरियाली अंकहरू र चिनियाँ कोरियाली अंकहरू पनि सिक्नुहुनेछ।",
            "examples": [
                "하나 (hana): एक।",
                "둘 (dul): दुई।",
                "셋 (set): तीन।",
                "일 (il): एक (चिनियाँ कोरियाली प्रणालीमा)।"
            ]
        },
        {
            "title": "पाठ 5: दिन र महिना",
            "description": "यस पाठमा, तपाईं कोरियालीमा हप्ता र महिना कसरि भन्न सकिन्छ भनेर सिक्नुहुनेछ। तपाईं मिति सोध्न र बताउन पनि सिक्नुहुनेछ।",
            "examples": [
                "월요일 (woryoil): सोमबार।",
                "화요일 (hwa-yoil): मंगलबार।",
                "1월 (irwol): जनवरी।"
            ]
        },
        {
            "title": "पाठ 6: सामान्य वाक्यहरू",
            "description": "यस पाठमा, तपाईंको दैनिक संवादको लागि आवश्यक वाक्यहरू सिक्न सक्नुहुनेछ। तपाईं मद्दत माग्ने, अनुरोध गर्ने र अन्य उपयोगी वाक्यहरू सिक्न सक्नुहुनेछ।",
            "examples": [
                "도와주세요 (dowajuseyo): कृपया मद्दत गर्नुहोस्।",
                "감사합니다 (gamsahamnida): धन्यवाद।",
                "죄송합니다 (joesonghamnida): म माफी चाहन्छु।"
            ]
        },
        {
            "title": "पाठ 7: प्रश्न सोध्नु",
            "description": "यस पाठमा, तपाईं कोरियालीमा सामान्य प्रश्नहरू सोध्न सिक्नुहुनेछ। तपाईं 'के', 'कहाँ', 'कसरी', 'किन' जस्ता प्रश्न शब्दहरू सिक्नुहुनेछ।",
            "examples": [
                "뭐예요? (mwoyeyo?): यो के हो?",
                "어디에요? (eodieyo?): यो कहाँ हो?",
                "왜요? (waeyo?): किन?"
            ]
        },
        {
            "title": "पाठ 8: खाना शब्दावली",
            "description": "यस पाठमा, तपाईं कोरियालीमा खाना सम्बन्धी शब्दावली सिक्नुहुनेछ। तपाईं रेस्टुरेन्टमा खाना अर्डर गर्न, तपाईंको मनपर्ने खाना बारेमा कुरा गर्न र अरु कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "밥 (bap): भात।",
                "김치 (kimchi): किम्ची (अचार)।",
                "고기 (gogi): मासु।"
            ]
        },
        {
            "title": "पाठ 9: किनमेल",
            "description": "यस पाठमा, तपाईं कोरियालीमा किनमेल गर्दा प्रयोग गरिने वाक्यहरू सिक्नुहुनेछ। तपाईं मूल्य सोध्न, साइज सोध्न र किनमेल गर्न सिक्नुहुनेछ।",
            "examples": [
                "이거 얼마에요? (igeo eolmaeyo?): यो कति हो?",
                "큰 사이즈 있어요? (keun saijeu isseoyo?): तपाईंको साइज ठुलो छ?",
                "이거 사고 싶어요 (igeo sago sipeoyo): म यो किन्न चाहन्छु।"
            ]
        },
        {
            "title": "पाठ 10: दिशा सोध्नु",
            "description": "यस पाठमा, तपाईं कोरियालीमा दिशा सोध्ने र दिनेसम्मका वाक्यहरू सिक्नुहुनेछ। तपाईं सामान्य स्थानहरू जस्तै मेट्रो, पसल र रेस्टुरेन्टहरूको बारेमा कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "왼쪽 (oenjjok): बाँया।",
                "오른쪽 (oreunjjok): दायाँ।",
                "직진 (jikjin): सिधा।"
            ]
        },
        {
            "title": "पाठ 11: यातायात",
            "description": "यस पाठमा, तपाईं कोरियाली यातायातसँग सम्बन्धित शब्दावली सिक्नुहुनेछ। तपाईं सार्वजनिक यातायात प्रयोग गर्ने, सवारी माग्ने र अरु जानकारी प्राप्त गर्ने क्षमता विकास गर्नुहुनेछ।",
            "examples": [
                "버스 (beoseu): बस।",
                "지하철 (jihacheol): मेट्रो।",
                "택시 (taeksi): ट्याक्सी।"
            ]
        },
        {
            "title": "पाठ 12: मौसम",
            "description": "यस पाठमा, तपाईं कोरियालीमा मौसमको बारेमा कुरा गर्न सिक्नुहुनेछ। तपाईं मौसमको वर्णन गर्न, पूर्वानुमान सोध्न र ऋतुहरूको बारेमा कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "날씨가 좋아요 (nalssiga joayo): मौसम राम्रो छ।",
                "비가 와요 (biga wayo): वर्षा भइरहेको छ।",
                "덥다 (deopda): तातो छ।"
            ]
        },
        {
            "title": "पाठ 13: परिवार",
            "description": "यस पाठमा, तपाईं कोरियालीमा परिवारसँग सम्बन्धित शब्दहरू सिक्नुहुनेछ। तपाईं आफ्नो परिवारको बारेमा कुरा गर्न र अरुका परिवारको बारेमा सोध्न सक्नुहुनेछ।",
            "examples": [
                "어머니 (eomeoni): आमा।",
                "아버지 (abeoji): बुवा।",
                "형 (hyeong): दाजु (पुरुषको लागि)।"
            ]
        },
        {
            "title": "पाठ 14: पेशा",
            "description": "यस पाठमा, तपाईं कोरियाली पेशासँग सम्बन्धित शब्दहरू सिक्नुहुनेछ। तपाईं विभिन्न पेशाहरूको बारेमा कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "의사 (uisa): डाक्टर।",
                "선생님 (seonsaengnim): शिक्षक।",
                "직원 (jigwon): कर्मचारी।"
            ]
        },
        {
            "title": "पाठ 15: शौक",
            "description": "यस पाठमा, तपाईं कोरियालीमा आफ्नो शौकको बारेमा कुरा गर्न सिक्नुहुनेछ। तपाईंको रुचि, मनपर्ने र अप्रिय कुराहरूको बारेमा व्यक्त गर्न सक्नुहुनेछ।",
            "examples": [
                "운동 (undong): व्यायाम।",
                "영화 보기 (yeonghwa bogi): चलचित्र हेर्नु।",
                "독서 (dokseo): पुस्तक पढ्नु।"
            ]
        },
        {
            "title": "पाठ 16: समय",
            "description": "यस पाठमा, तपाईं कोरियालीमा समय कसरी भन्न सकिन्छ भनेर सिक्नुहुनेछ। तपाईं समय सोध्न र दैनिक तालिका बारेमा कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "지금 몇 시에요? (jigeum myeot sieyo?): अहिले कति बजे हो?",
                "3시 (3si): ३ बजे।",
                "오전 (ojeon): बिहान (AM)।"
            ]
        },
        {
            "title": "पाठ 17: स्थानहरू",
            "description": "यस पाठमा, तपाईं कोरियालीमा सामान्य स्थानहरूको बारेमा सिक्नुहुनेछ। तपाईं घर, स्कूल, अफिस र सार्वजनिक स्थानहरूको बारेमा कुरा गर्न सक्नुहुनेछ।",
            "examples": [
                "집 (jip): घर।",
                "학교 (hakgyo): स्कूल।",
                "병원 (byeongwon): अस्पताल।"
            ]
        },
        {
            "title": "पाठ 18: विशेषणहरू",
            "description": "यस पाठमा, तपाईं कोरियालीमा कुनै वस्तु वा व्यक्तिको विशेषता कसरि भन्न सकिन्छ भनेर सिक्नुहुनेछ। तपाईंको शारीरिक विशेषता र अन्य गुणहरूलाई व्यक्त गर्न सक्नुहुनेछ।",
            "examples": [
                "큰 (keun): ठूलो।",
                "작은 (jageun): सानो।",
                "빠른 (ppareun): छिटो।"
            ]
        },
        {
            "title": "पाठ 19: क्रियापदहरू",
            "description": "यस पाठमा, तपाईं कोरियाली क्रियापदहरूको बारेमा सिक्नुहुनेछ। तपाईंले क्रियापदहरूको प्रयोग कसरी गर्नुपर्ने थाहा पाउनुहुनेछ।",
            "examples": [
                "하다 (hada): गर्न।",
                "가다 (gada): जानु।",
                "먹다 (meokda): खाना खाने।"
            ]
        },
        {
            "title": "पाठ 20: संवाद अभ्यास",
            "description": "यस पाठमा, तपाईं कोरियालीमा संवाद अभ्यास गर्न सक्नुहुनेछ। तपाईंको बोल्ने सीपलाई सुधार्नको लागि सामान्य संवादहरू अभ्यास गर्नुहोस्।",
            "examples": [
                "A: 안녕하세요! (annyeonghaseyo!) B: 안녕하세요! (annyeonghaseyo!)",
                "A: 오늘 날씨가 어때요? (oneul nalssiga eottaeyo?) B: 좋네요! (jonneyo!)"
            ]
        }
    ],
    si: [
        {
            "title": "පාඩම 1: කොරියානු අකුරු මාලාව",
            "description": "මෙම පාඩම තුළ, ඔබ හන්ගුල් නම් කොරියානු අකුරු මාලාවේ මුලික කරුණු ඉගෙනගන්නවා. අකුරු, ස්වර සහ ව්‍යංජන ලිවීම හා කියවීම පිළිබඳ පුරුදු වන්න.",
            "examples": [
                "ㅏ (a): '아버지' (abeoji) - තාත්තා වැනි.",
                "ㅂ (b): '밥' (bap) - බත් වැනි.",
                "ㅎ (h): '하늘' (haneul) - ආකාශය වැනි."
            ]
        },
        {
            "title": "පාඩම 2: මූලික ආචාර",
            "description": "මෙම පාඩම තුළ, ඔබ කොරියානු භාෂාවේ මූලික ආචාර ඉගෙනගන්නවා. 'ආයුබෝවන්', 'සුභ උදෑසනක්', 'සුභ සැන්දෑවක්' වැනි ආචාර භාවිතා කරන්න ඉගෙනගන්න.",
            "examples": [
                "안녕하세요 (annyeonghaseyo): ආයුබෝවන්.",
                "좋은 아침입니다 (joeun achimimnida): සුභ උදෑසනක්.",
                "안녕히 가세요 (annyeonghi gaseyo): ගමන් කරන්න! (යන්නාට කලින්)"
            ]
        },
        {
            "title": "පාඩම 3: ස්වයං හඳුනාගැනීම්",
            "description": "කොරියානු භාෂාවේ ඔබ ගැන හඳුනාගන්න ඉගෙනගන්න. ඔබගේ නම, වයස, ජාතිකත්වය සහ වෙනත් පුද්ගලික විස්තර කියන ආකාරය අභ්‍යාස කරන්න.",
            "examples": [
                "저는 [නම]입니다 (jeoneun [නම] imnida): මම [නම] ය.",
                "저는 [රට] 사람입니다 (jeoneun [රට] saramimnida): මම [රට]වට අයෙක්.",
                "나이는 [වයස]살입니다 (naineun [වයස] sal imnida): මගේ වයස [වයස] ය."
            ]
        },
        {
            "title": "පාඩම 4: ඉලක්කම්",
            "description": "මෙම පාඩම තුළ, ඔබ කොරියානු ඉලක්කම් ඉගෙනගන්නවා. සම්ප්‍රදායික කොරියානු සහ චීන කොරියානු පද්ධති දෙකම ඔබට පැහැදිළි වනු ඇත.",
            "examples": [
                "하나 (hana): එක.",
                "둘 (dul): දෙක.",
                "셋 (set): තුන.",
                "일 (il): එක (චීන කොරියානු පද්ධති)."
            ]
        },
        {
            "title": "පාඩම 5: දවස් සහ මාස",
            "description": "මෙම පාඩම තුළ, ඔබ කොරියානු භාෂාවේ සතියේ දින සහ මාස කියන ආකාරය ඉගෙනගන්නවා. දිනයක් විමසන සහ කියන ආකාරය අභ්‍යාස කරන්න.",
            "examples": [
                "월요일 (woryoil): සඳුදා.",
                "화요일 (hwa-yoil): අඟහරුවාදා.",
                "1월 (irwol): ජනවාරි."
            ]
        },
        {
            "title": "පාඩම 6: සාමාන්‍ය වාක්‍ය",
            "description": "මෙම පාඩම තුළ, ඔබේ දෛනික සංවාද සඳහා ප්‍රයෝජනවත් වාක්‍ය ඉගෙනගන්න.",
            "examples": [
                "도와주세요 (dowajuseyo): කරුණාකර උදව් කරන්න.",
                "감사합니다 (gamsahamnida): ස්තූතියි.",
                "죄송합니다 (joesonghamnida): සමාවන්න."
            ]
        },
        {
            "title": "පාඩම 7: ප්‍රශ්න අසන්න",
            "description": "මෙම පාඩම තුළ, ඔබ කොරියානු භාෂාවේ ප්‍රශ්න අසන්න ඉගෙනගන්නවා. 'කවුරුද', 'කොහෙද', 'කොහොමද', 'ඇයිද' වැනි ප්‍රශ්න වචන අභ්‍යාස කරන්න.",
            "examples": [
                "뭐예요? (mwoyeyo?): මේ මොකක්ද?",
                "어디에요? (eodieyo?): මේ කොහෙද?",
                "왜요? (waeyo?): ඇයි?"
            ]
        },
        {
            "title": "පාඩම 8: ආහාර ශබ්දාවලිය",
            "description": "මෙම පාඩම තුළ, ඔබ කොරියානු භාෂාවේ ආහාර අදාළ ශබ්ද ඉගෙනගන්න.",
            "examples": [
                "밥 (bap): බත්.",
                "김치 (kimchi): කිම්චි (අච්චාරු).",
                "고기 (gogi): මස්."
            ]
        },
        {
            "title": "පාඩම 9: සාප්පු ගැන්ම",
            "description": "මෙම පාඩම තුළ, කොරියානු සාප්පු ගැන්මේදී ප්‍රයෝජනවත් වාක්‍ය ඉගෙනගන්න.",
            "examples": [
                "이거 얼마에요? (igeo eolmaeyo?): මේක කීයක්ද?",
                "큰 사이즈 있어요? (keun saijeu isseoyo?): විශාල ප්‍රමාණයක් තිබේද?",
                "이거 사고 싶어요 (igeo sago sipeoyo): මට මේක ගන්න අවශ්‍යයි."
            ]
        },
        {
            "title": "පාඩම 10: දිශානිය ඇසීම",
            "description": "මෙම පාඩම තුළ, කොරියානු භාෂාවේ දිශානිය අසන සහ ලබාදෙන ආකාරය ඉගෙනගන්න.",
            "examples": [
                "왼쪽 (oenjjok): වම්පස.",
                "오른쪽 (oreunjjok): දකුණුපස.",
                "직진 (jikjin): සෘජුව."
            ]
        }
    ],
    kk: [
        {
            "title": "1-сабақ: Корея әліпбиі",
            "description": "Бұл сабақта сіз корей жазу жүйесінің негіздері - Хангыльді үйренесіз. Әріптерді, дауысты және дауыссыз дыбыстарды оқып және жазуды үйренесіз.",
            "examples": [
                "ㅏ (a): '아버지' (abeoji) - әке деген сөздегі дыбыс.",
                "ㅂ (b): '밥' (bap) - күріш деген сөздегі дыбыс.",
                "ㅎ (h): '하늘' (haneul) - аспан деген сөздегі дыбыс."
            ]
        },
        {
            "title": "2-сабақ: Негізгі сәлемдесу",
            "description": "Бұл сабақта корей тіліндегі күнделікті қолданылатын негізгі сәлемдесулерді үйренесіз. 'Сәлем', 'Қайырлы таң', 'Қайырлы кеш' секілді сөздерді меңгересіз.",
            "examples": [
                "안녕하세요 (annyeonghaseyo): Сәлеметсіз бе / Сәлем.",
                "좋은 아침입니다 (joeun achimimnida): Қайырлы таң.",
                "안녕히 가세요 (annyeonghi gaseyo): Қош болыңыз! (кетіп бара жатқан адамға)"
            ]
        },
        {
            "title": "3-сабақ: Өзіңді таныстыру",
            "description": "Корей тілінде өзіңізді қалай таныстыруды үйреніңіз. Есіміңізді, жасыңызды, ұлтыңызды және басқа жеке мәліметтерді айту тәсілдерін меңгересіз.",
            "examples": [
                "저는 [Есім]입니다 (jeoneun [Есім] imnida): Мен [Есім].",
                "저는 [Ел] 사람입니다 (jeoneun [Ел] saramimnida): Мен [Ел] тұрғынымын.",
                "나이는 [Жас]살입니다 (naineun [Жас] sal imnida): Менің жасым [Жас]."
            ]
        },
        {
            "title": "4-сабақ: Сандар",
            "description": "Бұл сабақта корей сандарын үйренесіз. Сіз корейдің жергілікті және қытай корей жүйелерін түсініп, қолдануды үйренесіз.",
            "examples": [
                "하나 (hana): Бір.",
                "둘 (dul): Екі.",
                "셋 (set): Үш.",
                "일 (il): Бір (қытай корей жүйесінде)."
            ]
        },
        {
            "title": "5-сабақ: Күндер мен айлар",
            "description": "Бұл сабақта сіз апта күндері мен жыл айларын корей тілінде атауды үйренесіз. Сондай-ақ күнді қалай сұрау және айту керектігін меңгересіз.",
            "examples": [
                "월요일 (woryoil): Дүйсенбі.",
                "화요일 (hwa-yoil): Сейсенбі.",
                "1월 (irwol): Қаңтар."
            ]
        },
        {
            "title": "6-сабақ: Жалпы фразалар",
            "description": "Бұл сабақ күнделікті сөйлесулерде пайдалы болатын негізгі фразаларды үйретеді. Көмек сұрау, өтініш білдіру және тағы басқа пайдалы сөз тіркестерін үйренесіз.",
            "examples": [
                "도와주세요 (dowajuseyo): Көмектесіңізші.",
                "감사합니다 (gamsahamnida): Рақмет.",
                "죄송합니다 (joesonghamnida): Кешіріңіз."
            ]
        },
        {
            "title": "7-сабақ: Сұрақ қою",
            "description": "Бұл сабақта сіз корей тілінде негізгі сұрақтарды қоюды үйренесіз. 'Не?', 'Қайда?', 'Қалай?' және 'Неге?' деген сұрақ сөздерді қолдануды меңгересіз.",
            "examples": [
                "뭐예요? (mwoyeyo?): Бұл не?",
                "어디에요? (eodieyo?): Бұл қайда?",
                "왜요? (waeyo?): Неге?"
            ]
        },
        {
            "title": "8-сабақ: Тамақ атаулары",
            "description": "Бұл сабақта сіз корей тіліндегі тамаққа байланысты сөздерді үйренесіз. Мейрамханада тапсырыс беру, сүйікті тағамдарыңыз туралы айту және тағы басқа тақырыптарды меңгересіз.",
            "examples": [
                "밥 (bap): Күріш.",
                "김치 (kimchi): Кимчи (ашытылған көкөніс).",
                "고기 (gogi): Ет."
            ]
        },
        {
            "title": "9-сабақ: Сауда жасау",
            "description": "Бұл сабақта корей дүкендерінде сауда жасауға арналған негізгі тіркестерді үйренесіз. Бағасын сұрау, өлшемін білу және сатып алу тәсілдерін меңгересіз.",
            "examples": [
                "이거 얼마에요? (igeo eolmaeyo?): Мынау қанша тұрады?",
                "큰 사이즈 있어요? (keun saijeu isseoyo?): Үлкен өлшем бар ма?",
                "이거 사고 싶어요 (igeo sago sipeoyo): Мұны сатып алғым келеді."
            ]
        },
        {
            "title": "10-сабақ: Бағыттар сұрау",
            "description": "Бұл сабақта сіз бағыттарды қалай сұрау және түсіндіруді үйренесіз. Метро, дүкендер, мейрамханалар сияқты жерлерде жол табуды меңгересіз.",
            "examples": [
                "왼쪽 (oenjjok): Сол жақ.",
                "오른쪽 (oreunjjok): Оң жақ.",
                "직진 (jikjin): Тура."
            ]
        }
    ],
    ar: [
        {
            "title": "الدرس 1: الأبجدية الكورية",
            "description": "في هذا الدرس، ستتعلم أساسيات نظام الكتابة الكوري (الهانغول). ستتعلم كيفية قراءة وكتابة الأحرف الأساسية، بما في ذلك الحروف المتحركة والحروف الساكنة.",
            "examples": [
                "ㅏ (a): كما في كلمة 아버지 (الأب).",
                "ㅂ (b): كما في كلمة 밥 (الأرز).",
                "ㅎ (h): كما في كلمة 하늘 (السماء)."
            ]
        },
        {
            "title": "الدرس 2: التحيات الأساسية",
            "description": "سيتناول هذا الدرس كيفية قول التحيات الشائعة في الكورية، مثل 'مرحبًا' و'صباح الخير' و'مساء الخير' والتحيات الأخرى المستخدمة في المحادثات اليومية.",
            "examples": [
                "안녕하세요 (Annyeonghaseyo): مرحبًا / أهلًا.",
                "좋은 아침입니다 (Joeun achimimnida): صباح الخير.",
                "안녕히 가세요 (Annyeonghi gaseyo): وداعًا! (عند مغادرة شخص آخر)."
            ]
        },
        {
            "title": "الدرس 3: تقديم النفس",
            "description": "تعلم كيفية تقديم نفسك باللغة الكورية. ستتمرن على قول اسمك وعمرك وجنسيتك وغيرها من التفاصيل الشخصية.",
            "examples": [
                "저는 [الاسم]입니다 (Jeoneun [Name] imnida): أنا [الاسم].",
                "저는 [الدولة] 사람입니다 (Jeoneun [Country] saramimnida): أنا من [الدولة].",
                "나이는 [العمر]살입니다 (Naineun [Age] sal imnida): عمري [العمر] سنة."
            ]
        },
        {
            "title": "الدرس 4: الأرقام",
            "description": "سوف تتعلم في هذا الدرس كيفية العد باللغة الكورية. ستتعرف على الأرقام الكورية الأصلية وأرقام السينو الكورية المستخدمة في التواريخ والأوقات وعد الأشياء.",
            "examples": [
                "하나 (Hana): واحد.",
                "둘 (Dul): اثنان.",
                "셋 (Set): ثلاثة.",
                "일 (Il): واحد (في نظام السينو الكوري)."
            ]
        },
        {
            "title": "الدرس 5: الأيام والشهور",
            "description": "سوف تتعلم في هذا الدرس كيفية ذكر أيام الأسبوع وشهور السنة باللغة الكورية. بالإضافة إلى ذلك، ستتعلم كيفية السؤال عن التاريخ وإخبار الآخرين به.",
            "examples": [
                "월요일 (Woryoil): الإثنين.",
                "화요일 (Hwayoil): الثلاثاء.",
                "1월 (Iwol): يناير."
            ]
        },
        {
            "title": "الدرس 6: العبارات الشائعة",
            "description": "يقدم هذا الدرس عبارات أساسية للمحادثات اليومية. ستتعلم عبارات لطلب المساعدة، وتقديم الطلبات، وعبارات مفيدة أخرى.",
            "examples": [
                "도와주세요 (Dowajuseyo): الرجاء المساعدة.",
                "감사합니다 (Gamsahamnida): شكرًا لك.",
                "죄송합니다 (Joesonghamnida): أنا آسف."
            ]
        },
        {
            "title": "الدرس 7: طرح الأسئلة",
            "description": "تعلم كيفية طرح الأسئلة الأساسية باللغة الكورية. ستتعلم كلمات الاستفهام مثل 'ماذا'، 'أين'، 'كيف' و'لماذا' وكيفية تشكيل أسئلة بسيطة.",
            "examples": [
                "뭐예요? (Mwoyeyo?): ما هذا؟",
                "어디에요? (Eodieyo?): أين هذا؟",
                "왜요? (Waeyo?): لماذا؟"
            ]
        },
        {
            "title": "الدرس 8: مفردات الطعام",
            "description": "في هذا الدرس، ستتعلم المفردات المتعلقة بالطعام في الكورية. ستكون قادرًا على طلب الطعام في المطعم، والتحدث عن أطعمتك المفضلة، وأكثر.",
            "examples": [
                "밥 (Bap): الأرز.",
                "김치 (Kimchi): الكيمتشي (الخضار المخمرة).",
                "고기 (Gogi): اللحم."
            ]
        },
        {
            "title": "الدرس 9: التسوق",
            "description": "سوف يعلمك هذا الدرس العبارات الأساسية للتسوق في كوريا. ستتعلم كيفية السؤال عن الأسعار، والأحجام، وإجراء عمليات الشراء.",
            "examples": [
                "이거 얼마에요? (Igeo eolmaeyo?): كم سعر هذا؟",
                "큰 사이즈 있어요? (Keun saijeu isseoyo?): هل يوجد حجم أكبر؟",
                "이거 사고 싶어요 (Igeo sago sipeoyo): أريد شراء هذا."
            ]
        },
        {
            "title": "الدرس 10: الاتجاهات",
            "description": "في هذا الدرس، ستتعلم كيفية طلب وإعطاء الاتجاهات باللغة الكورية. ستتعلم كيفية التنقل في الأماكن الشائعة مثل المترو، والمتاجر، والمطاعم.",
            "examples": [
                "왼쪽 (Oenjjok): اليسار.",
                "오른쪽 (Oreunjjok): اليمين.",
                "직진 (Jikjin): إلى الأمام مباشرة."
            ]
        },
            {
                "title": "الدرس 11: وسائل النقل",
                "description": "تعلم المفردات الأساسية لاستخدام وسائل النقل في كوريا. هذا الدرس سيساعدك على فهم كيفية التنقل في وسائل النقل العامة وطلب الركوب وغيرها.",
                "examples": [
                    "버스 (Beoseu): الحافلة.",
                    "지하철 (Jihacheol): المترو.",
                    "택시 (Taeksi): التاكسي."
                ]
            },
            {
                "title": "الدرس 12: الطقس",
                "description": "في هذا الدرس، ستتعلم كيفية التحدث عن الطقس باللغة الكورية. ستتمكن من وصف الطقس، السؤال عن التوقعات، والتحدث عن الفصول.",
                "examples": [
                    "날씨가 좋아요 (Nalssiga joayo): الطقس جميل.",
                    "비가 와요 (Bigawayo): إنها تمطر.",
                    "덥다 (Deopda): إنه حار."
                ]
            },
            {
                "title": "الدرس 13: العائلة",
                "description": "تعلم المفردات المتعلقة بأفراد العائلة باللغة الكورية. ستتمكن من التحدث عن عائلتك، تقديم أفراد عائلتك، والسؤال عن عائلات الآخرين.",
                "examples": [
                    "어머니 (Eomeoni): الأم.",
                    "아버지 (Abeoji): الأب.",
                    "형 (Hyeong): الأخ الأكبر (للذكور)."
                ]
            },
            {
                "title": "الدرس 14: الوظائف",
                "description": "سوف يعلمك هذا الدرس الوظائف الشائعة باللغة الكورية. ستتعلم أسماء المهن وكيفية السؤال عن وظيفة شخص ما ووصف عملك.",
                "examples": [
                    "의사 (Uisa): طبيب.",
                    "선생님 (Seonsaengnim): معلم.",
                    "직원 (Jigwon): موظف."
                ]
            },
            {
                "title": "الدرس 15: الهوايات",
                "description": "في هذا الدرس، ستتعلم كيفية التحدث عن هواياتك باللغة الكورية. ستتمرن على التعبير عن اهتماماتك وما تحب وما تكره.",
                "examples": [
                    "운동 (Undong): الرياضة.",
                    "영화 보기 (Yeonghwa bogi): مشاهدة الأفلام.",
                    "독서 (Dokseo): قراءة الكتب."
                ]
            },
            {
                "title": "الدرس 16: الوقت",
                "description": "تعلم كيفية تحديد الوقت باللغة الكورية. ستتمرن على السؤال عن الوقت، فهم المفردات المتعلقة بالوقت، ووصف جدولك اليومي.",
                "examples": [
                    "지금 몇 시에요? (Jigeum myeot siyeyo?): كم الساعة الآن؟",
                    "3시 (3si): الساعة الثالثة.",
                    "오전 (Ojeon): صباحًا."
                ]
            },
            {
                "title": "الدرس 17: الأماكن",
                "description": "في هذا الدرس، ستتعلم أسماء الأماكن الشائعة باللغة الكورية. ستتمكن من التحدث عن مواقع مثل المنزل، المدرسة، المكتب، والأماكن العامة.",
                "examples": [
                    "집 (Jip): المنزل.",
                    "학교 (Hakgyo): المدرسة.",
                    "병원 (Byeongwon): المستشفى."
                ]
            },
            {
                "title": "الدرس 18: الصفات",
                "description": "تعلم الصفات الشائعة باللغة الكورية. ستتمكن من وصف الأشياء، الأشخاص، والمواقف بمزيد من التفصيل باستخدام الصفات.",
                "examples": [
                    "큰 (Keun): كبير.",
                    "작은 (Jageun): صغير.",
                    "빠른 (Ppareun): سريع."
                ]
            },
            {
                "title": "الدرس 19: الأفعال",
                "description": "هذا الدرس يعلمك الأفعال الأساسية واستخدامها باللغة الكورية. ستتعلم كيفية التعبير عن الأفعال، تقديم الطلبات، وتكوين جمل بسيطة.",
                "examples": [
                    "하다 (Hada): أن تفعل.",
                    "가다 (Gada): أن تذهب.",
                    "먹다 (Meokda): أن تأكل."
                ]
            },
            {
                "title": "الدرس 20: الحوارات العملية",
                "description": "يوفر هذا الدرس حوارات عملية لمواقف يومية مختلفة. ستتمكن من تمثيل المحادثات الشائعة وتحسين مهاراتك في التحدث.",
                "examples": [
                    "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                    "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
                ]
            }
        ],
        bn: [
            {
                "title": "পাঠ ১: কোরিয়ান বর্ণমালা",
                "description": "এই পাঠে, আপনি হানগুল, কোরিয়ান লেখার পদ্ধতির মৌলিক বিষয় শিখবেন। আপনি কীভাবে মৌলিক অক্ষর, স্বরবর্ণ এবং ব্যঞ্জনবর্ণ পড়তে এবং লিখতে হয় তা শিখবেন।",
                "examples": [
                    "ㅏ (a): যেমন 아버지 (বাবা)।",
                    "ㅂ (b): যেমন 밥 (ভাত)।",
                    "ㅎ (h): যেমন 하늘 (আকাশ)।"
                ]
            },
            {
                "title": "পাঠ ২: সাধারণ শুভেচ্ছাবাণী",
                "description": "এই পাঠে, আপনি কোরিয়ান ভাষায় প্রচলিত শুভেচ্ছাগুলি শিখবেন। আপনি 'হ্যালো', 'সুপ্রভাত', 'শুভ সন্ধ্যা' এবং অন্যান্য মৌলিক শুভেচ্ছা কীভাবে বলতে হয় তা শিখবেন।",
                "examples": [
                    "안녕하세요 (Annyeonghaseyo): হ্যালো / হাই।",
                    "좋은 아침입니다 (Joeun achimimnida): সুপ্রভাত।",
                    "안녕히 가세요 (Annyeonghi gaseyo): বিদায়! (যখন কেউ চলে যাচ্ছে)"
                ]
            },
            {
                "title": "পাঠ ৩: নিজের পরিচিতি",
                "description": "কোরিয়ান ভাষায় নিজের পরিচয় কীভাবে দিতে হয় তা শিখুন। আপনি আপনার নাম, বয়স, জাতীয়তা এবং অন্যান্য ব্যক্তিগত তথ্য বলতে অনুশীলন করবেন।",
                "examples": [
                    "저는 [নাম]입니다 (Jeoneun [Name] imnida): আমি [নাম]।",
                    "저는 [দেশ] 사람입니다 (Jeoneun [Country] saramimnida): আমি [দেশ] থেকে এসেছি।",
                    "나이는 [বয়স]살입니다 (Naineun [Age] sal imnida): আমি [বয়স] বছর বয়সী।"
                ]
            },
            {
                "title": "পাঠ ৪: সংখ্যা",
                "description": "এই পাঠে, আপনি কোরিয়ান ভাষায় সংখ্যা গণনা শিখবেন। আপনি স্থানীয় এবং সাইনো-কোরিয়ান সংখ্যা শিখবেন, যা তারিখ, সময় এবং বস্তু গণনার জন্য ব্যবহৃত হয়।",
                "examples": [
                    "하나 (Hana): এক।",
                    "둘 (Dul): দুই।",
                    "셋 (Set): তিন।",
                    "일 (Il): এক (সাইনো-কোরিয়ান পদ্ধতিতে)।"
                ]
            },
            {
                "title": "পাঠ ৫: দিন এবং মাস",
                "description": "এই পাঠে, আপনি কোরিয়ান ভাষায় সপ্তাহের দিন এবং বছরের মাস কীভাবে বলতে হয় তা শিখবেন। আপনি কীভাবে তারিখ জিজ্ঞাসা এবং বলতে হয় তা শিখবেন।",
                "examples": [
                    "월요일 (Woryoil): সোমবার।",
                    "화요일 (Hwayoil): মঙ্গলবার।",
                    "1월 (Iwol): জানুয়ারি।"
                ]
            },
            {
                "title": "পাঠ ৬: সাধারণ বাক্যাংশ",
                "description": "এই পাঠে, আপনি দৈনন্দিন কথোপকথনের জন্য প্রয়োজনীয় বাক্যাংশ শিখবেন। আপনি সাহায্য চাইতে এবং অন্যান্য দরকারী বাক্যাংশ শিখবেন।",
                "examples": [
                    "도와주세요 (Dowajuseyo): আমাকে সাহায্য করুন।",
                    "감사합니다 (Gamsahamnida): ধন্যবাদ।",
                    "죄송합니다 (Joesonghamnida): আমি দুঃখিত।"
                ]
            },
            {
                "title": "পাঠ ৭: প্রশ্ন জিজ্ঞাসা",
                "description": "কোরিয়ান ভাষায় প্রশ্ন করা শিখুন। আপনি কী, কোথায়, কেন, এবং কীভাবে জিজ্ঞাসা করতে হয় তা শিখবেন।",
                "examples": [
                    "뭐예요? (Mwoyeyo?): এটা কী?",
                    "어디에요? (Eodieyo?): এটা কোথায়?",
                    "왜요? (Waeyo?): কেন?"
                ]
            },
            {
                "title": "পাঠ ৮: খাবারের শব্দভাণ্ডার",
                "description": "এই পাঠে, আপনি কোরিয়ান ভাষায় খাদ্য সম্পর্কিত শব্দভাণ্ডার শিখবেন। আপনি কীভাবে রেস্তোরাঁয় খাবার অর্ডার করতে হয় তা শিখবেন।",
                "examples": [
                    "밥 (Bap): ভাত।",
                    "김치 (Kimchi): কিমচি।",
                    "고기 (Gogi): মাংস।"
                ]
            },
            {
                "title": "পাঠ ৯: কেনাকাটা",
                "description": "এই পাঠে, আপনি কীভাবে কোরিয়ায় কেনাকাটা করবেন তা শিখবেন।",
                "examples": [
                    "이거 얼마에요? (Igeo eolmaeyo?): এটা কত? ",
                    "큰 사이즈 있어요? (Keun saijeu isseoyo?): বড় সাইজ আছে?",
                    "이거 사고 싶어요 (Igeo sago sipeoyo): আমি এটি কিনতে চাই।"
                ]
            },
            {
                "title": "পাঠ ১০: নির্দেশনা",
                "description": "এই পাঠে, আপনি দিকনির্দেশ কীভাবে জিজ্ঞাসা এবং দিতে হয় তা শিখবেন।",
                "examples": [
                    "왼쪽 (Oenjjok): বামে।",
                    "오른쪽 (Oreunjjok): ডানে।",
                    "직진 (Jikjin): সোজা।"
                ]
            },
            {
                "title": "পাঠ ১১: পরিবহন",
                "description": "কোরিয়ান পরিবহন ব্যবস্থার শব্দভাণ্ডার শিখুন।",
                "examples": [
                    "버스 (Beoseu): বাস।",
                    "지하철 (Jihacheol): সাবওয়ে।",
                    "택시 (Taeksi): ট্যাক্সি।"
                ]
            },
            {
                "title": "পাঠ ১২: আবহাওয়া",
                "description": "কোরিয়ান ভাষায় আবহাওয়া সম্পর্কে কীভাবে কথা বলতে হয় তা শিখুন।",
                "examples": [
                    "날씨가 좋아요 (Nalssiga joayo): আবহাওয়া ভালো।",
                    "비가 와요 (Bigawayo): বৃষ্টি হচ্ছে।",
                    "덥다 (Deopda): গরম।"
                ]
            },
            {
                "title": "পাঠ ১৩: পরিবার",
                "description": "পরিবারের সদস্যদের নিয়ে কীভাবে কথা বলতে হয় তা শিখুন।",
                "examples": [
                    "어머니 (Eomeoni): মা।",
                    "아버지 (Abeoji): বাবা।",
                    "형 (Hyeong): বড় ভাই।"
                ]
            },
            {
                "title": "পাঠ ১৪: পেশা",
                "description": "পেশা সম্পর্কিত শব্দ শিখুন।",
                "examples": [
                    "의사 (Uisa): ডাক্তার।",
                    "선생님 (Seonsaengnim): শিক্ষক।",
                    "직원 (Jigwon): কর্মচারী।"
                ]
            },
            {
                "title": "পাঠ ১৫: শখ",
                "description": "আপনার শখ কীভাবে প্রকাশ করবেন তা শিখুন।",
                "examples": [
                    "운동 (Undong): ব্যায়াম।",
                    "영화 보기 (Yeonghwa bogi): সিনেমা দেখা।",
                    "독서 (Dokseo): বই পড়া।"
                ]
            },
            {
                "title": "পাঠ ১৬: সময়",
                "description": "কোরিয়ান ভাষায় সময় জানানো শিখুন।",
                "examples": [
                    "지금 몇 시에요? (Jigeum myeot siyeyo?): এখন কটা বাজে?",
                    "3시 (3si): ৩টা।",
                    "오전 (Ojeon): পূর্বাহ্ন।"
                ]
            },
            {
                "title": "পাঠ ১৭: স্থান",
                "description": "সাধারণ স্থানের নাম শিখুন।",
                "examples": [
                    "집 (Jip): বাড়ি।",
                    "학교 (Hakgyo): স্কুল।",
                    "병원 (Byeongwon): হাসপাতাল।"
                ]
            },
            {
                "title": "পাঠ ১৮: বিশেষণ",
                "description": "বস্তুর বর্ণনা দিতে বিশেষণ শিখুন।",
                "examples": [
                    "큰 (Keun): বড়।",
                    "작은 (Jageun): ছোট।",
                    "빠른 (Ppareun): দ্রুত।"
                ]
            },
            {
                "title": "পাঠ ১৯: ক্রিয়া",
                "description": "মৌলিক ক্রিয়া এবং তাদের ব্যবহার শিখুন।",
                "examples": [
                    "하다 (Hada): করা।",
                    "가다 (Gada): যাওয়া।",
                    "먹다 (Meokda): খাওয়া।"
                ]
            },
            {
                "title": "পাঠ ২০: ডায়লগ অনুশীলন",
                "description": "বিভিন্ন পরিস্থিতিতে কথোপকথনের অনুশীলন করুন।",
                "examples": [
                    "A: 안녕하세요! (Annyeonghaseyo!) B: 안녕하세요! (Annyeonghaseyo!)",
                    "A: 오늘 날씨가 어때요? (Oneul nalssiga eottaeyo?) B: 좋네요! (Johneyo!)"
                ]
            }
        ]
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    // Add other languages similarly
};

// Function to update the lesson list based on selected language
const languageSelector = document.getElementById("languageSelector");
const lessonList = document.getElementById("lessonList");

languageSelector.addEventListener("change", updateContent);

function updateContent() {
    const language = languageSelector.value;
    const selectedLessons = lessons[language];

    lessonList.innerHTML = ''; // Clear previous lessons

    // Loop through lessons and add them to the list
    selectedLessons.forEach(lesson => {
        const lessonElement = document.createElement("div");
        lessonElement.classList.add("lesson");

        const title = document.createElement("h2");
        title.textContent = lesson.title;
        lessonElement.appendChild(title);

        const description = document.createElement("p");
        description.textContent = lesson.description;
        lessonElement.appendChild(description);

        const examplesList = document.createElement("ul");
        lesson.examples.forEach(example => {
            const listItem = document.createElement("li");
            listItem.textContent = example;
            examplesList.appendChild(listItem);
        });
        lessonElement.appendChild(examplesList);

        lessonList.appendChild(lessonElement);
    });
}

// Initialize with the first language (English)
updateContent();
