import image1 from '../../asset/yata구조.png';import { IProject } from '../../component/project/IProject';export const aimsWeb: IProject.Item = {  title: ' 사내 물류 ERP : Migration to Web App',  startedAt: '2023-08',  endedAt: '2024-08',  where: 'Grit Standard',  descriptions: [    {      content: '[사내 물류 ERP]: Python, FastAPI , AWS, Docker, Kubernetes, MySQL',      weight: 'MEDIUM',      descriptions: [        {          content: '목적',          weight: 'MEDIUM',          descriptions: [            {              content:                'Windows 환경에서 사용 하는 ERP 시스템을 클라우드 및 웹 환경으로 이전하고, 분업화 하기 위한 운영하기 위한 프로젝트',            },            {              content: '이메일 전송 기능 자동화 및 Windows 기반 솔루션을 웹 기반 솔루션으로 이전',            },          ],        },        {          content: '결과',          weight: 'MEDIUM',          descriptions: [            {              content:                '분업화의 결과로 업무 처리 속도 향상 및 업무 분담이 명확해짐 (30% 이상 - 한 달 안건 처리 량 증가) ',            },          ],        },        {          content: '역할 및 성과 ',          weight: 'MEDIUM',          descriptions: [            { content: '백엔드 1인 진행으로 프론트와 긴밀한 소통을 통해 프로젝트 진행' },            { content: '실무 담당자와 기존 widows 개발자들 과 협업하여 요구사항 분석 및 개선 ' },            {              content: '비동기 SQL 엔진으로 교체 및 쿼리 성능 개선 (400% 성능 향상) ',            },            { content: 'AWS Kubernetes 클러스터 운영' },            { content: 'ArgoCD를 이용한 GitOps CI/CD 구축' },            { content: 'AWS Kubernetes 클러스터 운영' },            { content: 'ArgoCD를 이용한 GitOps 구축' },          ],        },      ],    },  ],  image: image1,};