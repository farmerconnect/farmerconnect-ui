import { ReactNode } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import * as S from './styles';

type LabelSwitchProps = {
  labels?: ReactNode[];
  currentLabel?: number;
  disabledLabels?: number[];
  onChange?: (tab: number) => void;
};

const LabelSwitch = ({
  labels = ['Label 1', 'Label 2'],
  currentLabel = 0,
  disabledLabels = [],
  onChange = () => {},
  ...props
}: LabelSwitchProps) => {
  const handleSelectLabel = (label: number) => {
    if (disabledLabels.includes(label)) return;
    onChange(label);
  };

  return (
    <AnimateSharedLayout>
      <S.Container {...props}>
        {labels.map((label, index) => (
          <S.LabelItem
            onClick={() => handleSelectLabel(index)}
            selected={currentLabel === index}
            disabled={disabledLabels.includes(index)}
            key={`tab ${index}`}
          >
            <S.LabelText>{label}</S.LabelText>
            {currentLabel === index && (
              <motion.div className="selected" layoutId="selected" transition={{ duration: 0.1 }} />
            )}
          </S.LabelItem>
        ))}
      </S.Container>
    </AnimateSharedLayout>
  );
};

export default LabelSwitch;
