import { Search } from 'lucide-react'
import s from './home.module.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <main className={s.container}>
            <form>
                <input
                    placeholder='Enter the coin symbol: BTC...'
                />
                <button type='submit'>
                    <Search color='white'/>
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope='col'>Coin</th>
                        <th scope='col'>Market Value</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Volume</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={s.tr}>
                        <td className={s.tdLabel} data-label="Market">
                            <Link to="/detail/btc" className={s.link}>
                                <span >bitcoin</span> | BTC
                            </Link>
                        </td>
                        <td className={s.tdLabel} data-label="Market">
                            R$ 500.000,00
                        </td>
                        <td className={s.tdLabel} data-label="Price">
                            R$ 500.000,00
                        </td>
                        <td data-label="Volume">
                            <span>-5.3</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </main>
    )
}