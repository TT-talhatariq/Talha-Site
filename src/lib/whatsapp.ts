/** Support line that answers buyers on WhatsApp. */
export const SUPPORT_WHATSAPP = '923257367496';

/** wa.me link that opens a chat with support, message prefilled. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${SUPPORT_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
