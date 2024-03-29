"use client";
import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import CustomInput from "../CustomInput/CustomInput";
import {BsTrash} from "react-icons/bs"

import "./Board.css";
import { IBoard, ICard } from "../../Interfaces/Kanban";


interface BoardProps {
  board: IBoard;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}

function Board(props: BoardProps) {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="min-w-[290px] w-[290px] overflow-y-auto flex-basis-290 flex flex-col gap-20 text-[#17394d] bg-yellow-400 h-max max-h-full rounded-md shadow-lg shadow-gray-200">

      <div className="bg-[rgba(223,227,230,0.55)] p-3 rounded-3" key={board?.id}>

        <div className="board-header flex items-center justify-between p-3">
          <p className="board-header-title font-bold flex items-center gap-[5px] text-[1.8rem] ">

            {board?.title}


            <span>{board?.cards?.length || 0}</span>
          </p>
          <div
            className="cursor-pointer relative"
          >
                <p onClick={() => removeBoard(board?.id)}
                className=" text-2xl hover:scale-110 duration-200 ease-in"
                ><BsTrash/></p>
          </div>
        </div>
        <div className="bg-gray-200 p-2 rounded-lg flex flex-col gap-2 overflow-y-auto custom-scroll">
          {board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))}
          <CustomInput
            text="+ Add Task"
            placeholder="Enter Task Title"
            displayClass="board-add-card"
            editClass="board-add-card-edit"
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
