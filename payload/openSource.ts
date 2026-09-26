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
            '녹화·렌더링 context를 분리하고 <code>ffmpeg</code> 인코딩 실패를 호출자에게 반환하도록 변경했습니다. 정상 GIF 생성·ffmpeg 누락·렌더링 직전 취소를 <b>회귀 테스트</b>로 검증하고 <code>go test -race ./...</code>와 <code>go vet ./...</code>을 통과했습니다.',
        },
        {
          content:
            '관련 링크: <a href="https://github.com/charmbracelet/vhs/issues/787">Issue #787</a> · <a href="https://github.com/charmbracelet/vhs/pull/788">PR #788</a> · <a href="https://github.com/charmbracelet/vhs/releases/tag/v0.12.1">Release v0.12.1</a>',
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
          content:
            '관련 링크: <a href="https://github.com/dtolnay/cxx/pull/1760">PR #1760</a> · <a href="https://github.com/dtolnay/cxx/releases/tag/1.0.202">Release 1.0.202</a>',
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
            '병렬 업로드 활동을 함께 추적하고 전체 전송이 멈춘 경우에는 기존 10초 중단 동작을 유지했습니다. 병렬 전송·전체 정체·재개 등을 다루는 <b>회귀 테스트 9개</b>를 추가했습니다.',
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
            'Windows 전용 게임 맵 트래커에 <b>macOS 네이티브 지원</b>을 구현하고 PR을 머지했습니다.',
          weight: 'BOLD',
        },
        {
          content:
            '<b>Mach API</b>로 외부 프로세스 메모리를 읽고, <b>Mach-O 심볼 테이블</b>에서 <code>_GWorld</code> 주소를 계산해 버전별 오프셋 관리 부담을 줄였습니다.',
        },
        {
          content:
            '공통 pointer-chain 로직을 <b>ProcessBackend trait</b>으로 정리하고, 앱 서명 entitlement·ad-hoc DMG 빌드 문서를 추가했습니다.',
        },
        {
          content:
            '관련 링크: <a href="https://github.com/wuwamoe/wuma-tracker/pull/6">PR #6</a> · <a href="https://github.com/wuwamoe/wuma-tracker">Repository</a>',
        },
      ],
    },
  ],
};

export default openSource;
