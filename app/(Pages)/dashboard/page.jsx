"use client";

import React, { useContext ,useEffect} from "react";
import { useRouter } from "next/navigation";
import {
  FiLogOut,
  FiSettings,
  FiMessageSquare,
  FiZap,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiUser,
  FiMail,
  FiCalendar,
} from "react-icons/fi";
import { userDataContext } from "../../store/UserDataContext";

const DashboardPage = () => {
  const router = useRouter();
  const { userData, setUserData } = useContext(userDataContext);
 
  useEffect(() => {
     if (!userData?.name) {
    return router.push("/");
  }

  }, [userData,router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData({});
    return router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10 px-6 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Welcome back,{" "}
              <p className="text-xl font-semibold inline-block">
                {userData.name}
              </p>
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-400 font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/20"
            >
              <FiLogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Account Overview */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Account Overview</h2>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <FiUser className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              <InfoRow
                icon={<FiUser className="w-5 h-5" />}
                label="Full Name"
                value={userData.name}
              />
              <InfoRow
                icon={<FiMail className="w-5 h-5" />}
                label="Email Address"
                value={userData.email}
              />
              <InfoRow
                icon={<FiZap className="w-5 h-5" />}
                label="Subscription"
                value={userData.isPro ? "SEOWala Pro ✨" : "Free Plan"}
              />
              <InfoRow
                icon={<FiCalendar className="w-5 h-5" />}
                label="Member Since"
                value={new Date().toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <ActionButton
                icon={<FiMessageSquare />}
                label="New Chat"
                onClick={() => router.push("/use-ai?service=MetaTags")}
              />

              <ActionButton
                icon={<FiClock />}
                label="Chat History"
                onClick={() => router.push("/use-ai?isHistory=true")}
              />
              <ActionButton
                label={` Total Chats ${userData.ChatWithAI?.length || 0}`}
                icon={<FiMessageSquare className="w-6 h-6" />}
              />
              <ActionButton
                label={userData.isPro ? "Pro Plan" : "Free Plan"}
                icon={<FiZap className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>

        {/* Upgrade CTA */}
        {!userData.isPro && (
          <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <FiZap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Upgrade to SEOWala Pro</h3>
                </div>
                <p className="text-zinc-400 mb-6 max-w-2xl text-lg">
                  Unlock unlimited chats, premium SEO tools, advanced AI
                  analytics, and priority support. Take your SEO game to the
                  next level.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Feature text="Unlimited Chats" />
                  <Feature text="Priority AI" />
                  <Feature text="Advanced Tools" />
                  <Feature text="24/7 Support" />
                  <Feature text="Team Collaboration" />
                  <Feature text="Custom Reports" />
                </div>
              </div>

              <button
                onClick={() => router.push("/upgrade")}
                className="flex items-center gap-2 px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold whitespace-nowrap"
              >
                Upgrade Now
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-sm text-zinc-400 mb-2 font-medium">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 py-4 border-b border-zinc-800 last:border-0">
    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400">
      {icon}
    </div>
    <div className="flex-1 flex items-center justify-between">
      <span className="text-zinc-400 font-medium">{label}</span>
      <span className="font-semibold text-right text-white">{value}</span>
    </div>
  </div>
);

const ActionButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between px-5 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
    <FiArrowRight className="w-5 h-5 text-zinc-400" />
  </button>
);

const Feature = ({ text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg border border-zinc-700">
    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
    <span className="text-sm font-medium text-zinc-300">{text}</span>
  </div>
);

export default DashboardPage;
