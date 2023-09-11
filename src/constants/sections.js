import BarberScreenContent from "../components/additionalComponents/barberScreenContent"
import LocationScreenContent from "../components/additionalComponents/locationScreenContent"
import PriceScreenContent from "../components/additionalComponents/priceScreenContent"

export const SECTIONS = [
    {
        sectionId: "price_screen",
        sectionClassName: "price_screen",
        sectionTitleIntlId: "our_price",
        sectionContent: PriceScreenContent
    },
    {
        sectionId: "location_screen",
        sectionClassName: "location_screen",
        sectionTitleIntlId: "locations",
        sectionContent: LocationScreenContent
    },
    {
        sectionId: "barber_screen",
        sectionClassName: "barber_screen",
        sectionTitleIntlId: "our_barbers",
        sectionContent: BarberScreenContent
    },
]