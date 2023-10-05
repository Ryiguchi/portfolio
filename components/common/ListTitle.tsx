import type { FC } from 'react';
import { MdArrowOutward } from 'react-icons/md';

type listTitleProps = {
  title: string;
};

const ListTitle: FC<listTitleProps> = ({ title }) => {
  return (
    <div className="item_title">
      <h3>{title}</h3>
      <div>
        <MdArrowOutward className="item_icon" />
      </div>
    </div>
  );
};

export default ListTitle;
