import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserWatchList } from "../functions-api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UserContextType } from "../../types/props-types";


const useWatchList = () => {
    const { user } = useContext(AuthContext) as UserContextType


    return useSuspenseQuery({
        queryKey: ["userWatchList", user?.email],
        queryFn: () => getUserWatchList(user?._id, user?.token),
        staleTime: 0,
    });

}

export default useWatchList