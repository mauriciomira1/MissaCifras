import ItemSubmenu from "./ItemSubmenu";

const Submenu = () => {
  return (
    <div className="flex flex-wrap gap-2 w-auto">
      <ItemSubmenu name="CANTO DE ENTRADA" />
      <ItemSubmenu name="ATO PENITENCIAL" />
      <ItemSubmenu name="GLÓRIA" />
      <ItemSubmenu name="ACLAMAÇÃO" />
      <ItemSubmenu name="SANTO" />
      <ItemSubmenu name="OFERTÓRIO" />
      <ItemSubmenu name="COMUNHÃO" />
      <ItemSubmenu name="PÓS COMUNHÃO" />
      <ItemSubmenu name="FINAL" />
    </div>
  );
};

export default Submenu;
