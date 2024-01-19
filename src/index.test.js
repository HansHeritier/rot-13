import rot13 from './index'

const assert = (test) => expect(test).toBeTruthy()
assert.deepEqual = (test, arr) => expect(test).toEqual(arr)
assert.deepStrictEqual = (test, arr) => expect(test).toEqual(arr)

it(`rot13("UNEQPBQREF") doit retourner "HARDCODERS"`, () => {
  assert(rot13('UNEQPBQREF') === 'HARDCODERS')
})

it(`rot13("ZBPUN YR PUVRA") doit retourner "MOCHA LE CHIEN"`, () => {
  assert(rot13('ZBPUN YR PUVRA') === 'MOCHA LE CHIEN')
})

it(`rot13("SERR YBIR?") doit retourner "FREE LOVE?"`, () => {
  assert(rot13('SERR YBIR?') === 'FREE LOVE?')
})

it(`rot13("P'RFG Y'VARKCHTANOYR NEEBTNAPR QR IBGER ORNHGR DHV Z'NFCRETR.") doit retourner "C'EST L'INEXPUGNABLE ARROGANCE DE VOTRE BEAUTE QUI M'ASPERGE."`, () => {
  assert(
    rot13("P'RFG Y'VARKCHTANOYR NEEBTNAPR QR IBGER ORNHGR DHV Z'NFCRETR.") ===
      "C'EST L'INEXPUGNABLE ARROGANCE DE VOTRE BEAUTE QUI M'ASPERGE."
  )
})
