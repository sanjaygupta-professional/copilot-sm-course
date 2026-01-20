import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ModuleContent } from './components/Course/ModuleContent'
import { ResourceContent } from './components/Course/ResourceContent'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Default redirect to first module */}
        <Route index element={<Navigate to="/module/1.1" replace />} />

        {/* Module routes */}
        <Route path="module/:moduleId" element={<ModuleContent />} />

        {/* Resource routes - using * to capture full path */}
        <Route path="resource/*" element={<ResourceContent />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/module/1.1" replace />} />
      </Route>
    </Routes>
  )
}

export default App
