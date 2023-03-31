import { Stack, ThemeProvider } from '@fluentui/react'

import Header from '@/components/Header'
import Form from '@/components/Form'
import Result from './components/Result'

import { dark } from './theme/dark'

function App() {

  return (
    <ThemeProvider theme={dark}>
      <Stack styles={{root:{minHeight:"100vh"}}}>
        <Stack tokens={{padding:10}} >
          <Header />
          <Form />
          <Result />
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
