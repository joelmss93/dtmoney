import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  useEffect (() => {
    api.get('/transactions')
      .then(data => console.log(data));

  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>16/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$800</td>
            <td>Casa</td>
            <td>14/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}