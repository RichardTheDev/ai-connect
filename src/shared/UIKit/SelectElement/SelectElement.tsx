import { useState } from "react";
import "./SelectElement.scss";
import { actions } from "../../../actions/slice";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";

interface OptionI {
  title: string;
  image: any;
}

export const SelectElement = () => {
  const chosenOptionIndex = useAppSelector((state) => state.dataType.value);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  // const [chosenOptionIndex, setChosenOptionIndex] = useState(0);

  const selectOptions: OptionI[] = [
    {
      title: "List",
      image: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.8335 5.84334C5.8335 5.38311 6.20659 5.01001 6.66683 5.01001H16.6668C17.1271 5.01001 17.5002 5.38311 17.5002 5.84334C17.5002 6.30358 17.1271 6.67668 16.6668 6.67668H6.66683C6.20659 6.67668 5.8335 6.30358 5.8335 5.84334Z"
            fill="#6F767E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.8335 10.0101C5.8335 9.54985 6.20659 9.17676 6.66683 9.17676H16.6668C17.1271 9.17676 17.5002 9.54985 17.5002 10.0101C17.5002 10.4703 17.1271 10.8434 16.6668 10.8434H6.66683C6.20659 10.8434 5.8335 10.4703 5.8335 10.0101Z"
            fill="#6F767E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.8335 14.1766C5.8335 13.7164 6.20659 13.3433 6.66683 13.3433H16.6668C17.1271 13.3433 17.5002 13.7164 17.5002 14.1766C17.5002 14.6368 17.1271 15.0099 16.6668 15.0099H6.66683C6.20659 15.0099 5.8335 14.6368 5.8335 14.1766Z"
            fill="#6F767E"
          />
          <path
            d="M4.16667 5.84334C4.16667 6.30358 3.79357 6.67668 3.33333 6.67668C2.8731 6.67668 2.5 6.30358 2.5 5.84334C2.5 5.38311 2.8731 5.01001 3.33333 5.01001C3.79357 5.01001 4.16667 5.38311 4.16667 5.84334Z"
            fill="#6F767E"
          />
          <path
            d="M4.16667 10.0101C4.16667 10.4703 3.79357 10.8434 3.33333 10.8434C2.8731 10.8434 2.5 10.4703 2.5 10.0101C2.5 9.54985 2.8731 9.17676 3.33333 9.17676C3.79357 9.17676 4.16667 9.54985 4.16667 10.0101Z"
            fill="#6F767E"
          />
          <path
            d="M4.16667 14.1766C4.16667 14.6368 3.79357 15.0099 3.33333 15.0099C2.8731 15.0099 2.5 14.6368 2.5 14.1766C2.5 13.7164 2.8731 13.3433 3.33333 13.3433C3.79357 13.3433 4.16667 13.7164 4.16667 14.1766Z"
            fill="#6F767E"
          />
        </svg>
      ),
    },
    {
      title: "Graph",
      image: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.49984 1.67676C2.96007 1.67676 3.33317 2.04985 3.33317 2.51009V15.8434C3.33317 16.3037 3.70627 16.6768 4.1665 16.6768H17.4998C17.9601 16.6768 18.3332 17.0499 18.3332 17.5101C18.3332 17.9703 17.9601 18.3434 17.4998 18.3434H4.1665C2.78579 18.3434 1.6665 17.2241 1.6665 15.8434V2.51009C1.6665 2.04985 2.0396 1.67676 2.49984 1.67676Z"
            fill="#1A1D1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.83333 6.67676C6.29357 6.67676 6.66667 7.04985 6.66667 7.51009V14.1768C6.66667 14.637 6.29357 15.0101 5.83333 15.0101C5.3731 15.0101 5 14.637 5 14.1768V7.51009C5 7.04985 5.3731 6.67676 5.83333 6.67676Z"
            fill="#1A1D1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.16683 11.6768C9.62707 11.6768 10.0002 12.0499 10.0002 12.5101V14.1768C10.0002 14.637 9.62707 15.0101 9.16683 15.0101C8.70659 15.0101 8.3335 14.637 8.3335 14.1768V12.5101C8.3335 12.0499 8.70659 11.6768 9.16683 11.6768Z"
            fill="#1A1D1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4998 3.34326C12.9601 3.34326 13.3332 3.71636 13.3332 4.1766V14.1766C13.3332 14.6368 12.9601 15.0099 12.4998 15.0099C12.0396 15.0099 11.6665 14.6368 11.6665 14.1766V4.1766C11.6665 3.71636 12.0396 3.34326 12.4998 3.34326Z"
            fill="#1A1D1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8333 8.34326C16.2936 8.34326 16.6667 8.71636 16.6667 9.1766V14.1766C16.6667 14.6368 16.2936 15.0099 15.8333 15.0099C15.3731 15.0099 15 14.6368 15 14.1766V9.1766C15 8.71636 15.3731 8.34326 15.8333 8.34326Z"
            fill="#1A1D1F"
          />
        </svg>
      ),
    },
  ];

  const renderOption = (
    option: OptionI | undefined,
    index: number,
    isSelectedOption: boolean = false
  ) => {
    const clickHandler = isSelectedOption
      ? () => {
          setIsOpen(!isOpen);
        }
      : (index: number) => {
          setIsOpen(false);
          dispatch(actions.setIndex(index));
        };

    return (
      <div
        className="select-option"
        key={isSelectedOption ? "" : index}
        onClick={() => clickHandler(index)}
      >
        {option?.image}
        <h4>{option?.title}</h4>
        {isSelectedOption && (
          <svg
            className={`${isOpen ? "is-open" : ""}`}
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1802 0.66675L1.82017 0.666749C1.03017 0.666749 0.550171 1.39175 0.980171 1.95008L6.16017 8.73342C6.25036 8.85218 6.37513 8.95 6.52287 9.01778C6.67061 9.08557 6.83652 9.12111 7.00517 9.12111C7.17382 9.12111 7.33974 9.08557 7.48748 9.01778C7.63522 8.95 7.75998 8.85218 7.85017 8.73342L13.0202 1.95008C13.1177 1.82439 13.1728 1.67908 13.1795 1.5295C13.1862 1.37991 13.1443 1.23158 13.0583 1.10017C12.9723 0.968755 12.8453 0.859123 12.6908 0.78284C12.5362 0.706556 12.3598 0.666449 12.1802 0.66675Z"
              fill="black"
            />
          </svg>
        )}
      </div>
    );
  };

  function renderSelectedOption(): JSX.Element {
    const selectedOptionJSX: JSX.Element = renderOption(
      selectOptions?.find((_, index) => index === chosenOptionIndex),
      chosenOptionIndex,
      true
    );
    return selectedOptionJSX;
  }

  function renderAllOptions(): JSX.Element[] {
    const allOptionsJSX: JSX.Element[] = selectOptions.map(
      (option: OptionI, index: number) => renderOption(option, index)
    );
    return allOptionsJSX;
  }

  return (
    <div className="select-element">
      <div className="selected-element">{renderSelectedOption()}</div>
      <div className={`list-elements ${isOpen ? "is-open" : ""}`}>
        <div className="arrow-up"></div>
        <div className="all-options">{renderAllOptions()}</div>
      </div>
    </div>
  );
};
