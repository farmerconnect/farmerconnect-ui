import React, { useState, useEffect, useRef } from 'react';
import { IComboboxProps } from './interfaces';
import { Container, ContainerCombo } from './styles';
import Combo from './Combo'
import Content from './Content'

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
    secondItemRender
}) => {

    const [open, setOpen] = useState<boolean>(false);
    const [actualContent, setActualContent] = useState<any[]>([])
    const [selectedContent, setSelectedContent] = useState<any[]>([]);
    const [selectedContent2, setSelectedContent2] = useState<any[]>([]);
    const [disable, setDisable] = useState<boolean>(true);
    const [idOpened, setIdOpened] = useState<number | null>(null);
    const [multiple, setMultiple] = useState(false);
    const [content, setContent] = useState<any[]>(firstContent)
    const [content2, setContent2] = useState<any[]>([])
    const [disableButtonsContent, setDisableButtonsContent] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [limitReached, setLimitReached] = useState<boolean>(false);


    const wrapperRef = useRef(null);

    const handleClickCombo = (e: any) => {
        //@ts-ignore
        if(wrapperRef?.current && wrapperRef.current.contains(e.target)){
            return
        } 
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickCombo, true);
    
        return () => {
          document.removeEventListener("click", handleClickCombo, true);
        };
    }, []);

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    useEffect(()=>{
        if(firstContent) setContent(firstContent)
        if(secondContent) {
            setSelectedContent2([])
            setContent2(secondContent)
            setDisableButtonsContent(true)
            setLimitReached(false)
        }
        if(clear) {
            setContent2([])
            setSelectedContent([])
            setSelectedContent2([])
            setDisableButtonsContent(true)
            setDisable(true)
            setLimitReached(false)
        }
    }, [firstContent, secondContent, clear])

    const handleOpenContent = (content:any, id: number) => {
        setOpen(!open)
        setActualContent(content)
        setIdOpened(id)
        if(id === 1){
            setMultiple(false)
        } else {
            setMultiple(true)
        }
    }

    const handleSelectItem = (e: any, item: any) => {
        e.stopPropagation();
        if(idOpened === 1) {
            setSelectedContent(item)
            setOpen(false)
            onChange(item, 0)
            setSelectedContent2([])
            setDisableButtonsContent(true)
            setLimitReached(false)
            if(secondContent) setContent2(secondContent)
        } else {
            item.checked = !item.checked
            if(item.checked === false) {
                const id = item.id
                const contentFiltered = selectedContent2.filter(content => (content.id !== id))
                setSelectedContent2(contentFiltered)
                const newContent = content2.map(content => {
                    if(content.id === id) {
                        content.checked = false;
                    }
                    return content;
                })
                setContent2(newContent)
                const status = contentFiltered.length > 0 ? true : false
                if(status === true) {
                    setDisableButtonsContent(false)
                } else {
                    setDisableButtonsContent(true)
                }
                if(contentFiltered.length >= limit) {
                    setLimitReached(true)
                } else {
                    setLimitReached(false)
                }
            } else {
                const newContentSelected = [...selectedContent2, item]
                setSelectedContent2(newContentSelected)
                const newContent = content2.map(content => (content))
                setContent2(newContent)
                setDisableButtonsContent(false)
                if(newContentSelected.length >= limit) {
                    setLimitReached(true)
                } else {
                    setLimitReached(false)
                }
            }
        }
        setDisable(false)
    }

    const clearSelected = () => {
        if(idOpened === 1) {
            setSelectedContent([])
        } else {
            setSelectedContent2([])
            const newContent = content2.map(content => {
                content.checked = false
                return content
            })
            setContent2(newContent)
            setDisableButtonsContent(true)
            setLimitReached(false)
        }
        onChange([], 1)
    }

    const confirmSelected = () => {
        setOpen(false)
        onChange(selectedContent2, 1)
    }

    const handleSearch = (value:string) => {
        const contentToFilter = idOpened === 1 ? content : content2
        const filtered = contentToFilter.filter(item => {
            return item.id.toLowerCase().includes(value.toLowerCase())
        })
        setActualContent(filtered)
    }

    return (
        <Container ref={wrapperRef}>
            <ContainerCombo>
                <Combo
                    openContent={() => handleOpenContent(content, 1)}
                    open={open}
                    first={true}
                    textCombo={isLoading ? 'Loading' : textFirstCombo}
                />
                <div className={open && idOpened === 1 ? 'comboDivider open' : 'comboDivider'}></div>
                <Combo
                    openContent={() => handleOpenContent(content2, 2)}
                    open={open}
                    disabled={disable}
                    textCombo={isLoading ? 'Loading' : textSecondCombo}
                />
            </ContainerCombo>
            {
                open && actualContent && !isLoading &&
                <Content
                    open={open}
                    content={actualContent}
                    itemSelect={(e:any, item: any) => handleSelectItem(e, item)}
                    multiple={multiple}
                    disableButtons={disableButtonsContent}
                    handleClear={() => clearSelected()}
                    handleConfirm={() => confirmSelected()}
                    onSearch={(value:string) => handleSearch(value)}
                    textSearch={textSearch}
                    textButtonClear={textButtonClear}
                    textButtonConfirm={textButtonConfirm}
                    limitReached={limitReached}
                    firstContentItemRender={firstItemRender}
                    secondContentItemRender={secondItemRender}
                />
            }
        </Container>
    )
}

export default ComboBoxMulti;
