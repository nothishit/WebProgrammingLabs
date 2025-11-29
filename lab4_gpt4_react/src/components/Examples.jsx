import examplesData from "../mockData/examplesData";

export const Header = ({header}) => {
    return <h2 className="special_header">
            {header}
          </h2>;
  };
  
  export const Card = ({example: { src, alt, data, title, href }}) => {
    const template = <>
        <div className="container_card">
        <img
            className="cards_section_img"
            src={src}
            alt={alt}
        />
        <div className="inf_block">
            <a className="data_for_card"> {data} </a>
            <h3 className="card_header">
                {title}
            </h3>
            <div className="special_filler"></div>
            <a href={href} className="read-button"> Читать полную статью </a>
        </div>
        </div>
    </>;
  
    return template;
  };


export const Examples = () => {
    const resultTemplate = <>
    <div className="special_header_block">
      {<Header header={examplesData.header}/>}
    </div>

    <div className="blocks">
      <div className="left_block_ex">
      {examplesData.left_examples.map((example, index) => (
        <Card example={example} key={index}/>)
        )}
      </div>
      <div className="right_block_ex">
      {examplesData.right_examples.map((example, index) => (
        <Card example={example} key={index} />)
        )}
      </div>
    </div>
    </>;
  
    return resultTemplate;
}

export default Examples;