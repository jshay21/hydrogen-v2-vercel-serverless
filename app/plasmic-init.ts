import {initPlasmicLoader} from '@plasmicapp/loader-react';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '2XugPU5dGXHJMXwWFCsDLo', // ID of a project you are using
      token:
        'GkcKkeHNOaAuwlyYt8Y5yC8N5wQ5at8ygMOOttDEhIz7EaD5zmAYHtgebbom5veetNi1HIJZmrLMj8yuBAA', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
