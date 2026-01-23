// This component displays the technology stack used in TruthLens, showcasing categorized tech items with descriptions and icons.

import React from 'react';

// Represents an individual technology item with name, role, description, and an icon.
type TechItem = {
  name: string;
  role: string;
  description: string;
  // For now we’ll use an emoji/lettermark as a placeholder icon.
  // Later you can swap this to an SVG component or next/image src.
  icon: React.ReactNode;
};

// Defines a category grouping multiple technology items under a common title.
type TechCategory = {
  title: string;
  items: TechItem[];
};

// Props for TechStack component. Categories are optional for reusability,
// defaulting to a predefined set of frontend technologies.
interface TechStackProps {
  // Optional so this component can be reused later,
  // but we’ll default to the “Frontend” example from your screenshot.
  categories?: TechCategory[];
}

{// Default tech stack categories and items
}

// Provides fallback tech stack data if no categories prop is passed.
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

// Displays the tech stack section, rendering categories and their respective items.
// Designed to be reusable by accepting optional categories prop.
const TechStack: React.FC<TechStackProps> = ({ categories = defaultCategories }) => {
  return (
    // Wraps the entire Tech Stack section with padding and full width.
    <section className="w-full px-6 py-20">
      {/* Section Title */}
      {/* Main heading for the Tech Stack section */}
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Tech Stack
        </h2>

        {/* Categories */}
        {/* Render each technology category with its title and items */}
        <div className="mt-10 space-y-14">
          {categories.map((category) => (
            <div key={category.title} className="text-center">
              <h3 className="text-xl font-semibold text-white/90 md:text-2xl">
                {category.title}
              </h3>

              {/* Cards Grid */}
              {/* Layout grid for tech items; single column on small screens, two columns on medium+ */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  // Individual tech card displaying icon and text details
                  <article
                    key={item.name}
                    className="flex items-center gap-5 rounded-3xl bg-white/70 p-6 text-left shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                  >
                    {/* Icon */}
                    {/* Visual representation of the technology */}
                    <div className="shrink-0">{item.icon}</div>

                    {/* Text */}
                    {/* Contains name, role, and description of the tech item */}
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