import { Section } from '../types';

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -20;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const handleScroll = (
  sections: Section[],
  setActiveSection: (section: string) => void,
  setActiveSubsection: (subsection: string) => void
) => {
  const scrollPosition = window.scrollY + 100;

  // Find the current section and subsection
  for (const section of sections) {
    const sectionElement = document.getElementById(section.id);
    if (!sectionElement) continue;

    const sectionTop = sectionElement.offsetTop;
    const sectionBottom = sectionTop + sectionElement.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      setActiveSection(section.id);

      // Clear subsection if this section has no subsections
      if (!section.subsections || section.subsections.length === 0) {
        setActiveSubsection('');
        break;
      }

      // Check subsections
      let foundSubsection = false;
      for (const subsection of section.subsections) {
        const subsectionElement = document.getElementById(subsection.id);
        if (!subsectionElement) continue;

        const subsectionTop = subsectionElement.offsetTop;
        const subsectionBottom = subsectionTop + subsectionElement.offsetHeight;

        if (scrollPosition >= subsectionTop && scrollPosition < subsectionBottom) {
          setActiveSubsection(subsection.id);
          foundSubsection = true;
          break;
        }
      }
      
      // Clear subsection if none are in view
      if (!foundSubsection) {
        setActiveSubsection('');
      }
      
      break;
    }
  }
}; 