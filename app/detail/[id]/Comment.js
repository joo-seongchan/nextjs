"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Comment({ _id }) {
  const [comment, setComment] = useState(``)
  const [list, setList] = useState([])
  let data = {
    comment: comment,
    _id: _id,
  }

  const getCommentData = async () => {
    const { data } = await axios.get(`/api/comment/list?id=${_id}`)
    setList(data)
  }

  useEffect(() => {
    getCommentData()
  }, [])

  return (
    <div>
      <div>댓글목록</div>
      {list.map((data, index) => (
        <p key={index}>{data.content}</p>
      ))}
      <input
        onChange={(e) => {
          setComment(e.target.value)
        }}
        value={comment}
      />
      <button
        onClick={async () => {
          await axios.post(`/api/comment/new`, data)
          await getCommentData()
          setComment(``)
        }}
      >
        댓글전송
      </button>
    </div>
  )
}
