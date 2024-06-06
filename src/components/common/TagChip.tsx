import Link from "next/link";

interface Props {
  tag: { tagId: number; name: string };
}

export default function TagChip({ tag }: Props) {
  return (
    <Link
      href={{
        pathname: "/",
        query: { keyword: tag.name },
      }}
    >
      <span
        key={tag.tagId}
        className="mr-2 py-[5px] px-[15px] rounded-full font-bold text-sm text-black bg-primary-blur"
      >{`# ${tag.name}`}</span>
    </Link>
  );
}
