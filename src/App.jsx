import React, { useState, useEffect, useRef } from "react";
import { create } from "zustand";
import {
  User,
  Bot,
  Stethoscope,
  AlertTriangle,
  Send,
  LoaderCircle,
  Pill,
  Building2,
  BrainCircuit,
  X,
  Sparkles,
  HeartPulse,
  ClipboardCheck,
  Info,
  Leaf,
  MapPin,
  TestTube2,
  Repeat,
  Clock,
  Home,
  Calendar,
} from "lucide-react";
import "./App.css";
const hospitals = [
  {
    name: "Ankara Şehir Hastanesi",
    lat: 39.9123,
    lon: 32.7417,
    city: "Ankara",
  },
  {
    name: "Gazi Üniversitesi Hastanesi",
    lat: 39.9342,
    lon: 32.8597,
    city: "Ankara",
  },
  {
    name: "Hacettepe Üniversitesi Hastanesi",
    lat: 39.9334,
    lon: 32.8597,
    city: "Ankara",
  },
  {
    name: "Ankara Üniversitesi İbn-i Sina Hastanesi",
    lat: 39.9391,
    lon: 32.881,
    city: "Ankara",
  },

  {
    name: "İstanbul Başakşehir Çam ve Sakura Şehir Hastanesi",
    lat: 41.0775,
    lon: 28.8055,
    city: "İstanbul",
  },
  {
    name: "Acıbadem Maslak Hastanesi",
    lat: 41.1086,
    lon: 29.0178,
    city: "İstanbul",
  },
  {
    name: "Memorial Şişli Hastanesi",
    lat: 41.0486,
    lon: 28.9894,
    city: "İstanbul",
  },
  {
    name: "Koç Üniversitesi Hastanesi",
    lat: 41.1171,
    lon: 29.0819,
    city: "İstanbul",
  },
  {
    name: "İstanbul Üniversitesi İstanbul Tıp Fakültesi",
    lat: 41.0128,
    lon: 28.965,
    city: "İstanbul",
  },
  {
    name: "Kartal Dr. Lütfi Kırdar Şehir Hastanesi",
    lat: 40.9059,
    lon: 29.1948,
    city: "İstanbul",
  },

  {
    name: "İzmir Bayraklı Şehir Hastanesi",
    lat: 38.4632,
    lon: 27.1932,
    city: "İzmir",
  },
  {
    name: "Ege Üniversitesi Hastanesi",
    lat: 38.4563,
    lon: 27.2349,
    city: "İzmir",
  },
  {
    name: "Dokuz Eylül Üniversitesi Hastanesi",
    lat: 38.3687,
    lon: 27.2041,
    city: "İzmir",
  },
  {
    name: "Acıbadem Konak Hastanesi",
    lat: 38.4192,
    lon: 27.1287,
    city: "İzmir",
  },

  {
    name: "Adana Şehir Eğitim ve Araştırma Hastanesi",
    lat: 37.0308,
    lon: 35.3496,
    city: "Adana",
  },
  {
    name: "Çukurova Üniversitesi Balcalı Hastanesi",
    lat: 37.0444,
    lon: 35.3213,
    city: "Adana",
  },
  {
    name: "Başkent Üniversitesi Adana Hastanesi",
    lat: 36.9833,
    lon: 35.35,
    city: "Adana",
  },

  { name: "Bursa Şehir Hastanesi", lat: 40.2372, lon: 28.8831, city: "Bursa" },
  {
    name: "Uludağ Üniversitesi Hastanesi",
    lat: 40.2317,
    lon: 28.881,
    city: "Bursa",
  },

  {
    name: "Antalya Şehir Hastanesi",
    lat: 36.8597,
    lon: 30.7854,
    city: "Antalya",
  },
  {
    name: "Akdeniz Üniversitesi Hastanesi",
    lat: 36.8969,
    lon: 30.6414,
    city: "Antalya",
  },
  {
    name: "Memorial Antalya Hastanesi",
    lat: 36.8889,
    lon: 30.7047,
    city: "Antalya",
  },

  { name: "Konya Şehir Hastanesi", lat: 37.8667, lon: 32.4833, city: "Konya" },
  {
    name: "Necmettin Erbakan Üniversitesi Meram Tıp Fakültesi",
    lat: 37.85,
    lon: 32.4833,
    city: "Konya",
  },

  {
    name: "Gaziantep Dr. Ersin Arslan Eğitim ve Araştırma Hastanesi",
    lat: 37.0594,
    lon: 37.3825,
    city: "Gaziantep",
  },
  {
    name: "Gaziantep Üniversitesi Şahinbey Araştırma ve Uygulama Hastanesi",
    lat: 37.0662,
    lon: 37.3015,
    city: "Gaziantep",
  },

  {
    name: "Kayseri Şehir Hastanesi",
    lat: 38.7507,
    lon: 35.4776,
    city: "Kayseri",
  },
  {
    name: "Erciyes Üniversitesi Hastanesi",
    lat: 38.733,
    lon: 35.485,
    city: "Kayseri",
  },

  {
    name: "Trabzon Kanuni Eğitim ve Araştırma Hastanesi",
    lat: 41.0015,
    lon: 39.7178,
    city: "Trabzon",
  },
  {
    name: "Karadeniz Teknik Üniversitesi Farabi Hastanesi",
    lat: 40.9925,
    lon: 39.788,
    city: "Trabzon",
  },

  {
    name: "Eskişehir Şehir Hastanesi",
    lat: 39.7767,
    lon: 30.5206,
    city: "Eskişehir",
  },
  {
    name: "Eskişehir Osmangazi Üniversitesi Hastanesi",
    lat: 39.7837,
    lon: 30.5106,
    city: "Eskişehir",
  },

  {
    name: "Samsun Eğitim ve Araştırma Hastanesi",
    lat: 41.2867,
    lon: 36.33,
    city: "Samsun",
  },
  {
    name: "Ondokuz Mayıs Üniversitesi Hastanesi",
    lat: 41.35,
    lon: 36.2,
    city: "Samsun",
  },

  {
    name: "Denizli Devlet Hastanesi",
    lat: 37.7765,
    lon: 29.0864,
    city: "Denizli",
  },
  {
    name: "Pamukkale Üniversitesi Hastanesi",
    lat: 37.75,
    lon: 29.1,
    city: "Denizli",
  },

  {
    name: "Mersin Şehir Eğitim ve Araştırma Hastanesi",
    lat: 36.8,
    lon: 34.6333,
    city: "Mersin",
  },
  {
    name: "Mersin Üniversitesi Hastanesi",
    lat: 36.7259,
    lon: 34.5564,
    city: "Mersin",
  },

  {
    name: "Diyarbakır Gazi Yaşargil Eğitim ve Araştırma Hastanesi",
    lat: 37.9144,
    lon: 40.2306,
    city: "Diyarbakır",
  },
  {
    name: "Dicle Üniversitesi Hastanesi",
    lat: 37.9,
    lon: 40.25,
    city: "Diyarbakır",
  },

  {
    name: "Malatya Eğitim ve Araştırma Hastanesi",
    lat: 38.3552,
    lon: 38.3095,
    city: "Malatya",
  },
  {
    name: "İnönü Üniversitesi Turgut Özal Tıp Merkezi",
    lat: 38.3667,
    lon: 38.3167,
    city: "Malatya",
  },

  {
    name: "Erzurum Bölge Eğitim ve Araştırma Hastanesi",
    lat: 39.9,
    lon: 41.27,
    city: "Erzurum",
  },
  {
    name: "Atatürk Üniversitesi Hastanesi",
    lat: 39.9167,
    lon: 41.2833,
    city: "Erzurum",
  },

  {
    name: "Van Eğitim ve Araştırma Hastanesi",
    lat: 38.4942,
    lon: 43.4089,
    city: "Van",
  },
  {
    name: "Van Yüzüncü Yıl Üniversitesi Hastanesi",
    lat: 38.5,
    lon: 43.4,
    city: "Van",
  },
];
const calculateDistance = (lat1, lon1, lat2, lon2) => {
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
const findNearestHospitals = (userLocation, limit = 3) => {
  if (!userLocation) return [];

  return hospitals
    .map((hospital) => ({
      ...hospital,
      distance: calculateDistance(
        userLocation.lat,
        userLocation.lon,
        hospital.lat,
        hospital.lon
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map((hospital) => ({
      ...hospital,
      distanceText:
        hospital.distance < 1
          ? `${Math.round(hospital.distance * 1000)}m`
          : `${hospital.distance.toFixed(1)}km`,
    }));
};
const useAppStore = create((set, get) => ({
  selectedPart: null,
  initialQuery: null,
  analysisResult: null,
  isAiResponding: false,
  isModalOpen: false,
  modalContent: { title: "", content: null },
  modalIsLoading: false,
  userLocation: null,
  locationError: null,
  setSelectedPart: (partId) => {
    if (get().selectedPart === partId) {
      set({ selectedPart: null, analysisResult: null, initialQuery: null });
    } else {
      set({ selectedPart: partId, analysisResult: null, initialQuery: null });
    }
  },
  setAnalysis: (query, result) =>
    set((state) => ({
      initialQuery: query !== null ? query : state.initialQuery,
      analysisResult: result,
    })),
  setResponding: (isResponding) => set({ isAiResponding: isResponding }),
  openModal: (title, content) =>
    set({
      isModalOpen: true,
      modalContent: { title, content },
      modalIsLoading: false,
    }),
  closeModal: () => set({ isModalOpen: false }),
  setModalLoading: (isLoading) => set({ modalIsLoading: isLoading }),
  setUserLocation: (location) =>
    set({ userLocation: location, locationError: null }),
  setLocationError: (error) => set({ locationError: error }),
}));

const Modal = () => {
  const { isModalOpen, closeModal, modalContent, modalIsLoading } =
    useAppStore();
  if (!isModalOpen) return null;
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2 className="modal-title">{modalContent.title}</h2>
          <button onClick={closeModal} className="modal-close-button">
            <X size={24} />
          </button>
        </header>
        <div className="modal-body">
          {modalIsLoading ? (
            <div className="modal-loader">
              <LoaderCircle className="spinner" size={48} />
              <p>✨ Yapay zeka sizin için düşünüyor...</p>
            </div>
          ) : (
            modalContent.content
          )}
        </div>
      </div>
    </div>
  );
};

const HumanBody = ({
  selectedPart,
  onPartSelect,
  hoveredPart,
  setHoveredPart,
}) => {
  const partStyle = (partId) =>
    `body-part ${
      partId === selectedPart
        ? "selected"
        : partId === hoveredPart
        ? "hovered"
        : "default"
    }`;

  return (
    <div className="panel-body">
      <svg viewBox="0 0 460 1010" className="human-body-svg">
        <path
          d="M430.6,497.1c-3-5-11.9-10.6-21.8-13.7c-8.8-24.9-7.6-87.3-11.8-108c-2.8-13.5-10.6-26.4-12.2-31.7 c1.1-20.1-6.3-41.1-8.5-55.5c-1.2-8,0.4-23.8-0.3-35.8c-1.1-19-5.1-39.4-12.9-50.8c-6.7-9.7-25-18.5-37.6-20.9 c-6.2-1.1-20-0.8-27.3-3.5c-4.6-1.7-27.2-12.7-34.5-20.8c-2-7.3-3-26.7-3.3-31c1.3-1.1,2.9-2.6,4.1-3.6c3.7-3.2,6-22.4,7-27.7 c2.9,0.8,6.2,0.3,7.7-3.9c1.6-4.2,3.1-12.2,4.7-19.2c1.3-5.9-5.3-6.3-9-6.2c0.9-3.2,1.3-13,1.9-17.8c0.5-4.7-5.2-32.9-9.4-34.5 c-4.2-1.6-10.9-1.6-10.9-1.6s-4.2-4.4-8.4-5.4C246.2,5.1,236.7,5,230,5s-12.1,0.6-18.3,1.8c-4.4,0.9-14.7,4-19.1,7 c-3.7,2.6-10,28.5-9.4,33.2c0.5,4.7,1,14.6,1.9,17.8c-3.7-0.1-10.3,0.3-9,6.2c1.6,7,3.1,15,4.7,19.2c1.6,4.2,4.8,4.8,7.7,3.9 c1,5.3,3.3,24.5,7,27.7c1.2,1,2.8,2.5,4.1,3.6c-0.3,4.3-1.3,23.7-3.3,31c-7.3,8.1-29.9,19.1-34.5,20.8c-7.2,2.7-21.1,2.4-27.3,3.5 c-12.6,2.3-30.9,11.2-37.6,20.9C89,213,85.1,233.4,84,252.4c-0.7,12.1,0.9,27.8-0.3,35.8c-2.2,14.3-9.6,35.4-8.5,55.5 c-1.6,5.2-9.4,18.2-12.2,31.7c-4.3,20.7-3,83.1-11.8,108c-9.9,3-18.8,8.7-21.8,13.7c-6.8,11.2-17.1,22.8-23.1,28.7 c1.3,1.3,6,2.7,11.6,0.3c3.2-1.3,9.7-7,14.7-10.2c-0.9,6.9-3.6,22.3-4.1,28.7c-0.9,10.3,0.7,21.9,1.9,28.9c0.5,3.2,5,4.9,7,1.5 c0.1,2.1-0.2,5.6,0.8,7.5c1.5,2.6,8,5,11.1-1.5c4.7,4.1,8.5,1.3,9.7-1.2c1-2,2.3-6.1,3.6-9.6c3.2,2.3,7.3,1.9,8.2-0.4 c2.4-6.3,5.4-23.7,7.5-31c1.9-6.8,2.7-35,1.2-45.9c5.8-23.8,29.6-63.5,39-98.6c4.2-15.6,6.3-31.6,8.3-44.7 c1.6-10,7.6-31.2,9.6-46.5c4,14.9,8.2,32.4,13.5,44.5c1.8,13.2,2.2,59.3,2.5,68.1c-2.5,7.5-6.2,14.4-8.2,22 c-1.7,6.2-3.3,26.1-3.8,30.8c-0.5,4.7-6.7,41.3-7.3,49.7c-0.5,8.4,0.3,76,3,104.4c2.6,28.4,18.3,71.1,27.7,86.7 c-0.6,12.8-0.2,25.5-0.7,32.8c-4.9,13.3-11.7,34.1-10.7,54.6s29.4,112.5,29.4,134.3c0,8-3.7,15.7-5.5,18.9c-2,3.5-2,14.7-6.2,19.4 c-5.9,6.7-10.7,15.8-15.2,21.5c-2.8,2-5.8,4.8-6.3,5.5c-1.1,1.5-1.1,7.1,1.8,8.6h58.8c5.9-2.6,7.4-13.5,6.3-17.4 c-1-3.6-3.7-15.4-3.7-19.1c0-3.7-0.8-13.1-0.8-15.8c0-4.2-2.4-12.9-2.4-19.3c0-15.9,9.4-102.8,10.2-121.3 c0.7-17.6-7.6-47.8-11.5-65c1.7-12.8,2.8-33.3,2.2-45c4.5-12.3,6.8-33.4,8-48.4c1.2-16.5,3.7-108.6,3.7-108.6s1.7,0.8,9,0.8 s9-0.8,9-0.8s2.4,92.1,3.7,108.6c1.1,15,3.5,36.1,8,48.4c-0.6,11.7,0.6,32.2,2.2,45c-3.9,17.2-12.3,47.5-11.5,65 c0.8,18.4,10.2,105.4,10.2,121.3c0,6.4-2.4,15.1-2.4,19.3c0,2.7-0.8,12.1-0.8,15.8s-2.7,15.5-3.7,19.1c-1.1,3.8,0.4,14.8,6.3,17.4 H310c2.9-1.5,2.9-7.1,1.8-8.6c-0.5-0.6-3.4-3.5-6.3-5.5c-4.5-5.8-9.4-14.8-15.2-21.5c-4.2-4.8-4.2-16-6.2-19.4 c-1.8-3.2-5.5-10.9-5.5-18.9c0-21.8,28.3-113.8,29.4-134.3c1-20.5-5.8-41.2-10.7-54.6c-0.5-7.2-0.1-20-0.7-32.8 c9.4-15.5,25.1-58.3,27.7-86.7c2.6-28.3,3.5-96,3-104.4c-0.5-8.4-6.7-45-7.2-49.7s-2.1-24.6-3.8-30.8c-2.1-7.6-5.7-14.5-8.2-22 c0.3-8.7,0.7-54.8,2.5-68.1c5.3-12.1,9.5-29.7,13.5-44.5c2,15.3,8,36.6,9.6,46.5c2,13.1,4.2,29.1,8.3,44.7 c9.4,35.1,33.2,74.8,39,98.6c-1.5,10.9-0.7,39.2,1.2,45.9c2.1,7.3,5.1,24.7,7.5,31c0.9,2.3,4.9,2.8,8.2,0.4 c1.3,3.5,2.6,7.6,3.6,9.6c1.2,2.5,5.1,5.3,9.7,1.2c3.1,6.5,9.6,4.1,11.1,1.5c1-1.8,0.7-5.4,0.8-7.5c2.1,3.4,6.5,1.8,7-1.5 c1.2-7,2.8-18.7,1.9-28.9c-0.5-6.4-3.2-21.7-4.1-28.7c5,3.2,11.5,8.8,14.7,10.2c5.6,2.3,10.3,0.9,11.6-0.3 C447.7,519.9,437.4,508.3,430.6,497.1z"
          fill="#F8FAFC"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          style={{ pointerEvents: "none" }}
        />

        <g id="interactive-parts" onMouseLeave={() => setHoveredPart(null)}>
          <path
            id="head"
            className={partStyle("head")}
            onClick={() => onPartSelect("head")}
            onMouseEnter={() => setHoveredPart("head")}
            d="M185.1,64.9c-3.7-0.1-10.3,0.3-9,6.2c1.6,7,3.1,15,4.7,19.2s4.8,4.8,7.7,3.9h0.2l3.6,22.8 l21.4,15.9c1.2,0.9,2.6,1.4,4.1,1.5l1.8,0.1c6.3,0.5,12.6,0.5,18.9,0.1l3.8-0.3c1.6-0.1,3.1-0.7,4.3-1.7l20.7-15.8l4.1-22.6 c2.9,0.9,6.1,0.3,7.6-3.9c1.6-4.2,3.1-12.2,4.7-19.2c1.3-5.9-5.3-6.3-9-6.2c0,0,0,0,0,0c0.9-3.2,1.6-13,2.1-17.8 c0.5-4.7-5.2-32.9-9.4-34.5S256.5,11,256.5,11s-4.2-4.4-8.4-5.4C246.2,5.1,236.7,5,230,5c-6.7,0-12.1,0.6-18.3,1.8 c-4.4,0.9-14.7,4-19.1,7c-3.7,2.6-10,28.5-9.4,33.2c0.4,3.2,1.1,13.1,1.1,13.1l1.2,4.7L185.1,64.9z"
          />
          <path
            id="neck"
            className={partStyle("neck")}
            onClick={() => onPartSelect("neck")}
            onMouseEnter={() => setHoveredPart("neck")}
            d="M239.2,190l7.6-2.5c8.6-3.5,25.7-4,31.5-2.3c4.6,1.4,5.9,1.5,13.7-1.1c5.9-1.9,19.5-3.2,25.6-3.7 l0.2-0.4c-6.5-0.5-14.5-0.9-19.5-2.7c-4.6-1.7-27.2-12.7-34.5-20.8c-2-7.3-3.3-31-3.3-31l-0.6-3l-13.4,10.3c-1.2,1-2.8,1.5-4.3,1.7 l-3.8,0.3c-6.3,0.4-12.6,0.4-18.9-0.1l-1.8-0.1c-1.5-0.1-2.9-0.7-4.1-1.5L200,122.9l-0.3,2.7c0,0-1.3,23.7-3.3,31 c-7.3,8.1-29.9,19.1-34.5,20.8c-5.2,1.9-13.8,2.3-20.5,2.8v0.1c3.3,0.2,21,1.6,28.1,3.9c7.8,2.5,9.1,2.4,13.7,1.1 c5.9-1.7,22.9-1.2,31.5,2.3l6.3,2.1c1.3,3.6,4.5,7.9,9.2,7.9h0.1C234.6,197.4,237.8,193.5,239.2,190z"
          />
          <path
            id="chest"
            className={partStyle("chest")}
            onClick={() => onPartSelect("chest")}
            onMouseEnter={() => setHoveredPart("chest")}
            d="M318.8,180.3c-5.2,0.4-20.4,1.7-26.8,3.8c-7.8,2.5-9.1,2.4-13.7,1.1c-5.9-1.7-22.9-1.2-31.5,2.3 l-7.6,2.5c-1.4,3.5-4.5,7.5-9,7.5H230c-4.7,0-7.9-4.3-9.2-7.9l-6.3-2.1c-8.6-3.5-25.7-4-31.5-2.3c-4.6,1.4-5.9,1.5-13.7-1.1 c-7.1-2.3-25-3.6-28.1-3.9c-0.1,0.7-0.7,4.6-1.7,10.5c-2.6,15.8-16.1,20.4-1.8,117.4c1,3.9,2,7.9,3.1,11.8v0.2c0.5,2,1.1,4,1.6,6 c15.2-11.2,42.6-13.4,62.1-13.1l0,0c14.4,0.2,25.3,1.6,25.3,1.6s10.9-1.4,25.3-1.6l0,0c19.6-0.2,46.9,1.9,62.1,13.1 c0.6-2,1.1-4,1.6-6v-0.2c1.1-4,2.1-7.9,3.1-11.8c14.3-97,0.9-101.6-1.8-117.4C319.6,185.1,319,181.2,318.8,180.3z"
          />
          <path
            id="abdomen"
            className={partStyle("abdomen")}
            onClick={() => onPartSelect("abdomen")}
            onMouseEnter={() => setHoveredPart("abdomen")}
            d="M284.9,449.8c6.2-7,18.9-18.3,26.2-24.8c-1.3-3-2.5-6.1-3.6-9.2c0.3-8.7,0.7-54.8,2.5-68.1 c2.6-6,7.2-20.9,7.3-21.7c-15.2-11.2-42.6-13.4-62.1-13.1l0,0c-14.4,0.2-25.3,1.6-25.3,1.6s-11-1.4-25.3-1.6l0,0 c-19.6-0.2-46.9,1.9-62.1,13.1c2.2,7.9,4.7,15.5,7.4,21.7c1.8,13.2,2.2,59.3,2.5,68.1c-1.1,3.2-2.3,6.2-3.6,9.2 c7.3,6.5,20,17.8,26.2,24.8c14.1,15.7,26.4,22.9,54.9,22.9S270.8,465.6,284.9,449.8z"
          />

          <g transform="translate(-10, 0)">
            <path
              id="arm_left"
              className={partStyle("arm_left")}
              onClick={() => onPartSelect("arm_left")}
              onMouseEnter={() => setHoveredPart("arm_left")}
              d="M430.6,497.1c-3-5-11.9-10.6-21.8-13.7c-8.8-24.9-7.6-87.3-11.8-108 c-2.8-13.5-10.6-26.4-12.2-31.7c1.1-20.1-6.3-41.1-8.5-55.5c-1.2-8,0.4-23.8-0.3-35.8c-1.1-19-5.1-39.4-12.9-50.8 c-6.7-9.7-25-18.5-37.6-20.9c-1.7-0.3-4-0.5-6.6-0.7c-0.1,0-0.2,0-0.2,0l0.1,0.2c0,0,0.7,4.8,1.7,10.4 c2.6,15.4,15.4,20.2,2.7,110.7l0.3,1.7c2,15.3,8,36.6,9.6,46.5c2,13.1,4.2,29.1,8.3,44.7c9.4,35.1,33.2,74.8,39,98.6 c-1.5,10.9-0.7,39.2,1.2,45.9c2.1,7.3,5.1,24.7,7.5,31c0.9,2.3,4.9,2.8,8.2,0.4c1.3,3.5,2.6,7.6,3.6,9.6c1.2,2.5,5.1,5.3,9.7,1.2 c3.1,6.5,9.6,4.1,11.1,1.5c1-1.8,0.7-5.4,0.8-7.5c2.1,3.4,6.5,1.8,7-1.5c1.2-7,2.8-18.7,1.9-28.9c-0.5-6.4-3.2-21.7-4.1-28.7 c5,3.2,11.5,8.8,14.7,10.2c5.6,2.3,10.3,0.9,11.6-0.3C447.7,519.9,437.4,508.3,430.6,497.1z"
            />
          </g>
          <g transform="translate(0, 0)">
            <path
              id="arm_right"
              className={partStyle("arm_right")}
              onClick={() => onPartSelect("arm_right")}
              onMouseEnter={() => setHoveredPart("arm_right")}
              d="M29.4,497.1c3-5,11.9-10.6,21.8-13.7c8.8-24.9,7.6-87.3,11.8-108 c2.8-13.5,10.6-26.4,12.2-31.7c-1.1-20.1,6.3-41.1,8.5-55.5c1.2-8-0.4-23.8,0.3-35.8c1.1-19,5.1-39.4,12.9-50.8 c6.7-9.7,25-18.5,37.6-20.9c1.7-0.3,4-0.5,6.6-0.7c0.1,0,0.2,0,0.2,0l-0.1,0.2c0,0-0.7,4.8-1.7,10.4c-2.6,15.4-15.4,20.2-2.7,110.7 l-0.3,1.7c-2,15.3-8,36.6-9.6,46.5c-2,13.1-4.2,29.1-8.3,44.7c-9.4,35.1-33.2,74.8-39,98.6c1.5,10.9,0.7,39.2-1.2,45.9 c-2.1,7.3-5.1,24.7-7.5,31c-0.9,2.3-4.9,2.8-8.2,0.4c-1.3,3.5-2.6,7.6-3.6,9.6c-1.2,2.5-5.1,5.3-9.7,1.2c-3.1,6.5-9.6,4.1-11.1,1.5 c-1-1.8-0.7-5.4-0.8-7.5c-2.1,3.4-6.5,1.8-7-1.5c-1.2-7-2.8-18.7-1.9-28.9c0.5-6.4,3.2-21.7,4.1-28.7c-5,3.2-11.5,8.8-14.7,10.2 c-5.6,2.3-10.3,0.9-11.6-0.3C12.3,519.9,22.6,508.3,29.4,497.1z"
            />
          </g>
          <g transform="translate(-6, 0)">
            <path
              id="leg_left"
              className={partStyle("leg_left")}
              onClick={() => onPartSelect("leg_left")}
              onMouseEnter={() => setHoveredPart("leg_left")}
              d="M326.9,518.3c-0.3-5-2.6-19.9-4.6-32.2c-4.1,4.3-10.8,9.9-14.7,12.7 c-4.4,3.1-9.2,5.3-14.2,7.2l0,0c-14.2,5.3-29.4,7.5-38,18.7c-4.4,5.7-8,11.3-11.5,15.7c-1.9,2.4-3.9,4.4-5.9,6 c0.6,1.1,1.1,1.9,1.1,1.9s2.4,88.9,3.7,105.4c1.1,15,3.5,36.1,8,48.4c-0.6,11.7,0.6,32.2,2.2,45c-3.9,17.2-12.3,47.5-11.5,65 c0.8,18.4,10.2,105.4,10.2,121.3c0,6.4-2.4,15.1-2.4,19.3c0,2.7-0.8,12.1-0.8,15.8s-2.7,15.5-3.7,19.1c-1.1,3.8,0.4,14.8,6.3,17.4 h58.8c2.9-1.5,2.9-7.1,1.8-8.6c-0.5-0.6-3.4-3.5-6.3-5.5c-4.5-5.8-9.4-14.8-15.2-21.5c-4.2-4.8-4.2-16-6.2-19.4 c-1.8-3.2-5.5-10.9-5.5-18.9c0-21.8,28.3-113.8,29.4-134.3c1-20.5-5.8-41.2-10.7-54.6c-0.5-7.2-0.1-20-0.7-32.8 c9.4-15.5,25.1-58.3,27.7-86.7C326.5,594.4,327.4,526.7,326.9,518.3z"
            />
          </g>
          <g transform="translate(6, 0)">
            <path
              id="leg_right"
              className={partStyle("leg_right")}
              onClick={() => onPartSelect("leg_right")}
              onMouseEnter={() => setHoveredPart("leg_right")}
              d="M221,548.3c0,0,0.8-1,1-2c-2-1.5-3.9-3.5-5.9-5.9l0,0c-3.6-4.4-7.2-10-11.5-15.7 c-8.6-11.2-23.8-13.4-38-18.7l0,0l0,0l0,0c-5-1.8-9.8-4.1-14.2-7.2c-3.8-2.7-10.2-8-14.3-12.3c-0.1-0.1-0.4-0.4-0.4-0.4l-0.1,0.6 c0,0-4.2,26.7-4.5,31.7c-0.5,8.4,0.3,76,3,104.4c2.6,28.4,18.3,71.1,27.7,86.7c-0.6,12.8-0.2,25.5-0.7,32.8 c-4.9,13.3-11.7,34.1-10.7,54.6s29.4,112.5,29.4,134.3c0,8-3.7,15.7-5.5,18.9c-2,3.5-2,14.7-6.2,19.4c-5.9,6.7-10.7,15.8-15.2,21.5 c-2.8,2-5.8,4.8-6.3,5.5c-1.1,1.5-1.1,7.1,1.8,8.6h58.8c5.9-2.6,7.4-13.5,6.3-17.4c-1-3.6-3.7-15.4-3.7-19.1 c0-3.7-0.8-13.1-0.8-15.8c0-4.2-2.4-12.9-2.4-19.3c0-15.9,9.4-102.8,10.2-121.3c0.7-17.6-7.6-47.8-11.5-65 c1.7-12.8,2.8-33.3,2.2-45c4.5-12.3,6.8-33.4,8-48.4C218.6,637.3,221,548.3,221,548.3z"
            />
          </g>

          <path
            id="pelvis"
            className={partStyle("pelvis")}
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
  onGetConditionDetails,
  onGetHealthTips,
  onPrepareForDoc,
}) => {
  if (!data || Object.keys(data).length === 0) return null;
  const {
    suggestedDepartment,
    potentialConditions,
    homeCareSuggestions,
    suggestedHospital,
    disclaimer,
    urgencyLevel,
    urgencyMessage,
  } = data;

  const urgencyConfig = {
    emergency: {
      className: "urgency-emergency",
      icon: <AlertTriangle size={24} />,
      label: "ACİL DURUM",
      actions: [
        {
          label: "112'yi Ara",
          icon: <AlertTriangle size={16} />,
          href: "tel:112",
          type: "emergency",
        },
        {
          label: "En Yakın Acil",
          icon: <MapPin size={16} />,
          action: "navigate",
          type: "emergency",
        },
      ],
    },
    urgent: {
      className: "urgency-urgent",
      icon: <Clock size={24} />,
      label: "ACİL",
      actions: [
        {
          label: "Hastane Ara",
          icon: <Building2 size={16} />,
          action: "call_hospital",
          type: "urgent",
        },
        {
          label: "Randevu Al",
          icon: <Calendar size={16} />,
          action: "appointment",
          type: "urgent",
        },
      ],
    },
    normal: {
      className: "urgency-normal",
      icon: <Calendar size={24} />,
      label: "NORMAL",
      actions: [
        {
          label: "Randevu Planla",
          icon: <Calendar size={16} />,
          action: "appointment",
          type: "normal",
        },
      ],
    },
    home: {
      className: "urgency-home",
      icon: <Home size={24} />,
      label: "EVDE TEDAVİ",
      actions: [
        {
          label: "Aile Hekimi",
          icon: <User size={16} />,
          action: "family_doctor",
          type: "home",
        },
      ],
    },
  };

  const handleUrgencyAction = (action) => {
    switch (action.action) {
      case "navigate":
        const nearestHospitals = findNearestHospitals(
          useAppStore.getState().userLocation,
          1
        );
        if (nearestHospitals.length > 0) {
          const hospital = nearestHospitals[0];
          window.open(
            `https://maps.google.com/maps?daddr=${hospital.lat},${hospital.lon}`,
            "_blank"
          );
        }
        break;
      case "call_hospital":
        alert("Hastane telefon numarası: Bu özellik yakında eklenecek");
        break;
      case "appointment":
        alert("Randevu sistemi: Bu özellik yakında eklenecek");
        break;
      case "family_doctor":
        alert("Aile hekimi bilgileri: Bu özellik yakında eklenecek");
        break;
    }
  };

  return (
    <div className="ai-response-card">
      {urgencyLevel && urgencyConfig[urgencyLevel] && (
        <div
          className={`urgency-section ${urgencyConfig[urgencyLevel].className}`}
        >
          <h3>
            {urgencyConfig[urgencyLevel].icon}
            {urgencyConfig[urgencyLevel].label}
          </h3>
          <p>{urgencyMessage}</p>

          {urgencyConfig[urgencyLevel].actions && (
            <div className="urgency-actions">
              {urgencyConfig[urgencyLevel].actions.map((action, index) =>
                action.href ? (
                  <a
                    key={index}
                    href={action.href}
                    className="urgency-action-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.icon}
                    {action.label}
                  </a>
                ) : (
                  <button
                    key={index}
                    className="urgency-action-btn"
                    onClick={() => handleUrgencyAction(action)}
                  >
                    {action.icon}
                    {action.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      )}

      {suggestedDepartment && (
        <div className="card-section department">
          <h3>
            <Building2 size={18} />
            Önerilen Tıbbi Birim
          </h3>
          <p>{suggestedDepartment}</p>
        </div>
      )}

      {potentialConditions && potentialConditions.length > 0 && (
        <div className="card-section conditions">
          <h3>
            <Pill size={18} />
            Olası Durumlar
          </h3>
          <ul>
            {potentialConditions.map((c, i) => (
              <li key={i}>
                <span
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                >
                  {c.name}: {c.description}
                </span>
                <button onClick={() => onGetConditionDetails(c.name)}>
                  <Info size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {homeCareSuggestions && homeCareSuggestions.length > 0 && (
        <div className="card-section home-care">
          <h3>
            <Leaf size={18} />
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
            <MapPin size={18} />
            Hastane Önerisi
          </h3>
          <p className="hospital-name">{suggestedHospital.name}</p>
          {suggestedHospital.distance && (
            <p className="hospital-distance">
              Mesafe: {suggestedHospital.distance}
            </p>
          )}
          <p className="hospital-reason">{suggestedHospital.reason}</p>
          <p className="hospital-note">
            Not: Bu, konumunuza göre bulunan yaklaşık bir öneridir.
          </p>
        </div>
      )}

      <div className="action-buttons">
        <button className="health-tips" onClick={onGetHealthTips}>
          <Sparkles size={16} /> Sağlıklı Yaşam Önerileri
        </button>
        <button className="prepare-doc" onClick={onPrepareForDoc}>
          <Sparkles size={16} /> Doktora Hazırlan
        </button>
      </div>

      {disclaimer && (
        <div className="disclaimer">
          <AlertTriangle size={20} />
          <p>
            <strong>Önemli Uyarı:</strong> {disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};

const ResultsDisplay = ({
  onGetConditionDetails,
  onGetHealthTips,
  onPrepareForDoc,
}) => {
  const { analysisResult, initialQuery, isAiResponding } = useAppStore();

  if (isAiResponding && !analysisResult) {
    return (
      <div className="initial-prompt-right">
        <LoaderCircle className="spinner" size={64} />
        <h2>Analiz Yapılıyor...</h2>
        <p>Yapay zeka, belirtilerinizi değerlendiriyor. Lütfen bekleyin.</p>
      </div>
    );
  }

  if (!analysisResult) {
    return (
      <div className="initial-prompt-right">
        <TestTube2 size={64} className="icon" />
        <h2>Analiz Sonuçları</h2>
        <p>
          Vücut modelinden bir bölge seçip şikayetinizi belirttiğinizde, yapay
          zeka analizi burada görünecektir.
        </p>
      </div>
    );
  }

  return (
    <div className="results-display-container">
      <div className="initial-query-display">
        <User size={24} className="icon" />
        <p>{initialQuery}</p>
      </div>
      <AiResponseCard
        data={analysisResult}
        onGetConditionDetails={onGetConditionDetails}
        onGetHealthTips={onGetHealthTips}
        onPrepareForDoc={onPrepareForDoc}
      />
    </div>
  );
};

const SymptomInput = ({ onSymptomSubmit, requestLocation }) => {
  const [symptomText, setSymptomText] = useState("");
  const {
    selectedPart,
    isAiResponding,
    analysisResult,
    userLocation,
    locationError,
  } = useAppStore();

  const needsToAnswer = analysisResult?.followUpQuestion;
  const placeholderText = needsToAnswer
    ? "Cevabınızı buraya yazın..."
    : "Lütfen şikayetinizi detaylı olarak açıklayın...";

  useEffect(() => {
    if (selectedPart && !userLocation && !locationError) requestLocation();
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
          <Stethoscope size={40} />
          <h3 style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
            Analize başlamak için bir vücut bölgesi seçin.
          </h3>
        </div>
      </div>
    );
  }
  return (
    <div className="symptom-input-container">
      {needsToAnswer && (
        <div className="follow-up-prompt">
          <Repeat size={16} /> <strong>Takip:</strong>{" "}
          {analysisResult.followUpQuestion}
        </div>
      )}
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
    pelvis: "Kasık / Pelvis",
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
    const nearest = findNearestHospitals(store.userLocation, 1);
    return nearest.length > 0 ? nearest[0] : null;
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
    console.log("--- Gemini API İsteği Gönderiliyor ---");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    console.log("--- Gemini API Yanıtı Alındı ---");
    console.log("HTTP Durumu:", response.status, response.statusText);
    if (!response.ok) {
      const errorBody = await response.json();
      console.error("API Hata Detayı:", errorBody);
      throw new Error(
        `API Hatası (${response.status}): ${
          errorBody.error?.message ||
          "Sunucudan geçerli bir hata mesajı alınamadı."
        }`
      );
    }
    const result = await response.json();
    console.log("Başarılı Yanıt Verisi:", result);
    if (
      !result.candidates ||
      result.candidates.length === 0 ||
      !result.candidates[0].content?.parts[0]?.text
    ) {
      console.error("API Yanıtı Beklenen Formattta Değil:", result);
      throw new Error("API'den geçerli bir yanıt alınamadı.");
    }
    const parsedData = JSON.parse(result.candidates[0].content.parts[0].text);
    console.log("Arayüze Eklenecek Veri:", parsedData);
    return parsedData;
  };

  const handleSymptomSubmit = async (symptomText) => {
    store.setResponding(true);
    const partName = partNameMap[store.selectedPart] || "Bilinmeyen Bölge";
    const nearestHospital = findNearestHospital();

    const isFollowUp = store.analysisResult !== null;
    let userMessage = symptomText;
    let fullQueryForHistory = symptomText;
    if (!isFollowUp) {
      fullQueryForHistory = `Seçilen Bölge: ${partName}. Şikayetim: ${symptomText}`;
    }

    const prompt = `
      SENARYO: Sen SymptoCare, bir yapay zeka tıbbi triyaj asistanısın.
      
      ${
        isFollowUp
          ? `DURUM: Kullanıcıya daha önce bir analiz sundun ve bir takip sorusu sordun. Şimdi kullanıcı bu soruya cevap veriyor. Önceki analizi bu yeni bilgiyle GÜNCELLE ve RAFİNE ET.
         ÖNCEKİ ANALİZ VE SORU:
         ${JSON.stringify(store.analysisResult, null, 2)}
         
         KULLANICININ YENİ CEVABI: "${symptomText}"
        `
          : `DURUM: Bu ilk analiz. Kullanıcı vücut bölgesini ve ilk şikayetini iletiyor.
         KULLANICI GİRDİSİ: "${userMessage}"
        `
      }

      GÖREVLERİN:
      1. Olası hastane departmanını belirt.
      2. En fazla 3 adet potansiyel durumu listele.
      3. Durumu hafifletmeye yönelik, tıbbi tavsiye niteliği taşımayan, 2-3 adet basit evde bakım önerisi sun.
      4. Kullanıcıya en yakın hastane olarak "${
        nearestHospital?.name || "bilinmeyen bir hastane"
      }" öneriliyor. Bu hastanenin neden uygun olabileceğini kısaca belirt.
      5. Analizi daha da derinleştirmek için YENİ bir takip sorusu sor.
      6. Cevabının sonuna her zaman standart feragatnameyi ekle.
      7. Durumun aciliyetini de belirle:
         - emergency: Hemen acil servise gitmelidir (Örn: "Hemen en yakın acil servise gidin")
         - urgent: Aynı gün doktora başvurmalıdır (Örn: "Bugün içinde doktora başvurun")
         - normal: Birkaç gün içinde doktora gidebilir (Örn: "Birkaç gün içinde doktor randevusu alın")
         - home: Evde tedavi yeterlidir (Örn: "Evde bakım yeterli, gerekirse aile hekiminize danışın")

      KURALLAR: Yalnızca ve yalnızca JSON formatında yanıt ver. Öncesinde veya sonrasında asla metin ekleme.
    `;

    const schema = {
      type: "OBJECT",
      properties: {
        urgencyLevel: {
          type: "STRING",
          enum: ["emergency", "urgent", "normal", "home"],
          description: "Durumun aciliyet seviyesi",
        },
        urgencyMessage: {
          type: "STRING",
          description: "Aciliyet seviyesine göre önerilen eylem",
        },
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
          properties: {
            name: { type: "STRING" },
            reason: { type: "STRING" },
            distance: { type: "STRING" },
          },
          required: ["name", "reason"],
        },
        followUpQuestion: { type: "STRING" },
        disclaimer: { type: "STRING" },
      },
      required: [
        "urgencyLevel",
        "urgencyMessage",
        "suggestedDepartment",
        "potentialConditions",
        "disclaimer",
      ],
    };

    try {
      const parsedJson = await callGeminiAPI(prompt, schema);

      if (nearestHospital && parsedJson.suggestedHospital) {
        parsedJson.suggestedHospital.name = nearestHospital.name;
        parsedJson.suggestedHospital.distance = nearestHospital.distanceText;
      }

      store.setAnalysis(
        isFollowUp
          ? store.initialQuery + `\n\nCevabım: ${symptomText}`
          : fullQueryForHistory,
        parsedJson
      );
    } catch (e) {
      store.setAnalysis(fullQueryForHistory, {
        urgencyLevel: "normal",
        urgencyMessage: "Bir sorun oluştu, lütfen doktorunuza danışın.",
        disclaimer: `Bir sorun oluştu: ${e.message}. Lütfen tarayıcı konsolunu kontrol edin.`,
      });
    } finally {
      store.setResponding(false);
    }
  };

  const handleGetConditionDetails = async (conditionName) => {};

  const handleGetHealthTips = async () => {};

  const handlePrepareForDoc = async () => {};

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
        <div className="panel-body">
          <HumanBody
            selectedPart={store.selectedPart}
            onPartSelect={store.setSelectedPart}
            hoveredPart={hoveredPart}
            setHoveredPart={setHoveredPart}
          />
        </div>
        <footer className="panel-footer">
          <p>
            {store.selectedPart
              ? `Seçilen Bölge: ${partNameMap[store.selectedPart]}`
              : "Bir vücut bölgesi seçin"}
          </p>
        </footer>
      </div>
      <div className="right-panel">
        <ResultsDisplay
          onGetConditionDetails={handleGetConditionDetails}
          onGetHealthTips={handleGetHealthTips}
          onPrepareForDoc={handlePrepareForDoc}
        />
        <SymptomInput
          onSymptomSubmit={handleSymptomSubmit}
          requestLocation={requestLocation}
        />
      </div>
    </div>
  );
}
