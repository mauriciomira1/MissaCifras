import { ElementType } from "react";

interface FormularioProps {
  icon?: ElementType;
}

const FormularioIcon = ({ icon: Icon }: FormularioProps) => {
  return (
    <div>
      <Icon className="w-20 h-8 text-white mt-3" />
    </div>
  );
};

export default FormularioIcon;
