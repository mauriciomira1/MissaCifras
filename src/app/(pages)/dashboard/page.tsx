import React from "react";
import MenuLateral from "./MenuLateral";

const Dashboard = () => {
  return (
    <div className="w-full flex h-screen">
      <div className="bg-primaryColor flex flex-col justify-start items-center h-full w-64 pl-2 pr-5">
        <h1 className="text-white font-semibold font-text text-xl py-4 uppercase mt-3">
          Dashboard
        </h1>
        <MenuLateral />
      </div>
      <div className="flex flex-col w-full items-center p-4">
        <h1 className="font-highlight text-7xl my-8 text-secondaryColor">
          Bem-vindo
        </h1>
        <div className="flex flex-col items-center font-text font-bold">
          <p className="text-primaryColor text-center">
            Essa é a sua Dashboard. Confira as suas playlists, veja as suas
            colaborações ou envie uma cifra.
          </p>
          <p className="text-secondaryColor text-center">
            Venha evangelizar com a gente, e vamos levar uma música católica de
            qualidade para os nossos músicos!
          </p>
          <p className="text-gray-400 text-center font-normal pt-10 text-2xl">
            Escolha uma opção do menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
