import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserWatchList } from "../functions-api";


const useWatchList = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);


    return useSuspenseQuery({
        queryKey: ["userWatchList", user?.email],
        queryFn: () => getUserWatchList(user?._id, user?.token),
        staleTime: 0,
    });

}

export default useWatchList