import { motion } from "framer-motion";
import { useTranslation } from "../contexts/LanguageContext";
import Layout from "../components/layout/Layout";

const InstandaFrontendSpecialist = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen bg-secondary text-white">

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-secondary-dark pt-24">
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
                <span className="text-white">{t("instanda.heroTitle")} </span>
                <span className="text-primary">
                  {t("instanda.heroTitleHighlight")}
                </span>
                {t("instanda.heroTitleEnd") && (
                  <span className="text-white">
                    {" "}
                    {t("instanda.heroTitleEnd")}
                  </span>
                )}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-white max-w-3xl">
                {t("instanda.heroSubtitle")}
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
                {t("instanda.heroCta")}
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
              <span className="text-primary">
                {t("instanda.problemTitle")}
              </span>{" "}
              {t("instanda.problemTitleEnd")}
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
                {t("instanda.problem1Title")}
              </h3>
              <p className="text-white">{t("instanda.problem1Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t("instanda.problem2Title")}
              </h3>
              <p className="text-white">{t("instanda.problem2Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t("instanda.problem3Title")}
              </h3>
              <p className="text-white">{t("instanda.problem3Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary-light p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t("instanda.problem4Title")}
              </h3>
              <p className="text-white">{t("instanda.problem4Text")}</p>
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
              {t("instanda.solutionTitle")}{" "}
              <span className="text-primary">
                {t("instanda.solutionTitleEnd")}
              </span>
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
                {t("instanda.solutionText")}
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
                  {t("instanda.solution1Title")}
                </h3>
                <p className="text-white text-sm">
                  {t("instanda.solution1Text")}
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
                  {t("instanda.solution2Title")}
                </h3>
                <p className="text-white text-sm">
                  {t("instanda.solution2Text")}
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
                  {t("instanda.solution3Title")}
                </h3>
                <p className="text-white text-sm">
                  {t("instanda.solution3Text")}
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
              <span className="text-primary">
                {t("instanda.experienceTitle")}
              </span>{" "}
              {t("instanda.experienceTitleEnd")}
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
                {t("instanda.experience1Title")}
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                {t("instanda.experience1Text")}
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
                {t("instanda.experience2Title")}
              </h3>
              <p className="text-white mb-4 leading-relaxed">
                <a
                  href="https://agent.pouchinsurance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Pouch Agent Platform
                </a>{" "}
                {t("instanda.experience2Text")}
              </p>
              <p className="text-white leading-relaxed">
                {t("instanda.experience2Text2")}
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
              <span className="text-primary">{t("instanda.useCasesTitle")}</span>
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
                {t("instanda.useCase1Title")}
              </h3>
              <p className="text-white">{t("instanda.useCase1Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("instanda.useCase2Title")}
              </h3>
              <p className="text-white">{t("instanda.useCase2Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("instanda.useCase3Title")}
              </h3>
              <p className="text-white">{t("instanda.useCase3Text")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("instanda.useCase4Title")}
              </h3>
              <p className="text-white">{t("instanda.useCase4Text")}</p>
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
              {t("instanda.whyTitle")}{" "}
              <span className="text-primary">{t("instanda.whyTitleEnd")}</span>
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
                  {t("instanda.why1Title")}
                </h3>
                <p className="text-white">{t("instanda.why1Text")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t("instanda.why2Title")}
                </h3>
                <p className="text-white">{t("instanda.why2Text")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t("instanda.why3Title")}
                </h3>
                <p className="text-white">{t("instanda.why3Text")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-secondary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {t("instanda.why4Title")}
                </h3>
                <p className="text-white">{t("instanda.why4Text")}</p>
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
              {t("instanda.ctaTitle")}{" "}
              <span className="text-primary">{t("instanda.ctaTitleEnd")}</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-white mb-8 leading-relaxed">
              {t("instanda.ctaText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Luishenriquezj007@gmail.com"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-secondary font-semibold rounded-md transition-colors text-lg"
              >
                {t("instanda.ctaButton")}
              </a>
              <a
                href="/"
                className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-md transition-colors text-lg"
              >
                {t("instanda.ctaButton2")}
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
    </Layout>
  );
};

export default InstandaFrontendSpecialist;
