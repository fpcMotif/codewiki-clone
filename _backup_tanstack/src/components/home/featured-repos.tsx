import { StarIcon } from "@/components/icons/star-icon";

type Repository = {
  name: string;
  url: string;
  description: string;
  descriptionKey: string;
  stars: string;
};

const REPOSITORIES: Repository[] = [
  {
    name: "gemini-cli",
    url: "https://codewiki.google/github.com/google-gemini/gemini-cli",
    description:
      "An open-source AI agent that brings Gemini's powerful capabilities directly to your terminal.",
    descriptionKey: "featured.geminiCli.description",
    stars: "81.5k",
  },
  {
    name: "go",
    url: "https://codewiki.google/github.com/golang/go",
    description: "Go programming language",
    descriptionKey: "featured.go.description",
    stars: "130.7k",
  },
  {
    name: "flutter",
    url: "https://codewiki.google/github.com/flutter/flutter",
    description:
      "Flutter makes it simple to build beautiful, fast mobile and cross-platform apps",
    descriptionKey: "featured.flutter.description",
    stars: "173.7k",
  },
  {
    name: "kubernetes",
    url: "https://codewiki.google/github.com/kubernetes/kubernetes",
    description: "Production-grade container scheduling and management",
    descriptionKey: "featured.kubernetes.description",
    stars: "118.4k",
  },
  {
    name: "react",
    url: "https://codewiki.google/github.com/facebook/react",
    description: "A library for building user interfaces for web and native",
    descriptionKey: "featured.react.description",
    stars: "240.3k",
  },
  {
    name: "python-sdk",
    url: "https://codewiki.google/github.com/modelcontextprotocol/python-sdk",
    description:
      "Official Python SDK for Model Context Protocol servers and clients",
    descriptionKey: "featured.pythonSdk.description",
    stars: "19.8k",
  },
];

export function FeaturedRepos() {
  return (
    <section className="featured-section">
      <h2 data-i18n="featured.title">Featured Repositories</h2>
      <div className="repositories-grid">
        {REPOSITORIES.map((repo) => (
          <a className="repo-card shine" href={repo.url} key={repo.name}>
            <div className="repo-content">
              <div className="repo-header">
                <h3>{repo.name}</h3>
              </div>
              <p className="repo-description">
                <span data-i18n={repo.descriptionKey}>{repo.description}</span>
              </p>
              <span className="star-count">
                <StarIcon />
                {repo.stars}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
