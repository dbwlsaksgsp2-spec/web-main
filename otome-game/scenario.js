export const scenario = {
  // ==========================================
  // EPISODE 1: 시간을 넘어서 - 만남
  // ==========================================
  ep1: {
    title: "제 1화: 시간을 넘어서 - 만남",
    background: "classroom",
    steps: [
      {
        speaker: null,
        text: "흐드러지게 핀 벚꽃 잎이 창가로 불어오는 봄날의 방과 후 교실.",
        background: "classroom",
        character: null
      },
      {
        speaker: "나",
        text: "하아... 드디어 과제 다 끝났다! 벌써 시간이 이렇게 됐네. 경비 아저씨 순찰 돌 시간이다.",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "여태 안 가고 뭐 하고 있는 거지, 후배?",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "문단속 시간 지났다. 학교에 늦게까지 남아있는 건 규정 위반이야. 얼른 챙겨서 나와.",
        character: "jiho",
        expression: "normal",
        background: "classroom"
      },
      {
        speaker: null,
        text: "언제나처럼 냉정한 학생회장 한지호 선배. 하지만 그의 손에는 나를 위해 챙겨온 따뜻한 캔커피가 들려 있었다.",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "“선배도 아직 집에 안 가셨네요? 챙겨주셔서 감사해요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep1_after_jiho"
          },
          {
            text: "“앗, 죄송해요! 바로 나갈게요!”",
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
        speaker: null,
        text: "교실 불을 끄고 지호 선배와 함께 교문 앞까지 걸어 나왔다. 교문 앞에는 낯익은 소꿉친구 서선우가 기다리고 있었다.",
        background: "sunset",
        character: null
      },
      {
        speaker: "선우",
        text: "어! 드디어 나오네! 한참 기다렸잖아, OO아!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "어두운 길 혼자 걷게 할 순 없지! 소꿉친구 찬스 모르냐? 자, 얼른 가자!",
        character: "sunwoo",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: null,
        text: "그때, 교문 기둥 너머 음악실 계단에서 악보 뭉치를 든 신비로운 선배가 걸어 내려왔다. 은빛 머리칼이 노을에 빛나는 그, 강도윤 선배다.",
        character: "sunwoo",
        expression: "normal",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "아... 바람이 많이 부네. 악보가 날아가 버렸어.",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "바람에 흩날리는 악보들. 어떻게 해야 할까?",
        character: "doyun",
        expression: "normal",
        background: "sunset",
        choices: [
          {
            text: "(도윤 선배의 악보 줍는 것을 적극적으로 돕는다)",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep2"
          },
          {
            text: "(선우의 팔을 이끌며 함께 같이 주워주자고 한다)",
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
        speaker: null,
        text: "주운 악보를 건네자, 도윤 선배는 엷은 미소와 함께 고개를 숙였다.",
        background: "sunset",
        character: "doyun",
        expression: "smile"
      },
      {
        speaker: "도윤",
        text: "고마워. 귀여운 후배님들 덕분에 악보를 잃어버리지 않았네. 난 강도윤이라고 해.",
        character: "doyun",
        expression: "smile",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "앗... 음악부의 강도윤 선배님이시군요. 안녕하세요! 저는 서선우입니다.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "지호",
        text: "여기서 노닥거리지 말고 다들 얼른 하교하도록. 문 잠그고 순찰 마무리를 지어야 하니까.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "학생회장 지호 선배, 소꿉친구 선우, 그리고 신비로운 음악 선배 도윤. 세 소년의 시선이 동시에 나에게 와 닿았다.",
        character: null,
        background: "sunset",
        choices: [
          {
            text: "지호 선배에게 순찰 조심히 돌라고 격려를 건넨다.",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep3"
          },
          {
            text: "선우의 옷자락을 잡으며 얼른 가자고 웃어 보이며 애교를 부린다.",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep3"
          },
          {
            text: "도윤 선배에게 조심히 들어가시라고 다정하게 인사한다.",
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
    background: "classroom",
    steps: [
      {
        speaker: null,
        text: "며칠 뒤 점심시간, 특별동 복도를 지나가는데 아련하고 신비로운 피아노 선율이 흘러나왔다.",
        background: "classroom",
        character: null
      },
      {
        speaker: "나",
        text: "(이 아름다운 멜로디는 뭐지...? 자석에 이끌리듯 음악실 문을 살짝 열었다.)",
        background: "classroom"
      },
      {
        speaker: null,
        text: "은빛 창가 아래 피아노 건반 위를 유려하게 움직이는 도윤 선배의 손길.",
        background: "classroom",
        character: "doyun",
        expression: "normal",
        effect: "fade-in"
      },
      {
        speaker: "도윤",
        text: "어라, 후배님? 문가에서 엿듣는 건 나쁜 버릇인데.",
        character: "doyun",
        expression: "smile",
        background: "classroom"
      },
      {
        speaker: null,
        text: "그는 연주를 멈추고 나를 보며 부드럽게 웃었다. 얼굴이 화끈 달아올랐다.",
        character: "doyun",
        expression: "smile",
        background: "classroom",
        choices: [
          {
            text: "“선율이 너무 아름다워서 나도 모르게... 실례했어요!”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 15 },
            nextScene: "ep4"
          },
          {
            text: "“무슨 곡인지 궁금해서요. 선배님이 작곡하신 건가요?”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
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
    background: "classroom",
    steps: [
      {
        speaker: null,
        text: "방과 후 도서관. 도서 정리 봉사활동을 신청한 나는 책장에 무거운 백과사전을 꽂으려 애쓰고 있었다.",
        background: "classroom",
        character: null
      },
      {
        speaker: "나",
        text: "으 영차... 조금만 더... 앗! 균형이...!",
        background: "classroom"
      },
      {
        speaker: null,
        text: "흔들리는 사다리, 그리고 쏟아지는 책들! 질끈 눈을 감은 내 몸을 누군가 뒤에서 감싸 안으며 받쳐주었다.",
        background: "classroom",
        effect: "shake"
      },
      {
        speaker: "지호",
        text: "쯧, 조심성 없기는. 다칠 뻔했잖아.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: null,
        text: "눈을 뜨자 지호 선배의 진지하고 깊은 눈동자가 코앞에 있었다. 그의 단단한 팔이 나를 단단히 감싸 쥐고 있었다.",
        character: "jiho",
        expression: "normal",
        background: "classroom",
        choices: [
          {
            text: "(부끄러워하며) “구해주셔서 감사합니다... 깜짝 놀랐어요.”",
            affinity: { jiho: 15, sunwoo: 0, doyun: 0 },
            nextScene: "ep5"
          },
          {
            text: "“선배가 제 뒤에 계실 줄 몰랐어요. 깜짝 놀라셨죠?”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
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
        speaker: null,
        text: "도서관 활동을 마치고 나오니, 교문 뒤 가로등 아래 선우가 뚱한 표정으로 캔음료를 만지작거리고 있었다.",
        background: "sunset",
        character: null
      },
      {
        speaker: "선우",
        text: "야, OO아! 너 요즘 학생회장 선배랑 음악부 선배랑 너무 자주 붙어 다니는 거 아냐? 나 서운하단 말이야.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "나보다 그 선배들이랑 노는 게 더 재밌어? 솔직히 말해봐!",
        character: "sunwoo",
        expression: "normal",
        background: "sunset",
        choices: [
          {
            text: "“바보야, 나한테 1순위는 언제나 소꿉친구인 너뿐이지!”",
            affinity: { jiho: 0, sunwoo: 15, doyun: 0 },
            nextScene: "ep6"
          },
          {
            text: "“너 지금 질투하는 거야? 엄청 귀엽네~”",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
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
        speaker: null,
        text: "갑자기 하늘이 어두워지더니, 소나기가 세차게 퍼붓기 시작했다. 우산이 없던 나는 현관에서 발만 동동 구르고 있었다.",
        background: "sunset",
        character: null
      },
      {
        speaker: "나",
        text: "아... 하필이면 소나기라니... 집에 어떻게 가지?",
        background: "sunset"
      },
      {
        speaker: null,
        text: "그때, 서로 다른 방향에서 세 소년이 각각 우산을 들고 나에게 뛰어왔다.",
        background: "sunset",
        effect: "flash"
      },
      {
        speaker: "지호",
        text: "이거 써라. 마침 학생회실에 여분이 있었다.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "OO아! 내 우산 같이 쓰고 가자! 내가 데려다줄게!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "나랑 빗소리를 들으며 클래식 음악 얘기하면서 걸어갈까, 후배님?",
        character: "doyun",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "세 개의 우산. 나는 누구의 손을 잡아야 할까?",
        character: null,
        background: "sunset",
        choices: [
          {
            text: "지호 선배의 츤데레 같은 우산을 고른다.",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep7"
          },
          {
            text: "선우의 따뜻한 파란색 우산 아래로 쏙 들어간다.",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep7"
          },
          {
            text: "도윤 선배의 고급스러운 검은 장우산을 같이 쓴다.",
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
        speaker: null,
        text: "다음 날 아침, 신발장을 열자 핑크색 편지봉투가 떨어졌다. 러브레터인 줄 알았으나...",
        background: "classroom",
        character: null
      },
      {
        speaker: "나",
        text: "어...? [주의: 학교의 인기인들과 너무 가까이 지내지 마. 다칠지도 몰라.] 이게 뭐야...?",
        background: "classroom"
      },
      {
        speaker: null,
        text: "글자를 잘라 붙인 섬뜩한 경고문. 가슴이 철렁 내려앉으며 두려움이 엄습해 왔다.",
        background: "classroom"
      },
      {
        speaker: null,
        text: "그때, 내 어두워진 얼굴을 본 세 남주들이 다급히 다가왔다.",
        background: "classroom",
        choices: [
          {
            text: "지호 선배에게 숨기지 않고 쪽지를 보여준다.",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep8"
          },
          {
            text: "소꿉친구 선우를 잡고 떨리는 목소리로 속삭인다.",
            affinity: { jiho: 0, sunwoo: 10, doyun: 0 },
            nextScene: "ep8"
          },
          {
            text: "차분하고 어른스러운 도윤 선배에게 의견을 구한다.",
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
    background: "sunset",
    steps: [
      {
        speaker: null,
        text: "쪽지를 본 세 남주인공들의 표정이 무섭도록 진지하게 굳어졌다.",
        background: "sunset",
        character: null
      },
      {
        speaker: "지호",
        text: "학생회 차원에서 범인을 색출하겠다. 넌 당분간 혼자 다니지 마.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "누가 이런 짓을... 내가 등하굣길 매일 지켜줄 테니까 걱정하지 마, OO아!",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "도윤",
        text: "나쁜 장난이네. 널 다치게 내버려 두지 않을 거야. 불안하면 언제든 음악실로 와.",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "세 남주들의 철저한 보호 모드가 켜졌다. 그들의 든든한 태도에 마음이 한결 놓였다.",
        character: null,
        background: "sunset",
        choices: [
          {
            text: "“고마워요, 여러분... 정말 든든해요.”",
            affinity: { jiho: 5, sunwoo: 5, doyun: 5 },
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
        speaker: null,
        text: "학교의 봄꽃 대축제가 코앞으로 다가왔다. 축제 전날, 학생들은 축제 준비로 매우 분주했다.",
        background: "classroom",
        character: null
      },
      {
        speaker: null,
        text: "이때, 세 명의 소년이 각자의 구역에서 나에게 도움이나 함께 가자고 요청해 왔다.",
        background: "classroom"
      },
      {
        speaker: null,
        text: "이번 축제 기간 동안, 가장 깊은 시간을 함께 보낼 상대는 누구일까? (이 선택이 운명의 분기를 결정합니다.)",
        background: "classroom",
        choices: [
          {
            text: "학생회 사무를 도우며 지호 선배 곁에 남는다. (지호 루트)",
            affinity: { jiho: 25, sunwoo: 0, doyun: 0 },
            nextScene: "ep10_jiho"
          },
          {
            text: "선우와 함께 우리 반 축제 부스 홍보를 돕는다. (선우 루트)",
            affinity: { jiho: 0, sunwoo: 25, doyun: 0 },
            nextScene: "ep10_sunwoo"
          },
          {
            text: "음악관 공연 준비를 도우며 도윤 선배와 대화한다. (도윤 루트)",
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
        speaker: null,
        text: "축제 저녁, 학생회실 테라스.",
        background: "sunset",
        character: null
      },
      {
        speaker: "지호",
        text: "일이 드디어 끝났군. 시끄러운 아래로 내려갈 필요 없이, 여기서 밤하늘 불꽃을 보자.",
        character: "jiho",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "펑! 펑! 밤하늘을 수놓는 불꽃놀이. 지호 선배가 조용히 나의 어깨에 손을 올렸다.",
        character: "jiho",
        expression: "smile",
        background: "sunset",
        choices: [
          {
            text: "선배의 손을 슬며시 맞잡는다.",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep12"
          },
          {
            text: "“불꽃이 참 예쁘네요, 선배.”",
            affinity: { jiho: 10, sunwoo: 0, doyun: 0 },
            nextScene: "ep12"
          }
        ]
      }
    ]
  },

  ep10_sunwoo: {
    title: "제 10화: 불꽃놀이 축제 - 선우",
    background: "sunset",
    steps: [
      {
        speaker: null,
        text: "인파가 가득한 축제의 꽃길.",
        background: "sunset",
        character: null
      },
      {
        speaker: "선우",
        text: "와! 사람이 너무 많아서 길 잃겠다. 야, 내 손 꽉 잡아. 절대 놓치면 안 돼!",
        character: "sunwoo",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "선우는 나의 작은 손가락 사이로 자신의 손가락을 얽어 깍지를 꽉 꼈다. 심장이 두방망이질 쳤다.",
        character: "sunwoo",
        expression: "smile",
        background: "sunset",
        choices: [
          {
            text: "“웅, 절대 안 놓을게.” 손에 힘을 준다.",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep13"
          },
          {
            text: "“너 오늘 왜 이렇게 어른스러워?”",
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
        speaker: null,
        text: "고즈넉한 음악실 창가.",
        background: "sunset",
        character: null
      },
      {
        speaker: "도윤",
        text: "밤하늘의 불꽃도 예쁘지만, 피아노 건반 위로 떨어지는 불꽃의 빛깔이 더 고운 것 같아.",
        character: "doyun",
        expression: "smile",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: null,
        text: "그는 피아노 벤치 옆자리를 톡톡 치며 내게 앉으라고 미소 지었다.",
        character: "doyun",
        expression: "smile",
        background: "sunset",
        choices: [
          {
            text: "선배의 바로 옆자리에 바짝 밀착해 앉는다.",
            affinity: { jiho: 0, sunwoo: 0, doyun: 20 },
            nextScene: "ep11"
          },
          {
            text: "“선배님의 연주를 들려주세요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 10 },
            nextScene: "ep11"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 11: 숨길 수 없는 진심 (도윤 루트)
  // ==========================================
  ep11: {
    title: "제 11화: 숨길 수 없는 진심",
    background: "park",
    steps: [
      {
        speaker: null,
        text: "밤의 축제가 가라앉고 한적해진 공원의 벤치.",
        background: "park",
        character: null
      },
      {
        speaker: "도윤",
        text: "처음 널 보았을 때부터, 내 마음의 악보엔 너라는 선율만 가득 적히기 시작했어.",
        character: "doyun",
        expression: "normal",
        effect: "fade-in",
        background: "park"
      },
      {
        speaker: "도윤",
        text: "후배님... 아니, OO아. 신비주의 선배 말고, 너만의 남자가 되고 싶은데... 허락해 줄래?",
        character: "doyun",
        expression: "smile",
        effect: "shake",
        background: "park"
      },
      {
        speaker: null,
        text: "도윤 선배의 진심이 실린 달콤한 고백. 나의 마음은...",
        character: "doyun",
        expression: "smile",
        background: "park",
        choices: [
          {
            text: "“저도 도윤 선배와 나만의 연주를 계속하고 싶어요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 20 },
            nextScene: "ep14_doyun"
          },
          {
            text: "“죄송해요 선배... 소중한 인연이지만 마음을 다 받아주긴 힘들 것 같아요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 12: 차가움 뒤의 온기 (지호 루트)
  // ==========================================
  ep12: {
    title: "제 12화: 차가움 뒤의 온기",
    background: "classroom",
    steps: [
      {
        speaker: null,
        text: "아무도 없는 학생회실. 지호 선배는 책상 옆에 기대 서 있었다.",
        background: "classroom",
        character: null
      },
      {
        speaker: "지호",
        text: "너랑 있을 때만 내 심장이 멋대로 빠르게 뛴다. 이런 감정, 나조차 주체할 수 없어.",
        character: "jiho",
        expression: "normal",
        effect: "fade-in",
        background: "classroom"
      },
      {
        speaker: "지호",
        text: "바보같이 딴청 피우지 마라. 널 내 곁에 묶어두고 평생 지켜주고 싶으니까.",
        character: "jiho",
        expression: "smile",
        effect: "shake",
        background: "classroom"
      },
      {
        speaker: null,
        text: "그의 평소답지 않은 직설적인 고백. 나의 대답은...",
        character: "jiho",
        expression: "smile",
        background: "classroom",
        choices: [
          {
            text: "“선배의 츤데레 곁을 절대 떠나지 않을게요.”",
            affinity: { jiho: 20, sunwoo: 0, doyun: 0 },
            nextScene: "ep14_jiho"
          },
          {
            text: "“선배... 정말 감사하지만, 제 마음의 주인이 아닌 것 같아요.”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 13: 항상 너를 지키는 (선우 루트)
  // ==========================================
  ep13: {
    title: "제 13화: 항상 너를 지키는",
    background: "sunset",
    steps: [
      {
        speaker: null,
        text: "골목길 가로등 밑, 벚꽃이 흩날리는 어스름한 저녁길.",
        background: "sunset",
        character: null
      },
      {
        speaker: "선우",
        text: "소꿉친구는 편해서 연인이 될 수 없다고 생각해? 난 그렇게 생각 안 해.",
        character: "sunwoo",
        expression: "normal",
        effect: "fade-in",
        background: "sunset"
      },
      {
        speaker: "선우",
        text: "아주 어렸을 때부터 내 미래의 아내는 무조건 너라고 정해놨었어. 내 진심을 제발 받아줘!",
        character: "sunwoo",
        expression: "smile",
        effect: "shake",
        background: "sunset"
      },
      {
        speaker: null,
        text: "눈물까지 고일 정도로 다급하고 간절한 선우의 고백. 나의 대답은...",
        character: "sunwoo",
        expression: "smile",
        background: "sunset",
        choices: [
          {
            text: "“선우야... 이제 소꿉친구 말고, 나의 남자친구가 되어줘.”",
            affinity: { jiho: 0, sunwoo: 20, doyun: 0 },
            nextScene: "ep14_sunwoo"
          },
          {
            text: "“미안해, 선우야. 소중한 우정을 깨는 건 두려워...”",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            nextScene: "ep15_solo"
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 14: 약속의 벚꽃 정원 (최종 고백 확인)
  // ==========================================
  ep14_doyun: {
    title: "제 14화: 약속의 벚꽃 정원",
    background: "park",
    steps: [
      {
        speaker: null,
        text: "다음 날, 은밀하게 날아온 편지의 발신인이 밝혀졌다. 실은 도윤의 독주회 취소를 바란 사소한 질투 어린 팬의 장난이었다.",
        background: "park",
        character: null
      },
      {
        speaker: null,
        text: "일이 잘 마무리되자, 도윤 선배는 벚꽃이 가장 화려하게 피어난 공원 한구석에서 나를 꼬옥 안아주었다.",
        background: "park",
        character: "doyun",
        expression: "smile"
      },
      {
        speaker: null,
        text: "그의 품에서 전해져 오는 그윽한 향기. 두 사람의 사랑이 결실을 맺을 시간이다.",
        background: "park",
        character: "doyun",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "doyun",
              threshold: 80,
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
        speaker: null,
        text: "학생회에서 신속하게 장난 편지 발송자를 적발했다. 범인은 지호 선배를 혼자 짝사랑하던 타교 학생이었다.",
        background: "park",
        character: null
      },
      {
        speaker: null,
        text: "모든 소동이 종료된 후, 선배는 벚꽃 잎이 휘날리는 옥상 아래 정원으로 나를 데려가 수줍게 손을 잡았다.",
        background: "park",
        character: "jiho",
        expression: "smile"
      },
      {
        speaker: null,
        text: "츤데레처럼 얼굴이 붉어진 선배가 내 손을 더 세게 쥔다. 두 사람의 봄날은 어떨까?",
        background: "park",
        character: "jiho",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "jiho",
              threshold: 80,
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
        speaker: null,
        text: "선우와 함께 경비함 카메라를 분석한 결과, 질투 섞인 친구의 사소한 낙서 같은 장난으로 판명되었다.",
        background: "park",
        character: null
      },
      {
        speaker: null,
        text: "장난이 풀리며 안도한 선우는 흩날리는 벚꽃 나무 아래에서 아이처럼 크게 웃으며 나의 이마에 뽀뽀를 남겼다.",
        background: "park",
        character: "sunwoo",
        expression: "smile"
      },
      {
        speaker: null,
        text: "세상 누구보다 소중해진 소꿉친구와의 미래는 어떻게 꽃피게 될까?",
        background: "park",
        character: "sunwoo",
        choices: [
          {
            text: "운명의 결말 확인하기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            branch: {
              condition: "sunwoo",
              threshold: 80,
              success: "ending_sunwoo_happy",
              fail: "ending_sunwoo_normal"
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // EPISODE 15: 우리가 그린 내일 (엔딩 4종)
  // ==========================================
  ending_doyun_happy: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: null,
        text: "[강도윤 해피 엔딩: 평생의 앙상블]",
        background: "park",
        character: "doyun",
        expression: "smile"
      },
      {
        speaker: "도윤",
        text: "나의 완벽한 멜로디는 바로 너였어. 매일 네 귀에 어울리는 사랑 노래를 들려줄게. 사랑해, OO아.",
        background: "park",
        character: "doyun",
        expression: "smile",
        effect: "bounce"
      },
      {
        speaker: null,
        text: "따스한 벚꽃 잎 속에서 도윤 선배와 조심스러운 입맞춤을 나누었다. 영원한 선율이 우리를 감싸 안는다. (강도윤 해피 엔딩 획득!)",
        background: "park",
        character: "doyun",
        choices: [
          {
            text: "타이틀로 돌아가기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "doyun_happy",
            nextScene: "title"
          }
        ]
      }
    ]
  },

  ending_doyun_normal: {
    title: "제 15화: 우리가 그린 내일",
    background: "park",
    steps: [
      {
        speaker: null,
        text: "[강도윤 노멀 엔딩: 잔잔한 템포로]",
        background: "park",
        character: "doyun",
        expression: "normal"
      },
      {
        speaker: "도윤",
        text: "아직 서로 알아가는 과정이지만, 천천히 아름다운 화음을 쌓아가자. 난 언제나 여기 있을게.",
        background: "park",
        character: "doyun",
        expression: "normal"
      },
      {
        speaker: null,
        text: "도윤 선배는 온화한 미소와 함께 내 손등을 살짝 쓰다듬었다. 천천히 무르익어 갈 두 사람의 템포가 시작된다. (강도윤 노멀 엔딩 획득!)",
        background: "park",
        character: "doyun",
        choices: [
          {
            text: "타이틀로 돌아가기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "doyun_normal",
            nextScene: "title"
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
        speaker: null,
        text: "[한지호 해피 엔딩: 너의 봄이 되어줄게]",
        background: "park",
        character: "jiho",
        expression: "smile"
      },
      {
        speaker: "지호",
        text: "약속했잖아. 넌 내 지시만 따르면 돼. 평생 내 곁에서 행복해지라는 내 지시를... 사랑한다.",
        background: "park",
        character: "jiho",
        expression: "smile",
        effect: "bounce"
      },
      {
        speaker: null,
        text: "학생회실 테라스 위로 쏟아지는 벚꽃 비 아래, 지호 선배의 진실한 약속이 우리의 영원한 인연으로 굳어졌다. (한지호 해피 엔딩 획득!)",
        background: "park",
        character: "jiho",
        choices: [
          {
            text: "타이틀로 돌아가기",
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
        speaker: null,
        text: "[한지호 노멀 엔딩: 서투른 발걸음]",
        background: "park",
        character: "jiho",
        expression: "normal"
      },
      {
        speaker: "지호",
        text: "아직 솔직해지는 게 서툴러서 퉁명스럽게 굴지도 몰라. 그래도... 네 손은 절대 놓지 않을 테니까.",
        background: "park",
        character: "jiho",
        expression: "normal"
      },
      {
        speaker: null,
        text: "지호 선배는 얼굴을 붉히면서 내 검지손가락을 조심스럽게 마주 잡았다. 서툴지만 한 발짝 나아가는 로맨스. (한지호 노멀 엔딩 획득!)",
        background: "park",
        character: "jiho",
        choices: [
          {
            text: "타이틀로 돌아가기",
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
        speaker: null,
        text: "[서선우 해피 엔딩: 봄바람의 약속]",
        background: "park",
        character: "sunwoo",
        expression: "smile"
      },
      {
        speaker: "선우",
        text: "내 모든 어제와 오늘, 그리고 내일은 다 너를 위해 존재해. 진짜 세상에서 제일 행복하게 만들어 줄게!",
        background: "park",
        character: "sunwoo",
        expression: "smile",
        effect: "bounce"
      },
      {
        speaker: null,
        text: "눈이 부시게 화사한 벚꽃나무 아래에서 선우는 세상을 다 얻은 표정으로 나를 높이 안아 올리며 행복의 입맞춤을 나누었다. (서선우 해피 엔딩 획득!)",
        background: "park",
        character: "sunwoo",
        choices: [
          {
            text: "타이틀로 돌아가기",
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
        speaker: null,
        text: "[서선우 노멀 엔딩: 우정과 사랑 그 너머]",
        background: "park",
        character: "sunwoo",
        expression: "normal"
      },
      {
        speaker: "선우",
        text: "조급하게 굴지 않을게. 네가 날 남자로 진지하게 돌아볼 때까지 곁에서 계속 사랑을 속삭일 거야.",
        background: "park",
        character: "sunwoo",
        expression: "normal"
      },
      {
        speaker: null,
        text: "장난꾸러기 같은 표정 뒤로 설레는 깊이를 장착한 소꿉친구 선우. 벚꽃 길을 걸으며 살그머니 어깨동무를 해온다. (서선우 노멀 엔딩 획득!)",
        background: "park",
        character: "sunwoo",
        choices: [
          {
            text: "타이틀로 돌아가기",
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
        speaker: null,
        text: "[솔로 엔딩: 내 삶의 주인공은 나야!]",
        background: "sunset",
        character: null
      },
      {
        speaker: "나",
        text: "셋 다 너무 소중하고 멋진 친구들이지만, 지금은 누군가의 연인이 되기보단 내 미래와 우정을 더 소중히 간직하고 싶어.",
        background: "sunset"
      },
      {
        speaker: null,
        text: "나는 봄바람과 함께 찬란한 미래를 향해 날개를 활짝 편다. 우정은 영원히 지속될 테니까! (솔로 엔딩 획득!)",
        background: "sunset",
        choices: [
          {
            text: "타이틀로 돌아가기",
            affinity: { jiho: 0, sunwoo: 0, doyun: 0 },
            endingUnlocked: "solo",
            nextScene: "title"
          }
        ]
      }
    ]
  }
};
