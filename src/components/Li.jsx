function Li({ name, job, email }) {

  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  )
}

<Li 
  name="Oluwasetemi" 
  job="Software Engineer" 
  email="setemi@altschoolafrica.wonder" 
/>

export default Li;
