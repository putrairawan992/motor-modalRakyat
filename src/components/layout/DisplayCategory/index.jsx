import React, { Fragment } from 'react';
import style from './style.module.scss';
import categories from 'constant/categories';

const Index = () => {
  return (
    <Fragment>
      <div className="mb-5 pt-2"></div>

      <div className={style.container}>
        <header className={style.header}>
          CATEGORIES
        </header>

        <div>
          {categories.map((v, i) => (
            <div key={i} className={style['cat-item']}>
              <div className={style['cat-name']}>
                {v.icon}
                <span className="ml-4">{v.name}</span>
              </div>

              <div className={style['cat-count']}>
                {v.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style['view-all']}>
        VIEW ALL CATEGORIES
      </div>
    </Fragment>
  );
}

export default Index;
