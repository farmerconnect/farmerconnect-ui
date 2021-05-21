import React, { useEffect, useRef, useReducer, Fragment } from "react";
import {
  ISelectProps,
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
  disable: false,
  disableButtonsContent: true,
  isLoading: true,
  limitReached: false,
};

const reducerSelect: React.Reducer<IInitialValues, IReducer> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.SET_SINGLE_ITEM:
      return {
        ...state,
        selectedContent: action.payload,
        disable: true,
        limitReached: true,
        open: false,
      };
    case ActionType.SET_MULTIPLE_ITEM:
      return {
        ...state,
        open: action.payload.open,
        selectedContent: action.payload.selectedContent,
        disableButtonsContent: action.payload.disableButtonsContent,
        limitReached: action.payload.limitReached,
        actualContent: action.payload.actualContent,
      };
    case ActionType.SET_CLEAR:
      return {
        ...state,
        actualContent: action.payload,
        selectedContent: [],
        disableButtonsContent: true,
        disable: false,
        limitReached: false,
      };
    case ActionType.OPEN_CONTENT:
      return {
        ...state,
        open: !state.open,
        actualContent: action.payload.actualContent,
        multiple: action.payload.multiple,
      };
    case ActionType.CONFIRM_SELECT:
      return {
        ...state,
        open: action.payload.open,
        disable: action.payload.disable,
      };
    case ActionType.SET_ACTUAL_CONTENT:
      return {
        ...state,
        actualContent: action.payload.actualContent,
        selectedContent: action.payload.selectedContent,
        limitReached: action.payload.limitReached,
        disableButtonsContent: action.payload.disableButtonsContent,
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

const Select: React.FC<ISelectProps> = ({
  content,
  textSelect,
  searchOptions,
  textButtonClear,
  textButtonConfirm,
  onChange,
  loading,
  limit,
  clear,
  multiple,
  ItemRender,
}) => {
  const [
    {
      open,
      actualContent,
      selectedContent,
      disable,
      disableButtonsContent,
      isLoading,
      limitReached,
    },
    dispatch,
  ] = useReducer(reducerSelect, INITIAL_VALUES);
  const searchField = searchOptions.field || "";

  const wrapperRef = useRef(null);

  const handleClickCombo = (e: any) => {
    //@ts-ignore
    if (wrapperRef?.current && wrapperRef.current.contains(e.target)) {
      return;
    }

    if (open) dispatch({ type: ActionType.SET_OPEN });
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
    if (multiple) {
      const filterContent = content.filter((item) => item.checked === true);
      const isLimitReached = filterContent.length >= limit;
      if (!!filterContent.length) {
        dispatch({
          type: ActionType.SET_ACTUAL_CONTENT,
          payload: {
            actualContent: content,
            selectedContent: filterContent,
            limitReached: isLimitReached,
            disableButtonsContent: false,
          },
        });
      } else {
        dispatch({
          type: ActionType.SET_ACTUAL_CONTENT,
          payload: {
            actualContent: content,
            selectedContent: filterContent,
            limitReached: isLimitReached,
            disableButtonsContent: true,
          },
        });
      }
    } else {
      dispatch({
        type: ActionType.SET_ACTUAL_CONTENT,
        payload: {
          actualContent: content,
          selectedContent: [],
          limitReached: false,
          disableButtonsContent: true,
        },
      });
    }

    if (clear) {
      const newContent = content.map((content) => {
        content.checked = false;
        return content;
      });
      dispatch({ type: ActionType.SET_CLEAR, payload: newContent });
    }
  }, [content, clear]);

  const handleOpenContent = (content: any, id: number) => {
    dispatch({
      type: ActionType.OPEN_CONTENT,
      payload: {
        actualContent: content,
      },
    });
  };

  const handleSelectItem = (e: any, item: any) => {
    e.stopPropagation();
    if (!multiple) {
      onChange(item);
      dispatch({
        type: ActionType.SET_SINGLE_ITEM,
        payload: item,
      });
    } else {
      item.checked = !item.checked;
      const id = item.id;
      if (item.checked) {
        const newContentSelected = [...selectedContent, item];
        const isLimitReached = newContentSelected.length >= limit;
        const isButtonsDisabled = newContentSelected.length > 0 ? false : true;
        const newContent = actualContent.map((content) => {
          if (content.id === id) {
            return { ...content, checked: true };
          } else {
            return content;
          }
        });
        dispatch({
          type: ActionType.SET_MULTIPLE_ITEM,
          payload: {
            open: true,
            selectedContent: newContentSelected,
            disableButtonsContent: isButtonsDisabled,
            limitReached: isLimitReached,
            actualContent: newContent,
          },
        });
      } else {
        const id = item.id;
        const newContent = actualContent.map((content) => {
          if (content.id === id) {
            content.checked = false;
          }
          return content;
        });
        const contentFiltered = newContent.filter(
          (content) => content.checked === true
        );
        const isLimitReached = contentFiltered.length >= limit;
        const isButtonsDisabled = contentFiltered.length > 0 ? false : true;
        dispatch({
          type: ActionType.SET_MULTIPLE_ITEM,
          payload: {
            open: true,
            selectedContent: contentFiltered,
            disableButtonsContent: isButtonsDisabled,
            limitReached: isLimitReached,
            actualContent: newContent,
          },
        });
      }
    }
  };

  const clearSelected = () => {
    const newContent = content.map((content) => ({
      ...content,
      checked: false,
    }));
    dispatch({ type: ActionType.SET_CLEAR, payload: newContent });
    onChange(newContent);
  };

  const confirmSelected = () => {
    onChange(selectedContent);
    const isLimitReached = selectedContent.length >= limit;
    dispatch({
      type: ActionType.CONFIRM_SELECT,
      payload: {
        open: false,
        disable: isLimitReached,
      },
    });
  };

  const handleSearch = (value: string) => {
    const filtered = content.filter((item) => {
      return item?.[searchField].toLowerCase().includes(value.toLowerCase());
    });
    dispatch({
      type: ActionType.SET_ACTUAL_CONTENT,
      payload: {
        actualContent: filtered,
        selectedContent: selectedContent,
        limitReached: limitReached,
        disableButtonsContent: disableButtonsContent,
      },
    });
  };

  return (
    <Fragment>
      <Container ref={wrapperRef}>
        <ContainerCombo>
          <Combo
            openContent={(idNumber: number) =>
              handleOpenContent(content, idNumber)
            }
            open={open}
            disabled={disable}
            textCombo={textSelect}
            id={0}
            data-cy="first-combo"
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
            searchOptions={{
              visible: searchOptions.visible,
              textSearch: searchOptions.textSearch || "",
            }}
            textButtonClear={textButtonClear}
            textButtonConfirm={textButtonConfirm}
            limitReached={limitReached}
            itemRender={ItemRender}
          />
        )}
      </Container>
    </Fragment>
  );
};

export default Select;
