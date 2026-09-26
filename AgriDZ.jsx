import React, { useState, useMemo } from "react";
import {
  Home, ShoppingBag, Map as MapIcon, MessageCircle, User, Search, Plus,
  Heart, Star, MapPin, Phone, Filter, ChevronDown, Bell, Settings,
  LogOut, Menu, X, TrendingUp, TrendingDown, Users, Package,
  CheckCircle, XCircle, Sun, CloudRain, Wind, Droplet, Sprout, Wheat,
  Send, ChevronLeft, ChevronRight, Shield, Stethoscope, Landmark,
  Trash2, Edit3, Globe, ArrowRight, ArrowLeft, LayoutGrid
} from "lucide-react";

/* ---------------------------------- THEME ---------------------------------- */
const C = {
  bg: "#FBF9F4",
  surface: "#FFFFFF",
  primary: "#2B5D34",
  primaryDark: "#1E4526",
  primarySoft: "#E7EFE3",
  sage: "#7C9473",
  wheat: "#C9A356",
  wheatSoft: "#F3E7C8",
  soil: "#7A5C3E",
  text: "#22281F",
  textMuted: "#67715F",
  border: "#E4DFD1",
  danger: "#B14733",
  success: "#3E7C3E",
};

/* ------------------------------- TRANSLATIONS ------------------------------ */
const T = {
  ar: {
    appName: "AgriDZ", tagline: "منصّة الفلاحة الجزائرية",
    nav_home: "الرئيسية", nav_market: "السوق", nav_map: "الخريطة", nav_messages: "الرسائل", nav_account: "الحساب",
    nav_livestock: "المواشي", nav_land: "الأراضي", nav_vets: "الأطباء", nav_prices: "الأسعار", nav_weather: "الطقس",
    nav_favorites: "المفضلة", nav_notifications: "الإشعارات", nav_dashboard: "لوحتي", nav_admin: "لوحة الإدارة",
    login: "تسجيل الدخول", register: "إنشاء حساب", logout: "تسجيل الخروج",
    fullName: "الاسم الكامل", phone: "رقم الهاتف", email: "البريد الإلكتروني",
    wilaya: "الولاية", commune: "البلدية", password: "كلمة المرور", role: "نوع المستخدم",
    role_farmer: "فلاح", role_buyer: "مشتري", role_trader: "تاجر مستلزمات", role_vet: "طبيب بيطري",
    role_landowner: "صاحب أرض", role_admin: "مدير النظام",
    searchPlaceholder: "ابحث عن منتج، أرض، طبيب...", welcome: "مرحباً بك في",
    latest: "آخر المنتجات", mostViewed: "الأكثر مشاهدة", nearbyOffers: "عروض قريبة منك",
    weatherToday: "طقس اليوم", pricesToday: "أسعار السوق اليوم", important: "إشعارات مهمة",
    addProduct: "أضف منتج", addLand: "أضف أرضاً", productName: "اسم المنتج", category: "الفئة",
    price: "السعر", quantity: "الكمية", unit: "الوحدة", description: "الوصف", publish: "نشر",
    filter: "تصفية", sortAsc: "السعر: تصاعدي", sortDesc: "السعر: تنازلي", all: "الكل",
    contactSeller: "تواصل مع البائع", addFavorite: "أضف للمفضلة", removeFavorite: "إزالة من المفضلة",
    rating: "التقييم", available: "متوفر", unavailable: "غير متوفر", area: "المساحة",
    water: "توفر بئر", electricity: "الكهرباء", road: "طريق الوصول", yes: "متوفر", no: "غير متوفر",
    call: "اتصال", message: "مراسلة", edit: "تعديل", delete: "حذف", save: "حفظ",
    myListings: "إعلاناتي", myFavorites: "مفضلتي", accountSettings: "إعدادات الحساب",
    stats: "الإحصائيات", users: "المستخدمون", listings: "الإعلانات", reports: "البلاغات",
    approve: "قبول", reject: "رفض", noResults: "لا توجد نتائج مطابقة",
    heroTitle: "من الفلاح إلى المستهلك مباشرة", heroSub: "بيع واشترِ المنتجات الفلاحية والمواشي والأراضي بدون وسطاء",
    getStarted: "ابدأ الآن", skip: "تخطي", chooseRole: "اختر نوع حسابك",
    veterinarian: "طبيب بيطري", specialty: "التخصص", experience: "الخبرة",
    conversations: "المحادثات", typeMessage: "اكتب رسالة...",
    changePrice: "تغيّر السعر", lastUpdate: "آخر تحديث", perUnit: "للوحدة",
    humidity: "الرطوبة", wind: "الرياح", rainChance: "احتمال الأمطار", nextDays: "توقعات الأيام القادمة",
    soilType: "نوع التربة", ownerInfo: "معلومات المالك", videoNote: "يمكن إرفاق فيديو للأرض",
    manageUsers: "إدارة المستخدمين", manageListings: "إدارة الإعلانات", manageCategories: "التصنيفات",
    totalUsers: "عدد المستخدمين", totalListings: "عدد الإعلانات", totalProducts: "عدد المنتجات",
    totalLands: "عدد الأراضي", totalVets: "عدد الأطباء", topWilayas: "أكثر الولايات نشاطاً",
    ban: "حظر", noNotifications: "لا توجد إشعارات جديدة", back: "رجوع",
    loginToContinue: "سجّل الدخول للمتابعة", or: "أو", createAccount: "ليس لديك حساب؟ أنشئ واحداً",
    haveAccount: "لديك حساب؟ سجّل الدخول", locationOnMap: "الموقع على الخريطة",
    submitReview: "أضف تقييمك", comment: "تعليقك", reviews: "التقييمات",
  },
  fr: {
    appName: "AgriDZ", tagline: "Plateforme agricole algérienne",
    nav_home: "Accueil", nav_market: "Marché", nav_map: "Carte", nav_messages: "Messages", nav_account: "Compte",
    nav_livestock: "Bétail", nav_land: "Terrains", nav_vets: "Vétérinaires", nav_prices: "Prix", nav_weather: "Météo",
    nav_favorites: "Favoris", nav_notifications: "Notifications", nav_dashboard: "Tableau de bord", nav_admin: "Administration",
    login: "Connexion", register: "Créer un compte", logout: "Déconnexion",
    fullName: "Nom complet", phone: "Téléphone", email: "Email",
    wilaya: "Wilaya", commune: "Commune", password: "Mot de passe", role: "Type de compte",
    role_farmer: "Agriculteur", role_buyer: "Acheteur", role_trader: "Fournisseur", role_vet: "Vétérinaire",
    role_landowner: "Propriétaire", role_admin: "Administrateur",
    searchPlaceholder: "Rechercher un produit, terrain, vétérinaire...", welcome: "Bienvenue sur",
    latest: "Derniers produits", mostViewed: "Les plus vus", nearbyOffers: "Offres près de vous",
    weatherToday: "Météo du jour", pricesToday: "Prix du marché", important: "Notifications importantes",
    addProduct: "Ajouter un produit", addLand: "Ajouter un terrain", productName: "Nom du produit", category: "Catégorie",
    price: "Prix", quantity: "Quantité", unit: "Unité", description: "Description", publish: "Publier",
    filter: "Filtrer", sortAsc: "Prix croissant", sortDesc: "Prix décroissant", all: "Tous",
    contactSeller: "Contacter le vendeur", addFavorite: "Ajouter aux favoris", removeFavorite: "Retirer des favoris",
    rating: "Note", available: "Disponible", unavailable: "Indisponible", area: "Superficie",
    water: "Puits", electricity: "Électricité", road: "Accès route", yes: "Oui", no: "Non",
    call: "Appeler", message: "Message", edit: "Modifier", delete: "Supprimer", save: "Enregistrer",
    myListings: "Mes annonces", myFavorites: "Mes favoris", accountSettings: "Paramètres du compte",
    stats: "Statistiques", users: "Utilisateurs", listings: "Annonces", reports: "Signalements",
    approve: "Approuver", reject: "Rejeter", noResults: "Aucun résultat",
    heroTitle: "Du producteur au consommateur", heroSub: "Achetez et vendez produits, bétail et terrains sans intermédiaires",
    getStarted: "Commencer", skip: "Passer", chooseRole: "Choisissez votre profil",
    veterinarian: "Vétérinaire", specialty: "Spécialité", experience: "Expérience",
    conversations: "Conversations", typeMessage: "Écrire un message...",
    changePrice: "Variation", lastUpdate: "Mise à jour", perUnit: "par unité",
    humidity: "Humidité", wind: "Vent", rainChance: "Pluie", nextDays: "Prochains jours",
    soilType: "Type de sol", ownerInfo: "Infos propriétaire", videoNote: "Vidéo du terrain disponible",
    manageUsers: "Gérer les utilisateurs", manageListings: "Gérer les annonces", manageCategories: "Catégories",
    totalUsers: "Utilisateurs", totalListings: "Annonces", totalProducts: "Produits",
    totalLands: "Terrains", totalVets: "Vétérinaires", topWilayas: "Wilayas actives",
    ban: "Bannir", noNotifications: "Aucune notification", back: "Retour",
    loginToContinue: "Connectez-vous pour continuer", or: "ou", createAccount: "Pas de compte ? Créez-en un",
    haveAccount: "Déjà un compte ? Connectez-vous", locationOnMap: "Localisation",
    submitReview: "Laisser un avis", comment: "Votre commentaire", reviews: "Avis",
  },
  en: {
    appName: "AgriDZ", tagline: "Algeria's agricultural platform",
    nav_home: "Home", nav_market: "Market", nav_map: "Map", nav_messages: "Messages", nav_account: "Account",
    nav_livestock: "Livestock", nav_land: "Land", nav_vets: "Vets", nav_prices: "Prices", nav_weather: "Weather",
    nav_favorites: "Favorites", nav_notifications: "Notifications", nav_dashboard: "Dashboard", nav_admin: "Admin",
    login: "Log in", register: "Create account", logout: "Log out",
    fullName: "Full name", phone: "Phone", email: "Email",
    wilaya: "Wilaya", commune: "Commune", password: "Password", role: "Account type",
    role_farmer: "Farmer", role_buyer: "Buyer", role_trader: "Supplier", role_vet: "Veterinarian",
    role_landowner: "Landowner", role_admin: "Admin",
    searchPlaceholder: "Search product, land, vet...", welcome: "Welcome to",
    latest: "Latest products", mostViewed: "Most viewed", nearbyOffers: "Offers near you",
    weatherToday: "Today's weather", pricesToday: "Today's market prices", important: "Important notifications",
    addProduct: "Add product", addLand: "Add land", productName: "Product name", category: "Category",
    price: "Price", quantity: "Quantity", unit: "Unit", description: "Description", publish: "Publish",
    filter: "Filter", sortAsc: "Price: low to high", sortDesc: "Price: high to low", all: "All",
    contactSeller: "Contact seller", addFavorite: "Add to favorites", removeFavorite: "Remove from favorites",
    rating: "Rating", available: "Available", unavailable: "Unavailable", area: "Area",
    water: "Well", electricity: "Electricity", road: "Road access", yes: "Yes", no: "No",
    call: "Call", message: "Message", edit: "Edit", delete: "Delete", save: "Save",
    myListings: "My listings", myFavorites: "My favorites", accountSettings: "Account settings",
    stats: "Statistics", users: "Users", listings: "Listings", reports: "Reports",
    approve: "Approve", reject: "Reject", noResults: "No matching results",
    heroTitle: "From farmer to consumer, directly", heroSub: "Buy and sell produce, livestock and land with no middlemen",
    getStarted: "Get started", skip: "Skip", chooseRole: "Choose your account type",
    veterinarian: "Veterinarian", specialty: "Specialty", experience: "Experience",
    conversations: "Conversations", typeMessage: "Type a message...",
    changePrice: "Change", lastUpdate: "Updated", perUnit: "per unit",
    humidity: "Humidity", wind: "Wind", rainChance: "Rain chance", nextDays: "Coming days",
    soilType: "Soil type", ownerInfo: "Owner info", videoNote: "Land video available",
    manageUsers: "Manage users", manageListings: "Manage listings", manageCategories: "Categories",
    totalUsers: "Users", totalListings: "Listings", totalProducts: "Products",
    totalLands: "Land plots", totalVets: "Vets", topWilayas: "Top wilayas",
    ban: "Ban", noNotifications: "No new notifications", back: "Back",
    loginToContinue: "Log in to continue", or: "or", createAccount: "No account? Create one",
    haveAccount: "Have an account? Log in", locationOnMap: "Location on map",
    submitReview: "Leave a review", comment: "Your comment", reviews: "Reviews",
  },
};

/* --------------------------------- SEED DATA -------------------------------- */
const WILAYAS = [
  { id: "alg", ar: "الجزائر", fr: "Alger", en: "Algiers", communes: ["باب الوادي", "حسين داي", "بئر مراد رايس", "الدار البيضاء"] },
  { id: "oue", ar: "وهران", fr: "Oran", en: "Oran", communes: ["وهران", "بئر الجير", "السانية", "أرزيو"] },
  { id: "con", ar: "قسنطينة", fr: "Constantine", en: "Constantine", communes: ["قسنطينة", "الخروب", "حامة بوزيان"] },
  { id: "set", ar: "سطيف", fr: "Sétif", en: "Setif", communes: ["سطيف", "العلمة", "عين ولمان"] },
  { id: "bat", ar: "باتنة", fr: "Batna", en: "Batna", communes: ["باتنة", "بريكة", "مروانة"] },
  { id: "bli", ar: "البليدة", fr: "Blida", en: "Blida", communes: ["البليدة", "بوفاريك", "موزاية"] },
  { id: "tiz", ar: "تيزي وزو", fr: "Tizi Ouzou", en: "Tizi Ouzou", communes: ["تيزي وزو", "عزازقة", "الأربعاء ناث إيراثن"] },
  { id: "bej", ar: "بجاية", fr: "Bejaia", en: "Bejaia", communes: ["بجاية", "أقبو", "سيدي عيش"] },
  { id: "ann", ar: "عنابة", fr: "Annaba", en: "Annaba", communes: ["عنابة", "البوني", "برحال"] },
  { id: "oue2", ar: "ورقلة", fr: "Ouargla", en: "Ouargla", communes: ["ورقلة", "حاسي مسعود", "تقرت"] },
  { id: "bis", ar: "بسكرة", fr: "Biskra", en: "Biskra", communes: ["بسكرة", "طولقة", "سيدي عقبة"] },
  { id: "tle", ar: "تلمسان", fr: "Tlemcen", en: "Tlemcen", communes: ["تلمسان", "مغنية", "ندرومة"] },
  { id: "gha", ar: "غرداية", fr: "Ghardaia", en: "Ghardaia", communes: ["غرداية", "متليلي", "المنيعة"] },
  { id: "oeb", ar: "أم البواقي", fr: "Oum El Bouaghi", en: "Oum El Bouaghi", communes: ["أم البواقي", "عين البيضاء", "عين مليلة"] },
];

const CATEGORIES = ["خضر", "فواكه", "حبوب", "تمور", "زيتون", "أعلاف", "أخرى"];
const LIVESTOCK_TYPES = ["أبقار", "أغنام", "ماعز", "دواجن", "أخرى"];
const SUPPLY_CATEGORIES = ["بذور", "أسمدة", "مبيدات", "معدات", "جرارات", "أدوات الري", "أعلاف"];

let uid = 1000;
const nextId = () => uid++;

const seedProducts = [
  { id: nextId(), type: "product", name: "طماطم طازجة", category: "خضر", price: 65, unit: "kg", qty: 500, wilaya: "بسكرة", commune: "طولقة", seller: "أحمد بلحاج", phone: "0555 12 34 56", views: 342, img: "🍅", desc: "طماطم بلدية مروية بالتنقيط، جودة ممتازة." },
  { id: nextId(), type: "product", name: "بطاطا صفراء", category: "خضر", price: 55, unit: "kg", qty: 1200, wilaya: "سطيف", commune: "العلمة", seller: "كريم مزياني", phone: "0661 22 33 44", views: 210, img: "🥔", desc: "بطاطا صنف سبونتا، حجم متوسط إلى كبير." },
  { id: nextId(), type: "product", name: "تمر دقلة نور", category: "تمور", price: 850, unit: "kg", qty: 300, wilaya: "ورقلة", commune: "تقرت", seller: "يوسف بن عمر", phone: "0770 55 66 77", views: 501, img: "🌴", desc: "تمر دقلة نور فاخر من واحات تقرت." },
  { id: nextId(), type: "product", name: "زيت زيتون بكر", category: "زيتون", price: 1400, unit: "unit", qty: 80, wilaya: "بجاية", commune: "أقبو", seller: "مراد حداد", phone: "0550 88 99 00", views: 175, img: "🫒", desc: "زيت زيتون بكر ممتاز، عصرة أولى باردة، 1 لتر." },
  { id: nextId(), type: "product", name: "قمح صلب", category: "حبوب", price: 48, unit: "quintal", qty: 200, wilaya: "سطيف", commune: "سطيف", seller: "فريد شريف", phone: "0666 11 22 33", views: 89, img: "🌾", desc: "قمح صلب موسم جديد، نسبة نقاوة عالية." },
  { id: nextId(), type: "product", name: "برتقال طوروسبا", category: "فواكه", price: 90, unit: "kg", qty: 600, wilaya: "البليدة", commune: "موزاية", seller: "سمير بوزيد", phone: "0540 44 55 66", views: 264, img: "🍊", desc: "برتقال طوروسبا حلو، قطف طازج." },
];

const seedLivestock = [
  { id: nextId(), type: "livestock", name: "بقرة حلوب", kind: "أبقار", age: "3 سنوات", gender: "أنثى", weight: 480, price: 180000, wilaya: "تيزي وزو", commune: "عزازقة", seller: "حميد وارث", phone: "0555 77 88 99", views: 120, img: "🐄", desc: "بقرة حلوب سليمة، إنتاج يومي جيد." },
  { id: nextId(), type: "livestock", name: "خروف تسمين", kind: "أغنام", age: "8 أشهر", gender: "ذكر", weight: 55, price: 42000, wilaya: "باتنة", commune: "بريكة", seller: "عبد الرحمن سعدي", phone: "0661 99 00 11", views: 340, img: "🐑", desc: "خروف عربي، تسمين طبيعي." },
  { id: nextId(), type: "livestock", name: "دجاج بلدي", kind: "دواجن", age: "6 أشهر", gender: "مختلط", weight: 2, price: 1800, wilaya: "قسنطينة", commune: "الخروب", seller: "نبيل حاجي", phone: "0770 33 44 55", views: 98, img: "🐔", desc: "دجاج بلدي حر، تربية تقليدية." },
];

const seedLands = [
  { id: nextId(), type: "land", name: "أرض فلاحية سقوية", area: 3, price: 4500000, wilaya: "بسكرة", commune: "سيدي عقبة", soil: "طينية رملية", water: true, electricity: true, road: true, owner: "الطاهر بن يوسف", phone: "0555 66 77 88", views: 156, img: "🌾", desc: "أرض 3 هكتار قرب الطريق الرئيسي، تربة خصبة، بئر ارتوازي." },
  { id: nextId(), type: "land", name: "أرض للإيجار الموسمي", area: 1.5, price: 900000, wilaya: "البليدة", commune: "بوفاريك", soil: "طينية", water: true, electricity: false, road: true, owner: "رشيد عمراني", phone: "0661 22 88 99", views: 87, img: "🌱", desc: "مناسبة لزراعة الخضر، قريبة من نقطة ماء." },
];

const seedVets = [
  { id: nextId(), type: "vet", name: "د. سليم بوداود", specialty: "طب المواشي الكبيرة", wilaya: "سطيف", commune: "سطيف", phone: "0555 12 00 00", rating: 4.6, reviews: 23, available: true, img: "🩺" },
  { id: nextId(), type: "vet", name: "د. أمينة زروقي", specialty: "الدواجن والأرانب", wilaya: "الجزائر", commune: "حسين داي", phone: "0661 45 00 00", rating: 4.9, reviews: 41, available: true, img: "🩺" },
  { id: nextId(), type: "vet", name: "د. كمال إيدير", specialty: "الأغنام والماعز", wilaya: "تيزي وزو", commune: "عزازقة", phone: "0770 90 00 00", rating: 4.3, reviews: 12, available: false, img: "🩺" },
];

const seedPrices = [
  { name: "بطاطا", price: 55, unit: "kg", wilaya: "سطيف", updated: "اليوم", change: -3 },
  { name: "طماطم", price: 65, unit: "kg", wilaya: "بسكرة", updated: "اليوم", change: 5 },
  { name: "بصل", price: 40, unit: "kg", wilaya: "المسيلة", updated: "أمس", change: 0 },
  { name: "زيتون", price: 220, unit: "kg", wilaya: "بجاية", updated: "اليوم", change: 8 },
  { name: "تمر", price: 850, unit: "kg", wilaya: "ورقلة", updated: "اليوم", change: 2 },
  { name: "فواكه", price: 90, unit: "kg", wilaya: "البليدة", updated: "أمس", change: -1 },
  { name: "خضر", price: 58, unit: "kg", wilaya: "الجزائر", updated: "اليوم", change: 4 },
  { name: "حبوب", price: 48, unit: "quintal", wilaya: "سطيف", updated: "قبل يومين", change: 0 },
  { name: "مواشي (خروف)", price: 42000, unit: "unit", wilaya: "باتنة", updated: "اليوم", change: 1500 },
];

const seedNotifications = [
  { id: 1, text: "رسالة جديدة من كريم مزياني", time: "قبل 10 د", read: false },
  { id: 2, text: "تغيّر سعر الطماطم في بسكرة", time: "قبل ساعة", read: false },
  { id: 3, text: "إعلان جديد قريب منك: أرض فلاحية في البليدة", time: "قبل 3 ساعات", read: true },
  { id: 4, text: "تنبيه جوي: احتمال أمطار غداً في سطيف", time: "أمس", read: true },
];

const seedConversations = [
  { id: 1, name: "أحمد بلحاج", last: "المنتج متوفر، تقدر تجي تشوفو", time: "10:24", online: true },
  { id: 2, name: "د. أمينة زروقي", last: "شكراً، نراكم غدا إن شاء الله", time: "أمس", online: false },
];

/* --------------------------------- HELPERS ---------------------------------- */
function fmt(n) { return new Intl.NumberFormat("fr-DZ").format(n); }

function Badge({ children, tone = "primary" }) {
  const bg = tone === "primary" ? C.primarySoft : tone === "wheat" ? C.wheatSoft : "#F3E3DF";
  const fg = tone === "primary" ? C.primary : tone === "wheat" ? C.soil : C.danger;
  return (
    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: bg, color: fg }}>
      {children}
    </span>
  );
}

function IconBtn({ icon: Icon, onClick, active }) {
  return (
    <button onClick={onClick} className="p-2 rounded-full transition-colors"
      style={{ backgroundColor: active ? C.primarySoft : "transparent", color: active ? C.primary : C.textMuted }}>
      <Icon size={20} />
    </button>
  );
}

function StarRow({ value }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} fill={i <= Math.round(value) ? C.wheat : "none"} color={C.wheat} />
      ))}
    </div>
  );
}

/* ==================================== APP ==================================== */
export default function App() {
  const [lang, setLang] = useState("ar");
  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = T[lang];

  const [booted, setBooted] = useState(false);
  const [authView, setAuthView] = useState("login");
  const [user, setUser] = useState(null);

  const [view, setView] = useState("home");
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenu, setLangMenu] = useState(false);

  const [products, setProducts] = useState(seedProducts);
  const [livestock] = useState(seedLivestock);
  const [lands, setLands] = useState(seedLands);
  const [vets] = useState(seedVets);
  const [notifications, setNotifications] = useState(seedNotifications);
  const [favorites, setFavorites] = useState([]);

  const [query, setQuery] = useState("");
  const [filterWilaya, setFilterWilaya] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortDir, setSortDir] = useState("");

  const toggleFav = (id) => setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const goto = (v, item = null) => { setView(v); setSelected(item); setMenuOpen(false); window.scrollTo?.(0, 0); };

  /* ---------- filtering ---------- */
  const filteredProducts = useMemo(() => {
    let list = products.filter((p) =>
      (!query || p.name.includes(query) || p.category.includes(query)) &&
      (!filterWilaya || p.wilaya === filterWilaya) &&
      (!filterCategory || p.category === filterCategory)
    );
    if (sortDir === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortDir === "desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, query, filterWilaya, filterCategory, sortDir]);

  const filteredLands = useMemo(() => lands.filter((l) => !filterWilaya || l.wilaya === filterWilaya), [lands, filterWilaya]);
  const filteredVets = useMemo(() => vets.filter((v) => !filterWilaya || v.wilaya === filterWilaya), [vets, filterWilaya]);

  /* ---------- splash ---------- */
  if (!booted) return <Splash t={t} lang={lang} setLang={setLang} onStart={() => setBooted(true)} />;

  /* ---------- auth ---------- */
  if (!user) {
    return (
      <div dir={dir} style={{ fontFamily: "Tajawal, sans-serif" }}>
        <FontImport />
        {authView === "login" ? (
          <LoginPage t={t} lang={lang}
            onLogin={(name, role) => { setUser({ name: name || "مستخدم AgriDZ", role, phone: "0555 00 00 00" }); goto("home"); }}
            onSwitch={() => setAuthView("register")} />
        ) : (
          <RegisterPage t={t} lang={lang}
            onRegister={(u) => { setUser(u); goto("home"); }}
            onSwitch={() => setAuthView("login")} />
        )}
      </div>
    );
  }

  /* ---------- main shell ---------- */
  const navItems = [
    { key: "home", label: t.nav_home, icon: Home },
    { key: "market", label: t.nav_market, icon: ShoppingBag },
    { key: "map", label: t.nav_map, icon: MapIcon },
    { key: "messages", label: t.nav_messages, icon: MessageCircle },
    { key: "profile", label: t.nav_account, icon: User },
  ];
  const sideItems = [
    { key: "home", label: t.nav_home, icon: Home },
    { key: "market", label: t.nav_market, icon: ShoppingBag },
    { key: "livestock", label: t.nav_livestock, icon: Sprout },
    { key: "land", label: t.nav_land, icon: Landmark },
    { key: "vets", label: t.nav_vets, icon: Stethoscope },
    { key: "prices", label: t.nav_prices, icon: TrendingUp },
    { key: "weather", label: t.nav_weather, icon: Sun },
    { key: "map", label: t.nav_map, icon: MapIcon },
    { key: "messages", label: t.nav_messages, icon: MessageCircle },
    { key: "favorites", label: t.nav_favorites, icon: Heart },
    { key: "notifications", label: t.nav_notifications, icon: Bell },
    { key: "profile", label: t.nav_dashboard, icon: User },
    ...(user.role === "admin" ? [{ key: "admin", label: t.nav_admin, icon: Shield }] : []),
  ];

  return (
    <div dir={dir} style={{ backgroundColor: C.bg, color: C.text, fontFamily: "Tajawal, sans-serif", minHeight: "100vh" }}>
      <FontImport />
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b" style={{ backgroundColor: C.surface, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => goto("home")}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: C.primary }}>🌿</div>
            <div>
              <div className="font-bold leading-none" style={{ color: C.primaryDark }}>{t.appName}</div>
              <div className="text-[11px]" style={{ color: C.textMuted }}>{t.tagline}</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 flex-1 max-w-md mx-6">
            <div className="flex items-center gap-2 w-full px-3 py-2 rounded-full border" style={{ borderColor: C.border }}>
              <Search size={16} color={C.textMuted} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder}
                className="flex-1 outline-none text-sm bg-transparent" />
            </div>
          </div>
          <div className="flex items-center gap-1 relative">
            <IconBtn icon={Bell} onClick={() => goto("notifications")} active={view === "notifications"} />
            <IconBtn icon={Heart} onClick={() => goto("favorites")} active={view === "favorites"} />
            <button onClick={() => setLangMenu((o) => !o)} className="p-2 rounded-full flex items-center gap-1 text-xs font-semibold" style={{ color: C.textMuted }}>
              <Globe size={18} />{lang.toUpperCase()}
            </button>
            {langMenu && (
              <div className="absolute top-11 end-0 bg-white shadow-lg rounded-xl border overflow-hidden" style={{ borderColor: C.border }}>
                {["ar", "fr", "en"].map((l) => (
                  <button key={l} onClick={() => { setLang(l); setLangMenu(false); }}
                    className="block w-full px-4 py-2 text-sm text-start hover:bg-gray-50"
                    style={{ color: lang === l ? C.primary : C.text, fontWeight: lang === l ? 700 : 400 }}>
                    {l === "ar" ? "العربية" : l === "fr" ? "Français" : "English"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex">
        {/* Desktop sidebar */}
        <div className="hidden md:block w-56 shrink-0 border-e p-3 sticky top-[65px] self-start" style={{ borderColor: C.border, height: "calc(100vh - 65px)" }}>
          <div className="flex items-center gap-3 px-2 py-3 mb-2 rounded-xl" style={{ backgroundColor: C.primarySoft }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: C.primary }}>
              {user.name?.[0] || "U"}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{user.name}</div>
              <div className="text-[11px]" style={{ color: C.textMuted }}>{t["role_" + user.role] || user.role}</div>
            </div>
          </div>
          {sideItems.map((it) => (
            <button key={it.key} onClick={() => goto(it.key)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm mb-1 transition-colors"
              style={{ backgroundColor: view === it.key ? C.primarySoft : "transparent", color: view === it.key ? C.primary : C.text, fontWeight: view === it.key ? 700 : 500 }}>
              <it.icon size={18} /> {it.label}
            </button>
          ))}
          <button onClick={() => setUser(null)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm mt-4" style={{ color: C.danger }}>
            <LogOut size={18} /> {t.logout}
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 pb-24 md:pb-8 px-4 pt-4">
          {view === "home" && (
            <HomePage t={t} lang={lang} products={products} lands={lands} vets={vets}
              favorites={favorites} toggleFav={toggleFav} goto={goto} query={query} setQuery={setQuery} />
          )}
          {view === "market" && (
            <MarketPage t={t} products={filteredProducts} favorites={favorites} toggleFav={toggleFav}
              wilayas={WILAYAS} lang={lang} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya}
              filterCategory={filterCategory} setFilterCategory={setFilterCategory} sortDir={sortDir} setSortDir={setSortDir}
              goto={goto} />
          )}
          {view === "addProduct" && (
            <AddProductForm t={t} wilayas={WILAYAS} lang={lang} user={user}
              onSubmit={(p) => { setProducts((ps) => [{ ...p, id: nextId(), type: "product", views: 0 }, ...ps]); goto("market"); }} />
          )}
          {view === "productDetail" && selected && (
            <DetailPage t={t} item={selected} kind="product" favorites={favorites} toggleFav={toggleFav} goto={goto} />
          )}
          {view === "livestock" && (
            <LivestockPage t={t} livestock={livestock} favorites={favorites} toggleFav={toggleFav} goto={goto} />
          )}
          {view === "land" && (
            <LandPage t={t} lands={filteredLands} favorites={favorites} toggleFav={toggleFav} goto={goto}
              wilayas={WILAYAS} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya} lang={lang} />
          )}
          {view === "addLand" && (
            <AddLandForm t={t} wilayas={WILAYAS} lang={lang}
              onSubmit={(l) => { setLands((ls) => [{ ...l, id: nextId(), type: "land", views: 0 }, ...ls]); goto("land"); }} />
          )}
          {view === "landDetail" && selected && (
            <DetailPage t={t} item={selected} kind="land" favorites={favorites} toggleFav={toggleFav} goto={goto} />
          )}
          {view === "vets" && (
            <VetsPage t={t} vets={filteredVets} favorites={favorites} toggleFav={toggleFav} goto={goto}
              wilayas={WILAYAS} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya} lang={lang} />
          )}
          {view === "vetDetail" && selected && (
            <VetDetail t={t} vet={selected} favorites={favorites} toggleFav={toggleFav} goto={goto} />
          )}
          {view === "map" && <MapPage t={t} products={products} lands={lands} vets={vets} lang={lang} />}
          {view === "prices" && <PricesPage t={t} />}
          {view === "weather" && <WeatherPage t={t} wilayas={WILAYAS} lang={lang} />}
          {view === "messages" && <MessagesPage t={t} lang={lang} />}
          {view === "favorites" && (
            <FavoritesPage t={t} favorites={favorites} products={products} lands={lands} vets={vets} livestock={livestock}
              toggleFav={toggleFav} goto={goto} />
          )}
          {view === "notifications" && (
            <NotificationsPage t={t} notifications={notifications}
              onRead={(id) => setNotifications((ns) => ns.map((n) => (n.id === id ? { ...n, read: true } : n)))} />
          )}
          {view === "profile" && (
            <ProfilePage t={t} user={user} products={products} lands={lands} goto={goto} onLogout={() => setUser(null)} />
          )}
          {view === "admin" && user.role === "admin" && (
            <AdminPage t={t} products={products} lands={lands} vets={vets} setProducts={setProducts} setLands={setLands} />
          )}
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t flex justify-around py-2" style={{ backgroundColor: C.surface, borderColor: C.border }}>
        {navItems.map((it) => (
          <button key={it.key} onClick={() => goto(it.key)} className="flex flex-col items-center gap-0.5 px-2 py-1"
            style={{ color: view === it.key ? C.primary : C.textMuted }}>
            <it.icon size={22} />
            <span className="text-[10px] font-medium">{it.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile search + quick section chips */}
      <div className="md:hidden px-4 mb-3">
        <div className="flex items-center gap-2 w-full px-3 py-2 rounded-full border bg-white" style={{ borderColor: C.border }}>
          <Search size={16} color={C.textMuted} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder}
            className="flex-1 outline-none text-sm bg-transparent" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- FONT IMPORT -------------------------------- */
function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');
      * { font-family: 'Tajawal', sans-serif; }
    `}</style>
  );
}

/* ---------------------------------- SPLASH ---------------------------------- */
function Splash({ t, lang, setLang, onStart }) {
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir} className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: C.primary, color: "#fff", fontFamily: "Tajawal, sans-serif" }}>
      <FontImport />
      <div className="text-6xl mb-4">🌿</div>
      <div className="text-3xl font-black mb-2">{t.appName}</div>
      <div className="opacity-90 mb-10">{t.tagline}</div>
      <div className="max-w-xs">
        <div className="text-xl font-bold mb-2">{t.heroTitle}</div>
        <p className="opacity-90 text-sm mb-8">{t.heroSub}</p>
      </div>
      <button onClick={onStart} className="px-8 py-3 rounded-full font-bold text-lg" style={{ backgroundColor: "#fff", color: C.primary }}>
        {t.getStarted}
      </button>
      <div className="flex gap-3 mt-8">
        {["ar", "fr", "en"].map((l) => (
          <button key={l} onClick={() => setLang(l)} className="text-sm px-3 py-1 rounded-full"
            style={{ backgroundColor: lang === l ? "#fff" : "transparent", color: lang === l ? C.primary : "#fff", border: "1px solid rgba(255,255,255,.5)" }}>
            {l === "ar" ? "العربية" : l === "fr" ? "Français" : "English"}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------- AUTH ------------------------------------ */
function AuthShell({ t, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: C.bg }}>
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: C.border }}>
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: C.primary }}>🌿</div>
          <div className="font-black text-lg" style={{ color: C.primaryDark }}>{t.appName}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

function LoginPage({ t, onLogin, onSwitch }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("farmer");
  return (
    <AuthShell t={t}>
      <div className="text-center font-bold mb-4">{t.loginToContinue}</div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.fullName}
        className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }} />
      <input type="password" placeholder={t.password} className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }} />
      <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border mb-4 text-sm" style={{ borderColor: C.border }}>
        {["farmer", "buyer", "trader", "vet", "landowner", "admin"].map((r) => (
          <option key={r} value={r}>{t["role_" + r]}</option>
        ))}
      </select>
      <button onClick={() => onLogin(name, role)} className="w-full py-3 rounded-xl font-bold text-white" style={{ backgroundColor: C.primary }}>
        {t.login}
      </button>
      <button onClick={onSwitch} className="w-full text-center text-sm mt-4" style={{ color: C.primary }}>{t.createAccount}</button>
    </AuthShell>
  );
}

function RegisterPage({ t, wilayas, onRegister, onSwitch }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", wilaya: WILAYAS[0].id, role: "farmer", password: "" });
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  return (
    <AuthShell t={t}>
      <div className="text-center font-bold mb-4">{t.chooseRole}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {["farmer", "buyer", "trader", "vet", "landowner", "admin"].map((r) => (
          <button key={r} onClick={() => setForm((f) => ({ ...f, role: r }))}
            className="text-xs px-2 py-2 rounded-xl border font-medium"
            style={{ borderColor: form.role === r ? C.primary : C.border, backgroundColor: form.role === r ? C.primarySoft : "transparent", color: form.role === r ? C.primary : C.text }}>
            {t["role_" + r]}
          </button>
        ))}
      </div>
      <input value={form.name} onChange={upd("name")} placeholder={t.fullName} className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }} />
      <input value={form.phone} onChange={upd("phone")} placeholder={t.phone} className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }} />
      <input value={form.email} onChange={upd("email")} placeholder={t.email} className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }} />
      <select value={form.wilaya} onChange={upd("wilaya")} className="w-full px-4 py-2.5 rounded-xl border mb-3 text-sm" style={{ borderColor: C.border }}>
        {WILAYAS.map((w) => <option key={w.id} value={w.id}>{w.ar}</option>)}
      </select>
      <input type="password" value={form.password} onChange={upd("password")} placeholder={t.password} className="w-full px-4 py-2.5 rounded-xl border mb-4 text-sm" style={{ borderColor: C.border }} />
      <button onClick={() => onRegister({ name: form.name || t.appName, role: form.role, phone: form.phone })}
        className="w-full py-3 rounded-xl font-bold text-white" style={{ backgroundColor: C.primary }}>
        {t.register}
      </button>
      <button onClick={onSwitch} className="w-full text-center text-sm mt-4" style={{ color: C.primary }}>{t.haveAccount}</button>
    </AuthShell>
  );
}

/* ---------------------------------- CARDS ------------------------------------ */
function ProductCard({ p, t, isFav, onFav, onOpen }) {
  return (
    <div className="rounded-2xl border bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: C.border }} onClick={onOpen}>
      <div className="h-28 flex items-center justify-center text-5xl" style={{ backgroundColor: C.primarySoft }}>{p.img}</div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="font-bold text-sm truncate">{p.name}</div>
          <button onClick={(e) => { e.stopPropagation(); onFav(p.id); }}>
            <Heart size={18} fill={isFav ? C.danger : "none"} color={isFav ? C.danger : C.textMuted} />
          </button>
        </div>
        <div className="flex items-center gap-1 text-xs mt-1" style={{ color: C.textMuted }}>
          <MapPin size={12} /> {p.wilaya}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="font-black" style={{ color: C.primary }}>{fmt(p.price)} <span className="text-xs font-normal">دج/{p.unit}</span></div>
          <Badge>{p.category}</Badge>
        </div>
      </div>
    </div>
  );
}

function LandCard({ l, t, isFav, onFav, onOpen }) {
  return (
    <div className="rounded-2xl border bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: C.border }} onClick={onOpen}>
      <div className="h-28 flex items-center justify-center text-5xl" style={{ backgroundColor: C.wheatSoft }}>{l.img}</div>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="font-bold text-sm truncate">{l.name}</div>
          <button onClick={(e) => { e.stopPropagation(); onFav(l.id); }}>
            <Heart size={18} fill={isFav ? C.danger : "none"} color={isFav ? C.danger : C.textMuted} />
          </button>
        </div>
        <div className="flex items-center gap-1 text-xs mt-1" style={{ color: C.textMuted }}>
          <MapPin size={12} /> {l.wilaya} · {l.area} هكتار
        </div>
        <div className="font-black mt-2" style={{ color: C.soil }}>{fmt(l.price)} دج</div>
      </div>
    </div>
  );
}

function VetCard({ v, t, isFav, onFav, onOpen }) {
  return (
    <div className="rounded-2xl border bg-white p-3 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: C.border }} onClick={onOpen}>
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: C.primarySoft }}>{v.img}</div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm truncate">{v.name}</div>
        <div className="text-xs" style={{ color: C.textMuted }}>{v.specialty}</div>
        <div className="flex items-center gap-2 mt-1">
          <StarRow value={v.rating} />
          <span className="text-xs" style={{ color: C.textMuted }}>({v.reviews})</span>
          <Badge tone={v.available ? "primary" : "danger"}>{v.available ? t.available : t.unavailable}</Badge>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onFav(v.id); }}>
        <Heart size={18} fill={isFav ? C.danger : "none"} color={isFav ? C.danger : C.textMuted} />
      </button>
    </div>
  );
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div className="flex items-center justify-between mb-3 mt-6">
      <div className="font-bold text-lg">{title}</div>
      {action && <button onClick={onAction} className="text-sm font-semibold" style={{ color: C.primary }}>{action}</button>}
    </div>
  );
}

/* ---------------------------------- HOME ------------------------------------- */
function HomePage({ t, products, lands, vets, favorites, toggleFav, goto, query, setQuery }) {
  return (
    <div>
      <div className="rounded-2xl p-6 mb-4 text-white relative overflow-hidden" style={{ backgroundColor: C.primary }}>
        <div className="text-xl font-black mb-1">{t.heroTitle}</div>
        <div className="text-sm opacity-90 mb-4 max-w-md">{t.heroSub}</div>
        <button onClick={() => goto("addProduct")} className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: "#fff", color: C.primary }}>
          + {t.addProduct}
        </button>
        <div className="absolute -bottom-4 -end-4 text-8xl opacity-20">🌾</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
        {[
          { key: "market", icon: ShoppingBag, label: t.nav_market },
          { key: "livestock", icon: Sprout, label: t.nav_livestock },
          { key: "land", icon: Landmark, label: t.nav_land },
          { key: "vets", icon: Stethoscope, label: t.nav_vets },
        ].map((it) => (
          <button key={it.key} onClick={() => goto(it.key)} className="flex flex-col items-center gap-1 py-3 rounded-xl border bg-white" style={{ borderColor: C.border }}>
            <it.icon size={20} color={C.primary} />
            <span className="text-xs font-medium">{it.label}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 mt-4">
        <div className="rounded-2xl p-4 border bg-white" style={{ borderColor: C.border }}>
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-sm flex items-center gap-2"><Sun size={16} color={C.wheat} /> {t.weatherToday}</div>
            <button onClick={() => goto("weather")} className="text-xs" style={{ color: C.primary }}>{t.nav_weather}</button>
          </div>
          <div className="text-3xl font-black">24°</div>
          <div className="text-xs" style={{ color: C.textMuted }}>سطيف · رطوبة 45% · رياح 12 كم/س</div>
        </div>
        <div className="rounded-2xl p-4 border bg-white" style={{ borderColor: C.border }}>
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-sm flex items-center gap-2"><TrendingUp size={16} color={C.primary} /> {t.pricesToday}</div>
            <button onClick={() => goto("prices")} className="text-xs" style={{ color: C.primary }}>{t.nav_prices}</button>
          </div>
          {seedPrices.slice(0, 2).map((p) => (
            <div key={p.name} className="flex items-center justify-between text-sm py-1">
              <span>{p.name}</span>
              <span className="font-semibold">{fmt(p.price)} دج/{p.unit}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionHeader title={t.latest} action={t.nav_market} onAction={() => goto("market")} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} p={p} t={t} isFav={favorites.includes(p.id)} onFav={toggleFav} onOpen={() => goto("productDetail", p)} />
        ))}
      </div>

      <SectionHeader title={t.nearbyOffers} action={t.nav_land} onAction={() => goto("land")} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {lands.slice(0, 4).map((l) => (
          <LandCard key={l.id} l={l} t={t} isFav={favorites.includes(l.id)} onFav={toggleFav} onOpen={() => goto("landDetail", l)} />
        ))}
      </div>

      <SectionHeader title={t.nav_vets} action={t.nav_vets} onAction={() => goto("vets")} />
      <div className="grid md:grid-cols-2 gap-3">
        {vets.slice(0, 2).map((v) => (
          <VetCard key={v.id} v={v} t={t} isFav={favorites.includes(v.id)} onFav={toggleFav} onOpen={() => goto("vetDetail", v)} />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- MARKET ------------------------------------- */
function FilterBar({ t, wilayas, filterWilaya, setFilterWilaya, filterCategory, setFilterCategory, categories, sortDir, setSortDir }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 -mx-1 px-1">
      <select value={filterWilaya} onChange={(e) => setFilterWilaya(e.target.value)} className="text-sm px-3 py-2 rounded-full border shrink-0" style={{ borderColor: C.border }}>
        <option value="">{t.wilaya}: {t.all}</option>
        {wilayas.map((w) => <option key={w.id} value={w.ar}>{w.ar}</option>)}
      </select>
      {categories && (
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="text-sm px-3 py-2 rounded-full border shrink-0" style={{ borderColor: C.border }}>
          <option value="">{t.category}: {t.all}</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      )}
      {setSortDir && (
        <select value={sortDir} onChange={(e) => setSortDir(e.target.value)} className="text-sm px-3 py-2 rounded-full border shrink-0" style={{ borderColor: C.border }}>
          <option value="">{t.filter}</option>
          <option value="asc">{t.sortAsc}</option>
          <option value="desc">{t.sortDesc}</option>
        </select>
      )}
    </div>
  );
}

function MarketPage({ t, products, favorites, toggleFav, wilayas, filterWilaya, setFilterWilaya, filterCategory, setFilterCategory, sortDir, setSortDir, goto }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-lg">{t.nav_market}</div>
        <button onClick={() => goto("addProduct")} className="flex items-center gap-1 text-sm font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: C.primary }}>
          <Plus size={16} /> {t.addProduct}
        </button>
      </div>
      <FilterBar t={t} wilayas={wilayas} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya}
        filterCategory={filterCategory} setFilterCategory={setFilterCategory} categories={CATEGORIES}
        sortDir={sortDir} setSortDir={setSortDir} />
      {products.length === 0 ? <EmptyState t={t} /> : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} t={t} isFav={favorites.includes(p.id)} onFav={toggleFav} onOpen={() => goto("productDetail", p)} />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ t }) {
  return <div className="text-center py-16" style={{ color: C.textMuted }}>{t.noResults}</div>;
}

function AddProductForm({ t, wilayas, onSubmit }) {
  const [f, setF] = useState({ name: "", category: CATEGORIES[0], price: "", qty: "", unit: "kg", wilaya: wilayas[0].ar, commune: "", desc: "", phone: "" });
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const wil = wilayas.find((w) => w.ar === f.wilaya) || wilayas[0];
  return (
    <div className="max-w-lg">
      <div className="font-bold text-lg mb-4">{t.addProduct}</div>
      <div className="space-y-3 bg-white p-4 rounded-2xl border" style={{ borderColor: C.border }}>
        <input value={f.name} onChange={upd("name")} placeholder={t.productName} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <select value={f.category} onChange={upd("category")} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }}>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="grid grid-cols-3 gap-2">
          <input value={f.price} onChange={upd("price")} placeholder={t.price} type="number" className="px-3 py-2.5 rounded-xl border text-sm col-span-1" style={{ borderColor: C.border }} />
          <input value={f.qty} onChange={upd("qty")} placeholder={t.quantity} type="number" className="px-3 py-2.5 rounded-xl border text-sm col-span-1" style={{ borderColor: C.border }} />
          <select value={f.unit} onChange={upd("unit")} className="px-2 py-2.5 rounded-xl border text-sm col-span-1" style={{ borderColor: C.border }}>
            {["kg", "quintal", "ton", "unit"].map((u) => <option key={u}>{u}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <select value={f.wilaya} onChange={upd("wilaya")} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }}>
            {wilayas.map((w) => <option key={w.id} value={w.ar}>{w.ar}</option>)}
          </select>
          <select value={f.commune} onChange={upd("commune")} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }}>
            <option value="">{t.commune}</option>
            {wil.communes.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <input value={f.phone} onChange={upd("phone")} placeholder={t.phone} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <textarea value={f.desc} onChange={upd("desc")} placeholder={t.description} rows={3} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <button
          onClick={() => f.name && onSubmit({ ...f, price: Number(f.price) || 0, qty: Number(f.qty) || 0, seller: "أنت", img: "🌾" })}
          className="w-full py-3 rounded-xl font-bold text-white" style={{ backgroundColor: C.primary }}>
          {t.publish}
        </button>
      </div>
    </div>
  );
}

/* -------------------------------- LIVESTOCK ------------------------------------ */
function LivestockPage({ t, livestock, favorites, toggleFav, goto }) {
  const [kind, setKind] = useState("");
  const list = livestock.filter((l) => !kind || l.kind === kind);
  return (
    <div>
      <div className="font-bold text-lg mb-3">{t.nav_livestock}</div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
        <button onClick={() => setKind("")} className="text-sm px-3 py-1.5 rounded-full border shrink-0"
          style={{ borderColor: C.border, backgroundColor: kind === "" ? C.primarySoft : "transparent", color: kind === "" ? C.primary : C.text }}>{t.all}</button>
        {LIVESTOCK_TYPES.map((k) => (
          <button key={k} onClick={() => setKind(k)} className="text-sm px-3 py-1.5 rounded-full border shrink-0"
            style={{ borderColor: C.border, backgroundColor: kind === k ? C.primarySoft : "transparent", color: kind === k ? C.primary : C.text }}>{k}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {list.map((l) => (
          <div key={l.id} className="rounded-2xl border bg-white overflow-hidden cursor-pointer hover:shadow-md" style={{ borderColor: C.border }}>
            <div className="h-28 flex items-center justify-center text-5xl" style={{ backgroundColor: C.primarySoft }}>{l.img}</div>
            <div className="p-3">
              <div className="flex items-start justify-between">
                <div className="font-bold text-sm">{l.name}</div>
                <button onClick={() => toggleFav(l.id)}>
                  <Heart size={18} fill={favorites.includes(l.id) ? C.danger : "none"} color={favorites.includes(l.id) ? C.danger : C.textMuted} />
                </button>
              </div>
              <div className="text-xs mt-1" style={{ color: C.textMuted }}>{l.age} · {l.gender} · {l.weight} kg</div>
              <div className="flex items-center gap-1 text-xs mt-1" style={{ color: C.textMuted }}><MapPin size={12} /> {l.wilaya}</div>
              <div className="font-black mt-2" style={{ color: C.primary }}>{fmt(l.price)} دج</div>
              <div className="text-xs mt-1 flex items-center gap-1" style={{ color: C.textMuted }}><Phone size={12} /> {l.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------- LAND -------------------------------------- */
function LandPage({ t, lands, favorites, toggleFav, goto, wilayas, filterWilaya, setFilterWilaya }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-lg">{t.nav_land}</div>
        <button onClick={() => goto("addLand")} className="flex items-center gap-1 text-sm font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: C.primary }}>
          <Plus size={16} /> {t.addLand}
        </button>
      </div>
      <FilterBar t={t} wilayas={wilayas} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya} />
      {lands.length === 0 ? <EmptyState t={t} /> : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {lands.map((l) => (
            <LandCard key={l.id} l={l} t={t} isFav={favorites.includes(l.id)} onFav={toggleFav} onOpen={() => goto("landDetail", l)} />
          ))}
        </div>
      )}
    </div>
  );
}

function AddLandForm({ t, wilayas, onSubmit }) {
  const [f, setF] = useState({ name: "", area: "", price: "", wilaya: wilayas[0].ar, commune: "", soil: "", water: false, electricity: false, road: false, desc: "", phone: "" });
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  const wil = wilayas.find((w) => w.ar === f.wilaya) || wilayas[0];
  return (
    <div className="max-w-lg">
      <div className="font-bold text-lg mb-4">{t.addLand}</div>
      <div className="space-y-3 bg-white p-4 rounded-2xl border" style={{ borderColor: C.border }}>
        <input value={f.name} onChange={upd("name")} placeholder={t.productName} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <div className="grid grid-cols-2 gap-2">
          <input value={f.area} onChange={upd("area")} type="number" placeholder={t.area + " (هكتار)"} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
          <input value={f.price} onChange={upd("price")} type="number" placeholder={t.price} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <select value={f.wilaya} onChange={upd("wilaya")} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }}>
            {wilayas.map((w) => <option key={w.id} value={w.ar}>{w.ar}</option>)}
          </select>
          <select value={f.commune} onChange={upd("commune")} className="px-3 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }}>
            <option value="">{t.commune}</option>
            {wil.communes.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <input value={f.soil} onChange={upd("soil")} placeholder={t.soilType} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <div className="flex gap-4 text-sm py-1">
          {["water", "electricity", "road"].map((k) => (
            <label key={k} className="flex items-center gap-2">
              <input type="checkbox" checked={f[k]} onChange={(e) => setF((s) => ({ ...s, [k]: e.target.checked }))} />
              {t[k]}
            </label>
          ))}
        </div>
        <input value={f.phone} onChange={upd("phone")} placeholder={t.phone} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <textarea value={f.desc} onChange={upd("desc")} placeholder={t.description} rows={3} className="w-full px-4 py-2.5 rounded-xl border text-sm" style={{ borderColor: C.border }} />
        <div className="text-xs flex items-center gap-1" style={{ color: C.textMuted }}><Plus size={12} /> {t.videoNote}</div>
        <button
          onClick={() => f.name && onSubmit({ ...f, area: Number(f.area) || 0, price: Number(f.price) || 0, owner: "أنت", img: "🌱" })}
          className="w-full py-3 rounded-xl font-bold text-white" style={{ backgroundColor: C.primary }}>
          {t.publish}
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------- VETS --------------------------------------- */
function VetsPage({ t, vets, favorites, toggleFav, goto, wilayas, filterWilaya, setFilterWilaya }) {
  return (
    <div>
      <div className="font-bold text-lg mb-3">{t.nav_vets}</div>
      <FilterBar t={t} wilayas={wilayas} filterWilaya={filterWilaya} setFilterWilaya={setFilterWilaya} />
      <div className="grid md:grid-cols-2 gap-3">
        {vets.map((v) => (
          <VetCard key={v.id} v={v} t={t} isFav={favorites.includes(v.id)} onFav={toggleFav} onOpen={() => goto("vetDetail", v)} />
        ))}
      </div>
    </div>
  );
}

function VetDetail({ t, vet, favorites, toggleFav, goto }) {
  return (
    <div className="max-w-lg">
      <button onClick={() => goto("vets")} className="flex items-center gap-1 text-sm mb-3" style={{ color: C.primary }}>
        <ArrowRight size={16} className="rtl:inline hidden" /><ArrowLeft size={16} className="ltr:inline hidden" /> {t.back}
      </button>
      <div className="bg-white rounded-2xl border p-5" style={{ borderColor: C.border }}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ backgroundColor: C.primarySoft }}>{vet.img}</div>
          <div>
            <div className="font-bold text-lg">{vet.name}</div>
            <div className="text-sm" style={{ color: C.textMuted }}>{vet.specialty}</div>
            <div className="flex items-center gap-2 mt-1"><StarRow value={vet.rating} /><span className="text-xs" style={{ color: C.textMuted }}>({vet.reviews} {t.reviews})</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
          <div className="flex items-center gap-1" style={{ color: C.textMuted }}><MapPin size={14} /> {vet.wilaya} - {vet.commune}</div>
          <Badge tone={vet.available ? "primary" : "danger"}>{vet.available ? t.available : t.unavailable}</Badge>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2.5 rounded-xl font-bold text-white flex items-center justify-center gap-2" style={{ backgroundColor: C.primary }}><Phone size={16} /> {t.call}</button>
          <button className="flex-1 py-2.5 rounded-xl font-bold border flex items-center justify-center gap-2" style={{ borderColor: C.border }}><MessageCircle size={16} /> {t.message}</button>
          <button onClick={() => toggleFav(vet.id)} className="px-4 py-2.5 rounded-xl border">
            <Heart size={18} fill={favorites.includes(vet.id) ? C.danger : "none"} color={C.danger} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- DETAIL -------------------------------------- */
function DetailPage({ t, item, kind, favorites, toggleFav, goto }) {
  return (
    <div className="max-w-2xl">
      <button onClick={() => goto(kind === "land" ? "land" : "market")} className="flex items-center gap-1 text-sm mb-3" style={{ color: C.primary }}>
        {t.back}
      </button>
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: C.border }}>
        <div className="h-48 flex items-center justify-center text-8xl" style={{ backgroundColor: kind === "land" ? C.wheatSoft : C.primarySoft }}>{item.img}</div>
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div className="font-black text-xl">{item.name}</div>
            <button onClick={() => toggleFav(item.id)}>
              <Heart size={22} fill={favorites.includes(item.id) ? C.danger : "none"} color={C.danger} />
            </button>
          </div>
          <div className="font-black text-2xl mt-2" style={{ color: C.primary }}>
            {fmt(item.price)} دج {item.unit ? <span className="text-sm font-normal">/{item.unit}</span> : ""}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge><MapPin size={12} className="inline me-1" />{item.wilaya} - {item.commune}</Badge>
            {item.category && <Badge tone="wheat">{item.category}</Badge>}
            {item.qty ? <Badge tone="wheat">{t.quantity}: {fmt(item.qty)} {item.unit}</Badge> : null}
            {item.area ? <Badge tone="wheat">{t.area}: {item.area} هكتار</Badge> : null}
          </div>
          {kind === "land" && (
            <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
              <div className="p-2 rounded-xl" style={{ backgroundColor: item.water ? C.primarySoft : "#F3E3DF" }}>
                {item.water ? <CheckCircle size={16} className="mx-auto mb-1" color={C.success} /> : <XCircle size={16} className="mx-auto mb-1" color={C.danger} />} {t.water}
              </div>
              <div className="p-2 rounded-xl" style={{ backgroundColor: item.electricity ? C.primarySoft : "#F3E3DF" }}>
                {item.electricity ? <CheckCircle size={16} className="mx-auto mb-1" color={C.success} /> : <XCircle size={16} className="mx-auto mb-1" color={C.danger} />} {t.electricity}
              </div>
              <div className="p-2 rounded-xl" style={{ backgroundColor: item.road ? C.primarySoft : "#F3E3DF" }}>
                {item.road ? <CheckCircle size={16} className="mx-auto mb-1" color={C.success} /> : <XCircle size={16} className="mx-auto mb-1" color={C.danger} />} {t.road}
              </div>
            </div>
          )}
          <p className="text-sm mt-4 leading-relaxed" style={{ color: C.textMuted }}>{item.desc}</p>
          <div className="mt-4 p-3 rounded-xl flex items-center justify-between" style={{ backgroundColor: C.bg }}>
            <div>
              <div className="font-semibold text-sm">{item.seller || item.owner}</div>
              <div className="text-xs flex items-center gap-1" style={{ color: C.textMuted }}><Phone size={12} /> {item.phone}</div>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 rounded-full text-white" style={{ backgroundColor: C.primary }}><Phone size={16} /></button>
              <button className="p-2.5 rounded-full border" style={{ borderColor: C.border }}><MessageCircle size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------- MAP --------------------------------------- */
function MapPage({ t, products, lands, vets }) {
  const pins = [
    ...products.map((p) => ({ ...p, kind: "product", color: C.primary })),
    ...lands.map((l) => ({ ...l, kind: "land", color: C.soil })),
    ...vets.map((v) => ({ ...v, kind: "vet", color: C.danger })),
  ];
  return (
    <div>
      <div className="font-bold text-lg mb-3">{t.nav_map}</div>
      <div className="rounded-2xl border relative overflow-hidden" style={{ borderColor: C.border, backgroundColor: "#E9E4D6", height: 340 }}>
        <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "repeat(8,1fr)", gridTemplateRows: "repeat(6,1fr)", opacity: 0.25 }}>
          {Array.from({ length: 48 }).map((_, i) => <div key={i} style={{ border: "1px solid #C9A356" }} />)}
        </div>
        {pins.map((p, i) => (
          <div key={i} title={p.name} className="absolute" style={{ top: `${12 + (i * 37) % 78}%`, left: `${8 + (i * 53) % 84}%` }}>
            <MapPin size={22} color={p.color} fill={p.color} />
          </div>
        ))}
        <div className="absolute bottom-3 start-3 bg-white/90 rounded-xl px-3 py-2 text-xs flex gap-3">
          <span className="flex items-center gap-1"><MapPin size={12} color={C.primary} /> {t.nav_market}</span>
          <span className="flex items-center gap-1"><MapPin size={12} color={C.soil} /> {t.nav_land}</span>
          <span className="flex items-center gap-1"><MapPin size={12} color={C.danger} /> {t.nav_vets}</span>
        </div>
      </div>
      <div className="text-xs mt-2" style={{ color: C.textMuted }}>{t.locationOnMap} — عرض تقريبي للمواقع حسب الولاية.</div>
    </div>
  );
}

/* --------------------------------- PRICES -------------------------------------- */
function PricesPage({ t }) {
  const [q, setQ] = useState("");
  const rows = seedPrices.filter((r) => !q || r.name.includes(q));
  return (
    <div>
      <div className="font-bold text-lg mb-3">{t.pricesToday}</div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.searchPlaceholder}
        className="w-full px-4 py-2.5 rounded-xl border text-sm mb-3 bg-white" style={{ borderColor: C.border }} />
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: C.border }}>
        {rows.map((r, i) => (
          <div key={r.name} className="flex items-center justify-between px-4 py-3 text-sm" style={{ borderTop: i ? `1px solid ${C.border}` : "none" }}>
            <div>
              <div className="font-semibold">{r.name}</div>
              <div className="text-xs" style={{ color: C.textMuted }}>{r.wilaya} · {t.lastUpdate}: {r.updated}</div>
            </div>
            <div className="text-end">
              <div className="font-bold">{fmt(r.price)} دج<span className="text-xs font-normal">/{r.unit}</span></div>
              <div className="flex items-center gap-1 justify-end text-xs" style={{ color: r.change > 0 ? C.success : r.change < 0 ? C.danger : C.textMuted }}>
                {r.change > 0 ? <TrendingUp size={12} /> : r.change < 0 ? <TrendingDown size={12} /> : null}
                {r.change !== 0 ? `${r.change > 0 ? "+" : ""}${r.change}` : "—"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- WEATHER -------------------------------------- */
function WeatherPage({ t, wilayas }) {
  const [w, setW] = useState(wilayas[0].ar);
  const days = [
    { d: "الإثنين", temp: 26, icon: Sun }, { d: "الثلاثاء", temp: 24, icon: CloudRain },
    { d: "الأربعاء", temp: 23, icon: CloudRain }, { d: "الخميس", temp: 27, icon: Sun }, { d: "الجمعة", temp: 28, icon: Sun },
  ];
  return (
    <div className="max-w-lg">
      <div className="font-bold text-lg mb-3">{t.nav_weather}</div>
      <select value={w} onChange={(e) => setW(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border text-sm mb-3 bg-white" style={{ borderColor: C.border }}>
        {wilayas.map((wl) => <option key={wl.id} value={wl.ar}>{wl.ar}</option>)}
      </select>
      <div className="rounded-2xl p-6 text-white text-center mb-4" style={{ backgroundColor: C.primary }}>
        <Sun size={40} className="mx-auto mb-2" />
        <div className="text-4xl font-black">24°</div>
        <div className="opacity-90">{w}</div>
        <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
          <div><Droplet size={16} className="mx-auto mb-1" />{t.humidity} 45%</div>
          <div><Wind size={16} className="mx-auto mb-1" />{t.wind} 12km/h</div>
          <div><CloudRain size={16} className="mx-auto mb-1" />{t.rainChance} 10%</div>
        </div>
      </div>
      <div className="font-semibold text-sm mb-2">{t.nextDays}</div>
      <div className="flex gap-2 overflow-x-auto">
        {days.map((d) => (
          <div key={d.d} className="flex flex-col items-center gap-1 bg-white border rounded-xl px-4 py-3 shrink-0" style={{ borderColor: C.border }}>
            <span className="text-xs">{d.d}</span>
            <d.icon size={20} color={C.wheat} />
            <span className="font-bold text-sm">{d.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- MESSAGES -------------------------------------- */
function MessagesPage({ t }) {
  const [active, setActive] = useState(seedConversations[0]);
  const [msgs, setMsgs] = useState([
    { from: "them", text: "السلام عليكم، المنتج مازال متوفر؟" },
    { from: "me", text: "وعليكم السلام، نعم متوفر بكل كمية" },
  ]);
  const [text, setText] = useState("");
  return (
    <div className="grid md:grid-cols-3 gap-3 h-[70vh]">
      <div className="bg-white rounded-2xl border overflow-hidden md:col-span-1" style={{ borderColor: C.border }}>
        <div className="p-3 font-bold border-b" style={{ borderColor: C.border }}>{t.conversations}</div>
        {seedConversations.map((c) => (
          <button key={c.id} onClick={() => setActive(c)} className="w-full flex items-center gap-3 px-3 py-3 text-start"
            style={{ backgroundColor: active.id === c.id ? C.primarySoft : "transparent" }}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: C.sage }}>{c.name[0]}</div>
              {c.online && <div className="absolute bottom-0 end-0 w-2.5 h-2.5 rounded-full border-2 border-white" style={{ backgroundColor: C.success }} />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold truncate">{c.name}</div>
              <div className="text-xs truncate" style={{ color: C.textMuted }}>{c.last}</div>
            </div>
            <div className="text-[10px]" style={{ color: C.textMuted }}>{c.time}</div>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border md:col-span-2 flex flex-col" style={{ borderColor: C.border }}>
        <div className="p-3 border-b font-bold flex items-center gap-2" style={{ borderColor: C.border }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: C.sage }}>{active.name[0]}</div>
          {active.name}
        </div>
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {msgs.map((m, i) => (
            <div key={i} className={"max-w-[70%] px-3 py-2 rounded-2xl text-sm " + (m.from === "me" ? "ms-auto text-white" : "")}
              style={{ backgroundColor: m.from === "me" ? C.primary : C.bg }}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="p-3 border-t flex items-center gap-2" style={{ borderColor: C.border }}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder={t.typeMessage}
            className="flex-1 px-4 py-2 rounded-full border text-sm" style={{ borderColor: C.border }}
            onKeyDown={(e) => { if (e.key === "Enter" && text.trim()) { setMsgs((m) => [...m, { from: "me", text }]); setText(""); } }} />
          <button onClick={() => { if (text.trim()) { setMsgs((m) => [...m, { from: "me", text }]); setText(""); } }}
            className="p-2.5 rounded-full text-white" style={{ backgroundColor: C.primary }}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- FAVORITES -------------------------------------- */
function FavoritesPage({ t, favorites, products, lands, vets, livestock, toggleFav, goto }) {
  const all = [...products, ...lands, ...vets, ...livestock].filter((x) => favorites.includes(x.id));
  return (
    <div>
      <div className="font-bold text-lg mb-3">{t.nav_favorites}</div>
      {all.length === 0 ? <EmptyState t={t} /> : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {all.map((item) =>
            item.type === "vet" ? (
              <VetCard key={item.id} v={item} t={t} isFav onFav={toggleFav} onOpen={() => goto("vetDetail", item)} />
            ) : item.type === "land" ? (
              <LandCard key={item.id} l={item} t={t} isFav onFav={toggleFav} onOpen={() => goto("landDetail", item)} />
            ) : (
              <ProductCard key={item.id} p={item} t={t} isFav onFav={toggleFav} onOpen={() => goto("productDetail", item)} />
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ----------------------------- NOTIFICATIONS ------------------------------------- */
function NotificationsPage({ t, notifications, onRead }) {
  return (
    <div className="max-w-lg">
      <div className="font-bold text-lg mb-3">{t.nav_notifications}</div>
      {notifications.length === 0 ? <EmptyState t={t} /> : (
        <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: C.border }}>
          {notifications.map((n, i) => (
            <div key={n.id} onClick={() => onRead(n.id)} className="flex items-start gap-3 px-4 py-3 cursor-pointer"
              style={{ borderTop: i ? `1px solid ${C.border}` : "none", backgroundColor: n.read ? "transparent" : C.primarySoft }}>
              <Bell size={16} color={n.read ? C.textMuted : C.primary} className="mt-0.5" />
              <div className="flex-1">
                <div className="text-sm" style={{ fontWeight: n.read ? 400 : 700 }}>{n.text}</div>
                <div className="text-xs" style={{ color: C.textMuted }}>{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* -------------------------------- PROFILE ---------------------------------------- */
function ProfilePage({ t, user, products, lands, goto, onLogout }) {
  const mine = [...products.filter((p) => p.seller === "أنت"), ...lands.filter((l) => l.owner === "أنت")];
  return (
    <div className="max-w-xl">
      <div className="bg-white rounded-2xl border p-5 flex items-center gap-4 mb-4" style={{ borderColor: C.border }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: C.primary }}>
          {user.name?.[0] || "U"}
        </div>
        <div>
          <div className="font-bold text-lg">{user.name}</div>
          <Badge>{t["role_" + user.role] || user.role}</Badge>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white rounded-2xl border p-4 text-center" style={{ borderColor: C.border }}>
          <div className="font-black text-2xl" style={{ color: C.primary }}>{mine.length}</div>
          <div className="text-xs" style={{ color: C.textMuted }}>{t.myListings}</div>
        </div>
        <div className="bg-white rounded-2xl border p-4 text-center" style={{ borderColor: C.border }}>
          <div className="font-black text-2xl" style={{ color: C.primary }}>0</div>
          <div className="text-xs" style={{ color: C.textMuted }}>{t.reviews}</div>
        </div>
      </div>
      <SectionHeader title={t.myListings} />
      {mine.length === 0 ? <EmptyState t={t} /> : (
        <div className="space-y-2 mb-4">
          {mine.map((m) => (
            <div key={m.id} className="flex items-center justify-between bg-white border rounded-xl px-4 py-3" style={{ borderColor: C.border }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{m.img}</span>
                <div>
                  <div className="text-sm font-semibold">{m.name}</div>
                  <div className="text-xs" style={{ color: C.textMuted }}>{fmt(m.price)} دج</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-lg border" style={{ borderColor: C.border }}><Edit3 size={14} /></button>
                <button className="p-1.5 rounded-lg border" style={{ borderColor: C.border }}><Trash2 size={14} color={C.danger} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={onLogout} className="w-full py-3 rounded-xl font-bold border flex items-center justify-center gap-2" style={{ borderColor: C.border, color: C.danger }}>
        <LogOut size={16} /> {t.logout}
      </button>
    </div>
  );
}

/* ---------------------------------- ADMIN ---------------------------------------- */
function AdminPage({ t, products, lands, vets, setProducts, setLands }) {
  const stats = [
    { label: t.totalProducts, value: products.length, icon: Package },
    { label: t.totalLands, value: lands.length, icon: Landmark },
    { label: t.totalVets, value: vets.length, icon: Stethoscope },
    { label: t.totalUsers, value: 128, icon: Users },
  ];
  const topWilayas = useMemoTop(products, lands);
  return (
    <div>
      <div className="font-bold text-lg mb-3 flex items-center gap-2"><Shield size={18} /> {t.nav_admin}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border p-4" style={{ borderColor: C.border }}>
            <s.icon size={18} color={C.primary} />
            <div className="font-black text-2xl mt-1">{s.value}</div>
            <div className="text-xs" style={{ color: C.textMuted }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border p-4 mb-6" style={{ borderColor: C.border }}>
        <div className="font-bold text-sm mb-3">{t.topWilayas}</div>
        {topWilayas.map((w) => (
          <div key={w.name} className="flex items-center gap-2 mb-2">
            <div className="text-xs w-20 shrink-0">{w.name}</div>
            <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: C.border }}>
              <div className="h-2 rounded-full" style={{ width: `${w.pct}%`, backgroundColor: C.primary }} />
            </div>
            <div className="text-xs w-6 text-end">{w.count}</div>
          </div>
        ))}
      </div>
      <div className="font-bold text-sm mb-2">{t.manageListings}</div>
      <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: C.border }}>
        {products.map((p, i) => (
          <div key={p.id} className="flex items-center justify-between px-4 py-3 text-sm" style={{ borderTop: i ? `1px solid ${C.border}` : "none" }}>
            <div className="flex items-center gap-2"><span>{p.img}</span> {p.name} <Badge tone="wheat">{p.wilaya}</Badge></div>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg border" style={{ borderColor: C.border }} title={t.approve}><CheckCircle size={14} color={C.success} /></button>
              <button onClick={() => setProducts((ps) => ps.filter((x) => x.id !== p.id))} className="p-1.5 rounded-lg border" style={{ borderColor: C.border }} title={t.delete}>
                <Trash2 size={14} color={C.danger} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function useMemoTop(products, lands) {
  return useMemo(() => {
    const counts = {};
    [...products, ...lands].forEach((x) => { counts[x.wilaya] = (counts[x.wilaya] || 0) + 1; });
    const arr = Object.entries(counts).map(([name, count]) => ({ name, count }));
    const max = Math.max(1, ...arr.map((a) => a.count));
    return arr.sort((a, b) => b.count - a.count).slice(0, 5).map((a) => ({ ...a, pct: (a.count / max) * 100 }));
  }, [products, lands]);
}
