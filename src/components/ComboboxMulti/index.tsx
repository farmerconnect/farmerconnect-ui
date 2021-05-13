import React, { useEffect, useRef, useReducer } from "react";
import {
  IComboboxProps,
  IInitialValues,
  IReducer,
  ActionType,
} from "./interfaces";
import { Container, ContainerCombo } from "./styles";
import Combo from "./Combo";
import Content from "./Content";

const INITIAL_VALUES: IInitialValues = {
  open: false,
  actualContent: [],
  selectedContent: [],
  selectedContent2: [],
  disable1: false,
  disable2: true,
  idOpened: 1,
  multiple: false,
  content: [],
  content2: [],
  disableButtonsContent: true,
  isLoading: true,
  limitReached: false,
};

const reducerCombo: React.Reducer<IInitialValues, IReducer> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.SET_FIRST_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case ActionType.SET_SECOND_CONTENT:
      return {
        ...state,
        content2: action.payload,
      };
    case ActionType.SET_SECOND_CONTENT_SELECTED:
      return {
        ...state,
        selectedContent2: action.payload.selectedContent2,
        disableButtonsContent: action.payload.disableButtonsContent,
        limitReached: action.payload.limitReached,
        disable1: action.payload.disable1,
        disable2: action.payload.disable2,
      };
    case ActionType.SET_CLEAR:
      return {
        ...state,
        content2: [],
        selectedContent: [],
        selectedContent2: [],
        disableButtonsContent: true,
        disable1: false,
        disable2: true,
        limitReached: false,
      };
    case ActionType.OPEN_CONTENT:
      return {
        ...state,
        open: !state.open,
        actualContent: action.payload.actualContent,
        idOpened: action.payload.idOpened,
        multiple: action.payload.multiple,
      };
    case ActionType.SELECT_ITEM:
      return {
        ...state,
        open: action.payload.open,
        selectedContent: action.payload.selectedContent,
        selectedContent2: action.payload.selectedContent2,
        disable1: action.payload.disable1,
        disable2: action.payload.disable2,
        disableButtonsContent: action.payload.disableButtonsContent,
        limitReached: action.payload.limitReached,
        content2: action.payload.content2,
      };
    case ActionType.CLEAR_FIRST_SELECTED:
      return {
        ...state,
        selectedContent: action.payload.selectedContent,
        disable1: action.payload.disable1,
      };
    case ActionType.CLEAR_SECOND_SELECTED:
      return {
        ...state,
        selectedContent2: action.payload.selectedContent2,
        content2: action.payload.content2,
        disableButtonsContent: action.payload.disableButtonsContent,
        limitReached: action.payload.limitReached,
        disable2: action.payload.disable2,
      };
    case ActionType.CONFIRM_SELECT:
      return {
        ...state,
        open: action.payload.open,
        disable2: action.payload.disable2,
      };
    case ActionType.SET_ACTUAL_CONTENT:
      return {
        ...state,
        actualContent: action.payload,
      };
    case ActionType.SET_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

const ComboBoxMulti: React.FC<IComboboxProps> = ({
  firstContent,
  secondContent,
  textFirstCombo,
  textSecondCombo,
  textSearch,
  textButtonClear,
  textButtonConfirm,
  onChange,
  loading,
  limit,
  clear,
  firstItemRender,
  secondItemRender,
}) => {
  const [state, dispatch] = useReducer(reducerCombo, INITIAL_VALUES);
  const {
    open,
    actualContent,
    selectedContent,
    selectedContent2,
    disable1,
    disable2,
    idOpened,
    multiple,
    content,
    content2,
    disableButtonsContent,
    isLoading,
    limitReached,
  } = state;

  const wrapperRef = useRef(null);

  const handleClickCombo = (e: any) => {
    //@ts-ignore
    if (wrapperRef?.current && wrapperRef.current.contains(e.target)) {
      return;
    }
    if (idOpened && idOpened !== 2) dispatch({ type: ActionType.SET_OPEN });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickCombo, true);

    return () => {
      document.removeEventListener("click", handleClickCombo, true);
    };
  }, []);

  useEffect(() => {
    dispatch({ type: ActionType.SET_ISLOADING, payload: loading });
  }, [loading]);

  useEffect(() => {
    if (firstContent)
      dispatch({ type: ActionType.SET_FIRST_CONTENT, payload: firstContent });
    if (secondContent) {
      const filterContent = secondContent.filter((el) => el.checked === true);
      if (!filterContent.length) {
        const setDisable2 = disable1 ? false : true;
        dispatch({
          type: ActionType.SET_SECOND_CONTENT_SELECTED,
          payload: {
            selectedContent2: [],
            disableButtonsContent: true,
            limitReached: false,
            disable1: disable1,
            disable2: setDisable2,
          },
        });
      } else {
        if (filterContent.length >= limit) {
          dispatch({
            type: ActionType.SET_SECOND_CONTENT_SELECTED,
            payload: {
              selectedContent2: filterContent,
              disableButtonsContent: false,
              limitReached: true,
              disable1: true,
              disable2: true,
            },
          });
        } else {
          dispatch({
            type: ActionType.SET_SECOND_CONTENT_SELECTED,
            payload: {
              selectedContent2: filterContent,
              disableButtonsContent: true,
              limitReached: false,
              disable1: true,
              disable2: false,
            },
          });
        }
      }
      dispatch({ type: ActionType.SET_SECOND_CONTENT, payload: secondContent });
    }
    if (clear) {
      dispatch({ type: ActionType.SET_CLEAR });
    }
  }, [firstContent, secondContent, clear]);

  const handleOpenContent = (content: any, id: number) => {
    const setMultiple = id === 1 ? false : true;
    dispatch({
      type: ActionType.OPEN_CONTENT,
      payload: {
        actualContent: content,
        idOpened: id,
        multiple: setMultiple,
      },
    });
  };

  const handleSelectItem = (e: any, item: any) => {
    e.stopPropagation();
    if (idOpened === 1) {
      onChange(item, 0);
      dispatch({
        type: ActionType.SELECT_ITEM,
        payload: {
          open: false,
          selectedContent: [item],
          selectedContent2: [],
          disable1: true,
          disable2: true,
          disableButtonsContent: true,
          limitReached: false,
          content2: secondContent,
        },
      });
    } else {
      item.checked = !item.checked;
      if (item.checked === false) {
        const id = item.id;
        const contentFiltered = selectedContent2.filter(
          (content) => content.id !== id
        );
        const newContent = content2.map((content) => {
          if (content.id === id) {
            content.checked = false;
          }
          return content;
        });
        const status = contentFiltered.length > 0 ? true : false;
        const setDisableButtonsContent = status ? false : true;
        let setLimitReached, setDisable2;
        if (contentFiltered.length >= limit) {
          setLimitReached = true;
          setDisable2 = true;
        } else {
          setLimitReached = false;
          setDisable2 = false;
        }
        dispatch({
          type: ActionType.SELECT_ITEM,
          payload: {
            open: true,
            selectedContent: selectedContent,
            selectedContent2: contentFiltered,
            disable1: disable1,
            disable2: setDisable2,
            disableButtonsContent: setDisableButtonsContent,
            limitReached: setLimitReached,
            content2: newContent,
          },
        });
      } else {
        const newContentSelected = [...selectedContent2, item];
        const newContent = content2.map((content) => content);
        let setLimitReached, setDisable2;
        if (newContentSelected.length >= limit) {
          setLimitReached = true;
          setDisable2 = true;
        } else {
          setLimitReached = false;
          setDisable2 = false;
        }

        dispatch({
          type: ActionType.SELECT_ITEM,
          payload: {
            open: true,
            selectedContent: selectedContent,
            selectedContent2: newContentSelected,
            disable1: disable1,
            disable2: setDisable2,
            disableButtonsContent: false,
            limitReached: setLimitReached,
            content2: newContent,
          },
        });
      }
    }
  };

  const clearSelected = () => {
    if (idOpened === 1) {
      dispatch({
        type: ActionType.CLEAR_FIRST_SELECTED,
        payload: {
          selectedContent: [],
          disable1: false,
        },
      });
    } else {
      const newContent = content2.map((content) => {
        content.checked = false;
        return content;
      });
      dispatch({
        type: ActionType.CLEAR_SECOND_SELECTED,
        payload: {
          selectedContent2: [],
          content2: newContent,
          disableButtonsContent: true,
          limitReached: false,
          disable2: false,
        },
      });
    }
    onChange([], 1);
  };

  const confirmSelected = () => {
    onChange(selectedContent2, 1);
    let setDisable2;
    if (selectedContent2.length >= limit) {
      setDisable2 = true;
    }
    dispatch({
      type: ActionType.CONFIRM_SELECT,
      payload: {
        open: false,
        disable2: setDisable2,
      },
    });
  };

  const handleSearch = (value: string) => {
    const contentToFilter = idOpened === 1 ? content : content2;
    const filtered = contentToFilter.filter((item) => {
      return item.id.toLowerCase().includes(value.toLowerCase());
    });
    dispatch({ type: ActionType.SET_ACTUAL_CONTENT, payload: filtered });
  };

  return (
    <Container ref={wrapperRef}>
      <ContainerCombo>
        <Combo
          openContent={(idNumber: number) =>
            handleOpenContent(content, idNumber)
          }
          open={open}
          disabled={disable1}
          first={true}
          textCombo={isLoading ? "Loading" : textFirstCombo}
          id={1}
          idOpened={idOpened}
          data-cy="first-combo"
        />
        <div
          className={
            open && idOpened === 1 ? "comboDivider open" : "comboDivider"
          }></div>
        <Combo
          openContent={(idNumber: number) =>
            handleOpenContent(content2, idNumber)
          }
          open={open}
          disabled={disable2}
          textCombo={isLoading ? "Loading" : textSecondCombo}
          id={2}
          idOpened={idOpened}
          data-cy="second-combo"
        />
      </ContainerCombo>
      {open && actualContent && !isLoading && (
        <Content
          open={open}
          content={actualContent}
          itemSelect={(e: any, item: any) => handleSelectItem(e, item)}
          multiple={multiple}
          disableButtons={disableButtonsContent}
          handleClear={() => clearSelected()}
          handleConfirm={() => confirmSelected()}
          onSearch={(value: string) => handleSearch(value)}
          textSearch={textSearch}
          textButtonClear={textButtonClear}
          textButtonConfirm={textButtonConfirm}
          limitReached={limitReached}
          firstContentItemRender={firstItemRender}
          secondContentItemRender={secondItemRender}
        />
      )}
    </Container>
  );
};

export default ComboBoxMulti;
