import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllComingSoon } from "../functions-api";

const useAllUCD = (page: number) => {
    return useSuspenseQuery({
        queryKey: ["comingSoon", page],
        queryFn: () => getAllComingSoon(page),

    });
}

export default useAllUCD