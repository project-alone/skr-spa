import { FC, useState, createContext } from 'react'
type SidebarContextType = { sidebarToggle: boolean; toggleSidebar: () => void }

export const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType)

export const SidebarProvider: FC = ({ children }) => {
	const [sidebarToggle, setSidebarToggle] = useState(false)
	const toggleSidebar = () => {
		setSidebarToggle(!sidebarToggle)
	}

	return (
		<SidebarContext.Provider value={{ sidebarToggle, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}
