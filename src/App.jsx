import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '@/components/organisms/Layout'
import Dashboard from '@/components/pages/Dashboard'
import AuditCreate from '@/components/pages/AuditCreate'
import AuditDetail from '@/components/pages/AuditDetail'
import Reports from '@/components/pages/Reports'
import Benchmarks from '@/components/pages/Benchmarks'
import Settings from '@/components/pages/Settings'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Layout>
<Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/audit/new" element={<AuditCreate />} />
          <Route path="/audit/:id" element={<AuditDetail />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/benchmarks" element={<Benchmarks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="z-50"
      />
    </div>
  )
}

export default App