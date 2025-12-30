import { useEffect, useState } from "react";

function useDebounceSearch(items: string[], search: string, delay:number) {
    const [filteredResults, setFilteredResult] = useState<string[]>([]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (search) {
                
                setFilteredResult(
                    items.filter((x) => x.toLowerCase().includes(search.toLowerCase()))
                );
                
            } else {
                setFilteredResult([]);
            }
        }, delay);
        return () => clearTimeout(handler);
    }, [search, items, delay]);

    return filteredResults;
}

export default useDebounceSearch;