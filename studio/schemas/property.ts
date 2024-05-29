import {defineField, defineType} from 'sanity';
import locations from "../constants/locations.json";

export default defineType({
    name: "property",
    type: "document",
    title: "Property",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug",
            type: "slug",
            readOnly: true,
            description: "This is automatically generated from the property name and is used internally for identification purposes. Click the generate button after adding a name.",
            title: "Slug",
            options: {source: "name"},
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            description: "Short description about the property. This will be displayed on each property card. We recommend at least 2 lines of content.",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "type",
            type: "string",
            title: "Type",
            description: "What type of property is this?",
            options: {
                layout: "dropdown",
                list: [
                    { title: "Apartments", value: "APARTMENTS" },
                    { title: "Shops", value: "SHOPS" },
                    { title: "House", value: "HOUSE" },
                    { title: "Office", value: "OFFICE" },
                    { title: "Plot", value: "PLOT" },
                    { title: "Shop", value: "SHOP" },
                    { title: "Showroom", value: "SHOWROOM" },
                    { title: "Warehouse", value: "WAREHOUSE" },
                    { title: "Bedsitter", value: "BEDSITTER" },
                    { title: "Guest House", value: "GUEST_HOUSE" },
                    { title: "House", value: "HOUSE" },
                    { title: "Maisonette", value: "MAISONETTER" },
                    { title: "Penthouse", value: "PENTHOUSE" },
                    { title: "Plot", value: "PLOT" },
                    { title: "Townhouse", value: "TOWNHOUSE" },
                    { title: "Villa", value: "VILLA" },
                ]
            },
            validation: (rule) => rule.required().error("Property type is required")
        }),
        defineField({
            name: "locations",
            type: "string",
            //of: [{type: "string"}],
            title: "Location",
            description: "Where is this property located?",
            options: {
                layout: "dropdown",
                list: locations
            },
            validation: (rule) => rule.required().error("Location is required")
        }),
        defineField({
            name: "status",
            type: "string",
            title: "Status",
            options: {
                list: [
                    {title: "For Sale", value: "SALE"},
                    {title: "For Rent", value: "RENT"},
                ]
            },
            validation: (rule) => rule.required().error("Status is required")
        }),
        defineField({
            name: "currency",
            type: "string",
            title: "Currency",
            options: {
                list: [
                    {title: "Kenyan Shillings - KES", value: "KES"},
                    {title: "United Stated Dollar - USD", value: "USD"},
                ]
            },
            validation: (rule) => rule.required().error("Currency is required")
        }),
        defineField({
            name: "currentPrice",
            type: "number",
            title: "Price",
            description: "Current sale or rent price of this property",
            validation: (rule) => rule.required().error("Price is required")
        }),
        defineField({
            name: "pricePrefix",
            type: "string",
            description: "E.g: 'From', 'Between' etc ...",
            title: "Price Prefix",
        }),
        defineField({
            name: "pricePostfix",
            type: "string",
            description: "E.g: 'Monthly', 'Per Night' etc ...",
            title: "Price Postfix",
        }),
        defineField({
            name: "areaSize",
            type: "number",
            title: "Area Size",
            validation: (rule) => [
                rule.required().min(1).error("A size of min. 1 is required")
            ]
        }),
        defineField({
            name: "areaSizePostfix",
            type: "string",
            description: "E.g: 'ft2', 'sq ft', 'acres', etc ...",
            title: "Area Size Postfix",
        }),
        defineField({
            name: "lotSize",
            type: "number",
            title: "Lot Size",
        }),
        defineField({
            name: "lotSizePostfix",
            type: "string",
            description: "E.g: 'ft2', 'sq ft', etc ...",
            title: "Lot Size Postfix",
        }),
        defineField({
            name: "bedrooms",
            type: "number",
            title: "Nos. of Bedrooms",
        }),
        defineField({
            name: "bathrooms",
            type: "number",
            title: "Nos. of Bathrooms",
        }),
        defineField({
            name: "garages",
            type: "number",
            title: "Nos. of Garages or Parking Spaces",
        }),
        defineField({
            name: "yearBuilt",
            type: "date",
            description: "What year was the property built?",
            title: "Year Built",
        }),
        defineField({
            name: "cords",
            type: "geopoint",
            description: "Cordinates of this property",
            title: "Cordinates",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            description: "This is the main image of the property. Either an internal or external shot",
            options: {hotspot: true},
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ],
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "gallery",
            type: "array",
            of: [{type: "image"}],
            title: "Image Gallery",
            options: {
                layout: "grid",
            },
        }),
        defineField({
            name: "content",
            type: "array",
            description: "Detailed breakdown of this property. This is a detailed description",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ],
        }),
    ]
});