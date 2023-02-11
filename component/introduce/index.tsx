import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
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
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => (
            <span key={index.toString()}>
              {content.content}
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              {content.postImage == null ? null : (
                <img src={content.postImage} style={{ margin: '10px' , marginBottom : '30px'}} alt={index} />
              )}
              <br />
            </span>
          ))}
          <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(
                Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
              )} (D+${latestUpdatedByNow})`}
            </Badge>
          </p>
          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
}
