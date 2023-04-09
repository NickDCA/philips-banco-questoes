import React from 'react'
import Form from 'react-bootstrap/Form'
interface AuthInputProps {
  styles: string
  id: string
  type: string
  placeholder: string
}

export default function AuthInput({ styles, id, type, placeholder }: AuthInputProps) {
  return (
    <Form.Group className={styles} controlId={id}>
      <Form.Control type={type} placeholder={placeholder} required />
    </Form.Group>
  )
}
