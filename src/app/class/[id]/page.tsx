import ClassPictureCarousel, {
  type ClassImage,
} from "@/components/classDetail/ClassPictureCarousel";

const mockImages: ClassImage[] = [
  {
    id: 39399,
    name: "image-1",
    url: "https://source.unsplash.com/1000x600/?travel",
  },
  {
    id: 392399,
    name: "image-2",
    url: "https://source.unsplash.com/600x400/?food",
  },
  {
    id: 3923899,
    name: "image-3",
    url: "https://source.unsplash.com/600x800/?work",
  },
];

export default function ClassDetailPage() {
  return (
    <>
      <ClassPictureCarousel images={mockImages} />
    </>
  );
}
