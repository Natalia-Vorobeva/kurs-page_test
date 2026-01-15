import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds, offset = 70) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const scrollPosition = window.scrollY + offset;

      // Находим секцию, которая находится в области видимости
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = id;
            break;
          }
        }
      }

      // Если мы в самом верху страницы, сбрасываем активную секцию
      if (scrollPosition < 100) {
        current = '';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Вызываем сразу, чтобы установить активную секцию при загрузке
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;