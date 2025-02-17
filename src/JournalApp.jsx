import React from 'react'
import { JournalRouter } from './router/JournalRouter'
import { AppTheme } from './themes/AppTheme'

export const JournalApp = () => {
  return (
    <AppTheme>
      <JournalRouter />
    </AppTheme>
  )
}

