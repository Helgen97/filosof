/**
 * Constants for application content, including menu items, locations, pricing, barbers, languages, and sections.
 * @module constants
 */

import barber_1 from "../images/barber-1.jpeg";
import barber_2 from "../images/barber-2.png";
import barber_3 from "../images/barber-3.jpeg";
import barber_4 from "../images/barber-4.jpeg";
import barber_5 from "../images/barber-5.jpeg";
import barber_6 from "../images/barber-6.jpeg";
import barber_7 from "../images/barber-7.jpeg";
import barber_8 from "../images/barber-8.jpeg";
import BarberScreenContent from "../components/additionalComponents/barberScreenContent";
import LocationScreenContent from "../components/additionalComponents/locationScreenContent";
import PriceScreenContent from "../components/additionalComponents/priceScreenContent";

/**
 * Menu items for navigation.
 * Maps section IDs to their internationalized labels.
 */
export const MENU_ITEMS = [
  {
    linkId: "main_screen",
    linkIntlId: "online_booking",
  },
  {
    linkId: "price_screen",
    linkIntlId: "services",
  },
  {
    linkId: "location_screen",
    linkIntlId: "locations",
  },
  {
    linkId: "barber_screen",
    linkIntlId: "barbers",
  },
];

/**
 * Location data with addresses, working hours, booking links, and phone numbers.
 * Includes English translations for addresses.
 */
export const LOCATION_CONTENT = {
  location_1: {
    locationAddress: "м. Дарниця, вул. Павла Полуботка 28",
    locationAddressLang: { en: "Darnytsia st., Pavlo Polubotka Street 28" },
    locationWorkingHours: "10:00 - 20:00",
    locationBookingLink:
      "https://n772367.alteg.io/select-city/4/select-branch?previousStepUrl=%2Fcompany%2F722907%2Fpersonal%2Fmenu%3Fo%3D&o=",
    locationPhone: "+380737930101",
    locationPathLink:
      "https://www.google.com/maps/dir//Barbershop%20Filosof%20%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF%20%D0%94%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D1%8F,%20Hetman%20Pavlo%20Polubotka%20St,%2028,%20Kyiv,%2002000",
  },
  location_2: {
    locationAddress: "м. Дарниця, вул. Будівельників 36",
    locationAddressLang: { en: "Darnytsia st., Budivel'nykiv Street 36" },
    locationWorkingHours: "10:00 - 20:00",
    locationBookingLink:
      "https://n772367.alteg.io/select-city/4/select-branch?previousStepUrl=%2Fcompany%2F722907%2Fpersonal%2Fmenu%3Fo%3D&o=",
    locationPhone: "+380686787787",
    locationPathLink:
      "https://www.google.com/maps/dir//Kyiv,%20Budivel'nykiv%20Street%2036",
  },
  location_3: {
    locationAddress: "м. Виставковий центр, вул. Васильківська, 47",
    locationAddressLang: { en: "Vystavkovyi Tsentr st., Vasylkivska St, 47" },
    locationWorkingHours: "10:00 - 20:00",
    locationBookingLink:
      "https://n772367.alteg.io/select-city/4/select-branch?previousStepUrl=%2Fcompany%2F722907%2Fpersonal%2Fmenu%3Fo%3D&o=",
    locationPhone: "+380737930101",
    locationPathLink: "https://www.google.com/maps/dir//Vasylkivska%20St,%2047",
  },
  location_4: {
    locationAddress: "м. Святошин, Берестейський проспект, 104",
    locationAddressLang: { en: "Sviatoshyn st., Beresteiskyi Ave, 104" },
    locationWorkingHours: "10:00 - 20:00",
    locationBookingLink:
      "https://n772367.alteg.io/select-city/4/select-branch?previousStepUrl=%2Fcompany%2F722907%2Fpersonal%2Fmenu%3Fo%3D&o=",
    locationPhone: "+380737930101",
    locationPathLink:
      "https://www.google.com/maps/dir//Beresteiskyi%20Ave,%20104",
  },
  location_5: {
    locationAddress: "м. Дарниця, проспект Миру, 6",
    locationAddressLang: { en: "Darnytsia st., Myru Ave, 6" },
    locationWorkingHours: "10:00 - 21:00",
    locationBookingLink:
      "https://n829842.alteg.io/company/778957/personal/menu?o=",
    locationPhone: "+380666610010",
    locationPathLink:
      "https://www.google.com/maps/dir//Kyiv,%20Myru%20Ave,%206",
  },
};

/**
 * Pricing data for services with their internationalized keys and starting prices.
 */
export const PRICE_CONTENT = [
  {
    key: "mens_haircut",
    starting_price: 300,
  },
  {
    key: "beard_haircut",
    starting_price: 200,
  },
  {
    key: "mens_haircut_plus_beard_haircut",
    starting_price: 500,
  },
  {
    key: "baby_haircut",
    starting_price: 300,
  },
  {
    key: "fade_haircut",
    starting_price: 350,
  },
  {
    key: "fade_haircut_plus_beard_haircut",
    starting_price: 500,
  },
];

/**
 * Barber data with IDs, photos, names, and positions.
 * Includes English translations for names.
 */
export const BARBERS = [
  {
    id: 1,
    photo: barber_1,
    barberName: "Андрій Храпко",
    barberNameLang: { en: "Andriy Khrapko" },
    barberPositionItlId: "barber",
  },
  {
    id: 2,
    photo: barber_2,
    barberName: "Михайло",
    barberNameLang: { en: "Mykhailo" },
    barberPositionItlId: "top_barber",
  },
  {
    id: 3,
    photo: barber_3,
    barberName: "Андрій Дорожкін",
    barberNameLang: { en: "Andriy Dorozhkin" },
    barberPositionItlId: "top_barber",
  },
  {
    id: 4,
    photo: barber_4,
    barberName: "Андрій Євтушенко",
    barberNameLang: { en: "Andriy Yevtushenko" },
    barberPositionItlId: "senior_barber",
  },
  {
    id: 5,
    photo: barber_5,
    barberName: "Олександр",
    barberNameLang: { en: "Oleksandr" },
    barberPositionItlId: "barber",
  },
  {
    id: 6,
    photo: barber_6,
    barberName: "Володимир",
    barberNameLang: { en: "Volodymyr" },
    barberPositionItlId: "senior_barber",
  },
  {
    id: 7,
    photo: barber_7,
    barberName: "Степан",
    barberNameLang: { en: "Stepan" },
    barberPositionItlId: "barber",
  },
  {
    id: 8,
    photo: barber_8,
    barberName: "Андрій Перусь",
    barberNameLang: { en: "Andriy Perus" },
    barberPositionItlId: "senior_barber",
  },
];

/**
 * Section configurations for rendering content sections.
 * Maps section IDs to their class names, titles, and components.
 */
export const SECTIONS = [
  {
    sectionId: "price_screen",
    sectionClassName: "price_screen",
    sectionTitleIntlId: "our_price",
    sectionContent: PriceScreenContent,
  },
  {
    sectionId: "location_screen",
    sectionClassName: "location_screen",
    sectionTitleIntlId: "locations",
    sectionContent: LocationScreenContent,
  },
  {
    sectionId: "barber_screen",
    sectionClassName: "barber_screen",
    sectionTitleIntlId: "our_barbers",
    sectionContent: BarberScreenContent,
  },
];
