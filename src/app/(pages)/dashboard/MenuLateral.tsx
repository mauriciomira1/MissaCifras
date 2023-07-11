import ItemMenuLateral from "./ItemMenuLateral";
import { BiEdit, BiListUl, BiSolidPlaylist, BiUser } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const MenuLateral = () => {
  return (
    <nav>
{/*       <ItemMenuLateral href="#" icon={BiUser} name="Meus dados" /> */}
      <ItemMenuLateral href="#" icon={BiSolidPlaylist} name="Playlists" />
      <ItemMenuLateral href="#" icon={FiSend} name="Cifras enviadas" />
      <ItemMenuLateral href="#" icon={BiEdit} name="Enviar Cifra" />
    </nav>
  );
};

export default MenuLateral;
