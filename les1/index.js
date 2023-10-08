import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import _ from 'lodash'

let res = format(new Date(), "'Today is a' eeee")

console.log(res);

const myList = [
    1,
    2,
    3,
    4,
    5
]

const newArr = _.chunk(myList, 3)

console.log(newArr);
