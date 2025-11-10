import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initEarlyAccess from "../components/initEarlyAccess.js";
import initEarlyAccessCard from "../components/initEarlyAccessCard.js";
import initExamples from "../components/initExamples.js";
import initFooter from "../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section early_access_section"></section>
    <section class="section early_access_card"></section>
    <section class="section_examples"></section>
    <section class="fifth_part_page"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Ранний доступ"
  const earlyAccessNode = rootNode.querySelector(".early_access_section");
  initEarlyAccess(earlyAccessNode);

  // инициализация раздела "Карточка ранний доступ"
  const earlyAccessCardNode = rootNode.querySelector(".early_access_card");
  initEarlyAccessCard(earlyAccessCardNode);

  // инициализация раздела "Карточки"
  const examplesNode = rootNode.querySelector(".section_examples");
  initExamples(examplesNode);

  // инициализация раздела "Футер"
  const footerNode = rootNode.querySelector(".fifth_part_page");
  initFooter(footerNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
