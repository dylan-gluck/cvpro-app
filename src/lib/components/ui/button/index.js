import { tv } from 'tailwind-variants';
import Root from './button.svelte';
const buttonVariants = tv({
	base: 'focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow',
			invert: 'bg-foreground text-background hover:bg-foreground/90 shadow',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
			outline:
				'border-input border-2 bg-transparent hover:border-foreground hover:text-foreground border shadow-sm',
			outlinePrimary:
				'border-input hover:border-primary hover:text-primary border-2 bg-transparent border shadow-sm',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
			ghost: 'text-muted-foreground hover:text-primary',
			neutral: 'bg-background text-foreground',
			active: 'text-primary bg-primary/5 border border-primary/20',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-9 px-3 py-2',
			xs: 'h-6 rounded-lg px-2 text-xs',
			sm: 'h-8 rounded-lg px-2 text-xs',
			lg: 'h-10 rounded-lg px-8',
			xl: 'h-auto rounded-lg py-3 px-8 gap-3 text-xl font-semibold',
			icon: 'h-9 w-9',
			circle: 'h-9 w-9 rounded-full',
			sidebar: 'h-8 rounded-md px-3 text-xs justify-start',
			block: 'h-8 rounded-md px-3 text-xs w-full'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});
export {
	Root,
	//
	Root as Button,
	buttonVariants
};
