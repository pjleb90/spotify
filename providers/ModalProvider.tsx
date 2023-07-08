'use client';

import { useEffect, useState } from "react";


const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);


// prevent hydration (modals cant be opened during server side rendering)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        Modals
    </>
  );
}

export default ModalProvider;