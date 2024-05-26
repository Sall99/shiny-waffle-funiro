"use client";
import { Fragment, ReactNode } from "react";
import { BsCartX } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary";
}

export function ModalCart({
  isOpen,
  setIsOpen,
  children,
  variant,
}: ModalProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-500" />
          </Transition.Child>

          <div
            className={clsx(
              "fixed inset-0 overflow-y-auto",
              variant === "primary" &&
                "bg-white w-full transform overflow-hidden text-left align-middle shadow-xl transition-all",
              variant === "secondary" && "mt-20",
            )}
          >
            <div
              className={clsx(
                "flex justify-end text-center",
                variant === "primary" && "h-full",
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-_417 transform overflow-hidden bg-white-100 p-6 pr-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-white flex items-center justify-between text-base/7 font-medium"
                  >
                    <div className="border-b border-b-gray-300 pb-4 pr-8">
                      Shopping Cart
                    </div>{" "}
                    <BsCartX
                      className="hover:cursor-pointer"
                      onClick={closeModal}
                    />
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
