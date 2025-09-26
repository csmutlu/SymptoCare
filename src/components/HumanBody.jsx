import React from "react";

const HumanBody = ({
  selectedPart,
  onPartSelect,
  hoveredPart,
  setHoveredPart,
}) => {
  const getPartClass = (partId) => {
    let classes = "body-part";
    if (partId === selectedPart) classes += " selected";
    else if (partId === hoveredPart) classes += " hovered";
    else classes += " default";
    return classes;
  };
  return (
    <div className="panel-body">
      <svg viewBox="0 0 460 1010" className="human-body-svg">
        <path
          d="M430.6,497.1c-3-5-11.9-10.6-21.8-13.7c-8.8-24.9-7.6-87.3-11.8-108c-2.8-13.5-10.6-26.4-12.2-31.7 c1.1-20.1-6.3-41.1-8.5-55.5c-1.2-8,0.4-23.8-0.3-35.8c-1.1-19-5.1-39.4-12.9-50.8c-6.7-9.7-25-18.5-37.6-20.9 c-6.2-1.1-20-0.8-27.3-3.5c-4.6-1.7-27.2-12.7-34.5-20.8c-2-7.3-3-26.7-3.3-31c1.3-1.1,2.9-2.6,4.1-3.6c3.7-3.2,6-22.4,7-27.7 c2.9,0.8,6.2,0.3,7.7-3.9c1.6-4.2,3.1-12.2,4.7-19.2c1.3-5.9-5.3-6.3-9-6.2c0.9-3.2,1.3-13,1.9-17.8c0.5-4.7-5.2-32.9-9.4-34.5 c-4.2-1.6-10.9-1.6-10.9-1.6s-4.2-4.4-8.4-5.4C246.2,5.1,236.7,5,230,5s-12.1,0.6-18.3,1.8c-4.4,0.9-14.7,4-19.1,7 c-3.7,2.6-10,28.5-9.4,33.2c0.5,4.7,1,14.6,1.9,17.8c-3.7-0.1-10.3,0.3-9,6.2c1.6,7,3.1,15,4.7,19.2c1.6,4.2,4.8,4.8,7.7,3.9 c1,5.3,3.3,24.5,7,27.7c1.2,1,2.8,2.5,4.1,3.6c-0.3,4.3-1.3,23.7-3.3,31c-7.3,8.1-29.9,19.1-34.5,20.8c-7.2,2.7-21.1,2.4-27.3,3.5 c-12.6,2.3-30.9,11.2-37.6,20.9C89,213,85.1,233.4,84,252.4c-0.7,12.1,0.9,27.8-0.3,35.8c-2.2,14.3-9.6,35.4-8.5,55.5 c-1.6,5.2-9.4,18.2-12.2,31.7c-4.3,20.7-3,83.1-11.8,108c-9.9,3-18.8,8.7-21.8,13.7c-6.8,11.2-17.1,22.8-23.1,28.7 c1.3,1.3,6,2.7,11.6,0.3c3.2-1.3,9.7-7,14.7-10.2c-0.9,6.9-3.6,22.3-4.1,28.7c-0.9,10.3,0.7,21.9,1.9,28.9c0.5,3.2,5,4.9,7,1.5 c0.1,2.1-0.2,5.6,0.8,7.5c1.5,2.6,8,5,11.1-1.5c4.7,4.1,8.5,1.3,9.7-1.2c1-2,2.3-6.1,3.6-9.6c3.2,2.3,7.3,1.9,8.2-0.4 c2.4-6.3,5.4-23.7,7.5-31c1.9-6.8,2.7-35,1.2-45.9c5.8-23.8,29.6-63.5,39-98.6c4.2-15.6,6.3-31.6,8.3-44.7 c1.6-10,7.6-31.2,9.6-46.5c4,14.9,8.2,32.4,13.5,44.5c1.8,13.2,2.2,59.3,2.5,68.1c-2.5,7.5-6.2,14.4-8.2,22 c-1.7,6.2-3.3,26.1-3.8,30.8c-0.5,4.7-6.7,41.3-7.3,49.7c-0.5,8.4,0.3,76,3,104.4c2.6,28.4,18.3,71.1,27.7,86.7 c-0.6,12.8-0.2,25.5-0.7,32.8c-4.9,13.3-11.7,34.1-10.7,54.6s29.4,112.5,29.4,134.3c0,8-3.7,15.7-5.5,18.9c-2,3.5-2,14.7-6.2,19.4 c-5.9,6.7-10.7,15.8-15.2,21.5c-2.8,2-5.8,4.8-6.3,5.5c-1.1,1.5-1.1,7.1,1.8,8.6h58.8c5.9-2.6,7.4-13.5,6.3-17.4 c-1-3.6-3.7-15.4-3.7-19.1c0-3.7-0.8-13.1-0.8-15.8c0-4.2-2.4-12.9-2.4-19.3c0-15.9,9.4-102.8,10.2-121.3 c0.7-17.6-7.6-47.8-11.5-65c1.7-12.8,2.8-33.3,2.2-45c4.5-12.3,6.8-33.4,8-48.4c1.2-16.5,3.7-108.6,3.7-108.6s1.7,0.8,9,0.8 s9-0.8,9-0.8s2.4,92.1,3.7,108.6c1.1,15,3.5,36.1,8,48.4c-0.6,11.7,0.6,32.2,2.2,45c-3.9,17.2-12.3,47.5-11.5,65 c0.8,18.4,10.2,105.4,10.2,121.3c0,6.4-2.4,15.1-2.4,19.3c0,2.7-0.8,12.1-0.8,15.8s-2.7,15.5-3.7,19.1c-1.1,3.8,0.4,14.8,6.3,17.4 H310c2.9-1.5,2.9-7.1,1.8-8.6c-0.5-0.6-3.4-3.5-6.3-5.5c-4.5-5.8-9.4-14.8-15.2-21.5c-4.2-4.8-4.2-16-6.2-19.4 c-1.8-3.2-5.5-10.9-5.5-18.9c0-21.8,28.3-113.8,29.4-134.3c1-20.5-5.8-41.2-10.7-54.6c-0.5-7.2-0.1-20-0.7-32.8 c9.4-15.5,25.1-58.3,27.7-86.7c2.6-28.3,3.5-96,3-104.4c-0.5-8.4-6.7-45-7.2-49.7s-2.1-24.6-3.8-30.8c-2.1-7.6-5.7-14.5-8.2-22 c0.3-8.7,0.7-54.8,2.5-68.1c5.3-12.1,9.5-29.7,13.5-44.5c2,15.3,8,36.6,9.6,46.5c2,13.1,4.2,29.1,8.3,44.7 c9.4,35.1,33.2,74.8,39,98.6c-1.5,10.9-0.7,39.2,1.2,45.9c2.1,7.3,5.1,24.7,7.5,31c0.9,2.3,4.9,2.8,8.2,0.4 c1.3,3.5,2.6,7.6,3.6,9.6c1.2,2.5,5.1,5.3,9.7,1.2c3.1,6.5,9.6,4.1,11.1,1.5c1-1.8,0.7-5.4,0.8-7.5c2.1,3.4,6.5,1.8,7-1.5 c1.2-7,2.8-18.7,1.9-28.9c-0.5-6.4-3.2-21.7-4.1-28.7c5,3.2,11.5,8.8,14.7,10.2c5.6,2.3,10.3,0.9,11.6-0.3 C447.7,519.9,437.4,508.3,430.6,497.1z"
          fill="#E3F4FF"
          stroke="#2075D3"
          strokeWidth="5.3558"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <g id="interactive-parts" onMouseLeave={() => setHoveredPart(null)}>
          <path
            id="head"
            className={getPartClass("head")}
            onClick={() => onPartSelect("head")}
            onMouseEnter={() => setHoveredPart("head")}
            d="M185.1,64.9c-3.7-0.1-10.3,0.3-9,6.2c1.6,7,3.1,15,4.7,19.2s4.8,4.8,7.7,3.9h0.2l3.6,22.8 l21.4,15.9c1.2,0.9,2.6,1.4,4.1,1.5l1.8,0.1c6.3,0.5,12.6,0.5,18.9,0.1l3.8-0.3c1.6-0.1,3.1-0.7,4.3-1.7l20.7-15.8l4.1-22.6 c2.9,0.9,6.1,0.3,7.6-3.9c1.6-4.2,3.1-12.2,4.7-19.2c1.3-5.9-5.3-6.3-9-6.2c0,0,0,0,0,0c0.9-3.2,1.6-13,2.1-17.8 c0.5-4.7-5.2-32.9-9.4-34.5S256.5,11,256.5,11s-4.2-4.4-8.4-5.4C246.2,5.1,236.7,5,230,5c-6.7,0-12.1,0.6-18.3,1.8 c-4.4,0.9-14.7,4-19.1,7c-3.7,2.6-10,28.5-9.4,33.2c0.4,3.2,1.1,13.1,1.1,13.1l1.2,4.7L185.1,64.9z"
          />
          <path
            id="neck"
            className={getPartClass("neck")}
            onClick={() => onPartSelect("neck")}
            onMouseEnter={() => setHoveredPart("neck")}
            d="M239.2,190l7.6-2.5c8.6-3.5,25.7-4,31.5-2.3c4.6,1.4,5.9,1.5,13.7-1.1c5.9-1.9,19.5-3.2,25.6-3.7 l0.2-0.4c-6.5-0.5-14.5-0.9-19.5-2.7c-4.6-1.7-27.2-12.7-34.5-20.8c-2-7.3-3.3-31-3.3-31l-0.6-3l-13.4,10.3c-1.2,1-2.8,1.5-4.3,1.7 l-3.8,0.3c-6.3,0.4-12.6,0.4-18.9-0.1l-1.8-0.1c-1.5-0.1-2.9-0.7-4.1-1.5L200,122.9l-0.3,2.7c0,0-1.3,23.7-3.3,31 c-7.3,8.1-29.9,19.1-34.5,20.8c-5.2,1.9-13.8,2.3-20.5,2.8v0.1c3.3,0.2,21,1.6,28.1,3.9c7.8,2.5,9.1,2.4,13.7,1.1 c5.9-1.7,22.9-1.2,31.5,2.3l6.3,2.1c1.3,3.6,4.5,7.9,9.2,7.9h0.1C234.6,197.4,237.8,193.5,239.2,190z"
          />
          <path
            id="chest"
            className={getPartClass("chest")}
            onClick={() => onPartSelect("chest")}
            onMouseEnter={() => setHoveredPart("chest")}
            d="M318.8,180.3c-5.2,0.4-20.4,1.7-26.8,3.8c-7.8,2.5-9.1,2.4-13.7,1.1c-5.9-1.7-22.9-1.2-31.5,2.3 l-7.6,2.5c-1.4,3.5-4.5,7.5-9,7.5H230c-4.7,0-7.9-4.3-9.2-7.9l-6.3-2.1c-8.6-3.5-25.7-4-31.5-2.3c-4.6,1.4-5.9,1.5-13.7-1.1 c-7.1-2.3-25-3.6-28.1-3.9c-0.1,0.7-0.7,4.6-1.7,10.5c-2.6,15.8-16.1,20.4-1.8,117.4c1,3.9,2,7.9,3.1,11.8v0.2c0.5,2,1.1,4,1.6,6 c15.2-11.2,42.6-13.4,62.1-13.1l0,0c14.4,0.2,25.3,1.6,25.3,1.6s10.9-1.4,25.3-1.6l0,0c19.6-0.2,46.9,1.9,62.1,13.1 c0.6-2,1.1-4,1.6-6v-0.2c1.1-4,2.1-7.9,3.1-11.8c14.3-97,0.9-101.6-1.8-117.4C319.6,185.1,319,181.2,318.8,180.3z"
          />
          <path
            id="abdomen"
            className={getPartClass("abdomen")}
            onClick={() => onPartSelect("abdomen")}
            onMouseEnter={() => setHoveredPart("abdomen")}
            d="M284.9,449.8c6.2-7,18.9-18.3,26.2-24.8c-1.3-3-2.5-6.1-3.6-9.2c0.3-8.7,0.7-54.8,2.5-68.1 c2.6-6,7.2-20.9,7.3-21.7c-15.2-11.2-42.6-13.4-62.1-13.1l0,0c-14.4,0.2-25.3,1.6-25.3,1.6s-11-1.4-25.3-1.6l0,0 c-19.6-0.2-46.9,1.9-62.1,13.1c2.2,7.9,4.7,15.5,7.4,21.7c1.8,13.2,2.2,59.3,2.5,68.1c-1.1,3.2-2.3,6.2-3.6,9.2 c7.3,6.5,20,17.8,26.2,24.8c14.1,15.7,26.4,22.9,54.9,22.9S270.8,465.6,284.9,449.8z"
          />
          {/* Pelvis/Kasık bölgesi: bacaklar arası seçilebilir alan (bacaklardan sonra eklemek için aşağıya taşındı) */}
          <g transform="translate(8, 0)">
            <path
              id="arm_left"
              className={getPartClass("arm_left")}
              onClick={() => onPartSelect("arm_left")}
              onMouseEnter={() => setHoveredPart("arm_left")}
              d="M370.6,447.1c-2-3-8.9-8.6-16.8-11.7c-6.8-19.9-5.6-67.3-9.8-88 c-2.2-10.5-8.6-20.4-10.2-25.7c0.9-16.1-5.3-33.1-7.5-45.5c-1-6.5,0.3-19.3-0.2-29.3c-0.9-15.5-4.2-32.1-10.6-41.5 c-5.5-7.9-20.5-15.1-30.8-17.1c-1.4-0.2-3.3-0.4-5.4-0.6c-0.1,0-0.2,0-0.2,0l0.1,0.2c0,0,0.6,3.9,1.4,8.5 c2.1,12.6,12.6,16.5,2.2,90.6l0.2,1.4c1.6,12.5,6.6,29.9,7.9,38.1c1.6,10.7,3.4,23.8,6.8,36.6c7.7,28.7,27.2,61.2,32,80.7 c-1.2,8.9-0.6,32.1,1,37.6c1.7,6,4.2,20.2,6.2,25.4c0.7,1.9,4,2.3,6.7,0.3c1.1,2.9,2.1,6.2,2.9,7.9c1,2.1,4.2,4.3,7.9,1 c2.5,5.3,7.9,3.4,9.1,1.2c0.8-1.5,0.6-4.4,0.7-6.1c1.7,2.8,5.3,1.5,5.7-1.2c1-5.7,2.3-15.3,1.6-23.7 c-0.4-5.2-2.6-17.8-3.4-23.5c4.1,2.6,9.4,7.2,12,8.4c4.6,1.9,8.4,0.7,9.5-0.2C385.7,467.9,376.4,457.3,370.6,447.1z"
            />
          </g>
          <g transform="translate(0, 0)">
            <path
              id="arm_right"
              className={getPartClass("arm_right")}
              onClick={() => onPartSelect("arm_right")}
              onMouseEnter={() => setHoveredPart("arm_right")}
              d="M29.4,497.1c3-5,11.9-10.6,21.8-13.7c8.8-24.9,7.6-87.3,11.8-108 c2.8-13.5,10.6-26.4,12.2-31.7c-1.1-20.1,6.3-41.1,8.5-55.5c1.2-8-0.4-23.8,0.3-35.8c1.1-19,5.1-39.4,12.9-50.8 c6.7-9.7,25-18.5,37.6-20.9c1.7-0.3,4-0.5,6.6-0.7c0.1,0,0.2,0,0.2,0l-0.1,0.2c0,0-0.7,4.8-1.7,10.4c-2.6,15.4-15.4,20.2-2.7,110.7 l-0.3,1.7c-2,15.3-8,36.6-9.6,46.5c-2,13.1-4.2,29.1-8.3,44.7c-9.4,35.1-33.2,74.8-39,98.6c1.5,10.9,0.7,39.2-1.2,45.9 c-2.1,7.3-5.1,24.7-7.5,31c-0.9,2.3-4.9,2.8-8.2,0.4c-1.3,3.5-2.6,7.6-3.6,9.6c-1.2,2.5-5.1,5.3-9.7,1.2c-3.1,6.5-9.6,4.1-11.1,1.5 c-1-1.8-0.7-5.4-0.8-7.5c-2.1,3.4-6.5,1.8-7-1.5c-1.2-7-2.8-18.7-1.9-28.9c0.5-6.4,3.2-21.7,4.1-28.7c-5,3.2-11.5,8.8-14.7,10.2 c-5.6,2.3-10.3,0.9-11.6-0.3C12.3,519.9,22.6,508.3,29.4,497.1z"
            />
          </g>
          <g transform="translate(-6, 0)">
            <path
              id="leg_left"
              className={getPartClass("leg_left")}
              onClick={() => onPartSelect("leg_left")}
              onMouseEnter={() => setHoveredPart("leg_left")}
              d="M286.9,498.3c-0.2-4-2.1-15.9-3.7-25.7c-3.3,3.4-8.6,7.9-11.7,10.1 c-3.5,2.5-7.3,4.2-11.3,5.7l0,0c-11.3,4.2-23.4,6-30.3,14.9c-3.5,4.5-6.4,9-9.2,12.5c-1.5,1.9-3.1,3.5-4.7,4.8 c0.5,0.9,0.9,1.5,0.9,1.5s1.9,70.9,2.9,84.1c0.9,12,2.8,28.8,6.4,38.6c-0.5,9.3,0.5,25.7,1.8,35.9 c-3.1,13.7-9.8,37.9-9.2,51.9c0.6,14.7,8.1,84.1,8.1,96.8c0,5.1-1.9,12.1-1.9,15.4c0,2.2-0.6,9.7-0.6,12.6 s-2.2,12.4-2.9,15.2c-0.9,3,0.3,11.8,5,13.9h46.9c2.3-1.2,2.3-5.7,1.4-6.9c-0.4-0.5-2.7-2.8-5-4.4c-3.6-4.6-7.5-11.8-12.1-17.2 c-3.4-3.8-3.4-12.8-5-15.5c-1.4-2.6-4.4-8.7-4.4-15.1c0-17.4,22.6-90.9,23.5-107.2c0.8-16.4-4.6-32.9-8.5-43.6 c-0.4-5.8-0.1-16-0.6-26.2c7.5-12.4,20-46.5,22.1-69.2C286.6,566,287.3,508.6,286.9,498.3z"
            />
          </g>
          <g transform="translate(6, 0)">
            <path
              id="leg_right"
              className={getPartClass("leg_right")}
              onClick={() => onPartSelect("leg_right")}
              onMouseEnter={() => setHoveredPart("leg_right")}
              d="M221,548.3c0,0,0.8-1,1-2c-2-1.5-3.9-3.5-5.9-5.9l0,0c-3.6-4.4-7.2-10-11.5-15.7 c-8.6-11.2-23.8-13.4-38-18.7l0,0l0,0l0,0c-5-1.8-9.8-4.1-14.2-7.2c-3.8-2.7-10.2-8-14.3-12.3c-0.1-0.1-0.4-0.4-0.4-0.4l-0.1,0.6 c0,0-4.2,26.7-4.5,31.7c-0.5,8.4,0.3,76,3,104.4c2.6,28.4,18.3,71.1,27.7,86.7c-0.6,12.8-0.2,25.5-0.7,32.8 c-4.9,13.3-11.7,34.1-10.7,54.6s29.4,112.5,29.4,134.3c0,8-3.7,15.7-5.5,18.9c-2,3.5-2,14.7-6.2,19.4c-5.9,6.7-10.7,15.8-15.2,21.5 c-2.8,2-5.8,4.8-6.3,5.5c-1.1,1.5-1.1,7.1,1.8,8.6h58.8c5.9-2.6,7.4-13.5,6.3-17.4c-1-3.6-3.7-15.4-3.7-19.1 c0-3.7-0.8-13.1-0.8-15.8c0-4.2-2.4-12.9-2.4-19.3c0-15.9,9.4-102.8,10.2-121.3c0.7-17.6-7.6-47.8-11.5-65 c1.7-12.8,2.8-33.3,2.2-45c4.5-12.3,6.8-33.4,8-48.4C218.6,637.3,221,548.3,221,548.3z"
            />
          </g>
          {/* Pelvis/Kasık bölgesi: orijinal path ile etkileşimli alan */}
          <path
            id="pelvis"
            className={getPartClass("pelvis")}
            onClick={() => onPartSelect("pelvis")}
            onMouseEnter={() => setHoveredPart("pelvis")}
            d="M319.6,468.6c-0.5-4.7-2.1-24.6-3.8-30.8c-1.2-4.4-2.9-8.6-4.7-12.8 c-7.3,6.5-20,17.8-26.2,24.8c-14.1,15.7-26.4,22.9-54.9,22.9s-40.8-7.2-54.9-22.9c-6.3-7-18.9-18.4-26.2-24.8 c-1.7,4.2-3.5,8.4-4.7,12.8c-1.7,6.2-3.3,26.1-3.8,30.8c-0.2,1.9-1.4,9.1-2.7,17.5c4.1,4.3,10.8,9.9,14.8,12.7 c16.9,12,40.6,10.8,52.2,25.9c9.5,12.4,15.2,24.5,25.3,24.5s15.9-12.1,25.4-24.5c11.6-15.1,35.3-13.9,52.2-25.9 c3.9-2.8,10.6-8.4,14.7-12.7C321,477.7,319.9,470.6,319.6,468.6z"
          />
        </g>
      </svg>
    </div>
  );
};

const AiResponseCard = ({
  data,
  onGetHealthTips,
  onPrepareForDoc,
  onGetConditionDetails,
}) => {
  if (!data) return null;
  const {
    suggestedDepartment,
    potentialConditions,
    followUpQuestion,
    disclaimer,
    homeCareSuggestions,
    suggestedHospital,
  } = data;
  return (
    <div className="ai-response-card">
      {suggestedDepartment && (
        <div className="card-section department">
          <h3>
            <Building2 size={20} />
            Önerilen Tıbbi Birim
          </h3>
          <p>{suggestedDepartment}</p>
        </div>
      )}
      {potentialConditions && potentialConditions.length > 0 && (
        <div className="card-section conditions">
          <h3>
            <Pill size={20} />
            Olası Durumlar
          </h3>
          <ul>
            {potentialConditions.map((c, i) => (
              <li key={i}>
                <span>
                  <strong>{c.name}:</strong> {c.description}
                </span>
                <button onClick={() => onGetConditionDetails(c.name)}>
                  <Info size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {homeCareSuggestions && homeCareSuggestions.length > 0 && (
        <div className="card-section home-care">
          <h3>
            <Leaf size={20} />
            Evde Bakım Önerileri
          </h3>
          <ul>
            {homeCareSuggestions.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
      {suggestedHospital && suggestedHospital.name && (
        <div className="card-section hospital">
          <h3>
            <MapPin size={20} />
            Hastane Önerisi
          </h3>
          <p className="hospital-name">{suggestedHospital.name}</p>
          <p className="hospital-reason">{suggestedHospital.reason}</p>
          <p className="hospital-note">
            Not: Bu, konumunuza göre bulunan yaklaşık bir öneridir.
          </p>
        </div>
      )}
      {followUpQuestion && (
        <div className="card-section follow-up">
          <h3>
            <BrainCircuit size={20} />
            Yapay Zeka Soruyor...
          </h3>
          <p>{followUpQuestion}</p>
        </div>
      )}
      <div className="action-buttons">
        <button className="health-tips" onClick={onGetHealthTips}>
          <Sparkles size={18} /> Sağlıklı Yaşam Önerileri
        </button>
        <button className="prepare-doc" onClick={onPrepareForDoc}>
          <Sparkles size={18} /> Doktora Hazırlan
        </button>
      </div>
      {disclaimer && (
        <div className="disclaimer">
          <AlertTriangle size={24} />
          <p>
            <strong>Önemli Uyarı:</strong> {disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};

const ChatWindow = ({
  onGetHealthTips,
  onPrepareForDoc,
  onGetConditionDetails,
}) => {
  const { chatHistory, isAiResponding } = useAppStore();
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isAiResponding]);
  return (
    <div className="chat-window">
      {chatHistory.map((msg, index) => (
        <div key={index} className={`message-container ${msg.role}`}>
          {msg.role === "assistant" && (
            <div className="avatar assistant">
              <Bot size={20} />
            </div>
          )}
          <div className={`message-bubble ${msg.role}`}>
            {msg.role === "user" ? (
              <p>{msg.content}</p>
            ) : (
              <AiResponseCard
                data={msg.data}
                onGetHealthTips={onGetHealthTips}
                onPrepareForDoc={onPrepareForDoc}
                onGetConditionDetails={onGetConditionDetails}
              />
            )}
          </div>
          {msg.role === "user" && (
            <div className="avatar user">
              <User size={20} />
            </div>
          )}
        </div>
      ))}
      {isAiResponding && (
        <div className="message-container assistant">
          <div className="avatar assistant">
            <Bot size={20} />
          </div>
          <div className="loader-bubble">
            <LoaderCircle className="spinner" />
            <span>Yapay zeka düşünüyor...</span>
          </div>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

const SymptomInput = ({ onSymptomSubmit, requestLocation }) => {
  const [symptomText, setSymptomText] = useState("");
  const {
    selectedPart,
    isAiResponding,
    chatHistory,
    userLocation,
    locationError,
  } = useAppStore();
  const lastAiMessage = chatHistory.filter((m) => m.role === "assistant").pop();
  const needsToAnswer = lastAiMessage?.data?.followUpQuestion;
  const placeholderText = needsToAnswer
    ? "Yapay zekanın sorusunu yanıtlayın..."
    : "Lütfen şikayetinizi detaylı olarak açıklayın...";

  useEffect(() => {
    if (selectedPart && !userLocation && !locationError) {
      requestLocation();
    }
  }, [selectedPart, userLocation, locationError, requestLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symptomText.trim() && selectedPart && !isAiResponding) {
      onSymptomSubmit(symptomText);
      setSymptomText("");
    }
  };

  if (!selectedPart) {
    return (
      <div className="symptom-input-container">
        <div className="initial-prompt">
          <Stethoscope size={40} style={{ marginRight: "1rem" }} />
          <h3 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
            Analize başlamak için lütfen yandaki modelden bir vücut bölgesi
            seçin.
          </h3>
        </div>
      </div>
    );
  }
  return (
    <div className="symptom-input-container">
      <form className="symptom-input-form" onSubmit={handleSubmit}>
        <textarea
          value={symptomText}
          onChange={(e) => setSymptomText(e.target.value)}
          placeholder={placeholderText}
          rows="2"
          disabled={isAiResponding}
        />
        <button type="submit" disabled={!symptomText.trim() || isAiResponding}>
          {isAiResponding ? (
            <LoaderCircle className="spinner" size={24} />
          ) : (
            <Send size={24} />
          )}
        </button>
      </form>
      {locationError && <p className="location-error">{locationError}</p>}
    </div>
  );
};

export default function App() {
  const store = useAppStore();
  const [hoveredPart, setHoveredPart] = useState(null);

  const partNameMap = {
    head: "Baş",
    neck: "Boyun",
    chest: "Göğüs",
    abdomen: "Karın",
    arm_left: "Sol Kol",
    arm_right: "Sağ Kol",
    leg_left: "Sol Bacak",
    leg_right: "Sağ Bacak",
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          store.setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }),
        () =>
          store.setLocationError(
            "Konum izni reddedildi. Hastane önerileri genel olacaktır."
          )
      );
    } else {
      store.setLocationError("Tarayıcınız konum servisini desteklemiyor.");
    }
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const findNearestHospital = () => {
    if (!store.userLocation) return null;
    return (
      hospitals.reduce(
        (closest, hospital) => {
          const distance = getDistance(
            store.userLocation.lat,
            store.userLocation.lon,
            hospital.lat,
            hospital.lon
          );
          return distance < closest.distance
            ? { ...hospital, distance }
            : closest;
        },
        { distance: Infinity }
      ).name || null
    );
  };

  const callGeminiAPI = async (prompt, schema) => {
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    };
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "Eksik API anahtarı: VITE_GEMINI_API_KEY env değişkenini ayarlayın."
      );
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(
        `API Hatası: ${errorBody.error?.message || response.statusText}`
      );
    }
    const result = await response.json();
    return JSON.parse(result.candidates[0].content.parts[0].text);
  };

  const handleSymptomSubmit = async (symptomText) => {
    store.setResponding(true);
    store.setError(null);
    const partName = partNameMap[store.selectedPart] || "Bilinmeyen Bölge";
    const nearestHospital = findNearestHospital();

    const isFirstMessage = store.chatHistory.length === 0;
    const userMessage = isFirstMessage
      ? `Seçilen Bölge: ${partName}. Şikayetim: ${symptomText}`
      : symptomText;
    store.addMessage({ role: "user", content: userMessage });

    const prompt = `SENARYO: Sen SymptoCare, bir yapay zeka tıbbi triyaj asistanısın. Görevin, kullanıcının semptomlarına ve konuşma geçmişine dayanarak analizini sürekli olarak güncellemektir.
    1. Olası hastane departmanını belirt.
    2. Potansiyel durumları listele.
    3. Durumu hafifletmeye yönelik, tıbbi tavsiye niteliği taşımayan, 2-3 adet basit evde bakım önerisi sun.
    4. Kullanıcıya en yakın hastane: "${
      nearestHospital ||
      "Konum bilgisi alınamadı, bu nedenle genel bir öneri yap"
    }". Bu hastanenin veya benzeri donanıma sahip bir hastanenin neden uygun olabileceğini kısaca belirt.
    5. Durumu daha da netleştirmek için yeni bir soru sor.
    6. Kesin teşhis olmadığını ve bir uzmana danışılması gerektiğini vurgulayan bir feragatname ekle.
    
    JSON ŞEMASI'na tam olarak uy.
    KONUŞMA GEÇMİŞİ: ${store.chatHistory
      .map(
        (m) =>
          `${m.role}: ${m.role === "user" ? m.content : JSON.stringify(m.data)}`
      )
      .join("\n")}
    YENİ GİRDİ: ${userMessage}
    GÖREV: Tüm konuşma geçmişini ve son kullanıcı girdisini dikkate alarak, belirtilen JSON şemasına uygun güncellenmiş bir analiz içeren bir JSON nesnesi oluştur.`;

    const schema = {
      type: "OBJECT",
      properties: {
        suggestedDepartment: { type: "STRING" },
        potentialConditions: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              name: { type: "STRING" },
              description: { type: "STRING" },
            },
            required: ["name", "description"],
          },
        },
        homeCareSuggestions: { type: "ARRAY", items: { type: "STRING" } },
        suggestedHospital: {
          type: "OBJECT",
          properties: { name: { type: "STRING" }, reason: { type: "STRING" } },
        },
        followUpQuestion: { type: "STRING" },
        disclaimer: { type: "STRING" },
      },
      required: [
        "suggestedDepartment",
        "potentialConditions",
        "homeCareSuggestions",
        "suggestedHospital",
        "disclaimer",
      ],
    };

    try {
      const parsedJson = await callGeminiAPI(prompt, schema);
      store.addMessage({ role: "assistant", data: parsedJson });
    } catch (e) {
      console.error("API isteği başarısız:", e);
      store.setError(e.message);
      store.addMessage({
        role: "assistant",
        data: { disclaimer: `API Hatası: ${e.message}` },
      });
    } finally {
      store.setResponding(false);
    }
  };

  const handleGetHealthTips = async () => {};
  const handlePrepareForDoc = async () => {};
  const handleGetConditionDetails = async (conditionName) => {};

  return (
    <div className="app-container">
      <Modal />
      <div className="left-panel">
        <header className="panel-header">
          <h1>
            <Stethoscope /> SymptoCare
          </h1>
          <p>İnteraktif Yapay Zeka Sağlık Asistanı</p>
        </header>
        <HumanBody
          selectedPart={store.selectedPart}
          onPartSelect={store.setSelectedPart}
          hoveredPart={hoveredPart}
          setHoveredPart={setHoveredPart}
        />
        <footer className="panel-footer">
          <p>
            {store.selectedPart
              ? `Seçilen Bölge: ${partNameMap[store.selectedPart]}`
              : "Bir vücut bölgesi seçin"}
          </p>
        </footer>
      </div>
      <div className="right-panel">
        <ChatWindow
          onGetHealthTips={handleGetHealthTips}
          onPrepareForDoc={handlePrepareForDoc}
          onGetConditionDetails={handleGetConditionDetails}
        />
        <SymptomInput
          onSymptomSubmit={handleSymptomSubmit}
          requestLocation={requestLocation}
        />
      </div>
    </div>
  );
}
