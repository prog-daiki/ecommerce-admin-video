"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react";


const SetupPage = () => {
  const storeModal = useStoreModal();

  useEffect(() => {
    if (!storeModal.isOpen) {
      storeModal.onOpen();
    }
  }, [storeModal.isOpen, storeModal.onOpen])

  return null;
}

export default SetupPage
