import React from 'react'

export default function Results({ props }) {
  const data = props.data;
  return (
    <div>
        <p>{data}</p>
    </div>
  )
}
