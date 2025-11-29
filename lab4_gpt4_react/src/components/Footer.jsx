import footerData from "../mockData/footerData";


export const Header = ({header}) => {
    return <h2>
              {header}
            </h2>;
  };
  
  export const Links = ({link, href}) => {
    return <li><a href={href}>{link}</a></li>;
  };
  
  export const Menu = ({block: { header, links, href }}) => {
    const template = <div className="footer_block">
          <p className="footer_heading_first_left">{header}</p>
          <ul className="footer_menu">
              {links.map((link, index) => (<Links key={index} link={link} href={href}/>))}
          </ul>
    </div>;
  
    return template;
  };
  
  export const Footer = () => {
    return <>
            <div className="fifth_part_page">
              <div className="fpp_upper_container">
                  {<Header header={footerData.header}/>}
                  <a href={footerData.href}><button className="fpp_button__Request_btn">Запросить ранний доступ</button></a>
              </div>
    
              <div className="footer_blocks">
                  {footerData.columns.map((column, index) => (<Menu key={index} block={column}/>))}
              </div>
          </div>
          <div className="sixth_part">
              <p className = "footer_sixth">© 2023 GPT-3. Все права защищены.</p>
          </div>
          </>;
  };
  

export default Footer;