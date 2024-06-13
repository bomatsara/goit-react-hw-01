import css from './TransactionHistory.module.css';
import { firstLetterToUpper } from '../../js/utilities.js';

export default function TransactionHistory({ items }) {
    return (
        <table className={css['transaction-history']}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>

            {
                items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td>{firstLetterToUpper(type)}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}