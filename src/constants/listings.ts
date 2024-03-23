import { PiBed, PiBathtub, PiRuler, PiCar } from "react-icons/pi";
import type { IconType } from "react-icons";

//@: Assets
import l_01 from "@/assets/listings/l-01.jpeg";
import l_02 from "@/assets/listings/l-02.jpeg";
import l_03 from "@/assets/listings/l-03.jpeg";
import l_04 from "@/assets/listings/l-04.jpeg";
import l_05 from "@/assets/listings/l-05.jpeg";
import l_06 from "@/assets/listings/l-06.webp";
import l_07 from "@/assets/listings/l-07.jpeg";
import l_08 from "@/assets/listings/l-08.jpeg";

export interface ListingProps {
    _id: number;
    image: string;
    price: number;
    status: string;
    currency: string;
    slug: string;
    name: string;
    description: string;
    address: string;
    amenities: {
        icon: IconType;
        name: string;
        value: number;
    }[]
}

export const listings:ListingProps[] = [
    {
        _id: 1,
        image: l_01,
        price: 200_000,
        status: "RENT",
        currency: "KES",
        slug: "ivy-terrace-residences",
        name: "Ivy Terrace Residences",
        description: "This solidly constructed, one-storey villa with six bedrooms situated within…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 6,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 720
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 2,
        image: l_02,
        price: 120_000,
        currency: "KES",
        status: "RENT",
        slug: "tranquil-haven-apartments",
        name: "Tranquil Haven Apartments",
        description: "Charming villa located in a tranquil gated community nestled in…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 6,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 720
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 3,
        image: l_03,
        price: 350_000,
        currency: "KES",
        status: "SALE",
        slug: "sunset-ridge-residences",
        name: "Sunset Ridge Residences",
        description: "Generously sized, unfurnished 3-bedroom apartment, offering stunning views of lush…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 8,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 6,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 2200
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    },
    {
        _id: 4,
        image: l_04,
        price: 1_200,
        currency: "USD",
        status: "RENT",
        slug: "emerald-heights-suites",
        name: "Emerald Heights Suites",
        description: "Wonderful single-story 4-bedroom maisonette with a DSQ, nestled within the…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 4,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 2,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1900
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 1
            }
        ]
    },
    {
        _id: 5,
        image: l_05,
        price: 6_250,
        currency: "USD",
        status: "RENT",
        slug: "serenity-springs-apartments",
        name: "Serenity Springs Apartments",
        description: "Impeccably designed six-bedroom apartment, meticulously made for the discerning buyer.…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 8,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 6,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 2000
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 2
            }
        ]
    },
    {
        _id: 6,
        image: l_06,
        price: 8_500,
        currency: "USD",
        status: "RENT",
        slug: "harbor-view-lofts",
        name: "Harbor View Lofts",
        description: "Well kept three bedroom apartment  (one ensuite) apartment in a…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 3,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1800
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    },
    {
        _id: 7,
        image: l_07,
        price: 8_500,
        currency: "USD",
        status: "RENT",
        slug: "parkview-gardens",
        name: "Parkview Gardens",
        description: "Well kept three bedroom apartment  (one ensuite) apartment in a…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 3,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1800
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    },
    {
        _id: 8,
        image: l_08,
        price: 8_500,
        currency: "USD",
        status: "RENT",
        slug: "meadowbrook-lofts",
        name: "Meadowbrook Lofts",
        description: "Well kept three bedroom apartment  (one ensuite) apartment in a…",
        address: "Est St, 77 - Central Park South-See",
        amenities: [
            {
                icon: PiBed,
                name: "Bedroom",
                value: 3,
            },
            {
                icon: PiBathtub,
                name: "Bathroom",
                value: 3,
            },
            {
                icon: PiRuler,
                name: "sq ft",
                value: 1800
            },
            {
                icon: PiCar,
                name: "Garages",
                value: 3
            }
        ]
    }
]