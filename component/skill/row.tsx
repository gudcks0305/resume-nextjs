import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { ISkill } from './ISkill';
import { Style } from '../common/Style';

export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div className="resume-row">
      {index > 0 ? <hr /> : ''}
      <Row className="resume-skill-chip-row">
        <Col sm={12} md={3} className="text-md-end resume-meta-column">
          <h4 className="resume-meta-title" style={Style.gray}>
            {skill.category}
          </h4>
        </Col>
        <Col sm={12} md={9}>
          <div className="resume-skill-chip-group">
            {skill.items.map((item, skillIndex) => (
              <span key={skillIndex.toString()} className="resume-skill-chip">
                {item.title}
                {createBadge(item.level)}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

function createBadge(level?: ISkill.Item['level']) {
  if (!level) {
    return '';
  }

  const color = (() => {
    switch (level) {
      case 3: {
        return 'primary';
      }
      case 2: {
        return 'secondary';
      }
      case 1:
      default: {
        return 'secondary';
      }
    }
  })();

  return (
    <Badge pill color={color} className="resume-skill-badge">
      {level}
    </Badge>
  );
}
