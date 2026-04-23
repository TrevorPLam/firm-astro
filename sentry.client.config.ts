import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  // Only initialize in production, not development
  environment: import.meta.env.MODE,
  // Disable Sentry in development
  enabled: import.meta.env.PROD,
  // Adds request headers and IP for users
  sendDefaultPii: false,
  // Set sample rate for performance monitoring (10% in production)
  tracesSampleRate: 0.1,
  // Filter out development errors
  beforeSend(event, hint) {
    // Don't send errors from localhost in production
    if (event.request?.url?.includes("localhost")) {
      return null;
    }
    return event;
  },
  // Set release version from package.json
  release: `your-dedicated-marketer@${import.meta.env.VITE_APP_VERSION || "1.0.0"}`,
});
