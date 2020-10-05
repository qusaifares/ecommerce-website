import React from 'react';
import './SectionHeader.css';

interface Props {
  title: string;
  align?: 'right' | 'center' | 'left';
  noHr?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, align, noHr }) => {
  return (
    <div className={`sectionHeader text-${align ?? 'center'}`}>
      <h2 className="sectionHeader__title">{title}</h2>
      {!noHr && <hr className="sectionHeader__hr" />}
    </div>
  );
};

export default SectionHeader;
