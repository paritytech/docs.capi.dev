import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React from "react"
import styles from "./index.module.css"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title} Landing`} description="Capi documentation">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/introduction">
              Quick Start
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {HIGHLIGHTS.map(({ title, description }) => (
                <div key={title} className={clsx("col col--4")}>
                  <div className="text--left padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

const HIGHLIGHTS: { title: string; description: JSX.Element }[] = [
  {
    title: "Multichain",
    description: (
      <>
        Compose interactions spanning many chains within the same script. The breath of the
        paraverse is yours to recombine in new and interesting ways!
      </>
    ),
  },
  {
    title: "Extraordinary Typings",
    description: (
      <>
        Both the dynamic and codegened, chain-specific APIs are typed as narrowly as possible. We've
        even gone so far as to encode error type information.
      </>
    ),
  },
  {
    title: "Composable",
    description: (
      <>
        Capi's approach to composition ("Rune") enables the creation of high-level pattern
        libraries, which abstract over complex protocols.
      </>
    ),
  },
]
