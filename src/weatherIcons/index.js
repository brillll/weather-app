const ICONS = {
    C: `M9.75,10.98c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28c0,0.5-0.18,0.93-0.53,1.28c-0.35,0.36-0.78,0.53-1.27,0.53c-0.5,0-0.93-0.18-1.28-0.53
	S9.75,11.48,9.75,10.98z M10.63,10.98c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.67s-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.28
	C10.72,10.49,10.63,10.72,10.63,10.98z M14.52,15.4c0,0.77,0.21,1.45,0.64,2.05c0.22,0.31,0.53,0.56,0.93,0.75
	c0.39,0.18,0.84,0.28,1.34,0.28c1.46,0,2.38-0.56,2.75-1.67c0.04-0.14,0.02-0.28-0.06-0.41c-0.08-0.13-0.19-0.2-0.33-0.23
	c-0.14-0.04-0.28-0.02-0.4,0.07c-0.12,0.08-0.2,0.19-0.23,0.34c0,0.01,0,0.02-0.01,0.05l-0.02,0.07c-0.11,0.19-0.26,0.34-0.45,0.45
	c-0.31,0.19-0.72,0.28-1.23,0.28c-0.31,0-0.59-0.05-0.83-0.16c-0.4-0.17-0.68-0.47-0.85-0.89c-0.11-0.27-0.17-0.6-0.17-0.97v-3.22
	c0-0.15,0.01-0.3,0.03-0.45c0.04-0.38,0.19-0.73,0.45-1.04c0.29-0.35,0.75-0.52,1.38-0.52c0.52,0,0.93,0.09,1.23,0.27
	c0.2,0.12,0.35,0.27,0.45,0.45c0.01,0.02,0.01,0.05,0.02,0.08c0.01,0.03,0.01,0.05,0.01,0.06c0.04,0.14,0.12,0.24,0.23,0.3
	c0.12,0.07,0.25,0.08,0.4,0.05c0.14-0.03,0.25-0.11,0.33-0.23c0.08-0.12,0.1-0.25,0.06-0.4v-0.01l-0.08-0.23
	c-0.05-0.11-0.14-0.26-0.28-0.43c-0.13-0.18-0.29-0.32-0.45-0.44c-0.21-0.15-0.48-0.27-0.82-0.38c-0.34-0.1-0.71-0.15-1.11-0.15
    c-0.51,0-0.95,0.09-1.35,0.27c-0.39,0.18-0.7,0.42-0.91,0.73c-0.43,0.59-0.65,1.28-0.65,2.07V15.4z`,
    F: `M9.67,11.01c0-0.5,0.18-0.93,0.53-1.28s0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53c0.35,0.36,0.53,0.78,0.53,1.28
	c0,0.5-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54s-0.92-0.18-1.28-0.54C9.85,11.94,9.67,11.51,9.67,11.01z M10.55,11.01
	c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28s0.48-0.09,0.67-0.28s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66
	c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27C10.64,10.52,10.55,10.74,10.55,11.01z M14.96,17.9
	c0,0.14,0.05,0.27,0.15,0.37s0.23,0.15,0.37,0.15c0.14,0,0.27-0.05,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37v-3.79h2.86
	c0.14,0,0.27-0.05,0.37-0.16s0.15-0.23,0.15-0.38c0-0.15-0.05-0.27-0.15-0.38c-0.1-0.1-0.23-0.15-0.38-0.15h-2.86v-2.73h3.82
    c0.14,0,0.26-0.05,0.36-0.15s0.14-0.23,0.14-0.38s-0.05-0.27-0.14-0.38s-0.21-0.15-0.36-0.15h-4.77c-0.07,0-0.1,0.04-0.1,0.11V17.9z`,
    Showers:`M18.81,64.84a2,2,0,0,1-1.73-3l6.5-11.25a2,2,0,0,1,3.47,2l-6.5,11.25A2,2,0,0,1,18.81,64.84Z"/><path class="cls-5" d="M30,64.84a2,2,0,0,1-1.73-3l6.5-11.25a2,2,0,0,1,3.46,2l-6.5,11.25A2,2,0,0,1,30,64.84Z`
}

export {
    ICONS
}