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
      school: 'Springfield High School',
      degree: 'High School Diploma',
      from: new Date(1997, 8, 1).toJSON(),
      to: new Date(2001, 5, 15).toJSON(),
      city: 'Springfield',
      state: 'IL',
    },
    {
      school: 'State University',
      degree: 'Bachelors',
      from: new Date(2001, 8, 25).toJSON(),
      to: new Date(2005, 5, 20).toJSON(),
      city: 'Metropolis',
      state: 'NY',
    },
    {
      school: 'Tech Institute',
      degree: 'Masters',
      from: new Date(2006, 8, 1).toJSON(),
      to: new Date(2008, 5, 15).toJSON(),
      city: 'Techville',
      state: 'CA',
    },
  ],
};
