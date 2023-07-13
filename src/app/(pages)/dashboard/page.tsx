"use client";
import React, { useState } from "react";
import MenuLateral from "./MenuLateral";
import Welcome from "@/components/Dashboard/Welcome";
import EnviarCifra from "@/components/EnviarCifra.tsx/EnviarCifra";

const Dashboard = () => {
  const [mainContent, setMainContent] = useState(<Welcome />);

  // Funções dos botões do menu lateral
  const btnVerPlaylists = () => {
    console.log("clicou para ver playlists");
  };
  const btnVerCifrasEnviadas = () => {
    console.log("clicou para ver cifras enviadas");
  };
  const btnEnviarCifra = () => {
    setMainContent(<EnviarCifra />);
  };

  return (
    <div className="w-full flex h-screen">
      <div className="bg-primaryColor shadow-lg shadow-gray-800 flex flex-col justify-start items-center h-full w-12 pt-4 md:pt-1 md:w-64 md:pl-2 md:pr-5">
        <h1 className="hidden md:block text-white font-semibold font-text text-xl py-4 uppercase mt-3">
          Dashboard
        </h1>
        <MenuLateral
          btnVerPlaylists={btnVerPlaylists}
          btnVerCifrasEnviadas={btnVerCifrasEnviadas}
          btnEnviarCifra={btnEnviarCifra}
        />
      </div>
      <div className="w-full flex justify-center">{mainContent}</div>
    </div>
  );
};

export default Dashboard;
