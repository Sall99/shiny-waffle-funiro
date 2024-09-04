"use client";
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import "./index.css";

export const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const targetImageRef = useRef<HTMLDivElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState<number>(0);
  const requestRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const currentGallery = galleryRef.current;
    if (!currentGallery) return;

    const rect = currentGallery.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    if (mouseX < 100) {
      setScrollDirection(-1);
    } else if (mouseX > rect.width - 100) {
      setScrollDirection(1);
    } else {
      setScrollDirection(0);
    }
  };

  const scrollContent = () => {
    if (galleryRef.current && scrollDirection !== 0) {
      galleryRef.current.scrollBy({
        left: scrollDirection * 2,
      });
    }
    requestRef.current = requestAnimationFrame(scrollContent);
  };

  useEffect(() => {
    if (scrollDirection !== 0) {
      requestRef.current = requestAnimationFrame(scrollContent);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
    };
  }, [scrollDirection]);

  useEffect(() => {
    if (galleryRef.current && targetImageRef.current) {
      const gallery = galleryRef.current;
      const targetImage = targetImageRef.current;

      const galleryWidth = gallery.offsetWidth;
      const targetImageRect = targetImage.getBoundingClientRect();
      const targetImageLeft =
        targetImageRect.left - gallery.getBoundingClientRect().left;
      const targetImageWidth = targetImageRect.width;

      const scrollLeft =
        targetImageLeft - galleryWidth / 2 + targetImageWidth / 2;

      gallery.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      className="hide-scrollbar overflow-x-auto"
      ref={galleryRef}
      onMouseMove={handleMouseMove}
      style={{
        display: "flex",
        gap: "16px",
        padding: "10px",
        cursor: "pointer",
        scrollBehavior: "smooth",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725449933/shiny-waffle-funiro/Rectangle_36_rkrg51.jpg)`,
                width: `274px`,
                height: `382px`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725449933/shiny-waffle-funiro/Rectangle_38_obew7y.png)`,
                width: `451px`,
                height: "312px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="flex gap-4">
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725466536/shiny-waffle-funiro/Rectangle_37_oitmqq.png)`,
                width: `274px`,
                height: `382px`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725466533/shiny-waffle-funiro/Rectangle_39_vgfgyu.png)`,
                width: `344px`,
                height: "242px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div ref={targetImageRef}>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725466776/shiny-waffle-funiro/Rectangle_40_hxarm5.png)`,
              width: `295px`,
              height: `392px`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-end gap-4">
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725466922/shiny-waffle-funiro/Rectangle_45_tfg1yt.png)`,
                width: `290px`,
                height: `348px`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725466922/shiny-waffle-funiro/Rectangle_40_vl9iqy.png)`,
                width: `425px`,
                height: "448px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="flex gap-4">
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725467053/shiny-waffle-funiro/Rectangle_41_laibes.png)`,
                width: `178px`,
                height: `242px`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1725467054/shiny-waffle-funiro/Rectangle_44_bs3ei6.png)`,
                width: `258px`,
                height: "196px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
