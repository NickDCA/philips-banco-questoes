import React from 'react'
import Form from 'react-bootstrap/Form'
interface AuthInputProps {
  style: string
  id: string
  type: string
  placeholder: string
  required?: boolean
}

export default function AuthInput({ style, id, type, placeholder }: AuthInputProps) {
  return (
    <Form.Group className={style} controlId={id}>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  )
}
