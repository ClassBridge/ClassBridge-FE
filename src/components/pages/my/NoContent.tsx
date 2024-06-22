interface Props {
  name?: string;
  text?: string;
}

export default function NoContent({ name, text }: Props) {
  return (
    <section className="flex-1 pt-20 text-center font-medium text-base text-black">
      {text ? text : `${name} 없습니다.`}
    </section>
  );
}
