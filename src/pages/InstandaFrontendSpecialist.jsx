import { motion } from "framer-motion";

const InstandaFrontendSpecialist = () => {
  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-secondary-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 z-10 py-20">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Frontend Specialist for </span>
                <span className="text-primary">Instanda-based</span>
                <span className="text-white"> Insurance Platforms</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-white max-w-3xl">
                Building custom agent portals, optimizing quote-to-bind flows,
                and enhancing user experience—without touching your Instanda
                core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-semibold rounded-md transition-colors text-lg"
              >
                Improve Your Instanda Frontend
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary">Where Instanda</span> Frontends
              Fall Short
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Limited UI Flexibility
              </h3>
              <p className="text-white">
                The default Instanda UI templates offer limited customization
                options. Brand consistency and modern design expectations are
                hard to achieve within the platform's constraints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Poor UX in Quote-to-Bind Flows
              </h3>
              <p className="text-white">
                Complex insurance journeys often feel clunky. Multi-step forms,
                validation errors, and navigation issues reduce conversion rates
                and frustrate potential customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Outdated Agent Portals
              </h3>
              <p className="text-white">
                Agent and broker portals built with default Instanda components
                can feel outdated. Modern workflows, better data visualization,
                and improved usability are difficult to implement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Difficult Customization
              </h3>
              <p className="text-white">
                Making significant UI changes often requires modifying the core
                platform, risking stability and future updates. There's a better
                way to achieve the frontend you need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Custom Frontend Layers{" "}
              <span className="text-primary">on Top of Instanda</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-lg text-white mb-6 leading-relaxed">
                Instead of modifying Instanda's core, I build custom frontend
                applications that connect to your platform via APIs. This
                headless approach gives you complete control over the user
                experience while keeping your core platform untouched.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  No Core Changes
                </h3>
                <p className="text-white text-sm">
                  Your Instanda core remains unchanged. No risk to stability or
                  future updates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Faster Iteration
                </h3>
                <p className="text-white text-sm">
                  Frontend changes deploy independently. No core platform
                  dependencies or release cycles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">🎨</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Better UX
                </h3>
                <p className="text-white text-sm">
                  Complete design freedom. Modern interfaces optimized for
                  conversion and user satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary">Proven Instanda</span> Experience
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-8 rounded-lg mb-6"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Working with Instanda Since 2020
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                I've been building frontend solutions on top of Instanda for
                over 4 years. This deep platform knowledge means I understand
                the APIs, workflows, and common challenges insurance companies
                face.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Real-World Results
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                The{" "}
                <a
                  href="https://agent.pouchinsurance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Pouch Agent Platform
                </a>{" "}
                is a production example of this approach. Built as a custom
                frontend layer on Instanda, it provides agents with a modern,
                efficient interface for policy management and client tracking.
              </p>
              <p className="text-white leading-relaxed">
                I've also worked on multiple insurance products, agent portals,
                and quote-to-bind journeys—all leveraging Instanda's robust
                backend while delivering superior frontend experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary">Common Use Cases</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Agent & Broker Portals
              </h3>
              <p className="text-white">
                Custom interfaces for agents to manage policies, track clients,
                generate quotes, and process bind requests. Modern workflows
                that improve productivity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Customer Quote-to-Bind Journeys
              </h3>
              <p className="text-white">
                Optimized consumer-facing flows for getting quotes, comparing
                options, and completing purchases. Designed to reduce friction
                and increase conversion rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Product Landing Pages
              </h3>
              <p className="text-white">
                Marketing pages that connect to Instanda for quote requests and
                lead generation. Seamless integration with your platform's APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                Conversion Optimization
              </h3>
              <p className="text-white">
                Analyzing and improving existing Instanda frontends. A/B
                testing, UX improvements, and performance optimization to boost
                key metrics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section id="why" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Work <span className="text-primary">With Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Deep Platform Knowledge
                </h3>
                <p className="text-white">
                  4+ years of hands-on experience with Instanda. I understand
                  the APIs, data models, and common integration patterns. No
                  learning curve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Faster Delivery
                </h3>
                <p className="text-white">
                  Proven architecture patterns and reusable components mean
                  projects move quickly. You'll see working prototypes faster
                  than starting from scratch.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Insurance Workflow Understanding
                </h3>
                <p className="text-white">
                  Beyond just frontend code, I understand insurance business
                  processes: underwriting, policy management, claims, and agent
                  workflows. This context leads to better solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  No Core Platform Risk
                </h3>
                <p className="text-white">
                  My approach keeps your Instanda core untouched. Your platform
                  remains stable, updatable, and compliant—while your frontend
                  gets the improvements it needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Improve Your{" "}
              <span className="text-primary">Instanda Frontend</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Ready to enhance your insurance platform's frontend? Let's discuss
              your specific needs and how a custom frontend layer can improve
              conversion rates, user experience, and agent productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Luishenriquezj007@gmail.com"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-semibold rounded-md transition-colors text-lg"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-md transition-colors text-lg"
              >
                View Portfolio
              </a>
            </div>
            <p className="text-white mt-8 text-sm">
              Email:{" "}
              <a
                href="mailto:Luishenriquezj007@gmail.com"
                className="text-primary hover:underline"
              >
                Luishenriquezj007@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InstandaFrontendSpecialist;
