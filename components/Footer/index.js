import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="text-sm text-lightGray flex flex-wrap p-4">
      <span className="mr-2">Terms of Service</span>
      <span className="mr-2">Privacy Policy</span>
      <span className="mr-2">Cookie Policy</span>
      <span className="mr-2">Cookie Policy</span>
      <span className="mr-2">
        More{' '}
        <FontAwesomeIcon icon="ellipsis-h" className="text-xs" fixedWidth />
      </span>
      <span className="mr-2">© 2021 Kwitter, Inc.</span>
    </footer>
  );
}
