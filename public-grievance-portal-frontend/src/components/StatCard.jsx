export default function StatCard({ title, value, icon: Icon, color }) {
    return (
      <div className={`bg-white rounded-xl shadow p-5 flex items-center justify-between border-t-4 border-${color}-500`}>
        <div>
          <h4 className="text-gray-500 text-sm">{title}</h4>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <Icon className={`text-${color}-500 `} size={28} />
      </div>
    );
  }
  