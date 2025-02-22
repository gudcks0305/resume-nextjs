import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-2" style={{ pageBreakInside: 'avoid' }}>
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h4 style={Style.blue}>
              <span>{title}</span>
            </h4>
          </Col>
        </Row>
        <div className="fs-1">{children}</div>
      </EmptyRowCol>
    </div>
  );
}
