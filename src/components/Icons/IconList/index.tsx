import * as S from "./styles";
import { IIconProps } from "./interfaces";
import * as icons from "../";

const IconList = ({ fill, ...props }: IIconProps) => {
  return (
    <S.Table>
      {Object.values(icons).map((Icon) => (
        <S.Cell>
          <Icon fill={fill} {...props} />
          <span>{Icon.name}</span>
        </S.Cell>
      ))}
    </S.Table>
  );
};

export default IconList;
