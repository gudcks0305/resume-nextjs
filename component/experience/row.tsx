import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import parse from 'html-react-parser';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div className="resume-row">
      {index > 0 ? <hr /> : ''}
      <Row className="resume-item-grid">
        <Col sm={12} md={3} className="text-md-end resume-meta-column resume-item-meta">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9} className="resume-item-body">
          <h4 className="resume-item-title">{item.title}</h4>
          <i className="resume-subtitle" style={Style.gray}>
            {item.position}
          </i>
          <ul className="pt-3 resume-experience-list">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()} className={getDescriptionClassName(description)}>
                {parse(normalizeDescription(description))}
              </li>
            ))}
          </ul>
          {createSkillKeywords(item.skillKeywords)}
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <div className="resume-keyword-cloud">
      {skillKeywords.map((keyword, index) => (
        <Badge
          style={Style.skillKeywordBadge}
          key={index.toString()}
          color="secondary"
          className="resume-experience-badge"
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
}

function normalizeDescription(description: string) {
  return description.trim().replace(/^-+\s*/, '');
}

function getDescriptionClassName(description: string) {
  const normalized = description.trim();

  if (normalized.startsWith('-')) {
    return 'resume-detail-item';
  }

  if (normalized.includes('<b>')) {
    return 'resume-detail-heading';
  }

  return '';
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
        endedAt: undefined,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <div className="resume-period">
      <h4 className="resume-meta-title" style={Style.gray}>
        {periodTitle}
      </h4>
      <div className="resume-period-badges">
        {isWorking ? (
          <Badge color="dark" className="resume-experience-badge">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="secondary" className="resume-experience-badge">
          {Util.getFormattingDuration(startedAt, endedAt)}
        </Badge>
      </div>
    </div>
  );
}
