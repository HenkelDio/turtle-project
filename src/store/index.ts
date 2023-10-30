import { create } from "zustand";
import { ICredentials, IModule, IStore } from "../types";

const useTurtleStore = create<IStore>((set) => ({
	credentials: {} as ICredentials,
	setCredentials: (payload: ICredentials) => set((state) => ({credentials: payload})),

	isAuthenticated: false as boolean,
	setAuthenticated: (payload: boolean) => set((state) => ({isAuthenticated: payload})),
	
	registerType: 'default' as string,
	setRegisterType: (payload: string) => set((state) => ({registerType: payload})),

	onCourse: true as boolean,

	modules: [] as IModule[],
	setModules:  (payload: IModule[]) => set((state) => ({modules: payload})),

	userIcon: '' as string,
	setUserIcon: (payload: string) => set((state) => ({userIcon: payload})),
}))

export default useTurtleStore;