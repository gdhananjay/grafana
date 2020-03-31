import React, { FC, useState, useEffect } from 'react';
import { appEvents } from 'app/core/core';
import { CoreEvents } from 'app/types';

export const SearchWrapper: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    appEvents.on(CoreEvents.showDashSearch, () => setIsOpen(true));
    appEvents.on(CoreEvents.hideDashSearch, () => setIsOpen(false));
  }, []);

  return (
    isOpen && (
      <>
        <div className="search-backdrop" />

        <div className="search-container">Search</div>
      </>
    )
  );
};
