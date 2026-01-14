import { MdVerified } from "react-icons/md"; 
import { MdOutlineVerified } from "react-icons/md"; 
/* eslint-disable @next/next/no-img-element */
const CreateCard = ({ card }) => (
  <div className="p-4 bg-white text-black rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
    <div className="flex gap-2">
      <img className="size-11 rounded-full" src={card.image} alt="User Image" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p>{card.name}</p>
          <MdVerified  size={17} color="#5D58FC"/>
        </div>
        <span className="text-xs text-slate-500">{card.handle}</span>
      </div>
    </div>
    <p className="text-sm py-4 text-gray-800">{card.message}</p>
  </div>
);

export default CreateCard;
