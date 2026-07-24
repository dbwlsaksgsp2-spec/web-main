export const scenario = {
  // ==========================================
  // EPISODE 1: 시간을 넘어서 - 만남
  // ==========================================
  ep1: {
    title: "제 1화: 시간을 넘어서 - 만남",
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "하아... 드디어 끝났다! 근데 벌써 창밖에 해가 다 졌네? 벚꽃도 밤에 보니까 좀 무섭다... 얼른 가야지, 경비 아저씨 순찰 도실 시간이야.",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "여태 안 가고 교실에서 뭐 하고 있는 거지, 후배?",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "으앗! 깜짝이야! 선배? 언제 오셨어요?",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "문단속 시간 진작에 지났다. 학교에 이렇게 늦게까지 남아있는 건 명백한 규정 위반이야. 벌써 몇 번째 경고인지 알아?",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "앗... 죄송해요. 과제가 생각보다 너무 오래 걸려서요. 어? 근데 그건..캔커피예요? 아직 엄청 따뜻하네..."
      },
      {
        speaker: "지호",
        text: "오해하지 마. 교무실 갔다가 자판기 앞에 버려져 있길래... 아니, 남길래 가져온 것뿐이니까. 자, 얼른 받아 챙겨서 나와. 불 끌 거다.",
        character: "jiho",
        expression: "blush",
        background: "classroom",
        choices: [
          {
            text: "“챙겨주셔서 감사해요, 잘 마실게요!”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep1_after_jiho"
          },
          {
            text: "“앗,죄송해요! 바로 가방 싸서 나갈게요!”",
            affinity: { jiho: 5, sunwoo: 5, doyun: 0 },
            nextScene: "ep1_after_jiho"
          }
        ]
      }
    ]
  },

  ep1_after_jiho: {
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "우와, 밖은 완전히 노을빛이네... 선배랑 같이 교문까지 걸어오니까 기분이 묘하...",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "야! OO아! 너 드디어 나오냐?! 내가 여기서 얼마나 기다렸는지 알아?!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선우야? 네가 왜 여기 있어? 설마 나 기다린 거야?"
      },
      {
        speaker: "선우",
        text: "당연하지! 연락도 안 받고 말이야. 이 어두운 길을 너 혼자 걷게 할 순 없잖아? 자, 가방 이리 내. 내가 들게.",
        character: "sunwoo",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "서선우. 학교 앞이 소란스럽군. 그리고 등하교는 스스로 하는 게 원칙이다. 과도한 호의는 상대에게 부담이야.",
        character: "jiho",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "아, 학생회장 형이었구나? 안녕하세요. 근데 호의가 아니라 우리 사이에 이 정돈 기본이거든요? 그치, OO아?",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "아... 바람이 너무 많이 부네. 악보들이 전부... 날아가 버렸어.",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "어? 음악실 계단 쪽에 계신 저분은... 어라? 방금 손에 들고 계시던 악보 뭉치가 바람에 다 날아가고 있잖아?!"
      },
      {
        speaker: "도윤",
        text: "음... 굳이 줍지 않아도 괜찮을지도... 바람이 머무는 곳으로 가는 거니까...",
        character: "doyun",
        expression: "sad",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "안 괜찮아요 선배! 저러다 교문 밖으로 다 날아가겠어요! 얘들아, 우리 어떡하지?",
        choices: [
          {
            text: "(도윤 선배에게 달려가 바람에 흩날리는 악보를 적극적으로 줍는다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep2"
          },
          {
            text: "(선우의 팔을 이끌며 “선우야, 같이 주워주자!” 하고 도윤을 도우러 간다)",
            affinity: { jiho: 0, sunwoo: 10, doyun: 5 },
            nextScene: "ep2"
          }
        ]
      }
    ]
  },
  // ==========================================
  // EPISODE 2: 세 개의 시선
  // ==========================================
  ep2: {
    title: "제 2화: 세 개의 시선",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "휴, 선배! 여기 악보 다 주웠어요. 바람이 세서 멀리까지 날아갈 뻔했네요. 자, 여기요!",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "아... 고마워. 너희 덕분에 소중한 곡을 잃어버리지 않았네. 난 음악부 강도윤이라고 해.",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "앗...강도윤 선배님이시구나! 안녕하세요, 전 1학년 서선우입니다!",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "참 다정한 사이네. 부러워라.",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "강도윤, 여기서 신입생들 붙잡고 노닥거리지 마라. 그리고 서선우, 너도 교문 앞 통행 방해하지 말고 얼른 하교하도록. 문 잠그고 순찰 마무리 지어야 하니까.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "회장 형은 분위기 깨는 데 뭐 있다니까요? 선배님이 고맙다고 인사하시던 중이었잖아요.",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "인사는 한 번이면 충분해. 규정된 하교 시간이 지나면 학교는 내 관할이다. OO이 너도, 얼른 집으로 출발해.",
        character: "jiho",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "학생회장님은 여전히 엄격하시네... 귀여운 후배님, 지호가 저렇게 무섭게 구는데 같이 가줄까? 마침 방향이 같을지도 모르는데.",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "잠시만요 선배님! OO이는 저랑 같이 가기로 선약이 되어 있어서요! 야, OO아, 얼른 가자. 회장 형 눈빛 무서워진 거 안 보여?",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "애, 얘들아... 다들 왜 나만 쳐다보고 있는 거야? 세 사람의 시선이 한꺼번에 꽂히니까 얼굴이 터질 것 같아... 이 어색한 공기를 깨려면 누구한테 먼저 말을 걸어야 하지...?",
        character: "jiho",
        expression: "normal",
        background: "sunset",
        choices: [
          {
            text: "“지호 선배, 매일 늦게까지 순찰 도시느라 고생 많으세요! 조심히 도세요.”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep3"
          },
          {
            text: "(선우의 옷자락을 콕콕 당기며) “선우야, 기다려줘서 고마워. 얼른 같이 가자!”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep3"
          },
          {
            text: "“도윤 선배, 악보 안 잃어버려서 다행이에요. 집 주위 조심히 들어가세요!”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep3"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 3: 음악실의 선율
  // ==========================================
  ep3: {
    title: "제 3화: 음악실의 선율",
    background: "music_room",
    steps: [
      {
        speaker: "나",
        text: "휴, 점심 먹고 나니까 졸리네... 어라? 특별동 복도는 점심시간에 사람도 없는데... 어디서 피아노 소리가 들리는 거지?",
        background: "music_room"
      },
      {
        speaker: "나",
        text: "이 아름다운 멜로디는 대체 뭐지... 음악실 문이 살짝 열려 있잖아...?",
        background: "music_room"
      },
      {
        speaker: "나",
        text: "와...피아노 건반 위를 유려하게 움직이는 저 손길... 강도윤 선배잖아? 노을 때랑은 또 분위기가 완전히 다르네. 진짜 멋있다...",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "music_room"
      },
      {
        speaker: "도윤",
        text: "어라, 귀여운 후배님? 거기 문틈으로 그렇게 숨어서 엿듣는 건 나쁜 버릇인데?",
        character: "doyun",
        expression: "smile",
        background: "music_room"
      },
      {
        speaker: "나",
        text: "으앗! 들켰다! 죄, 죄송해요 선배님! 방해하려던 건 정말 아니었어요...!"
      },
      {
        speaker: "도윤",
        text: "방해라고 생각 안 하니까 고개 숙이지 마. 연주하는 내내 문앞에서 서성이는 실루엣이 다 보였거든. 얼굴이 엄청 빨개졌네? 귀엽게.",
        character: "doyun",
        expression: "smile",
        background: "music_room"
      },
      {
        speaker: "나",
        text: "그, 그건 선배님이 갑자기 보셔서 그런 거고요...! 그나저나 방금 치신 곡, 진짜 너무 좋았어요. 저도 모르게 발걸음이 멈출 정도로요.",
        character: "doyun",
        expression: "normal",
        background: "music_room"
      },
      {
        speaker: "도윤",
        text: "그래? 그렇게 말해주니 기쁜걸. 아직 완성하지 못한 미완성 곡인데... 네가 내 첫 번째 관객이 되어준 셈이네. 어때, 이 곡에 대해서 더 듣고 싶어?",
        character: "doyun",
        expression: "smile",
        background: "music_room",
        choices: [
          {
            text: "“선율이 너무 아름다워서 나도 모르게 그만... 더 듣고 싶어요, 선배님!”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep4"
          },
          {
            text: "“멜로디가 신비로워요. 혹시 무슨 곡인지 물어봐도 될까요? 선배님이 직접 작곡하신 거예요?”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep4"
          },
          {
            text: "“첫 번째 관객이라니 영광이에요! 다음 파트도 맛보기로 조금만 더 보여주시면 안 돼요?”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 5 },
            nextScene: "ep4"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 4: 도서관의 오후
  // ==========================================
  ep4: {
    title: "제 4화: 도서관의 오후",
    background: "library",
    steps: [
      {
        speaker: "나",
        text: "와, 방과 후 도서관은 진짜 조용하다... 괜히 도서 정리 봉사활동 하겠다고 신청했나? 이 백과사전은 왜 이렇게 무거운 거야. 영차...",
        background: "library"
      },
      {
        speaker: "지호",
        text: "야, 꼬맹이. 너 그러다 사다리 넘어간다. 키도 작으면서 무모하게 맨 위 칸까지 왜 올라가 있는 건데?",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "library"
      },
      {
        speaker: "나",
        text: "앗, 깜짝이야! 선배, 언제 오신 거예요? 저 키 안 작거든요! 그리고 이거 이번 주까지 꼭 정리해야 하는 책이란 말이에요. 조금만 더 손을 뻗으면...!"
      },
      {
        speaker: "지호",
        text: "고집 피우지 말고 내려와. 내가 꽂아줄 테니까. ...어? 야! 조심해!",
        character: "jiho",
        expression: "normal",
        background: "library"
      },
      {
        speaker: "나",
        text: "으앗, 아앗! 중중, 중심이...! 사다리가 왜 이래?! 엄마야! 책들이 다 쏟아진다! 나 바닥에 그대로 부딪히는 거...",
        effect: "shake",
        background: "library"
      },
      {
        speaker: "지호",
        text: "위험하잖아! 쯧, 조심성 없기는. 내가 내려오라고 했지. 다칠 뻔했잖아.",
        character: "jiho",
        expression: "normal",
        background: "library"
      },
      {
        speaker: "나",
        text: "...어? 안 아프다? 아, 선배...? 선배가 왜 제 뒤에... 게다가 지금 이거, 선배가 절 뒤에서 완전히 안고 계신 건가요...?"
      },
      {
        speaker: "지호",
        text: "그럼 여기서 너 낙하하는 걸 보고만 있냐? 눈은 왜 그렇게 질끈 감고 있어. 어디 다친 데는 없는 거지? 놀랐잖아.",
        character: "jiho",
        expression: "sad",
        background: "library"
      },
      {
        speaker: "나",
        text: "눈을 뜨니까 지호 선배의 진지한 눈동자가 바로 코앞에 있잖아... 심장 소리가 선배한테까지 들릴 것 같아. 얼른 떨어져야 하는데 팔에 힘이 너무 세서 움직일 수가 없어..."
      },
      {
        speaker: "지호",
        text: "사다리가 낡아서 흔들리니까 가만히 있어. 아직 위험해. ...근데 너, 언제까지 그렇게 멍하니 나만 쳐다보고 있을 건데?",
        character: "jiho",
        expression: "blush",
        background: "library",
        choices: [
          {
            text: "(부끄러워하며 고개를 숙인다) “구해주셔서 감사합니다 선배... 진짜 깜짝 놀랐어요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep5"
          },
          {
            text: "“선배가 제 뒤에 계실 줄은 정말 몰랐어요. 저 때문에 선배도 깜짝 놀라셨죠?”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep5"
          },
          {
            text: "“그치만 선배가 너무 꽉 안고 계셔서 내려갈 수가 없는걸요? 이제 놓아주셔도 돼요!”",
            affinity: { jiho: 5, sunwoo: 0, doyun: 0 },
            nextScene: "ep5"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 5: 소꿉친구의 걱정
  // ==========================================
  ep5: {
    title: "제 5화: 소꿉친구의 걱정",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "휴, 오늘 도서관 활동은 백과사전 때문에 진짜 힘들었네... 어라? 교문 뒤 가로등 아래 서 있는 거... 선우잖아? 웬일로 저기서 뚱한 표정으로 차가운 캔음료를 만지작거리고 있대?",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "야! 서선우! 너 여기서 뭐 해? 나 기다린 거야?",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "어, 나왔냐? ... 도서관에서 한지호 선배랑 단둘이 좋은 시간 보내느라 늦게 나온 줄 알았지.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "엑? 지호 선배 얘기는 갑자기 왜 나와? 그냥 사다리가 흔들려서 선배가 도와주신 것뿐이거든?"
      },
      {
        speaker: "선우",
        text: "도와주긴 무슨... 야, OO아. 너 요즘 솔직히 너무한 거 아니냐? 며칠 전엔 음악부 강도윤 선배한테 붙어 있더니, 오늘은 또 학생회장 선배야? 나 진짜 서운하단 말이야.",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선우야, 목소리가 너무 커...! 지나가는 애들이 다 보잖아. 일부러 그런 게 아니라 어쩌다 보니 엮인 거야."
      },
      {
        speaker: "선우",
        text: "어쩌다 보니는 무슨! 나랑 있을 때보다 그 선배들이랑 있는 게 더 재밌냐? 솔직하게 말해봐. 이제 소꿉친구 따위는 아웃 오브 안중이다 이거지?",
        character: "sunwoo",
        expression: "sad",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "낙엽 굴러가는 것만 봐도 웃던 애가 저렇게 진지한 표정으로 캔음료만 꽉 쥐고 있으니까 괜히 나까지 미안해지네... 질투하는 모습이 귀엽기도 하고. 얼른 달래줘야겠어.",
        character: "sunwoo",
        expression: "sad",
        background: "sunset",
        choices: [
          {
            text: "“바보야, 목소리 낮춰! 나한테 1순위는 언제나 소꿉친구인 너뿐이야.”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep6"
          },
          {
            text: "“너 지금 설마 질투하는 거야? 덩치는 커가지고 엄청 귀엽네~”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep6"
          },
          {
            text: "“그 선배들이 멋있긴 하지만... 그래도 나랑 제일 오래 붙어있던 건 너잖아!”",
            affinity: { jiho: 0, sunwoo: 5, doyun: 0 },
            nextScene: "ep6"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 6: 빗속의 약속
  // ==========================================
  ep6: {
    title: "제 6화: 빗속의 약속",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "어라? 하늘이 갑자기 왜 이렇게 컴컴해지지? 잠깐, 방금 번쩍한 거 같은데... 헉! 비 온다! 갑자기 소나기가 왜 이렇게 세차게 퍼붓는 거야!",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "하필이면 도서관 청소 다 끝나니까 비가 오네... 우산도 없는데 중앙 현관에서 꼼짝없이 갇혀버렸잖아. 발만 동동 구른다고 비가 그치는 것도 아니고, 집에 어떻게 가지?",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "거기서 혼자 뭐 하냐, 꼬맹이. 칠칠치 못하게 일기예보도 안 보고 다닌 거지? 이거 가져가라. 마침 학생회실에 여분 우산이 굴러다니길래 가져왔으니까.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "야! OO아! 내가 뛰어오는 거 봤어?! 너 우산 없는 거 알고 집에서 내 제일 큰 우산 챙겨서 뛰어왔다고! 얼른 이리 와, 내 우산 같이 쓰고 가자! 내가 집까지 안전하게 모실게!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "비가 엄청 쏟아지네. 다들 성격도 급해라... 안녕, 후배님. 마침 내 우산이 꽤 넓은 편인데, 나랑 같이 걸어갈래? 빗소리가 좋아서 클래식 얘기하면서 걷기 딱 좋은 날씨야.",
        character: "doyun",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "강도윤, 그리고 서선우. 너희까지 와서 애 정신없게 만들지 마. 얜 내 우산 받아서 조용히 등하교하면 돼. 그게 제일 깔끔해.",
        character: "jiho",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "회장 형, 생색내지 마요! 빌려주는 거보다 같이 쓰고 가는 소꿉친구가 훨씬 든든하거든요? 야, OO아! 너 누구 우산 쓸 거야? 빨리 골라 봐!",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "선택은 우리 후배님이 하는 거니까 너무 재촉하지 마, 둘 다. 자, 네 마음이 가는 우산을 골라봐. 누구랑 같이 비를 피하고 싶어?",
        character: "doyun",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "아니, 셋이서 동시에 우산을 내밀면서 날 쳐다보면 어떡해...! 지호 선배의 츤데레 같은 검은 우산, 선우의 장난기 가득한 파란 우산, 그리고 도윤 선배의 깔끔한 투명 우산까지... 정말 누구의 손을 잡아야 하는 거지?",
        character: "jiho",
        expression: "normal",
        background: "sunset",
        choices: [
          {
            text: "“츤데레처럼 툭 던져주는 지호 선배의 우산을 받을래요! 감사해요, 선배.”",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep7"
          },
          {
            text: "“날 위해 집에서부터 뛰어와 준 선우의 파란 우산 아래로 쏙 들어갈래!”",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep7"
          },
          {
            text: "“나른하고 다정한 도윤 선배의 우산을 같이 쓰고 빗소리를 들으며 걸을래요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 20 },
            nextScene: "ep7"
          }
        ]
      }
    ]
  },
  // ==========================================
  // EPISODE 7: 의문의 편지
  // ==========================================
  ep7: {
    title: "제 7화: 의문의 편지",
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "앗, 늦겠다, 늦겠어! 얼른 실내화로 갈아 신고 교실 올라가야...",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "어라? 내 신발장을 열자마자 뭐가 툭 떨어지네? ...분홍색 편지봉투?",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "우와... 설마 이거 말로만 듣던 러브레터인가? 나한테도 이런 날이 오다니! 어디 열어볼까...?",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "음? 근데 알림장 글씨를 오려 붙인 것 같네... [주의: 학교의 인기인들과 너무 가까이 지내지 마. 다칠지도 몰라.] ...에? 이게 뭐야?",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "러브레터가 아니라... 섬뜩한 경고문이잖아? 가슴이 갑자기 쿵쾅거려. 손이 막 떨리는데 어떡하지...",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "야! OO아! 아침부터 신발장 앞에서 멍하니 뭐 하냐? 실내화 안 갈아 신어?",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "서선우, 등교 시간 임박했다. 복도에서 소란 피우지 말고... 어이, 꼬맹이. 너 얼굴 왜 그렇게 하얗게 질려 있어?",
        character: "jiho",
        expression: "sad",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "무슨 일 있어? 다들 여기 모여서 심각한 표정이네.",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "어? 진짜네? 야, 너 왜 그래? 어디 아파? 손은 왜 이렇게 떨어?",
        character: "sunwoo",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "아, 아니야! 아무것도...! (나도 모르게 뒤로 편지를 감추려다 바닥에 떨어뜨려 버렸다)"
      },
      {
        speaker: "지호",
        text: "아무것도 아니긴. 그 손에 든 건 뭔데 그러... 어? 바닥에 떨어진 이거, 글씨 짜깁기한 쪽지잖아. 이리 내놔 봐.",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "잠깐만, 지호야. 억지로 빼앗으려고 하지 마. 후배님이 지금 너무 놀란 것 같으니까 천천히 이야기하게 두자.",
        character: "doyun",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "야, OO아. 나한테까지 숨길 생각하지 말고 빨리 말해줘. 뭔데 그래? 어? 나 진짜 걱정돼서 미치겠단 말이야.",
        character: "sunwoo",
        expression: "sad",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "셋이 나를 둘러싸고 걱정스러운 눈빛으로 물어오니까 눈물이 날 것 같아. 이 무서운 경고장을... 누구한테 먼저 보여주고 도움을 청해야 하지?",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "“지호 선배... 실은 신발장에 이게 들어있었어요. 도와주세요.” (숨기지 않고 쪽지를 보여준다)",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep8"
          },
          {
            text: "“선우야... 나 너무 무서워.” (선우의 옷소매를 꽉 잡고 떨리는 목소리로 속삭인다)",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep8"
          },
          {
            text: "\"도윤 선배, 이 쪽지 좀 봐주실래요? 어떻게 해야 할지 모르겠어요.\" (차분한 도윤 선배에게 의견을 구한다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep8"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 8: 보이지 않는 보디가드
  // ==========================================
  ep8: {
    title: "제 8화: 보이지 않는 보디가드",
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "쪽지를 다 같이 읽고 나니까, 갑자기 주변 공기가 얼어붙은 것 같아. 다들 표정이 무섭도록 진지하게 굳어버렸어...",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "이딴 유치한 짓을 학교에서 벌이다니. 쪽지는 내가 보관하겠다. 학생회 차원에서 범인부터 찾아낼 테니까 넌 신경 끄고 있어.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "형이 무슨 수로 범인을 찾아요! 당장 OO이 무서워하는 거 안 보여요? 야, OO아. 오늘부터 등하굣길 무조건 나랑 같이 가. 내가 매일 옆에서 지켜줄게.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "서선우, 네가 하루 종일 붙어있을 수 있냐? 이동 수업 때나 쉬는 시간엔 어쩌려고. 꼬맹이 너, 당분간 혼자 다니지 말고 내 말 들어.",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "두 사람이 날 사이에 두고 엄청 험악하게 투닥거리고 있어... 어떡하지? 일단 한 사람 편을 들어서 말려야 할 것 같은데...",
        choices: [
          {
            text: "“선우 말이 맞아. 혼자 다니는 등하굣길이 제일 무서우니까 선우랑 같이 갈게요.”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep8_choice_sunwoo"
          },
          {
            text: "“지호 선배 말씀대로 학교 안에서도 위험하니까 선배 연락처 알려주세요.”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep8_choice_jiho"
          }
        ]
      }
    ]
  },

  ep8_choice_sunwoo: {
    background: "classroom",
    steps: [
      {
        speaker: "선우",
        text: "들었죠, 회장 형? OO이도 나랑 같이 가는 게 제일 안전하대요! 그러니까 등하굣길은 제가 꽉 잡고 있을게요.",
        character: "sunwoo",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "쯧, 좋을 대로 해라. 대신 등하교 제외한 시간엔 내가 철저하게 통제할 테니까 알아서 해.",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "둘 다 진정해. 너희가 그렇게 소리 높여 싸우면 후배님이 더 불안해하잖아. 안 그래?",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "도윤 선배님..."
      },
      {
        speaker: "도윤",
        text: "참 나쁜 장난이네. 하지만 걱정 마, 널 다치게 내버려 두진 않을 거니까. 교실이 너무 답답하고 불안하면 언제든 음악실로 와. 거긴 조용하니까.",
        character: "doyun",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "아무튼 나 포함해서 여기 셋이나 있으니까 너무 걱정하지 마, 알았지? 우리가 보디가드 해줄게!",
        character: "sunwoo",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "셋이 저렇게 철저하게 보호 모드를 켜고 든든하게 굴어주니까, 방금 전까지 떨리던 마음이 싹 가라앉는 기분이야. 고마운 세 사람에게 뭐라고 답하면 좋을까?",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "“제일 먼저 쪽지를 챙겨주고 걱정해 준 지호 선배, 고마워요. 연락할게요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep9"
          },
          {
            text: "“자기 일처럼 화내주고 매일 지켜주겠다는 선우 너 보니까 진짜 든든하다. 고마워.”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep9"
          },
          {
            text: "“불안할 때 음악실로 오라고 침착하게 말해준 도윤 선배 덕분에 마음이 놓여요. 감사해요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep9"
          }
        ]
      }
    ]
  },

  ep8_choice_jiho: {
    background: "classroom",
    steps: [
      {
        speaker: "지호",
        text: "내 판단이 맞았군. 내 번호다. 단축번호 1번에 저장해 두고, 이상한 낌새가 있으면 1초도 망설이지 말고 눌러.",
        character: "jiho",
        expression: "blush",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "하! 참나, 완전 어이없어. 야, OO아! 내 번호는 이미 저장되어 있으니까 나한테 먼저 해야 해, 알았어?! 등하교는 무조건 나랑 하는 거다!",
        character: "sunwoo",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "둘 다 진정해. 너희가 그렇게 소리 높여 싸우면 후배님이 더 불안해하잖아. 안 그래?",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "도윤 선배님..."
      },
      {
        speaker: "도윤",
        text: "참 나쁜 장난이네. 하지만 걱정 마, 널 다치게 내버려 두진 않을 거니까. 교실이 너무 답답하고 불안하면 언제든 음악실로 와. 거긴 조용하니까.",
        character: "doyun",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "아무튼 나 포함해서 여기 셋이나 있으니까 너무 걱정하지 마, 알았지? 우리가 보디가드 해줄게!",
        character: "sunwoo",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "셋이 저렇게 철저하게 보호 모드를 켜고 든든하게 굴어주니까, 방금 전까지 떨리던 마음이 싹 가라앉는 기분이야. 고마운 세 사람에게 뭐라고 답하면 좋을까?",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "“제일 먼저 쪽지를 챙겨주고 걱정해 준 지호 선배, 고마워요. 연락할게요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep9"
          },
          {
            text: "“자기 일처럼 화내주고 매일 지켜주겠다는 선우 너 보니까 진짜 든든하다. 고마워.”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep9"
          },
          {
            text: "“불안할 때 음악실로 오라고 침착하게 말해준 도윤 선배 덕분에 마음이 놓여요. 감사해요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep9"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 9: 축제 준비일 (루트 진입 분기점)
  // ==========================================
  ep9: {
    title: "제 9화: 축제 준비일",
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "와, 드디어 내일부터 학교 봄꽃 대축제 시작이구나! 전날이라 그런지 교실도, 복도도 축제 준비로 엄청 분주하네. 다들 들떠 보여.",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "어이, 꼬맹이. 거기서 멍하니 서 있지 말고 이리 와. 학생회 물품 창고에서 짐 옮겨야 하는데 손이 부족하다. 넌 내 옆에서 보조해.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "앗, 회장 형! 치사하게 OO이를 왜 학생회로 데려가요? 우리 반 부스 홍보판 만들어야 해서 OO이 손길이 꼭 필요하다고요! 야, OO아, 나랑 같이 우리 반 부스 지켜야지!",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "지호도, 선우도 여전하네. 하지만 후배님, 음악관 쪽 공연 무대 피아노 세팅도 도와줘야 하지 않아? 저번에 내 첫 관객이 되어주기로 약속했잖아.",
        character: "doyun",
        expression: "smile",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "아니, 셋이 각자 자기 구역에서 자기랑 같이 가자고 붙잡으면 난 어떡하라고...! 다들 눈빛이 너무 진지해서 거절하기도 힘든데, 일단 누구 말을 먼저 들어줘야 하지?",
        choices: [
          {
            text: "“지호 선배, 학생회 일 엄청 바빠 보이는데 창고까지만 같이 가드릴까요?”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep9_talk_more"
          },
          {
            text: "“선우야, 우리 반 부스 홍보판 색칠하는 것만 얼른 같이 도와줄게!”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep9_talk_more"
          },
          {
            text: "“도윤 선배, 음악관 무대 세팅하는 거 신기해 보여요. 구경하러 가도 돼요?”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep9_talk_more"
          }
        ]
      }
    ]
  },

  ep9_talk_more: {
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "잠깐 대화를 정리해보려고 했는데, 세 사람 다 물러설 기미가 전혀 없어 보여. 오히려 축제 당일 기간까지 통째로 같이 보내자며 붙잡고 있잖아...?"
      },
      {
        speaker: "지호",
        text: "창고만 돕는 걸론 안 돼. 내일 축제 본 행사 때도 넌 내 옆에 붙어 있어라. 며칠 전 경고장 사건도 있으니까, 내 시야에 두는 게 가장 안전해.",
        character: "jiho",
        expression: "blush",
        background: "classroom"
      },
      {
        speaker: "선우",
        text: "회장 형, 또 그 핑계 대네! 축제 때는 온 동네 사람 다 와서 우리 반 부스가 제일 바쁘단 말이야. OO아, 축제 내내 나랑 같이 맛있는 거 먹으면서 축제 즐기자, 어?",
        character: "sunwoo",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "도윤",
        text: "불안한 마음은 음악으로 치유하는 게 제일 좋아. 축제 기간 동안 음악관 공연 준비하는 거, 가장 가까운 곳에서 내 곁에 있어 줄래?",
        character: "doyun",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "드디어 올 것이 왔구나... 이번 축제 기간 동안 누구와 가장 깊은 시간을 보내느냐에 따라 내 학교 생활이 완전히 달라질 거야. 내 운명을 결정할 상대는... 누구일까?",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "“선배가 지켜준다면 안심이니까요. 학생회 일을 도우며 지호 선배 곁에 남을래요.”",
            affinity: { jiho: 25, sunwoo: 0, doyun: 0 },
            nextScene: "ep10_jiho"
          },
          {
            text: "“역시 가장 편하고 즐거운 건 너야. 선우와 함께 우리 반 축제 부스를 지킬래!”",
            affinity: { jiho: 0, sunwoo: 25, doyun: 0 },
            nextScene: "ep10_sunwoo"
          },
          {
            text: "“선배의 완벽한 피아노 연주를 곁에서 듣고 싶어요. 도윤 선배와 음악관에 갈래요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 25 },
            nextScene: "ep10_doyun"
          }
        ]
      }
    ]
  },
  // ==========================================
  // EPISODE 10: 불꽃놀이 축제 (데이트)
  // ==========================================
  ep10_jiho: {
    title: "제 10화: 불꽃놀이 축제 - 지호",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "와... 시끄러운 축제 장소에서 살짝 벗어나니까 엄청 조용하네. 학생회실 테라스에서 내려다보는 축제 야경, 진짜 예쁘다.",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "일이 드디어 끝났군. 축제 총괄하느라 오늘 하루 종일 뛰어다녔더니 삭신이 쑤시는군.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선배, 오늘 정말 고생 많으셨어요! 음료수라도 하나 사다 드릴까요?",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "필요 없어. 시끄러운 아래로 내려갈 필요 없이, 그냥 여기서 너랑 밤하늘 불꽃이나 보련다. 곧 시작할 시간이야.",
        character: "jiho",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "펑! 펑-!! 우와아! 선배, 저기 봐요! 불꽃 엄청 크게 터져요! 진짜 대박이다!",
        effect: "flash",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "그러네. 예쁘다. ...너 말이야.",
        character: "jiho",
        expression: "blush",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "에? 선배, 방금 뭐라고...",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "어...? 선배, 지금 슬그머니 내 어깨에 손 올리신 거예요? 갑자기 거리가 너무 가까워진 것 같은데...",
        background: "sunset",
        choices: [
          {
            text: "“선배 손, 엄청 따뜻하네요.” (선배의 얼굴을 빤히 쳐다본다)",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep10_jiho_next"
          },
          {
            text: "“갑자기 그렇게 들어오시면 반칙이에요... 심장 터질 것 같단 말이에요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep10_jiho_next"
          }
        ]
      }
    ]
  },

  ep10_jiho_next: {
    background: "sunset",
    steps: [
      {
        speaker: "지호",
        text: "반칙 아니야. 내 정당한 권리지. 축제 내내 널 내 시야에 두겠다고 분명히 말했을 텐데.",
        character: "jiho",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "지호 선배가 내 어깨를 자기 쪽으로 조금 더 강하게 끌어당겼어. 그리고 터지는 커다란 불꽃빛 속에서 선배랑 내 거리가 완전히 겹쳐질 정도로...",
        // 🎨 [지호 CG 생성 프롬프트] 
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with black hair and a school uniform, gently putting his arm around a girl's shoulder on a school rooftop terrace at night. Beautiful fireworks exploding in the night sky, colorful light reflections, romantic and emotional atmosphere, cinematic lighting, masterpiece, high quality --ar 16:9
        illust: "jiho_festival_cg",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "밤하늘을 수놓는 화려한 불꽃놀이와 내 어깨를 감싸 안은 선배의 단단한 손길. 이 달콤한 순간에 난 선배에게 어떤 행동을 해야 할까?",
        illust: "jiho_festival_cg",
        background: "sunset",
        choices: [
          {
            text: "(부끄럽지만 용기를 내어) 지호 선배의 손을 슬며시 맞잡는다.",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep12"
          },
          {
            text: "“오늘 선배랑 여기 같이 있길 정말 잘한 것 같아요. 불꽃이 참 예쁘네요.”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep12"
          }
        ]
      }
    ]
  },

  ep10_sunwoo: {
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "우와아... 축제 본 행사라 그런지 운동장 앞 꽃길에 사람 진짜 빽빽하다. 발 디딜 틈도 없네.",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "와! 사람이 너무 많아서 진짜 길 잃어버리겠다. 야, OO아! 내 뒤에 바짝 붙어서 쫓아와!",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "으앗! 밀지 마세요! ...아, 선우야! 사람 밀려와서 너 놓칠 것 같아!",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "거 봐, 칠칠치 못하게 굴 줄 알았어. 이리 내놔.",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "어...? 선우가 내 손을 덥석 잡더니, 그대로 손가락 사이사이로 자기 손가락을 얽어서 깍지를 꽉 껴버렸어...!",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "야, 내 손 꽉 잡아. 절대 놓치면 안 돼. 알았어? 귀찮게 길 잃어버려서 미아 보호소 가게 만들지 말고.",
        character: "sunwoo",
        expression: "blush",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "말은 툭툭 던지면서 얼굴은 엄청 빨개져 있잖아... 잡힌 손이 너무 뜨거워서 심장이 두방망이질 치기 시작했어. 뭐라고 대답하지?",
        background: "sunset",
        choices: [
          {
            text: "“치... 길 잃어버릴까 봐 걱정해 준 거면서 츤츤거리기는.”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep10_sunwoo_next"
          },
          {
            text: "“너 손 진짜 크다... 이렇게 대놓고 손잡으니까 갑자기 엄청 남자로 보여.”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep10_sunwoo_next"
          }
        ]
      }
    ]
  },

  ep10_sunwoo_next: {
    background: "sunset",
    steps: [
      {
        speaker: "선우",
        text: "무, 무슨 소릴 하는 거야...! 나 원래 남자였거든?! 장난치지 말고 앞이나 똑바로 봐!",
        character: "sunwoo",
        expression: "blush",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "그때 펑-! 하고 하늘 위로 커다란 축제 불꽃이 터졌고, 선우는 쑥스러운 듯 고개를 돌리면서도 내 손을 더 꽉 쥐어 왔어.",
        // 🎨 [선우 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. Close-up shot focusing on a handsome high school boy with messy brown hair blushing, holding hands tightly with intertwining fingers (interlocked fingers) with a girl. Beautiful orange sunset and cherry blossom petals flying in the background, soft lighting, emotional, heartwarming atmosphere, masterpiece, high quality --ar 16:9
        illust: "sunwoo_festival_cg",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "야... 불꽃 터지는 거 봐봐. 진짜 예쁘다. ...그치만 솔직히 불꽃보다 네가 눈앞에 있어서 더 좋아. 나 진짜 진지해.",
        illust: "sunwoo_festival_cg",
        character: "sunwoo",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "평소와는 다른 선우의 듬직하고 어른스러운 눈빛이 노을과 불꽃빛에 섞여서 반짝이고 있어. 난 선우에게 어떤 말을 건네야 할까?",
        illust: "sunwoo_festival_cg",
        background: "sunset",
        choices: [
          {
            text: "“웅, 나도 선우 네 손 절대 안 놓을게.” 마주 잡은 손에 힘을 준다.",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep13"
          },
          {
            text: "“치... 너 오늘 왜 이렇게 어른스러워? 적응 안 되게 감동 주지 마~”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep13"
          }
        ]
      }
    ]
  },

  ep10_doyun: {
    title: "제 10화: 불꽃놀이 축제 - 도윤",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "와... 운동장 쪽은 축제 열기 때문에 엄청 시끄러운데, 여기 음악실은 창문만 닫아도 거짓말처럼 고즈넉해지네. 창밖으로 노을이랑 불꽃이 섞여서 엄청 예쁘다.",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "왔네, 후배님. 밖이 많이 소란스럽지? 음악실로 피신 오길 잘했어.",
        character: "doyun",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선배님 연주 준비하시는 거 방해 안 되게 구석에 조용히 있을게요! 근데 선배는 불꽃놀이 안 보러 가세요?",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "음, 난 밤하늘 불꽃도 좋지만... 지금 창문 틈으로 들어와서 건반 위로 떨어지는 불꽃빛이 더 예쁜 것 같아서. 건반이 알록달록하게 빛나잖아.",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "어...? 도윤 선배가 피아노 의자 옆자리를 손으로 톡톡 치면서 날 보며 미소 짓고 있어. 이거... 자기 옆에 같이 앉으라는 뜻 맞지...?",
        background: "sunset",
        choices: [
          {
            text: "“선배가 톡톡 치신 자리... 제가 앉아도 되는 거예요? 슬쩍 앉는다.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep10_doyun_next"
          },
          {
            text: "“건반 위 불꽃빛을 더 가까이서 보고 싶어요! 당장 선배 옆으로 다가간다.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep10_doyun_next"
          }
        ]
      }
    ]
  },

  ep10_doyun_next: {
    background: "sunset",
    steps: [
      {
        speaker: "도윤",
        text: "당연하지. 널 앉히려고 비워둔 자리니까. 자, 여기 악보 같이 볼래?",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "도윤 선배의 바로 옆자리에 바짝 밀착해 앉았더니 은은한 향기가 훅 끼쳐와. 피아노 건반을 누르는 선배의 유려한 손가락이 바로 눈앞에 보여서 심장이 터질 것 같아...",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "옆에 앉으니까 네 숨소리까지 다 들리네. ...긴장했어?",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선배가 연주를 시작하려는 듯 건반 위에 손을 올린 채 고개를 돌려 나를 똑바로 응시했어. 창밖에서 펑-! 하고 터지는 불꽃빛이 선배의 은빛 머리칼에 부딪혀서 엄청 아름답게 반짝여...",
        // 🎨 [도윤 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with silver hair and a school uniform, sitting side-by-side with a girl on a piano bench inside a dark school music room at night. Colorful fireworks light casting beautiful reflections through a large window onto them and the piano keys. Romantic, dreamlike, and melancholic atmosphere, cinematic lighting, masterpiece, high quality --ar 16:9
        illust: "doyun_festival_cg",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "쏟아지는 불꽃놀이의 중심에서 오직 선배와 나, 우리 단둘만의 시간이 흐르고 있어. 이 낭만적인 침묵 속에서 난 선배에게 어떤 말을 해야 할까?",
        illust: "doyun_festival_cg",
        background: "sunset",
        choices: [
          {
            text: "“불꽃 소리에 묻히지 않게... 선배님의 연주를 가장 가까이서 들려주세요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 20 },
            nextScene: "ep11"
          },
          {
            text: "“선배 옆에 앉으니까 불꽃보다 선배 얼굴에 더 눈이 가요... 책임지세요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep11"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 11-1: 숨길 수 없는 진심 (도윤 루트)
  // ==========================================
  ep11: {
    title: "제 11화: 숨길 수 없는 진심",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "시끌벅적했던 밤의 축제 소리도 멀어지고... 가로등 불빛만 은은하게 비치는 한적한 공원 벤치에 선배랑 단둘이 앉아 있으니까 왠지 기분이 이상해.",
        background: "park"
      },
      {
        speaker: "도윤",
        text: "바람이 조금 차갑네. 아까 음악실에서 급하게 나오느라 겉옷을 못 챙겼어. 춥진 않아?",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "park"
      },
      {
        speaker: "나",
        text: "아, 전 괜찮아요! 선배님이 아까 피아노 연주 멋지게 마무리해 주신 덕분에 제 마음은 아직 엄청 뜨거운데요?"
      },
      {
        speaker: "도윤",
        text: "다행이네. 실은 아까 건반 위에 떨어지던 불꽃빛을 보면서... 문득 그런 생각이 들더라고. 언제까지 네 앞에서 선배라는 가면을 쓰고 있어야 할까, 하고.",
        character: "doyun",
        expression: "sad",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배...? 갑자기 목소리 톤이 낮아지셨어요. 평소의 나른한 장난기가 싹 사라진 진지한 눈빛으로 날 바라보니까... 나 또 심장이 제멋대로 뛰기 시작해.",
        background: "park",
        choices: [
          {
            text: "“선배가 어떤 모습을 보여주셔도... 전 전부 다 받아들일 준비가 되어 있어요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep11_talk_more"
          },
          {
            text: "“가면이라니요? 전 지금의 다정한 선배님 모습도 정말 좋은걸요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep11_talk_more"
          }
        ]
      }
    ]
  },

  ep11_talk_more: {
    background: "park",
    steps: [
      {
        speaker: "도윤",
        text: "다정한 선배라... 고마워. 하지만 처음 너 봤을 때부터 내 마음의 악보엔 이미 너라는 선율만 가득 적히기 시작했어. 억지로 지우려고 해도 지워지지 않더라.",
        character: "doyun",
        expression: "normal",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배의 길고 고운 손가락이 내 떨리는 손등 위로 조심스럽게 겹쳐져 왔어. 닿은 곳부터 온기가 확 퍼지는 것 같아..."
      },
      {
        speaker: "도윤",
        text: "OO아. 나 이제 신비주의 선배 같은 거 안 할래. 그냥 네 앞에서 가장 솔직한 사람이 되고 싶어. 너한테 가장 특별한 남자가 되고 싶은데... 나한테 기회를 줄래?",
        character: "doyun",
        expression: "blush",
        effect: "shake",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배의 진심이 온전히 실린 담백하고도 묵직한 고백. 가로등 조명 아래 빛나는 선배의 은빛 머리칼과 떨리는 그 눈동자를 보며, 난 어떤 대답을 건내야 할까?",
        // 🎨 [도윤 최종고백 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with silver hair gently holding a girl's hand on a wooden bench in a quiet public park at night. Warm yellow street lamp lighting illuminating them softly, emotional and romantic atmosphere, beautiful night sky, masterpiece, high quality --ar 16:9
        illust: "doyun_confession_cg",
        background: "park",
        choices: [
          {
            text: "“저도 선배와 같은 마음이에요. 선배 옆에 나란히 서서 계속 같이 걷고 싶어요.” (고백을 받아들인다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 20 },
            nextScene: "ep14_doyun"
          },
          {
            text: "“죄송해요 선배... 소중한 인연이지만, 선배의 마음을 온전히 다 받아주기는 힘들 것 같아요.” (거절한다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 11-2: 차가움 뒤의 온기 (지호 루트)
  // ==========================================
  ep12: {
    title: "제 12화: 차가움 뒤의 온기",
    background: "classroom",
    steps: [
      {
        speaker: "나",
        text: "우와... 시끌벅적했던 축제가 끝나니까 학교가 엄청 조용하네. 가방 챙기려고 아무도 없는 학생회실로 돌아왔는데... 어? 지호 선배?",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "왔냐, 꼬맹이. 칠칠치 못하게 가방을 두고 가더니... 한참 기다렸잖아.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "앗, 저 기다리신 거예요? 먼저 집에 가셔도 됐는데... 선배, 근데 왜 책상 옆에 그렇게 멍하니 기대 서 계세요? 피곤하세요?"
      },
      {
        speaker: "지호",
        text: "피곤해서 이러는 거 같냐? ...너 아까 축제 때 서선우랑 강도윤 그 자식들이랑 엄청 재미있게 놀더라. 하루 종일 웃음이 나오지?",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "에이... 질투하시는 거예요? 그냥 축제 부스 구경하느라 잠깐 얘기한 것뿐인데... 선배 표정이 왜 이렇게 심각해요?"
      },
      {
        speaker: "지호",
        text: "심각할 수밖에 없잖아. 난 축제 총괄하면서도 내내 네 생각밖에 안 나서 미치겠는데, 넌 딴 놈들 앞에서 그렇게 웃고 있으니까.",
        character: "jiho",
        expression: "blush",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "지호 선배가 얼굴을 붉힌 채 성큼성큼 다가와서 내 양어깨를 꽉 붙잡았어. 단단한 손길에 갇혀서 움직일 수가 없어... 어떡하지?",
        background: "classroom",
        choices: [
          {
            text: "“선배가 그렇게 저만 바라봐 주시니까... 솔직히 엄청 기뻐요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep12_talk_more"
          },
          {
            text: "“갑자기 그렇게 화내듯 다가오시면 무서워요 선배... 진정하고 말씀해 주세요.”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep12_talk_more"
          }
        ]
      }
    ]
  },

  ep12_talk_more: {
    background: "classroom",
    steps: [
      {
        speaker: "지호",
        text: "겁주려던 건 아냐. 미안하다... 하지만 널 보면 나도 나를 통제할 수가 없어. 너랑 있으면 내 심장이 멋대로 빠르게 뛰어. 이런 거, 나조차 처음 겪는 주체할 수 없는 감정이라고.",
        character: "jiho",
        expression: "sad",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "선배의 손길이 어깨에서 스르륵 내려와 내 두 손을 꼭 움켜쥐었어. 겉으로는 차가워 보이던 선배였는데, 마주 잡은 손은 데일 것처럼 뜨거워..."
      },
      {
        speaker: "지호",
        text: "그러니까 바보같이 딴청 피우지 마라. 경고장 사건 때도 그렇고, 널 내 눈앞에 묶어두고 평생 지켜주고 싶으니까. 내 곁에 있어 줘.",
        character: "jiho",
        expression: "smile",
        effect: "shake",
        background: "classroom"
      },
      {
        speaker: "나",
        text: "평소의 냉정함을 싹 지워낸, 선배의 진심 어린 직설적인 고백. 나만 바라보는 그 간절한 눈동자 앞에서 난 어떤 대답을 해야 할까?",
        // 🎨 [지호 최종고백 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with neat black hair and a school uniform, blushing deeply while holding both hands of a girl tightly inside a quiet, empty student council room at sunset. Warm orange light spilling through the big window, passionate, protective, and romantic atmosphere, masterpiece, high quality --ar 16:9
        illust: "jiho_confession_cg",
        background: "classroom",
        choices: [
          {
            text: "“선배 마음 다 알아요... 저도 선배 옆자리 절대 떠나지 않고 계속 함께할게요.” (고백을 받아들인다)",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep14_jiho"
          },
          {
            text: "“선배... 정말 감사하고 든든하지만, 제 마음의 진짜 주인은 선배가 아닌 것 같아요.” (거절한다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 11-3: 항상 너를 지키는 (선우 루트)
  // ==========================================
  ep13: {
    title: "제 13화: 항상 너를 지키는",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "와... 축제가 완전히 끝나니까 진짜 밤이 깊었네. 벚꽃이 흩날리는 어스름한 저녁길, 늘 걷던 골목길인데 오늘 가로등 밑은 왜 이렇게 낯설게 느껴지지?",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "야, OO아. ...너 오늘 축제 내내 한지호 선배랑 강도윤 선배 곁에서 떨어지질 않더라. 나 진짜 하루 종일 가슴이 타들어 가는 줄 알았어.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선우야...? 너 왜 그래? 평소처럼 장난치지도 않고, 목소리가 왜 이렇게 가라앉았어? 화난 거야?"
      },
      {
        speaker: "선우",
        text: "화난 게 아니라 겁나서 그래. 늘 내 옆에 당연하게 서 있던 네가, 이러다 정말 저 선배들한테 가버릴까 봐... 나 혼자 바보처럼 멀어질까 봐 무서워서 그렇다고.",
        character: "sunwoo",
        expression: "sad",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "장난꾸러기 서선우가 저런 슬픈 표정으로 내 앞을 가로막고 서니까 숨이 턱 막혀 와. 흩날리는 벚꽃 사이로 선우가 내 두 손을 다급하게 꽉 붙잡았어.",
        background: "sunset",
        choices: [
          {
            text: "“서선우... 나 어디 안 가. 나한테 넌 항상 특별한 존재야.” (선우를 안심시킨다)",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep13_talk_more"
          },
          {
            text: "“너 오늘 진짜 평소랑 다르다... 무슨 말을 하려고 이렇게 진지해?”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep13_talk_more"
          }
        ]
      }
    ]
  },

  ep13_talk_more: {
    background: "sunset",
    steps: [
      {
        speaker: "선우",
        text: "특별한 존재로 끝내기 싫으니까 이러는 거야. 소꿉친구는 편해서 연인이 될 수 없다고 생각해? 난 절대 그렇게 생각 안 해.",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "선우의 뜨거운 손바닥에서 떨림이 고스란히 전해져 와. 나를 쳐다보는 눈동자가 붉게 물들어 있어..."
      },
      {
        speaker: "선우",
        text: "아주 어렸을 때부터, 내 미래엔 무조건 네가 있어야 한다고 정해놨었어. 우정 같은 걸로 내 마음 숨기는 거 이제 안 해. 내 진심을 제발... 제발 받아줘, OO아.",
        character: "sunwoo",
        expression: "sad",
        effect: "shake",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "금방이라도 눈물이 고일 정도로 다급하고 간절한 선우의 고백. 오랜 세월을 깨고 남자로 다가온 소꿉친구의 눈빛 앞에서, 난 어떤 대답을 해야 할까?",
        // 🎨 [선우 최종고백 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with short brown hair, looking incredibly desperate with watery eyes, tightly holding both hands of a girl under a yellow streetlight in a quiet alley at night. Pink cherry blossom petals scattering in the wind, emotional, intense, and romantic atmosphere, masterpiece, high quality --ar 16:9
        illust: "sunwoo_confession_cg",
        background: "sunset",
        choices: [
          {
            text: "“선우야... 나도 내 마음 숨기지 않을게. 이제 소꿉친구 말고, 내 남자친구가 되어줘.” (고백을 받아들인다)",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep14_sunwoo"
          },
          {
            text: "“미안해, 선우야... 넌 내게 너무 소중한 친구야. 오랜 우정을 깨는 건 역시 너무 두려워...” (거절한다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 12: 약속의 벚꽃 정원 (최종 고백 확인)
  // ==========================================
  ep14_doyun: {
    title: "제 14화: 약속의 벚꽃 정원",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "와... 벚꽃이 가장 화려하게 피어난 공원 한구석에 선배랑 같이 서 있으니까 어제까지의 무서운 마음이 싹 사라지는 것 같아. 근데 그 편지, 대체 누가 보낸 거래요?",
        background: "park"
      },
      {
        speaker: "도윤",
        text: "생각보다 싱겁게 밝혀졌어. 내 독주회가 취소됐으면 좋겠다고 생각한 어떤 팬의 사소한 장난이었더라고. 널 다치게 하려던 건 아니니까 이제 안심해도 돼.",
        character: "doyun",
        expression: "sad",
        effect: "fade-in",
        background: "park"
      },
      {
        speaker: "나",
        text: "정말요? 다행이다... 선배가 고생 많으셨어요. 절 지켜주시느라 제대로 쉬지도 못하셨죠?"
      },
      {
        speaker: "도윤",
        text: "아니, 널 지키는 시간 동안 내가 더 행복했는걸. 이리 와 봐, OO아.",
        character: "doyun",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "어...? 선배가 뒤에서 날 꼬옥 안아주셨어. 벚꽃 잎이 흩날리는 사이로 선배의 그윽한 향기가 훅 끼쳐와서 얼굴이 엄청 뜨거워졌어... 어떡하지?",
        background: "park",
        choices: [
          {
            text: "“선배 품... 엄청 따뜻해요. 더 안겨 있고 싶어요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep14_doyun_next"
          },
          {
            text: "“선배, 갑자기 백허그 하시면 심장에 해로워요... 부끄럽단 말이에요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep14_doyun_next"
          }
        ]
      }
    ]
  },

  ep14_doyun_next: {
    background: "park",
    steps: [
      {
        speaker: "도윤",
        text: "부끄러워할 필요 없어. 이제 널 놓아주지 않을 거니까. 내 모든 음악의 시작과 끝은 전부 너야.",
        character: "doyun",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "품 안에서 나지막하게 울리는 선배의 목소리를 들으며, 우리 두 사람의 사랑이 비로소 결실을 맺는 걸 느껴. 과연 우리의 끝은 어떤 멜로디일까?",
        illust: "doyun_happy_cg",
        background: "park",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "doyun",
              threshold: 200,
              success: "ending_doyun_happy",
              fail: "ending_doyun_normal"
            }
          }
        ]
      }
    ]
  },

  ep14_jiho: {
    title: "제 14화: 약속의 벚꽃 정원",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "축제가 다 끝나고 한적해진 옥상 정원... 선배, 아까 쪽지 범인 잡았다는 소식 들었어요! 진짜 학생회에서 찾아낸 거예요?",
        background: "park"
      },
      {
        speaker: "지호",
        text: "어. 신속하게 쪽지 보낸 녀석 CCTV 동선 추적해서 적발했다. 날 혼자 짝사랑하던 타교 학생의 유치한 소동이었어. 별일 아니니까 겁먹지 마라.",
        character: "jiho",
        expression: "sad",
        effect: "fade-in",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배가 직접 발 벗고 나서서 해결해 주신 거잖아요... 귀찮아하시면서도 절 지켜주셔서 정말 감사해요."
      },
      {
        speaker: "지호",
        text: "누가 귀찮대? ...됐고, 손 이리 내놔 봐.",
        character: "지호",
        expression: "blush",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배가 츤데레처럼 툴툴거리면서 내 손을 자기 큰 손으로 꽉 움켜쥐었어. 붉어진 얼굴로 딴청을 피우는데 잡힌 손끝이 엄청 찌릿거려...",
        background: "park",
        choices: [
          {
            text: "“선배가 손을 더 세게 쥐어주니까, 이젠 하나도 안 무섭고 든든해요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep14_jiho_next"
          },
          {
            text: "“에이, 얼굴은 왜 빨개지셨대? 회장 선배님도 부끄러워하시는 중인가요?”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep14_jiho_next"
          }
        ]
      }
    ]
  },

  ep14_jiho_next: {
    background: "park",
    steps: [
      {
        speaker: "지호",
        text: "놀리지 마라. 나 지금 엄청 진지하니까. 이 손, 평생 안 놓칠 자신 있으니까 넌 그냥 나만 믿고 따라오면 돼.",
        character: "jiho",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "벚꽃 잎이 우리 머리 위로 하얗게 눈처럼 휘날리고 있어. 꽉 맞잡은 선배의 단단한 온기 속에서 우리의 봄날은 과연 어떤 엔딩을 맞이하게 될까?",
        illust: "jiho_happy_cg",
        background: "park",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "jiho",
              threshold: 200,
              success: "ending_jiho_happy",
              fail: "ending_jiho_normal"
            }
          }
        ]
      }
    ]
  },

  ep14_sunwoo: {
    title: "제 14화: 약속의 벚꽃 정원",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "선우야! 아까 교무실 갔다 오더니 표정이 엄청 밝아졌네? 설마 그 경고장 쪼가리 범인 알아낸 거야?",
        background: "park"
      },
      {
        speaker: "선우",
        text: "당연하지! 내가 당직 선생님 졸라서 CCTV 카메라 다 분석했거든! 알고 보니 그냥 우리 반 부스 질투해서 낙서처럼 보낸 친구 놈 장난이더라고. 엄청 쫄았는데 별거 아니었어!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "park"
      },
      {
        speaker: "나",
        text: "와... 진짜 다행이다! 네가 밤새 걱정해 주고 같이 찾아봐 준 덕분이야, 선우야. 고마워."
      },
      {
        speaker: "선우",
        text: "고마우면... 눈 감아봐. 빨리!",
        character: "sunwoo",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "선우가 흩날리는 벚꽃 나무 아래에서 아이처럼 환하게 웃더니, 한 발짝 다가와 내 이마에 부드럽고 따뜻한 뽀뽀를 쪽 남겼어...!",
        background: "park",
        choices: [
          {
            text: "(얼굴이 터질 듯 붉어져서) “너, 너 갑자기 뭐 하는 거야... 깜짝 놀랐잖아!”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep14_sunwoo_next"
          },
          {
            text: "(선우의 가슴팍에 고개를 묻으며) “웅... 이제 진짜 소꿉친구 말고 연인 같네.”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep14_sunwoo_next"
          }
        ]
      }
    ]
  },

  ep14_sunwoo_next: {
    background: "park",
    steps: [
      {
        speaker: "선우",
        text: "연인 맞거든! 도장 꾹 찍은 거니까 이제 물르기 없기다? 넌 평생 내 소꿉친구이자 최고의 여자친구야.",
        character: "sunwoo",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "장난기 가득했던 눈빛 속에 오직 나를 향한 사랑만이 진심으로 차올라 있어. 세상 누구보다 소중해진 소꿉친구 서선우와의 미래는 과연 어떤 해피엔딩을 맺게 될까?",
        illust: "sunwoo_happy_cg",
        background: "park",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "sunwoo",
              threshold: 200,
              success: "ending_sunwoo_happy",
              fail: "ending_sunwoo_normal"
            }
          }
        ]
      }
    ]
  },

  ending_jiho_happy: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "지호 선배, 학생회실 테라스 위로 벚꽃 비가 진짜 엄청나게 쏟아져요! 마치 우리를 축하해 주는 무대장치 같지 않아요?",
        background: "park"
      },
      {
        speaker: "지호",
        text: "무대장치는 무슨... 요란스럽기는. 쯧, 그래도 뭐... 나쁘진 않군. 보기 좋네.",
        character: "jiho",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "치... 선배는 이런 순간에도 츤츤거리기만 하구. 저한테 하실 말씀 더 없으세요?"
      },
      {
        speaker: "지호",
        text: "약속했잖아, 꼬맹이. 넌 앞으로 무조건 내 지시만 따르면 돼. 평생 내 옆에서 행복하게 지내라는 내 명령이니까. ...사랑한다, 진짜로.",
        character: "jiho",
        expression: "smile",
        effect: "bounce",
        background: "park"
      },
      {
        speaker: "나",
        text: "선배가 쑥스러운 듯 고개를 훽 돌리면서도 내 허리를 자기 품으로 강하게 끌어당겨 안았어. 쏟아지는 분홍빛 꽃비 속에서 선배의 든든한 약속이 우리의 영원한 인연으로 굳어지는 게 느껴져...",
        // 🎨 [지호 해피엔딩 허그신 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with black hair and a school uniform pulling a girl into a tight, romantic embrace on a school rooftop terrace. A storm of pink cherry blossom petals flying everywhere, intense and passionate romantic lighting, masterpiece, high quality --ar 16:9
        illust: "jiho_happy_end_cg",
        background: "park",
        choices: [
          {
            text: "타이틀로 돌아가기 (한지호 해피 엔딩 획득!)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "jiho_happy",
            nextScene: "title"
          }
        ]
      }
    ]
  },

  ending_jiho_normal: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "선배, 제 가방까지 들어주시고 웬일이세요? 해가 서쪽에서 뜨겠네. 평소엔 잔소리만 퍼부으셨으면서!"
      },
      {
        speaker: "지호",
        text: "내가 언제 잔소리만 했다고 그러냐? ...나도 아직은 내 감정에 솔직해지는 게 서툴러서 퉁명스럽게 굴지도 몰라.",
        character: "jiho",
        expression: "normal",
        background: "park"
      },
      {
        speaker: "나",
        text: "어...? 지호 선배 얼굴이 엄청 붉어진 채로 내 눈을 피하고 있어. 그러더니 내 검지손가락을 자기 손으로 조심스럽게 꽉 마주 잡았어."
      },
      {
        speaker: "지호",
        text: "그래도... 이 손만큼은 절대 안 놓을 테니까. 꼬맹이 너도 내 옆자리 비워두지 마라.",
        character: "jiho",
        expression: "normal",
        background: "park"
      },
      {
        speaker: "나",
        text: "서툴지만 한 발짝씩 서로를 향해 조심스럽게 나아가는 우리 두 사람의 로맨스. 이 따뜻한 온기가 참 좋아.",
        // 🎨 [지호 노멀엔딩 손가락 잡기 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with black hair, blushing heavily, awkwardly but gently linking his finger with a girl's finger. School path at dusk with cherry blossom trees, sweet and hesitant atmosphere, high quality --ar 16:9
        illust: "jiho_normal_end_cg",
        background: "park",
        choices: [
          {
            text: "타이틀로 돌아가기 (한지호 노멀 엔딩 획득!)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "jiho_normal",
            nextScene: "title"
          }
        ]
      }
    ]
  },

  ending_sunwoo_happy: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "선우야! 벚꽃 나무 아래서 보니까 너 진짜 멋있어 보인다? 맨날 장난만 치던 꼬맹이 서선우 맞아?",
        background: "park"
      },
      {
        speaker: "선우",
        text: "하! 당연하지, 이 몸이 누구신데! 야, 내 모든 어제랑 오늘, 그리고 다가올 내일은 전부 다 너를 위해 존재하는 거야. 몰랐어?",
        character: "sunwoo",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "치... 멘트 닭살 돋거든? 그래도 감동이긴 하네. 진짜 나 행복하게 해줄 거야?"
      },
      {
        speaker: "선우",
        text: "당연하지! 진짜 온 세상에서 네가 제일 행복한 여자애로 만들어 줄 테니까 나만 믿어!",
        character: "sunwoo",
        expression: "smile",
        effect: "bounce",
        background: "park"
      },
      {
        speaker: "나",
        text: "선우가 세상을 다 얻은 표정으로 소리를 지르더니, 내 허리를 감싸 쥐고 공중으로 번쩍 높이 안아 올렸어! 흩날리는 벚꽃 눈 속에서 빙글빙글 돌며, 우린 가장 행복한 약속의 입맞춤을 나누었어.",
        // 🎨 [선우 해피엔딩 안아올리기 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A cheerful handsome high school boy with brown hair lifting a girl up high in the air, spinning around under a massive blooming cherry blossom tree. Bright sunny daylight, beautiful cherry blossom blizzard, ecstatic and joyful romantic climax, masterpiece, high quality --ar 16:9
        illust: "sunwoo_happy_end_cg",
        background: "park",
        choices: [
          {
            text: "타이틀로 돌아가기 (서선우 해피 엔딩 획득!)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "sunwoo_happy",
            nextScene: "title"
          }
        ]
      }
    ]
  },

  ending_sunwoo_normal: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: "나",
        text: "선우야, 우리 이렇게 맨날 붙어 다녀도 괜찮은 걸까? 가끔은 널 친구가 아니라 남자로 의식하게 돼서 묘해."
      },
      {
        speaker: "선우",
        text: "의식하라고 대놓고 꼬시는 중이거든? 조급하게 굴진 않을게. 네가 날 소꿉친구 말고 남자로 진지하게 완전히 돌아볼 때까지 곁에서 계속 사랑을 속삭일 거야.",
        character: "sunwoo",
        expression: "normal",
        background: "park"
      },
      {
        speaker: "나",
        text: "평소의 장난꾸러기 같은 미소 뒤로, 왠지 깊고 아련한 진심을 장착한 소꿉친구 선우의 눈빛이 낯설면서도 설레."
      },
      {
        speaker: "선우",
        text: "자, 벚꽃 길 예쁘니까 같이 걷자. 얼른 옆으로 딱 붙어!",
        character: "sunwoo",
        expression: "smile",
        background: "park"
      },
      {
        speaker: "나",
        text: "선우가 살그머니 내 어깨 위로 듬직하게 어깨동무를 해왔어. 우정과 사랑 그 너머에서, 우리 두 사람만의 새로운 템포가 시작되는 게 느껴져.",
        // 🎨 [선우 노멀엔딩 어깨동무 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A handsome high school boy with brown hair putting his arm around a girl's shoulder (shoulder-friendship hug) while walking together on a beautiful cherry blossom path at sunset. Warm golden hour lighting, sweet and refreshing youth romance atmosphere, high quality --ar 16:9
        illust: "sunwoo_normal_end_cg",
        background: "park",
        choices: [
          {
            text: "타이틀로 돌아가기 (서선우 노멀 엔딩 획득!)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "sunwoo_normal",
            nextScene: "title"
          }
        ]
      }
    ]
  },

  ep15_solo: {
    title: "제 15화: 우리가 그린 내일",
    background: "sunset",
    steps: [
      {
        speaker: "나",
        text: "노을빛이 지는 운동장을 내려다보니까 마음이 참 차분해지네... 지호 선배도, 선우도, 도윤 선배도 나한테 전부 다 너무나 고맙고 빛나는 사람들이야.",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "하지만 지금의 난 누군가의 연인이 되기보다는, 내 소중한 꿈과 미래를 향해 스스로 나아가는 게 더 중요해. 우리들의 풋풋한 우정도 이대로 간직하고 싶고.",
        background: "sunset"
      },
      {
        speaker: "나",
        text: "불러오는 봄바람을 맞으면서 내 찬란한 미래를 향해 날개를 활짝 펼칠 거야! 내 삶의 진짜 주인공은 바로 나 자신이니까. 우린 영원히 최고의 친구들일 거야!",
        // 🎨 [솔로엔딩 주인공 독백 CG 생성 프롬프트]
        // /imagine prompt: Anime style romance game CG. A beautiful high school girl standing alone on a school rooftop looking at a vibrant orange and purple sunset. Her hair and school skirt gently fluttering in the spring wind, inspiring, hopeful, and independent atmosphere, artistic lighting, masterpiece, high quality --ar 16:9
        illust: "solo_end_cg",
        background: "sunset",
        choices: [
          {
            text: "타이틀로 돌아가기 (솔로 엔딩 획득!)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "solo",
            nextScene: "title"
          }
        ]
      }
    ]
  }
};

