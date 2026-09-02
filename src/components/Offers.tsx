import { Sparkles, ArrowRight } from 'lucide-react';
import { OFFERS } from '@/data/shop';
import { openWhatsApp, offerEnquiryMessage } from '@/utils/whatsapp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Offers() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="offers" className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-warning-100 px-4 py-1.5 text-sm font-semibold text-warning-700">
            <Sparkles className="h-4 w-4" />
            Special Offers
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Deals You Don't Want to Miss
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Save big on your favourite products with our latest offers and combo deals.
          </p>
        </div>

        {/* Offer cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${offer.color} p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
            >
              {/* Decorative circle */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-110" />

              <div className="relative">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur">
                  {offer.badge}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold">{offer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {offer.description}
                </p>
                <p className="mt-4 font-heading text-2xl font-extrabold">{offer.discount}</p>
                <button
                  onClick={() => openWhatsApp(offerEnquiryMessage(offer.title))}
                  className="mt-5 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2.5 text-sm font-semibold backdrop-blur transition-all hover:bg-white hover:text-gray-900"
                >
                  Grab This Offer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
