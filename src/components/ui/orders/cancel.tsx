import React from "react";
import { Modal } from "../modal";
import { Button } from "../button";
import toast from "react-hot-toast";
import { cancelOrder } from "@/actions";

interface Props {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onOrderCancelled: () => void;
}

export const CancelOrder = ({
  id,
  isOpen,
  setIsOpen,
  onOrderCancelled,
}: Props) => {
  const handleOrderCancel = () => {
    cancelOrder(id)
      .then((result) => {
        toast.success("accountCreated");
        onOrderCancelled();
      })
      .catch((error) => {
        toast.error("error");
      })
      .finally(() => {});
    onOrderCancelled();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} variant="tertiary">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Cancel My order</h2>
      </div>
      <div className="mb-4 flex justify-between">
        <p className="text-sm font-semibold text-gray-200">Order #{id}</p>
      </div>
      <div className="mt-10 flex gap-4">
        <Button
          label="Close"
          className="rounded-xl px-8 py-2"
          variant="primary"
        />
        <Button
          label="Confirmez"
          className="px-4 py-2"
          variant="cancel"
          onClick={handleOrderCancel}
        />
      </div>
    </Modal>
  );
};
