"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  AreaChart
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const [activeTab, setActiveTab] = useState("usage");

  const usageData = [
    { name: "Doğru Yazım", value: 35 },
    { name: "Kısaltmalar", value: 40 },
    { name: "Emoji/GIF", value: 15 },
    { name: "Yabancı", value: 10 }
  ];

  const ageData = [
    { name: "13-18", turkce: 30, yabanci: 70 },
    { name: "19-25", turkce: 45, yabanci: 55 },
    { name: "26-35", turkce: 60, yabanci: 40 },
    { name: "36-50", turkce: 75, yabanci: 25 },
    { name: "51+", turkce: 85, yabanci: 15 }
  ];

  const trendData = [
    { year: "2010", deger: 80 },
    { year: "2012", deger: 75 },
    { year: "2014", deger: 65 },
    { year: "2016", deger: 60 },
    { year: "2018", deger: 55 },
    { year: "2020", deger: 50 },
    { year: "2022", deger: 45 },
    { year: "2024", deger: 42 }
  ];

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

  const tabs = [
    { id: "usage", label: "Kullanım Dağılımı", icon: <PieChartIcon className="w-5 h-5" /> },
    { id: "age", label: "Yaş Grupları", icon: <BarChartIcon className="w-5 h-5" /> },
    { id: "trend", label: "Yıllara Göre Trend", icon: <LineChartIcon className="w-5 h-5" /> }
  ];

  const renderChart = () => {
    switch (activeTab) {
      case "usage":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={usageData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {usageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, "Oran"]}
                contentStyle={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.8)", 
                  borderColor: "hsl(var(--chart-1))", 
                  borderRadius: "0.5rem",
                  color: "white"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      case "age":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={ageData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="white"
                tick={{ fill: "white" }}
              />
              <YAxis 
                stroke="white"
                tick={{ fill: "white" }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, "Oran"]}
                contentStyle={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.8)", 
                  borderColor: "hsl(var(--chart-1))", 
                  borderRadius: "0.5rem",
                  color: "white"
                }}
              />
              <Bar dataKey="turkce" name="Türkçe Kullanımı" fill="hsl(var(--chart-1))" />
              <Bar dataKey="yabanci" name="Yabancı Kelime Kullanımı" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "trend":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={trendData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="year" 
                stroke="white"
                tick={{ fill: "white" }}
              />
              <YAxis 
                domain={[0, 100]} 
                stroke="white"
                tick={{ fill: "white" }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, "Doğru Türkçe Kullanımı"]}
                contentStyle={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.8)", 
                  borderColor: "hsl(var(--chart-3))", 
                  borderRadius: "0.5rem",
                  color: "white"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="deger" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-3))", r: 6 }}
                activeDot={{ r: 8, fill: "white", stroke: "hsl(var(--chart-3))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="statistics" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-blue-950/20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm md:text-base uppercase tracking-wider text-cyan-400 mb-3">
            Veriler ve Rakamlar
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            İstatistikler ve Veriler
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sosyal medyada Türkçe kullanımına dair güncel istatistikler ve verilerle durumun ciddiyetini anlayalım.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/80 border border-gray-700/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 md:p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              {renderChart()}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-700/20 mr-4">
                <AreaChart className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Yabancı Kelime Oranı</h4>
            </div>
            <p className="text-3xl font-bold text-purple-400 mb-2">%42.5</p>
            <p className="text-gray-300">Sosyal medyada kullanılan kelimelerin yaklaşık yarıya yakını yabancı kökenli.</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 mr-4">
                <BarChartIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Kısaltma Kullanımı</h4>
            </div>
            <p className="text-3xl font-bold text-cyan-400 mb-2">%82.7</p>
            <p className="text-gray-300">Gençlerin çoğunluğu sosyal medyada kelime kısaltmaları kullanıyor.</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-700/20 mr-4">
                <LineChartIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">10 Yıllık Değişim</h4>
            </div>
            <p className="text-3xl font-bold text-blue-400 mb-2">-%38</p>
            <p className="text-gray-300">Son 10 yılda doğru Türkçe kullanımında %38'lik ciddi bir düşüş yaşandı.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}