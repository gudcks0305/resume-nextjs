import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="resume-section">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h4 className="resume-section-title" style={Style.blue}>
              <span>{title}</span>
            </h4>
          </Col>
        </Row>
        <div>{children}</div>
      </EmptyRowCol>
    </div>
  );
}
