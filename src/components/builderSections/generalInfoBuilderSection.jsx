import { useState } from 'react';
import '../../styles/inputSection.css';
import Card from '../card';
export default function GeneralInfoBuilderSection({
  generalInfo,
  handleChange,
  handleSubmit,
}) {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        {' '}
        <label>
          {' '}
          First Name:{' '}
          <input
            required
            type="text"
            name="firstName"
            value={generalInfo.firstName}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Last Name:{' '}
          <input
            required
            type="text"
            name="lastName"
            value={generalInfo.lastName}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Summary (optional):{' '}
          <textarea
            name="summary"
            value={generalInfo.summary}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Email:{' '}
          <input
            required
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Phone (optional):{' '}
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        {/* <label>
          {' '}
          GitHub URL:{' '}
          <input
            type="url"
            name="githubURL"
            value={generalInfo.githubURL}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Image URL:{' '}
          <input
            type="url"
            name="imageURL"
            value={generalInfo.imageURL}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          Personal Page URL:{' '}
          <input
            type="url"
            name="personalPageURL"
            value={generalInfo.personalPageURL}
            onChange={handleChange}
          />{' '}
        </label>{' '}
        <label>
          {' '}
          LinkedIn URL:{' '}
          <input
            type="url"
            name="linkedInURL"
            value={generalInfo.linkedInURL}
            onChange={handleChange}
          />{' '}
        </label>{' '} */}
        <button type="submit">Submit</button>{' '}
      </form>
    </Card>
  );
}
