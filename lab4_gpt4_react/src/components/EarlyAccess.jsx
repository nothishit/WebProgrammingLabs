import earlyAccessData from "../mockData/earlyAccessData";

export const BeforeHeader = ({before_header}) => {
    return <p className="right__before_header">{before_header}</p>;
  };

export const Header = ({header}) => {
    return <h2 className="right__header">{header}</h2>;
};

export const Description = ({description: {description, href}}) => {
return <>
        <p className="right__description">
            {description}
        </p>
        <a href={href} className="right__cta">Запросить ранний доступ</a>
    </>;
};

export const MyApps = ({app: { src, alt }}) => {
    return <img src={src} alt={alt} />;
};


export const EarlyAccess = () => {
    return <>
        <div className="early_access_section__left">
            {<MyApps app={earlyAccessData.my_apps}/>}
        </div>
        <div className="early_access_section__right">
            {<BeforeHeader before_header={earlyAccessData.before_header} />}
            {<Header header={earlyAccessData.header}/>}
            {<Description description={earlyAccessData.description}/>}
        </div>
    </>;
}

export default EarlyAccess;