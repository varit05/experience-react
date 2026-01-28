export function logError(
  error: Error,
  info: { componentStack?: string | null },
) {
  if (import.meta.env.NODE_ENV === "development") {
    console.log("Caught error:", error);
    console.log("Error details:", info);
  } else {
    // Log error to an external service in production
  }
}
