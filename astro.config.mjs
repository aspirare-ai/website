import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://aspirare-ai.github.io',
  base: '/website',
  image: {
    service: passthroughImageService()
  }
})
