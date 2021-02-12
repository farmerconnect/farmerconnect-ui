import React, { useState, useEffect, useRef } from 'react';
import { IComboboxProps } from './interfaces';
import { Container, ContainerCombo } from './styles';
import Combo from './Combo'
import Content from './Content'

const content = [
    {
        name: 'Product 1',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    },
    {
        name: 'Product 2',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    }
]

const content2 = [
    {
        name: 'Product 3',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    },
    {
        name: 'Product 4',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    }
]

const Combobox: React.FC<IComboboxProps> = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [actualContent, setActualContent] = useState([])
    const [selectedContent, setSelectedContent] = useState([]);
    const [disable, setDisable] = useState(true);

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

    /* useEffect(() => {
        if(selectedContent.length > 0) setDisable(false)
    }, [selectedContent]) */

    const handleOpenContent = (content:any) => {
        setOpen(!open)
        setActualContent(content)
    }

    const handleSelectItem = (content: any) => {
        setSelectedContent(content)
        setDisable(false)
    }

    return (
        <Container ref={wrapperRef}>
            <ContainerCombo>
                <Combo
                    openContent={() => handleOpenContent(content)}
                    open={open}
                />
                <Combo
                    openContent={() => handleOpenContent(content2)}
                    open={open}
                    disabled={disable}
                />
            </ContainerCombo>
            {
                open && actualContent &&
                <Content
                    open={open}
                    content={actualContent}
                    itemSelect={handleSelectItem}
                />
            }
        </Container>
    )
}

export default Combobox;
