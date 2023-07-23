import React from 'react';
import Fuse from 'fuse.js';

const SCORE_THRESHOLD = 0.4;

function useSearch (dataSet, Keys) {
    const [searchValue, setSearchValue] = React.useState('');
    const fuse = React.useMemo(() => {
        const options = {includeScore: true, Keys}
        return new Fuse(dataSet, options)
    }, [dataSet, Keys])
    const filteredTodos = React.useMemo(() => {
        if (!searchValue) {
            return dataSet;
        }
        const filterResults = fuse.search(searchValue);
        return filterResults
            .filter((fuseResult) => fuseResult.score < SCORE_THRESHOLD)
            .map((fuseResult) => fuseResult.item)
    }, [fuse, searchValue, dataSet]);

    return {filteredTodos, searchValue, setSearchValue};
}

export {useSearch};