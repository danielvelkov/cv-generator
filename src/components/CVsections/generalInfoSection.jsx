export default function GeneralInfoSection({
  firstName,
  lastName,
  summary,
  email,
  phone,
  githubURL,
  linkedInURL,
  personalPageURL,
  // imageURL,
}) {
  if (!firstName && !lastName) return <></>;
  const fullName = firstName + ' ' + lastName;
  return (
    <>
      <h1>{fullName}</h1>
      {summary && <p className="summary">{summary}</p>}
      <ul className="contact-options">
        {email && (
          <li>
            <i className="fa fa-envelope"></i> Email:
            <a href={'mailto:' + email}> {email}</a>
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> Phone: {phone}
          </li>
        )}
        {githubURL && (
          <li>
            <i className="fab fa-github"></i> Github:
            <a href={githubURL}> {githubURL.split('/').at(-1)}</a>
          </li>
        )}
        {linkedInURL && (
          <li>
            <i className="fab fa-linkedin"></i> LinkedIn:
            <a href={linkedInURL}>
              {' '}
              {linkedInURL.split('/').at(-1).replace(/\d/g, '')}
            </a>
          </li>
        )}
        {personalPageURL && (
          <li>
            <i className="fa fa-globe"></i> Personal Page:
            <a href={personalPageURL}> {personalPageURL}</a>
          </li>
        )}
      </ul>
    </>
  );
}
