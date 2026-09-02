import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SHOP } from '@/data/shop';
import { openWhatsApp, contactFormMessage } from '@/utils/whatsapp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    openWhatsApp(contactFormMessage(name, phone, message));
    setSent(true);
    setName('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Contact Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Get in Touch With Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Have a question or want to place an order? Reach out — we'd love to hear from
            you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Contact info + map */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary-200 hover:bg-primary-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Address</p>
                    <p className="text-sm font-medium text-gray-800">{SHOP.address}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary-200 hover:bg-primary-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Phone</p>
                    <a
                      href={`tel:${SHOP.phone.replace(/\s/g, '')}`}
                      className="text-sm font-medium text-gray-800 hover:text-primary-700"
                    >
                      {SHOP.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary-200 hover:bg-primary-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-500 text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">WhatsApp</p>
                    <p className="text-sm font-medium text-gray-800">{SHOP.phone}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-primary-200 hover:bg-primary-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-warning-500 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Hours</p>
                    <p className="text-sm font-medium text-gray-800">Mon–Fri: 8AM–9PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours detail */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
              <h3 className="font-heading text-base font-bold text-gray-900">Opening Hours</h3>
              <ul className="mt-3 space-y-2">
                {SHOP.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-gray-50 pb-2 text-sm last:border-0"
                  >
                    <span className="font-medium text-gray-600">{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <iframe
                title="Shop location on Google Maps"
                src={SHOP.mapEmbed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-primary-50 p-6 shadow-soft sm:p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900">Send Us a Message</h3>
            <p className="mt-1.5 text-sm text-gray-500">
              Fill in the form below and we'll get back to you via WhatsApp.
            </p>

            {sent && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-success-100 px-4 py-3 text-sm font-semibold text-success-700">
                <CheckCircle2 className="h-5 w-5" />
                Message sent! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-800 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:shadow-glow hover:brightness-110"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
