import React from 'react'
import { FolderGit2, Star, GitFork, ExternalLink } from 'lucide-react'

function RepoList({ repos }) {
    if (!repos || repos.length === 0) {
        return (
            <div className="no-repos">
                <p>No repositories found matching your query.</p>
            </div>
        )
    }

    return (
        <div className="repo-grid" id="repo-list">
            {repos.map((repo) => (
                <div key={repo.id || repo.name} className="repo-card">
                    <div className="repo-header">
                        <h3 className="repo-name">
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-title-link">
                                <FolderGit2 size={18} className="repo-title-icon" />
                                <span>{repo.name}</span>
                            </a>
                        </h3>
                        <span className="repo-stars" title="Stars">
                            <Star size={14} className="star-icon" />
                            <span>{repo.stargazers_count ?? 0}</span>
                        </span>
                    </div>

                    {repo.description && (
                        <p className="repo-description">{repo.description}</p>
                    )}

                    <div className="repo-footer">
                        {repo.language && (
                            <span className="repo-lang-badge">
                                <span className="lang-dot"></span>
                                {repo.language}
                            </span>
                        )}
                        <span className="repo-meta-item">
                            <GitFork size={14} className="fork-icon" />
                            <span>{repo.forks_count ?? 0} forks</span>
                        </span>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="repo-link-btn"
                        >
                            <span>View on GitHub</span>
                            <ExternalLink size={13} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RepoList
