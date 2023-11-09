import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, List, Tag, Trash, Type } from "react-feather";
import { colorsList } from "../../../Helper/Util";
import Modal from "../../Modal/Modal";
import CustomInput from "../../CustomInput/CustomInput";

import { ICard, ILabel, ITask } from "../../../Interfaces/Kanban";
import Chip from "../../Common/Chip";

interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
function CardInfo(props: CardInfoProps) {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<ICard>({
    ...card,
  });

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item) => item.completed
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const updateDate = (date: string) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);

  const calculatedPercent = calculatePercent();

  return (
    <Modal onClose={onClose}>
      <div className="p-[30px] flex flex-col gap-[30px] min-w-[550px] w-fit max-w-[650px] h-fit">
        <div className="w-[100%] flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            <p className="font-bold text-[1.2rem]">Title</p>
          </div>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="w-[100%] flex flex-col gap-[10px] ">
          <div className="flex gap-[10px] items-center">
            <p className="font-bold text-[1.2rem]">Description</p>
          </div>

          <div className="border-none border ">
            <CustomInput
              defaultValue={cardValues.desc}
              text={cardValues.desc || "Add a Description"}
              placeholder="Enter description"
              onSubmit={updateDesc}
            />
          </div>
        </div>

        <div className="w-[100%] flex flex-col gap-[10px]">
          <div className="flex gap-[10px] items-center">
            <p className="font-bold text-[1.2rem]">Date</p>
          </div>
          <input
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
