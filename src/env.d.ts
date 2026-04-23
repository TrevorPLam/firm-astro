/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_SUBMISSION_URL: string;
  readonly VITE_CALENDLY_URL: string;
  readonly VITE_GA_TRACKING_ID: string;
  readonly VITE_SENTRY_DSN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
