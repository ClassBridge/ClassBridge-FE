import { useRecoilState } from "recoil";
import { searchState } from "@/state/search";
import { CATEGORY } from "@/constants/category";

export default function SearchList() {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <>
      {(search.location || search.category || search.query) && (
        <div className="space-x-4 my-4 font-medium text-base text-black">
          {search.location && (
            <span
              className="py-2 px-3 rounded-full border border-primary text-primary cursor-pointer"
              onClick={() =>
                setSearch((prev) => {
                  return { ...prev, location: undefined };
                })
              }
            >
              {"지역: "}
              <span className="font-bold">{search.location}</span>
            </span>
          )}
          {search.category && (
            <span
              className="py-2 px-3 rounded-full border border-point text-point cursor-pointer"
              onClick={() =>
                setSearch((prev) => {
                  return { ...prev, category: undefined };
                })
              }
            >
              {"카테고리: "}
              <span className="font-bold">{CATEGORY[search.category]}</span>
            </span>
          )}
          {search.query && (
            <span
              className="py-2 px-3 rounded-full border border-black cursor-pointer"
              onClick={() =>
                setSearch((prev) => {
                  return { ...prev, query: undefined };
                })
              }
            >
              {"검색어: "}
              <span className="font-bold">{search.query}</span>
            </span>
          )}
          <style>{`.recommendation {display: none}`}</style>
        </div>
      )}
    </>
  );
}
