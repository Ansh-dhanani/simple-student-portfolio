import { useState, useEffect, useCallback } from 'react'
import { Search, X, FlaskConical, Zap, RefreshCw } from 'lucide-react'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import RepoList from '../components/RepoList'

// Fallback demo repositories in case GitHub API rate limits the user's IP (HTTP 403)
const MOCK_FALLBACK_REPOS = [
    {
        id: 101,
        name: 'mikk-context-engine',
        html_url: 'https://github.com/anshdhanani/mikk',
        description: 'Deterministic AI Context Engine providing AST-aware context to AI coding agents.',
        stargazers_count: 42,
        forks_count: 12,
        language: 'TypeScript',
    },
    {
        id: 102,
        name: 'metis-hire-platform',
        html_url: 'https://github.com/anshdhanani/metis-hire',
        description: 'AI-driven recruitment and candidate screening platform built with React & Python.',
        stargazers_count: 28,
        forks_count: 7,
        language: 'Python',
    },
    {
        id: 103,
        name: 'civic-connect-app',
        html_url: 'https://github.com/anshdhanani/civic-connect',
        description: 'Community issue reporting and local government engagement web platform.',
        stargazers_count: 19,
        forks_count: 4,
        language: 'JavaScript',
    },
    {
        id: 104,
        name: 'student-portfolio-react',
        html_url: 'https://github.com/anshdhanani/simple-student-portfolio',
        description: 'Multi-route student portfolio showcasing REST API integration and async state handling in React.',
        stargazers_count: 15,
        forks_count: 3,
        language: 'JavaScript',
    }
]

function Projects() {
    // Required Practical 3 State variables
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Supplementary feature states
    const [searchTerm, setSearchTerm] = useState('')
    const [username, setUsername] = useState('anshdhanani')
    const [activeUser, setActiveUser] = useState('anshdhanani')
    const [breakApiUrl, setBreakApiUrl] = useState(false)
    const [isFallback, setIsFallback] = useState(false)

    // Function to perform REST API fetch
    const fetchRepos = useCallback((userToFetch = activeUser, isBroken = breakApiUrl) => {
        setLoading(true)
        setError(null)
        setIsFallback(false)

        // Intentionally broken URL if testing error path (Step 6 of practical assignment)
        const targetUrl = isBroken
            ? 'https://api.github.com/invalid-endpoint-for-testing-error-state'
            : `https://api.github.com/users/${encodeURIComponent(userToFetch || 'octocat')}/repos?sort=updated`

        fetch(targetUrl)
            .then((res) => {
                if (!res.ok) {
                    if (res.status === 403 && !isBroken) {
                        // Auto fallback on GitHub API rate limit for smooth user experience
                        setRepos(MOCK_FALLBACK_REPOS)
                        setIsFallback(true)
                        return null
                    }
                    throw new Error(`API Request failed with HTTP Status: ${res.status} (${res.statusText || 'Not Found'})`)
                }
                return res.json()
            })
            .then((data) => {
                if (data === null) return; // Handled by 403 fallback above
                if (Array.isArray(data)) {
                    setRepos(data)
                } else {
                    throw new Error(data.message || 'Invalid response format received from API')
                }
            })
            .catch((err) => {
                setError(err.message || 'Network error occurred while fetching repositories')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [activeUser, breakApiUrl])

    // Practical Requirement: useEffect to fetch data on component mount
    useEffect(() => {
        fetchRepos(activeUser, breakApiUrl)
    }, [activeUser, breakApiUrl, fetchRepos])

    // Handle user input submit
    const handleUserSubmit = (e) => {
        e.preventDefault()
        if (username.trim()) {
            setActiveUser(username.trim())
        }
    }

    // Filter repositories based on search term (Supplementary problem requirement)
    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="page projects-page">
            <section className="projects-header">
                <h1>Projects & Repositories</h1>
                <p className="tagline">
                    Live data fetched from public GitHub REST API (<code className="api-url">api.github.com</code>)
                </p>
            </section>

            {/* Lab Controls & Filter Bar */}
            <div className="controls-bar">
                <div className="search-box">
                    <Search size={16} className="search-icon" />
                    <input
                        type="text"
                        id="repo-search-input"
                        placeholder="Search repositories by name or topic..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button className="clear-search" onClick={() => setSearchTerm('')} aria-label="Clear search">
                            <X size={14} />
                        </button>
                    )}
                </div>

                <div className="user-controls">
                    <form onSubmit={handleUserSubmit} className="user-form">
                        <label htmlFor="username-input" className="user-label">
                            GitHub User:
                        </label>
                        <input
                            type="text"
                            id="username-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="e.g. octocat"
                            className="username-input"
                        />
                        <button type="submit" className="load-user-btn">
                            <RefreshCw size={13} />
                            <span>Fetch</span>
                        </button>
                    </form>

                    {/* Test Error Path Toggle (Lab Session Step 6) */}
                    <button
                        className={`test-error-btn ${breakApiUrl ? 'active' : ''}`}
                        onClick={() => setBreakApiUrl(!breakApiUrl)}
                        title="Simulate broken API URL to test error path"
                        id="test-error-toggle"
                    >
                        {breakApiUrl ? (
                            <>
                                <Zap size={14} />
                                <span>Restore API URL</span>
                            </>
                        ) : (
                            <>
                                <FlaskConical size={14} />
                                <span>Break API URL (Test Error)</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Conditional Rendering based on state */}
            <div className="content-area">
                {loading ? (
                    <Spinner message={`Fetching repositories for "${activeUser}"...`} />
                ) : error ? (
                    <ErrorMessage message={error} onRetry={() => fetchRepos(activeUser, breakApiUrl)} />
                ) : (
                    <>
                        <div className="results-info">
                            <span>
                                Showing <strong>{filteredRepos.length}</strong> of <strong>{repos.length}</strong> repositories
                            </span>
                            {searchTerm && <span> (filtered by "{searchTerm}")</span>}
                            {isFallback && (
                                <span className="fallback-badge" style={{ marginLeft: '8px' }}>
                                    (GitHub API Rate Limit exceeded — displaying sample repositories)
                                </span>
                            )}
                        </div>
                        <RepoList repos={filteredRepos} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Projects
