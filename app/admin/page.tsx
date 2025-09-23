import DataDashboard from '@/components/admin/DataDashboard'
import AITrainingManager from '@/components/admin/AITrainingManager'

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <DataDashboard />
      <AITrainingManager />
    </div>
  )
}
