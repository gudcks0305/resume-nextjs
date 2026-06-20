import { Fragment, PropsWithChildren, CSSProperties } from 'react';
import parse from 'html-react-parser';
import { IRow } from './IRow';
import { HrefTargetBlank } from '.';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={`resume-description-list${option?.padding ? ' pt-2' : ''}`}>
          {descriptions.map((description, descIndex) => {
            return (
              <Fragment key={descIndex.toString()}>
                <Description description={description} />
                {description.descriptions ? (
                  <DescriptionRecursion descriptions={description.descriptions} />
                ) : (
                  ''
                )}
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul className="resume-description-list resume-description-list-nested">
      {descriptions.map((description, index) => {
        return (
          <Fragment key={index.toString()}>
            <Description description={description} />
            {description.descriptions ? (
              <DescriptionRecursion descriptions={description.descriptions} />
            ) : (
              ''
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;
  const className = getDescriptionClassName(description);
  const chipGroup = getChipGroup(content);

  const component = (() => {
    if (chipGroup.items.length) {
      return (
        <li className="resume-description-tech-stack">
          {chipGroup.label ? (
            <span className="resume-chip-group-label">{chipGroup.label}</span>
          ) : (
            ''
          )}
          <div className="resume-tech-stack-chips">
            {chipGroup.items.map((item, index) => (
              <span key={index.toString()} className="resume-tech-stack-chip">
                {parse(item)}
              </span>
            ))}
          </div>
        </li>
      );
    }

    if (href && postImage) {
      return (
        <li className={className} style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={content} />
        </li>
      );
    }
    if (href) {
      return (
        <li className={className} style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li className={className} style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={content} style={{ width: '50%' }} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li className={className} style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li className={className} style={getFontWeight(weight)}>
          {content}
          <div>
            {' '}
            <img
              src={postImage}
              alt={content}
              style={{ width: '40%', textAlign: 'center', borderRadius: '10%', margin: '10px' }}
            />
          </div>
        </li>
      );
    }
    return (
      <li className={className} style={getFontWeight(weight)}>
        {parse(content)}
      </li>
    );
  })();

  return component;
}

function getChipGroup(content: string) {
  const chipPrefixes = ['기술 스택:', '주요 과목:'];
  const prefix = chipPrefixes.find((item) => content.trim().startsWith(item));

  if (!prefix) {
    return { items: [] };
  }

  return {
    label: prefix.replace(':', ''),
    items: content
      .replace(prefix, '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
  };
}

function getDescriptionClassName(description: IRow.Description) {
  const classes: string[] = [];

  if (description.descriptions) {
    classes.push('resume-description-heading');
  }

  if (description.weight === 'BOLD') {
    classes.push('resume-description-summary');
  }

  return classes.join(' ');
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  BOLD: 700,
};
