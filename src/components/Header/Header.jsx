import React from 'react';
import HeaderItem from './HeaderItem';

// FILES
import image from '../../img/cloud.png'

// STYLE
import S from './Header.module.css';
import S_all from '../App/App.module.css'
const { header, burger, burger_item, menu, logo, logo_item, logo_item_description } = S;
const { container } = S_all;

function Header() {
  return (
    <header className={header}>
      <div className={container}>

        <div className={burger}>
          <span className={burger_item}></span>
          <span className={burger_item}></span>
          <span className={burger_item}></span>
        </div>

        <div className={menu}>
          <HeaderItem text={'Главная'} path={"/"} nestedLinks={false} />
          <HeaderItem text={'Абонентское обслуживание'} path={"/subscription-service"} nestedLinks={true} />
          <HeaderItem text={'Разовое обслуживание'} path={"/one-time-service"} nestedLinks={false} />
          <HeaderItem text={'Стоимость'} path={"/price"} nestedLinks={false} />
          <HeaderItem text={'Контакты'} path={"/contacts"} nestedLinks={false} />
        </div>

      </div>

      <div className={logo}>
        <div className={container}>
          <div className={logo_item}>
            <img src={image} alt="cloud" />
            <span>
              IT-услуги
            </span>
            <div className={logo_item_description}>
              Комплексный пакет IT-решений
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
