import { PageActionType } from "./page.types";

export const setPage = page => ({
    type: PageActionType.SET_PAGE,
    payload: page
})