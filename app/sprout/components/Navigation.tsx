import { Section } from '../types';

interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Navigation({ sections, activeSection, onSectionClick }: NavigationProps) {
  return (
    <div className="hidden md:block sticky top-8 top-32 w-[200px] md:w-[250px]">
      <nav>
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section.id} className="flex items-center">
              {activeSection === section.id && (
                <span className="inline-block w-3 h-3 rounded-sm bg-melo-blue mr-2" />
              )}
              <button
                onClick={() => onSectionClick(section.id)}
                className={`text-left text-base md:text-[21px] transition-all duration-200 w-full truncate ${
                  activeSection === section.id
                    ? 'text-melo-blue font-bold'
                    : 'text-black font-normal hover:text-melo-blue'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button className="mt-16 bg-black text-white px-6 py-3 text-base md:text-[20px] font-normal hover:bg-gray-800 transition-colors w-full">
        read the paper
      </button>
    </div>
  );
} 