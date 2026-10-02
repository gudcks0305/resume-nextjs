import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({
  title,
  className,
  children,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <div className={`resume-section${className ? ` ${className}` : ''}`}>
      <EmptyRowCol>
        <Row className="pb-3 resume-section-heading">
          <Col>
            <h4 className="resume-section-title" style={Style.blue}>
              <span>{title}</span>
            </h4>
          </Col>
        </Row>
        <div className="resume-section-content">{children}</div>
      </EmptyRowCol>
    </div>
  );
}
