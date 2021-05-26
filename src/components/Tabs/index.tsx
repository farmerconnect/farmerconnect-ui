import { ReactNode } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import * as S from './styles';

type TabsProps = {
  tabs?: ReactNode[];
  currentTab?: number;
  disabledTabs?: number[];
  onChange?: (tab: number) => void;
};

const Tabs = ({
  tabs = ['Tab 1', 'Tab 2', 'Tab 3'],
  currentTab = 0,
  disabledTabs = [],
  onChange = () => {},
  ...props
}: TabsProps) => {
  const handleSelectTab = (tab) => {
    if (disabledTabs.includes(tab)) return;
    onChange(tab);
  };

  return (
    <AnimateSharedLayout>
      <S.Container {...props}>
        {tabs.map((tab, index) => (
          <S.TabItem
            onClick={() => handleSelectTab(index)}
            selected={currentTab === index}
            disabled={disabledTabs.includes(index)}
            key={`tab ${index}`}
          >
            {tab}
            {currentTab === index && (
              <motion.div className="selected" layoutId="selected" transition={{ duration: 0.1 }} />
            )}
          </S.TabItem>
        ))}
      </S.Container>
    </AnimateSharedLayout>
  );
};

export default Tabs;
