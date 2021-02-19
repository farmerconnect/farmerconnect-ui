import React, { useState, useEffect, useRef } from 'react';
import { IComboboxProps } from './interfaces';
import { Container, ContainerCombo } from './styles';
import Combo from './Combo'
import Content from './Content'

const componentContent = [
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

const componentContent2 = [
    {
        name: 'Product 3',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
    {
        name: 'Product 4',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
    {
        name: 'Product 5',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
    {
        name: 'Product 6',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
    {
        name: 'Product 7',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
    {
        name: 'Product 8',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        },
        checked: false
    },
]

const Combobox: React.FC<IComboboxProps> = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [actualContent, setActualContent] = useState([])
    const [selectedContent, setSelectedContent] = useState([]);
    const [selectedContent2, setSelectedContent2] = useState<any[]>([]);
    const [disable, setDisable] = useState(true);
    const [idOpened, setIdOpened] = useState<number | null>(null);
    const [multiple, setMultiple] = useState(false);
    const [content, setContent] = useState<any[]>(componentContent)
    const [content2, setContent2] = useState<any[]>(componentContent2)


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
        } else {
            item.checked = !item.checked
            if(item.checked === false) {
                const name = item.name
                let contentFiltered = content2.filter(item => (item.name !== name))
                setSelectedContent2(contentFiltered)
            } else {
                setSelectedContent2([...selectedContent2, item])
            }
            setContent2([...content2, item])
        }
        setDisable(false)
    }

    const clearSelected = () => {
        console.log('clear')
        if(idOpened === 1) {
            setSelectedContent([])
        } else {
            setSelectedContent2([])
        }
    }

    const confirmSelected = () => {
        console.log('confirmed')
    }

    return (
        <Container ref={wrapperRef}>
            {JSON.stringify(selectedContent)}
            {JSON.stringify(selectedContent2)}
            <ContainerCombo>
                <Combo
                    openContent={() => handleOpenContent(content, 1)}
                    open={open}
                    first={true}
                />
                <div className={open ? 'comboDivider open' : 'comboDivider'}></div>
                <Combo
                    openContent={() => handleOpenContent(content2, 2)}
                    open={open}
                    disabled={disable}
                />
            </ContainerCombo>
            {
                open && actualContent &&
                <Content
                    open={open}
                    content={actualContent}
                    itemSelect={(e:any, item: any) => handleSelectItem(e, item)}
                    multiple={multiple}
                    handleClear={() => clearSelected()}
                    handleConfirm={() => confirmSelected()}
                />
            }
        </Container>
    )
}

export default Combobox;
