export const SHOP = {
  name: 'Apni Local Shop',
  tagline: 'Everything You Need, Right Near You',
  location: 'Pune, Maharashtra',
  address: 'Shop No. 12, Main Road, Pune, Maharashtra 411001',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.05044762305!2d73.7805!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9d7b2!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000',
};

export type Category =
  | 'Groceries'
  | 'Household Items'
  | 'Personal Care'
  | 'Snacks & Beverages'
  | 'Daily Essentials'
  | 'Other Products';

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  'Groceries',
  'Household Items',
  'Personal Care',
  'Snacks & Beverages',
  'Daily Essentials',
  'Other Products',
];

export const PRODUCTS: Product[] = [
  // Groceries
  {
    id: 1,
    name: 'Fresh Vegetables',
    category: 'Groceries',
    description: 'Farm-fresh vegetables sourced daily from local farms.',
    price: '₹40 / kg',
    image: 'https://images.pexels.com/photos/33622710/pexels-photo-33622710.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 2,
    name: 'Seasonal Fruits',
    category: 'Groceries',
    description: 'Hand-picked seasonal fruits, sweet and juicy.',
    price: '₹80 / kg',
    image: 'https://images.pexels.com/photos/10550259/pexels-photo-10550259.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Groceries',
    description: 'Premium long-grain basmati rice, perfect for biryani.',
    price: '₹120 / kg',
    image: 'https://images.pexels.com/photos/16620746/pexels-photo-16620746.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  // Household Items
  {
    id: 4,
    name: 'Cleaning Supplies Kit',
    category: 'Household Items',
    description: 'Complete cleaning kit with brushes, mop, and cleaners.',
    price: '₹299',
    image: 'https://images.pexels.com/photos/9230463/pexels-photo-9230463.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 5,
    name: 'Laundry Baskets',
    category: 'Household Items',
    description: 'Durable, colourful laundry baskets for everyday use.',
    price: '₹250',
    image: 'https://images.pexels.com/photos/12104070/pexels-photo-12104070.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 6,
    name: 'Home Care Set',
    category: 'Household Items',
    description: 'Broom, wiper, and cleaning cloth combo for your home.',
    price: '₹199',
    image: 'https://images.pexels.com/photos/32330298/pexels-photo-32330298.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  // Personal Care
  {
    id: 7,
    name: 'Herbal Shampoo',
    category: 'Personal Care',
    description: 'Natural herbal shampoo for healthy, shiny hair.',
    price: '₹150',
    image: 'https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 8,
    name: 'Organic Soap Bars',
    category: 'Personal Care',
    description: 'Handcrafted organic soap bars with natural ingredients.',
    price: '₹60 / bar',
    image: 'https://images.pexels.com/photos/29502139/pexels-photo-29502139.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 9,
    name: 'Hygiene Dispenser Set',
    category: 'Personal Care',
    description: 'Wall-mounted dispensers for soap, shampoo, and lotion.',
    price: '₹350',
    image: 'https://images.pexels.com/photos/8634408/pexels-photo-8634408.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  // Snacks & Beverages
  {
    id: 10,
    name: 'Snack Combo Pack',
    category: 'Snacks & Beverages',
    description: 'Assorted chips, namkeen, and cookies combo for the family.',
    price: '₹199',
    image: 'https://images.pexels.com/photos/4617834/pexels-photo-4617834.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 11,
    name: 'Crispy Tortilla Chips',
    category: 'Snacks & Beverages',
    description: 'Golden, crispy tortilla chips — perfect for snacking.',
    price: '₹45',
    image: 'https://images.pexels.com/photos/5855242/pexels-photo-5855242.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 12,
    name: 'Cold Drink Variety Pack',
    category: 'Snacks & Beverages',
    description: 'Mix of popular soft drinks and juices. Chilled and ready.',
    price: 'Ask for Price',
    image: 'https://images.pexels.com/photos/9069278/pexels-photo-9069278.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  // Daily Essentials
  {
    id: 13,
    name: 'Wheat Flour (Atta)',
    category: 'Daily Essentials',
    description: 'Stone-ground whole wheat flour for soft rotis.',
    price: '₹55 / kg',
    image: 'https://images.pexels.com/photos/8961863/pexels-photo-8961863.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 14,
    name: 'Cooking Oil & Spices',
    category: 'Daily Essentials',
    description: 'Daily-use cooking oil with essential spice combos.',
    price: '₹180',
    image: 'https://images.pexels.com/photos/7111399/pexels-photo-7111399.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 15,
    name: 'Fresh Produce Basket',
    category: 'Daily Essentials',
    description: 'Daily basket of vegetables and fruits for your kitchen.',
    price: '₹150',
    image: 'https://images.pexels.com/photos/9070106/pexels-photo-9070106.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  // Other Products
  {
    id: 16,
    name: 'Festive Gift Hamper',
    category: 'Other Products',
    description: 'Beautifully packed gift hampers for festivals and occasions.',
    price: '₹499',
    image: 'https://images.pexels.com/photos/33315774/pexels-photo-33315774.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 17,
    name: 'Wellness & Beauty Range',
    category: 'Other Products',
    description: 'Curated selection of wellness and beauty products.',
    price: 'Ask for Price',
    image: 'https://images.pexels.com/photos/27781696/pexels-photo-27781696.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    id: 18,
    name: 'Gift & Snack Combo Set',
    category: 'Other Products',
    description: 'Assorted gift sets with snacks and decorative items.',
    price: '₹399',
    image: 'https://images.pexels.com/photos/33315959/pexels-photo-33315959.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

export interface Offer {
  id: number;
  title: string;
  badge: string;
  description: string;
  discount: string;
  color: string;
}

export const OFFERS: Offer[] = [
  {
    id: 1,
    title: "Today's Special",
    badge: 'Today Only',
    description: 'Get 20% off on all fresh vegetables and fruits. Limited stock!',
    discount: '20% OFF',
    color: 'from-primary-500 to-primary-700',
  },
  {
    id: 2,
    title: 'Weekly Offers',
    badge: 'Every Week',
    description: 'Special discounts on household items every Monday to Friday.',
    discount: 'Up to 15% OFF',
    color: 'from-accent-500 to-accent-700',
  },
  {
    id: 3,
    title: 'Combo Deals',
    badge: 'Best Value',
    description: 'Buy grocery + household combo and save big on your monthly shopping.',
    discount: 'Save ₹200+',
    color: 'from-warning-500 to-warning-700',
  },
  {
    id: 4,
    title: 'Festival Offers',
    badge: 'Seasonal',
    description: 'Celebrate festivals with special gift hampers and exclusive discounts.',
    discount: 'Up to 30% OFF',
    color: 'from-rose-500 to-rose-700',
  },
];
