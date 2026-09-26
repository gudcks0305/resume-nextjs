import { IProject } from '../../component/project/IProject';

export const acca: IProject.Item = {
  title: 'AI 역량검사 센터 (ACCA)',
  startedAt: '2025-05',
  where: '마이다스인 (백엔드 개발자)',
  descriptions: [
    {
      content: '대량 발송 파이프라인 재설계',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '발송 대상·본문 전체 적재와 장시간 트랜잭션, 순차 Kafka 발행이 메모리·DB 부하와 재시작 후 중복 발송 위험을 만들었습니다. 이를 200건 단위 cursor batch·Kafka 비동기 발행·병렬 consumer로 재설계하고 외부 API 호출을 트랜잭션 밖으로 옮겼습니다.',
        },
        {
          content:
            '행 잠금·처리 시도 ID로 중복 선점을 방지하고, 조건부 일괄 갱신·대기 작업 복구·종료 시 처리 정리로 중단된 작업의 재개 흐름을 구성했습니다.',
        },
        {
          content:
            '<b>5만 건의 외부 큐 적재 완료까지 걸리는 애플리케이션 처리 시간을 2시간에서 1분으로 단축</b>했습니다. 별도 SES 발송 단계에서는 <b>초당 약 40건</b>의 처리량을 달성했습니다.',
        },
      ],
    },
    {
      content: 'LLM 면접·평가 런타임 설계',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '응답 형식 불일치와 장시간 평가 중단에 대응해 질문 생성·답변 추적·평가 결과 발행에 영속 작업 큐와 재시도·복구 흐름을 구현했습니다.',
        },
        {
          content:
            'MongoDB에 세션·대화·이벤트와 inbox/outbox 상태를 저장해 장애 추적과 작업 재개의 근거를 남기고, Kafka 메시지와 Redis 잠금·진행 상태 관리 기준을 모듈 간 공통화했습니다.',
        },
        {
          content:
            'Spring AI와 JSON Schema 기반 질문 생성·평가기준 검증, STT/TTS 연동을 구현하고, Langfuse trace와 토큰·호출 제한 로그로 장애와 비용 추적을 보강했습니다.',
        },
      ],
    },
    {
      content: '관리자 조회·대량 결과표 처리 개선',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '관리자 조회는 인덱스·쿼리 재설계로 <b>전체 스캔에서 인덱스 기반 조회로 전환</b>했습니다. 대량 엑셀 결과표는 SXSSFWorkbook과 페이지·배치 조회로 메모리 사용 부담과 OOM 위험을 완화했습니다.',
        },
      ],
    },
  ],
};
