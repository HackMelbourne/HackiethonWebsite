import { useState } from "react";
import "./Accordion.scss";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.";

const data = [
  {
    title: "Pricing plans",
    paragraph,
  },
  {
    title: "How to apply",
    paragraph,
  },
  {
    title: "Purchasing process",
    paragraph,
  },
  {
    title: "Usage guides",
    paragraph,
  },
  {
    title: "Usage guides",
    paragraph,
  },
  {
    title: "Usage guides",
    paragraph,
  },
  {
    title: "Usage guides",
    paragraph,
  },
  {
    title: "Usage guides",
    paragraph,
  },
];

const Accordion = () => {
  return (
    <div {...{ className: "wrapper" }}>
      <ul {...{ className: "accordion-list" }}>
        {data.map((data, key) => {
          return (
            <li {...{ className: "accordion-list__item", key }}>
              <AccordionItem {...data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface Props {
  paragraph: string;
  title: string;
}

const AccordionItem = ({ paragraph, title }: Props) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      {...{
        className: `accordion-item ${opened ? "" : "accordion-item--opened"}`,
        onClick: () => {
          setOpened(!opened);
        },
      }}
    >
      <div {...{ className: "accordion-item__line" }}>
        <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
        <span {...{ className: "accordion-item__icon" }} />
      </div>
      <div {...{ className: "accordion-item__inner" }}>
        <div {...{ className: "accordion-item__content" }}>
          <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
