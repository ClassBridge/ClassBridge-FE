import Breadcrumb from "@/components/common/Breadcrumb";

interface Props {
  location: string;
  category: string;
}

export default function ClassDetailBreadcrumb({ location, category }: Props) {
  const list = [
    { name: "홈", href: { pathname: "/" } },
    { name: location, href: { pathname: "/", query: { location } } },
    {
      name: category,
      href: { pathname: "/", query: { category: category } },
    },
  ];

  return <Breadcrumb list={list} className="self-start my-2" />;
}
