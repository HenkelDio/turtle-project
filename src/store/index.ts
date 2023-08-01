import { create } from "zustand";
import { ICredentials, IStore } from "../types";

const useTurtleStore = create<IStore>((set) => ({
	credentials: {} as ICredentials,
	setCredentials: (payload: ICredentials) => set((state) => ({credentials: payload})),

	isAuthenticated: false as boolean,
	setAuthenticated: (payload: boolean) => set((state) => ({isAuthenticated: payload})),
	
	registerType: 'default' as string,
	setRegisterType: (payload: string) => set((state) => ({registerType: payload})),
}))

export default useTurtleStore;