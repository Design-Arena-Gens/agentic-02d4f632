'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Coins, Users, Zap, Globe, Brain, Atom } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  balance: number;
  icon: any;
}

interface Reality {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface World {
  name: string;
  description: string;
  dimension: number;
  players: number;
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'worlds' | 'tokens' | 'avatar'>('overview');

  const tokens: Token[] = [
    { symbol: 'XFI', name: 'Governance', balance: 1250.50, icon: Sparkles },
    { symbol: 'REAL', name: 'Reality Energy', balance: 8750.25, icon: Zap },
    { symbol: 'TIME', name: 'Conscious Attention', balance: 432.00, icon: Globe },
    { symbol: 'SOUL', name: 'Reputation', balance: 89, icon: Brain },
  ];

  const realities: Reality[] = [
    { id: 1, name: 'Base Physical', type: 'Standard Physics', dimension: '1-12' },
    { id: 2, name: 'Expanded Consciousness', type: 'Higher Mind', dimension: '13-20' },
    { id: 3, name: 'Metacosmic', type: 'Pure Existence', dimension: '21-30' },
    { id: 4, name: 'Primordial', type: 'Pre-Cosmic Source', dimension: '31+' },
  ];

  const worlds: World[] = [
    { name: 'Aethelgard', description: 'Evolutionary RPG realm', dimension: 5, players: 12450 },
    { name: 'Veridia Prime', description: 'Symbiotic ecosystem', dimension: 8, players: 8920 },
    { name: 'Kiber Nexus', description: 'Hackable reality matrix', dimension: 15, players: 15670 },
  ];

  const [userLevel, setUserLevel] = useState(7);
  const [avatarTier, setAvatarTier] = useState('Quantum');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-cosmic-950 to-reality-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Atom className="w-20 h-20 text-cosmic-400" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient glow">XFI Ecosystem</span>
            </h1>

            <p className="text-xl md:text-2xl text-cosmic-200 mb-8 max-w-3xl mx-auto">
              Conscious Existence Metaverse spanning 30+ Interconnected Dimensions
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cosmic-500 to-reality-500 rounded-full font-semibold text-lg shadow-lg card-glow"
              >
                Enter Metaverse
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-cosmic-500"
              >
                Explore Dimensions
              </motion.button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Active Dimensions', value: '30+', icon: Layers },
                { label: 'Total Users', value: '37.2K', icon: Users },
                { label: 'XFI Market Cap', value: '$42M', icon: Coins },
                { label: 'Reality Layers', value: '∞', icon: Globe },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-cosmic-800 card-glow"
                >
                  <stat.icon className="w-6 h-6 text-cosmic-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cosmic-300">{stat.value}</div>
                  <div className="text-sm text-cosmic-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(['overview', 'worlds', 'tokens', 'avatar'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedTab === tab
                  ? 'bg-gradient-to-r from-cosmic-500 to-reality-500 text-white card-glow'
                  : 'bg-white/5 text-cosmic-300 hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Reality Layers */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cosmic-800">
                <h2 className="text-2xl font-bold mb-6 text-cosmic-300 flex items-center gap-2">
                  <Layers className="w-6 h-6" />
                  Reality Layers
                </h2>
                <div className="space-y-4">
                  {realities.map((reality, i) => (
                    <motion.div
                      key={reality.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 border border-cosmic-700 hover:border-cosmic-500 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-cosmic-200">{reality.name}</h3>
                        <span className="text-xs bg-reality-500/20 text-reality-300 px-2 py-1 rounded">
                          Dim {reality.dimension}
                        </span>
                      </div>
                      <p className="text-sm text-cosmic-400">{reality.type}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Economic Overview */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cosmic-800">
                <h2 className="text-2xl font-bold mb-6 text-cosmic-300 flex items-center gap-2">
                  <Coins className="w-6 h-6" />
                  Token Economics
                </h2>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cosmic-900/50 to-reality-900/50 rounded-lg p-4 border border-cosmic-700">
                    <div className="text-sm text-cosmic-400 mb-1">Annual Emission</div>
                    <div className="text-2xl font-bold text-cosmic-300">5% APY <span className="text-sm text-cosmic-500">(decreasing)</span></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-cosmic-700">
                      <div className="text-xs text-cosmic-400 mb-1">Burn Rate</div>
                      <div className="text-lg font-bold text-reality-400">1% + 50%</div>
                      <div className="text-xs text-cosmic-500">Tx + Fees</div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 border border-cosmic-700">
                      <div className="text-xs text-cosmic-400 mb-1">Staking APY</div>
                      <div className="text-lg font-bold text-cosmic-400">40%</div>
                      <div className="text-xs text-cosmic-500">of Emissions</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-cosmic-700">
                    <div className="text-sm text-cosmic-400 mb-2">Reward Distribution</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-cosmic-300">Stakers</span>
                        <span className="text-cosmic-400">40%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-cosmic-300">Creators</span>
                        <span className="text-cosmic-400">25%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-cosmic-300">Governance</span>
                        <span className="text-cosmic-400">20%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-cosmic-300">Development</span>
                        <span className="text-cosmic-400">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'worlds' && (
            <div className="grid md:grid-cols-3 gap-6">
              {worlds.map((world, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cosmic-800 hover:border-cosmic-500 transition-all cursor-pointer card-glow hover:scale-105"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-cosmic-600 to-reality-600 rounded-lg mb-4 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-white/80 animate-float" />
                  </div>
                  <h3 className="text-xl font-bold text-cosmic-200 mb-2">{world.name}</h3>
                  <p className="text-sm text-cosmic-400 mb-4">{world.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cosmic-500">Dimension {world.dimension}</span>
                    <span className="text-reality-400 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {world.players.toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cosmic-500 to-reality-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Enter World
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {selectedTab === 'tokens' && (
            <div className="grid md:grid-cols-2 gap-6">
              {tokens.map((token, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cosmic-800"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cosmic-500 to-reality-500 rounded-full flex items-center justify-center">
                      <token.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cosmic-200">{token.symbol}</h3>
                      <p className="text-sm text-cosmic-400">{token.name}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-4 border border-cosmic-700">
                    <div className="text-sm text-cosmic-400 mb-1">Balance</div>
                    <div className="text-3xl font-bold text-cosmic-300">
                      {token.balance.toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-2 bg-cosmic-500 rounded-lg font-semibold hover:bg-cosmic-600 transition-colors">
                      Send
                    </button>
                    <button className="px-4 py-2 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                      Stake
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {selectedTab === 'avatar' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-cosmic-800">
                <div className="text-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 bg-gradient-to-br from-cosmic-500 via-reality-500 to-cosmic-700 rounded-full mx-auto mb-4 flex items-center justify-center card-glow"
                  >
                    <Brain className="w-16 h-16 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-cosmic-200 mb-2">{avatarTier} Avatar</h2>
                  <p className="text-cosmic-400">Level {userLevel} Consciousness Explorer</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 rounded-lg p-4 border border-cosmic-700">
                    <h3 className="text-lg font-semibold text-cosmic-300 mb-3">Progression</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-cosmic-400">Experience</span>
                          <span className="text-cosmic-300">7,250 / 10,000</span>
                        </div>
                        <div className="w-full bg-cosmic-900 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cosmic-500 to-reality-500 h-2 rounded-full" style={{ width: '72.5%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-cosmic-400">Consciousness</span>
                          <span className="text-cosmic-300">Level {userLevel}</span>
                        </div>
                        <div className="w-full bg-cosmic-900 rounded-full h-2">
                          <div className="bg-gradient-to-r from-reality-500 to-cosmic-500 h-2 rounded-full" style={{ width: `${userLevel * 10}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border border-cosmic-700">
                    <h3 className="text-lg font-semibold text-cosmic-300 mb-3">Abilities</h3>
                    <div className="space-y-2">
                      {['Dimensional Travel', 'Reality Manipulation', 'Quantum Entanglement', 'Neural Sync'].map((ability, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Sparkles className="w-4 h-4 text-reality-400" />
                          <span className="text-cosmic-300">{ability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cosmic-900/50 to-reality-900/50 rounded-lg p-6 border border-cosmic-700">
                  <h3 className="text-lg font-semibold text-cosmic-300 mb-4">Avatar Tiers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'Basic', cost: 'Free' },
                      { name: 'Quantum', cost: '100 XFI' },
                      { name: 'Transcendent', cost: '500 XFI' },
                      { name: 'Cosmic', cost: '2000 XFI' },
                    ].map((tier, i) => (
                      <div
                        key={i}
                        className={`bg-white/5 rounded-lg p-3 border text-center transition-all cursor-pointer ${
                          tier.name === avatarTier
                            ? 'border-cosmic-400 card-glow'
                            : 'border-cosmic-700 hover:border-cosmic-500'
                        }`}
                      >
                        <div className="text-sm font-semibold text-cosmic-200">{tier.name}</div>
                        <div className="text-xs text-cosmic-400 mt-1">{tier.cost}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 border-t border-cosmic-800">
        <div className="text-center text-cosmic-500">
          <p className="mb-2">XFI Ecosystem - Conscious Existence Metaverse</p>
          <p className="text-sm">30+ Dimensions • Neural Immersion • Tokenized Reality</p>
        </div>
      </footer>
    </div>
  );
}
