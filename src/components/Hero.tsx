import { MapPin, Clock, ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { SHOP } from '@/data/shop';
import { openWhatsApp, DEFAULT_WHATSAPP_MESSAGE } from '@/utils/whatsapp';

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-28 pb-20 sm:pt-32 lg:pt-40"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-start">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-soft backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-primary-500" />
            Trusted by 5000+ local customers
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Right Near You
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
            Your trusted neighbourhood shop in {SHOP.location} for groceries, household
            items, personal care, and daily essentials — all at reasonable prices with
            friendly service.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openWhatsApp(DEFAULT_WHATSAPP_MESSAGE)}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:shadow-glow hover:brightness-110"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </button>
            <button
              onClick={scrollToProducts}
              className="group flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-7 py-4 text-base font-semibold text-gray-800 transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
            >
              View Products
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Info chips */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-soft">
              <MapPin className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-semibold text-gray-800">{SHOP.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-soft">
              <Clock className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">Open Now</p>
                <p className="text-sm font-semibold text-gray-800">8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary-200 to-accent-200 opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/38698664/pexels-photo-38698664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Apni Local Shop interior"
                className="h-[400px] w-full object-cover sm:h-[500px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:-left-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">1000+ Products</p>
                <p className="text-xs text-gray-500">Fresh & affordable</p>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -top-3 -right-2 flex items-center gap-1.5 rounded-2xl bg-white px-4 py-2.5 shadow-card sm:-right-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning-500 text-warning-500" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative mt-16 overflow-hidden border-y border-gray-100 bg-white/50 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-12">
              {['Fresh Groceries', 'Daily Essentials', 'Household Items', 'Personal Care', 'Snacks & Beverages', 'Festival Offers'].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
