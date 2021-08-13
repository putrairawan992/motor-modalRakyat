import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { AiFillSound } from 'react-icons/ai';
import cn from 'classnames';
import style from './style.module.scss';

const Index = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        ONLINE SUPPORT
      </header>

      <div className={style.information}>
        <div className="d-flex w-100">
          <Image
            src="https://i.pravatar.cc/150?img=2"
            className={style.avatar}
          />

          <div className={style.identity}>
            <div className={cn(style.name, 'mb-2')}>John Doe</div>
            <div>Sed ut perspiciatis unde omnis iste natus error sit</div>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-100 d-flex align-items-center justify-content-center mt-4 mb-3"
        >
          <AiFillSound />
          <span className="ml-2">+ 55 555 5555</span>
        </Button>

        <div className="text-danger">
          Contact Support Team
        </div>

        <div className="text-secondary">
          Learn more about <b>Motor</b>
        </div>
      </div>
    </div>
  );
};

export default Index;
