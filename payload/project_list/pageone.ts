import image1 from '../../asset/yata구조.png';import { IProject } from '../../component/project/IProject';export const pageone: IProject.Item = {  title: '물류 플랫폼 자동화 서비스',  startedAt: '2024-02',  endedAt: '2024-08',  where: 'Grit Standard',  descriptions: [    {      content:        '[물류 플랫폼 서비스]: Java, SpringBoot, JPA Hibernate,QueryDSL,AWS Lambda, Mysql , AWS S3, EKS',      weight: 'MEDIUM',      descriptions: [        {          content: '목적',          weight: 'MEDIUM',          descriptions: [            {              content: '세관 연동을 통한 데이터 확보 및 신고 시스템 구축',            },            {              content: 'AI 기반의 PDF 자동 분석 및 개선',            },          ],        },        {          content: '결과',          weight: 'MEDIUM',          descriptions: [            {              content: '기존 솔루션 대비 세관 처리 신고 속도 2배 증가',            },          ],        },        {          content: '역할 및 성과 ',          weight: 'MEDIUM',          descriptions: [            { content: '레거시 물류 도메인의 최신화 설계에 기여' },            { content: '약 400개 이상의 필드에 해당하는 테이블 정규화 및 CRUD 기능 개발' },            { content: 'AOP 기반의 문서 권한 확인 기능 개발' },            { content: 'Restdocs 및 Swagger를 이용한 API 문서 구축' },            { content: '호프스카치 도입으로 인한 외부 인원의 API 테스트 및 무료 시스템 구축' },            {              content: '기존 솔루션을 사용하던 고객의 데이터를 SQL을 통한 Migration 스크립트 제작',            },          ],        },        {          content: 'Trouble Shooting',          weight: 'MEDIUM',          descriptions: [            {              content:                '문서 자동화 시스템의 AWS Lambda를 이용한 자동화 시스템 모듈 개발 : Java Lambda SnapStart 도입으로 언어적 관리요소 문제 해결',            },            { content: 'Lambda Snap Start 설정을 통해 Cold Start 문제 해결 (10초 -> 1초)' },          ],        },      ],    },  ],  image: image1,};