export const johnDoe = {
  generalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    summary:
      'A passionate software developer with experience in building web applications.',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    githubURL: 'https://github.com/johndoe',
    imageURL: 'https://example.com/johndoe.jpg',
    personalPageURL: 'https://johndoe.com',
    linkedInURL: 'https://linkedin.com/in/johndoe',
  },
  education: [
    {
      id: 0,
      school: 'Springfield High School',
      degree: 'High School Diploma',
      from: new Date(1997, 8, 1).toJSON(),
      to: new Date(2001, 5, 15).toJSON(),
      city: 'Springfield',
      state: 'IL',
    },
    {
      id: 1,
      school: 'State University',
      degree: 'Bachelors',
      from: new Date(2001, 8, 25).toJSON(),
      to: new Date(2005, 5, 20).toJSON(),
      city: 'Metropolis',
      state: 'NY',
    },
    {
      id: 2,
      school: 'Tech Institute',
      degree: 'Masters',
      from: new Date(2006, 8, 1).toJSON(),
      to: new Date(2008, 5, 15).toJSON(),
      city: 'Techville',
      state: 'CA',
    },
  ],
  work: [
    {
      id: 0,
      position: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      from: new Date(2006, 8, 1).toJSON(),
      to: new Date(2008, 5, 15).toJSON(),
      state: 'CA',
      city: 'San Francisco',
      accomplishments: [
        'Developed and maintained web applications using JavaScript, HTML, and CSS.',
        'Collaborated with cross-functional teams to design and implement new features.',
        'Optimized application performance, reducing load times by 30%.',
      ],
    },
    {
      id: 1,
      position: 'Senior Developer',
      company: 'Innovatech Corp.',
      from: new Date(2008, 6, 1).toJSON(),
      to: new Date(2012, 5, 15).toJSON(),
      state: 'NY',
      city: 'New York',
      accomplishments: [
        'Led a team of developers to create scalable web applications.',
        'Implemented RESTful APIs to enhance application functionality.',
        'Mentored junior developers and conducted code reviews to ensure code quality.',
      ],
    },
  ],
};
