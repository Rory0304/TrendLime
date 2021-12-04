# 트렌드 라임은, 
**연도/테마/장르별노래 가사를 분석한 정보를 제공하고, 유사한 분위기의 가사를 가진 노래를 찾아주는 서비스입니다.  
AI 자연어 처리 기능으로 노래 가사 속 유의미한 표현과 트렌드를 파악합니다.**

## 프로젝트 구성 안내

## 1. 프로젝트 소개

### 1) 제작 배경

- **타겟층**: 노래 가사 분석 정보가 필요한 아마추어/전문 작사가, 노래 가사에 관심이 있는 일반 사용자

- **문제 정의**: 가사에도 트렌드가 있으며, 이를 노래에 잘 반영하는 것은 노래 흥행을 위한 중요한 요소입니다. 하지만 작사가들은 노래 가사의 트렌드를 데이터 기반이 아닌, 경험과 인맥 간 자료 공유를 통해 추측하곤 합니다. 또한, 가사 트렌드를 잘 파악할 수 있는 플랫폼이 국내에는 아직 없는 상황입니다.

- **목표**: 가사 데이터를 기반으로 **"가사 트렌드 변화 양상"**과 **"핵심 표현 정보"**를 분석하여, 작사가들에게 **설득력 있는 가사 분석 정보를 제공**합니다.

    - 다양한 차트 시각화를 통해 가사 데이터 분석 결과를 한 눈에 확인할 수 있도록 합니다.
    - "이 곡과 비슷한 느낌의 가사" 곡을 추천하여, 유사한 곡 정보 탐색 과정을 단축합니다.

</br>

- **깃랩**
[https://kdt-gitlab.elice.io/002-part3-nlp/team4/sample-project](https://kdt-gitlab.elice.io/002-part3-nlp/team4/sample-project)


### 2) 사용하려는 데이터   
  벅스 연도 앨범 정보 크롤링 (10-20년도 TOP100 차트 노래 데이터)     
  벅스 차트 앨범 정보 크롤링   
  벅스 뮤직PD 앨범 정보 크롤링 (감정/기분 등 음악 특징이 라벨링된 벅스 데이터)      

### 3) 기술 스택 / 사용 라이브러리 
백 : flask, django  
프론트 : react, react-query, emotion  
인공지능 : bert , (komoran, okt) , TF-IDF , sentencepeice    

## 2. 프로젝트 목표

- **한 눈에 보는 가사 데이터 분석 정보**
    - "연도/테마/장르"로 분류된 가사 데이터로부터, 주로 사용되는 표현과 트렌드 흐름을 시각화하여 제공합니다.
    - 주제와 테마에 따른 세부 분류로, 가사 분석을 원하는 곡을 편하게 검색할 수 있습니다.

- **"이 곡과 비슷한 느낌의 가사" 곡 추천**
    - 선택한 곡의 노래 가사와 비슷한 곡 추천으로, 유사한 가사를 탐색하기 위한 과정을 단축합니다.

## 3. 프로젝트 기능 설명

[주기능]
- 카테고리로 분류된 노래 가사 분석 데이터 제공  

- 하나의 노래에 대한 가사 분석 데이터 제공    

[서브기능]
- 플랫폼 내 보유한 전체 노래 리스트 확인 및 검색 기능

## 4. 예상 시나리오 




## 5. 프로젝트 구성도
https://www.figma.com/file/W0WbhFFMYnuvkvda1jBkol/Untitled?node-id=17%3A16

## 6. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 김수연 | 인공지능 |
| 사은수 | 팀장 / 프론트엔드 개발 / 백엔드 개발 |
| 이승환 | 백엔드 개발 |

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당  

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
