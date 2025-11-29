import earlyAccessCardData from "../mockData/earlyAccessCardData";

export const UpperHeader = ({upper_header}) => {
    return <p className="early_access_card_upper_header">
          {upper_header}
        </p>;
  };
  
  export const Header = ({header}) => {
    return <h3 className="early_access_card_header">
            {header}
          </h3>;
  };
  
  export const Button = ({ title }) => {
    return <button className="early_access_card_btn">
            {title}
        </button>;
  };
  
export const EarlyAccessCard = () => {
    return <>
            <div className="early_access_card_background">
            <div>
                {<UpperHeader upper_header={earlyAccessCardData.upper_header}/>}
                {<Header header={earlyAccessCardData.header}/>}
            </div>
                {<Button title={earlyAccessCardData.btn.title}/>}
            </div>
          </>;
};


export default EarlyAccessCard;
