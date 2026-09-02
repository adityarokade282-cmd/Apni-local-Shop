import { useMemo, useState } from 'react';
import { Search, Tag } from 'lucide-react';
import { PRODUCTS, CATEGORIES, type Category, type Product } from '@/data/shop';
import { openWhatsApp, productEnquiryMessage } from '@/utils/whatsapp';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Filter = 'All' | Category;

const FILTERS: Filter[] = ['All', ...CATEGORIES];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary-700 shadow-soft backdrop-blur">
          {product.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500">
          {product.description}
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          <Tag className="h-4 w-4 text-primary-500" />
          <span className="font-heading text-base font-bold text-gray-900">
            {product.price}
          </span>
        </div>
        <button
          onClick={() => openWhatsApp(productEnquiryMessage(product.name))}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-50 py-3 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-500 hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Enquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="products" className="bg-gray-50 py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
            Our Products
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Quality Products for Every Need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Browse our wide range of products across all categories. Can't find what you
            need? Send us a WhatsApp message.
          </p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-base text-gray-800 shadow-soft transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'border border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-gray-500">
              No products found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
