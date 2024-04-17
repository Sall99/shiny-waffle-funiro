"use client";
import React, { useState } from "react";

import "./index.css";
import { Modal } from "@/components";

interface ImageProps {
  defaultImage: string;
  images: string[];
  additionalInformation: string[];
}

export default function Images({
  defaultImage,
  images,
  additionalInformation,
}: ImageProps) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [clickedImage, setClickedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const imageStyle = {
    backgroundImage: `url(${hoveredImage || defaultImage})`,
  };

  const imageStyleModal = {
    backgroundImage: `url(${clickedImage || defaultImage})`,
  };

  return (
    <div className="w-full">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row xl:w-_553">
        <div className="grid grid-cols-4  gap-2 md:flex md:flex-col">
          {images?.map((url, key) => (
            <div key={key} className="small-image-container">
              <div
                style={{
                  backgroundImage: `url(${url})`,
                }}
                className="small-image"
                onMouseEnter={() => setHoveredImage(url)}
                onMouseLeave={() => setHoveredImage(null)}
              ></div>
            </div>
          ))}
        </div>
        <div
          style={imageStyle}
          className="image"
          onClick={() => setIsOpen(true)}
        ></div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} variant="primary">
        <div className="flex h-full flex-col  items-center gap-8 overflow-y-auto lg:flex-row lg:justify-between lg:gap-0 lg:px-20">
          <div className="flex w-full justify-center">
            <div style={imageStyleModal} className="modal-product-image"></div>
          </div>
          <div className="md:w-96">
            <div className="mb-8 flex flex-col text-sm">
              {additionalInformation?.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-3">
              {images?.map((url, key) => (
                <div className="small-image-container" key={key}>
                  <div
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                    onClick={() => setClickedImage(url)}
                    className="modal-product-small-image"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
