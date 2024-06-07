import Breadcrumb from "@/components/common/Breadcrumb";

interface Props {
  location: string;
  category: { id: number; name: string };
}

export default function ClassDetailBreadcrumb({ location, category }: Props) {
  const list = [
    { name: "홈", href: { pathname: "/" } },
    { name: location, href: { pathname: "/", query: { location } } },
    {
      name: category.name,
      href: { pathname: "/", query: { category: category.id } },
    },
  ];

  return <Breadcrumb list={list} className="self-start my-2" />;
}
