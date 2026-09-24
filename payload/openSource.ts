import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'VHS (터미널 녹화·렌더링 도구)',
      descriptions: [
        {
          content:
            '<b>녹화 종료 직후 GIF 출력 파일이 생성되지 않던 오류를 수정</b>하고, 유지보수자 리뷰 후 원 저장소에 반영되었습니다. (2026.09.24)',
          weight: 'BOLD',
        },
        {
          content:
            '녹화 lifecycle과 렌더링에 서로 다른 context를 사용하도록 분리하고, <code>ffmpeg</code> 인코딩 실패를 로그로만 남기지 않고 호출자에게 반환하도록 변경했습니다.',
        },
        {
          content:
            '<b>회귀 테스트</b>로 ffmpeg 누락, 정상 GIF 생성, 렌더링 직전 취소 동작을 검증하고 <code>go test -race ./...</code>, <code>go vet ./...</code>을 통과했습니다.',
        },
        {
          content:
            '관련 링크: <a href="https://github.com/charmbracelet/vhs/issues/787">Issue #787</a> · <a href="https://github.com/charmbracelet/vhs/pull/788">PR #788</a> · <a href="https://github.com/charmbracelet/vhs/releases/tag/v0.12.1">Release v0.12.1</a> · <a href="https://github.com/charmbracelet/vhs">Repository (21k+ stars)</a>',
        },
      ],
    },
    {
      title: 'CXX (Rust–C++ 연동 라이브러리)',
      descriptions: [
        {
          content:
            'Rust와 C++ 간 안전한 상호 호출을 위한 바인딩을 생성하는 라이브러리로, <a href="https://chromium.googlesource.com/chromium/src.git/+/main/docs/rust/ffi.md">Chromium</a>과 <a href="https://security.googleblog.com/2021/06/rustc-interop-in-android-platform.html">Android Bluetooth</a>의 언어 간 연동에 사용된 사례가 있습니다.',
        },
        {
          content:
            '샌드박스·파일시스템 권한 제한으로 공유 헤더 경로에 파일을 쓰거나 링크를 만들 수 없을 때 발생하던 <b>cxx-build 빌드 실패를 수정</b>하고, <b>1.0.202 릴리즈에 반영</b>되었습니다. (2026.09.12)',
          weight: 'BOLD',
        },
        {
          content:
            '선택적인 공유 헤더 생성 실패가 빌드를 중단하지 않도록 처리하고, <code>OUT_DIR</code> 안에 필수 헤더 파일 또는 링크를 확보하도록 개선했습니다. 필수 헤더 생성 실패는 오류로 유지하며 <b>회귀 테스트 4개</b>를 추가했습니다.',
        },
        {
          content: 'Pull Request: https://github.com/dtolnay/cxx/pull/1760',
          href: 'https://github.com/dtolnay/cxx/pull/1760',
        },
        {
          content: 'Release: CXX 1.0.202',
          href: 'https://github.com/dtolnay/cxx/releases/tag/1.0.202',
        },
      ],
    },
    {
      title: 'FileBrowser (웹 파일 관리 도구)',
      descriptions: [
        {
          content:
            '<b>병렬 업로드 중 정상 전송이 중단되는 오류를 수정</b>하고, 유지보수자 리뷰 후 <b>upstream에 머지</b>되었습니다. (2026.09.13)',
          weight: 'BOLD',
        },
        {
          content:
            '다른 파일이 전송 중인데도 개별 파일의 무진행 타이머가 업로드를 중단시키는 문제를 해결하기 위해, 병렬 업로드의 활동을 함께 추적하도록 개선했습니다. 전체 전송이 멈추면 기존처럼 10초 후 중단되도록 유지했습니다.',
        },
        {
          content:
            '병렬 전송·전체 정체·단일 업로드·재개 등을 검증하는 <b>회귀 테스트 9개</b>를 추가했습니다.',
        },
        {
          content:
            '관련 링크: <a href="https://github.com/gtsteffaniak/filebrowser/pull/2950">PR #2950</a> · <a href="https://github.com/gtsteffaniak/filebrowser/releases/tag/v2.0.7-beta">Release v2.0.7-beta</a>',
        },
      ],
    },
    {
      title: 'Wuma Tracker',
      descriptions: [
        {
          content:
            '오픈소스 게임 맵 트래커 프로젝트에 <b>macOS 네이티브 트래커 지원</b>을 기여하고 PR을 머지했습니다.',
          weight: 'BOLD',
        },
        {
          content: '명조 맵스 생태계의 Windows 전용 트래커를 macOS에서도 동작하도록 포팅했습니다.',
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
