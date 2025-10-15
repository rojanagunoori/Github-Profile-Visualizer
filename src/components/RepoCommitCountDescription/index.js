import './index.css'

const RepoCommitCountDescription = props => {
  const {description, repoCommitCountDescriptions} = props

  return (
    <li className="repoCommitDescriptionItem">
      <p data-testid="repoName" className="repoName">
        {description}
      </p>
      <p className="commitCount">{repoCommitCountDescriptions[description]}</p>
    </li>
  )
}
export default RepoCommitCountDescription
