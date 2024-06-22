import TabBar from "@/components/common/TabBar";
import NoContent from "@/components/pages/my/NoContent";

export default function ClassPage() {
  const tabs = {
    values: ["전체", "수강 완료", "예약 확정", "예약 취소"],
    contents: ["", "", "", ""],
  };

  return (
    <>
      {tabs ? (
        <section className="flex-1 flex justify-center py-6">
          <TabBar tabs={tabs} />
        </section>
      ) : (
        <NoContent name="예약한 클래스가" />
      )}
    </>
  );
}
