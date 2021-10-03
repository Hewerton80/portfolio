import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './styled';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export function Row({ children, ...rest }: RowProps) {
  return (
    <Styled.Row {...rest}>
      {children}
    </Styled.Row>
  );
}


export function Col({ children, xs, lg, md, sm, ...rest }: ColProps) {
  return (
    <Styled.Col
      {...rest}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
    >
      {children}
    </Styled.Col>
  );
}

export default Col;
