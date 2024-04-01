import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {googleMapsInput} from "@sanity/google-maps-input";

export default defineConfig({
  name: 'default',
  title: 'riverdale',

  projectId: 'lee85s8g',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    googleMapsInput({
      apiKey: "AIzaSyBZznx_BQ-D4alAPP5OR7Z5M_vFNjoSaA4",
      defaultZoom: 13,
      defaultLocation: {
        lat: -1.2644370355853922,
        lng: 36.82419397368907
      },
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
