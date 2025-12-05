import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type OSType = "ios" | "android" | "other";

export function getMobileOS(): OSType {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "other";
  }

  if (/android/i.test(userAgent)) {
    return "android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "ios";
  }

  return "other";
}

export function trackDownloadEvent(platform: "ios" | "android", source: "home" | "app_page") {
  // This is a placeholder for actual analytics integration (e.g., Google Analytics, Mixpanel)
  // In a real implementation, you would call window.gtag() or similar here
  console.log(`[Analytics] Download clicked: ${platform} from ${source}`);
  
  // Example for Google Analytics (commented out until GA is initialized)
  /*
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'app_download', {
      'event_category': 'engagement',
      'event_label': platform,
      'source_page': source
    });
  }
  */
}
