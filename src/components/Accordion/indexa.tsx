import { useState } from "react";
import styles from "./Accordion.module.scss";

interface QnA {
  question: string;
  answer: string;
}

const QnAs: QnA[] = [
  {
    question: "Item 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum sollicitudin eros, non sagittis sapien consequat vel. Praesent vel tortor ac mi placerat condimentum. Donec dictum posuere odio vel feugiat. Aenean sed sem tincidunt, rhoncus magna sit amet, convallis justo. Curabitur vitae imperdiet magna, non pharetra est. Proin eget auctor.",
  },
  {
    question: "Item 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem urna, aliquam non tortor id, vulputate pellentesque turpis. Duis euismod eros non facilisis sodales. Nulla vel nisi vel justo tincidunt sodales. Phasellus tincidunt finibus magna, et porta ligula. Suspendisse porttitor nec neque sed faucibus. Morbi dignissim fringilla purus vitae lobortis.",
  },
  {
    question: "Item 3",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed pulvinar lacus. Sed lobortis sagittis ex, eu rhoncus erat interdum a. Ut eros mauris, aliquam eu leo ut, interdum sodales felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vestibulum, massa faucibus aliquam tempor, orci.",
  },
  {
    question: "Item 4",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed pulvinar lacus. Sed lobortis sagittis ex, eu rhoncus erat interdum a. Ut eros mauris, aliquam eu leo ut, interdum sodales felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras vestibulum, massa faucibus aliquam tempor, orci.",
  },
];

interface Props {
  QnA: QnA;
  index: number;
}

const AccordionItem = ({ QnA, index }: Props) => {
  return <div></div>;
};

const Accordion = () => {
  let indexPlus;

  const [active, setActive] = useState(0);

  const eventHandler = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setActive(index);
    console.log(active);
  };

  const indexCount = (index: number) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  return (
    <div>
      <form>
        {QnAs.map((tab, index) => (
          <div key={index}>
            <h3>
              <button
                onClick={(e: React.MouseEvent) => eventHandler(e, index)}
                tabIndex={indexCount(index)}
              >
                <span className="title-wrapper">
                  {tab.question}|{index}
                  {/* <span className={active === index ? "plus" : "minus"}></span> */}
                </span>
              </button>
            </h3>
            <div
              id={"sect-" + indexCount(index)}
              className={active === index ? styles.opened : styles.closed}
            >
              {tab.answer}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Accordion;
