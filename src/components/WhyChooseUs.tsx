import { BadgeCheck, IndianRupee, Store, Smile } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: 'Quality Products',
    description:
      'We carefully select every product to ensure you get only the best quality for your family.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Prices',
    description:
      'Reasonable, honest pricing with regular offers and combo deals that save you money.',
    color: 'from-accent-500 to-accent-700',
  },
  {
    icon: Store,
    title: 'Trusted Local Shop',
    description:
      'Serving the community for over 15 years — a name your family and neighbours can rely on.',
    color: 'from-warning-500 to-warning-700',
  },
  {
    icon: Smile,
    title: 'Friendly Customer Service',
    description:
      'Our team is always happy to help you find what you need with a warm, welcoming smile.',
    color: 'from-rose-500 to-rose-700',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            What Makes Us Different
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            We're not just a shop — we're a part of your daily life. Here's why our
            customers keep coming back.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <benefit.icon className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
