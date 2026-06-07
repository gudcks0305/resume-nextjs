import { IIntroduce } from '../component/introduce/IIntroduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    {
      content:
        'Java & Spring 기반 백엔드 개발자로 AI 역량검사 센터(ACCA)의 LLM 런타임, AI 면접, NCS/공공 역검, 파일/배치 백엔드와 물류 도메인 시스템을 개발하고 운영한 경험이 있습니다.',
    },
    {
      content:
        '마이다스인에서는 GPT-5, Spring AI, OpenAI STT/TTS, Tool 호출, Structured Output, Langfuse 기반으로 평가 자동화와 실무능력 LLM 평가 흐름을 개발하고 있습니다.',
    },
    {
      content:
        'Kafka/Redis 공통 계약, MongoDB durable state, Querydsl 조회 최적화, 대용량 엑셀 batch/streaming 처리로 평가 플랫폼의 런타임 안정성과 운영 성능을 개선한 경험이 있습니다.',
    },
    {
      content: 'EKS, ArgoCD 기반의 CI/CD 파이프라인 구축 경험이 있습니다.',
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
