import { useSuspenseQuery } from '@tanstack/react-query'
import { getAllPopular } from '../functions-api'
const useAllPD = (page: number) => {
    return useSuspenseQuery({
        queryKey: ["Popular", page],
        queryFn: () => getAllPopular(page),
    });
}

export default useAllPD