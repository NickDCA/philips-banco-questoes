import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

export default function ResultsUnica(resultado: boolean) {
  const styles = resultado ? 'success' : 'danger'
  const message = resultado ? 'Parabéns, você acertou!' : 'Você errou, tente novamente...'
  function Icon() {
    if (resultado) {
      return <span>✅</span>
    }

    return <span>❌</span>
  }

  return (
    <div className={`card bg-${styles} fs-2`}>
      {message}
      {<Icon />}
    </div>
  )
}
