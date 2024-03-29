
interface ButtonIconProps {
     icon: string;
     onClick: () => void;
     disabled: boolean;
}

const ButtonIcon = ({ icon, onClick, disabled }: ButtonIconProps) => {
     return (
          <button
               className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mx-2 rounded-md ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
               onClick={onClick}
               disabled={disabled}
          >
               {icon}
          </button>
     );
};

export default ButtonIcon;
