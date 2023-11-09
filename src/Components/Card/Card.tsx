import React, { useState } from "react";
import { AlignLeft, CheckSquare, Clock, MoreHorizontal } from "react-feather";
import { formatDate } from "../../Helper/Util";
import { ICard } from "../../Interfaces/Kanban";
import Chip from "../Common/Chip";
import Dropdown from "../Dropdown/Dropdown";
import {BsTrash} from "react-icons/bs"

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
  const { id, title, desc, date, tasks, labels } = card;
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
        <div className="flex items-center c gap-40">

        <div className="flex font-bold text-2xl leading-[1.875rem] ">{title}</div>
        <p onClick={() => removeCard(boardId, id)}
        className="text-2xl"
        ><BsTrash/></p>
        </div>
        <div>
          <p title={desc}>
            <AlignLeft />
          </p>
        </div>
        <div className="flex justify-between items-center">
          {date && (
            <p className="rounded-full p-4 px-12 bg-gray-200 text-black w-fit-content text-[14px] leading-[21px] flex gap-5 items-center">
              <Clock className="card-footer-icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card-footer-item">
              <CheckSquare className="h-[13px] w-[13px]" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
