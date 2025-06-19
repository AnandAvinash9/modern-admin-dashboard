import React from 'react';
import { 
  LogOut, 
  TrendingUp, 
  Users, 
  Factory, 
  Globe, 
  Award, 
  BarChart3,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const stats = [
    { label: 'Annual Revenue', value: '₹2,27,000 Cr', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Employees', value: '80,000+', icon: Users, color: 'text-blue-600' },
    { label: 'Production Capacity', value: '34 MTPA', icon: Factory, color: 'text-purple-600' },
    { label: 'Countries', value: '26+', icon: Globe, color: 'text-orange-600' },
  ];

  const keyFacts = [
    'India\'s largest steel producer and among the top 10 global steel companies',
    'Operates in 26+ countries with commercial presence in over 50 countries',
    'Crude steel capacity of 34 million tonnes per annum (MTPA)',
    'Committed to achieving net-zero carbon emissions by 2045',
    'Pioneer in sustainable steel production with focus on green technologies',
    'Strong presence in automotive, construction, and infrastructure sectors'
  ];

  const locations = [
    { city: 'Mumbai', role: 'Headquarters', country: 'India' },
    { city: 'Jamshedpur', role: 'Steel Plant', country: 'India' },
    { city: 'Kalinganagar', role: 'Steel Plant', country: 'India' },
    { city: 'London', role: 'European Operations', country: 'UK' },
    { city: 'Singapore', role: 'Asian Operations', country: 'Singapore' },
    { city: 'Amsterdam', role: 'European Headquarters', country: 'Netherlands' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-900">Tata Steel</h1>
                <p className="text-sm text-gray-500">Company Dashboard</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 mb-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold mb-4">Tata Steel Limited</h2>
              <p className="text-xl opacity-90 mb-6 leading-relaxed">
                India's first integrated private sector steel company and one of the world's most geographically diversified steel producers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Founded 1907</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  <span className="font-semibold">BSE: TATASTEEL</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-90">Market Cap</span>
                    <span className="font-bold">₹1,50,000+ Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Founded</span>
                    <span className="font-bold">1907</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Headquarters</span>
                    <span className="font-bold">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Facts */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              Key Facts
            </h3>
            <div className="space-y-4">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              Global Presence
            </h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">{location.city}</h4>
                    <p className="text-sm text-gray-600">{location.role}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{location.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
{/* My Project Section */}
<div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
    <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
    My Project: Data Analysis for Supply Chain
  </h3>
  <p className="text-gray-700 leading-relaxed mb-4">
    This project focuses on leveraging data analytics techniques to enhance supply chain performance within Tata Steel. The objective is to identify inefficiencies, reduce costs, and improve delivery timelines by analyzing operational data across procurement, production, inventory, and distribution stages.
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>Implemented exploratory data analysis (EDA) to uncover patterns in historical shipment data.</li>
    <li>Used time series forecasting for demand planning and inventory optimization.</li>
    <li>Identified supplier bottlenecks using performance scorecards and trend charts.</li>
    <li>Developed interactive dashboards to monitor key supply chain KPIs in real-time.</li>
    <li>Recommended process automation in areas prone to manual delays using insights from data.</li>
  </ul>
</div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-50 rounded-lg mr-4">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Headquarters</h4>
                <p className="text-gray-600 text-sm">Bombay House, 24 Homi Mody Street, Mumbai - 400001</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-green-50 rounded-lg mr-4">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600 text-sm">+91 22 6665 8282</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-purple-50 rounded-lg mr-4">
                <ExternalLink className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Website</h4>
                <p className="text-gray-600 text-sm">www.tatasteel.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;