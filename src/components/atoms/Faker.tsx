import { faker } from '@faker-js/faker';

export default function FakerEg() {
  return (
    <>
      <p>
        <b>Faker dummy data</b>
      </p>
      <p>
        {' '}
        Faker Name -
        {faker.person.fullName()}
      </p>
      <p>
        {' '}
        Faker  Email -
        {faker.internet.email()}
      </p>
      <p>
        Faker Airline -
        {faker.airline.airline().name}
      </p>
    </>
  );
}
