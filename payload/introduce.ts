import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'AI/채용 평가 도메인에서 LLM 런타임, 대용량 배치, 성능 병목, 운영 안정성을 개선해 고객 영향과 팀 운영 부담을 줄이는 Java & Spring 기반 백엔드 개발자입니다.',
    },
    {
      content:
        '마이다스인에서는 AI 면접/평가 품질이 서비스 신뢰도와 고객 경험에 직접 연결된다는 관점으로 STT/TTS, LLM 평가 흐름, 결과표 데이터, 안내 메일 발송 성능을 개선하고 있습니다.',
    },
    {
      content:
        '사용자에게 직접 보이지 않는 공통 요청 경로, 조회 성능, DB READ/CPU 병목, 배치/엑셀 처리를 선제적으로 줄여 서비스 체감 품질과 운영 안정성을 높이는 데 집중합니다.',
    },
    {
      content:
        'QA 이슈를 증상, 재현 조건, 영향 범위, 원인 후보로 구조화하고 동료와 병목을 공유해 일정 리스크와 반복 장애를 줄이는 방식으로 협업합니다.',
    },
    {
      content:
        '문제 정의부터 설계, 구현, 운영 지표 개선까지 책임지는 AI 제품 백엔드/클라우드 네이티브 백엔드 엔지니어를 지향합니다.',
    },
    /*    {
      content: '• 매일 적은 성과라고 하더라도 1일 1커밋을 실천 중 입니다.',
      // postHref: 'https://ghchart.rshah.org/219138/gudcks0305',
      // postImage: 'https://ghchart.rshah.org/219138/gudcks0305',
    }, */
  ],
  sign: 'Yoo Hyeong Chan',
  // sign: packageJson.author.name,
  // latestUpdated: '2023-02-07',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
