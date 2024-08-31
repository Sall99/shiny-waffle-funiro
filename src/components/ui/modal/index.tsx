"use client";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "tertiary";
}

export function Modal({ isOpen, setIsOpen, children, variant }: ModalProps) {
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
                "bg-white w-full transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all",
              variant === "secondary" && "mt-20",
              variant === "tertiary" && " mt-72 md:mt-36",
            )}
          >
            <div
              className={clsx(
                "flex justify-center p-4 text-center",
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
                <Dialog.Panel className="w-full max-w-_1171 transform overflow-hidden bg-white-100 p-6 text-left align-middle shadow-xl transition-all">
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
