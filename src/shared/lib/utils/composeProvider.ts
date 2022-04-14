import React from 'react'

export type ComposeProviderProps = React.PropsWithChildren<{
	providers: React.ReactElement[]
}>

const nest = (children: React.ReactNode, component: React.ReactElement) =>
	React.cloneElement(component, {}, children)

const ComposeProvider: React.FC<ComposeProviderProps> = ({ children, providers }) =>
	React.createElement(React.Fragment, {}, providers.reduceRight(nest, children))

const compose = (...providers: React.ReactElement[]) => {
	const ComposeProvider: React.FC = ({ children }) =>
		React.createElement(React.Fragment, {}, providers.reduceRight(nest, children))

	return ComposeProvider
}

export { ComposeProvider as default, compose }
