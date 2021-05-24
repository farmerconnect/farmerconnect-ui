import * as S from './styles';
import { IIconProps } from './interfaces';
import * as icons from '../';

const IconList = ({ fill, ...props }: IIconProps) => {
  const handleCopy = async (name: string) => {
    navigator.clipboard.writeText(`import { ${name} } from "farmerconnect-ui/components/Icons"`);
  };

  return (
    <>
      <S.Title style={{ color: fill }}>Click any icon to copy the import statement to clipboard</S.Title>
      <S.Table>
        {Object.values(icons).map((Icon) => (
          <S.Cell onClick={() => handleCopy(Icon.name)}>
            <Icon fill={fill} {...props} />
            <span>{Icon.name}</span>
          </S.Cell>
        ))}
      </S.Table>
    </>
  );
};

export default IconList;
