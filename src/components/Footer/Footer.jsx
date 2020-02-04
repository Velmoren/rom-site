import React from 'react';
import { NavLink } from 'react-router-dom';
// STYLE
import S from './Footer.module.css';
import S_all from '../App/App.module.css';

const { footer, footer_box, footer_item, footer_item_link, activeLink } = S;
const { container } = S_all;

function Footer() {
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={footer_box}>
          <div className={footer_item}>
            <NavLink to="/" className={`${footer_item_link} path-links`} exact activeClassName={activeLink}>Главная</NavLink>
            <NavLink to="/contacts" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Связаться с нами</NavLink>
            <NavLink to="/one-time-service" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Разовое обслуживание</NavLink>
            <NavLink to="/price" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Стоимость услуг</NavLink>
          </div>
          <div className={footer_item}>
            <NavLink to="/subscription-service" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Абонентское обслуживание</NavLink>
            <NavLink to="/comfort" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Комфорт</NavLink>
            <NavLink to="/security" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Безопасность</NavLink>
            <NavLink to="/innovation" className={`${footer_item_link} path-links`} activeClassName={activeLink}>Инновации</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
