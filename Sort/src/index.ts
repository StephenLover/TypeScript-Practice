import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([100, 3, -5, 0])
const charactersCollection = new CharactersCollection('bvXyaa')

// const sorter = new Sorter(numbersCollection);


const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()





