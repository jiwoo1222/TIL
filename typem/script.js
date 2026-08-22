
const resultData = {
    frontend: {
        n: "프론트엔드 (Front-end)", d: "웹사이트의 화면과 사용자 상호작용을 담당합니다.",
        k: "HTML, CSS, JS, React", a: "프론트엔드 전공은 이론만 공부하기 보다는 직접 만들어보고 경험해 보아야 빨리 성장하게 됩니다. 굳이 팀 프로젝트가 아니더라도 개인 프로젝트를 많이 진행하면서 실력을 쌓아보세요.",
        icons: ["html5", "css3-alt", "js", "react"],
        concept: "우리가 눈으로 보는 웹사이트의 모든 화면을 만드는 분야예요. 버튼을 누르면 반응하고, 스크롤하면 움직이는 것처럼 사용자가 직접 만지고 느끼는 부분을 코드로 구현합니다.",
        example: "쇼핑몰 상품 페이지, 실시간 채팅 화면, 반응형 포트폴리오 사이트 같은 걸 직접 만들어요."
    },
    backend: {
        n: "백엔드 (Back-end)", d: "데이터와 서버 엔진을 관리하는 시스템 전문가입니다.",
        k: "Java, Spring Boot, MySQL", a: "백엔드는 사용자가 직접 보지 못하는 서버 측 영역으로, 클라이언트의 요청을 받아 처리하고 데이터를 저장·관리·응답하는 모든 것을 담당합니다.",
        icons: ["java", "database", "server"],
        concept: "화면 뒤에서 실제로 일을 처리하는 분야예요. 로그인을 하면 비밀번호가 맞는지 확인하고, 글을 쓰면 어딘가에 저장하는 등, 눈에 보이지 않는 곳에서 데이터를 안전하게 주고받는 규칙을 설계합니다.",
        example: "로그인/회원가입 시스템, 게시판 저장 기능, 주문 처리 서버 같은 걸 만들어요."
    },
    devops: {
        n: "데브옵스 (DevOps)", d: "배포 자동화 및 클라우드 운영 전문가입니다.",
        k: "Linux, Docker, AWS", a: "로그가 답이다. 서버, 클라이언트 어디서 오류가 나도 로그를 보면 해결할 수 있습니다. 네트워크, 컨테이너, 클라우드부터 자동화까지 폭넓은 지식이 필요하지만, 검은 화면 가득한 영어들이 손에 익으면 어디서든 살아남습니다.",
        icons: ["linux", "docker", "aws"],
        concept: "개발자가 만든 결과물을 실제 사용자에게 안전하고 빠르게 전달되도록 만드는 분야예요. 반복되는 배포 작업을 자동화하고, 서버가 멈추지 않도록 지켜보는 운영자 역할을 합니다.",
        example: "자동 배포 시스템 구축, 서버 모니터링 대시보드, 무중단 배포 파이프라인 같은 걸 다뤄요."
    },
    ios: {
        n: "IOS", d: "Apple 플랫폼 위에서 가장 자연스러운 흐름을 만듭니다. ",
        k: " Swift, CoreAnimation, Apple HIG", a: "IOS 개발은 처음부터 쉬운 분야는 아닙니다.Swift, UIKit, SwiftUI 등 Apple만의 개발 방식과 생태계를 이해해야 하며작은 디테일까지 완성도로 이어지는 분야입니다. 하지만 그만큼 iPhone, MacBook, Apple Watch까지하나의 흐름처럼 연결되는 Apple만의 고급스러운 경험을 직접 구현할 수 있습니다. 흔한 길은 아니지만,완성도 하나만으로도 존재감을 증명할 수 있는 분야입니다.",
        icons: ["apple", "mobile-screen"],
        concept: "아이폰, 아이패드처럼 Apple 기기에서 동작하는 앱을 만드는 분야예요. Swift라는 언어를 사용하고, 작은 애니메이션 하나까지 부드럽고 세련되게 다듬는 완성도를 중요하게 여깁니다.",
        example: "아이폰 캘린더 앱, 건강 기록 앱, Apple Watch 연동 앱 같은 걸 직접 만들어봐요."
    },
    design: {
        n: "UI/UX 디자인", d: "사용자 중심의 경험과 아름다움을 설계합니다."
        , k: "Figma, Design System", a: "UI/UX 디자인은 단순히 예쁜 화면을 만드는 게 아니라, 사용자가 불편함 없이 원하는 목표에 도달하도록 돕는 설계하는 과정입니다. 툴(Figma) 사용 능력도 중요하지만 \"왜 이렇게 만들었는가\"를 설명할 수 있는 사고력이 훨씬 중요합니다. 또한 저는 실제 프로젝트 경험이 곧 실력이라고 생각하므로 작은 프로젝트라도 경험을 많이 쌓으면 좋겠습니다.",
        icons: ["figma", "palette"],
        concept: "예쁜 화면을 그리는 것을 넘어, 사용자가 헤매지 않고 원하는 목표에 쉽게 도달하도록 화면의 구조와 흐름을 설계하는 분야예요. 색상, 버튼 위치, 글자 크기 하나하나에 이유가 있어야 합니다.",
        example: "앱 사용성 개선안, 서비스 디자인 시스템, 클릭 가능한 프로토타입 화면 같은 걸 만들어요."
    },
    game: {
        n: "게임 개발", d: "사람들이 즐기는 게임을 만들어냅니다.",
        k: "Unity, C#", a: "개발 능력 뿐만 아니라 감과 창의력도 매우 중요합니다. 클라이언트, 서버, 모델링, 사운드 등 다양한 세부 전공이 있습니다. 실력과 운이 따라준다면 제일 높은 고점을 가지는 전공입니다. 주의) 게임과 게임 개발에는 많은 차이가 있습니다",
        icons: ["gamepad", "code"],
        concept: "사람들이 즐겁게 플레이하는 게임을 직접 만드는 분야예요. 캐릭터가 움직이는 규칙, 점수가 오르는 조건, 화면 연출까지 재미의 원리를 코드로 구현합니다. 그림, 사운드, 기획 등 세부 분야도 다양해요.",
        example: "2D 플랫포머 게임, 미니 슈팅 게임, 퍼즐 게임의 규칙과 연출을 직접 만들어봐요."
    },
    flutter: {
        n: "플러터 (Flutter)", d: "멀티 플랫폼 앱 개발의 효율성 전문가입니다.",
        k: "Dart, Flutter", a: "Flutter는 코드를 작성하면 만들어지는 UI를 바로 확인하며 개발할 수 있는 크로스 플랫폼 기술입니다. 하나의 코드로 안드로이드와 iOS 앱을 모두 개발할 수 있는 만큼, 단순히 화면 구현만 하기보다 구조와 원리를 함께 이해하며 공부하는 것이 중요합니다. 처음에는 어려울 수 있지만 직접 프로젝트를 개발하고 협업하는 경험이 쌓일수록 빠르게 성장할 수 있는 분야라고 생각합니다.",
        icons: ["mobile-screen-button", "code"],
        concept: "하나의 코드로 안드로이드와 iOS 앱을 동시에 만들 수 있는 분야예요. 코드를 고치면 바로 화면에 반영되는 걸 확인하며 개발할 수 있어서, 효율적으로 여러 플랫폼용 앱을 완성할 수 있습니다.",
        example: "안드로이드·iOS 동시 출시용 To-Do 앱, 학교 알림 앱 같은 걸 하나의 코드로 만들어요."
    },
    ai: {
        n: "AI", d: "데이터 속에서 가치를 찾는 모델 개발자입니다.",
        k: "Python, PyTorch", a: "처음에 이론이 많아서 어렵고, 힘들 수 있습니다. 그래도 가장 미래지향적인 전공이고, 앞으로 활용 범위가 계속 넓어질 분야입니다.",
        icons: ["brain", "python"],
        concept: "많은 데이터를 컴퓨터에게 학습시켜서, 스스로 판단하거나 예측하게 만드는 분야예요. 사진 속 물체를 알아보거나, 다음에 뭘 좋아할지 추천하는 것처럼 데이터 속 규칙을 찾아내는 모델을 설계합니다.",
        example: "사진 분류 모델, 챗봇, 영화 추천 시스템 같은 걸 데이터로 직접 학습시켜봐요."
    },
    iot: {
        n: "IoT", d: "사물을 인터넷에 연결하여 제어하는 기술입니다.",
        k: "Embedded C, Arduino", a: "IOT는 임베디드와 달리 통신 기술도 함께 사용하는 전공입니다. 여러 가지 하드웨어 센서를 다루고 DB 연결 같은 다양한 지식도 필요합니다. \n배워야 할 것이 많은 전공이지만, 하드웨어를 직접 다루기 때문에 AI로 완전히 대체되기 어려운 분야라고 생각합니다.",
        icons: ["microchip", "wifi"],
        concept: "센서와 기기를 인터넷에 연결해서 서로 정보를 주고받게 만드는 분야예요. 온도를 감지하거나 움직임을 인식하는 하드웨어를 직접 다루고, 그 데이터를 서버로 보내 제어하는 것까지 함께 배웁니다.",
        example: "스마트 화분 자동 급수 장치, 온습도 알림 시스템 같은 걸 직접 만들고 연결해봐요."
    },
    security: {
        n: "사이버 보안", d: "정보를 보호하고 침입을 방어하는 기술입니다.",
        k: "Network, Linux, Forensics",
        a: "기초를 탄탄히 해야 나중에 후배들에게 따라잡히지 않습니다. CS, CPU, 메모리, 프로그래밍 언어 등 여러가지 방면의 지식을 가지세요. 기초장벽이 높은 전공이라 초반이 힘들테지만 고점이 높으니 버텨내세요.",
        icons: ["shield-halved", "lock"],
        concept: "시스템의 약점을 찾아내고, 그 약점을 통해 침입하려는 시도를 막아내는 분야예요. 공격자의 관점과 방어자의 관점을 모두 이해해야 하고, 컴퓨터 구조와 네트워크에 대한 탄탄한 기초 지식이 필요합니다.",
        example: "모의 해킹(침투 테스트), 취약점 진단, 디지털 포렌식 분석 같은 걸 직접 해봐요."
    },
    mobile: {
        n: "모바일 앱 개발", d: "스마트폰 자원을 활용한 정교한 기능을 구현합니다.",
        k: "Android, Kotlin", a: "안드로이드 기기의 카메라, 위치, 센서 같은 자원을 정교하게 활용하는 능력이 중요합니다. 작은 리소스 낭비나 지연도 허용하지 않는 꼼꼼함이 필요한 분야입니다. 기능대회에서는 정해진 시간 안에 요구사항을 완벽히 구현하는 훈련을 반복하게 됩니다.",
        icons: ["android", "mobile-screen"],
        concept: "안드로이드 기기 안의 카메라, 위치, 센서 같은 자원을 정교하게 활용해 앱을 만드는 분야예요. 정해진 요구사항을 빠르고 정확하게, 리소스 낭비 없이 구현해내는 훈련을 많이 하게 됩니다.",
        example: "위치 기반 앱, 카메라 활용 앱, 정해진 시간 안에 완성하는 대회용 미션 앱 같은 걸 만들어요."
    },
    robotics: {
        n: "모바일 로보틱스", d: "지능형 로봇의 두뇌와 움직임을 설계합니다.",
        k: "Control Eng, ROS, C++", a: "하드웨어라는 또 다른 지식을 요구하는 만큼 시간을 많이 투자해야 합니다. 또한 주어진 과제에 맞춰 알고리즘과 로봇을 설계하는 유연한 사고가 필요합니다.",
        icons: ["robot", "microchip"],
        concept: "스스로 상황을 판단해서 움직이는 로봇의 두뇌와 몸을 함께 설계하는 분야예요. 센서로 주변을 인식하는 소프트웨어와, 실제로 바퀴나 팔을 움직이는 하드웨어 제어를 모두 다룹니다.",
        example: "장애물을 피해가는 자율주행 로봇, 정해진 미션을 수행하는 로봇 팔 같은 걸 만들어요."
    },
    network: {
        n: "IT 네트워크 시스템", d: "전 세계를 잇는 통신 인프라를 구축합니다.",
        k: "Network, Cisco, TCP/IP", a: "다양한 운영체제 환경에서 네트워크를 구성하거나, 가상의 라우터, 스위치를 통해 네트워크를 구성하는 직종입니다. 익혀야할 이론이 많은 만큼 처음에 기초지식을 잘 쌓아두어야 합니다. 처음에 다가오기 힘든 전공이긴 하지만, 자신이 잘 할 수 있다는 의지만 있으면 좋은 전공이 될 것입니다.",
        icons: ["network-wired", "server"],
        concept: "컴퓨터와 컴퓨터를 연결해서 정보가 목적지까지 안전하고 빠르게 흘러가도록 만드는 분야예요. 라우터와 스위치로 통신 경로를 설계하고, 문제가 생기면 원인을 하나씩 짚어가며 고칩니다.",
        example: "회사·학교 내부망 설계, 가상 라우터·스위치 구성, 장애 상황 진단 훈련 같은 걸 해봐요."
    },
    cloud: {
        n: "클라우드 컴퓨팅", d: "필요한 서버와 저장공간을 인터넷으로 빌려 사용하는 기술입니다.",
        k: "Network, Linux, AWS, Container", a: "직접 컴퓨터를 다 준비하지 않아도 필요한 만큼 빌려 쓸 수 있습니다. 웹사이트, 게임, AI 서비스까지 대부분 클라우드 위에서 동작합니다.",
        icons: ["cloud", "aws"],
        concept: "컴퓨터를 직접 사지 않고, 필요한 만큼 서버와 저장공간을 인터넷으로 빌려 쓰게 만드는 분야예요. 갑자기 사용자가 몰려도 끄떡없이 자동으로 확장되는 안정적인 시스템 구조를 설계합니다.",
        example: "트래픽 폭주에도 견디는 서버 구조, 자동 확장 시스템, 클라우드 기반 배포 환경 같은 걸 다뤄요."
    }
};

const commonQ = [
    { q: "결과가 조금 부족해도, 일단 눈에 보이는 형태로 빠르게 완성해보는 편이 좋다.", t: "gen" },
    { q: "원리를 제대로 모르고 넘어가면 계속 신경 쓰여서, 이해될 때까지 파고드는 편이다.", t: "skl" },
    { q: "혼자 해결하는 것보다, 여럿이 각자 몫을 나눠 맡아 하나로 합쳐질 때 더 재밌다.", t: "gen" },
    { q: "새로 나온 것이 있으면 일단 내 손으로 먼저 써보고 익혀두는 편이다.", t: "gen" },
    { q: "시간이 정해져 있거나 순위가 매겨지는 상황이 오히려 몰입이 잘 된다.", t: "skl" },
    { q: "여러 개를 얕게 아는 것보다, 한 가지를 확실하게 제일 잘하고 싶다.", t: "skl" },
    { q: "내가 만든 걸 누군가 직접 써보고 반응을 보여줄 때 가장 뿌듯하다.", t: "gen" },
    { q: "루틴이 빡빡하게 짜여 있어야 오히려 딴생각 없이 집중이 잘 된다.", t: "skl" },
    { q: "막연한 칭찬보다, 눈에 보이는 결과나 순위로 실력이 증명될 때 더 힘이 난다.", t: "skl" },
    { q: "정해진 틀을 따르기보다, 내가 원하는 방향으로 자유롭게 기획하는 게 편하다.", t: "gen" },
    { q: "혼자 잘하는 것 못지않게, 내 생각을 조율해서 함께 맞춰가는 것도 자신 있다.", t: "gen" },
    { q: "풀리지 않는 문제가 있으면 다른 일을 할 때도 계속 머릿속에 맴돌아 끝까지 붙잡는다.", t: "skl" }
];

const generalQ = [
    { q: "무언가를 완성했을 때, 남들이 처음 보고 어떤 느낌을 받을지가 제일 신경 쓰인다.", target: "frontend" },
    { q: "눈에 바로 안 보여도, 일이 처리되는 순서와 규칙이 딱 맞아떨어져야 마음이 편하다.", target: "backend" },
    { q: "무언가를 시작하기 전에 환경부터 정리해두지 않으면 찝찝해서 손이 안 잡힌다.", target: "devops" },
    { q: "충분한 경험이 쌓이면 사람보다 더 정확한 판단도 가능하다는 이야기에 흥미가 생긴다.", target: "ai" },
    { q: "쓰던 것이 사소한 부분까지 매끄럽게 다듬어져 있으면 유독 만족스럽다.", target: "ios" },
    { q: "불편해 보이는 걸 보면 '이렇게 바꾸면 좋겠다'는 그림이 저절로 떠오른다.", target: "design" },
    { q: "무언가에 몰입할 때, 그 뒤에 어떤 균형과 규칙이 숨어 있을지 자꾸 생각하게 된다.", target: "game" },
    { q: "한 번 해둔 걸 상황마다 다르게 다시 해야 하면 유독 아깝고 비효율적으로 느껴진다.", target: "flutter" },
    { q: "내 취향에 딱 맞게 골라주는 걸 보면, 그 뒤에 숨은 원리가 궁금해진다.", target: "ai" },
    { q: "멀리서도 손끝으로 무언가를 다루고 반응을 확인하는 상상을 하면 은근히 설렌다.", target: "iot" },
    { q: "크기나 배치가 조금만 어긋나 보여도 눈에 거슬려서 바로잡고 싶어진다.", target: "frontend" },
    { q: "내 머릿속 상상을 다른 사람도 함께 경험하게 만들어보고 싶다는 생각을 자주 한다.", target: "game" },
    { q: "한 가지를 여러 상황에도 똑같이 써먹을 수 있게 만드는 방법을 찾는 게 즐겁다.", target: "flutter" },
    { q: "뒤죽박죽인 것 중에서 필요한 것만 골라 정리할 때 묘하게 몰입된다.", target: "backend" },
    { q: "똑같은 일을 매번 손으로 반복하는 게 세상에서 제일 아깝다고 느껴진다.", target: "devops" },
    { q: "복잡한 것보다는 꼭 필요한 것만 남긴 깔끔한 결과물에 더 끌린다.", target: "ios" },
    { q: "무언가를 만들 때 색이나 배치의 균형이 안 맞으면 계속 신경 쓰인다.", target: "design" },
    { q: "결과만 보는 것보다, 눈앞에서 실제로 반응하는 무언가를 만지는 게 더 와닿는다.", target: "iot" },
    { q: "새로 나온 것들을 남들보다 먼저 써보고 이야기하는 걸 좋아하는 편이다.", target: "frontend" },
    { q: "감당 못 할 만큼 많은 게 몰려도 끄떡없는 튼튼한 구조를 짜는 상상을 즐긴다.", target: "backend" }
];

const skillQ = [
    { q: "누군가는 빈틈을 찾으려 하고, 누군가는 그걸 막으려 하는 팽팽한 상황에 유독 흥미가 생긴다.", target: "security" },
    { q: "작은 자원 하나도 낭비되는 게 싫어서 안 보이는 곳까지 알뜰하게 정리해두는 편이다.", target: "mobile" },
    { q: "결과만 보는 것보다는, 눈앞에서 실제로 무언가가 움직여야 비로소 실감이 난다.", target: "robotics" },
    { q: "무언가가 목적지까지 어떤 경로로 흘러가는지 그 과정이 궁금하다.", target: "network" },
    { q: "내 것 하나를 넘어서, 멀리 떨어진 여럿을 한 번에 다루는 큰 규모의 일에 끌린다.", target: "cloud" },
    { q: "드러나지 않은 흔적을 하나씩 추적해서 진실을 찾아내는 과정에 몰입하게 된다.", target: "security" },
    { q: "누가 일일이 조종하지 않아도 스스로 상황을 판단해서 움직이는 것들이 신기하게 느껴진다.", target: "robotics" },
    { q: "예상치 못한 상황이 와도 절대 멈추지 않는 안전망을 미리 짜두고 싶다.", target: "cloud" },
    { q: "아주 미세한 어긋남이나 지연도 허용하지 않는 딱 맞는 결과물을 만들고 싶다.", target: "mobile" },
    { q: "직접 손으로 다루는 것보다, 명령을 입력해서 다루는 방식이 더 매력적으로 느껴진다.", target: "security" },
    { q: "가진 게 넉넉하지 않아도 최대한 아껴서 효율적으로 돌아가게 만드는 방법을 고민하는 게 재밌다.", target: "robotics" },
    { q: "갑자기 뭔가 끊겼을 때, 처음부터 하나씩 원인을 짚어가며 고치는 과정을 잘하는 편이다.", target: "network" },
    { q: "여러 개를 다 갖추지 않고도, 필요한 만큼만 빌려서 쓰는 방식이 합리적이라고 느껴진다.", target: "cloud" },
    { q: "문제가 터지기 전에 미리 약점을 찾아 대비해두는 일에 마음이 간다.", target: "security" },
    { q: "복잡하게 얽힌 것들을 하나하나 풀어 정돈된 상태로 만드는 걸 직접 해보고 싶다.", target: "network" },
    { q: "여러 기기가 끊김 없이 매끄럽게 이어지도록 다듬는 작업에 관심이 많다.", target: "mobile" },
    { q: "보이는 걸 다루는 지식과, 그걸 실제로 움직이게 만드는 지식을 둘 다 갖춘 사람이 되고 싶다.", target: "robotics" },
    { q: "우리끼리만 안전하게 쓸 수 있는 통로를 처음부터 끝까지 직접 만들어보고 싶다.", target: "network" },
    { q: "겉모습보다 그 아래 깔린 근본적인 구조가 어떻게 돌아가는지 궁금하다.", target: "cloud" },
    { q: "누구도 쉽게 풀 수 없는 나만의 완벽한 잠금장치를 만들어보고 싶다.", target: "security" }
];

const genMajors = ['frontend', 'backend', 'devops', 'ios', 'design', 'game', 'flutter', 'ai', 'iot'];
const skillMajors = ['security', 'mobile', 'robotics', 'network', 'cloud'];

let phase = 1; let qIdx = 0; let typeScore = { gen: 0, skl: 0 }; let majorScore = {}; let finalType = "";

let sessionCommonQ = [];
let sessionGeneralQ = [];
let sessionSkillQ = [];

let allAnswers = [];  
let lastAnswerVal = null;
let currentStreak = 1;
let longestStreak = 1;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let quizInProgress = false;

function startQuiz() {
    phase = 1;
    qIdx = 0;
    sessionCommonQ = shuffleArray(commonQ);
    allAnswers = [];
    lastAnswerVal = null;
    currentStreak = 1;
    longestStreak = 1;
    quizInProgress = true;

    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    render();
}

function render() {
    let qArr = (phase === 1) ? sessionCommonQ : (finalType === 'gen' ? sessionGeneralQ : sessionSkillQ);
    document.getElementById('progress-bar').style.width = (qIdx / qArr.length * 100) + "%";
    document.getElementById('quiz-info').innerText = `${qIdx} / ${qArr.length}`;
    if (qIdx < qArr.length) {
        document.getElementById('q-text').innerText = qArr[qIdx].q;
    }
    window.scrollTo(0, 0);
}

function onAnswer(val) {
    let point = val - 3;
    let qArr = (phase === 1) ? sessionCommonQ : (finalType === 'gen' ? sessionGeneralQ : sessionSkillQ);

    allAnswers.push(val);
    if (val === lastAnswerVal) {
        currentStreak++;
    } else {
        currentStreak = 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
    lastAnswerVal = val;

    if (phase === 1) {
        typeScore[qArr[qIdx].t] += point;
        qIdx++;
        if (qIdx >= qArr.length) finishPhase1(); else render();
    } else {
        let target = qArr[qIdx].target;
        majorScore[target] = (majorScore[target] || 0) + point;
        qIdx++;
        if (qIdx >= qArr.length) finishPhase2(); else render();
    }
}

function checkConsistency() {
    const n = allAnswers.length;
    if (n === 0) return { flag: false };

    const mean = allAnswers.reduce((a, b) => a + b, 0) / n;
    const variance = allAnswers.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);

    const STREAK_THRESHOLD = 6;
    const STDDEV_THRESHOLD = 0.6;

    const straightFlag = longestStreak >= STREAK_THRESHOLD;
    const varianceFlag = stdDev < STDDEV_THRESHOLD;

    return {
        flag: straightFlag || varianceFlag,
        straightFlag,
        varianceFlag,
        longestStreak,
        stdDev
    };
}

function finishPhase1() {
    finalType = typeScore.gen >= typeScore.skl ? 'gen' : 'skl';
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('mid-result-section').classList.remove('hidden');
    const typeName = finalType === 'gen' ? '일반 전공 타입' : '기능반 타입';
    const typeDesc = finalType === 'gen' ? '실무 역량과 프로젝트 협업을 즐기는 당신!' : '심화된 기술 습득과 문제 해결에 몰입하는 당신!';
    document.getElementById('user-type-text').innerText = typeName;
    document.getElementById('type-desc').innerText = typeDesc;
}

function startPhase2() {
    phase = 2; qIdx = 0;
    if (finalType === 'gen') {
        sessionGeneralQ = shuffleArray(generalQ);
    } else {
        sessionSkillQ = shuffleArray(skillQ);
    }
    document.getElementById('mid-result-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('step-badge').innerText = "STEP 2: 세부 분야 추천";
    render();
}

function finishPhase2() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    quizInProgress = false;
    const targetKeys = (finalType === 'gen') ? genMajors : skillMajors;

    const rawScores = targetKeys.map(k => majorScore[k] || 0);
    const minScore = Math.min(...rawScores);
    const shift = (minScore <= 0) ? (Math.abs(minScore) + 1) : 0;
    const shifted = rawScores.map(s => s + shift);
    const total = shifted.reduce((a, b) => a + b, 0);

    const ranked = targetKeys
        .map((key, i) => ({
            key,
            raw: rawScores[i],
            pct: total > 0 ? (shifted[i] / total * 100) : (100 / targetKeys.length)
        }))
        .sort((a, b) => b.raw - a.raw);

    const top3 = ranked.slice(0, 3);

    document.getElementById('shared-banner').classList.add('hidden');
    renderResultUI(top3);

    const consistency = checkConsistency();
    if (consistency.flag) {
        let reasonText = "일부 응답이 지나치게 한쪽으로 치우쳐 있어요.";
        if (consistency.straightFlag) {
            reasonText = "같은 답을 연속으로 너무 많이 선택하셨어요.";
        }
        showToast(`${reasonText} 실제 성향과 다른 결과가 나왔을 수 있으니, 다시 검사해보시는 걸 추천드려요!`, 5000);
    }
}

let lastTop3 = [];
function renderResultUI(top3) {
    lastTop3 = top3;
    const best = top3[0].key;
    const res = resultData[best];
    document.getElementById('res-major-name').innerText = res.n;
    document.getElementById('res-desc').innerText = res.d;
    document.getElementById('res-tech').innerText = "핵심 기술: " + res.k;
    document.getElementById('res-advice').innerText = `"${res.a}"`;

    renderFitBars('fit-bars', top3);
}

function renderFitBars(containerId, top3) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = top3.map((item, idx) => {
        const name = resultData[item.key].n;
        const pctText = item.pct.toFixed(1);
        return `
            <div class="fit-bar-item rank-${idx + 1}">
                <div class="fit-bar-label">
                    <span>${idx + 1}순위 · ${name}</span>
                    <span>${pctText}%</span>
                </div>
                <div class="fit-bar-track">
                    <div class="fit-bar-fill" style="width:${item.pct}%;"></div>
                </div>
            </div>
        `;
    }).join('');
}

const FA_BRAND_ICONS = new Set([
    "html5", "css3-alt", "js", "react", "java", "linux", "docker", "aws",
    "apple", "figma", "android", "python"
]);
function faIconClass(name) {
    return FA_BRAND_ICONS.has(name) ? `fa-brands fa-${name}` : `fa-solid fa-${name}`;
}
function buildMajorDetailCard(key, rankLabel, pctText) {
    const res = resultData[key];
    if (!res) return '';
    const badgeHtml = rankLabel
        ? `<span class="major-rank-badge">${rankLabel}</span>`
        : '';
    const pctHtml = pctText
        ? `<span class="major-pct">${pctText}</span>`
        : '';
    const icons = res.icons || [];
    const iconsHtml = icons.length
        ? `<div class="major-icon-row">${icons.map(i => `<span class="major-icon-badge"><i class="${faIconClass(i)}"></i></span>`).join('')}</div>`
        : '';
    const conceptHtml = res.concept
        ? `<p class="major-detail-concept">${res.concept}</p>`
        : '';
    const exampleHtml = res.example
        ? `<p class="major-detail-example"><strong>이런 걸 만들어요</strong>${res.example}</p>`
        : '';
    return `
        <div class="major-detail-card ${rankLabel ? 'is-ranked' : ''}">
            <div class="major-detail-head">
                ${badgeHtml}
                <h3>${res.n}</h3>
                ${pctHtml}
            </div>
            <p class="major-detail-desc">${res.d}</p>
            <p class="major-detail-tech"><strong>무엇을 배우나요?</strong> ${res.k}</p>
            ${iconsHtml}
            ${conceptHtml}
            ${exampleHtml}
        </div>
    `;
}

function showMajorDetail() {
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('all-majors-section').classList.add('hidden');
    document.getElementById('detail-section').classList.remove('hidden');

    renderFitBars('detail-fit-bars', lastTop3);

    const cards = lastTop3.map((item, idx) =>
        buildMajorDetailCard(item.key, `${idx + 1}순위`, `${item.pct.toFixed(1)}%`)
    );
    document.getElementById('detail-major-list').innerHTML = cards.join('');
    window.scrollTo(0, 0);
}

let allMajorsCategory = 'gen';

function showAllMajors() {
    document.getElementById('detail-section').classList.add('hidden');
    document.getElementById('all-majors-section').classList.remove('hidden');
    allMajorsCategory = (finalType === 'skl') ? 'skl' : 'gen';
    renderAllMajorsList();
    window.scrollTo(0, 0);
}

function renderAllMajorsList() {
    const category = (allMajorsCategory === 'skl') ? skillMajors : genMajors;
    const badgeEl = document.getElementById('all-majors-badge');
    if (badgeEl) {
        badgeEl.innerText = (allMajorsCategory === 'skl') ? '전체 전공 보기 · 기능반' : '전체 전공 보기 · 일반 전공';
    }
    const topKeyOrder = lastTop3.map(item => item.key);

    const cards = category.map(key => {
        const rankIdx = topKeyOrder.indexOf(key);
        const rankLabel = rankIdx >= 0 ? `${rankIdx + 1}순위` : null;
        const pctText = rankIdx >= 0 ? `${lastTop3[rankIdx].pct.toFixed(1)}%` : null;
        return buildMajorDetailCard(key, rankLabel, pctText);
    });
    document.getElementById('all-major-list').innerHTML = cards.join('');

    const toggleBtn = document.getElementById('all-majors-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerHTML = (allMajorsCategory === 'skl')
            ? '일반 전공 보기 <i class="fa-solid fa-arrow-right"></i>'
            : '기능반 보기 <i class="fa-solid fa-arrow-right"></i>';
    }
}

function toggleAllMajorsCategory() {
    allMajorsCategory = (allMajorsCategory === 'skl') ? 'gen' : 'skl';
    renderAllMajorsList();
    window.scrollTo(0, 0);
}

function goHomeFromAllMajors() {
    document.getElementById('all-majors-section').classList.add('hidden');
    document.getElementById('home-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function backToResultFromDetail() {
    document.getElementById('detail-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function backToDetailFromAll() {
    document.getElementById('all-majors-section').classList.add('hidden');
    document.getElementById('detail-section').classList.remove('hidden');
    window.scrollTo(0, 0);
}


function openInfo() { document.getElementById('info-modal').style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function toggleCredits() {
    const moreNames = document.getElementById('more-names');
    const btnMore = document.getElementById('btn-more');


    if (moreNames.style.display === 'none') {
        moreNames.style.display = 'block';
        btnMore.innerText = '[ 닫기 ]';
    } else {
        moreNames.style.display = 'none';
        btnMore.innerText = '[ 더보기 ]';
    }
}

window.addEventListener('beforeunload', function (e) {
    if (quizInProgress) {
        e.preventDefault();
        e.returnValue = '';
    }
});

function restartApp() {
    quizInProgress = false;
    location.href = location.pathname;
}

function buildShareUrl(top3) {
    const url = new URL(location.pathname, location.origin);
    url.searchParams.set('share', '1');
    url.searchParams.set('type', finalType === 'skl' ? 'skl' : 'gen');
    const topStr = top3.map(item => `${item.key}:${item.pct.toFixed(1)}`).join(',');
    url.searchParams.set('top', topStr);
    return url.toString();
}

function shareResult() {
    if (!lastTop3 || lastTop3.length === 0) return;
    const shareUrl = buildShareUrl(lastTop3);
    const majorName = resultData[lastTop3[0].key].n;
    const shareText = `저는 TYPE:M 검사 결과 '${majorName}'이(가) 잘 맞는다고 나왔어요! 나도 검사해보기 👉`;

    if (navigator.share) {
        navigator.share({ title: 'TYPE:M | 나만의 전공 매칭', text: shareText, url: shareUrl }).catch(() => { });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl)
            .then(() => showToast('결과 링크가 복사되었습니다! 카카오톡 등에 붙여넣어 공유해보세요 📋'))
            .catch(() => window.prompt('아래 링크를 복사해서 공유하세요', shareUrl));
    } else {
        window.prompt('아래 링크를 복사해서 공유하세요', shareUrl);
    }
}

function showToast(message, duration = 2400) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.remove('hidden');
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(window._typeMToastTimer);
    window._typeMToastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);
}

function tryRenderSharedResult() {
    const params = new URLSearchParams(location.search);
    if (params.get('share') !== '1') return false;

    const topParam = params.get('top');
    if (!topParam) return false;

    const parsed = topParam.split(',').map(pair => {
        const [key, pctStr] = pair.split(':');
        return { key, pct: parseFloat(pctStr) || 0 };
    }).filter(item => resultData[item.key]);

    if (parsed.length === 0) return false;

    finalType = params.get('type') === 'skl' ? 'skl' : 'gen';

    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    document.getElementById('shared-banner').classList.remove('hidden');

    renderResultUI(parsed);
    return true;
}

tryRenderSharedResult();