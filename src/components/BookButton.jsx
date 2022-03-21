import React from 'react';
import Button from './Button';

const BookButton = ({ className }) => (
  <Button
    className={className}
    href="https://reservation.ke-booking.com/acc/v2/show?tok=Pbb531d60f3d422680253fea8&pid=P9892150&klang=fr&krc=98defd6ee70dfb1dea416cecdf391f58"
    target="_blank"
    rel="noopener noreferrer"
  >
    Réservez
  </Button>
);

export default BookButton;
