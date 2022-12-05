import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'page': 'flex-1 px-4 mb-4 grid grid-cols-12 gap-4',
    'bg-base': 'bg-white dark:bg-zinc-900',
    'bg-surface': 'bg-white/85 dark:bg-zinc-900/85',
    'bg-element': 'bg-zinc-900/5 dark:bg-white/5',
    'bg-element-active': 'bg-zinc-900/10 dark:bg-white/10',
    'bg-action': 'bg-zinc-900/10 dark:bg-white/10',
    'bg-contrast': 'bg-zinc-900 dark:bg-zinc-100',
    'border-base': 'border-zinc-900/10 dark:border-zinc-200/10',
    'border-highlight': 'border-zinc-900/20 dark:border-zinc-200/20',
    'radius-base': 'rounded-xl',
    'text-base': 'text-zinc-900 dark:text-zinc-200',
    'text-dim': 'text-zinc-900/70 dark:text-zinc-200/60',
    'text-faint': 'text-zinc-900/40 dark:text-zinc-200/30',
    'text-gradient-yellow': 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text',
    'text-gradient-purple': 'bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text',
    'text-address': 'self-start font-mono',
    'text-value': 'self-start font-mono',
    'text-currency': 'self-start text-value text-faint',
    'panel': 'p-4 bg-surface rounded-1.5rem',
    'btn': 'flex justify-center items-center h-10 min-w-10 text-base border-0 radius-base box-border cursor-pointer decoration-none',
    'btn-transparent': 'btn bg-transparent hover:bg-white/50 dark:(hover:bg-zinc-900/50)',
    'btn-default': 'btn bg-element hover:bg-element-active',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
