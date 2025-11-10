export const createHeaderTemplate = (header) => {
  return `
        <h2 class="special_header">
          ${header}
        </h2>
      `;
};

export const createCardTemplate = ({ num, src, alt, data, title }) => {
  const template = `
      <div class="container_card">
        <img
        class="cards_section_img"
        src="${src}"
        alt="${alt}"
        />
        <div class="inf_block">
        <a class="data_for_card"> ${data} </a>
        <h3 class="card_header">
            ${title}
        </h3>
        <div class="special_filler"></div>
        <a href="#" class="read-button"> Читать полную статью </a>
        </div>
      </div>
  `;

  if (num == 1) {
    return `<div class="left_block_ex">` + template + `</div>`;
  } else if (num == 2) {
    return `<div class="right_block_ex">
                  <div class="left_bl">
                    ${template}`;
  } else if (num == 3) {
      return `${template}
            </div>`;
  } else if (num == 4) {
      return `<div class="right_bl"> 
                ${template}`;
  } else if (num == 5) {
      return `${template}</div></div>`;
  }

  return template;
};

export const examplesTemplate = ({ header, examples }) => {
  const headerTemplate = createHeaderTemplate(header);
  const cardsTemplate = examples
    .map((example) => createCardTemplate(example))
    .join("");

  const resultTemplate = `
      <div class="special_header_block">
          ${headerTemplate}
          </div>

        <div class="blocks">
            ${cardsTemplate}
        </div>
  `;

  return resultTemplate;
};
