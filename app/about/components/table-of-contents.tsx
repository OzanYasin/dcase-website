"use client";

interface TableOfContentsProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
}

export function TableOfContents({
  activeSection,
  setActiveSection,
}: TableOfContentsProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Adjust this value based on your layout (e.g., fixed header height)
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // Update active section after scroll animation completes
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 500); // Adjust this timeout if needed to match your scroll duration
    }
  };

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
    },
    {
      id: "vision",
      title: "Our Vision",
    },
    {
      id: "expertise",
      title: "Over 25 Years of Combined Expertise",
    },
    {
      id: "innovation",
      title: "Revolutionizing ITSM through Innovation",
    },
  ];

  return (
    <nav className="to-dcase-secondary/10 sticky top-[15%] h-screen w-96 border-r border-gray-100 bg-gradient-to-b from-white p-12">
      <div className="space-y-1">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`relative transition-all duration-300 ease-in-out ${activeSection === section.id ? "mb-4" : ""}`}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full rounded-lg p-4 text-left text-lg transition-all duration-300 ease-in-out ${
                activeSection === section.id
                  ? "bg-dcase/10 font-medium text-dcase"
                  : "text-gray-600 hover:bg-dcase/5 hover:text-dcase"
              } `}
            >
              {section.title}
            </button>
            {activeSection === section.id && (
              <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-dcase" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
