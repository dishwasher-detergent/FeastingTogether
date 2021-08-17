import create from "zustand";
import { combine } from "zustand/middleware";

const useSession = create(
  combine(
    {
      user: '',
    },
    (set) => ({
      set,
    })
  )
);


export default useSession