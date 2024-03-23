export default {
    name: "property",
    type: "document",
    title: "Property",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Property Name",
            validation: (rule:any) => rule.required()
        },
        {
            name: "slug",
            type: "slug",
            description: "This is automatically generated from the name",
            title: "Slug",
            options: {source: "name"},
            validation: (rule:any) => rule.required()
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
            validation: (rule:any) => rule.required()
        },
        {
            name: "price",
            type: "number",
            title: "Price",
            validation: (rule:any) => rule.required()
        },
        {
            name: "description",
            type: "string",
            title: "Description",
            validation: (rule:any) => rule.required()
        },
        {
            name: "address",
            type: "string",
            title: "Address",
            validation: (rule:any) => rule.required()
        },
        {
            name: "status",
            type: "string",
            title: "Status",
            validation: (rule:any) => rule.required()
        },
        {
            name: "image",
            type: "image",
            title: "Image",
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
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ],
        },
    ]
}