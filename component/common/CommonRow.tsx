import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div className="resume-row">
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-end resume-meta-column">
          <Row>
            <Col md={12}>
              <h4 className="resume-meta-title" style={Style.gray}>
                {left.title}
              </h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h5 className="resume-item-title">{right.title}</h5> : ''}
          {right.subTitle ? (
            <i className="resume-subtitle" style={Style.gray}>
              {right.subTitle}
            </i>
          ) : (
            ''
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
          {/* {right.image ? <img src={right.image} /> : ''} */}
        </Col>
      </Row>
    </div>
  );
}
