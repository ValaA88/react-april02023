import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Customers() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  useEffect(() => {
    const url = 'http://localhost:8000/api/customers/' + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return setCustomer(data.customer);
      });
  }, []);
  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <Link to="/customers">Go Back</Link>
    </>
  );
}
