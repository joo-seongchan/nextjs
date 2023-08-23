"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn({ session }) {
  return (
    <>
      {session == null ? (
        <button
          onClick={() => {
            signIn()
          }}
        >
          로그인
        </button>
      ) : (
        <button
          onClick={() => {
            signOut()
          }}
        >
          로그아웃
        </button>
      )}
    </>
  )
}
