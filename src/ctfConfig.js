const config = {
  // ctf の deliver api の設定
  deliver: {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  },
  // ctf の management api の設
  management: process.env.CTF_CONTENT_MANAGEMENT_ACCESS_TOKEN
}

export default config