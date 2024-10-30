import { State } from "@/interfaces/data";
import States from "../../../lib/schema";

export async function getFirstState() {
    const state: State[] | null = await States.find({}).limit(1);

    return state && state.length >= 1 ? state[0] : null;
}
