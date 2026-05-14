import { Row, Col, Tooltip } from 'reactstrap';
import { PropsWithChildren, useState } from 'react';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="resume-section">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h4 className="resume-section-title">
              <span style={Style.blue}>SKILL</span>
              <SkillTooltip content={payload.tooltip || ''} />
            </h4>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function SkillTooltip({ content }: { content: string }) {
  if (!content) {
    return null;
  }

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <small>
      <button
        id="skill-tooltip"
        type="button"
        className="resume-tooltip-button"
        aria-label="스킬 레벨 설명"
      >
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
      <Tooltip
        style={{ whiteSpace: 'pre-wrap' }}
        placement="right"
        target="skill-tooltip"
        isOpen={tooltipOpen}
        toggle={toggle}
      >
        {content}
      </Tooltip>
    </small>
  );
}
