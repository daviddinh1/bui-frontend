"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";

export default function InvestorPortal() {
  const { user, loading, signOut } = useAuth();
  const fetchUserData = async () => {
    try {
      // This will automatically include JWT
      const data = await apiClient.get("/user");
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  // Auth protection
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-blue-600 font-medium">
            Loading your portfolio...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Access Restricted
          </h2>
          <p className="text-blue-600 mb-6">
            Please log in to view your investor portal
          </p>
          <a
            href="/login"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const performance = [
    { month: "Jan 2025", value: 100000 },
    { month: "Feb 2025", value: 102000 },
    { month: "Mar 2025", value: 106500 },
    { month: "Apr 2025", value: 109000 },
    { month: "May 2025", value: 111500 },
    { month: "Jun 2025", value: 115000 },
    { month: "Jul 2025", value: 118500 },
    { month: "Aug 2025", value: 120000 },
    { month: "Sep 2025", value: 123000 },
    { month: "Oct 2025", value: 126500 },
  ];

  const currentMonth = performance[performance.length - 1];

  const activity = [
    { date: "07/01/2025", type: "Initial Deposit", amount: "$100,000" },
    { date: "08/15/2025", type: "Dividend Payment", amount: "$1,200" },
    {
      date: "09/10/2025",
      type: "Portfolio Rebalance",
      amount: "Asset allocation updated",
    },
    { date: "10/01/2025", type: "Management Fee", amount: "-$3,300" },
    { date: "10/15/2025", type: "Interest Payment", amount: "$850" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-800 tracking-wider">
              BUI CAPITAL
            </h1>
            <span className="text-slate-600 text-sm font-medium">
              Investor Portal
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600 text-sm">
              Welcome, {user.email}
            </span>
            <button
              onClick={() => signOut()}
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-2">Welcome Back, Investor</h2>
          <p className="text-slate-100 text-lg">
            Long-Term Wealth, Built Differently
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-slate-200 text-sm font-medium">
                Current Portfolio Value
              </p>
              <p className="text-2xl font-bold">
                ${currentMonth.value.toLocaleString()}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-slate-200 text-sm font-medium">
                Monthly Growth
              </p>
              <p className="text-2xl font-bold text-green-300">+$3,500</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-blue-200 text-sm font-medium">Total Return</p>
              <p className="text-2xl font-bold text-green-300">+26.5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800">
              Portfolio Performance
            </h3>
            <p className="mt-2 text-slate-600">
              Building long-term wealth through disciplined investment
              strategies
            </p>
          </div>

          <div className="p-8">
            <div className="h-96 w-full">
              <ResponsiveContainer>
                <LineChart
                  data={performance}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="month"
                    stroke="rgb(51 65 85)"
                    fontSize={12}
                    tick={{ fill: "rgb(51 65 85)" }}
                  />
                  <YAxis
                    stroke="rgb(51 65 85)"
                    fontSize={12}
                    tick={{ fill: "rgb(51 65 85)" }}
                    tickFormatter={(val) => `$${val / 1000}k`}
                  />
                  <Tooltip
                    formatter={(val) => [
                      `$${val.toLocaleString()}`,
                      "Portfolio Value",
                    ]}
                    // contentStyle={{
                    //   backgroundColor: "rgb(51 65 85)",
                    //   color: "white",
                    //   border: "none",
                    //   borderRadius: "8px",
                    //   boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    // }}
                    labelStyle={{ color: "white" }}
                    itemStyle={{ color: "white" }}
                    contentStyle={{
                      backgroundColor: "rgb(51 65 85)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="rgb(51 65 85)"
                    strokeWidth={4}
                    dot={{
                      fill: "rgb(51 65 85)",
                      r: 6,
                      strokeWidth: 2,
                      stroke: "#fff",
                    }}
                    activeDot={{ r: 8, fill: "rgb(203 213 225)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-8 py-6">
            <h3 className="text-2xl font-bold text-white">Recent Activity</h3>
            <p className="mt-2 text-slate-100">
              Latest transactions and account updates
            </p>
          </div>

          <div className="divide-y divide-blue-50">
            {activity.map((transaction, idx) => (
              <div
                key={idx}
                className="px-8 py-6 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {transaction.type}
                        </p>
                        <p className="text-slate-600 text-sm">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-bold text-lg ${
                        transaction.amount.startsWith("-")
                          ? "text-red-500"
                          : transaction.amount.startsWith("$")
                          ? "text-green-500"
                          : "text-blue-500"
                      }`}
                    >
                      {transaction.amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Our Investment Approach
          </h3>
          <p className="text-slate-600 leading-relaxed">
            BUI Capital focuses on building long-term wealth through a
            disciplined approach to equities, private equity, and real estate.
            Our strategy emphasizes sustainable growth, risk management, and
            strategic diversification to deliver consistent returns for our
            investors.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-100 bg-white mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-slate-800 font-bold text-lg tracking-wider">
                BUI CAPITAL
              </p>
              <p className="text-slate-600 text-sm">
                © {new Date().getFullYear()} BUI Capital. All rights reserved.
              </p>
            </div>
            <div className="text-right">
              <p className="text-slate-600 text-sm font-medium">
                Confidential – For Investor Use Only
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Private Investment Firm
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
