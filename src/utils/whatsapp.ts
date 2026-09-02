import { SHOP } from '@/data/shop';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SHOP.whatsapp}?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer');
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello, I found your shop website. I would like to know more about your products.';

export function productEnquiryMessage(productName: string): string {
  return `Hello, I am interested in ${productName}. Please share the price and availability.`;
}

export function offerEnquiryMessage(offerTitle: string): string {
  return `Hello, I saw the "${offerTitle}" offer on your website. I would like to know more about it.`;
}

export function contactFormMessage(name: string, phone: string, message: string): string {
  return `Hello, my name is ${name}. My phone number is ${phone}.%0A%0A${message}`;
}
