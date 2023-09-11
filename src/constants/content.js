import barber_1 from "../images/barber-1.jpeg"
import barber_2 from "../images/barber-2.png"
import barber_3 from "../images/barber-3.jpeg"
import barber_4 from "../images/barber-4.png"
import barber_5 from "../images/barber-5.jpeg"
import barber_6 from "../images/barber-6.jpeg"
import barber_7 from "../images/barber-7.jpeg"
import barber_8 from "../images/barber-8.jpeg"
import barber_9 from "../images/barber-9.jpeg"
import barber_10 from "../images/barber-10.png"
import barber_11 from "../images/barber-11.jpeg"
import barber_12 from "../images/barber-12.jpeg"

export const MENU_ITEMS = [
    {
        linkId: "main_screen",
        linkIntlId: "online_booking"
    },
    {
        linkId: "price_screen",
        linkIntlId: "services"
    },
    {
        linkId: "location_screen",
        linkIntlId: "locations"
    },
    {
        linkId: "barber_screen",
        linkIntlId: "barbers"
    },
];

export const LOCATION_CONTENT = {
    "location_1": {
        locationAddress: "м. Дарниця, вул. Павла Полуботка 28",
        locationAddressLang: {
            "en": "Darnytsia st., Pavlo Polubotka Street 28",
        },
        locationWorkingHours: "10:00 - 20:00",
        locationBookingLink: "https://n772367.alteg.io/group:708526/city:4#1",
        locationPhone: "+380737930101",
        locationPathLink: "https://www.google.com/maps/dir//Barbershop%20Filosof%20%D0%91%D0%B0%D1%80%D0%B1%D0%B5%D1%80%D1%88%D0%BE%D0%BF%20%D0%94%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D1%8F,%20Hetman%20Pavlo%20Polubotka%20St,%2028,%20Kyiv,%2002000"
    },
    "location_2": {
        locationAddress: "м. Дарниця, вул. Будівельників 36",
        locationAddressLang: {
            "en": "Darnytsia st., Budivel'nykiv Street 36",
        },
        locationWorkingHours: "10:00 - 20:00",
        locationBookingLink: "https://n772367.alteg.io/group:708526/city:4#1",
        locationPhone: "+380686787787",
        locationPathLink: "https://www.google.com/maps/dir//Kyiv,%20Budivel'nykiv%20Street%2036"
    },
    "location_3": {
        locationAddress: "м. Васильківська, Коломийський пров. 17/31А",
        locationAddressLang: {
            "en": "Vasylkivska st., Kolomyis'kyi Ln 17/31A",
        },
        locationWorkingHours: "10:00 - 20:00",
        locationBookingLink: "https://n772367.alteg.io/group:708526/city:4#1",
        locationPhone: "+380978858087",
        locationPathLink: "https://www.google.com/maps/dir//Kyiv,%20Kolomyis'kyi%20Ln%2017"
    }
};

export const PRICE_TABLE_HEAD_CONTENT = [
    [],
    ["junior", "barber"],
    ["barber"],
    ["senior", "barber"],
    ["top", "barber"],
    ["art", "barber"],
];

export const PRICE_TABLE_BODY_CONTENT = [
    [
        ["mens_haircut"],
        ["250"],
        ["300"],
        ["350"],
        ["400"],
        ["500"]
    ],
    [
        ["beard_haircut"],
        ["150"],
        ["250"],
        ["250"],
        ["300"],
        ["300"]
    ],
    [
        ["mens_haircut", "plus", "beard_haircut"],
        ["400"],
        ["550"],
        ["600"],
        ["700"],
        ["800"]
    ],
    [
        ["fade_haircut"],
        ["300"],
        ["350"],
        ["400"],
        ["450"],
        ["550"]
    ],
    [
        ["baby_haircut"],
        ["250"],
        ["300"],
        ["350"],
        ["400"],
        ["550"]
    ],
    [
        ["royal", "shaving"],
        ["-"],
        ["250"],
        ["300"],
        ["-"],
        ["-"]
    ],

];

export const BARBERS = [
    {
        id: 1,
        photo: barber_1,
        barberName: "Андрій Храпко",
        barberNameLang: {
            "en": "Andrіy Khrapko"
        },
        barberPositionItlId: "junior_barber",
    },
    {
        id: 2,
        photo: barber_2,
        barberName: "Михайло",
        barberNameLang: {
            "en": "Mykhailo",
        },
        barberPositionItlId: "art_barber",
    },
    {
        id: 3,
        photo: barber_3,
        barberName: "Андрій Дорожкін",
        barberNameLang: {
            "en": "Andrіy Dorozhkіn",
        },
        barberPositionItlId: "top_barber",
    },
    {
        id: 4,
        photo: barber_4,
        barberName: "Максим",
        barberNameLang: {
            "en": "Maksym",
        },
        barberPositionItlId: "senior_barber",
    },
    {
        id: 5,
        photo: barber_5,
        barberName: "Андрій Євтушенко",
        barberNameLang: {
            "en": "Andrіy Єvtushenko",
        },
        barberPositionItlId: "barber",
    },
    {
        id: 6,
        photo: barber_6,
        barberName: "Сергій",
        barberNameLang: {
            "en": "Serhii",
        },
        barberPositionItlId: "senior_barber",
    },
    {
        id: 7,
        photo: barber_7,
        barberName: "Олександр",
        barberNameLang: {
            "en": "Oleksandr",
        },
        barberPositionItlId: "junior_barber",
    },
    {
        id: 8,
        photo: barber_8,
        barberName: "Володимир",
        barberNameLang: {
            "en": "Volodimir",
        },
        barberPositionItlId: "senior_barber",
    },
    {
        id: 9,
        photo: barber_9,
        barberName: "Степан",
        barberNameLang: {
            "en": "Stepan",
        },
        barberPositionItlId: "barber",
    },
    {
        id: 10,
        photo: barber_10,
        barberName: "Іван",
        barberNameLang: {
            "en": "Ivan",
        },
        barberPositionItlId: "senior_barber",
    },
    {
        id: 11,
        photo: barber_11,
        barberName: "Андрій Петрус",
        barberNameLang: {
            "en": "Andriy Petrus",
        },
        barberPositionItlId: "senior_barber",
    },
    {
        id: 12,
        photo: barber_12,
        barberName: "Володимир",
        barberNameLang: {
            "en": "Bogdan",
        },
        barberPositionItlId: "junior_barber",
    },
];