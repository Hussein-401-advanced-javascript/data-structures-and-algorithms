'use strict';
const Graph = require('./graph')
class GetEdg extends Graph {
    getEdge(arr) {
        const cost = 0;

        for (let i = arr.length - 1; i >= 0; i--) {

            if (this._adjancyList.has(arr[i])) {
                let neighbor = this._adjancyList.get(arr[i]);

                if (!neighbor.includes(arr[i - 1])) {
                    return 'False, 0$';
                }
            }
            cost = cost + this.weight;
        }
        return `True, ${cost}$`;

    }
}
module.exports = GetEdg; 