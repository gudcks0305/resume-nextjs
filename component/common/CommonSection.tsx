import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-2">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h3 style={Style.blue}>
              <span>{title}</span>
            </h3>
          </Col>
        </Row>
        <div className="fs-1">
          {children}
        </div>
      </EmptyRowCol>
    </div>
  );
}
