import locations from "../constants/locations.json";

export default {
    name: "property",
    type: "document",
    title: "Property",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            validation: (rule:any) => rule.required()
        },
        {
            name: "slug",
            type: "slug",
            readOnly: true,
            description: "This is automatically generated from the property name and is used internally for identification purposes. Click the generate button after adding a name.",
            title: "Slug",
            options: {source: "name"},
            validation: (rule:any) => rule.required()
        },
        {
            name: "description",
            type: "text",
            title: "Description",
            description: "Short description about the property. This will be displayed on each property card. We recommend at least 2 lines of content.",
            validation: (rule:any) => rule.required()
        },
        {
            name: "type",
            type: "string",
            title: "Type",
            description: "What type of property is this?",
            options: {
                layout: "list",
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
            validation: (rule:any) => rule.required().error("Property type is required")
        },
        {
            name: "locations",
            type: "string",
            //of: [{type: "string"}],
            title: "Location",
            description: "Where is this property located?",
            options: {
                layout: "list",
                list: locations
            },
            validation: (rule:any) => rule.required().error("Location is required")
        },
        {
            name: "status",
            type: "string",
            title: "Status",
            options: {
                list: [
                    {title: "For Sale", value: "SALE"},
                    {title: "For Rent", value: "RENT"},
                ]
            },
            validation: (rule:any) => rule.required().error("Status is required")
        },
        {
            name: "currency",
            type: "string",
            title: "Currency",
            options: {
                list: [
                    {title: "Kenyan Shillings - KES", value: "KES"},
                    {title: "United Stated Dollar - USD", value: "USD"},
                ]
            },
            validation: (rule:any) => rule.required().error("Currency is required")
        },
        {
            name: "currentPrice",
            type: "number",
            title: "Price",
            description: "Current sale or rent price of this property",
            validation: (rule:any) => rule.required().error("Price is required")
        },
        {
            name: "pricePrefix",
            type: "string",
            description: "E.g: 'From', 'Between' etc ...",
            title: "Price Prefix",
        },
        {
            name: "pricePostfix",
            type: "string",
            description: "E.g: 'Monthly', 'Per Night' etc ...",
            title: "Price Postfix",
        },
        {
            name: "areaSize",
            type: "number",
            title: "Area Size",
            validation: (rule:any) => [
                rule.required().min(1).error("A size of min. 1 is required")
            ]
        },
        {
            name: "areaSizePostfix",
            type: "string",
            description: "E.g: 'ft2', 'sq ft', 'acres', etc ...",
            title: "Area Size Postfix",
        },
        {
            name: "lotSize",
            type: "number",
            title: "Lot Size",
        },
        {
            name: "lotSizePostfix",
            type: "string",
            description: "E.g: 'ft2', 'sq ft', etc ...",
            title: "Lot Size Postfix",
        },
        {
            name: "bedrooms",
            type: "number",
            title: "Nos. of Bedrooms",
        },
        {
            name: "bathrooms",
            type: "number",
            title: "Nos. of Bathrooms",
        },
        {
            name: "garages",
            type: "number",
            title: "Nos. of Garages or Parking Spaces",
        },
        {
            name: "yearBuilt",
            type: "date",
            description: "What year was the property built?",
            title: "Year Built",
        },
        {
            name: "cords",
            type: "geopoint",
            description: "Cordinates of this property",
            title: "Cordinates",
        },
        {
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
            validation: (rule:any) => rule.required()
        },
        {
            name: "gallery",
            type: "array",
            of: [{type: "image"}],
            title: "Image Gallery",
            options: {
                layout: "grid",
                hotspot: true
            },
        },
        {
            name: "content",
            type: "array",
            description: "Detailed breakdown of this property. This is a detailed description",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ],
        },
    ]
}