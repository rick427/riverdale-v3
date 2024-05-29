import {defineField, defineType} from 'sanity';

export default defineType({
    name: "agents",
    type: "document",
    title: "Agents",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            validation: (rule) => rule.required()
        }),
    ]
});