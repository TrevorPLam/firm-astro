/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_SUBMISSION_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
