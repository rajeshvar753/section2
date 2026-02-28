'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Search,
  Sun,
  Moon,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 1200 },
  { name: "May", value: 900 },
  { name: "Jun", value: 1500 },
];

export default function EnterpriseAnalyticsDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark bg-gray-950 text-white" : "bg-gray-50 text-gray-900"} min-h-screen p-8 transition-all`}>

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Monitor performance and insights
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Revenue", value: "$12,400", change: "+12%" },
          { title: "Users", value: "3,200", change: "-4%" },
          { title: "Sessions", value: "8,540", change: "+8%" },
          { title: "Conversion", value: "3.4%", change: "+2%" },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 transition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {card.title}
            </p>

            <div className="flex justify-between items-center mt-3">
              <h2 className="text-2xl font-semibold">{card.value}</h2>

              <div
                className={`flex items-center text-sm ${
                  card.change.includes("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {card.change.includes("+") ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span className="ml-1">{card.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Performance Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table + Filters */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Data Table
          </h2>

          <div className="flex gap-3">
            <div className="relative">
              <Search size={16} className="absolute top-2.5 left-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <select className="border px-3 py-2 rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="border-b dark:border-gray-800 text-gray-500 dark:text-gray-400">
            <tr>
              <th className="text-left py-3">Name</th>
              <th className="text-left">Email</th>
              <th>Status</th>
              <th>Revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="py-3">John Doe</td>
              <td>john@example.com</td>
              <td className="text-green-500">Active</td>
              <td>$1,200</td>
            </tr>

            <tr className="border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="py-3">Jane Smith</td>
              <td>jane@example.com</td>
              <td className="text-red-500">Inactive</td>
              <td>$980</td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end gap-2 mt-6">
          <button className="px-3 py-1 border rounded-md text-sm">
            Prev
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            2
          </button>
          <button className="px-3 py-1 border rounded-md text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}