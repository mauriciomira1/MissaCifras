import { MouseEventHandler } from "react";
import ItemMenuLateral from "./ItemMenuLateral";
import { BiEdit, BiListUl, BiSolidPlaylist, BiUser } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

interface MenuLateralProps {
  btnVerPlaylists: MouseEventHandler;
  btnVerCifrasEnviadas: MouseEventHandler;
  btnEnviarCifra: MouseEventHandler;
}

const MenuLateral = ({
  btnVerPlaylists,
  btnVerCifrasEnviadas,
  btnEnviarCifra,
}: MenuLateralProps) => {
  return (
    <nav>
      {/*       <ItemMenuLateral href="#" icon={BiUser} name="Meus dados" /> */}
      <ItemMenuLateral
        onClick={btnVerPlaylists}
        icon={BiSolidPlaylist}
        name="Playlists"
      />
      <ItemMenuLateral
        onClick={btnVerCifrasEnviadas}
        icon={FiSend}
        name="Cifras enviadas"
      />
      <ItemMenuLateral
        onClick={btnEnviarCifra}
        icon={BiEdit}
        name="Enviar Cifra"
      />
    </nav>
  );
};

export default MenuLateral;
