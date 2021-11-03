import styled, { css } from 'styled-components';
import {Button as CustomButton} from '../CustomButton/styles';

const iconOnlyStyle = css`
  margin: 0px;
  padding: 0px;
  height: 32px;
  width: 32px;
  display: flex;
  border-radius: 8px
`

export const ActionIconButton = styled(CustomButton)`
  ${iconOnlyStyle}
`
