"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

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

  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = 443;
  const imageHeight = isMobile ? 315 : 500;

  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    backgroundImage: `url(${hoveredImage || defaultImage})`,
  };

  const imageStyleModal = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    backgroundImage: `url(${clickedImage || defaultImage})`,
  };

  return (
    <div>
      <div className="w-_553 flex gap-8">
        <div className="flex flex-col gap-2">
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
        <div className="flex h-full items-center justify-between px-20">
          <div className="flex w-full justify-center">
            <div style={imageStyleModal} className="modal-product-image"></div>
          </div>
          <div className="w-96">
            <div className="mb-8 flex flex-col text-sm">
              {additionalInformation?.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </div>
            <div className="flex gap-4">
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
