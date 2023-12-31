//引入sdk
const AlipaySdk = require('alipay-sdk').default;
const alipaySdk = new AlipaySdk({
  //AppId
  appId: '2021000121627915',
  //签名算法
  signType:'RSA2',
  //支付宝网关
  gateway:'https://openapi.alipaydev.com/gateway.do',
  //支付宝公钥
  alipayPublicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmkKMIo9leP1UbgFIUVxbE//0XbVU5VP6+JUv6vYqS7CAImOiqviwI2TS9v04ckUNuLlHuE7NFDEiWmJRyHjZTEPuNKeAeuP+GskTjQXDn2psFHJRtA7FDiWdgMaLCGb1r/FrBdDLWI73CSAkFtFJfD/b9fhQIvtAMninMFTpH+0D6lWmQ/Z5NCQ3SiUe6BGypiNFML2qF1ecW5oAK4YURgan0DQXX8uaDDyC/2AvhD1BjhINs/jPhQAMBKvwUWudYMBEro11IEH6vhd/lYpviaBCQfBY7Wyfnxm2SZ/tBZjDpdyhlhYemzKmnWcsYQaqaG3m8vpP65n1nIJhxouWBwIDAQAB',
  //应用私钥
  privateKey: 'MIIEpAIBAAKCAQEArG3/KlGDskccu9x1DTseyYcytz1qEbtUvYHLLaFq+hUMdw1bYixUnJKRLySjuky08RHirtWGQmnzHmJOFPmoPeI+NldDSfIu+I4QZS/T8aeQywGgjqYgm4sebuL3IDz3iepOQRCte/JvX0h2up9LjZQ6ZUJnWvPxs6ETHW/ih3bssb+/tpqe9GimvshYjYM28D/8DtJVD/Q9S6dttxL9pcheaMVWnsaIDNXS5tVAxZmhhErXpw/3+m3Awhi+YESt9aJyjr7bzxyCncRicycHSCouiwZHooCT0JsJSWol4TEtbgxuUC2CDpuiArYXQFpWmHxcSksdtkZFwglwPXK1TwIDAQABAoIBAGjq4TkZsl2W4Yf5g4uSbpBHYHeYueKiLtTEliFkt5gFmLkT+ofI248Nq6OY0rr4E50fueOR7wiYOSNCw6oFovZMpHgiLsJex2/b2WQIbxj6UaMEkXJa6Tpbsx/boG0QS7qyQ/1ZLYZepJ/AkuXJKYqzJ7kXZ5YzGt2m49+khZzQnquvFamrV7nyk92TFubDXL2Cow34UpwtyzH3JEMwUjIc8C4RGZhlaWF7bB3I/Sg1wlnL/OhqKAcaQK2qoazuKZhbrMZQ2srd1fmiqP4wPos0ScHrp2FDYsf7GrBJOjWc3ZUpgkH9zzTJN4H8Morl1FrDb7gdGm0j4/43NLkRp+kCgYEA/jpHiuSUIMUQKS4PIPR+SkQrNZA/XEkWH1wGPYSl7EzgRgkg5g23UgKT8jmhzUbP/0z+1hcNviQeevusJvRjQFwn8HNL62gDj3uQZTtE7JoNzgkZjzxGER+fUN3eYCMWhNCYp0ZDSwr3mDkGPn2bRnqwoWvvsu9aVLSC+kNC0uMCgYEAraG7drbWdTb2xTiz5gku6azMOOWQRzdnMfyH+frqzwqaq9doQBnQDHdtIUiTyUFbkEg3l92G0qUCuzzT8NGxOa+oMlkySQDb6xSJrQEt2JYExZdnCkVUMhOIkLE2q06f9pu5icJT9AOUjUuAm1yZdf5uKL0paQeAkG267gZRY6UCgYEA4PKmfSJ2Y2ybOSTVJB7SZFpfNVz2g2z0Ezl1GBf4TNdVFwNaxdTbIcjAKfOO1LlUsBzr3Hm3okgJZF6uXCWgcMFaYatTQO/fPqViBgDkospJbsakhBYcFWi6qm43Jy/E7C469L/6KTuCC4JhoQe5TiqfgaWlCdo6Pnse7dx4E2sCgYBDh6CSdmAIbJ0jbX9CW5X8WjF/e4FWwWyIW3BDQFyss7IeXYP1UlTBVH2EMWcRIjNLdVrx3L3AFV9vlSPVCKlGB1SCaICPNh9SWcWGHOxIzWgDtXPk4bvyUfiOVe4uSEEct8o8kvD1+aKAJbpaMnSZGKCdhZyidcGB6ruGMbzb5QKBgQCwK8XWrC040fS+10FpZmhEiV+4e8b94vXKTnDj5je3HNomz8owqqa223T/wQwmGZzs+/4WsLUkGtFXxWtquJNtFEEbObjjdX05nOxlvf+iFDMfzI9KXERCdjhhcCRYC1mowu9uqdC/xQVN2WXzuiTJvQFt5bP9MR7JYD4nhGRO5g=='
});

module.exports = alipaySdk;