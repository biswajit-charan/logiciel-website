import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { table } from '@sanity/table';

export default defineConfig({
  name: 'default',
  title: '\tsanity-studio',

  projectId: 'wfqtcpjl',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    table(),
  ],

  schema: {
    types: schemaTypes,
  },
})
