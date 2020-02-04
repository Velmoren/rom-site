import React from 'react';
import { NavLink } from 'react-router-dom';

// STYLE
import S from './HeaderItem.module.css';
const { item, item_arrows, item_arrows_top, item_arrows_down, link_content, link_item, item_link, activeLink } = S;

function HeaderItem(props) {

  const { text, path, nestedLinks } = props;

  const NestedLinks = () => {
    return (
      <div className={link_content} >
        <NavLink to="/comfort" className={`${link_item} path-links`} activeClassName={activeLink}>Комфорт</NavLink>
        <NavLink to="/security" className={`${link_item} path-links`} activeClassName={activeLink}>Безопасность</NavLink>
        <NavLink to="/innovation" className={`${link_item} path-links`} activeClassName={activeLink}>Инновации</NavLink>
      </div >
    )
  }

  const nestedLinksContent = nestedLinks ? <NestedLinks /> : null

  return (
    <div className={item}>
      <div className={item_arrows} data-arrows="#first-section">
        <div className={item_arrows_top}></div>
        <div className={item_arrows_down}></div>
      </div>
      <div className={item_link}>
        <NavLink to={path} className={`${link_item} path-links`} exact activeClassName={activeLink}>{text}</NavLink>
        {nestedLinksContent}
      </div>
    </div>
  );
}

export default HeaderItem;
