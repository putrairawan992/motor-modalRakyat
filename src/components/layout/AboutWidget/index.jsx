import React from 'react';
import style from './style.module.scss';

const Index = () => (
  <div className={style.container}>
    <header className={style.header}>
      About Motor
    </header>

    <div className={style.information}>
      <p><b>Sed ut perspiciatis</b> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <span className="text-danger">totam rem aperiam</span>, eaque ipsa quae ab illo inventore.</p>
    </div>
  </div>
);

export default Index;
