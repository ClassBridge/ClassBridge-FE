import Button from "./Button";

export default function Alert() {
  return (
    <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col gap-4 p-4 rounded border bg-white">
      <p
        dangerouslySetInnerHTML={{
          __html:
            "이 창은 도움말, 안내 등의 메세지를 보여줍니다.<br />닫기 버튼을 눌러 닫을 수 있습니다.",
        }}
      />
      <Button text="닫기" type="sm" primary className="self-end w-10" />
    </div>
  );
}
