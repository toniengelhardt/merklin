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
    'bg-base': 'bg-zinc-100 dark:bg-zinc-900',
    'bg-surface': 'bg-white dark:bg-zinc-800',
    'bg-contrast': 'bg-zinc-900 dark:bg-zinc-100',
    'text-base': 'text-zinc-900 dark:text-zinc-200',
    'text-dim': 'text-zinc-900/70 dark:text-zinc-200/60',
    'text-faint': 'text-zinc-900/40 dark:text-zinc-200/30',
    'panel': 'p-4 bg-zinc-900/10 dark:(bg-zinc-100/10) rounded-1.5rem',
    'btn': 'flex justify-center items-center h-10 min-w-10 text-zinc-900 bg-zinc-900/10 dark:(bg-zinc-100/10 hover:bg-zinc-100/20 text-zinc-200) border-0 rounded-2xl box-border cursor-pointer',
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
