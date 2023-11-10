import React, { useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { formatDate } from "../../Helper/Util";
import { ICard } from "../../Interfaces/Kanban";
import Chip from "../Common/Chip";
import Dropdown from "../Dropdown/Dropdown";
import { BsTrash } from "react-icons/bs";

import CardInfo from "./CardInfo/CardInfo";
interface CardProps {
  card: ICard;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
function Card(props: CardProps) {
  const { card, boardId, removeCard, onDragEnd, onDragEnter, updateCard } =
    props;
  const { id, title, desc, date } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className="p-[10px] flex flex-col cursor-pointer gap-[10px] bg-[#fff]  rounded-[10px]  "
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center justify-between  ">
          <div className="flex font-bold text-4xl leading-[1.875rem] ">
            {title}
          </div>
          <p onClick={() => removeCard(boardId, id)} className="text-2xl  hover:scale-110 duration-200 ease-in-out">
            <BsTrash />
          </p>
        </div>

        <div>
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        <div className="flex justify-between items-center">
          {date && (
            <p className="rounded-full p-4 bg-gray-200 text-black w-fit-content text-[18px] leading-[21px] flex gap-3 items-center">
              <Clock className="scale-90" />
              {formatDate(date)}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
