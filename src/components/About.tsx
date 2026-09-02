import { Heart, Users, MapPin, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATS = [
  { icon: Users, value: '5000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Years of Trust' },
  { icon: MapPin, value: '1', label: 'Local Location' },
  { icon: Heart, value: '100%', label: 'Satisfaction' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 to-accent-100 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/8422731/pexels-photo-8422731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Friendly service at Apni Local Shop"
                className="h-[400px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              About Us
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your Trusted Neighbourhood Shop
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              For over 15 years, <strong className="text-gray-900">Apni Local Shop</strong> has
              been proudly serving the community in Maharashtra with quality products,
              reasonable prices, and a warm, friendly atmosphere. We believe a local shop
              is more than just a store — it's a part of the neighbourhood.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              From fresh groceries to daily essentials, we stock everything your family
              needs. Our team is always ready to help you find what you're looking for and
              make sure you leave with a smile.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-center transition-all hover:border-primary-200 hover:bg-primary-50"
                >
                  <stat.icon className="mx-auto h-6 w-6 text-primary-600" />
                  <p className="mt-2 font-heading text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
