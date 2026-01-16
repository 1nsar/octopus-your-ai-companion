import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Brain, Link2, Sparkles, FileText, Zap, CheckCircle2, Eye, Shield, Cpu, Network } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 20,
    delay: Math.random() * 5
  }));

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background with Particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-600/30 via-cyan-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/20 via-orange-600/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Mouse Follower Glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none -z-5 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <Brain className="w-6 h-6 text-purple-400" />
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-400/30 blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Octopus AI</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="sm" className="text-white hover:text-purple-400 hover:bg-white/10">
              Sign In
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 tracking-tight relative">
              <motion.span
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Your AI Second Brain.
              </motion.span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            Octopus analyzes your day across apps, understands what matters, and reports key insights automatically.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative">Join Waitlist</span>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-white">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        {[
          { Icon: Sparkles, delay: 0, x: "10%", y: "20%", color: "text-yellow-400" },
          { Icon: Brain, delay: 1, x: "85%", y: "70%", color: "text-purple-400" },
          { Icon: Zap, delay: 0.5, x: "15%", y: "80%", color: "text-cyan-400" },
          { Icon: Eye, delay: 1.5, x: "90%", y: "30%", color: "text-pink-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
            className={`absolute ${item.color} opacity-20`}
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon className="w-8 h-8" />
            <motion.div
              className={`absolute inset-0 blur-xl ${item.color.replace('text-', 'bg-')}`}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay
              }}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Link2, title: "Connect", description: "Octopus integrates with your apps and devices to observe your digital activity.", color: "from-blue-500 to-cyan-500", glow: "blue" },
              { icon: Brain, title: "Analyze", description: "It processes patterns, priorities, and context across everything you do.", color: "from-purple-500 to-pink-500", glow: "purple" },
              { icon: FileText, title: "Report", description: "You receive a concise daily brief of what actually matters.", color: "from-orange-500 to-red-500", glow: "orange" },
              { icon: Zap, title: "Reason", description: "It anticipates needs and surfaces insights before you ask.", color: "from-green-500 to-emerald-500", glow: "green" }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                className="text-center group cursor-pointer relative"
              >
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-xl blur-xl"
                  animate={{
                    opacity: hoveredStep === index ? 0.3 : 0,
                    scale: hoveredStep === index ? 1.1 : 1
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl relative`}
                >
                  <step.icon className="w-8 h-8 relative z-10" />
                  <motion.div
                    className={`absolute inset-0 bg-${step.glow}-500/50 rounded-2xl blur-xl`}
                    animate={{
                      scale: hoveredStep === index ? [1, 1.5, 1] : 1,
                      opacity: hoveredStep === index ? [0.5, 0.8, 0.5] : 0.3
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: hoveredStep === index ? Infinity : 0,
                    }}
                  />
                </motion.div>
                <motion.h3
                  animate={{ 
                    scale: hoveredStep === index ? 1.05 : 1,
                    color: hoveredStep === index ? "#fff" : "#e5e7eb"
                  }}
                  className="mb-2"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  animate={{ 
                    opacity: hoveredStep === index ? 1 : 0.6,
                    y: hoveredStep === index ? -2 : 0
                  }}
                  className="text-gray-400"
                >
                  {step.description}
                </motion.p>
                
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-sm shadow-lg"
                  animate={{
                    rotate: hoveredStep === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
      </section>

      {/* Example Experience */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Example Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            boxShadow: "0 0 60px rgba(139,92,246,0.3)",
            scale: 1.02
          }}
          className="border border-purple-500/30 rounded-2xl p-8 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl relative overflow-hidden backdrop-blur-sm"
        >
          {/* Animated gradient border effect */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-30"
            style={{
              background: "conic-gradient(from 0deg, transparent, #8b5cf6, transparent, #ec4899, transparent)"
            }}
          />
          
          {/* Corner Accents */}
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 }
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-2xl"
              style={pos}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <motion.p 
                className="text-gray-400 mb-4 flex items-center gap-2"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                Today, 7:24 AM
              </motion.p>
              <p className="text-2xl mb-6 text-white">Good morning, Salama — here's your day…</p>
            </motion.div>
            <div className="space-y-4">
              {[
                { text: "Your 2pm with investors moved to 4pm. Calendar updated, deck is ready.", icon: CheckCircle2, color: "text-green-400" },
                { text: "Engineering shipped the auth bug fix last night — 3 customer tickets auto-resolved.", icon: CheckCircle2, color: "text-blue-400" },
                { text: "Revenue is up 4% week-over-week. Sarah's onboarding email drove most conversions.", icon: CheckCircle2, color: "text-purple-400" },
                { text: "You have 2 unread messages from Marc — one about the fundraise timeline.", icon: CheckCircle2, color: "text-pink-400" },
                { text: "Recommended focus block: 10am–12pm. No meetings, highest energy window.", icon: CheckCircle2, color: "text-cyan-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    x: 10, 
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "8px"
                  }}
                  className="flex items-start gap-3 p-2 -ml-2 cursor-pointer group"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 2, delay: index * 0.2, ease: "easeInOut" },
                      scale: { duration: 1, repeat: Infinity, repeatDelay: 3 }
                    }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-gray-400 italic text-xl"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
            }}
          >
            Not reminders. Awareness.
          </motion.span>
        </motion.p>
      </section>

      {/* Why Octopus */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Why Octopus
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12"
          >
            {[
              { name: "Rewind", action: "Remembers", scale: 0.95, icon: Cpu },
              { name: "Copilot", action: "Assists", scale: 0.98, icon: Network },
              { name: "Octopus", action: "Understands", scale: 1.05, icon: Brain }
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: product.scale, 
                  y: -10,
                  rotateY: 5,
                }}
                className={`text-center p-8 rounded-2xl flex-1 relative overflow-hidden ${
                  product.name === "Octopus" 
                    ? "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50" 
                    : "bg-white/5 border border-white/10 backdrop-blur-sm"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {product.name === "Octopus" && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-cyan-400/20"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    />
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity
                      }}
                    />
                  </>
                )}
                
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotateX: product.name === "Octopus" ? [0, 5, 0] : 0
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: product.name === "Octopus" ? 360 : 0,
                      scale: product.name === "Octopus" ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="mb-4 inline-block"
                  >
                    <product.icon className={`w-12 h-12 mx-auto ${product.name === "Octopus" ? "text-white" : "text-gray-400"}`} />
                  </motion.div>
                  <p className={`mb-3 text-sm ${product.name === "Octopus" ? "text-purple-200" : "text-gray-500"}`}>
                    {product.name}
                  </p>
                  <p className={`text-2xl ${product.name === "Octopus" ? "" : "text-gray-300"}`}>
                    {product.action}
                  </p>
                </motion.div>

                {product.name === "Octopus" && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-xl text-gray-400 max-w-2xl mx-auto"
          >
            From memory and execution to{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              true awareness
            </motion.span>
            .
          </motion.p>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6 relative"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Shield className="w-16 h-16 text-green-400 mx-auto" />
            <motion.div
              className="absolute inset-0 bg-green-400/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
          <h2 className="text-3xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Privacy & Trust
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Your data stays yours. Octopus processes{" "}
            <motion.span
              className="text-green-400"
              animate={{
                textShadow: [
                  "0 0 10px rgba(74,222,128,0.5)",
                  "0 0 20px rgba(74,222,128,0.8)",
                  "0 0 10px rgba(74,222,128,0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              privately
            </motion.span>
            {" "}— always.
          </motion.p>
        </motion.div>
      </section>

      {/* Join Waitlist */}
      <section className="bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 py-24 relative overflow-hidden border-y border-white/10">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />

        {/* Orbiting Elements */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/20 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: `${100 + i * 50}px 0px`,
            }}
          />
        ))}

        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Join Waitlist
          </motion.h2>
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-6 max-w-md mx-auto"
            >
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm h-12 focus:bg-white/20 focus:border-purple-400 transition-all"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <span className="relative">Join</span>
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-6 relative"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  delay: 0.2 
                }}
                className="relative inline-block"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-4" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-green-400/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl mb-2"
              >
                You're on the list.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400"
              >
                We'll be in touch soon.
              </motion.p>
            </motion.div>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-400"
          >
            Backed by ex-YC engineers and AI researchers.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-12 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-6 h-6 text-purple-400" />
              <span className="text-gray-400">Octopus AI</span>
            </motion.div>
            <div className="flex gap-6 text-gray-400">
              {["About", "Blog", "Careers", "Contact"].map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-500">
            <p>© 2025 Octopus AI. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
