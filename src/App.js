import Lottoball from './Lottoball';
import Lottodraw from './Lottodraw';

function App() {
    return (
        <div>
            <Lottodraw title="4/10 Mini Lottery" maxBalls={4} maxNum={10} />
            <Lottodraw title="5/55 Grand Lottery" maxBalls={5} maxNum={55} />
        </div>
    );
}

export default App;
