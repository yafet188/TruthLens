import React from 'react';

type TechItem = {
  name: string;
  role: string;
  description: string;
  // For now we’ll use an emoji/lettermark as a placeholder icon.
  // Later you can swap this to an SVG component or next/image src.
  icon: React.ReactNode;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

interface TechStackProps {
  // Optional so this component can be reused later,
  // but we’ll default to the “Frontend” example from your screenshot.
  categories?: TechCategory[];
}

{// Default tech stack categories and items
}

const defaultCategories: TechCategory[] = [
  {
    title: 'Frontend',
    items: [
      {
        name: 'React.js',
        role: 'Frontend Framework',
        description:
          'Build reusable, component-based user interfaces for interactive and scalable frontend development.',
        icon: (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-2xl">
            ⚛️
          </div>
        ),
      },
      {
        name: 'Tailwind CSS',
        role: 'Styling Framework',
        description:
          'Apply utility-first styles to build responsive, consistent UI quickly across the product.',
        icon: (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/60 text-2xl">
            🌊
          </div>
        ),
      },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({ categories = defaultCategories }) => {
  return (
    <section className="w-full px-6 py-20">
      {/* Section Title */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Tech Stack
        </h2>

        {/* Categories */}
        <div className="mt-10 space-y-14">
          {categories.map((category) => (
            <div key={category.title} className="text-center">
              <h3 className="text-xl font-semibold text-white/90 md:text-2xl">
                {category.title}
              </h3>

              {/* Cards Grid */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex items-center gap-5 rounded-3xl bg-white/70 p-6 text-left shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                  >
                    {/* Icon */}
                    <div className="shrink-0">{item.icon}</div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h4 className="text-xl font-semibold text-black md:text-2xl">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-black/60">
                        {item.role}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-black/70">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;