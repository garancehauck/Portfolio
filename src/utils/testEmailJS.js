
import { EMAILJS_CONFIG } from "../config/emailjs";

export const emailJSConfig = () => {
  const isConfigured =
    Boolean(EMAILJS_CONFIG.SERVICE_ID) &&
    Boolean(EMAILJS_CONFIG.TEMPLATE_ID) &&
    Boolean(EMAILJS_CONFIG.PUBLIC_KEY);

  if (!isConfigured) {
    console.error("Problème de configuration EmailJS !");
  }

  return isConfigured;
};
