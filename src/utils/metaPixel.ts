declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const META_PIXEL_ID = "2084546082456758";

/**
 * Generate a unique event ID for Meta Pixel + Conversions API deduplication
 */
export const generateEventId = (): string => {
  return "ev_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
};

/**
 * Track an event with Meta Pixel (Client-side) and Meta CAPI (Server-side)
 */
export const trackPixelEvent = (
  eventName: string,
  customData: Record<string, any> = {},
  eventId?: string
) => {
  const finalEventId = eventId || generateEventId();

  // 1. Client-Side Meta Pixel (fbq)
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      window.fbq("track", eventName, customData, { eventID: finalEventId });
    } catch (err) {
      console.warn("Meta Pixel client tracking error:", err);
    }
  }

  // 2. Server-Side Conversions API (CAPI) for deduplication & 100% reliable tracking
  try {
    fetch("/api/meta-capi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventId: finalEventId,
        eventSourceUrl: typeof window !== "undefined" ? window.location.href : "",
        customData,
      }),
    }).catch(() => {
      // Non-blocking catch
    });
  } catch (e) {
    // Non-blocking
  }
};

/**
 * Standard Shortcut: Track InitiateCheckout when user clicks any buy/checkout button
 */
export const trackInitiateCheckout = (extraData?: Record<string, any>) => {
  trackPixelEvent("InitiateCheckout", {
    content_name: "Portal 1000 Nikmat Allah",
    content_category: "Digital Product",
    content_ids: ["portal-1000-nikmat"],
    value: 89000,
    currency: "IDR",
    ...extraData,
  });
};
