import React from 'react'
import Form from 'react-bootstrap/Form'
interface AuthInputProps {
  styles: string
  id: string
  type: string
  placeholder: string
  label?: string
}

export default function AuthInput({ styles, id, type, placeholder, label }: AuthInputProps) {
  return (
    <Form.Group className={`mb-3 ${styles} text-start`} controlId={id}>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control type={type} placeholder={placeholder} required />
    </Form.Group>
  )
}
