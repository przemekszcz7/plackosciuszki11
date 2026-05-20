import { MenuItem, Review, OpeningHour, GalleryPhoto } from './types';

export const OPENING_HOURS: OpeningHour[] = [
  { dayName: 'Poniedziałek', hours: 'ZAMKNIĘTE', isClosed: true },
  { dayName: 'Wtorek', hours: '12:00 - 18:00', isClosed: false },
  { dayName: 'Środa', hours: '12:00 - 18:00', isClosed: false },
  { dayName: 'Czwartek', hours: '12:00 - 18:00', isClosed: false },
  { dayName: 'Piątek', hours: '12:00 - 18:00', isClosed: false },
  { dayName: 'Sobota', hours: '12:00 - 18:00', isClosed: false },
  { dayName: 'Niedziela', hours: '12:00 - 17:00', isClosed: false },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Katarzyna Kozłowska',
    text: 'Pyszne obiady, duże porcje, zawsze świeże jedzonko!',
    date: 'Ocena z Facebooka',
    avatarLetter: 'K',
    rating: 5,
    source: 'facebook',
  },
  {
    id: 'rev-2',
    author: 'Mariusz Wiśniewski',
    text: 'Obiady bardzo smaczne duże porcje miła obsługa serdecznie polecam',
    date: 'Ocena z Facebooka',
    avatarLetter: 'M',
    rating: 5,
    source: 'facebook',
  },
  {
    id: 'rev-3',
    author: 'Piotr Kowalski',
    text: 'pierwszy raz jedliśmy burgery ,mięso bardzo dobre ,bułeczka chrupiąca ,warzywa świeże .Bardzo smaczny .polecam',
    date: 'Ocena z Facebooka',
    avatarLetter: 'P',
    rating: 5,
    source: 'facebook',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    url: 'https://i.ibb.co/FLRnf8Lm/504198403-740112818521473-1346905984351095729-n.jpg',
    category: 'obiady',
    title: 'Chrupiący Schabowy z Ziemniaczkami i Surówką',
  },
  {
    url: 'https://i.ibb.co/HLB9ycsw/701480733-1012486794617406-3841083523805205987-n.jpg',
    category: 'obiady',
    title: 'Kotlet Mielony z Puree Ziemniaczanym i Buraczkami',
  },
  {
    url: 'https://i.ibb.co/Jjf2P60T/701488728-1012486971284055-3799871822372490486-n.jpg',
    category: 'obiady',
    title: 'Tradycyjna Rolada z Kopytkami i Modrą Kapustą',
  },
  {
    url: 'https://i.ibb.co/6cfyYrBq/703002241-1014036557795763-3620475216777388553-n.jpg',
    category: 'burgery',
    title: 'Burger Klasyczny z Bekonem i Chrupiącą Bułką',
  },
  {
    url: 'https://i.ibb.co/gLNZ4Djq/502535531-740109445188477-6085695435463418702-n.jpg',
    category: 'burgery',
    title: 'Soczysty Burger Szefa Kuchni ze Świeżymi Warzywami',
  },
  {
    url: 'https://i.ibb.co/xVTQr2n/504256346-740112835188138-695325357547226879-n.jpg',
    category: 'zupy',
    title: 'Aromatyczna Zupa Krem z Dyni z Prażonymi Pestkami',
  },
  {
    url: 'https://i.ibb.co/MDb4RQRB/700143071-1012487731283979-2825711708990535520-n.jpg',
    category: 'zupy',
    title: 'Domowy Żurek z Jajkiem i Borowikami',
  },
  {
    url: 'https://i.ibb.co/tTj50Ld0/505444789-740112788521476-775795516096511868-n.jpg',
    category: 'inne',
    title: 'Złociste Polędwiczki z Kurczaka (Nuggetsy)',
  },
  {
    url: 'https://i.ibb.co/1J28bkFF/701942380-1012487461284006-7249360090238542233-n.jpg',
    category: 'inne',
    title: 'Pikantne Chrupiące Skrzydełka i Frytki',
  },
  {
    url: 'https://i.ibb.co/JwsYbD0L/700499793-1012487584617327-9042884488421569433-n.jpg',
    category: 'obiady',
    title: 'Chrupiący Dewolaj (De Volaille) z Masłem i Frytkami',
  },
  {
    url: 'https://i.ibb.co/6RGRj11M/700092310-1012487621283990-1655215719795504943-n.jpg',
    category: 'obiady',
    title: 'Domowe Gołąbki w Sosie Pomidorowym',
  },
  {
    url: 'https://i.ibb.co/tpPRFZSg/700971033-1012487511284001-5577692697568456665-n.jpg',
    category: 'obiady',
    title: 'Smaczne Pulpety Wieprzowe w Sosie Własnym z Kaszą',
  },
  {
    url: 'https://i.ibb.co/SX00TNRS/700063950-1012487854617300-4059340350063070989-n.jpg',
    category: 'obiady',
    title: 'Duszone Bitki Wieprzowe z Kaszą i Ogórkiem Kiszonym',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Obiady Domowe
  {
    id: 'm-1',
    name: 'Zestaw Dnia (Zupa + Drugie Danie)',
    description: 'Tradycyjny obiad domowy jak u mamy. Codziennie inny zestaw: pyszna gorąca zupa oraz drugie danie z dodatkami (ziemniaczki/kasza + zestaw surówek). Codzienne menu ulega zmianie – zapraszamy do kontaktu lub śledzenia Facebooka!',
    price: '35 zł',
    category: 'obiady',
    badge: 'Najniższa cena w okolicy',
  },
  {
    id: 'm-2',
    name: 'Kotlet Schabowy Tradycyjny',
    description: 'Ręcznie rozbijany, panierowany w chrupiącej bułeczce schabowy, podawany z młodymi ziemniaczkami z koperkiem i mizerią lub kapustą zasmażaną.',
    price: 'Opcja w zestawie',
    category: 'obiady',
  },
  {
    id: 'm-3',
    name: 'Domowe Gołąbki w Sosie Pomidorowym',
    description: 'Tradycyjne gołąbki z mięsem mielonym i ryżem owinięte w liść kapusty, polane aksamitnym sosem ze świeżych pomidorów.',
    price: 'Opcja w zestawie',
    category: 'obiady',
  },
  {
    id: 'm-4',
    name: 'Soczysty De Volaille z Masłem',
    description: 'Tradycyjny kotlet z piersi kurczaka zawijany z masłem i świeżymi ziołami, podawany ze złocistymi frytkami i świeżym bukietem warzyw.',
    price: 'Opcja w zestawie',
    category: 'obiady',
    badge: 'Polecamy',
  },

  // Burgery
  {
    id: 'm-burger-1',
    name: 'Burger Klasyczny',
    description: '100% soczystej wołowiny premium, świeża chrupiąca bułka maślana, pomidor, chrupiąca sałata, czerwona cebulka, ogórek kiszony i nasz autorski sos klasyczny.',
    price: 'od 29 zł',
    category: 'burgery',
    badge: 'Chrupiąca bułka',
  },
  {
    id: 'm-burger-2',
    name: 'Burger z Bekonem',
    description: '100% wołowiny, chrupiący wędzony bekon, topiony ser cheddar, krążki czerwonej cebuli, ogórek, świeży pomidor oraz pikantny sos barbecue.',
    price: 'od 33 zł',
    category: 'burgery',
  },

  // Nuggetsy, Skrzydełka itp.
  {
    id: 'm-chk-1',
    name: 'Złociste Nuggetsy (Polędwiczki)',
    description: 'Delikatne, ręcznie krojone polędwiczki z piersi kurczaka w aromatycznej, chrupiącej panierce dworskiej, podawane z sosem czosnkowym lub słodko-kwaśnym.',
    price: 'od 22 zł',
    category: 'inne',
  },
  {
    id: 'm-chk-2',
    name: 'Chrupiące Skrzydełka Kurczaka',
    description: 'Soczyste skrzydełka w naszej legendarnej, super-chrupiącej, lekko pikantnej panierce, podawane ze złocistymi frytkami.',
    price: 'od 24 zł',
    category: 'inne',
    badge: 'Bestseller',
  },

  // Catering
  {
    id: 'm-cat-1',
    name: 'Kompleksowy Catering Okolicznościowy',
    description: 'Przygotowujemy pyszne, świeże jedzenie na wszelkiego rodzaju imprezy okolicznościowe (urodziny, chrzciny, komunie, spotkania rodzinne i firmowe). Indywidualne menu dostosowane do Twoich potrzeb.',
    price: 'Cena ustalana indywidualnie',
    category: 'inne',
    badge: 'Dla domówek i firm',
  },
];
