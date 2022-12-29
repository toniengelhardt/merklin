import { /* $fetch, */ fetch, setup } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'
// import { expectNoClientErrors } from './utils'

// See examples here:
// https://github.com/nuxt/framework/blob/main/test/basic.test.ts

await setup({
  browser: true,
})

// describe('server api', () => {})

// describe('route rules', () => {})

describe('pages', () => {
  it('render index', async () => {
    const { status } = await fetch('/')
    expect(status).toEqual(200)
    // expect(html).toContain('Welcome to the jungle')
    // await expectNoClientErrors('/')
  })
  // it('render 404', async () => {
  //   const html = await $fetch('/not-found')
  //   console.log(html)
  //   expect(html).toContain('[...slug].vue')
  //   expect(html).toContain('404 at not-found')
  //   await expectNoClientErrors('/not-found')
  // })
})
