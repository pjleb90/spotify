'use client';

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";


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
        <Modal
          title="test modal"
          description="description"
          isOpen
          onChange={() => {}}
        >
          test children
        </Modal>
    </>
  );
}

export default ModalProvider;