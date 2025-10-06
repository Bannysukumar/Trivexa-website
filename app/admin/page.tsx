import DataDashboard from '@/components/admin/DataDashboard'

export const dynamic = 'force-dynamic'
import AITrainingManager from '@/components/admin/AITrainingManager'
import AITrainingDashboard from '@/components/admin/AITrainingDashboard'

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <AITrainingDashboard />
      <DataDashboard />
      <AITrainingManager />
    </div>
  )
}
