import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import parse from 'html-react-parser';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return (
    <div className="resume-section">
      <Row className="resume-introduce">
        <Col sm={12} md={3}>
          <h2 className="resume-section-title" style={Style.blue}>
            INTRODUCE
          </h2>
        </Col>
        <Col sm={12} md={9}>
          <div className="resume-introduce-card">
            {payload.contents[0] ? (
              <p className="resume-introduce-lead">{parse(payload.contents[0].content)}</p>
            ) : (
              ''
            )}
            <ul className="resume-introduce-list">
              {payload.contents.slice(1).map((content, index) => (
                <li key={index.toString()}>
                  {parse(content.content)}
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  {content.postImage == null ? null : (
                    <img
                      alt=""
                      src={content.postImage}
                      style={{ margin: '10px', marginBottom: '30px', width: '100%' }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="resume-introduce-footer">
            <p className="text-end resume-updated">
              <small>Latest Updated</small>{' '}
              <Badge color="secondary">
                {`${latestUpdated.toFormat(
                  Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
                )} (D+${latestUpdatedByNow})`}
              </Badge>
            </p>
            <p className="text-end resume-sign" style={Style.sign}>
              {payload.sign}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
