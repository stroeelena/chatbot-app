import React from "react";

const GeneralComponent = (props) => {
  const { data, handler, message } = props;

  const options = data.map((item) => ({
    name: item.name,
    handler: (selectedValue) => handler(selectedValue),
    id: item.id,
  }));

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id + option.name}
      onClick={() => option.handler(option.name)}
      className="option-button"
    >
      {option.name}
    </button>
  ));

  return (
    <div className="options-container">
      <div className="options-message">{message}</div>
      <div className="options-buttons">{buttonsMarkup}</div>
    </div>
  );
};

export default GeneralComponent;
