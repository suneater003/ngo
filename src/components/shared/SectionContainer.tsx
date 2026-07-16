
import './SectionContainer.css';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light';
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  id
}) => {
  return (
    <section id={id} className={`section-container bg-${background} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};
