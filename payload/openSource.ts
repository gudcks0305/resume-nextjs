import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Wuma Tracker',
      descriptions: [
        {
          content:
            '오픈소스 게임 맵 트래커 프로젝트에 <b>macOS 네이티브 트래커 지원</b>을 기여하고 PR을 머지했습니다.',
          weight: 'BOLD',
        },
        {
          content:
            '공개 핀 체크 수 기준 <b>1만 명 이상 사용자가 확인되는</b> 명조 맵스 생태계의 Windows-only 트래커를 macOS에서도 동작하도록 포팅했습니다.',
        },
        {
          content:
            '<b>Mach API</b> 기반 외부 프로세스 메모리 읽기 백엔드를 구현하고, macOS 앱 서명 entitlement 및 ad-hoc DMG 빌드 문서를 추가했습니다.',
        },
        {
          content:
            '<b>Mach-O 심볼 테이블</b>에서 <code>_GWorld</code> 주소를 런타임에 계산해 Windows의 버전별 GWorld 오프셋 관리 부담을 macOS에서 줄였습니다.',
        },
        {
          content:
            'Windows/macOS 공통 pointer-chain 로직을 <b>ProcessBackend trait</b> 기반으로 정리하고, upstream 리뷰를 반영해 캐시/lock/clone 구조를 개선했습니다.',
        },
        {
          content: 'Pull Request: https://github.com/wuwamoe/wuma-tracker/pull/6',
          href: 'https://github.com/wuwamoe/wuma-tracker/pull/6',
        },
        {
          content: 'Repository: https://github.com/wuwamoe/wuma-tracker',
          href: 'https://github.com/wuwamoe/wuma-tracker',
        },
      ],
    },
  ],
};

export default openSource;
