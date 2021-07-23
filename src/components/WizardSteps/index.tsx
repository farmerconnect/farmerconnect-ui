import { Container } from './styles';
import WizardStep from './WizardStep';
import { IWizardStepsProps } from './interfaces';

const WizardSteps: React.FC<IWizardStepsProps> = (props: IWizardStepsProps) => {
  let foundActive = false;

  return (
    <Container>
      {props.wizardSteps.map((wizardStep, index) => {
        foundActive = foundActive || wizardStep.active;
        return (
          <WizardStep
            key={index}
            active={wizardStep.active}
            done={!foundActive}
            text={wizardStep.text}
            hasPrevious={index > 0}
            hasNext={index < props.wizardSteps.length - 1}
            doneColor={props.doneColor}
            undoneColor={props.undoneColor}
            titleColor={props.titleColor}
          />
        );
      })}
    </Container>
  );
};

export default WizardSteps;
