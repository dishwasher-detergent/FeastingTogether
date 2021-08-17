import create from "zustand";
import { combine } from "zustand/middleware";

const useSession = create(
  combine(
    {
      session_id: '',
	  user: '',
	  user_id: 0,
	  creator: false,
    },
    (set) => ({
      set,
    })
  )
);


export default useSession