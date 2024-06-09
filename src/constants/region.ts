export const REGION = {
  seoul: "서울",
  gyeonggi: "경기",
  busan: "부산",
  incheon: "인천",
  daegu: "대구",
  ulsan: "울산",
  gwangju: "광주",
  daejeon: "대전",
  gyeongbuk: "경상북도",
  gyeongnam: "경상남도",
  jeonbuk: "전라북도",
  jeonnam: "전라남도",
  chungbuk: "충청북도",
  chungnam: "충청남도",
  gangwon: "강원도",
  jeju: "제주도",
  sejong: "세종",
} as const;

export type Region = keyof typeof REGION;
