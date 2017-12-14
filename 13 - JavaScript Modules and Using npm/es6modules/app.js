import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1, 2, 4, 2, 4, 6, 48];

console.log(uniq(ages));
