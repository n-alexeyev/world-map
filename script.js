/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */

const COUNTRIES = {
  // Europe
  8:   { name: 'Албанія',                   continent: 'europe',       capital: 'Тирана',          alpha2: 'AL' },
  20:  { name: 'Андорра',                   continent: 'europe',       capital: 'Андорра-ла-Велья', alpha2: 'AD' },
  40:  { name: 'Австрія',                   continent: 'europe',       capital: 'Відень',           alpha2: 'AT' },
  56:  { name: 'Бельгія',                   continent: 'europe',       capital: 'Брюссель',         alpha2: 'BE' },
  70:  { name: 'Боснія і Герцеговина',      continent: 'europe',       capital: 'Сараєво',          alpha2: 'BA' },
  100: { name: 'Болгарія',                  continent: 'europe',       capital: 'Софія',            alpha2: 'BG' },
  112: { name: 'Білорусь',                  continent: 'europe',       capital: 'Мінськ',           alpha2: 'BY' },
  191: { name: 'Хорватія',                  continent: 'europe',       capital: 'Загреб',           alpha2: 'HR' },
  196: { name: 'Кіпр',                      continent: 'europe',       capital: 'Нікосія',          alpha2: 'CY' },
  203: { name: 'Чехія',                     continent: 'europe',       capital: 'Прага',            alpha2: 'CZ' },
  208: { name: 'Данія',                     continent: 'europe',       capital: 'Копенгаген',       alpha2: 'DK' },
  233: { name: 'Естонія',                   continent: 'europe',       capital: 'Таллін',           alpha2: 'EE' },
  246: { name: 'Фінляндія',                 continent: 'europe',       capital: 'Гельсінкі',        alpha2: 'FI' },
  250: { name: 'Франція',                   continent: 'europe',       capital: 'Париж',            alpha2: 'FR' },
  276: { name: 'Німеччина',                 continent: 'europe',       capital: 'Берлін',           alpha2: 'DE' },
  300: { name: 'Греція',                    continent: 'europe',       capital: 'Афіни',            alpha2: 'GR' },
  336: { name: 'Ватикан',                   continent: 'europe',       capital: 'Ватикан',          alpha2: 'VA' },
  348: { name: 'Угорщина',                  continent: 'europe',       capital: 'Будапешт',         alpha2: 'HU' },
  352: { name: 'Ісландія',                  continent: 'europe',       capital: 'Рейк\'явік',       alpha2: 'IS' },
  372: { name: 'Ірландія',                  continent: 'europe',       capital: 'Дублін',           alpha2: 'IE' },
  380: { name: 'Італія',                    continent: 'europe',       capital: 'Рим',              alpha2: 'IT' },
  383: { name: 'Косово',                    continent: 'europe',       capital: 'Приштина',         alpha2: 'XK' },
  428: { name: 'Латвія',                    continent: 'europe',       capital: 'Рига',             alpha2: 'LV' },
  438: { name: 'Ліхтенштейн',              continent: 'europe',       capital: 'Вадуц',            alpha2: 'LI' },
  440: { name: 'Литва',                     continent: 'europe',       capital: 'Вільнюс',          alpha2: 'LT' },
  442: { name: 'Люксембург',               continent: 'europe',       capital: 'Люксембург',       alpha2: 'LU' },
  470: { name: 'Мальта',                    continent: 'europe',       capital: 'Валлетта',         alpha2: 'MT' },
  492: { name: 'Монако',                    continent: 'europe',       capital: 'Монако',           alpha2: 'MC' },
  498: { name: 'Молдова',                   continent: 'europe',       capital: 'Кишинів',          alpha2: 'MD' },
  499: { name: 'Чорногорія',               continent: 'europe',       capital: 'Подгориця',        alpha2: 'ME' },
  528: { name: 'Нідерланди',               continent: 'europe',       capital: 'Амстердам',        alpha2: 'NL' },
  578: { name: 'Норвегія',                  continent: 'europe',       capital: 'Осло',             alpha2: 'NO' },
  616: { name: 'Польща',                    continent: 'europe',       capital: 'Варшава',          alpha2: 'PL' },
  620: { name: 'Португалія',               continent: 'europe',       capital: 'Лісабон',          alpha2: 'PT' },
  642: { name: 'Румунія',                   continent: 'europe',       capital: 'Бухарест',         alpha2: 'RO' },
  643: { name: 'Росія',                     continent: 'europe',       capital: 'Москва',           alpha2: 'RU' },
  674: { name: 'Сан-Маріно',              continent: 'europe',       capital: 'Сан-Маріно',       alpha2: 'SM' },
  688: { name: 'Сербія',                    continent: 'europe',       capital: 'Белград',          alpha2: 'RS' },
  703: { name: 'Словаччина',               continent: 'europe',       capital: 'Братислава',       alpha2: 'SK' },
  705: { name: 'Словенія',                  continent: 'europe',       capital: 'Любляна',          alpha2: 'SI' },
  724: { name: 'Іспанія',                   continent: 'europe',       capital: 'Мадрид',           alpha2: 'ES' },
  752: { name: 'Швеція',                    continent: 'europe',       capital: 'Стокгольм',        alpha2: 'SE' },
  756: { name: 'Швейцарія',               continent: 'europe',       capital: 'Берн',             alpha2: 'CH' },
  804: { name: 'Україна',                   continent: 'europe',       capital: 'Київ',             alpha2: 'UA' },
  807: { name: 'Північна Македонія',       continent: 'europe',       capital: 'Скоп\'є',          alpha2: 'MK' },
  826: { name: 'Велика Британія',           continent: 'europe',       capital: 'Лондон',           alpha2: 'GB' },

  // Asia
  4:   { name: 'Афганістан',               continent: 'asia',         capital: 'Кабул',            alpha2: 'AF' },
  31:  { name: 'Азербайджан',              continent: 'asia',         capital: 'Баку',             alpha2: 'AZ' },
  50:  { name: 'Бангладеш',               continent: 'asia',         capital: 'Дакка',            alpha2: 'BD' },
  51:  { name: 'Вірменія',                 continent: 'asia',         capital: 'Єреван',           alpha2: 'AM' },
  64:  { name: 'Бутан',                    continent: 'asia',         capital: 'Тхімпху',          alpha2: 'BT' },
  96:  { name: 'Бруней',                   continent: 'asia',         capital: 'Бандар-Сері-Бегаван', alpha2: 'BN' },
  104: { name: "М'янма",                   continent: 'asia',         capital: 'Нейп\'їдо',        alpha2: 'MM' },
  116: { name: 'Камбоджа',                 continent: 'asia',         capital: 'Пномпень',         alpha2: 'KH' },
  144: { name: 'Шрі-Ланка',               continent: 'asia',         capital: 'Шрі-Джаяварденепура-Котте', alpha2: 'LK' },
  156: { name: 'Китай',                    continent: 'asia',         capital: 'Пекін',            alpha2: 'CN' },
  158: { name: 'Тайвань',                  continent: 'asia',         capital: 'Тайбей',           alpha2: 'TW' },
  268: { name: 'Грузія',                   continent: 'asia',         capital: 'Тбілісі',          alpha2: 'GE' },
  275: { name: 'Палестина',                continent: 'asia',         capital: 'Рамалла',          alpha2: 'PS' },
  356: { name: 'Індія',                    continent: 'asia',         capital: 'Нью-Делі',         alpha2: 'IN' },
  360: { name: 'Індонезія',               continent: 'asia',         capital: 'Джакарта',         alpha2: 'ID' },
  364: { name: 'Іран',                     continent: 'asia',         capital: 'Тегеран',          alpha2: 'IR' },
  368: { name: 'Ірак',                     continent: 'asia',         capital: 'Багдад',           alpha2: 'IQ' },
  376: { name: 'Ізраїль',                  continent: 'asia',         capital: 'Єрусалим',         alpha2: 'IL' },
  392: { name: 'Японія',                   continent: 'asia',         capital: 'Токіо',            alpha2: 'JP' },
  398: { name: 'Казахстан',               continent: 'asia',         capital: 'Астана',           alpha2: 'KZ' },
  400: { name: 'Йорданія',                 continent: 'asia',         capital: 'Амман',            alpha2: 'JO' },
  408: { name: 'Північна Корея',           continent: 'asia',         capital: 'Пхеньян',          alpha2: 'KP' },
  410: { name: 'Південна Корея',           continent: 'asia',         capital: 'Сеул',             alpha2: 'KR' },
  414: { name: 'Кувейт',                   continent: 'asia',         capital: 'Кувейт',           alpha2: 'KW' },
  417: { name: 'Киргизстан',              continent: 'asia',         capital: 'Бішкек',           alpha2: 'KG' },
  418: { name: 'Лаос',                     continent: 'asia',         capital: 'В\'єнтьян',        alpha2: 'LA' },
  422: { name: 'Ліван',                    continent: 'asia',         capital: 'Бейрут',           alpha2: 'LB' },
  458: { name: 'Малайзія',                 continent: 'asia',         capital: 'Куала-Лумпур',     alpha2: 'MY' },
  462: { name: 'Мальдіви',                 continent: 'asia',         capital: 'Мале',             alpha2: 'MV' },
  496: { name: 'Монголія',                 continent: 'asia',         capital: 'Улан-Батор',       alpha2: 'MN' },
  512: { name: 'Оман',                     continent: 'asia',         capital: 'Маскат',           alpha2: 'OM' },
  524: { name: 'Непал',                    continent: 'asia',         capital: 'Катманду',         alpha2: 'NP' },
  586: { name: 'Пакистан',                 continent: 'asia',         capital: 'Ісламабад',        alpha2: 'PK' },
  608: { name: 'Філіппіни',               continent: 'asia',         capital: 'Маніла',           alpha2: 'PH' },
  626: { name: 'Тимор-Лешті',             continent: 'asia',         capital: 'Ділі',             alpha2: 'TL' },
  634: { name: 'Катар',                    continent: 'asia',         capital: 'Доха',             alpha2: 'QA' },
  682: { name: 'Саудівська Аравія',        continent: 'asia',         capital: 'Ер-Ріяд',          alpha2: 'SA' },
  702: { name: 'Сінгапур',                continent: 'asia',         capital: 'Сінгапур',         alpha2: 'SG' },
  704: { name: "В'єтнам",                  continent: 'asia',         capital: 'Ханой',            alpha2: 'VN' },
  760: { name: 'Сирія',                    continent: 'asia',         capital: 'Дамаск',           alpha2: 'SY' },
  762: { name: 'Таджикистан',             continent: 'asia',         capital: 'Душанбе',          alpha2: 'TJ' },
  764: { name: 'Таїланд',                  continent: 'asia',         capital: 'Бангкок',          alpha2: 'TH' },
  784: { name: 'ОАЕ',                      continent: 'asia',         capital: 'Абу-Дабі',         alpha2: 'AE' },
  792: { name: 'Туреччина',               continent: 'asia',         capital: 'Анкара',           alpha2: 'TR' },
  795: { name: 'Туркменістан',            continent: 'asia',         capital: 'Ашгабат',          alpha2: 'TM' },
  860: { name: 'Узбекистан',              continent: 'asia',         capital: 'Ташкент',          alpha2: 'UZ' },
  344: { name: 'Гонконг',                  continent: 'asia',         capital: 'Гонконг',          alpha2: 'HK' },
  887: { name: 'Ємен',                     continent: 'asia',         capital: 'Сана',             alpha2: 'YE' },

  // Africa
  12:  { name: 'Алжир',                    continent: 'africa',       capital: 'Алжир',            alpha2: 'DZ' },
  24:  { name: 'Ангола',                   continent: 'africa',       capital: 'Луанда',           alpha2: 'AO' },
  72:  { name: 'Ботсвана',                 continent: 'africa',       capital: 'Габороне',         alpha2: 'BW' },
  108: { name: 'Бурунді',                  continent: 'africa',       capital: 'Гітега',           alpha2: 'BI' },
  120: { name: 'Камерун',                  continent: 'africa',       capital: 'Яунде',            alpha2: 'CM' },
  132: { name: 'Кабо-Верде',              continent: 'africa',       capital: 'Прая',             alpha2: 'CV' },
  140: { name: 'ЦАР',                      continent: 'africa',       capital: 'Банги',            alpha2: 'CF' },
  148: { name: 'Чад',                      continent: 'africa',       capital: 'Нджамена',         alpha2: 'TD' },
  174: { name: 'Комори',                   continent: 'africa',       capital: 'Морові',           alpha2: 'KM' },
  178: { name: 'Конго',                    continent: 'africa',       capital: 'Браззавіль',       alpha2: 'CG' },
  180: { name: 'ДР Конго',                 continent: 'africa',       capital: 'Кіншаса',          alpha2: 'CD' },
  204: { name: 'Бенін',                    continent: 'africa',       capital: 'Порто-Ново',       alpha2: 'BJ' },
  226: { name: 'Екваторіальна Гвінея',     continent: 'africa',       capital: 'Малабо',           alpha2: 'GQ' },
  231: { name: 'Ефіопія',                  continent: 'africa',       capital: 'Аддіс-Абеба',      alpha2: 'ET' },
  232: { name: 'Еритрея',                  continent: 'africa',       capital: 'Асмера',           alpha2: 'ER' },
  262: { name: 'Джибуті',                  continent: 'africa',       capital: 'Джибуті',          alpha2: 'DJ' },
  266: { name: 'Габон',                    continent: 'africa',       capital: 'Лібревіль',        alpha2: 'GA' },
  288: { name: 'Гана',                     continent: 'africa',       capital: 'Аккра',            alpha2: 'GH' },
  324: { name: 'Гвінея',                   continent: 'africa',       capital: 'Конакрі',          alpha2: 'GN' },
  384: { name: "Кот-д'Івуар",             continent: 'africa',       capital: 'Ямусукро',         alpha2: 'CI' },
  404: { name: 'Кенія',                    continent: 'africa',       capital: 'Найробі',          alpha2: 'KE' },
  426: { name: 'Лесото',                   continent: 'africa',       capital: 'Масеру',           alpha2: 'LS' },
  430: { name: 'Ліберія',                  continent: 'africa',       capital: 'Монровія',         alpha2: 'LR' },
  434: { name: 'Лівія',                    continent: 'africa',       capital: 'Тріполі',          alpha2: 'LY' },
  450: { name: 'Мадагаскар',              continent: 'africa',       capital: 'Антананаріву',     alpha2: 'MG' },
  454: { name: 'Малаві',                   continent: 'africa',       capital: 'Лілонгве',         alpha2: 'MW' },
  466: { name: 'Малі',                     continent: 'africa',       capital: 'Бамако',           alpha2: 'ML' },
  478: { name: 'Мавританія',              continent: 'africa',       capital: 'Нуакшот',          alpha2: 'MR' },
  480: { name: 'Маврикій',                 continent: 'africa',       capital: 'Порт-Луї',         alpha2: 'MU' },
  504: { name: 'Марокко',                  continent: 'africa',       capital: 'Рабат',            alpha2: 'MA' },
  508: { name: 'Мозамбік',                continent: 'africa',       capital: 'Мапуто',           alpha2: 'MZ' },
  516: { name: 'Намібія',                  continent: 'africa',       capital: 'Віндгук',          alpha2: 'NA' },
  562: { name: 'Нігер',                    continent: 'africa',       capital: 'Ніамей',           alpha2: 'NE' },
  566: { name: 'Нігерія',                  continent: 'africa',       capital: 'Абуджа',           alpha2: 'NG' },
  624: { name: 'Гвінея-Бісау',            continent: 'africa',       capital: 'Бісау',            alpha2: 'GW' },
  646: { name: 'Руанда',                   continent: 'africa',       capital: 'Кігалі',           alpha2: 'RW' },
  678: { name: 'Сан-Томе і Прінсіпі',    continent: 'africa',       capital: 'Сан-Томе',         alpha2: 'ST' },
  686: { name: 'Сенегал',                  continent: 'africa',       capital: 'Дакар',            alpha2: 'SN' },
  694: { name: "Сьєрра-Леоне",            continent: 'africa',       capital: 'Фрітаун',          alpha2: 'SL' },
  706: { name: 'Сомалі',                   continent: 'africa',       capital: 'Могадішо',         alpha2: 'SO' },
  710: { name: 'ПАР',                      continent: 'africa',       capital: 'Преторія',         alpha2: 'ZA' },
  716: { name: 'Зімбабве',                continent: 'africa',       capital: 'Хараре',           alpha2: 'ZW' },
  728: { name: 'Південний Судан',          continent: 'africa',       capital: 'Джуба',            alpha2: 'SS' },
  729: { name: 'Судан',                    continent: 'africa',       capital: 'Хартум',           alpha2: 'SD' },
  732: { name: 'Західна Сахара',           continent: 'africa',       capital: 'Ель-Аюн',         alpha2: 'EH' },
  748: { name: 'Есватіні',                 continent: 'africa',       capital: 'Мбабане',          alpha2: 'SZ' },
  768: { name: 'Того',                     continent: 'africa',       capital: 'Ломе',             alpha2: 'TG' },
  788: { name: 'Туніс',                    continent: 'africa',       capital: 'Туніс',            alpha2: 'TN' },
  800: { name: 'Уганда',                   continent: 'africa',       capital: 'Кампала',          alpha2: 'UG' },
  818: { name: 'Єгипет',                   continent: 'africa',       capital: 'Каїр',             alpha2: 'EG' },
  834: { name: 'Танзанія',                 continent: 'africa',       capital: 'Додома',           alpha2: 'TZ' },
  854: { name: 'Буркіна-Фасо',            continent: 'africa',       capital: 'Уагадугу',         alpha2: 'BF' },
  894: { name: 'Замбія',                   continent: 'africa',       capital: 'Лусака',           alpha2: 'ZM' },

  // North America
  28:  { name: 'Антигуа і Барбуда',        continent: 'north-america', capital: 'Сент-Джонс',      alpha2: 'AG' },
  44:  { name: 'Багами',                   continent: 'north-america', capital: 'Насау',            alpha2: 'BS' },
  52:  { name: 'Барбадос',                 continent: 'north-america', capital: 'Бриджтаун',        alpha2: 'BB' },
  84:  { name: 'Беліз',                    continent: 'north-america', capital: 'Бельмопан',        alpha2: 'BZ' },
  124: { name: 'Канада',                   continent: 'north-america', capital: 'Оттава',           alpha2: 'CA' },
  304: { name: 'Гренландія',               continent: 'north-america', capital: 'Нуук',             alpha2: 'GL' },
  188: { name: 'Коста-Ріка',              continent: 'north-america', capital: 'Сан-Хосе',         alpha2: 'CR' },
  192: { name: 'Куба',                     continent: 'north-america', capital: 'Гавана',           alpha2: 'CU' },
  212: { name: 'Домініка',                 continent: 'north-america', capital: 'Розо',             alpha2: 'DM' },
  214: { name: 'Домініканська Республіка', continent: 'north-america', capital: 'Санто-Домінго',    alpha2: 'DO' },
  222: { name: 'Сальвадор',               continent: 'north-america', capital: 'Сан-Сальвадор',    alpha2: 'SV' },
  308: { name: 'Гренада',                  continent: 'north-america', capital: 'Сент-Джорджес',    alpha2: 'GD' },
  320: { name: 'Гватемала',               continent: 'north-america', capital: 'Гватемала',         alpha2: 'GT' },
  332: { name: 'Гаїті',                    continent: 'north-america', capital: 'Порт-о-Пренс',     alpha2: 'HT' },
  340: { name: 'Гондурас',                 continent: 'north-america', capital: 'Тегусігальпа',     alpha2: 'HN' },
  388: { name: 'Ямайка',                   continent: 'north-america', capital: 'Кінгстон',         alpha2: 'JM' },
  484: { name: 'Мексика',                  continent: 'north-america', capital: 'Мехіко',           alpha2: 'MX' },
  558: { name: 'Нікарагуа',               continent: 'north-america', capital: 'Манагуа',          alpha2: 'NI' },
  591: { name: 'Панама',                   continent: 'north-america', capital: 'Панама',           alpha2: 'PA' },
  659: { name: 'Сент-Кітс і Невіс',       continent: 'north-america', capital: 'Бастер',           alpha2: 'KN' },
  662: { name: 'Сент-Люсія',              continent: 'north-america', capital: 'Кастрі',           alpha2: 'LC' },
  670: { name: 'Сент-Вінсент і Гренадини',continent: 'north-america', capital: 'Кінгстаун',        alpha2: 'VC' },
  780: { name: 'Тринідад і Тобаго',        continent: 'north-america', capital: 'Порт-оф-Спейн',    alpha2: 'TT' },
  840: { name: 'США',                      continent: 'north-america', capital: 'Вашингтон',        alpha2: 'US' },

  // South America
  32:  { name: 'Аргентина',               continent: 'south-america', capital: 'Буенос-Айрес',     alpha2: 'AR' },
  68:  { name: 'Болівія',                  continent: 'south-america', capital: 'Сукре',            alpha2: 'BO' },
  76:  { name: 'Бразилія',                 continent: 'south-america', capital: 'Бразилія',         alpha2: 'BR' },
  152: { name: 'Чилі',                     continent: 'south-america', capital: 'Сантьяго',         alpha2: 'CL' },
  170: { name: 'Колумбія',                 continent: 'south-america', capital: 'Богота',           alpha2: 'CO' },
  218: { name: 'Еквадор',                  continent: 'south-america', capital: 'Кіто',             alpha2: 'EC' },
  328: { name: 'Гайана',                   continent: 'south-america', capital: 'Джорджтаун',       alpha2: 'GY' },
  600: { name: 'Парагвай',                 continent: 'south-america', capital: 'Асунсьон',         alpha2: 'PY' },
  604: { name: 'Перу',                     continent: 'south-america', capital: 'Ліма',             alpha2: 'PE' },
  740: { name: 'Суринам',                  continent: 'south-america', capital: 'Парамарибо',       alpha2: 'SR' },
  858: { name: 'Уругвай',                  continent: 'south-america', capital: 'Монтевідео',       alpha2: 'UY' },
  862: { name: 'Венесуела',               continent: 'south-america', capital: 'Каракас',          alpha2: 'VE' },

  // Oceania
  36:  { name: 'Австралія',               continent: 'oceania',       capital: 'Канберра',         alpha2: 'AU' },
  90:  { name: 'Соломонові Острови',       continent: 'oceania',       capital: 'Хоніара',          alpha2: 'SB' },
  242: { name: 'Фіджі',                    continent: 'oceania',       capital: 'Сува',             alpha2: 'FJ' },
  296: { name: 'Кірібаті',                 continent: 'oceania',       capital: 'Тарава',           alpha2: 'KI' },
  520: { name: 'Науру',                    continent: 'oceania',       capital: 'Ярен',             alpha2: 'NR' },
  548: { name: 'Вануату',                  continent: 'oceania',       capital: 'Порт-Віла',        alpha2: 'VU' },
  554: { name: 'Нова Зеландія',            continent: 'oceania',       capital: 'Веллінгтон',       alpha2: 'NZ' },
  583: { name: 'Мікронезія',              continent: 'oceania',       capital: 'Паліківір',        alpha2: 'FM' },
  584: { name: 'Маршаллові Острови',       continent: 'oceania',       capital: 'Маджуро',          alpha2: 'MH' },
  585: { name: 'Палау',                    continent: 'oceania',       capital: 'Нгерулмуд',        alpha2: 'PW' },
  598: { name: 'Папуа Нова Гвінея',        continent: 'oceania',       capital: 'Порт-Морсбі',      alpha2: 'PG' },
  776: { name: 'Тонга',                    continent: 'oceania',       capital: 'Нукуалофа',        alpha2: 'TO' },
  798: { name: 'Тувалу',                   continent: 'oceania',       capital: 'Фунафуті',         alpha2: 'TV' },
  882: { name: 'Самоа',                    continent: 'oceania',       capital: 'Апіа',             alpha2: 'WS' },

  // Antarctica
  10:  { name: 'Антарктида',              continent: 'antarctica',    capital: '—',                alpha2: 'AQ' },

  // Special / unrecognized
  9001: { name: 'Північний Кіпр',         continent: 'europe',        capital: 'Лефкоша',          alpha2: '' },
};

/* ── Overseas / dependent territories ── */
const TERRITORIES = {
  254: { name: 'Французька Гвіана',    alpha2: 'GF', capital: 'Каєнна',        continent: 'south-america', parentCode: 250, parentName: 'Франція' },
  258: { name: 'Французька Полінезія', alpha2: 'PF', capital: 'Папеете',       continent: 'oceania',       parentCode: 250, parentName: 'Франція' },
  540: { name: 'Нова Каледонія',       alpha2: 'NC', capital: 'Нумеа',         continent: 'oceania',       parentCode: 250, parentName: 'Франція' },
  638: { name: 'Реюньйон',             alpha2: 'RE', capital: 'Сен-Дені',      continent: 'africa',        parentCode: 250, parentName: 'Франція' },
  630: { name: 'Пуерто-Ріко',          alpha2: 'PR', capital: 'Сан-Хуан',     continent: 'north-america', parentCode: 840, parentName: 'США' },
  238: { name: 'Фолклендські острови', alpha2: 'FK', capital: 'Стенлі',        continent: 'south-america', parentCode: 826, parentName: 'Велика Британія' },
};

/* ── Tourism data ── */
const TOURISM = {
  804: ['Києво-Печерська лавра', 'Собор Святої Софії в Києві', 'Замок Паланок', 'Кам\'янець-Подільська фортеця', 'Карпатські гори'],
  250: ['Ейфелева вежа', 'Лувр', 'Версальський палац', 'Мон-Сен-Мішель', 'Французька Рив\'єра'],
  380: ['Колізей', 'Ватикан (Сікстинська капела)', 'Венеція (Гранд-канал)', 'Флоренція (Уффіці)', 'Помпеї'],
  724: ['Саграда Фамілія', 'Альгамбра', 'Музей Прадо', 'Парк Гуель', 'Старе місто Толедо'],
  276: ['Бранденбурзькі ворота', 'Замок Нойшванштайн', 'Кельнський собор', 'Рейнська долина', 'Берлінська стіна'],
  826: ['Букінгемський палац', 'Стоунхендж', 'Тауер', 'Единбурзький замок', 'Британський музей'],
  300: ['Акрополь та Парфенон', 'Санторіні', 'Метеора', 'Острів Кріт', 'Олімпія'],
  792: ['Айя-Софія', 'Каппадокія', 'Ефес', 'Памуккале', 'Блакитна мечеть'],
  40:  ['Шенбруннський палац', 'Відень (Хофбург)', 'Зальцбург (батьківщина Моцарта)', 'Галштат', 'Тірольські Альпи'],
  756: ['Женевське озеро', 'Церматт та Маттерхорн', 'Юнгфрауйох', 'Люцерн', 'Берн'],
  528: ['Рейксмюзеум', 'Квартал каналів Амстердама', 'Кекенхоф', 'Вітряки Кіндердейк', 'Ринковий майдан Делфта'],
  56:  ['Гран-Плас Брюсселя', 'Брюгге', 'Гентський вівтар', 'Поле бою Ватерлоо', 'Атоміум'],
  203: ['Старе місто Праги', 'Карлів міст', 'Замок Чеський Крумлов', 'Моравський крас', 'Кутна Гора'],
  616: ['Вавельський замок', 'Аушвіц-Біркенау', 'Старе місто Кракова', 'Велічка', 'Мальборк'],
  348: ['Будапешт (Рибацький бастіон)', 'Озеро Балатон', 'Замок Егер', 'Панонгалма'],
  642: ['Замок Бран (Дракула)', 'Синая', 'Бухарест', 'Дельта Дунаю', 'Сибіу'],
  392: ['Гора Фудзі', 'Храми Кіото', 'Токіо (Акіхабара)', 'Меморіал миру в Хіросімі', 'Нара (олені)'],
  156: ['Велика Китайська стіна', 'Заборонене місто', 'Теракотова армія', 'Лі\'цзян', 'Гуансі (рисові тераси)'],
  356: ['Тадж-Махал', 'Форт Амбер', 'Варанасі', 'Керала', 'Золотий храм Амрітсари'],
  840: ['Статуя Свободи', 'Гранд-Каньон', 'Єллоустон', 'Лас-Вегас (Стрип)', 'Диснейленд'],
  36:  ['Сіднейська опера', 'Великий Бар\'єрний риф', 'Айєрс-Рок (Улуру)', 'Мельбурн', 'Блакитні гори'],
  818: ['Піраміди Гізи та Сфінкс', 'Луксорський храм', 'Долина царів', 'Шарм-ель-Шейх', 'Абу-Сімбел'],
  788: ['Карфаген', 'Медина Тунісу', 'Ель-Джем (амфітеатр)', 'Матмата', 'Джерба'],
  504: ['Медина Марракешу', 'Фес (найстаріший університет)', 'Сахара (дюни Мерзуги)', 'Ессауїра', 'Шефшауен'],
  764: ['Великий палац Бангкока', 'Пхукет', 'Чіанг-Маї', 'Крабі', 'Пляжі Ко-Самуї'],
  458: ['Вежі Петронас', 'Острів Лангкаві', 'Георгтаун (Пенанг)', 'Печери Бату', 'Кінабалу'],
  702: ['Сади біля затоки', 'Маріна-Бей-Сендс', 'Острів Сентоза', 'Чайнатаун', 'Зоопарк Сінгапуру'],
  360: ['Балі (Убуд)', 'Боробудур', 'Комодо', 'Гора Бромо', 'Раджа-Ампат'],
  376: ['Єрусалим (Стара міста)', 'Мертве море', 'Тель-Авів', 'Масада', 'Назарет'],
  400: ['Петра', 'Вади-Рум', 'Мертве море', 'Акаба', 'Джераш'],
  410: ['Палац Кенбоккун', 'Сеул (Мьондонг)', 'Острів Чеджу', 'Пусан', 'Храм Хаєдон Йонгунса'],
  124: ['Ніагарський водоспад', 'Банф', 'Квебек', 'Острів Ванкувер', 'Скелясті гори'],
  484: ['Чічен-Іца', 'Паленке', 'Канкун', 'Мехіко (Зокало)', 'Теотіуакан'],
  76:  ['Карнавал у Ріо', 'Статуя Христа-Рятівника', 'Амазонія', 'Водоспади Ігуасу', 'Форталеза'],
  32:  ['Водоспади Ігуасу', 'Буенос-Айрес (Ла-Бока)', 'Патагонія', 'Мендоса (вина)', 'Ушуая'],
  152: ['Острів Пасхи', 'Пустеля Атакама', 'Патагонія (Торрес-дель-Пайне)', 'Вальпараїсо', 'Вулкан Осорно'],
  710: ['Кейптаун (Столова гора)', 'Крюгер-парк', 'Вінберг', 'Драконові гори', 'Острів Роббен'],
  404: ['Сафарі у Масаї Мара', 'Гора Кенія', 'Момбаса', 'Озеро Накуру', 'Амбоселі'],
  800: ['Гірські горили (Бвінді)', 'Водоспади Мерчісон', 'Озеро Вікторія', 'Рва Мухінда', 'Кібале'],
  336: ['Собор Святого Петра', 'Сікстинська капела', 'Ватиканські музеї', 'Площа Святого Петра'],
  492: ['Казино Монте-Карло', 'Палац Гримальді', 'Океанографічний музей', 'Гран-прі Монако'],
  20:  ['Гірськолижні курорти', 'Шопінг (безмитна зона)', 'Природний парк Комапедроса', 'Ескальдес'],
  438: ['Вадуц (замок)', 'Мальбун (гірськолижний курорт)', 'Лихтенштейнський музей', 'Рейн (прогулянки)'],
  674: ['Замок Гуаіта', 'Стара фортеця', 'Панорамний вид на Адріатику', 'Музей Сан-Маріно'],
  268: ['Тбілісі (Стара фортеця)', 'Монастир Гергеті', 'Сванеті', 'Кахетія (вина)', 'Батумі'],
  498: ['Кишинів', 'Монастир Орхей', 'Підземні погреби Мілешть Мічь', 'Сорока', 'Тирасполь'],
  51:  ['Гора Арарат', 'Монастир Гехард', 'Єреван (площа Республіки)', 'Горіс', 'Нораванк'],
};

/* ── Point coordinates for microstates too small to appear as polygons ── */
const POINT_COUNTRIES = {
  336: [12.4534, 41.9029],  // Vatican
  492: [7.4246,  43.7384],  // Monaco
  674: [12.4578, 43.9424],  // San Marino
  438: [9.5554,  47.1660],  // Liechtenstein
  520: [166.931, -0.5228],  // Nauru
  798: [179.198, -8.5167],  // Tuvalu
};

/* ── Filter sets ── */
const FILTER_SETS = {
  eu: new Set([40, 56, 100, 191, 196, 203, 208, 233, 246, 250, 276, 300, 348,
               372, 380, 428, 440, 442, 470, 528, 616, 620, 642, 703, 705, 724, 752]),

  schengen: new Set([40, 56, 100, 191, 203, 208, 233, 246, 250, 276, 300, 348,
                     352, 380, 428, 438, 440, 442, 470, 528, 578, 616, 620, 642,
                     703, 705, 724, 752, 756]),

  visafree: new Set([8, 20, 28, 32, 40, 44, 51, 52, 56, 68, 70, 76, 100, 152,
                     158, 170, 188, 191, 196, 203, 208, 214, 218, 222, 233, 246,
                     250, 268, 276, 300, 320, 336, 340, 348, 352, 372, 376, 380,
                     383, 388, 392, 410, 428, 438, 440, 442, 458, 470, 484, 492,
                     498, 499, 504, 528, 558, 578, 591, 600, 604, 616, 620, 642,
                     674, 688, 703, 705, 724, 752, 756, 780, 788, 792, 804, 807, 858]),

  disputed: new Set([158, 275, 383, 732, 9001]),

  microstates: new Set([20, 28, 52, 96, 132, 174, 212, 242, 296, 308, 336, 438, 462, 470, 480, 492, 520, 548, 583, 584, 585, 598, 626, 659, 662, 670, 674, 678, 702, 776, 780, 798, 882]),
};

/* ── Colors ── */
const CONTINENT_COLORS = {
  europe:        '#74c0fc',
  asia:          '#8ce99a',
  africa:        '#ffa94d',
  'north-america': '#da77f2',
  'south-america': '#f783ac',
  oceania:       '#66d9e8',
  antarctica:    '#adb5bd',
};

const CONTINENT_NAMES = {
  europe:          'Європа',
  asia:            'Азія',
  africa:          'Африка',
  'north-america': 'Пн. Америка',
  'south-america': 'Пд. Америка',
  oceania:         'Океанія',
  antarctica:      'Антарктида',
};

const FILTER_COLORS = {
  continents:  null,   // uses continent color per country
  europe:      '#74c0fc',
  asia:        '#8ce99a',
  eu:          '#4dabf7',
  schengen:    '#a9e34b',
  visafree:    '#ffa94d',
  disputed:    '#ff6b6b',
  microstates: '#e599f7',
  visited:     '#ffd43b',
};

const FILTER_LABELS = {
  continents:  'Материки',
  europe:      'Європа',
  asia:        'Азія',
  eu:          'ЄС',
  schengen:    'Шенген',
  visafree:    'Безвіз 🇺🇦',
  disputed:    'Спірні',
  microstates: 'Мікродержави',
  visited:     'Відвідані',
};

const DEFAULT_LAND  = '#4a5568';
const DEFAULT_STROKE = '#2d3748';

// Label thresholds (area in px² * k²)
const LABEL_THRESHOLD_NAME    = 1000;   // show country name
const LABEL_THRESHOLD_CAPITAL = 5000;   // also show capital
const LABEL_BASE_FS           = 11;     // base font-size in SVG units (constant screen px via /k)

/* ═══════════════════════════════════════════════════
   VISITED STATE
═══════════════════════════════════════════════════ */
const visitedSet = new Set(JSON.parse(localStorage.getItem('visited-countries') || '[]'));

function saveVisited() {
  localStorage.setItem('visited-countries', JSON.stringify([...visitedSet]));
}

const N_CYPRUS_GEOJSON = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [[
      [32.50, 35.19], [32.36, 35.22], [32.27, 35.40], [32.28, 35.59],
      [32.40, 35.67], [32.70, 35.71], [33.00, 35.74], [33.44, 35.73],
      [33.88, 35.71], [34.30, 35.68], [34.52, 35.60], [34.62, 35.53],
      [34.57, 35.46], [34.42, 35.28], [34.22, 35.15], [34.05, 35.11],
      [33.75, 35.12], [33.20, 35.16], [32.80, 35.18], [32.50, 35.19]
    ]]
  }
};

function darkenColor(hex, factor = 0.55) {
  if (!hex || hex === DEFAULT_LAND) return hex;
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0,2), 16);
  const g = parseInt(h.slice(2,4), 16);
  const b = parseInt(h.slice(4,6), 16);
  const toHex = v => Math.round(v * factor).toString(16).padStart(2,'0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let activeFilter        = null;
let selectedCountryCode = null;
let gBorderMesh        = null;   // topojson mesh path for uniform borders
let gHoverHighlight    = null;   // hover outline overlay
let gSelectionHighlight = null;  // selection outline overlay
let gMeshDatum         = null;   // stored mesh datum for redrawing
let viewMode            = 'flat';    // 'flat' | 'globe'
let globeRotation       = [0, 0, 0];
let globeBaseScale      = null;
let gMapGroup           = null;      // main SVG group (receives zoom transform in flat mode)
let gMarkersOverlay     = null;      // markers overlay (always on top)
let gLabelsGroup        = null;      // country labels group (inside gMapGroup)
let gLabelData          = [];        // [{f, code, country, centroid, area, cx, cy}]
let gWrapperEl          = null;      // #map-wrapper DOM element
let gTooltipEl          = null;      // #tooltip DOM element
let zoomInHandler       = null;
let zoomOutHandler      = null;
let zoomResetHandler    = null;
let zoomBehavior  = null;
let svgSelection  = null;
let isDragging    = false;
let geoProjection = null;
let geoPath       = null;
let geoFeatures   = [];

/* ═══════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════ */

/** Returns flag emoji for a 2-letter alpha2 code */
function flagEmoji(alpha2) {
  if (!alpha2 || alpha2.length !== 2 || alpha2 === 'AQ' || alpha2 === 'XK' || alpha2 === 'EH') return '🏳';
  return [...alpha2.toUpperCase()].map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65)).join('');
}

/** Returns the set of ISO numeric codes that belong to a filter */
function getFilterCodes(filter) {
  if (filter === 'continents') {
    return new Set(Object.keys(COUNTRIES).map(Number));
  }
  if (filter === 'europe') {
    return new Set(Object.keys(COUNTRIES).filter(k => COUNTRIES[+k].continent === 'europe').map(Number));
  }
  if (filter === 'asia') {
    return new Set(Object.keys(COUNTRIES).filter(k => COUNTRIES[+k].continent === 'asia').map(Number));
  }
  if (filter === 'visited') return visitedSet;
  if (filter === 'microstates') return FILTER_SETS.microstates;
  return FILTER_SETS[filter] || new Set();
}

/** Returns the highlight fill for a given country code under the active filter */
function getFillColor(code, filter) {
  if (!filter) return DEFAULT_LAND;
  const numCode = +code;
  const country = COUNTRIES[numCode];

  if (filter === 'visited') {
    const base = visitedSet.has(numCode) ? '#ffd43b' : DEFAULT_LAND;
    return numCode === selectedCountryCode ? darkenColor(base) : base;
  }

  const codes = getFilterCodes(filter);
  if (!codes.has(numCode)) return DEFAULT_LAND;

  let fillColor;
  if (filter === 'continents') {
    fillColor = country ? (CONTINENT_COLORS[country.continent] || DEFAULT_LAND) : DEFAULT_LAND;
  } else {
    fillColor = FILTER_COLORS[filter] || DEFAULT_LAND;
  }
  return numCode === selectedCountryCode ? darkenColor(fillColor) : fillColor;
}

/** Tags that appear in the tooltip for a given country */
function getTooltipTags(code) {
  const numCode = +code;
  const tags = [];
  if (FILTER_SETS.eu.has(numCode))         tags.push({ label: 'ЄС',           color: '#4dabf7' });
  if (FILTER_SETS.schengen.has(numCode))   tags.push({ label: 'Шенген',       color: '#a9e34b' });
  if (FILTER_SETS.visafree.has(numCode))   tags.push({ label: 'Безвіз 🇺🇦',   color: '#ffa94d' });
  if (FILTER_SETS.disputed.has(numCode))   tags.push({ label: 'Спірна',       color: '#ff6b6b' });
  if (FILTER_SETS.microstates.has(numCode))tags.push({ label: 'Мікродержава', color: '#e599f7' });
  if (visitedSet.has(numCode))             tags.push({ label: '✈️ Відвідана',  color: '#ffd43b' });
  return tags;
}

/* ═══════════════════════════════════════════════════
   VISITED STATS
═══════════════════════════════════════════════════ */

// Approximate distribution: [countries, cumulative % of people who visited ≤ that many]
// Based on global travel surveys (heavily right-skewed distribution)
const VISITED_PERCENTILES = [
  [0,   0  ],
  [1,   22 ],
  [2,   34 ],
  [3,   43 ],
  [4,   51 ],
  [5,   57 ],
  [7,   64 ],
  [10,  71 ],
  [15,  78 ],
  [20,  84 ],
  [25,  88 ],
  [30,  91 ],
  [40,  93.5],
  [50,  95.5],
  [60,  96.8],
  [75,  97.8],
  [100, 98.7],
  [125, 99.2],
  [150, 99.5],
  [175, 99.7],
  [195, 99.9],
];

function getVisitedPercentile(count) {
  if (count <= 0) return null;
  const pts = VISITED_PERCENTILES;
  if (count >= pts[pts.length - 1][0]) return 100 - pts[pts.length - 1][1];
  for (let i = 1; i < pts.length; i++) {
    if (count <= pts[i][0]) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      const t = (count - x0) / (x1 - x0);
      const cumulative = y0 + t * (y1 - y0);
      return Math.max(0.1, 100 - cumulative);
    }
  }
  return null;
}

function getTravelerCategory(count) {
  if (count === 0)        return { label: 'Ще не мандрував',    icon: '🌱' };
  if (count <= 3)         return { label: 'Початківець',         icon: '🗺️' };
  if (count <= 10)        return { label: 'Мандрівник',          icon: '✈️' };
  if (count <= 25)        return { label: 'Досвідчений',         icon: '🌍' };
  if (count <= 50)        return { label: 'Об\'їхав пів світу',  icon: '🌎' };
  if (count <= 100)       return { label: 'Мандрівник світу',    icon: '🏅' };
  if (count <= 150)       return { label: 'Елітний мандрівник',  icon: '🏆' };
  return                         { label: 'Легенда',             icon: '⭐' };
}

function updateVisitedStats() {
  const count = visitedSet.size;
  const pct   = ((count / 195) * 100).toFixed(1);
  document.getElementById('visited-count').textContent = `${count} / 195 (${pct}%)`;

  // Category + percentile badge
  const percentileEl = document.getElementById('visited-percentile');
  if (percentileEl) {
    const cat = getTravelerCategory(count);
    const top = getVisitedPercentile(count);
    const topStr = top !== null
      ? (top < 1 ? top.toFixed(1) : Math.round(top))
      : null;

    percentileEl.innerHTML = topStr !== null
      ? `${cat.icon} ${cat.label} · <span class="percentile-value">топ ~${topStr}%</span> <span class="percentile-hint" title="Приблизна оцінка на основі Pew Research 2023 (24 країни). Точні глобальні дані відсутні.">ⓘ</span>`
      : `${cat.icon} ${cat.label}`;
    percentileEl.style.display = '';
  }

  // Update visited badge
  const badge = document.getElementById('badge-visited');
  if (badge) badge.textContent = count;

  // Refresh map if visited filter is active
  if (activeFilter === 'visited') {
    d3.selectAll('.country-path')
      .transition().duration(200)
      .style('fill', d => getFillColor(d.id, 'visited'));
    d3.selectAll('.n-cyprus-overlay')
      .transition().duration(200)
      .style('fill', getFillColor(9001, 'visited'));
    d3.selectAll('.country-marker').each(function() {
      const code = +this.dataset.id;
      const fill = getFillColor(code, 'visited');
      const stroke = fill === DEFAULT_LAND ? '#718096' : fill;
      d3.select(this).select('.marker-dot').transition().duration(200).attr('fill', fill);
      d3.select(this).select('.marker-ring').transition().duration(200).attr('stroke', stroke);
    });
  }
}

/* ═══════════════════════════════════════════════════
   POPUP
═══════════════════════════════════════════════════ */
function openPopup(code) {
  const country   = COUNTRIES[code];
  const territory = !country ? TERRITORIES[code] : null;
  const data      = country || territory;
  if (!data) return;

  const overlay   = document.getElementById('popup-overlay');
  const flagEl    = document.getElementById('popup-flag');
  const titleEl   = document.getElementById('popup-title');
  const tabInfo   = document.getElementById('tab-info');
  const tabTourism= document.getElementById('tab-tourism');
  const crimeaNote= document.getElementById('crimea-note');
  const btnVisited= document.getElementById('btn-visited');
  const popupTags = document.getElementById('popup-tags');

  // Header
  flagEl.textContent  = flagEmoji(data.alpha2);
  titleEl.textContent = data.name;

  // Tags
  const tags = country ? getTooltipTags(code) : [];
  popupTags.innerHTML = tags.map(t =>
    `<span class="tooltip-tag" style="background:${t.color}">${t.label}</span>`
  ).join('');

  // Info tab
  const contName = CONTINENT_NAMES[data.continent] || '';
  const parentHtml = territory && territory.parentCode
    ? `<div class="info-item info-item-wide">
        <span class="info-label">Належить</span>
        <span class="info-value">${flagEmoji(COUNTRIES[territory.parentCode]?.alpha2 || '')} ${territory.parentName}</span>
       </div>`
    : '';
  const isoAlpha = data.alpha2 && data.alpha2.length === 2 ? data.alpha2 : '—';
  tabInfo.innerHTML = `
    <div class="info-grid">
      <div class="info-item">
        <span class="info-label">Столиця</span>
        <span class="info-value">${data.capital || '—'}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Континент</span>
        <span class="info-value">${contName}</span>
      </div>
      <div class="info-item">
        <span class="info-label">ISO код</span>
        <span class="info-value">${isoAlpha}</span>
      </div>
      <div class="info-item">
        <span class="info-label">ISO номер</span>
        <span class="info-value">${code < 9000 ? code : '—'}</span>
      </div>
      ${parentHtml}
    </div>
    ${territory ? '<div class="territory-note">Залежна/заморська територія</div>' : ''}
  `;

  // Crimea note
  crimeaNote.style.display = (code === 804) ? '' : 'none';

  // Tourism tab
  const attractions = TOURISM[code];
  if (attractions && attractions.length) {
    tabTourism.innerHTML = `
      <ul class="tourism-list">
        ${attractions.map(a => `<li class="tourism-item">${a}</li>`).join('')}
      </ul>
    `;
  } else {
    tabTourism.innerHTML = '<p style="color:#8892a4;font-size:13px;padding:8px 0;">Інформація про туристичні пам\'ятки відсутня</p>';
  }

  // Tabs — reset to first tab
  document.querySelectorAll('.popup-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.popup-tab[data-tab="info"]').classList.add('active');
  tabInfo.style.display    = '';
  tabTourism.style.display = 'none';

  // Visited button — hidden for pure territories (show only for sovereign countries)
  const newBtn = btnVisited.cloneNode(true);
  btnVisited.parentNode.replaceChild(newBtn, btnVisited);
  const freshBtn = document.getElementById('btn-visited');

  if (territory) {
    freshBtn.style.display = 'none';
  } else {
    freshBtn.style.display = '';
    freshBtn.className = 'btn-visited' + (visitedSet.has(code) ? ' visited' : '');
    freshBtn.textContent = visitedSet.has(code) ? '✅ Відмічено як відвідану' : '＋ Відмітити як відвідану';
    freshBtn.addEventListener('click', () => {
      if (visitedSet.has(code)) {
        visitedSet.delete(code);
      } else {
        visitedSet.add(code);
      }
      saveVisited();
      updateVisitedStats();
      const isNowVisited = visitedSet.has(code);
      freshBtn.textContent = isNowVisited ? '✅ Відмічено як відвідану' : '＋ Відмітити як відвідану';
      freshBtn.className = 'btn-visited' + (isNowVisited ? ' visited' : '');
    });
  }

  // Show overlay
  overlay.style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
}

/* ═══════════════════════════════════════════════════
   GLOBE / FLAT HELPERS
═══════════════════════════════════════════════════ */

/** Redraw all projected paths using current geoPath */
function redrawAllPaths() {
  if (!gMapGroup || !geoPath) return;
  gMapGroup.selectAll('.sphere,.graticule,.country-path')
    .attr('d', geoPath);
  if (gBorderMesh) gBorderMesh.attr('d', geoPath);
  if (gHoverHighlight && !gHoverHighlight.empty() && gHoverHighlight.datum()) {
    gHoverHighlight.attr('d', geoPath);
  }
  if (gSelectionHighlight && !gSelectionHighlight.empty() && gSelectionHighlight.datum()) {
    gSelectionHighlight.attr('d', geoPath);
  }
  updateGlobeLabels();
}

/** Update label visibility + positions in flat mode */
function updateFlatLabels(k) {
  if (!gLabelsGroup) return;
  gLabelsGroup.selectAll('.country-label').each(function(d) {
    const grp = d3.select(this);
    const effectiveArea = d.area * k * k;
    if (effectiveArea < LABEL_THRESHOLD_NAME) { grp.style('display', 'none'); return; }

    const fs = LABEL_BASE_FS / k;
    grp.style('display', '');
    grp.select('.label-name').style('font-size', fs + 'px');

    const showCapital = effectiveArea >= LABEL_THRESHOLD_CAPITAL;
    grp.select('.label-capital')
      .style('display', showCapital ? '' : 'none')
      .style('font-size', (fs * 0.78) + 'px')
      .attr('dy', (fs * 1.5) + 'px');
  });
}

/** Reposition and show/hide labels in globe mode */
function updateGlobeLabels() {
  if (viewMode !== 'globe' || !gLabelsGroup || !geoProjection || !globeBaseScale) return;
  const r      = geoProjection.rotate();
  const center = [-r[0], -r[1]];
  const k      = geoProjection.scale() / globeBaseScale;

  gLabelsGroup.selectAll('.country-label').each(function(d) {
    const grp = d3.select(this);
    // Hide if on back of globe
    if (d3.geoDistance(d.centroid, center) > Math.PI / 2 - 0.08) {
      grp.style('display', 'none'); return;
    }
    const p = geoProjection(d.centroid);
    if (!p) { grp.style('display', 'none'); return; }

    const effectiveArea = d.area * k * k;
    if (effectiveArea < LABEL_THRESHOLD_NAME) { grp.style('display', 'none'); return; }

    const fs = LABEL_BASE_FS / k;
    grp.style('display', '').attr('transform', `translate(${p[0]},${p[1]})`);
    grp.select('.label-name').style('font-size', fs + 'px');

    const showCapital = effectiveArea >= LABEL_THRESHOLD_CAPITAL;
    grp.select('.label-capital')
      .style('display', showCapital ? '' : 'none')
      .style('font-size', (fs * 0.78) + 'px')
      .attr('dy', (fs * 1.5) + 'px');
  });
}

/** Reposition microstate markers; hides them if on back of globe */
function repositionMarkers() {
  if (!gMarkersOverlay || !geoProjection) return;
  gMarkersOverlay.selectAll('.country-marker').each(function() {
    const code   = +this.dataset.id;
    const coords = POINT_COUNTRIES[code];
    if (!coords) return;
    if (viewMode === 'globe') {
      const r      = geoProjection.rotate();
      const center = [-r[0], -r[1]];
      if (d3.geoDistance(coords, center) > Math.PI / 2 - 0.05) {
        d3.select(this).style('display', 'none');
        return;
      }
      d3.select(this).style('display', '');
    }
    const p = geoProjection(coords);
    if (p) d3.select(this).attr('transform', `translate(${p[0]},${p[1]})`);
  });
}

/** Switch between 'flat' and 'globe' view modes */
function switchViewMode(mode) {
  if (mode === viewMode || !svgSelection || !geoProjection) return;
  viewMode = mode;

  // Update toggle button states
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === mode);
  });

  const svgEl = document.getElementById('world-map');
  const width  = svgEl.clientWidth;
  const height = svgEl.clientHeight;

  if (mode === 'globe') {
    // Reset flat zoom transform on map group
    gMapGroup.attr('transform', null);
    // Remove flat zoom
    svgSelection.on('.zoom', null);

    // Build orthographic projection
    globeBaseScale = Math.min(width, height) * 0.46;
    geoProjection  = d3.geoOrthographic()
      .scale(globeBaseScale)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .rotate(globeRotation);
    geoPath = d3.geoPath().projection(geoProjection);

    // Attach globe drag (rotate) + zoom (scale)
    let dragStart = null, rotAtDragStart = null;
    const globeDrag = d3.drag()
      .on('start', event => {
        dragStart       = [event.x, event.y];
        rotAtDragStart  = [...globeRotation];
        isDragging      = false;
      })
      .on('drag', event => {
        isDragging       = true;
        const sc         = geoProjection.scale();
        const dx         = event.x - dragStart[0];
        const dy         = event.y - dragStart[1];
        globeRotation    = [
          rotAtDragStart[0] + dx * 90 / sc,
          Math.max(-90, Math.min(90, rotAtDragStart[1] - dy * 90 / sc)),
          rotAtDragStart[2],
        ];
        geoProjection.rotate(globeRotation);
        redrawAllPaths();
        repositionMarkers();
      })
      .on('end', () => { setTimeout(() => { isDragging = false; }, 50); });

    const globeZoom = d3.zoom()
      .scaleExtent([0.4, 12])
      .on('zoom', event => {
        geoProjection.scale(globeBaseScale * event.transform.k);
        redrawAllPaths();
        repositionMarkers();
      });

    svgSelection.call(globeDrag).call(globeZoom);
    svgSelection.on('dblclick.zoom', null);

    // Swap zoom button handlers
    zoomInHandler    = () => { geoProjection.scale(geoProjection.scale() * 1.5); redrawAllPaths(); repositionMarkers(); };
    zoomOutHandler   = () => { geoProjection.scale(Math.max(globeBaseScale * 0.4, geoProjection.scale() / 1.5)); redrawAllPaths(); repositionMarkers(); };
    zoomResetHandler = () => {
      globeRotation = [0, 0, 0];
      geoProjection.rotate(globeRotation).scale(globeBaseScale);
      svgSelection.call(globeZoom.transform, d3.zoomIdentity);
      redrawAllPaths();
      repositionMarkers();
    };

    // Show all markers (visibility filtered in repositionMarkers)
    gMarkersOverlay.selectAll('.country-marker').style('display', '');

    redrawAllPaths();
    repositionMarkers();

  } else { // flat
    // Detach globe interactions
    svgSelection.on('.zoom', null).on('.drag', null);

    // Show all markers
    gMarkersOverlay.selectAll('.country-marker').style('display', '');

    // Rebuild NaturalEarth projection
    geoProjection = d3.geoNaturalEarth1()
      .scale(width / 6.3)
      .translate([width / 2, height / 2]);
    geoPath = d3.geoPath().projection(geoProjection);

    // Re-attach flat zoom (reset to identity)
    svgSelection.call(zoomBehavior);
    svgSelection.on('dblclick.zoom', null);
    svgSelection.call(zoomBehavior.transform, d3.zoomIdentity);

    // Reset label positions to flat centroids and show at k=1
    if (gLabelsGroup) {
      gLabelsGroup.selectAll('.country-label').each(function(d) {
        if (d && !isNaN(d.cx) && !isNaN(d.cy))
          d3.select(this).attr('transform', `translate(${d.cx},${d.cy})`);
      });
      updateFlatLabels(1);
    }

    // Restore flat zoom button handlers
    const ZOOM_STEP = 1.6;
    zoomInHandler    = () => svgSelection.transition().duration(300).call(zoomBehavior.scaleBy, ZOOM_STEP);
    zoomOutHandler   = () => svgSelection.transition().duration(300).call(zoomBehavior.scaleBy, 1 / ZOOM_STEP);
    zoomResetHandler = () => svgSelection.transition().duration(400).call(zoomBehavior.transform, d3.zoomIdentity);

    redrawAllPaths();
    repositionMarkers();
  }
}

/* ═══════════════════════════════════════════════════
   MAP INIT
═══════════════════════════════════════════════════ */

async function initMap() {
  // Show loading overlay
  gWrapperEl = document.getElementById('map-wrapper');
  const wrapper = gWrapperEl;
  const loadingEl = document.createElement('div');
  loadingEl.className = 'map-loading';
  loadingEl.id = 'map-loading';
  loadingEl.innerHTML = '<div class="spinner"></div><span>Завантаження карти...</span>';
  wrapper.appendChild(loadingEl);

  // Dimensions
  const svgEl = document.getElementById('world-map');
  const width  = svgEl.clientWidth  || wrapper.clientWidth;
  const height = svgEl.clientHeight || wrapper.clientHeight;

  // D3 selection
  svgSelection = d3.select('#world-map')
    .attr('width', width)
    .attr('height', height);

  // Projection (assigned to module-level geoProjection immediately)
  geoProjection = d3.geoNaturalEarth1()
    .scale(width / 6.3)
    .translate([width / 2, height / 2]);
  geoPath = d3.geoPath().projection(geoProjection);

  // Container group (receives zoom transform)
  gMapGroup = svgSelection.append('g').attr('class', 'map-group');
  const g = gMapGroup;

  // Ocean sphere
  g.append('path')
    .datum({ type: 'Sphere' })
    .attr('class', 'sphere')
    .attr('d', geoPath);

  // Graticule
  const graticule = d3.geoGraticule()();
  g.append('path')
    .datum(graticule)
    .attr('class', 'graticule')
    .attr('d', geoPath);

  // Load TopoJSON
  let world;
  try {
    world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
  } catch (err) {
    loadingEl.innerHTML = '<span style="color:#ff6b6b">Помилка завантаження даних карти. Перевірте інтернет-з\'єднання.</span>';
    console.error(err);
    return;
  }

  const countries = topojson.feature(world, world.objects.countries);
  geoFeatures = countries.features;

  // Tooltip element
  gTooltipEl = document.getElementById('tooltip');
  const tooltip = gTooltipEl;

  // Draw country paths
  g.selectAll('.country-path')
    .data(countries.features)
    .join('path')
      .attr('class', 'country-path')
      .attr('d', geoPath)
      .attr('data-id', d => d.id)
      .style('fill', d => getFillColor(d.id, activeFilter))
      .on('mousemove', function(event, d) {
        const code      = +d.id;
        const country   = COUNTRIES[code];
        const territory = !country ? TERRITORIES[code] : null;
        const data      = country || territory;
        if (!data) return;

        const contName  = CONTINENT_NAMES[data.continent] || '';
        const tags      = country ? getTooltipTags(code) : [];
        const flag      = flagEmoji(data.alpha2);

        const tagsHtml = tags.length
          ? `<div class="tooltip-tags">${tags.map(t =>
              `<span class="tooltip-tag" style="background:${t.color}">${t.label}</span>`
            ).join('')}</div>`
          : '';

        const territoryHtml = territory
          ? `<div class="tooltip-territory">🏳 Тер. ${territory.parentName}</div>`
          : '';

        tooltip.innerHTML = `
          <div class="tooltip-name">${flag} ${data.name}</div>
          <div class="tooltip-capital">🏛 ${data.capital || ''}</div>
          <div class="tooltip-continent">${contName}</div>
          ${territoryHtml}
          ${tagsHtml}
        `;

        // Position tooltip
        const rect = wrapper.getBoundingClientRect();
        let tx = event.clientX - rect.left + 14;
        let ty = event.clientY - rect.top  - 10;

        // Keep tooltip inside wrapper
        const tipW = 200;
        const tipH = tooltip.offsetHeight || 80;
        if (tx + tipW > rect.width)  tx = event.clientX - rect.left - tipW - 14;
        if (ty + tipH > rect.height) ty = event.clientY - rect.top  - tipH - 10;

        tooltip.style.left    = tx + 'px';
        tooltip.style.top     = ty + 'px';
        tooltip.style.display = 'block';

        // Hover highlight
        if (gHoverHighlight) {
          gHoverHighlight.datum(d).attr('d', geoPath).style('display', '');
        }
      })
      .on('mouseleave', function() {
        tooltip.style.display = 'none';
        if (gHoverHighlight) gHoverHighlight.style('display', 'none').datum(null);
      })
      .on('click', function(event, d) {
        if (isDragging) { isDragging = false; return; }
        const code = +d.id;
        if (COUNTRIES[code] || TERRITORIES[code]) openPopup(code);
      });

  // ── Northern Cyprus overlay ──
  g.append('path')
    .datum(N_CYPRUS_GEOJSON)
    .attr('class', 'country-path n-cyprus-overlay')
    .attr('d', geoPath)
    .style('fill', getFillColor(9001, activeFilter))
    .style('stroke', 'none')
    .style('cursor', 'pointer')
    .on('mousemove', function(event) {
      const country  = COUNTRIES[9001];
      const tags     = getTooltipTags(9001);
      const flag     = flagEmoji(country.alpha2);
      const contName = CONTINENT_NAMES[country.continent] || '';
      const tagsHtml = tags.length ? `<div class="tooltip-tags">${tags.map(t =>
        `<span class="tooltip-tag" style="background:${t.color}">${t.label}</span>`).join('')}</div>` : '';
      tooltip.innerHTML = `
        <div class="tooltip-name">${flag} ${country.name}</div>
        <div class="tooltip-capital">🏛 ${country.capital || ''}</div>
        <div class="tooltip-continent">${contName}</div>
        <div style="color:#ff6b6b;font-size:11px;margin-top:4px;">⚠️ Частково визнана держава</div>
        ${tagsHtml}`;
      const rect = wrapper.getBoundingClientRect();
      let tx = event.clientX - rect.left + 14;
      let ty = event.clientY - rect.top  - 10;
      const tipW = 200, tipH = tooltip.offsetHeight || 80;
      if (tx + tipW > rect.width)  tx = event.clientX - rect.left - tipW - 14;
      if (ty + tipH > rect.height) ty = event.clientY - rect.top  - tipH - 10;
      tooltip.style.left    = tx + 'px';
      tooltip.style.top     = ty + 'px';
      tooltip.style.display = 'block';
      if (gHoverHighlight) gHoverHighlight.datum(N_CYPRUS_GEOJSON).attr('d', geoPath).style('display', '');
    })
    .on('mouseleave', function() {
      tooltip.style.display = 'none';
      if (gHoverHighlight) gHoverHighlight.style('display', 'none').datum(null);
    })
    .on('click', function(event) {
      if (isDragging) return;
      openPopup(9001);
    });

  // ── Border mesh — uniform borders drawn on top of all fills ──
  gMeshDatum = topojson.mesh(world, world.objects.countries);
  gBorderMesh = g.append('path')
    .datum(gMeshDatum)
    .attr('class', 'country-borders-layer')
    .attr('d', geoPath)
    .style('fill', 'none')
    .style('stroke', DEFAULT_STROKE)
    .style('stroke-width', '0.5px')
    .style('vector-effect', 'non-scaling-stroke')
    .style('pointer-events', 'none');

  // ── Hover highlight overlay ──
  gHoverHighlight = g.append('path')
    .attr('class', 'hover-highlight')
    .style('fill', 'none')
    .style('stroke', 'rgba(255,255,255,0.7)')
    .style('stroke-width', '1.5px')
    .style('vector-effect', 'non-scaling-stroke')
    .style('pointer-events', 'none')
    .style('display', 'none');

  // ── Selection highlight overlay (for sidebar clicks) ──
  gSelectionHighlight = g.append('path')
    .attr('class', 'selection-highlight')
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '2px')
    .style('vector-effect', 'non-scaling-stroke')
    .style('pointer-events', 'none')
    .style('display', 'none');

  // ── Zoom behaviour ──
  zoomBehavior = d3.zoom()
    .scaleExtent([1, 40])
    .on('start', () => { isDragging = false; })
    .on('zoom', (event) => {
      isDragging = true;
      gMapGroup.attr('transform', event.transform);
      // Reposition markers in screen space (they live outside g)
      gMarkersOverlay.selectAll('.country-marker').each(function() {
        const code   = +this.dataset.id;
        const coords = POINT_COUNTRIES[code];
        if (!coords) return;
        const [sx, sy] = event.transform.apply(geoProjection(coords));
        d3.select(this).attr('transform', `translate(${sx},${sy})`);
      });
      updateFlatLabels(event.transform.k);
    });

  svgSelection.call(zoomBehavior);
  svgSelection.on('dblclick.zoom', null);

  // ── Marker overlay — appended AFTER g so it renders on top ──
  gMarkersOverlay = svgSelection.append('g').attr('class', 'markers-overlay');
  const markersOverlay = gMarkersOverlay;

  function showTooltipFor(event, code) {
    const country  = COUNTRIES[code];
    const tags     = getTooltipTags(code);
    const flag     = flagEmoji(country.alpha2);
    const contName = CONTINENT_NAMES[country.continent] || '';
    const tagsHtml = tags.length
      ? `<div class="tooltip-tags">${tags.map(t =>
          `<span class="tooltip-tag" style="background:${t.color}">${t.label}</span>`
        ).join('')}</div>` : '';
    tooltip.innerHTML = `
      <div class="tooltip-name">${flag} ${country.name}</div>
      <div class="tooltip-capital">🏛 ${country.capital || ''}</div>
      <div class="tooltip-continent">${contName}</div>
      ${tagsHtml}`;
    const rect = wrapper.getBoundingClientRect();
    let tx = event.clientX - rect.left + 14;
    let ty = event.clientY - rect.top  - 10;
    const tipW = 200, tipH = tooltip.offsetHeight || 80;
    if (tx + tipW > rect.width)  tx = event.clientX - rect.left - tipW - 14;
    if (ty + tipH > rect.height) ty = event.clientY - rect.top  - tipH - 10;
    tooltip.style.left = tx + 'px';
    tooltip.style.top  = ty + 'px';
    tooltip.style.display = 'block';
  }

  function renderMarkers() {
    markersOverlay.selectAll('.country-marker').remove();
    Object.entries(POINT_COUNTRIES).forEach(([codeStr, coords]) => {
      const code    = +codeStr;
      const country = COUNTRIES[code];
      if (!country) return;
      const projected = geoProjection(coords);
      if (!projected) return;
      const fill   = activeFilter ? getFillColor(code, activeFilter) : DEFAULT_LAND;
      const stroke = fill === DEFAULT_LAND ? '#718096' : fill;

      const grp = markersOverlay.append('g')
        .attr('class', 'country-marker')
        .attr('data-id', code)
        .attr('transform', `translate(${projected[0]},${projected[1]})`)
        .style('cursor', 'pointer');

      grp.append('circle').attr('class', 'marker-ring')
        .attr('r', 7).attr('fill', 'none')
        .attr('stroke', stroke).attr('stroke-width', 1.5).attr('opacity', 0.7);

      grp.append('circle').attr('class', 'marker-dot')
        .attr('r', 4).attr('fill', fill)
        .attr('stroke', '#1a1d29').attr('stroke-width', 1);

      grp.on('mousemove', function(event) { showTooltipFor(event, code); })
         .on('mouseleave', () => { tooltip.style.display = 'none'; })
         .on('click', function(event) {
           if (isDragging) return;
           event.stopPropagation();
           openPopup(code);
         });
    });
  }
  renderMarkers();

  // ── Country labels ──
  gLabelsGroup = gMapGroup.append('g')
    .attr('class', 'labels-group')
    .style('pointer-events', 'none');

  gLabelData = geoFeatures
    .filter(f => COUNTRIES[+f.id] && !POINT_COUNTRIES[+f.id])
    .map(f => {
      const code    = +f.id;
      const country = COUNTRIES[code];
      const centroid = d3.geoCentroid(f);
      const area    = geoPath.area(f);
      const proj    = geoPath.centroid(f);
      const cx = proj[0], cy = proj[1];
      return { f, code, country, centroid, area, cx, cy };
    })
    .filter(d => d.area > 0 && isFinite(d.area) && !isNaN(d.cx) && !isNaN(d.cy));

  gLabelsGroup.selectAll('.country-label')
    .data(gLabelData)
    .join('g')
      .attr('class', 'country-label')
      .attr('transform', d => `translate(${d.cx},${d.cy})`)
      .each(function(d) {
        const grp = d3.select(this);
        grp.append('text')
          .attr('class', 'label-name')
          .attr('text-anchor', 'middle')
          .attr('dy', '0.35em')
          .text(d.country.name);
        grp.append('text')
          .attr('class', 'label-capital')
          .attr('text-anchor', 'middle')
          .attr('dy', '1.5em')
          .style('display', 'none')
          .text(d.country.capital || '');
      });

  updateFlatLabels(1);

  // ── Zoom buttons (via handler vars so they can be swapped in globe mode) ──
  const ZOOM_STEP = 1.6;
  zoomInHandler    = () => svgSelection.transition().duration(300).call(zoomBehavior.scaleBy, ZOOM_STEP);
  zoomOutHandler   = () => svgSelection.transition().duration(300).call(zoomBehavior.scaleBy, 1 / ZOOM_STEP);
  zoomResetHandler = () => svgSelection.transition().duration(400).call(zoomBehavior.transform, d3.zoomIdentity);

  document.getElementById('zoom-in').addEventListener('click',    () => zoomInHandler());
  document.getElementById('zoom-out').addEventListener('click',   () => zoomOutHandler());
  document.getElementById('zoom-reset').addEventListener('click', () => zoomResetHandler());

  // ── View mode toggle ──
  document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => switchViewMode(btn.dataset.view));
  });

  // Remove loading overlay
  loadingEl.remove();

  // Update badge counts and visited stats
  updateBadgeCounts();
  updateVisitedStats();

  // Attach filter button listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      activeFilter = activeFilter === filter ? null : filter;
      applyFilter(activeFilter);
    });
  });

  // ── Country search ──────────────────────────────────────────────────────────
  const searchInput    = document.getElementById('search-input');
  const searchClear    = document.getElementById('search-clear');
  const searchDropdown = document.getElementById('search-dropdown');

  const countryEntries = Object.entries(COUNTRIES); // [code, data]

  function buildDropdown(query) {
    const q = query.trim().toLowerCase();
    searchDropdown.innerHTML = '';

    if (!q) {
      searchDropdown.style.display = 'none';
      return;
    }

    const matches = countryEntries
      .filter(([, c]) => c.name.toLowerCase().includes(q))
      .sort(([, a], [, b]) => {
        const ai = a.name.toLowerCase().indexOf(q);
        const bi = b.name.toLowerCase().indexOf(q);
        return ai - bi || a.name.localeCompare(b.name, 'uk');
      })
      .slice(0, 8);

    if (!matches.length) {
      const li = document.createElement('li');
      li.className = 'search-no-results';
      li.textContent = 'Нічого не знайдено';
      searchDropdown.appendChild(li);
    } else {
      matches.forEach(([code, c]) => {
        const li = document.createElement('li');
        li.className = 'search-result-item';
        li.innerHTML = `
          <span class="search-result-flag">${flagEmoji(c.alpha2 || '')}</span>
          <span class="search-result-info">
            <span class="search-result-name">${c.name}</span>
            ${c.capital ? `<span class="search-result-capital">${c.capital}</span>` : ''}
          </span>`;
        li.addEventListener('mousedown', e => {
          e.preventDefault(); // keep focus so blur doesn't fire first
          closeDropdown();
          searchInput.value = '';
          searchClear.style.display = 'none';
          zoomToCountry(Number(code));
        });
        searchDropdown.appendChild(li);
      });
    }

    searchDropdown.style.display = '';
  }

  function closeDropdown() {
    searchDropdown.style.display = 'none';
    searchDropdown.innerHTML = '';
  }

  searchInput.addEventListener('input', () => {
    const val = searchInput.value;
    searchClear.style.display = val ? '' : 'none';
    buildDropdown(val);
  });

  searchInput.addEventListener('blur', () => {
    // small delay so mousedown on item fires first
    setTimeout(closeDropdown, 150);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    closeDropdown();
    searchInput.focus();
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', e => {
    const items = searchDropdown.querySelectorAll('.search-result-item');
    if (!items.length) return;
    const active = searchDropdown.querySelector('.search-result-item.active');
    let idx = active ? [...items].indexOf(active) : -1;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (active) active.classList.remove('active');
      items[Math.min(idx + 1, items.length - 1)].classList.add('active');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (active) active.classList.remove('active');
      if (idx > 0) items[idx - 1].classList.add('active');
    } else if (e.key === 'Enter') {
      if (active) active.dispatchEvent(new MouseEvent('mousedown'));
    } else if (e.key === 'Escape') {
      closeDropdown();
      searchInput.blur();
    }
  });
  // ────────────────────────────────────────────────────────────────────────────

  // ── Filter reset button ──────────────────────────────────────────────────
  const filterResetBtn = document.getElementById('filter-reset');
  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', () => {
      activeFilter = null;
      applyFilter(null);
      filterResetBtn.style.display = 'none';
    });
  }

  // Show/hide reset button when filter changes — patch applyFilter call sites
  const origApplyFilter = applyFilter;
  // We do this by checking after each filter toggle; the filter-btn click
  // already calls applyFilter. We update reset visibility inside it by
  // watching the active state. Simpler: update reset btn visibility
  // after each filter-btn click (listeners are already attached above).
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (filterResetBtn) filterResetBtn.style.display = activeFilter ? '' : 'none';
    });
  });

  // ── Export / Import visited ──────────────────────────────────────────────
  document.getElementById('btn-export-visited')?.addEventListener('click', () => {
    const data = {
      version: 1,
      exported: new Date().toISOString(),
      visited: [...visitedSet].map(code => ({
        code,
        name: (COUNTRIES[code] || {}).name || String(code)
      }))
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = 'visited-countries.json'; a.click();
    URL.revokeObjectURL(url);
  });

  const importInput = document.getElementById('import-file-input');
  document.getElementById('btn-import-visited')?.addEventListener('click', () => {
    importInput?.click();
  });
  importInput?.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data  = JSON.parse(ev.target.result);
        const codes = (data.visited || data).map(v => Number(v.code ?? v));
        codes.forEach(c => { if (c) visitedSet.add(c); });
        saveVisited();
        updateVisitedStats();
        if (activeFilter === 'visited') applyFilter('visited');
      } catch { /* ignore parse errors */ }
      e.target.value = '';
    };
    reader.readAsText(file);
  });
  // ─────────────────────────────────────────────────────────────────────────

  // Popup close handlers
  document.getElementById('popup-close').addEventListener('click', closePopup);
  document.getElementById('popup-overlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

  // Popup tab switching
  document.querySelectorAll('.popup-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.popup-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.tab;
      document.getElementById('tab-info').style.display    = which === 'info'    ? '' : 'none';
      document.getElementById('tab-tourism').style.display = which === 'tourism' ? '' : 'none';
    });
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    const nw = svgEl.clientWidth;
    const nh = svgEl.clientHeight;
    svgSelection.attr('width', nw).attr('height', nh);
    if (viewMode === 'flat') {
      geoProjection.scale(nw / 6.3).translate([nw / 2, nh / 2]);
    } else {
      globeBaseScale = Math.min(nw, nh) * 0.46;
      geoProjection.scale(globeBaseScale).translate([nw / 2, nh / 2]);
    }
    redrawAllPaths();
    repositionMarkers();
  });
}

/* ═══════════════════════════════════════════════════
   ZOOM TO COUNTRY
═══════════════════════════════════════════════════ */
function zoomToCountry(code) {
  if (!svgSelection || !geoProjection) return;

  // Highlight selected country
  selectedCountryCode = code;
  d3.selectAll('.country-path')
    .transition().duration(250)
    .style('fill', d => getFillColor(d.id, activeFilter));
  d3.selectAll('.n-cyprus-overlay')
    .transition().duration(250)
    .style('fill', getFillColor(9001, activeFilter));
  // Show selection outline
  if (gSelectionHighlight) {
    if (POINT_COUNTRIES[code]) {
      // microstates → no polygon outline
      gSelectionHighlight.style('display', 'none').datum(null);
    } else {
      const feature = geoFeatures.find(f => +f.id === code);
      if (feature) gSelectionHighlight.datum(feature).attr('d', geoPath).style('display', '');
      else gSelectionHighlight.style('display', 'none').datum(null);
    }
  }
  d3.selectAll('.country-marker').each(function() {
    const mCode = +this.dataset.id;
    const fill = activeFilter ? getFillColor(mCode, activeFilter) : DEFAULT_LAND;
    const stroke = fill === DEFAULT_LAND ? '#718096' : fill;
    d3.select(this).select('.marker-dot').transition().duration(250).attr('fill', fill);
    d3.select(this).select('.marker-ring').transition().duration(250).attr('stroke', stroke);
  });

  // ── Globe mode: rotate to center the country ──
  if (viewMode === 'globe') {
    let lon, lat;
    if (POINT_COUNTRIES[code]) {
      [lon, lat] = POINT_COUNTRIES[code];
    } else {
      const feature = geoFeatures.find(f => +f.id === code);
      if (!feature) return;
      [lon, lat] = d3.geoCentroid(feature);
    }
    const startRot = [...globeRotation];
    const endRot   = [-lon, -lat, 0];
    const interp   = d3.interpolate(startRot, endRot);
    d3.transition().duration(750).ease(d3.easeCubicInOut)
      .tween('globe-rotate', () => t => {
        globeRotation = interp(t);
        geoProjection.rotate(globeRotation);
        redrawAllPaths();
        repositionMarkers();
      });
    return;
  }

  // ── Flat mode: zoom + pan ──
  if (!zoomBehavior) return;
  const svgEl  = document.getElementById('world-map');
  const width  = svgEl.clientWidth;
  const height = svgEl.clientHeight;
  let cx, cy, scale;

  if (POINT_COUNTRIES[code]) {
    const [px, py] = geoProjection(POINT_COUNTRIES[code]);
    cx = px; cy = py; scale = 20;
  } else {
    const feature = geoFeatures.find(f => +f.id === code);
    if (!feature) return;
    const [[x0, y0], [x1, y1]] = geoPath.bounds(feature);
    cx = (x0 + x1) / 2;
    cy = (y0 + y1) / 2;
    const dx = x1 - x0, dy = y1 - y0;
    scale = Math.max(1.5, Math.min(20, 0.8 / Math.max(dx / width, dy / height)));
  }
  const tx = width  / 2 - scale * cx;
  const ty = height / 2 - scale * cy;
  svgSelection.transition().duration(750)
    .call(zoomBehavior.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

/* ═══════════════════════════════════════════════════
   FILTER APPLICATION
═══════════════════════════════════════════════════ */

function applyFilter(filter) {
  // Clear country selection
  selectedCountryCode = null;

  // Update button active states
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  // Clear selection highlight
  if (gSelectionHighlight) gSelectionHighlight.style('display', 'none').datum(null);

  // Recolor country paths
  d3.selectAll('.country-path')
    .transition().duration(250)
    .style('fill', d => getFillColor(d.id, filter));

  // Recolor Northern Cyprus overlay
  d3.selectAll('.n-cyprus-overlay')
    .transition().duration(250)
    .style('fill', getFillColor(9001, filter));

  // Recolor point markers
  d3.selectAll('.country-marker').each(function() {
    const code = +this.dataset.id;
    const fill   = filter ? getFillColor(code, filter) : DEFAULT_LAND;
    const stroke = fill === DEFAULT_LAND ? '#718096' : fill;
    d3.select(this).select('.marker-dot').transition().duration(250).attr('fill', fill);
    d3.select(this).select('.marker-ring').transition().duration(250).attr('stroke', stroke);
  });

  // Sidebar: legend
  const legendSection = document.getElementById('legend-section');
  legendSection.style.display = (filter === 'continents') ? '' : 'none';

  // Sidebar: country list
  const countrySection = document.getElementById('country-section');
  const countryList    = document.getElementById('country-list');
  const sectionTitle   = document.getElementById('country-section-title');
  const disputedNote   = document.getElementById('disputed-note');

  if (!filter) {
    countrySection.style.display = 'none';
    disputedNote.style.display   = 'none';
    return;
  }

  countrySection.style.display = '';

  const codes = getFilterCodes(filter);
  const color = FILTER_COLORS[filter];
  const label = FILTER_LABELS[filter];

  // Build sorted list of matching countries
  const matched = [];
  codes.forEach(code => {
    const c = COUNTRIES[code];
    if (c) matched.push({ code, ...c });
  });
  matched.sort((a, b) => a.name.localeCompare(b.name, 'uk'));

  sectionTitle.textContent = `Країни: ${label} (${matched.length})`;

  // Render list items
  countryList.innerHTML = '';
  matched.forEach(c => {
    const li  = document.createElement('li');
    li.className = 'country-item';

    const dotColor = (filter === 'continents')
      ? (CONTINENT_COLORS[c.continent] || DEFAULT_LAND)
      : (color || DEFAULT_LAND);

    li.innerHTML = `
      <span class="country-dot" style="background:${dotColor};"></span>
      <span class="country-name">${c.name}</span>
      <span class="country-zoom-hint">🔍</span>
    `;
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => zoomToCountry(c.code));
    countryList.appendChild(li);
  });

  // Disputed note
  disputedNote.style.display = (filter === 'disputed') ? '' : 'none';
}

/* ═══════════════════════════════════════════════════
   BADGE COUNTS
═══════════════════════════════════════════════════ */

function updateBadgeCounts() {
  const counts = {
    continents:  Object.keys(CONTINENT_COLORS).length,
    europe:      Object.keys(COUNTRIES).filter(k => COUNTRIES[+k].continent === 'europe').length,
    asia:        Object.keys(COUNTRIES).filter(k => COUNTRIES[+k].continent === 'asia').length,
    eu:          FILTER_SETS.eu.size,
    schengen:    FILTER_SETS.schengen.size,
    visafree:    FILTER_SETS.visafree.size,
    disputed:    FILTER_SETS.disputed.size,
    microstates: FILTER_SETS.microstates.size,
    visited:     visitedSet.size,
  };

  Object.entries(counts).forEach(([key, val]) => {
    const el = document.getElementById(`badge-${key}`);
    if (el) el.textContent = val;
  });
}

/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', initMap);
